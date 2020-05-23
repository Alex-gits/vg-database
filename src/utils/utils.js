import { unionBy } from 'lodash/array';

export const getCroppedImage = (image, string) => {
  return  image ? image.slice(0, 28) + string + image.slice(28) : 'https://optica-nadin.ru/static/img/no-img.png';
}

export const getPlatformIcon = (platform) => {
  const icons = {
    PC: "fab fa-windows",
    Xbox: "fab fa-xbox",
    PlayStation: "fab fa-playstation",
    Nintendo: "fas fa-gamepad",
    Android: "fab fa-android",
    iOS: "fab fa-app-store-ios",
    Linux: "fab fa-linux",
    'Apple Macintosh': "fab fa-apple",
    SEGA: "fab fa-stripe-s",
    Web: "fas fa-globe",
    'Commodore / Amiga': "far fa-keyboard"
  }

  return icons[platform];
}

export const combineArrays = (state, payload) => {
  return unionBy(state, payload, 'id');
}