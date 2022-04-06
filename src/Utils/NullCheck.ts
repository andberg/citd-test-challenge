export const notNullOrUndefined = (value: any): boolean => !(value === null || value === undefined);

export const isNullOrUndefined = (value: any): boolean => value === null || value === undefined;

export const isNull = (value: any): boolean => !value && typeof value === 'object';

export function anyNull(values: Array<any>): boolean {
  let hasAnyNull = false;
  for (let i = 0; i < values.length; i++) {
    if (isNull(values[i])) {
      hasAnyNull = true;
      return hasAnyNull;
    }
  }
  return hasAnyNull;
}

export function allNull(values: Array<any>): boolean {
  if (values.length === 0) {
    return false;
  }
  for (let i = 0; i < values.length; i++) {
    if (!isNull(values[i])) {
      return false;
    }
  }
  return true;
}
