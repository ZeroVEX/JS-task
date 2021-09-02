const yearRegex = "(?<year>[0-9]{4})"
const monthRegex = "(?<month>0[1-9]|1[0-2])"
const dayRegex = "(?<day>0[1-9]|[1-2][0-9]|3[0-1])"

const formats = {
    "DDMMYYYY" : "^" + dayRegex + monthRegex + yearRegex + "$",
    "MMDDYYYY" : "^" + monthRegex + dayRegex + yearRegex + "$",
    "YYYYDDMM" : "^" + yearRegex + dayRegex + monthRegex + "$",
    "YYYYMMDD" : "^" + yearRegex + monthRegex + dayRegex + "$",
    "DD-MM-YYYY" : "^" + dayRegex + "-" + monthRegex + "-" + yearRegex + "$",
    "MM-DD-YYYY" : "^" + monthRegex + "-" + dayRegex + "-" + yearRegex + "$",
    "YYYY-DD-MM" : "^" + yearRegex + "-" + dayRegex + "-" + monthRegex + "$",
    "YYYY-MM-DD" : "^" + yearRegex + "-" + monthRegex + "-" + dayRegex + "$",
    "DD/MM/YYYY" : "^" + dayRegex + "/" + monthRegex + "/" + yearRegex + "$",
    "MM/DD/YYYY" : "^" + monthRegex + "/" + dayRegex + "/" + yearRegex + "$",
    "YYYY/DD/MM" : "^" + yearRegex + "/" + dayRegex + "/" + monthRegex + "$",
    "YYYY/MM/DD" : "^" + yearRegex + "/" + monthRegex + "/" + dayRegex + "$",
}

export function convertDate(date, fromFormat, toFormat) {
    let fromFormatRegex = formats[fromFormat];
    let toFormatRegex = formats[toFormat];
    if (fromFormatRegex === undefined) {
        throw new Error("From format is not supported");
    }
    if (toFormatRegex === undefined) {
        throw new Error("To format is not supported");
    }
    fromFormatRegex = new RegExp(fromFormatRegex);
    if (!fromFormatRegex.test(date)) {
        throw new Error("Date does not match format");
    }
    let parsedDate = parseDate(date, fromFormatRegex);
    let convertedDate = buildNewDate(parsedDate, toFormat);
    return convertedDate;
};

function parseDate(date, regex) {
    let parsedDate = date.match(regex).groups;
    return parsedDate;
}

function buildNewDate(parsedDate, toFormat) {
    let newDate = toFormat.replace("MM", parsedDate.month).replace("DD", parsedDate.day).replace("YYYY", parsedDate.year);
    return newDate;
}