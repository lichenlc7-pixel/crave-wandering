/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Info, ChefHat } from 'lucide-react';
import { ALL_FOODS, INITIAL_CENTER, getNeighbors, getDishesByIngredient } from './constants';
import { FoodItem, MapState, MapLevel } from './types';

export default function App() {
  const [state, setState] = useState<MapState>({
    level: MapLevel.EXPLORATION,
    centerDish: INITIAL_CENTER,
    neighbors: getNeighbors(INITIAL_CENTER),
    theme: '今日食欲地图',
    isGenerating: false,
  });

  const [inputValue, setInputValue] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle ingredient click (Level 2 -> Level 3)
  const handleIngredientClick = useCallback((ingredient: string) => {
    if (state.isGenerating) return;
    
    setState(prev => ({ ...prev, isGenerating: true }));
    
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        level: MapLevel.INGREDIENT_PIVOT,
        focusedIngredient: ingredient,
        neighbors: getDishesByIngredient(ingredient),
        theme: `关于 ${ingredient} 的美味探索`,
        isGenerating: false,
      }));
    }, 600);
  }, [state.isGenerating]);

  // Handle dish click in Pivot (Level 3 -> Level 2)
  const handlePivotDishClick = useCallback((item: FoodItem) => {
     if (state.isGenerating) return;
    
    setState(prev => ({ ...prev, isGenerating: true }));
    
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        level: MapLevel.DEEP_DIVE,
        centerDish: item,
        theme: item.name,
        isGenerating: false,
      }));
    }, 600);
  }, [state.isGenerating]);

  // Handle node click (Level 1 -> Level 2)
  const handleNodeClick = useCallback((item: FoodItem) => {
    if (state.isGenerating) return;
    
    // Set generating status but DON'T change centerDish yet to keep Level 1 layout intact
    setState(prev => ({ 
      ...prev, 
      isGenerating: true,
    }));
    
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        level: MapLevel.DEEP_DIVE,
        centerDish: item, // Now update centerDish as we switch views
        theme: item.name,
        isGenerating: false,
      }));
    }, 600);
  }, [state.isGenerating]);

  // Back Logic
  const handleBack = useCallback(() => {
    if (state.level === MapLevel.INGREDIENT_PIVOT) {
      setState(prev => ({
        ...prev,
        level: MapLevel.DEEP_DIVE,
        theme: prev.centerDish.name,
      }));
    } else {
      setState(prev => ({
        ...prev,
        level: MapLevel.EXPLORATION,
        theme: '今日食欲地图',
        neighbors: getNeighbors(state.centerDish),
      }));
    }
  }, [state.level, state.centerDish]);

  // Handle mouse move for ambient parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Level 1 Node Positions
  const nodePositions = useMemo(() => {
    const radiusX = 145; 
    const radiusY = 220; 
    return state.neighbors.map((_, i) => {
      const angle = (i / state.neighbors.length) * Math.PI * 2 - Math.PI / 2;
      return {
        x: Math.cos(angle) * (radiusX + (i % 2 === 0 ? 20 : -10)),
        y: Math.sin(angle) * (radiusY + (i % 2 === 0 ? 15 : -15)),
      };
    });
  }, [state.neighbors.length]);

  // Level 3 Pivot Positions
  const pivotPositions = useMemo(() => {
    const radiusX = 130;
    const radiusY = 180;
    return state.neighbors.map((_, i) => {
      const angle = (i / state.neighbors.length) * Math.PI * 2 - Math.PI / 2;
      return {
        x: Math.cos(angle) * radiusX,
        y: Math.sin(angle) * radiusY,
      };
    });
  }, [state.neighbors.length]);

  return (
    <div className="relative w-[393px] h-[852px] bg-[#F2F2F2] overflow-hidden flex flex-col items-center shadow-[0_0_100px_rgba(0,0,0,0.1)] rounded-[52px] border-[8px] border-white/60">
      {/* Background Noise Layer */}
      <div className="absolute inset-0 noise-bg" />
      
      {/* Unique Page Indicator */}
      <div className="absolute top-10 right-10 z-50 pointer-events-none">
        <span className="text-[10px] font-mono text-black/20 tracking-widest">
          {state.level === MapLevel.EXPLORATION ? 'PAGE-01' : state.level === MapLevel.DEEP_DIVE ? 'PAGE-02' : 'PAGE-03'}
        </span>
      </div>

      {/* Back Button */}
      <AnimatePresence>
        {state.level !== MapLevel.EXPLORATION && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={handleBack}
            className="absolute top-10 left-8 z-50 p-2 rounded-full glass-panel shadow-sm border border-white/40 active:scale-90 transition-transform"
          >
            <ChevronLeft className="w-5 h-5 text-black/60" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Top Header Area */}
      <div className={`absolute top-10 w-full z-50 flex justify-center pointer-events-none px-6 transition-all duration-700 ${state.level !== MapLevel.EXPLORATION && !state.isGenerating ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={state.isGenerating ? 'generating' : state.theme}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full glass-panel shadow-sm border border-white/40"
          >
            <div className="px-2 py-0.5 rounded-full bg-black/5 text-[9px] tracking-[0.15em] font-light text-black/40 uppercase">
              {state.isGenerating ? 'Tracing' : 'Exploration'}
            </div>
            <div className="w-px h-3 bg-black/10" />
            <h1 className="text-[17px] font-medium text-black/80 tracking-tight">
              {state.isGenerating ? '正在为你寻味...' : state.theme}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Level 2 Metadata Header */}
      <AnimatePresence>
        {state.level === MapLevel.DEEP_DIVE && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-14 w-full z-40 text-center pointer-events-none"
          >
            <h1 className="text-[26px] font-medium text-black/80 tracking-tight">{state.centerDish.name}</h1>
            <p className="text-[11px] font-light text-black/50 tracking-[0.2em] mt-1 uppercase">从这道菜继续展开</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Level 3 Metadata Header */}
      <AnimatePresence>
        {state.level === MapLevel.INGREDIENT_PIVOT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="absolute top-14 w-full z-40 text-center pointer-events-none"
          >
            <h1 className="text-[26px] font-medium text-black/80 tracking-tight">{state.focusedIngredient}</h1>
            <p className="text-[11px] font-light text-black/50 tracking-[0.2em] mt-1 uppercase">核心食材的美食谱系</p>
          </motion.div>
        )}
      </AnimatePresence>
      {state.level === MapLevel.EXPLORATION ? (
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          animate={{ x: mousePos.x * -0.2, y: mousePos.y * -0.2 }}
        >
          {/* Center Dish */}
          <AnimatePresence mode="wait">
            <motion.div
              layoutId={`food-${state.centerDish.id}`}
              className="z-30 flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => handleNodeClick(state.centerDish)}
            >
              <div className="w-28 h-28 rounded-full glass-panel flex items-center justify-center p-1.5 overflow-hidden ring-1 ring-white/60 shadow-xl group-hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden border border-white/20">
                  <img 
                    src={state.centerDish.imageUrl} 
                    alt={state.centerDish.name}
                    className="w-full h-full object-cover scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="text-center group-hover:opacity-100 transition-opacity">
                <p className="text-[15px] font-semibold text-black/90 tracking-tight">{state.centerDish.name}</p>
                <p className="text-[8px] font-light text-black/40 tracking-[0.2em] uppercase mt-0.5">CURRENT</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Neighbors */}
          {state.neighbors.map((neighbor, idx) => (
            <motion.div
              key={`${state.centerDish.id}-${neighbor.id}`}
              layoutId={`food-${neighbor.id}`}
              className="absolute cursor-pointer flex flex-col items-center gap-2 group z-20"
              style={{ left: '50%', top: '50%', marginLeft: -40, marginTop: -50 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1, x: nodePositions[idx].x, y: nodePositions[idx].y }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: idx * 0.05, type: 'spring', stiffness: 60, damping: 22 }}
              onClick={() => handleNodeClick(neighbor)}
            >
              <div className="w-20 h-20 rounded-full glass-node p-1 shadow-md group-hover:bg-white/40 transition-all duration-300">
                 <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-black/5">
                  <img src={neighbor.imageUrl} alt={neighbor.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100" referrerPolicy="no-referrer" />
                 </div>
              </div>
              <span className="text-[12px] font-medium text-black/80 tracking-tight text-center max-w-[75px] truncate">{neighbor.name}</span>
            </motion.div>
          ))}
        </motion.div>
      ) : state.level === MapLevel.DEEP_DIVE ? (
        <div className="relative w-full h-full flex flex-col items-center pt-28 pb-32 px-6">
          {/* Level 2 Deep Dive Layout */}
          
          {/* Ingredients (Left Side) */}
          <div className="absolute left-3 top-[22.5%] flex flex-col items-center gap-6 z-30 w-[64px]">
            <h4 className="text-[10px] font-bold text-black/40 tracking-[0.2em] uppercase mb-1">食材</h4>
            <div className="flex flex-col gap-6 w-full items-center">
              {state.centerDish.metadata?.ingredients?.slice(0, 4).map((ing, i) => (
                <motion.div
                  key={ing}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="flex flex-col items-center gap-1.5 cursor-pointer group"
                  onClick={() => handleIngredientClick(ing)}
                >
                  <div className="w-10 h-10 rounded-full glass-node flex items-center justify-center p-1 shadow-sm border-white/60 group-hover:bg-white/50 transition-colors">
                     <div className="w-full h-full rounded-full bg-black/[0.02] flex items-center justify-center">
                       <span className="text-[8px] text-black/70 font-semibold text-center px-1 leading-[1.1]">{ing}</span>
                     </div>
                  </div>
                  <span className="text-[9px] text-black/50 font-light tracking-wide group-hover:text-black/80">{ing}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Flavors (Right Side) */}
          <div className="absolute right-3 top-[22.5%] flex flex-col items-center gap-6 z-30 w-[64px]">
            <h4 className="text-[10px] font-bold text-black/40 tracking-[0.2em] uppercase mb-1">口味</h4>
            <div className="flex flex-col gap-6 w-full items-center">
              {state.centerDish.metadata?.flavors?.slice(0, 4).map((flv, i) => (
                <motion.div
                  key={flv}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className="w-10 h-10 rounded-full glass-node flex items-center justify-center p-1 shadow-sm border-white/60">
                     <div className="w-full h-full rounded-full bg-orange-500/[0.04] flex items-center justify-center">
                       <span className="text-[8px] text-black/70 font-semibold text-center px-1 leading-[1.1]">{flv}</span>
                     </div>
                  </div>
                  <span className="text-[9px] text-black/50 font-light tracking-wide">{flv}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center Main Dish Visual */}
          <motion.div
            layoutId={`food-${state.centerDish.id}`}
            className="z-20 flex flex-col items-center justify-center flex-1 mt-[-20px] mb-8"
          >
            <div className="w-52 h-52 md:w-60 md:h-60 rounded-full bg-white/5 backdrop-blur-[60px] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 ring-1 ring-white/5">
              <div className="w-full h-full rounded-full overflow-hidden border border-white/5 shadow-inner relative">
                <img src={state.centerDish.imageUrl} className="w-full h-full object-cover scale-105" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent shadow-inner" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Area: Related & Scenes */}
          <div className="w-full flex flex-col gap-6 z-30 mt-auto pb-4">
            {/* Related Dishes Arched Array */}
            <div className="relative h-32 w-full flex justify-center items-center">
               <div className="absolute top-[-20px] w-full flex items-center gap-2 px-10">
                <div className="h-[1px] flex-1 bg-black/[0.03]" />
                <h4 className="text-[9px] font-bold text-black/30 tracking-[0.3em] uppercase">关联菜品</h4>
                <div className="h-[1px] flex-1 bg-black/[0.03]" />
              </div>

              {state.centerDish.metadata?.relatedDishes?.slice(0, 4).map((item, i) => {
                // Arc positioning: -60 to 60 degrees around the bottom
                const angle = ((i / 3) * 120 - 60) * (Math.PI / 180);
                const rx = 140;
                const ry = 40;
                return (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: Math.sin(angle) * rx,
                      y: Math.cos(angle) * ry - 10
                    }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="absolute flex flex-col items-center gap-1.5 w-16"
                  >
                    <div className="w-14 h-14 rounded-2xl glass-node p-0.5 shadow-sm border-white/60 overflow-hidden group active:scale-95 transition-transform">
                      <img src={item.imageUrl} className="w-full h-full object-cover rounded-[14px]" referrerPolicy="no-referrer" />
                    </div>
                    <span className="text-[8px] text-black/60 font-bold tracking-tight truncate w-full text-center px-0.5">{item.name}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Scenes */}
            <div className="flex flex-col gap-2 pt-2">
               <h4 className="text-[9px] font-bold text-black/20 tracking-[0.25em] uppercase text-center">适合场景</h4>
              <div className="flex gap-2 justify-center">
                {state.centerDish.metadata?.scenes?.map((scene, i) => (
                  <motion.div
                    key={scene}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                    className="px-3 py-2 glass-node rounded-full text-[9px] font-medium text-black/60 border-white/50 shadow-sm"
                  >
                    {scene}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full flex items-center justify-center pt-20">
          {/* SVG Connecting Lines Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.02))' }}>
            {state.neighbors.map((_, idx) => (
              <motion.line
                key={`line-${idx}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 1 }}
                x1="50%"
                y1="50%"
                x2={`calc(50% + ${pivotPositions[idx].x}px)`}
                y2={`calc(50% + ${pivotPositions[idx].y}px)`}
                stroke="rgba(0,0,0,0.06)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* Central Ingredient Pillar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="z-30 flex flex-col items-center gap-4"
          >
            <div className="w-24 h-24 rounded-full bg-orange-50/50 backdrop-blur-2xl border-2 border-orange-200/50 shadow-xl flex items-center justify-center p-4 ring-8 ring-orange-100/10">
               <ChefHat className="w-10 h-10 text-orange-400/80" />
            </div>
            <div className="text-center px-4 py-1.5 rounded-full bg-white/60 border border-white/80 shadow-sm">
               <span className="text-[15px] font-bold text-black/70 tracking-wide">{state.focusedIngredient}</span>
            </div>
          </motion.div>

          {/* Surrounding Dishes Ring */}
          {state.neighbors.map((dish, idx) => (
            <motion.div
              key={`pivot-${dish.id}`}
              layoutId={`food-${dish.id}`}
              className="absolute cursor-pointer flex flex-col items-center gap-3 group z-20"
              style={{ left: '50%', top: '50%', marginLeft: -32, marginTop: -40 }}
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: pivotPositions[idx].x,
                y: pivotPositions[idx].y
              }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 50, damping: 18 }}
              onClick={() => handlePivotDishClick(dish)}
            >
              <div className="w-16 h-16 rounded-full glass-node p-1 shadow-md border-white/60 group-hover:scale-110 transition-transform duration-300">
                 <div className="w-full h-full rounded-full overflow-hidden">
                    <img src={dish.imageUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                 </div>
              </div>
              <span className="text-[10px] font-bold text-black/50 tracking-tight text-center max-w-[60px] leading-tight px-1 group-hover:text-black/80">
                {dish.name}
              </span>
            </motion.div>
          ))}
        </div>
      )}

      {/* Floating Decorative Blur Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute top-[20%] left-[-25%] w-80 h-80 bg-orange-200/5 rounded-full blur-[90px]" />
        <div className="absolute bottom-[20%] right-[-25%] w-80 h-80 bg-blue-200/10 rounded-full blur-[90px]" />
      </div>

      {/* Bottom Search Interaction Area */}
      <div className="absolute bottom-12 w-full flex justify-center px-4 z-50">
        <motion.div 
          className="w-full max-w-[360px] glass-panel rounded-[24px] px-6 py-3.5 shadow-2xl ring-1 ring-white/30"
          animate={state.isGenerating ? {
            boxShadow: ["0px 0px 0px rgba(59, 130, 246, 0)", "0px 0px 20px rgba(59, 130, 246, 0.1)", "0px 0px 0px rgba(59, 130, 246, 0)"]
          } : {}}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={state.level === MapLevel.EXPLORATION ? "想吃点什么？" : "继续深入食材、口味或场景..."}
              className="bg-transparent border-none outline-none w-full text-[13px] text-black/80 font-light placeholder:text-black/30 text-center"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && inputValue.trim()) {
                  const searchStr = inputValue.toLowerCase();
                  const found = ALL_FOODS.find(f => f.name.includes(searchStr)) || ALL_FOODS[Math.floor(Math.random() * ALL_FOODS.length)];
                  handleNodeClick(found);
                  setInputValue('');
                }
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* iOS Home Indicator */}
      <div className="absolute bottom-2 w-32 h-1.5 bg-black/10 rounded-full z-50" />
    </div>
  );
}
