export const dateformat = (value: string) => {
  return value.match(/^(\d{1,2}-){2}\d{2}(\d{2})?$/);
}

export const timeFormat = (value: string) => {
  return value.match(/^(0[0–9]|1[0–9]|2[0–3]):[0–5][0–9]$/);
}

export const addDays = (days: number, date?: Date): Date => {
  const dateToCalculate = date || new Date();
  dateToCalculate.setDate(dateToCalculate.getDate() + days);

  return dateToCalculate;
};

export const differenceInDays = (compareDate: Date, startDate?: Date): number => {
  const originDate = startDate || new Date();
  const daysBetween = Math.floor((originDate.valueOf() - compareDate.valueOf()) / (1000 * 60 * 60 * 24));

  return Math.abs(daysBetween);
};
