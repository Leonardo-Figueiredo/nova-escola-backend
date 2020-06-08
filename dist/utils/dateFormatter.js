"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
function dateFormatter(date) {
    var dateToParse = date.toString();
    var parsedDate = date_fns_1.format(date_fns_1.parseISO(dateToParse), 'dd/MM/yyyy');
    return parsedDate;
}
exports.default = dateFormatter;
