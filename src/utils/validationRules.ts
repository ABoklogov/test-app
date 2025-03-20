export const isRequired = (val: string) => ({
  hasPassed: !!val,
  message: 'Заполните это поле'
});

export const charLimit = (limit: number) => (val: string) => ({
  hasPassed: val.length <= limit,
  message: `Должно быть не более ${limit} символов`
});

export const nameValidation = (val: string) => ({
  hasPassed: val.length > 1,
  message: 'Минимум 2 символа'
});

export const dateValidation = (val: string) => ({
  hasPassed: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(val),
  message: 'Формат даты: YYYY-MM-DD'
});

export const emailValidation = (val: string) => ({
  hasPassed: /^(mailto?:)?[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Некорректный имейл'
});

export const phoneValidation = (val: string) => ({
  hasPassed: /^(tel?:)?((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(val),
  message: 'Некорректный телефон'
});
