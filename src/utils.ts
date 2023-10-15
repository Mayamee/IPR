export const rgb2hex = (color: { r: number; g: number; b: number }): string =>
  `#${color.r.toString(16)}${color.g.toString(16)}${color.b.toString(16)}`;

export const darken =
  (amount: number = 1) =>
  (color: {
    r: number;
    g: number;
    b: number;
  }): { r: number; g: number; b: number } => ({
    r: ~~(color.r * amount),
    g: ~~(color.g * amount),
    b: ~~(color.b * amount),
  });
