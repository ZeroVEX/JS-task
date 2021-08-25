import {DateConverter} from './DateConverter.js';

let converter = new DateConverter();
let convertedDate = converter.convert("12319999", "MMDDYYYY", "MM/DD/YYYY");
console.log(convertedDate);
convertedDate = converter.convert("31129999", "DDMMYYYY", "YYYY-DD-MM");
console.log(convertedDate);
convertedDate = converter.convert("9999/12/31", "YYYY/MM/DD", "YYYYDDMM");
console.log(convertedDate);
convertedDate = converter.convert("12-12-9999", "MMDDYY", "MM/DD/YYYY");
console.log(convertedDate);
convertedDate = converter.convert("12-12-9999", "MM/DD/YYYY", "MM/DD/YYYY");
console.log(convertedDate);