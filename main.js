let availableKeywords = [
  'raspberries',
  'blackberries',
  'elderberries',
  'rowan berries',
  'bilberries',
  'sloe fruits',
  'blackthorn fruits',
  'crab apples',
  'apples',
  'pears',
  'cherries',
  'plums',
  'damson',
  'bullace',
  'hawthorn berries',
  'rosehips',
  'brambles/blackberries',
  'strawberries',
  'cloudberries',
  'blueberries',
  'broccoli',
  'chicken breast',
  'salmon',
  'brown rice',
  'spinach',
  'lentils',
  'avocado',
  'sweet potato',
  'greek yogurt',
  'quinoa',
  'almonds',
  'oats',
  'eggs',
  'kale',
  'turkey breast',
  'black beans',
  'peanut butter',
  'cauliflower',
  'wild caught tuna',
  'whole wheat bread',
  'edamame',
  'cottage cheese',
  'chicken thigh',
  'tofu',
  'brussels sprouts',
  'quinoa pasta',
  'greek salad',
  'chicken noodle soup',
  'beef tenderloin',
  'roasted sweet potato',
  'grilled salmon',
  'brown rice sushi',
  'baked cod',
  'quinoa stuffed bell pepper',
  'roasted brussels sprouts',
  'lentil soup',
  'chicken veggie stir fry',
  'baked chicken parmesan',
  'grilled shrimp skewers',
  'roasted chickpeas',
  'baked sweet potato fries',
  'grilled chicken caesar salad',
  'baked ziti with turkey',
  'roasted turkey breast',
  'sauteed spinach and garlic',
  'baked salmon with lemon',
  'grilled chicken and veggies',
  'roasted butternut squash',
  'baked tilapia with herbs',
  'sauteed mushrooms',
  'steamed broccoli',
  'zucchini noodles',
  'mushrooms',
  'onions',
  'garlic',
  'ginger',
  'turmeric',
  'basil',
  'rosemary',
  'thyme',
  'sage',
  'oregano',
  'parsley',
  'cilantro',
  'dill',
  'fennel',
  'celery',
  'radish',
  'turnip',
  'rutabaga',
  'eggplant',
  'artichoke',
  'chia seeds',
  'flaxseeds',
  'hemp seeds',
  'sunflower seeds',
  'pumpkin seeds',
  'walnuts',
  'pecans',
  'cashews',
  'pistachios',
  'macadamia nuts',
  'carrots',
  'potatoes',
  'tomatoes',
  'bell peppers',
  'cucumber',
  'green beans',
  'asparagus',
  'peas',
  'corn',
  'beets',
  'cabbage',
  'lettuce',
  'arugula',
  'bok choy',
  'swiss chard',
  'collard greens',
  'green onions',
  'leeks',
  'shallots',
  'butternut squash',
  'acorn squash',
  'spaghetti squash',
  'pumpkin',
  'radicchio',
  'watercress',
  'endive',
  'jicama',
  'okra',
  'celery root (celeriac)',
  'parsnips',
  'jerusalem artichokes',
  'radishes',
  'turnip greens',
  'mustard greens',
  'rutabaga',
  'snow peas',
  'sugar snap peas',
  'daikon radish',
  'water chestnuts',
  'bamboo shoots',
  'baby corn',
  'lotus root',
  'seaweed',
  'nori',
  'wakame',
  'kombu',
  'hijiki',
  'alfalfa sprouts',
  'mung bean sprouts',
  'soybean sprouts',
  'chicken breast',
'chicken thighs',
'chicken wings',
'chicken drumsticks',
'ground chicken',
'rotisserie chicken',
'chicken tenders',
'chicken liver',
'chicken gizzards',
'chicken sausage',
'turkey breast',
'ground turkey',
'turkey legs',
'turkey wings',
'turkey sausage',
'duck breast',
'duck legs',
'ground duck',
'duck confit',
'duck liver',
'beef steak',
'ground beef',
'beef brisket',
'beef ribs',
'beef tenderloin',
'beef liver',
'beef tongue',
'corned beef',
'roast beef',
'beef jerky',
'pork chops',
'ground pork',
'pork tenderloin',
'pork belly',
'pork ribs',
'pork shoulder',
'bacon',
'ham',
'prosciutto',
'pork sausage',
'lamb chops',
'ground lamb',
'lamb shank',
'lamb shoulder',
'lamb ribs',
'lamb liver',
'veal cutlets',
'veal chops',
'ground veal',
'veal liver',
'mozzarella cheese',
'cheddar cheese',
'parmesan cheese',
'gouda cheese',
'feta cheese',
'brie cheese',
'camembert cheese',
'goat cheese',
'ricotta cheese',
'blue cheese',
'paneer',
'swiss cheese',
'provolone cheese',
'halloumi cheese',
'havarti cheese',
'manchego cheese',
'gruyere cheese',
'tilapia',
'haddock',
'trout',
'mackerel',
'anchovies',
'sardines',
'snapper',
'halibut',
'monkfish',
'swordfish',
'mussels',
'clams',
'scallops',
'oysters',
'squid',
'octopus',
'crab',
'lobster',
'shrimp',
'crayfish',
'lamb roast',
'leg of lamb',
'lamb kebabs',
'lamb burgers',
'venison steak',
'ground venison',
'venison sausage',
'bison steak',
'ground bison',
'bison burgers',
'duck breast',
'roasted duck',
'goose breast',
'ground goose',
'quail',
'pheasant',
'rabbit',
'frog legs',
'escargot',
'caviar',
'roe',
'uni (sea urchin)',
'conch',
'abalone',
'kohlrabi',
'fennel bulb',
'mizuna',
'tatsoi',
'microgreens',
'morel mushrooms',
'chanterelle mushrooms',
'porcini mushrooms',
'truffle',
'lobster tail',
'king crab legs',
'rock crab',
'sunchokes',
'chayote',
'salsify',
'kale sprouts',
'broccolini',
'purple cabbage',
'broccoli rabe',
'red leaf lettuce',
'green leaf lettuce',
'butter lettuce',
'salad greens',
'mizuna greens',
'tatsoi greens',
'collard greens',
'mustard greens',
'beet greens',
'turnip greens',
'pea shoots',
'basil sprouts',
'cilantro sprouts',
'daikon sprouts',
'wasabi root',
'horseradish',
'borage',
'purslane',
'malabar spinach',
'amaranth leaves',
'carrot greens',
'fenugreek leaves',
'lemon balm',
'sorrel',
'sculpit',
'sea kale',
'glasswort',
'samphire',
'salicornia',
'sea beans',
'red dulse',
'irish moss',
'spotted tripe',
'sheep sorrel',
'wood sorrel',
'curly endive',
'broad beans',
'purple cauliflower',
'romanesco',
'sunflower greens',
'pea greens',
'radish greens',
'banana',
'pineapple',
'watermelon',
'kiwi',
'mango',
'papaya',
'grapes',
'figs',
'dates',
'prunes',
'cantaloupe',
'honeydew melon',
'peach',
'nectarine',
'apricot',
'guava',
'pomegranate',
'passion fruit',
'starfruit',
'dragon fruit',
'lychee',
'jackfruit',
'durian',
'coconut',
'orange',
'lemon',
'lime',
'grapefruit',
'tangerine',
'mandarin',
'satsuma',
'clementine',
'tomato',
'cucumber',
'carrot',
'potato',
'beetroot',
'sweet corn',
'green beans',
'sugar snap peas',
'peas',
'red bell pepper',
'yellow bell pepper',
'green bell pepper',
'pumpkin',
'squash',
'zucchini',
'cabbage',
'lettuce',
'arugula',
'watercress',
'endive',
'collard greens',
'mustard greens',
'tatsoi',
'bok choy',
'swiss chard',
'leeks',
'parsnips',
'artichoke hearts',
'okra',
'jalapeno',
'habanero',
'serrano pepper',
'chipotle',
'paprika',
'cayenne pepper',
'black pepper',
'white pepper',
'cardamom',
'clove',
'cinnamon',
'nutmeg',
'allspice',
'anise',
'vanilla bean',
'saffron',
'bay leaf',
'lemongrass',
'galangal',
'shallots',
'scallions',
'horseradish',
'wasabi',
'miso',
'kimchi',
'kombucha',
'tempeh',
'sauerkraut',
'pickles',
'anchovies',
'sardines',
'mackerel',
'herring',
'trout',
'bass',
'swordfish',
'halibut',
'flounder',
'tilapia',
'catfish',
'blue crab',
'lobster',
'oysters',
'mussels',
'scallops',
'clams',
'squid',
'octopus',
'caviar',
'venison',
'elk',
'bison',
'duck breast',
'goose',
'rabbit',
'quail',
'pigeon',
'frog legs',
'alligator',
'ostrich',
'emu',
'kangaroo',
'potato chips',
'fried chicken (KFC)',
'beef hamburger',
'cheeseburger (McDonald)',
'hot dog (Nathans Famous)',
'spaghetti bolognese',
'lasagna',
'ravioli',
'fettuccine alfredo',
'macaroni and cheese',
'pepperoni pizza',
'tacos (beef)',
'burritos (chicken)',
'quesadillas (cheese)',
'nachos (beef)',
'enchiladas (chicken)',
'fajitas (steak)',
'tamales (pork)',
'salmon sushi',
'sashimi (tuna)',
'ramen (tonkotsu)',
'udon (tempura)',
'tempura shrimp',
'teriyaki chicken',
'gyoza (pork)',
'katsu (chicken)',
'pho (beef)',
'banh mi (pork)',
'spring rolls (vegetable)',
'dumplings (pork)',
'baozi (pork)',
'pad thai (shrimp)',
'green curry (chicken)',
'red curry (beef)',
'massaman curry (chicken)',
'panang curry (shrimp)',
'dim sum',
'congee',
'chicken satay',
'bibimbap',
'kimchi fried rice',
'chicken biryani',
'tandoori chicken',
'garlic naan',
'samosa (potato)',
'paneer tikka',
'butter chicken',
'vindaloo (beef)',
'pav bhaji',
'chole bhature',
'masala dosa',
'idli',
'pani puri',
'bhel puri',
'sev puri',
'chicken tikka masala',
'rogan josh',
'prawn curry',
'fish curry',
'lamb shish kebab',
'falafel',
'hummus',
'baba ganoush',
'tabbouleh',
'baklava',
'chicken shawarma',
'gyros (lamb)',
'moussaka',
'spanakopita',
'chicken souvlaki',
'seafood paella',
'gazpacho',
'tapas',
'empanadas (beef)',
'churros',
'ceviche (shrimp)',
'arepas (cheese)',
'pupusas (pork)',
'feijoada',
'picanha',
'brigadeiro',
'tiramisu',
'gelato (pistachio)',
'cannoli',
'panna cotta',
'risotto (mushroom)',
'gnocchi',
'bruschetta',
'caprese salad',
'focaccia',
'prosciutto',
'salami',
'mortadella',
'calzone (ham)',
'stromboli (pepperoni)',
'mochi (green tea)',
'dango',
'takoyaki',
'okonomiyaki',
'kimbap (vegetable)',
'japchae',
'tangyuan',
'zongzi',
'mapo tofu',
'hot pot',
'peking duck',
'chicken chow mein',
'kung pao chicken',
'sweet and sour pork',
'shrimp fried rice',
'orange chicken (Panda Express)',
'egg foo young',
'lo mein (beef)',
'crab rangoon',
'honey walnut shrimp',
'sesame chicken',
'lemon chicken',
'mango sticky rice',
'pineapple fried rice',
'samosa chaat',
'fried calamari',
'clam chowder',
'lobster bisque',
'seafood paella',
'moules-frites',
'chicken cordon bleu',
'beef bourguignon',
'coq au vin',
'ratatouille',
'quiche lorraine',
'croissant',
'pain au chocolat',
'crème brûlée',
'soufflé',
'madeleines',
'eclairs',
'macarons',
'tarte tatin',
'apple pie',
'chocolate chip cookies',
'brownies',
'cheesecake',
'carrot cake',
'red velvet cake',
'cupcakes (vanilla)',
'banana bread',
'blueberry muffins',
'pancakes (blueberry)',
'waffles (Belgian)',
'french toast',
'crepes (Nutella)',
'eggs benedict',
'omelette (cheese)',
'scrambled eggs',
'sunny-side up eggs',
'poached eggs',
'deviled eggs',
'huevos rancheros',
'chicken and waffles',
'biscuits and gravy',
'bagels (everything)',
'lox',
'cream cheese',
'granola',
'smoothie bowl (acai)',
'chia pudding',
'overnight oats',
'porridge',
'acai bowl',
'fruit salad',
'yogurt parfait',
'croque monsieur',
'croque madame',
];

const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('inputbox');
const nutritionalInfoBox = document.querySelector('.nutritional-info');
const searchButton = document.querySelector('.search-button');

let debounceTimer;
inputBox.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
      result = availableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
    }
    display(result);

    if (!result.length) {
      resultsBox.innerHTML = '';
    }
  }, 300);
});

function display(result) {
  const content = result.map((keyword) => {
    return `<li data-keyword="${keyword}">${keyword}</li>`;
  });

  resultsBox.innerHTML = `<ul>${content.join('')}</ul>`;
  resultsBox.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', () => {
      inputBox.value = li.dataset.keyword;
      resultsBox.innerHTML = '';
    });
  });
}

searchButton.addEventListener('click', () => {
  const input = inputBox.value.toLowerCase();
  let info = '';

  switch (input) {
    case 'blackberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>43 calories per 100g</p>
          <p>High in vitamins C, K and Fiber</p>
        </div>
      `;
      break;
    case 'raspberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>52 calories per 100g</p>
          <p>High in antioxidants</p>
          <p>Vitamin C</p>
        </div>
      `;
      break;
    case 'elderberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>73 calories per 100g</p>
          <p>Rich in vitamins A and C</p>
          <p>Immune-supporting</p>
        </div>
      `;
      break;
    case 'rowan berries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>80 calories per 100g</p>
          <p>High in vitamin C</p>
          <p>Used for jams/jellies</p>
        </div>
      `;
      break;
    case 'bilberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>57 calories per 100g</p>
          <p>High in antioxidants</p>
          <p>Support eye health</p>
        </div>
      `;
      break;
    case 'sloe fruits':
    case 'blackthorn fruits':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>83 calories per 100g</p>
          <p>High in vitamin C</p>
          <p>Used for gin/liqueurs</p>
        </div>
      `;
      break;
    case 'crab apples':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>52 calories per 100g</p>
          <p>High in fiber</p>
          <p>Vitamin C</p>
          <p>Used for cooking</p>
        </div>
      `;
      break;
    case 'apples':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>52 calories per 100g</p>
          <p>High in fiber</p>
          <p>Vitamin C</p>
          <p>Antioxidants</p>
        </div>
      `;
      break;
    case 'pears':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>57 calories per 100g</p>
          <p>High in fiber</p>
          <p>Vitamin C</p>
          <p>Hydrating</p>
        </div>
      `;
      break;
    case 'cherries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>50 calories per 100g</p>
          <p>High in antioxidants</p>
          <p>Melatonin</p>
        </div>
      `;
      break;
    case 'plums':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>46 calories per 100g</p>
          <p>High in vitamins A and C</p>
          <p>Fiber</p>
        </div>
      `;
      break;
    case 'damson':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>46 calories per 100g</p>
          <p>High in vitamins</p>
          <p>Used for jams/preserves</p>
        </div>
      `;
      break;
    case 'bullace':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>46 calories per 100g</p>
          <p>Similar to plums</p>
        </div>
      `;
      break;
    case 'hawthorn berries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>29 calories per 100g</p>
          <p>High in antioxidants</p>
        </div>
      `;
      break;
    case 'rosehips':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>206 calories per 100g</p>
          <p>Extremely high in vitamin C</p>
        </div>
      `;
      break;
    case 'wild strawberries':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>32 calories per 100g</p>
          <p>High in vitamin C</p>
          <p>Antioxidants</p>
        </div>
      `;
      break;
    case 'broccoli':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>55 calories per 100g</p>
          <p>High in vitamins and minerals</p>
        </div>
      `;
      break;
    case 'chicken breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>165 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'salmon':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>206 calories per 100g</p>
          <p>High in omega-3 fatty acids</p>
        </div>
      `;
      break;
    case 'brown rice':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>111 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'spinach':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>23 calories per 100g</p>
          <p>High in iron and calcium</p>
        </div>
      `;
      break;
    case 'lentils':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>116 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'avocado':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>160 calories per 100g</p>
          <p>High in healthy fats</p>
        </div>
      `;
      break;
    case 'sweet potato':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>86 calories per 100g</p>
          <p>High in vitamins A and C</p>
        </div>
      `;
      break;
    case 'greek yogurt':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>59 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'quinoa':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'almonds':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>579 calories per 100g</p>
          <p>High in healthy fats and fiber</p>
        </div>
      `;
      break;
    case 'oats':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>389 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'eggs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>155 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'kale':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>35 calories per 100g</p>
          <p>High in vitamins A, C, and K</p>
        </div>
      `;
      break;
    case 'turkey breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>135 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'black beans':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>132 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'peanut butter':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>588 calories per 100g</p>
          <p>High in healthy fats</p>
        </div>
      `;
      break;
    case 'cauliflower':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>25 calories per 100g</p>
          <p>High in fiber and vitamins</p>
        </div>
      `;
      break;
    case 'wild caught tuna':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>144 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'whole wheat bread':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>247 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'edamame':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>121 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'cottage cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>98 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken thigh':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>209 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'tofu':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>76 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'brussels sprouts':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>43 calories per 100g</p>
          <p>High in vitamins C and K</p>
        </div>
      `;
      break;
    case 'quinoa pasta':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>357 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'greek salad':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>117 calories per 100g</p>
          <p>High in healthy fats</p>
        </div>
      `;
      break;
    case 'chicken noodle soup':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>32 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef tenderloin':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'roasted sweet potato':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>86 calories per 100g</p>
          <p>High in vitamins A and C</p>
        </div>
      `;
      break;
    case 'grilled salmon':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>206 calories per 100g</p>
          <p>High in omega-3 fatty acids</p>
        </div>
      `;
      break;
    case 'brown rice sushi':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>111 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'baked cod':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>82 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'quinoa stuffed bell pepper':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'roasted brussels sprouts':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>43 calories per 100g</p>
          <p>High in vitamins C and K</p>
        </div>
      `;
      break;
    case 'lentil soup':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>116 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'chicken veggie stir fry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>165 calories per 100g</p>
          <p>High in protein and vitamins</p>
        </div>
      `;
      break;
    case 'baked chicken parmesan':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>189 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'avocado toast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>160 calories per 100g</p>
          <p>High in healthy fats</p>
        </div>
      `;
      break;
    case 'vegetable pasta':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>157 calories per 100g</p>
          <p>High in vitamins</p>
        </div>
      `;
      break;
    case 'egg white omelette':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>52 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'cucumber salad':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>16 calories per 100g</p>
          <p>High in vitamins and fiber</p>
        </div>
      `;
      break;
    case 'blackened tilapia':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>129 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chickpea curry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>164 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'soba noodle salad':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>99 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'eggplant parmesan':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>188 calories per 100g</p>
          <p>High in vitamins and fiber</p>
        </div>
      `;
      break;
    case 'cauliflower pizza':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>84 calories per 100g</p>
          <p>High in fiber</p>
        </div>
      `;
      break;
    case 'shrimp stir fry':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>95 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'greek chicken souvlaki':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>121 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey chili':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>110 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'spaghetti squash':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>31 calories per 100g</p>
          <p>High in vitamins A and C</p>
        </div>
      `;
      break;
    case 'lentil burger':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>195 calories per 100g</p>
          <p>High in protein and fiber</p>
        </div>
      `;
      break;
    case 'steamed broccoli':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>35 calories per 100g</p>
          <p>High in vitamins C and K</p>
        </div>
      `;
      break;
    case 'zucchini noodles':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>17 calories per 100g</p>
          <p>High in vitamins</p>
        </div>
      `;
      break;
        case 'mushrooms':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>22 calories per 100g</p>
              <p>Low in calories and high in vitamins B, C, and D</p>
            </div>
          `;
          break;
        case 'onions':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>40 calories per 100g</p>
              <p>Rich in vitamin C, fiber, and antioxidants</p>
            </div>
          `;
          break;
        case 'garlic':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>149 calories per 100g</p>
              <p>High in vitamins B and C, and contains sulfur compounds with potential health benefits</p>
            </div>
          `;
          break;
        case 'ginger':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>80 calories per 100g</p>
              <p>Rich in gingerol and contains anti-inflammatory properties</p>
            </div>
          `;
          break;
        case 'turmeric':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>354 calories per 100g</p>
              <p>High in curcumin, a powerful antioxidant with potential health benefits</p>
            </div>
          `;
          break;
        case 'basil':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>22 calories per 100g</p>
              <p>High in vitamins K and A, and contains antioxidant and anti-inflammatory compounds</p>
            </div>
          `;
          break;
        case 'rosemary':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>131 calories per 100g</p>
              <p>Rich in antioxidants and has been shown to improve brain function</p>
            </div>
          `;
          break;
        case 'thyme':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>24 calories per 100g</p>
              <p>High in vitamin C, K, and manganese, and has antimicrobial properties</p>
            </div>
          `;
          break;
        case 'sage':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>30 calories per 100g</p>
              <p>High in vitamins K and A, and contains anti-inflammatory and antioxidant properties</p>
            </div>
          `;
          break;
        case 'oregano':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>43 calories per 100g</p>
              <p>Rich in antioxidants and has been shown to have antimicrobial effects</p>
            </div>
          `;
          break;
        case 'parsley':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>36 calories per 100g</p>
              <p>High in vitamins A, C, and K, and contains beneficial plant compounds</p>
            </div>
          `;
          break;
        case 'cilantro':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>23 calories per 100g</p>
              <p>High in vitamins A, C, and K, and has been shown to have anti-inflammatory effects</p>
            </div>
          `;
          break;
        case 'dill':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>43 calories per 100g</p>
              <p>Rich in vitamins A, C, and K, and contains compounds with potential health benefits</p>
            </div>
          `;
          break;
        case 'fennel':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>31 calories per 100g</p>
              <p>High in fiber, vitamin C, and potassium, and has been shown to have digestive benefits</p>
            </div>
          `;
          break;
        case 'celery':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>16 calories per 100g</p>
              <p>Low in calories and high in vitamins A, C, and K, and contains antioxidant compounds</p>
            </div>
          `;
          break;
        case 'radish':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>16 calories per 100g</p>
              <p>Low in calories and high in vitamin C, fiber, and antioxidants</p>
            </div>
          `;
          break;
        case 'turnip':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>28 calories per 100g</p>
              <p>Low in calories and high in vitamin C, fiber, and antioxidants</p>
            </div>
          `;
          break;
        case 'rutabaga':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>35 calories per 100g</p>
              <p>Low in calories and high in fiber, vitamins C and B6, and minerals</p>
            </div>
          `;
          break;
        case 'eggplant':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>25 calories per 100g</p>
              <p>Low in calories and high in fiber, vitamins, and antioxidants</p>
            </div>
          `;
          break;
        case 'artichoke':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>47 calories per 100g</p>
              <p>Low in calories and high in fiber, vitamin C, and antioxidants</p>
            </div>
          `;
          break;
        case 'chia seeds':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>486 calories per 100g</p>
              <p>High in fiber, protein, omega-3s, and antioxidants</p>
            </div>
          `;
          break;
        case 'flaxseeds':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>534 calories per 100g</p>
              <p>High in fiber, omega-3s, and lignans with potential health benefits</p>
            </div>
          `;
          break;
        case 'hemp seeds':
          info = `
            <div class="info">
              <p>Nutrition</p>
              <p>573 calories per 100g</p>
              <p>High in protein, fiber, and healthy fats like omega-3s and omega-6s</p>
            </div>
          `;
          break;
          case 'carrots':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>41 calories per 100g</p>
      <p>Rich in beta-carotene and fiber</p>
      <p>Good for eye health</p>
    </div>
  `;
  break;

case 'potatoes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>77 calories per 100g</p>
      <p>High in potassium and vitamin C</p>
      <p>Energy-boosting</p>
    </div>
  `;
  break;

case 'tomatoes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>18 calories per 100g</p>
      <p>High in vitamin C and antioxidants</p>
      <p>Heart-healthy</p>
    </div>
  `;
  break;

  case 'bell peppers':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>31 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Good for immune health</p>
    </div>
  `;
  break;

case 'cucumber':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>16 calories per 100g</p>
      <p>High in water content</p>
      <p>Hydrating and refreshing</p>
    </div>
  `;
  break;

case 'green beans':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>31 calories per 100g</p>
      <p>High in fiber and vitamins</p>
      <p>Good for digestive health</p>
    </div>
  `;
  break;

case 'asparagus':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>20 calories per 100g</p>
      <p>Rich in vitamins A, C, and K</p>
      <p>Anti-inflammatory properties</p>
    </div>
  `;
  break;

case 'peas':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>81 calories per 100g</p>
      <p>High in protein and fiber</p>
      <p>Supports heart health</p>
    </div>
  `;
  break;

case 'corn':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>86 calories per 100g</p>
      <p>Rich in carbohydrates and fiber</p>
      <p>Energy-boosting</p>
    </div>
  `;
  break;

case 'beets':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>43 calories per 100g</p>
      <p>High in folate and manganese</p>
      <p>Supports blood health</p>
    </div>
  `;
  break;

case 'cabbage':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>High in vitamins C and K</p>
      <p>Anti-inflammatory properties</p>
    </div>
  `;
  break;

case 'lettuce':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>15 calories per 100g</p>
      <p>High in water and fiber</p>
      <p>Hydrating and low-calorie</p>
    </div>
  `;
  break;

case 'arugula':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>Rich in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'bok choy':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>13 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Anti-inflammatory properties</p>
    </div>
  `;
  break;

case 'swiss chard':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>19 calories per 100g</p>
      <p>Rich in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'collard greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'green onions':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'leeks':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>61 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Supports heart health</p>
    </div>
  `;
  break;

case 'shallots':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>72 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'butternut squash':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>45 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Supports eye health</p>
    </div>
  `;
  break;

case 'acorn squash':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>40 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'spaghetti squash':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>31 calories per 100g</p>
      <p>High in fiber</p>
      <p>Low in calories</p>
    </div>
  `;
  break;

case 'pumpkin':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>26 calories per 100g</p>
      <p>Rich in beta-carotene and fiber</p>
      <p>Supports eye health</p>
    </div>
  `;
  break;

case 'radicchio':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>Rich in vitamins K and C</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'watercress':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>11 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Anti-inflammatory properties</p>
    </div>
  `;
  break;

case 'endive':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>17 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'jicama':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>38 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'okra':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>33 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'celery root (celeriac)':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>42 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'parsnips':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>75 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'jerusalem artichokes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>73 calories per 100g</p>
      <p>High in fiber and iron</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'radishes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>16 calories per 100g</p>
      <p>Rich in vitamin C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'turnip greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'mustard greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>27 calories per 100g</p>
      <p>Rich in vitamins A, C, and K</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'rutabaga':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>38 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'snow peas':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>42 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'sugar snap peas':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>42 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'daikon radish':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>18 calories per 100g</p>
      <p>Rich in vitamin C</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'water chestnuts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>97 calories per 100g</p>
      <p>High in fiber</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'bamboo shoots':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>27 calories per 100g</p>
      <p>High in fiber and vitamins</p>
      <p>Low in calories</p>
    </div>
  `;
  break;

case 'baby corn':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>26 calories per 100g</p>
      <p>High in fiber and vitamins</p>
      <p>Low in calories</p>
    </div>
  `;
  break;

case 'lotus root':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>74 calories per 100g</p>
      <p>High in fiber and vitamin C</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;

case 'seaweed':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>45 calories per 100g</p>
      <p>Rich in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'nori':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>35 calories per 100g</p>
      <p>High in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'wakame':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>45 calories per 100g</p>
      <p>Rich in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'kombu':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>43 calories per 100g</p>
      <p>High in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'hijiki':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>50 calories per 100g</p>
      <p>Rich in iodine and vitamins</p>
      <p>Supports thyroid function</p>
    </div>
  `;
  break;

case 'alfalfa sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>Rich in vitamins K and C</p>
      <p>Supports bone health</p>
    </div>
  `;
  break;

case 'mung bean sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>30 calories per 100g</p>
      <p>High in vitamins C and K</p>
      <p>Supports immune health</p>
    </div>
  `;
  break;

case 'soybean sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>122 calories per 100g</p>
      <p>High in protein and fiber</p>
      <p>Supports digestive health</p>
    </div>
  `;
  break;
    case 'chicken breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>165 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken thighs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>209 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken wings':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>203 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken drumsticks':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>172 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'rotisserie chicken':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>151 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken tenders':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>119 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken gizzards':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>94 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'chicken sausage':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>180 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>135 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground turkey':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>149 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey legs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey wings':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>186 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'turkey sausage':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>196 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'duck breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>190 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'duck legs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>221 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground duck':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'duck confit':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>240 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'duck liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>130 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef steak':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>271 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground beef':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef brisket':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>288 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef ribs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>320 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef tenderloin':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>194 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>135 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef tongue':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>284 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'corned beef':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'roast beef':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'beef jerky':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>410 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork chops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>231 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground pork':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>262 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork tenderloin':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork belly':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>518 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork ribs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>294 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork shoulder':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>246 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'bacon':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>541 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ham':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>145 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'prosciutto':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>247 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'pork sausage':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>301 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb chops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>282 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground lamb':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>283 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb shank':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>201 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb shoulder':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb ribs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>376 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'lamb liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>168 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'veal cutlets':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>160 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'veal chops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>181 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'ground veal':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>170 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;
    case 'veal liver':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>140 calories per 100g</p>
          <p>High in protein</p>
        </div>
      `;
      break;

    case 'mozzarella cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>280 calories per 100g</p>
          <p>High in protein and calcium</p>
          <p>Good for bone health</p>
        </div>
      `;
      break;

    case 'cheddar cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>403 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium and vitamin K</p>
        </div>
      `;
      break;

    case 'parmesan cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>431 calories per 100g</p>
          <p>High in protein and fat</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'gouda cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>356 calories per 100g</p>
          <p>High in protein and calcium</p>
          <p>Good source of vitamin D</p>
        </div>
      `;
      break;

    case 'feta cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>264 calories per 100g</p>
          <p>Rich in protein and calcium</p>
          <p>Contains probiotics</p>
        </div>
      `;
      break;

    case 'brie cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>334 calories per 100g</p>
          <p>Rich in fat and protein</p>
          <p>Good source of vitamin B12</p>
        </div>
      `;
      break;

    case 'camembert cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>300 calories per 100g</p>
          <p>High in fat and protein</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'goat cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>364 calories per 100g</p>
          <p>High in fat and protein</p>
          <p>Good source of calcium and vitamin A</p>
        </div>
      `;
      break;

    case 'ricotta cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>174 calories per 100g</p>
          <p>High in protein and calcium</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'blue cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>353 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium</p>
        </div>
      `;
      break;

    case 'paneer':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>265 calories per 100g</p>
          <p>High in protein and fat</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'swiss cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>380 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium</p>
        </div>
      `;
      break;

    case 'provolone cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>351 calories per 100g</p>
          <p>High in protein and fat</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'halloumi cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>321 calories per 100g</p>
          <p>High in protein and calcium</p>
          <p>Good source of vitamin A</p>
        </div>
      `;
      break;

    case 'havarti cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>371 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium</p>
        </div>
      `;
      break;

    case 'manchego cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>395 calories per 100g</p>
          <p>High in protein and fat</p>
          <p>Rich in calcium</p>
        </div>
      `;
      break;

    case 'gruyere cheese':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>413 calories per 100g</p>
          <p>Rich in protein and fat</p>
          <p>High in calcium</p>
        </div>
      `;
      break;

    case 'tilapia':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>96 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'haddock':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>90 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'trout':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>141 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'mackerel':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>205 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'anchovies':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>131 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'sardines':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>208 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids and calcium</p>
        </div>
      `;
      break;

    case 'snapper':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>128 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'halibut':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>111 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'monkfish':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>76 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'swordfish':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>144 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'mussels':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>86 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in vitamin B12 and iron</p>
        </div>
      `;
      break;

    case 'clams':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>74 calories per 100g</p>
          <p>High in protein</p

>
          <p>Rich in vitamin B12 and iron</p>
        </div>
      `;
      break;

    case 'scallops':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>111 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'oysters':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>68 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in zinc and vitamin B12</p>
        </div>
      `;
      break;

    case 'squid':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>92 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'octopus':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>82 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'crab':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>97 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'lobster':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>89 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'shrimp':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>99 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'crayfish':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>87 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'lamb roast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>258 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'leg of lamb':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>294 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron and vitamin B12</p>
        </div>
      `;
      break;

    case 'lamb kebabs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron and zinc</p>
        </div>
      `;
      break;

    case 'lamb burgers':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>250 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron and vitamin B12</p>
        </div>
      `;
      break;

    case 'venison steak':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>158 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'ground venison':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>187 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'venison sausage':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>220 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'bison steak':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'ground bison':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>124 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'bison burgers':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>204 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'duck breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>337 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'roasted duck':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>337 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'goose breast':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>161 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'ground goose':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>185 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'quail':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>134 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'pheasant':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>133 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in iron</p>
        </div>
      `;
      break;

    case 'rabbit':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>136 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'frog legs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>73 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'escargot':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>90 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'caviar':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>264 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'roe':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'uni (sea urchin)':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>120 calories per 100g</p>
          <

p>High in protein</p>
          <p>Rich in omega-3 fatty acids</p>
        </div>
      `;
      break;

    case 'conch':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>130 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'abalone':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>105 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'kohlrabi':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>27 calories per 100g</p>
          <p>High in fiber</p>
          <p>Rich in vitamin C</p>
        </div>
      `;
      break;

    case 'fennel bulb':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>31 calories per 100g</p>
          <p>High in fiber</p>
          <p>Rich in vitamin C</p>
        </div>
      `;
      break;

    case 'mizuna':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>21 calories per 100g</p>
          <p>High in vitamins A and C</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'tatsoi':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>20 calories per 100g</p>
          <p>High in vitamins A and C</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'microgreens':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>29 calories per 100g</p>
          <p>Rich in vitamins C, E, and K</p>
          <p>High in antioxidants</p>
        </div>
      `;
      break;

    case 'morel mushrooms':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>31 calories per 100g</p>
          <p>High in vitamins D and B</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'chanterelle mushrooms':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>38 calories per 100g</p>
          <p>High in vitamins D and B</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'porcini mushrooms':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>26 calories per 100g</p>
          <p>High in protein and fiber</p>
          <p>Rich in antioxidants</p>
        </div>
      `;
      break;

    case 'truffle':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>284 calories per 100g</p>
          <p>Rich in protein and fiber</p>
          <p>High in vitamins and minerals</p>
        </div>
      `;
      break;

    case 'lobster tail':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>143 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'king crab legs':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>82 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

    case 'rock crab':
      info = `
        <div class="info">
          <p>Nutrition</p>
          <p>84 calories per 100g</p>
          <p>High in protein</p>
          <p>Low in fat</p>
        </div>
      `;
      break;

case 'sunchokes':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>73 calories per 100g</p>
      <p>High in fiber</p>
      <p>Rich in iron</p>
    </div>
  `;
  break;

case 'chayote':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>19 calories per 100g</p>
      <p>Low in calories</p>
      <p>High in vitamin C</p>
    </div>
  `;
  break;

case 'salsify':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>82 calories per 100g</p>
      <p>High in fiber</p>
      <p>Rich in potassium</p>
    </div>
  `;
  break;

case 'kale sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>50 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'broccolini':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>35 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'purple cabbage':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>31 calories per 100g</p>
      <p>High in vitamins C and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'broccoli rabe':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'red leaf lettuce':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>15 calories per 100g</p>
      <p>Low in calories</p>
      <p>Rich in vitamins A and K</p>
    </div>
  `;
  break;

case 'green leaf lettuce':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>15 calories per 100g</p>
      <p>Low in calories</p>
      <p>Rich in vitamins A and K</p>
    </div>
  `;
  break;

case 'butter lettuce':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>13 calories per 100g</p>
      <p>Low in calories</p>
      <p>Rich in vitamins A and K</p>
    </div>
  `;
  break;

case 'salad greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>20 calories per 100g</p>
      <p>Low in calories</p>
      <p>Rich in vitamins A and C</p>
    </div>
  `;
  break;

case 'mizuna greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>21 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'tatsoi greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>20 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'collard greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in calcium</p>
    </div>
  `;
  break;

case 'mustard greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>27 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'beet greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Rich in iron</p>
    </div>
  `;
  break;

case 'turnip greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>32 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in calcium</p>
    </div>
  `;
  break;

case 'pea shoots':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>35 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in folate</p>
    </div>
  `;
  break;

case 'basil sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>Rich in vitamins A and K</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'cilantro sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'daikon sprouts':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'wasabi root':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>109 calories per 100g</p>
      <p>High in fiber</p>
      <p>Rich in vitamin C</p>
    </div>
  `;
  break;

case 'horseradish':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>48 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'borage':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>21 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'purslane':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>16 calories per 100g</p>
      <p>High in omega-3 fatty acids</p>
      <p>Rich in vitamins A and C</p>
    </div>
  `;
  break;

case 'malabar spinach':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>19 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in calcium</p>
    </div>
  `;
  break;

case 'amaranth leaves':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>23 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in calcium</p>
    </div>
  `;
  break;

case 'carrot greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>33 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'fenugreek leaves':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>49 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in iron</p>
    </

div>
  `;
  break;

case 'lemon balm':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>44 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'sorrel':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'sculpit':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'sea kale':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>45 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'glasswort':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>50 calories per 100g</p>
      <p>Rich in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'samphire':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>34 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'salicornia':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'sea beans':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>30 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Rich in iodine</p>
    </div>
  `;
  break;

case 'red dulse':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>75 calories per 100g</p>
      <p>High in vitamins A and B12</p>
      <p>Rich in iodine</p>
    </div>
  `;
  break;

case 'irish moss':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>49 calories per 100g</p>
      <p>High in iodine</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'spotted tripe':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>97 calories per 100g</p>
      <p>High in protein</p>
      <p>Rich in vitamin B12</p>
    </div>
  `;
  break;

case 'sheep sorrel':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>22 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'wood sorrel':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>28 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Contains antioxidants</p>
    </div>
  `;
  break;

case 'curly endive':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>17 calories per 100g</p>
      <p>High in vitamins A and K</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'broad beans':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>88 calories per 100g</p>
      <p>High in protein</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'purple cauliflower':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>High in vitamins C and K</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'romanesco':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>25 calories per 100g</p>
      <p>High in vitamin C</p>
      <p>Rich in fiber</p>
    </div>
  `;
  break;

case 'sunflower greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>27 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;

case 'pea greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>35 calories per 100g</p>
      <p>High in vitamins A, C, and K</p>
      <p>Rich in folate</p>
    </div>
  `;
  break;

case 'radish greens':
  info = `
    <div class="info">
      <p>Nutrition</p>
      <p>24 calories per 100g</p>
      <p>High in vitamins A and C</p>
      <p>Rich in antioxidants</p>
    </div>
  `;
  break;
  case 'banana':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>89 calories per 100g</p>
         <p>High in potassium</p>
         <p>Vitamin B6</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'pineapple':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>50 calories per 100g</p>
         <p>High in vitamin C</p>
         <p>Manganese</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'watermelon':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>30 calories per 100g</p>
         <p>High in water content</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'kiwi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>61 calories per 100g</p>
         <p>High in vitamin C</p>
         <p>Dietary fiber</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'mango':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>60 calories per 100g</p>
         <p>High in vitamin C</p>
         <p>Vitamin A</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'papaya':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>43 calories per 100g</p>
         <p>High in vitamin C</p>
         <p>Vitamin A</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'grapes':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>69 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'figs':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>74 calories per 100g</p>
         <p>Dietary fiber</p>
         <p>Calcium</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'dates':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>277 calories per 100g</p>
         <p>High in fiber</p>
         <p>Potassium</p>
         <p>Magnesium</p>
      </div>
   `;
   break;

case 'prunes':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>240 calories per 100g</p>
         <p>High in fiber</p>
         <p>Vitamin K</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'cantaloupe':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>34 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Hydrating</p>
      </div>
   `;
   break;

case 'honeydew melon':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>36 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin B6</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'peach':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>39 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'nectarine':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>44 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'apricot':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>48 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'guava':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>68 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'pomegranate':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>83 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'passion fruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>97 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'starfruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>31 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'dragon fruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>50 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Antioxidants</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'lychee':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>66 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin B6</p>
         <p>Niacin</p>
      </div>
   `;
   break;

case 'jackfruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>95 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'durian':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>147 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Potassium</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'coconut':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>354 calories per 100g</p>
         <p>High in fiber</p>
         <p>Iron</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'orange':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>47 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Folate</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'lemon':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>29 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Potassium</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'lime':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>30 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Dietary fiber</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'grapefruit':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>42 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'tangerine':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>53 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'mandarin':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>53 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'satsuma':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>53 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'clementine':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>47 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Dietary fiber</p>
      </div>
   `;
   break;

case 'tomato':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>18 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Antioxidants</p>
      </div>
   `;
   break;

case 'cucumber':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>16 calories per 100g</p>
         <p>Hydrating</p>
         <p>Vitamin K</p>
         <p>Potassium</p>
      </div>
   `;
   break;

case 'carrot':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>41 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Beta-carotene</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'potato':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>77 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Potassium</p>
         <p>Vitamin B6</p>
      </div>
   `;
   break;

case 'beetroot':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>43 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Folate</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'sweet corn':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>86 calories per 100g</p>
         <p>Fiber</p>
         <p>Vitamin B5</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'green beans':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>31 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'sugar snap peas':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>42 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'peas':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>81 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'red bell pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>31 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'yellow bell pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>27 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'green bell pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>20 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'pumpkin':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>26 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'squash':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>45 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'zucchini':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>17 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'cabbage':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>25 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'lettuce':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>15 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin K</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'arugula':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>25 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin K</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'watercress':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>11 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'endive':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>17 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'collard greens':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>32 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'mustard greens':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>27 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'tatsoi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>25 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'bok choy':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>13 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'swiss chard':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>19 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
      </div>
   `;
   break;

case 'leeks':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>61 calories per 100g</p>
         <p>Vitamin K</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
      </div>
   `;
   break;

case 'parsnips':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>75 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'artichoke hearts':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>47 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'okra':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>33 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin K</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'jalapeno':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>29 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin B6</p>
         <p>Vitamin A</p>
      </div>
   `;
   break;

case 'habanero':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>40 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'serrano pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>32 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'chipotle':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>282 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'paprika':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>282 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'cayenne pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>318 calories per 100g</p>
         <p>Vitamin A</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'black pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>251 calories per 100g</p>
         <p>Vitamin K</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'white pepper':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>296 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'cardamom':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>311 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'clove':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>274 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'cinnamon':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>247 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'nutmeg':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>525 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'allspice':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>263 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'anise':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>337 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'vanilla bean':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>288 calories per 100g</p>
         <p>Vitamin B2</p>
         <p>Calcium</p>
         <p>Magnesium</p>
      </div>
   `;
   break;

case 'saffron':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>310 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'bay leaf':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>313 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'lemongrass':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>99 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'galangal':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>71 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'shallots':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>72 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin B6</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'scallions':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>32 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Vitamin A</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'horseradish':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>48 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'wasabi':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>109 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Fiber</p>
         <p>Folate</p>
      </div>
   `;
   break;

case 'ginger':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>80 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Magnesium</p>
         <p>Fiber</p>
      </div>
   `;
   break;

case 'turmeric':
   info = `
      <div class="info">
         <p>Nutrition</p>
         <p>312 calories per 100g</p>
         <p>Vitamin C</p>
         <p>Iron</p>
         <p>Fiber</p>
      </div>
   `;
   break;
   default:
   info = '';
}

nutritionalInfoBox.innerHTML = info;
});