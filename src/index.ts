/* Задача уменьшить яркость цветов rgb на 50%, потом конвертировать в hex */

import { darken, rgb2hex } from "./utils";

const colors: { r: number; g: number; b: number }[] = [
  {
    r: 255,
    g: 0,
    b: 0,
  },
  {
    r: 0,
    g: 255,
    b: 0,
  },
  {
    r: 0,
    g: 0,
    b: 255,
  },
  {
    r: 0,
    g: 0,
    b: 0,
  },
  {
    r: 117,
    g: 37,
    b: 28,
  },
];

/* Импераивный подход */

/**
 * Мы возьмем цвет из массива colors, умножим этот цвет на 0.5, отрежем дробную часть,
 * приобразуем все компоненты в 16-ричную систему исчисления, соберем все в строку и
 * добавим в массив resultImperative
 * */

const resultImperative: string[] = [];

for (let i = 0; i < colors.length; i++) {
  const color = colors[i];
  const r = ~~(color.r * 0.5);
  const g = ~~(color.g * 0.5);
  const b = ~~(color.b * 0.5);
  const hex = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
  resultImperative.push(hex);
}

/* Декларативный подход */

/**
 * Вызываем solveTask, задача решена
 */

const solveTask = (colors: { r: number; g: number; b: number }[]): string[] =>
  colors.map(darken(0.5)).map(rgb2hex);

const resultDeclarative = solveTask(colors);

/* Результат */

console.log({
  resultImperative,
  resultDeclarative,
});
