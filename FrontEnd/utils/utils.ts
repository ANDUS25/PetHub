import { ToastAndroid } from 'react-native';

var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
var mailFormat =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const specialChar = (text: string) => {
  if (text.match(format)) {
    return true;
  } else {
    return false;
  }
};

const hasaWhiteSpace = (text: string) => {
  return /\s/.test(text);
};

const validationLength = (text: string, number: number) => {
  return text.length < number ? true : false;
};

const emailValidation = (text: string) => {
  return text.match(mailFormat) ? true : false;
};

const toast = (text: string) => {
  ToastAndroid.show(text, ToastAndroid.SHORT);
};

const valueIsEmpty = (text: string) => {
  return text.trim() === '' ? true : false;
};

export {
  hasaWhiteSpace,
  specialChar,
  validationLength,
  emailValidation,
  toast,
  valueIsEmpty,
};
