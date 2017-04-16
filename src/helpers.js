export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function getFunName() {
  const adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];

  const nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'];

  return `${rando(adjectives)}-${rando(adjectives)}-${rando(nouns)}`;
}

export function getSkills(){
  const skills = [
    ['television', 'Front-End', "<p>Coding with CSS, HTML, JavaScript, JQuery technologies I am able to create robust, good looking pixel perfect websites.</p>"],
    ['server', 'Back-End', "<p>PHP is my back-end language that I currently speak and whether you need simple or complex web development, I can help with that!</p>"],
    ['wordpress', 'WordPress', "<p>Need WordPress website? No problem! I have extensive experience of WordPress theme development.</p>"],
    ['shopping-cart', 'E-commerce', "<p>I can develop custom E-commerce solutions using Woocommerce and WordPress, analyse, format, export and import products.</p>"],
    ['paint-brush', 'Design', "<p>Want to separate yourself from your competition? I can provide unique design solutions, so you will stand out of the crowd.</p>"],
    ['envelope-o', 'Email', "<p>Design, coding of email templates. Email template integration with Mailchimp and other email marketing tools.</p>"],
    ['code', 'and more...', "<p>Website speed optimization, integration with 3rd party API's, WordPress plugin installation and development, website support, maintenance.</p>"],
  ];

  return skills;
}