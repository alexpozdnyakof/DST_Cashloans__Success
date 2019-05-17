import './../styles/main.scss';
import './../assets/fonts/index.css';
import 'regenerator-runtime/runtime';
const logoSrc = require('./../assets/images/logo.svg');
let logoContainer: any = <HTMLImageElement>document.querySelector('#logo');
logoContainer.src = logoSrc;


