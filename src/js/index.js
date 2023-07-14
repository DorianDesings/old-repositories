// El styles lo importamos aquí, ya se carga después al compilar todo
import catImage from '../assets/images/cat.jpeg';
import '../scss/styles.scss';

const img = document.createElement('img');
img.src = catImage;

document.body.append(img);
