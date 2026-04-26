import { FoodItem } from './types';

export const ALL_FOODS: FoodItem[] = [
  { 
    id: '1', 
    name: '黑森林蛋糕', 
    category: '甜品', 
    imageUrl: 'https://i.imgur.com/OJpDO42.jpeg',
    metadata: {
      ingredients: ['巧克力蛋糕', '樱桃'],
      flavors: ['绵密', '可可味'],
      relatedDishes: [
        { name: '提拉米苏', imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=200' },
        { name: '牛角包', imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=200' },
        { name: '千层蛋糕', imageUrl: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=200' },
        { name: '红丝绒蛋糕', imageUrl: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=80&w=200' }
      ],
      scenes: ['西式甜品', '下午茶', '补充热量']
    }
  },
  { 
    id: '2', 
    name: '橙C美式', 
    category: '咖啡', 
    imageUrl: 'https://i.imgur.com/N1ZGKcO.png',
    metadata: {
      ingredients: ['咖啡', '橙汁'],
      flavors: ['果酸', '微苦'],
      relatedDishes: [
        { name: '生椰拿铁', imageUrl: 'https://images.unsplash.com/photo-1594132223112-7bfbeaa056c5?q=80&w=200' },
        { name: '茉莉美式', imageUrl: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=200' },
        { name: '西柚气泡水', imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=200' },
        { name: '气泡美式', imageUrl: 'https://images.unsplash.com/photo-1541167760496-162955ed2a95?q=80&w=200' }
      ],
      scenes: ['咖啡饮品', '提神醒脑']
    }
  },
  { 
    id: '3', 
    name: '油泼面', 
    category: '面食', 
    imageUrl: 'https://i.imgur.com/YO3pceD.jpeg',
    metadata: {
      ingredients: ['面条'],
      flavors: ['香辣', '蒜香'],
      relatedDishes: [
        { name: '臊子面', imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=200' },
        { name: '重庆小面', imageUrl: 'https://images.unsplash.com/photo-1621252119330-8d5930263f97?q=80&w=200' },
        { name: '兰州拉面', imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200' },
        { name: '牛肉面', imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200' }
      ],
      scenes: ['陕西面食', '碳水满足', '辣过瘾']
    }
  },
  { 
    id: '4', 
    name: '肉骨茶', 
    category: '汤类', 
    imageUrl: 'https://i.imgur.com/SJw5xj5.jpeg',
    metadata: {
      ingredients: ['猪排骨'],
      flavors: ['胡椒香', '鲜香'],
      relatedDishes: [
        { name: '猪肚鸡', imageUrl: 'https://images.unsplash.com/photo-1649141013444-239611db189d?q=80&w=200' },
        { name: '排骨汤', imageUrl: 'https://images.unsplash.com/photo-1547928576-a4a33237ce35?q=80&w=200' },
        { name: '海南鸡饭', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' },
        { name: '冬阴功汤', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' }
      ],
      scenes: ['新马风味', '适合降温吃', '暖胃']
    }
  },
  { 
    id: '5', 
    name: '紫苏牛蛙煲', 
    category: '热锅', 
    imageUrl: 'https://i.imgur.com/u8aDxFp.jpeg',
    metadata: {
      ingredients: ['牛蛙'],
      flavors: ['鲜嫩', '香辣'],
      relatedDishes: [
        { name: '辣椒炒肉', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' },
        { name: '黄焖鸡米饭', imageUrl: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=200' },
        { name: '干锅牛蛙', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200' },
        { name: '香辣鸡煲', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200' }
      ],
      scenes: ['湘菜', '下饭', '补充热量']
    }
  },
  { 
    id: '6', 
    name: '羊肉泡馍', 
    category: '西北菜', 
    imageUrl: 'https://i.imgur.com/evaM28p.jpeg',
    metadata: {
      ingredients: ['羊肉', '馍'],
      flavors: ['鲜香', '咸鲜'],
      relatedDishes: [
        { name: '胡辣汤', imageUrl: 'https://images.unsplash.com/photo-1649141013444-239611db189d?q=80&w=200' },
        { name: '羊杂汤', imageUrl: 'https://images.unsplash.com/photo-1649141013444-239611db189d?q=80&w=200' },
        { name: '牛肉面', imageUrl: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=200' },
        { name: '羊肉捞捞锅', imageUrl: 'https://images.unsplash.com/photo-1649141013444-239611db189d?q=80&w=200' }
      ],
      scenes: ['陕西风味', '暖胃', '饱腹感强']
    }
  },
  { 
    id: '7', 
    name: '烤牛五花', 
    category: '烧烤', 
    imageUrl: 'https://i.imgur.com/9ZbydS4.jpeg',
    metadata: {
      ingredients: ['牛五花'],
      flavors: ['油脂香', '焦香'],
      relatedDishes: [
        { name: '炸鸡', imageUrl: 'https://images.unsplash.com/photo-1562967914-6cbb241c2ad3?q=80&w=200' },
        { name: '肥牛饭', imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=200' },
        { name: '烤牛肋排', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200' },
        { name: '牛肉串', imageUrl: 'https://images.unsplash.com/photo-1649141013444-239611db189d?q=80&w=200' }
      ],
      scenes: ['烤肉', '改善伙食', '补充热量']
    }
  },
  { 
    id: '8', 
    name: '三文鱼刺身', 
    category: '日料', 
    imageUrl: 'https://i.imgur.com/LgY9b8t.jpeg',
    metadata: {
      ingredients: ['三文鱼'],
      flavors: ['鲜甜', '油脂香'],
      relatedDishes: [
        { name: '金枪鱼刺身', imageUrl: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=200' },
        { name: '海胆刺身', imageUrl: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&w=200' },
        { name: '三文鱼寿司', imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200' },
        { name: '日式海鲜饭', imageUrl: 'https://images.unsplash.com/photo-1581184953813-2007ce92e28b?q=80&w=200' }
      ],
      scenes: ['日料', '高蛋白', '优质热量']
    }
  },
];

export const INITIAL_CENTER = ALL_FOODS[0]; // 黑森林蛋糕

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
