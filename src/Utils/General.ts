export const characterAtPosition = (value: string, nth: number) => {
  return value.charAt(nth);
}

export const splitAt = (value: string, end: number, start: number = 0) => {
  return value.slice(start, end);
}

export const keyInObject = (obj: any, key: string) => {
  return obj[key];
};
