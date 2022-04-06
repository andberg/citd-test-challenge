// http://geniuscarrier.com/common-regular-expressions-in-javascript/
// https://javascript.plainenglish.io/the-7-most-commonly-used-regular-expressions-in-javascript-bb4e98288ca6

export const anyTen = (value: string) => {
  return value.match(/^\d{10}$/);
};

export const isDigits = (value: string) => {
  return value.match(/^[0-9]+$/);
};

export const isAlphabetic = (value: string) => {
  return value.match(/^[a-zA-Z]+$/);
};

export const isAlphaNumeric = (value: string) => {
  return value.match(/^[a-zA-Z0-9]+$/);
};

export const isEmail = (value: string) => {
  return value.match(/^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/);
};

export const isUrl = (value: string) => {
  return value.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/);
};

export const isHTMLTag = (value: string) => {
  return value.match(/<\/?[\w\s]*>|<.+[\W]>/);
};

export const isEmptyString = (value: string) => {
  return value.match(/^\s*$/);
};




