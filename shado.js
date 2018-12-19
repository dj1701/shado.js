var shado = shado || {};

(function (ns) {

    var oneDayDuration = 1000 * 60 * 60 * 24;
    var difference = 0;
    var startDate = 0;
    var endDate = 0;

    var validateParamatersByBothStartAndEndDate = (beginDate, endDate) => {
        var isInvalidFirstDateParams = (Object.prototype.toString.call(beginDate) !== "[object String]" && Object.prototype.toString.call(beginDate) !== "[object Date]");
        var isInvalidSecondDateParams = (Object.prototype.toString.call(endDate) !== "[object String]" && Object.prototype.toString.call(endDate) !== "[object Date]");
        if (isInvalidFirstDateParams || isInvalidSecondDateParams) throw new Error('Parameters are expecting type string or date');
    };

    var validateParamatersByUnit = (day, month, year) => {
        var isInvalid = (Object.prototype.toString.call(day) !== "[object Number]" && Object.prototype.toString.call(day) !== "[object String]") ||
                        (Object.prototype.toString.call(month) !== "[object Number]" && Object.prototype.toString.call(month) !== "[object String]") || 
                        (Object.prototype.toString.call(year) !== "[object Number]" && Object.prototype.toString.call(year) !== "[object String]");
        if (isInvalid) throw new Error('Parameters are expecting type number or string');
    };

    var createDateFromUnits = (day, month, year) => {
        return new Date(year, month - 1, day);
    };

    var getDifference = (startDate, endDate) => {
        return endDate - startDate;
    };

    ns.date = ns.date || {};

    ns.date.createDate = (date, useUsDateFormat) => {
        if (Object.prototype.toString.call(date) === "[object String]") {
            var dateString = date.match(/^(\d{2})[\/|-](\d{2})[\/-](\d{4})/);
            return useUsDateFormat ? new Date(dateString[3], dateString[1] - 1, dateString[2]) : new Date(dateString[3], dateString[2] - 1, dateString[1]);
        }
        return date;
    };

    ns.date.setDates = (beginDate, finishDate, useUsDateFormat) => {
        validateParamatersByBothStartAndEndDate(beginDate, finishDate);

        startDate = ns.date.createDate(beginDate, useUsDateFormat);
        endDate = ns.date.createDate(finishDate, useUsDateFormat);
        difference = getDifference(startDate, endDate);
    };

    ns.date.setDatesByUnits = (startDay, startMonth, startYear, endDay, endMonth, endYear) => {
        validateParamatersByUnit(startDay, startMonth, startYear);
        validateParamatersByUnit(endDay, endMonth, endYear);

        startDate = createDateFromUnits(startDay, startMonth, startYear);
        endDate = createDateFromUnits(endDay, endMonth, endYear);
        difference = getDifference(startDate, endDate);
    };

    ns.date.getYears = _ => {
        var result = (endDate.getFullYear() - startDate.getFullYear());
        return (endDate.getDate() < startDate.getDate()) || (endDate.getMonth() < startDate.getMonth()) ? result -= 1 : result;
    };

    ns.date.getMonths = _ => {
        var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months += endDate.getMonth() - startDate.getMonth();
        return endDate.getDate() < startDate.getDate() ? months -= 1 : months;
    };

    ns.date.getWeeks = _ => ((((difference / oneDayDuration) + 0.5) << 1 ) >> 1 ) / 7 | 0;

    ns.date.getDays = (includeLastDay) => ((((difference / oneDayDuration) + 0.5 ) << 1) >> 1 ) + (includeLastDay ? 1 : 0);

    ns.date.getHours = (includeLastDay) => (((difference / oneDayDuration) | 0) * 24) + (includeLastDay ? 24 : 0);

    ns.date.getMinutes = (includeLastDay) => (((difference / oneDayDuration) | 0) * 24 + (includeLastDay ? 24 : 0)) * 60;

    ns.date.getSeconds = (includeLastDay) => (((((difference / oneDayDuration) + 0.5) << 1) >> 1) + (includeLastDay ? 1 : 0)) * 86400;

    ns.date.format = (date, formatPattern, useUsDateFormat) => {
        var isInvalidDate =
            Object.prototype.toString.call(date) !== "[object String]" &&
            Object.prototype.toString.call(date) !== "[object Date]";
        if (isInvalidDate) {
            throw new Error("Parameters expected should be of type string or date");
        }

        var monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
        var dayNames = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');

        var applyLeadingZero = (unit) => (unit < 0 || unit > 9 ? "" : "0") + unit;
        var ordinalIndicatorSuffix = (day) => {var result = day % 10;if (result === 1) {return day + "st";}if (result === 2) {return day + "nd";}if(result === 3) {return day + "rd";}return day + "th";}
        var timeSpan = {};
        var dateObject = date;

        if (Object.prototype.toString.call(date) === "[object String]") {
            dateObject = ns.date.createDate(date, useUsDateFormat);
        }

        var month = dateObject.getMonth() + 1;
        var day = dateObject.getDate();
        var dayOfWeek = dateObject.getDay();
        timeSpan["d"] = day;
        timeSpan["dd"] = applyLeadingZero(day);
        timeSpan["M"] = applyLeadingZero(month);
        timeSpan["MM"] = applyLeadingZero(month);
        timeSpan["MMM"] = monthNames[month + 11];
        timeSpan["MMMM"] = monthNames[month - 1];
        timeSpan["yyyy"] = dateObject.getFullYear().toString();
        timeSpan["yy"] = timeSpan["yyyy"].slice(2);
        timeSpan["OI"] = ordinalIndicatorSuffix(day);
        timeSpan["DDD"] = dayNames[dayOfWeek + 7];
        timeSpan["DDDD"] = dayNames[dayOfWeek];

        var i = 0;
        var result = "";
        while (i < formatPattern.length) {
            var token = ""
            var formatChar = formatPattern[i];

            while (formatPattern[i] === formatChar) {
                var pattern = formatPattern[i] + formatPattern[i+1];
                if(pattern.match(/OI/)){
                    token = "OI";
                    i+=2;
                    break;
                }

                token += formatPattern[i++];
            }

            if (timeSpan[token] != null) {
                result += timeSpan[token];
                token = "";
            } else {
                result += token;
            }
        }

        return result;
    }

})(shado);

module.exports = shado;