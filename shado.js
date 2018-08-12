var shado = shado || {};

(function (ns) {

    var oneDayDuration = 1000 * 60 * 60 * 24;
    var difference = 0;
    var startDate = 0;
    var endDate = 0;

    var validateParamatersByBothStartAndEndDate = function (beginDate, endDate) {
        var isInvalidFirstDateParams = (Object.prototype.toString.call(beginDate) !== "[object String]" && Object.prototype.toString.call(beginDate) !== "[object Date]");
        var isInvalidSecondDateParams = (Object.prototype.toString.call(endDate) !== "[object String]" && Object.prototype.toString.call(endDate) !== "[object Date]");
        if (isInvalidFirstDateParams || isInvalidSecondDateParams) throw new Error('Parameters are expecting type string or date');
    };

    var validateParamatersByUnit = function(day, month, year) {
        var isInvalid = (Object.prototype.toString.call(day) !== "[object Number]" && Object.prototype.toString.call(day) !== "[object String]") ||
                        (Object.prototype.toString.call(month) !== "[object Number]" && Object.prototype.toString.call(month) !== "[object String]") || 
                        (Object.prototype.toString.call(year) !== "[object Number]" && Object.prototype.toString.call(year) !== "[object String]");
        if (isInvalid) throw new Error('Parameters are expecting type number or string');
    };

    var createDateFromUnits = function(day, month, year) {
        return new Date(year, month - 1, day);
    };

    var getDifference = function(startDate, endDate) {
        return endDate - startDate;
    };

    ns.date = ns.date || {};

    ns.date.createDate = function (date, useUsDateFormat) {
        if (Object.prototype.toString.call(date) === "[object String]") {
            var dateString = date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
            return useUsDateFormat ? new Date(dateString[3], dateString[1] - 1, dateString[2]) : new Date(dateString[3], dateString[2] - 1, dateString[1]);
        }
        return date;
    };

    ns.date.setDates = function (beginDate, finishDate, useUsDateFormat) {
        var self = this;

        validateParamatersByBothStartAndEndDate(beginDate, finishDate);

        startDate = self.createDate(beginDate, useUsDateFormat);
        endDate = self.createDate(finishDate, useUsDateFormat);
        difference = getDifference(startDate, endDate);
    };

    ns.date.setDatesByUnits = function(startDay, startMonth, startYear, endDay, endMonth, endYear) {
        validateParamatersByUnit(startDay, startMonth, startYear);
        validateParamatersByUnit(endDay, endMonth, endYear);

        startDate = createDateFromUnits(startDay, startMonth, startYear);
        endDate = createDateFromUnits(endDay, endMonth, endYear);
        difference = getDifference(startDate, endDate);
    };

    ns.date.getYears = function () {
        var result = (endDate.getFullYear() - startDate.getFullYear());
        return (endDate.getDate() < startDate.getDate()) || (endDate.getMonth() < startDate.getMonth()) ? result -= 1 : result;
    };

    ns.date.getMonths = function () {
        var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months += endDate.getMonth() - startDate.getMonth();
        return endDate.getDate() < startDate.getDate() ? months -= 1 : months;
    };

    ns.date.getWeeks = function () {
        return ((((difference / oneDayDuration) + 0.5) << 1 ) >> 1 ) / 7 | 0;
    };

    ns.date.getDays = function (includeLastDay) {
        return ((((difference / oneDayDuration) + 0.5 ) << 1) >> 1 ) + (includeLastDay ? 1 : 0);
    };

    ns.date.getHours = function (includeLastDay) {
        return (((difference / oneDayDuration) | 0) * 24) + (includeLastDay ? 24 : 0);
    };

    ns.date.getMinutes = function (includeLastDay) {
        return (((difference / oneDayDuration) | 0) * 24 + (includeLastDay ? 24 : 0)) * 60;
    };

    ns.date.getSeconds = function (includeLastDay) {
        return (((((difference / oneDayDuration) + 0.5) << 1) >> 1) + (includeLastDay ? 1 : 0)) * 86400;
    };

})(shado);

module.exports = shado;