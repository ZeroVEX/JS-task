const formats = {
    "DDMMYYYY" : /^(?<day>0[1-9]|[1-2][0-9]|3[0-1])(?<month>0[1-9]|1[0-2])(?<year>[0-9]{4})$/,
    "MMDDYYYY" : /^(?<month>0[1-9]|1[0-2])(?<day>0[1-9]|[1-2][0-9]|3[0-1])(?<year>[0-9]{4})$/,
    "YYYYDDMM" : /^(?<year>[0-9]{4})(?<day>0[1-9]|[1-2][0-9]|3[0-1])(?<month>0[1-9]|1[0-2])$/,
    "YYYYMMDD" : /^(?<year>[0-9]{4})(?<month>0[1-9]|1[0-2])(?<day>0[1-9]|[1-2][0-9]|3[0-1])$/,
    "DD-MM-YYYY" : /^(?<day>0[1-9]|[1-2][0-9]|3[0-1])-(?<month>0[1-9]|1[0-2])-(?<year>[0-9]{4})$/,
    "MM-DD-YYYY" : /^(?<month>0[1-9]|1[0-2])-(?<day>0[1-9]|[1-2][0-9]|3[0-1])-(?<year>[0-9]{4})$/,
    "YYYY-DD-MM" : /^(?<year>[0-9]{4})-(?<day>0[1-9]|[1-2][0-9]|3[0-1])-(?<month>0[1-9]|1[0-2])$/,
    "YYYY-MM-DD" : /^(?<year>[0-9]{4})-(?<month>0[1-9]|1[0-2])-(?<day>0[1-9]|[1-2][0-9]|3[0-1])$/,
    "DD/MM/YYYY" : /^(?<day>0[1-9]|[1-2][0-9]|3[0-1])\/(?<month>0[1-9]|1[0-2])\/(?<year>[0-9]{4})$/,
    "MM/DD/YYYY" : /^(?<month>0[1-9]|1[0-2])\/(?<day>0[1-9]|[1-2][0-9]|3[0-1])\/(?<year>[0-9]{4})$/,
    "YYYY/DD/MM" : /^(?<year>[0-9]{4})\/(?<day>0[1-9]|[1-2][0-9]|3[0-1])\/(?<month>0[1-9]|1[0-2])$/,
    "YYYY/MM/DD" : /^(?<year>[0-9]{4})\/(?<month>0[1-9]|1[0-2])\/(?<day>0[1-9]|[1-2][0-9]|3[0-1])$/,
}

export function DateConverter() {

}

DateConverter.prototype.convert = function(date, fromFormat, toFormat) {
    let regex = formats[fromFormat];
    if (regex === undefined) {
        return "From format is not supported"
    }
    if (formats[toFormat] === undefined) {
        return "To format is not supported"
    }
    else if (!regex.test(date)) {
        return "Date does not match format"
    }
    else {
        let parsedDate = parseDate(date, regex);
        let convertedDate = buildNewDate(parsedDate, toFormat);
        return convertedDate;
    }
};

function parseDate(date, regex) {
    let parsedDate = date.match(regex).groups;
    return parsedDate;
}

function buildNewDate(parsedDate, toFormat) {
    let newDate = toFormat.replace("MM", parsedDate.month).replace("DD", parsedDate.day).replace("YYYY", parsedDate.year);
    return newDate;
}