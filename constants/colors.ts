const tintColorLight = '#2f95dc'; //TODO REMOVE
const tintColorDark = '#fff'; //TODO REMOVE

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
}; //TODO REMOVE

export const WHITE_COLOR = '#FFFFFF';
export const BLACK_COLOR = '#424242';

export const DARK_OVERLAY = '#00000021';
export const LIGHT_OVERLAY = '#FFFFFF21';

export const primaryColors = {
  red: '#ff6358',
  red2: '#f54748',
  blue: '#283d9e',
  blueOcean: '#1274AC',
  blueSky: '#23bde0',
  green: '#53b827',
  pink: '#fe6f9b',
  pink2: '#e7607b',
  pink3: '#fc347f',
  orange: '#ff9411',
  orangeRed: '#ff5c1a',
  purple: '#bf70cc',
  turquoise: '#28bfba',
  black: '#3a3e59'
}

export const DEFAULT_PRIMARY_COLOR = primaryColors['red'];
export type IPrimaryColors = typeof primaryColors;