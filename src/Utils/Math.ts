export const add = (a: number, b: number) => {
  return a + b;
}

export const subtract = (a: number, b: number) => {
  return a - b;
}
export const multiply = (a: number, b: number) => {
  return a * b;
}

export const divide = (a: number, b: number) => {
  return a / b;
}

export const powerTo = (a: number, b: number) => {
  return Math.pow(a, b);
}

export const compareLarger = (a: number, b: number) => {
  return a > b;
}

export const calculateAll = (a: number, b: number, c: number, d: number, e: number, f: number) => {
  const sum = add(a, b);
  const sub = subtract(sum, c);
  const mult = multiply(sub, d);
  const div = divide(mult, e);
  const pow = powerTo(div, f);
  return pow;
}

export const equalValueAndType = (a: any, b: any) => {
  return a === b && typeof(a) === typeof(b)
};

