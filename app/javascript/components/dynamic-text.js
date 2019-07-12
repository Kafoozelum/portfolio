import Typed from 'typed.js';

const loadDynamicText = () => {
  new Typed('#dynamic-typed-text', {
    strings: ["See what else I've been up to:"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicText };
