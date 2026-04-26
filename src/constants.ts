import { FoodItem } from './types';

export const ALL_FOODS: FoodItem[] = [
  { 
    id: '1', 
    name: '油泼面', 
    category: '面食', 
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=400&auto=format&fit=crop',
    metadata: {
      ingredients: ['手擀面', '辣椒粉', '豆芽', '葱花', '热油'],
      flavors: ['咸鲜', '麻辣', '焦香'],
      relatedDishes: [
        { name: '兰州拉面', imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200' },
        { name: '岐山臊子面', imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200' },
        { name: '肉夹馍', imageUrl: 'https://images.unsplash.com/photo-1599321955419-7b530d8bb882?q=80&w=200' },
        { name: '凉皮', imageUrl: 'https://images.unsplash.com/photo-1621252119330-8d5930263f97?q=80&w=200' }
      ],
      scenes: ['下班后', '深夜食堂', '想念碳水']
    }
  },
  { 
    id: '2', 
    name: '火锅', 
    category: '热锅', 
    imageUrl: 'https://images.unsplash.com/photo-1599321955419-7b530d8bb882?q=80&w=400&auto=format&fit=crop',
    metadata: {
      ingredients: ['牛油底料', '毛肚', '肥牛', '黄喉', '鸭血'],
      flavors: ['麻辣', '牛油醇厚', '鲜香'],
      relatedDishes: [
        { name: '串串香', imageUrl: 'https://images.unsplash.com/photo-1621252119330-8d5930263f97?q=80&w=200' },
        { name: '麻辣烫', imageUrl: 'https://images.unsplash.com/photo-1621252119330-8d5930263f97?q=80&w=200' },
        { name: '冒菜', imageUrl: 'https://images.unsplash.com/photo-1599321955419-7b530d8bb882?q=80&w=200' },
        { name: '钵钵鸡', imageUrl: 'https://images.unsplash.com/photo-1621252119330-8d5930263f97?q=80&w=200' }
      ],
      scenes: ['周末聚会', '冬日暖胃', '热火朝天']
    }
  },
  { 
    id: '3', 
    name: '寿司', 
    category: '日料', 
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400&auto=format&fit=crop',
    metadata: {
      ingredients: ['越光米', '金枪鱼', '三文鱼', '海螺', '鳗鱼'],
      flavors: ['清爽', '甘甜', '米香'],
      relatedDishes: [
        { name: '三文鱼刺身', imageUrl: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=200' },
        { name: '鳗鱼饭', imageUrl: 'https://images.unsplash.com/photo-1581184953813-2007ce92e28b?q=80&w=200' },
        { name: '天妇罗', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200' },
        { name: '拉面', imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200' }
      ],
      scenes: ['精致一人食', '午后轻餐', '生鲜美味']
    }
  },
  { 
    id: '4', 
    name: '轻食碗', 
    category: '健康', 
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop',
    metadata: {
      ingredients: ['藜麦', '鸡胸肉', '牛油果', '生菜', '鹰嘴豆'],
      flavors: ['原味', '清新', '低卡'],
      relatedDishes: [
        { name: '希腊沙拉', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200' },
        { name: '羽衣甘蓝碗', imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200' },
        { name: '蔬果汁', imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200' },
        { name: '全麦三明治', imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200' }
      ],
      scenes: ['健身减脂', '夏日午餐', '无负担餐']
    }
  },
  { 
    id: '5', 
    name: '烤肉', 
    category: '烧烤', 
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop',
    metadata: {
      ingredients: ['五花肉', '牛排', '杏鲍菇', '生菜', '秘制蘸酱'],
      flavors: ['肉香', '焦脆', '蒜香'],
      relatedDishes: [
        { name: '羊肉串', imageUrl: 'https://images.unsplash.com/photo-1649141013444-239611db189d?q=80&w=200' },
        { name: '石锅拌饭', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' },
        { name: '冷面', imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200' },
        { name: '辣白菜', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' }
      ],
      scenes: ['深夜放纵', '大口吃肉', '好友宵夜']
    }
  },
  { 
    id: '6', 
    name: '咖喱', 
    category: '东南亚', 
    imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=400&auto=format&fit=crop',
    metadata: {
      ingredients: ['泰式咖喱', '椰浆', '鸡胸肉', '马铃薯', '罗勒叶'],
      flavors: ['辛香', '浓郁', '椰甜'],
      relatedDishes: [
        { name: '泰式菠萝饭', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' },
        { name: '冬阴功汤', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' },
        { name: '金边粉', imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=200' },
        { name: '青木瓜沙拉', imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c411db?q=80&w=200' }
      ],
      scenes: ['异国风味', '冒汗热辣', '下饭神器']
    }
  },
  { 
    id: '7', 
    name: '兰州拉面', 
    category: '面食', 
    imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200',
    metadata: {
      ingredients: ['手工拉面', '牛脊骨汤', '牛肉片', '白萝卜', '香菜'],
      flavors: ['汤醇', '面筋', '鲜香'],
      relatedDishes: [
        { name: '油泼面', imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200' },
        { name: '炒馕', imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200' },
        { name: '大盘鸡', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200' },
        { name: '羊肉串', imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200' }
      ],
      scenes: ['工作日餐', '热汤暖心', '快速解决']
    }
  },
  { 
    id: '8', 
    name: '三文鱼刺身', 
    category: '日料', 
    imageUrl: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=200',
    metadata: {
      ingredients: ['冰鲜三文鱼', '手磨山葵', '日式酱油', '柠檬', '白萝卜丝'],
      flavors: ['肥美', '爽滑', '清甜'],
      relatedDishes: [
        { name: '甜虾刺身', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200' },
        { name: '寿司', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200' },
        { name: '北极贝', imageUrl: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=200' },
        { name: '海胆', imageUrl: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=200' }
      ],
      scenes: ['海鲜盛宴', '约会首选', '精致生活']
    }
  },
  { 
    id: '9', 
    name: '羊肉汤', 
    category: '汤类', 
    imageUrl: 'https://images.unsplash.com/photo-1649141013444-239611db189d?q=80&w=200',
    metadata: {
      ingredients: ['清炖羊肉', '当归', '党参', '红枣', '大葱'],
      flavors: ['汤满', '鲜而不膻', '滋补'],
      relatedDishes: [
        { name: '烤全羊', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200' },
        { name: '羊肉烩面', imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200' },
        { name: '手抓饭', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' },
        { name: '羊奶酪', imageUrl: 'https://images.unsplash.com/photo-1649141013444-239611db189d?q=80&w=200' }
      ],
      scenes: ['冬日大补', '暖胃神汤', '家乡味道']
    }
  },
  { 
    id: '10', 
    name: '泰式菠萝饭', 
    category: '东南亚', 
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200',
    metadata: {
      ingredients: ['菠萝', '香米', '鲜虾', '腰果', '肉松'],
      flavors: ['酸甜', '咸香', '椰味'],
      relatedDishes: [
        { name: '泰式炒粉', imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=200' },
        { name: '青木瓜沙拉', imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=200' },
        { name: '冬阴功汤', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' },
        { name: '泰式奶茶', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' }
      ],
      scenes: ['夏日开胃', '异国午餐', '家庭聚餐']
    }
  },
];

export const INITIAL_CENTER = ALL_FOODS[0]; // 油泼面

export const getNeighbors = (center: FoodItem): FoodItem[] => {
  // Logic to find neighbors: current category siblings + random others
  const siblings = ALL_FOODS.filter(f => f.category === center.category && f.id !== center.id);
  const others = ALL_FOODS.filter(f => f.category !== center.category)
    .sort(() => 0.5 - Math.random())
    .slice(0, 7 - siblings.length);
  return [...siblings, ...others].slice(0, 7);
};

export const getDishesByIngredient = (ingredient: string): FoodItem[] => {
  return ALL_FOODS.filter(f => 
    f.metadata?.ingredients?.includes(ingredient)
  ).slice(0, 6);
};
