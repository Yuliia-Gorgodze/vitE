import hero from '../html/hero.html';

const heroSection = document.getElementById('js__hero_section');
const heroBox = Element(hero);
console.log(heroBox);

heroSection.insertAdjacentElement('afterbegin', heroBox);
