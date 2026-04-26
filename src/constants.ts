import { FoodItem } from './types';

export const ALL_FOODS: FoodItem[] = [
  { 
    id: '1', 
    name: '黑森林蛋糕', 
    category: '甜品', 
    imageUrl: 'https://i.imgur.com/vr5xvEj.png',
    metadata: {
      ingredients: ['巧克力蛋糕'],
      flavors: ['绵密', '可可味'],
      relatedDishes: [
        { name: '提拉米苏', imageUrl: 'https://i.imgur.com/HKtSDdO.jpeg' },
        { name: '牛角包', imageUrl: 'https://i.imgur.com/iC7wvlv.png' },
        { name: '千层蛋糕', imageUrl: 'https://i.imgur.com/kabppvt.png' },
        { name: '红丝绒蛋糕', imageUrl: 'https://i.imgur.com/gjXSl38.png' }
      ],
      scenes: ['西式甜品', '下午茶', '补充热量']
    }
  },
  { 
    id: '2', 
    name: '橙C美式', 
    category: '咖啡', 
    imageUrl: 'https://i.imgur.com/7KMQ38u.png',
    metadata: {
      ingredients: ['咖啡', '橙汁'],
      flavors: ['果酸', '微苦'],
      relatedDishes: [
        { name: '生椰拿铁', imageUrl: 'https://i.imgur.com/tlpQmcu.png' },
        { name: '茉莉美式', imageUrl: 'https://i.imgur.com/HX7ob2E.png' },
        { name: '西柚气泡水', imageUrl: 'https://i.imgur.com/oMYAR74.png' },
        { name: '气泡美式', imageUrl: 'https://i.imgur.com/uuMoWTs.png' }
      ],
      scenes: ['咖啡饮品', '提神醒脑']
    }
  },
  { 
    id: '3', 
    name: '油泼面', 
    category: '面食', 
    imageUrl: 'https://i.imgur.com/FSP5Z07.png',
    metadata: {
      ingredients: ['面条'],
      flavors: ['香辣', '蒜香'],
      relatedDishes: [
        { name: '臊子面', imageUrl: 'https://i.imgur.com/PKMy7tP.png' },
        { name: '重庆小面', imageUrl: 'https://i.imgur.com/14qa5vw.png' },
        { name: '兰州拉面', imageUrl: 'https://i.imgur.com/AG3eIlN.png' },
        { name: '牛肉面', imageUrl: 'https://i.imgur.com/19Q68y0.jpeg' }
      ],
      scenes: ['陕西面食', '碳水满足', '辣过瘾']
    }
  },
  { 
    id: '4', 
    name: '肉骨茶', 
    category: '汤类', 
    imageUrl: 'https://i.imgur.com/Qh694Jh.png',
    metadata: {
      ingredients: ['猪排骨'],
      flavors: ['胡椒香', '鲜香'],
      relatedDishes: [
        { name: '猪肚鸡', imageUrl: 'https://i.imgur.com/jUJFXvd.png' },
        { name: '排骨汤', imageUrl: 'https://i.imgur.com/WKNriLA.png' },
        { name: '海南鸡饭', imageUrl: 'https://i.imgur.com/gOjxDdp.png' },
        { name: '冬阴功汤', imageUrl: 'https://i.imgur.com/afRfOtC.png' }
      ],
      scenes: ['新马风味', '适合降温吃', '暖胃']
    }
  },
  { 
    id: '5', 
    name: '紫苏牛蛙煲', 
    category: '热锅', 
    imageUrl: 'https://i.imgur.com/KGUjZbN.png',
    metadata: {
      ingredients: ['牛蛙'],
      flavors: ['鲜嫩', '香辣'],
      relatedDishes: [
        { name: '辣椒炒肉', imageUrl: 'https://i.imgur.com/0O6eu8v.jpeg' },
        { name: '黄焖鸡米饭', imageUrl: 'https://i.imgur.com/crrVOA5.png' },
        { name: '干锅牛蛙', imageUrl: 'https://i.imgur.com/bcMcslg.jpeg' },
        { name: '香辣鸡煲', imageUrl: 'https://i.imgur.com/eA1R9bF.png' }
      ],
      scenes: ['湘菜', '下饭', '补充热量']
    }
  },
  { 
    id: '6', 
    name: '羊肉泡馍', 
    category: '西北菜', 
    imageUrl: 'https://i.imgur.com/ax3Hsaq.png',
    metadata: {
      ingredients: ['羊肉', '馍'],
      flavors: ['鲜香', '咸鲜'],
      relatedDishes: [
        { name: '胡辣汤', imageUrl: 'https://i.imgur.com/LtkaaDq.jpeg' },
        { name: '羊杂汤', imageUrl: 'https://i.imgur.com/P3aIsPZ.jpeg' },
        { name: '羊肉串', imageUrl: 'https://i.imgur.com/Aa7YwH3.png' },
        { name: '葱爆羊肉', imageUrl: 'https://i.imgur.com/1STpy1G.jpeg' }
      ],
      scenes: ['陕西风味', '暖胃', '饱腹感强']
    }
  },
  { 
    id: '7', 
    name: '烤牛五花', 
    category: '烧烤', 
    imageUrl: 'https://i.imgur.com/5lmuW4F.png',
    metadata: {
      ingredients: ['牛五花'],
      flavors: ['油脂香', '焦香'],
      relatedDishes: [
        { name: '炸鸡', imageUrl: 'https://i.imgur.com/dTaQIh1.jpeg' },
        { name: '肥牛饭', imageUrl: 'https://i.imgur.com/8uKhaj1.png' },
        { name: '烤牛肋排', imageUrl: 'https://i.imgur.com/QL4Dwvf.jpeg' },
        { name: '辣椒炒肉', imageUrl: 'https://i.imgur.com/0O6eu8v.jpeg' }
      ],
      scenes: ['烤肉', '改善伙食', '补充热量']
    }
  },
  { 
    id: '8', 
    name: '三文鱼刺身', 
    category: '日料', 
    imageUrl: 'https://i.imgur.com/6uZQkQy.png',
    metadata: {
      ingredients: ['三文鱼'],
      flavors: ['鲜甜', '油脂香'],
      relatedDishes: [
        { name: '金枪鱼刺身', imageUrl: 'https://i.imgur.com/TYqIhuX.png' },
        { name: '海胆刺身', imageUrl: 'https://i.imgur.com/y6QLJfs.png' },
        { name: '三文鱼寿司', imageUrl: 'https://i.imgur.com/DYkw8Ky.png' },
        { name: '日式海鲜饭', imageUrl: 'https://i.imgur.com/snTUQXR.jpeg' }
      ],
      scenes: ['日料', '高蛋白', '优质热量']
    }
  },
];

export const INITIAL_CENTER = ALL_FOODS[0]; // 黑森林蛋糕
 
export const INGREDIENT_IMAGES: Record<string, string> = {
  '猪排骨': 'https://i.imgur.com/iKzgwN3.png',
  '橙汁': 'https://i.imgur.com/1y6yM5E.png',
  '牛蛙': 'https://i.imgur.com/3nWztj2.png',
  '面条': 'https://i.imgur.com/OeMC0WU.png',
  '咖啡': 'https://i.imgur.com/cqgNmUd.png',
  '三文鱼': 'https://i.imgur.com/uSvcRvQ.png',
  '羊肉': 'https://i.imgur.com/C4tg0mt.png',
  '牛五花': 'https://i.imgur.com/TK6BzfZ.png',
  '巧克力蛋糕': 'https://i.imgur.com/ZdGsNCo.png',
  '馍': 'https://i.imgur.com/gbAHi1E.png',
};

export const FLAVOR_IMAGES: Record<string, string> = {
  '油脂香': 'https://i.imgur.com/zeyGcTM.png',
  '鲜甜': 'https://i.imgur.com/yRHZKn9.png',
  '焦香': 'https://i.imgur.com/XVm6Mup.jpeg',
  '蒜香': 'https://i.imgur.com/4Dm9qtR.jpeg',
  '胡椒香': 'https://i.imgur.com/Rcwr6qQ.jpeg',
  '微苦': 'https://i.imgur.com/N6CndcQ.jpeg',
  '香辣': 'https://i.imgur.com/cJObY0L.png',
  '绵密': 'https://i.imgur.com/yqExSic.png',
  '鲜嫩': 'https://i.imgur.com/IWMjJ2h.png',
  '可可味': 'https://i.imgur.com/n2dYncS.png',
  '咸鲜': 'https://i.imgur.com/HU9lGHv.png',
  '果酸': 'https://i.imgur.com/Dg7fD09.png',
  '鲜香': 'https://i.imgur.com/vSeALlF.png',
};

export const getNeighbors = (center: FoodItem): FoodItem[] => {
  // Logic to find neighbors: current category siblings + random others
  const siblings = ALL_FOODS.filter(f => f.category === center.category && f.id !== center.id);
  const others = ALL_FOODS.filter(f => f.category !== center.category)
    .sort(() => 0.5 - Math.random())
    .slice(0, 7 - siblings.length);
  return [...siblings, ...others].slice(0, 7);
};

export const getDishesByIngredient = (ingredient: string): FoodItem[] => {
  const exactMatches = ALL_FOODS.filter(f => 
    f.metadata?.ingredients?.includes(ingredient)
  );
  
  if (exactMatches.length >= 6) {
    return exactMatches.slice(0, 6);
  }
  
  const placeholders = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1621252119330-8d5930263f97?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200&auto=format&fit=crop'
  ];

  const DICTIONARY: Record<string, string[]> = {
    '手擀面': ['炸酱面', '打卤面', '肉丝炒面', '番茄鸡蛋面', '红烧牛肉面', '油泼面'],
    '毛肚': ['红油火锅', '水煮毛肚', '爆炒毛肚', '凉拌毛肚', '毛肚血旺', '千层肚'],
    '肥牛': ['酸汤肥牛', '番茄肥牛汤', '肥牛饭', '葱爆肥牛', '金针菇肥牛卷', '沙茶肥牛'],
    '越光米': ['海鲜炒饭', '咖喱饭', '饭团', '蛋包饭', '肥牛盖饭', '炭烤鳗鱼饭'],
    '鲜鱼片': ['水煮鱼', '酸菜鱼', '番茄鱼', '生滚鱼片粥', '糟溜鱼片', '金汤柠檬鱼'],
    '藜麦': ['藜麦沙拉', '藜麦南瓜粥', '藜麦鸡胸肉饭', '藜麦玉米汁', '低脂藜麦饭', '有机紫薯藜麦'],
    '鸡胸肉': ['宫保鸡丁', '白水煮鸡胸', '香煎鸡排', '鸡丝凉面', '口水鸡', '黄焖鸡'],
    '五花肉': ['红烧肉', '回锅肉', '韩式烤猪肉', '梅菜扣肉', '把子肉', '小炒肉'],
    '牛排': ['黑椒牛排', '惠灵顿牛排', '战斧牛排', '菲力起司', '红酒炖牛肉', '铁板牛排'],
    '马铃薯': ['酸辣土豆丝', '红烧土豆', '地三鲜', '土豆泥', '炸薯条', '排骨炖土豆'],
    '拉面': ['兰州牛肉面', '日式豚骨拉面', '炒拉面', '咖喱拉面', '辛拉面', '鸡白汤拉面'],
    '牛肉片': ['水煮肉片', '葱爆牛肉', '沙茶牛肉', '牛肉炒粉', '铁板牛肉', '干炒牛河'],
    '三文鱼': ['三文鱼刺身', '香煎三文鱼', '三文鱼寿司', '三文鱼茶泡饭', '烟熏三文鱼沙拉', '三文鱼头汤'],
    '羊肉': ['葱爆羊肉', '羊肉串', '手抓羊肉', '羊肉泡馍', '涮羊肉', '孜然羊肉'],
    '菠萝': ['菠萝咕噜肉', '菠萝炒饭', '拔丝菠萝', '菠萝披萨', '泰式菠萝鸡', '菠萝排骨'],
    '香米': ['腊味煲仔饭', '海南鸡饭', '扬州炒饭', '白米饭', '海鲜粥', '皮蛋瘦肉粥'],
    '鲜虾': ['白灼虾', '蒜蓉粉丝蒸虾', '油焖大虾', '炸虾天妇罗', '虾仁滑蛋', '宫保虾球']
  };

  const genericNames = DICTIONARY[ingredient] || [];
  const needed = 6 - exactMatches.length;
  
  const mockMatches: FoodItem[] = Array.from({ length: needed }).map((_, i) => ({
    id: `mock-${ingredient}-${i}`,
    name: genericNames[i] || `特色${ingredient}${['饭', '面', '锅', '汤', '卷', '粉'][i % 6]}`,
    category: '推荐',
    imageUrl: placeholders[i % placeholders.length],
    metadata: {
      ingredients: [ingredient, '秘制配料'],
      flavors: ['鲜香'],
      relatedDishes: [],
      scenes: ['推荐']
    }
  }));

  return [...exactMatches, ...mockMatches];
};
