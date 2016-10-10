var shado = shado || {};

(function (ns) {

    var validateParamatersForSupportedTypes = function (firstDate, secondDate) {
        var isInvalidFirstDateParams = (Object.prototype.toString.call(firstDate) !== "[object String]" && Object.prototype.toString.call(firstDate) !== "[object Date]")
        var isInvalidSecondDateParams = (Object.prototype.toString.call(secondDate) !== "[object String]" && Object.prototype.toString.call(secondDate) !== "[object Date]")
        if (isInvalidFirstDateParams || isInvalidSecondDateParams) throw new Error('Parameters are not of expected type string or date');
    };

    ns.date = ns.date || {};

    ns.date.createDate = function (date, useUsDateFormat) {
        if (Object.prototype.toString.call(date) === "[object String]") {
            var dateString = date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
            return useUsDateFormat ? new Date(dateString[3], dateString[1] - 1, dateString[2]) : new Date(dateString[3], dateString[2] - 1, dateString[1]);
        }
        return date;
    };

    ns.date.setValues = function (firstDate, secondDate, useUsDateFormat) {
        var self = this;

        validateParamatersForSupportedTypes(firstDate, secondDate);

        self.firstDate = self.createDate(firstDate, useUsDateFormat);
        self.secondDate = self.createDate(secondDate, useUsDateFormat);
        self.oneDay = 1000 * 60 * 60 * 24;

        self.getDifference = function () {
            return self.secondDate - self.firstDate;
        };
    };

    ns.date.compareYears = function () {
        var difference = this.getDifference();
        return ((difference / this.oneDay) / 365 % 1 === 0 ? (difference / this.oneDay) / 365 : (difference / this.oneDay) / 365.24) | 0;
    };

    ns.date.compareMonths = function () {
        var months = (this.secondDate.getFullYear() - this.firstDate.getFullYear()) * 12;
        months += this.secondDate.getMonth() - this.firstDate.getMonth();
        return this.secondDate.getDate() < this.firstDate.getDate() ? months -= 1 : months;
    };

    ns.date.compareWeeks = function () {
        var difference = this.getDifference();
        return Math.round(difference / this.oneDay) / 7 | 0;
    };

    ns.date.compareDays = function (includeLastDay) {
        var difference = this.getDifference();
        return Math.round(difference / this.oneDay) + (includeLastDay ? 1 : 0);
    };

    ns.date.compareHours = function (includeLastDay) {
        var difference = this.getDifference();
        return (Math.floor(difference / this.oneDay) * 24) + (includeLastDay ? 24 : 0);
    };

    ns.date.compareMinutes = function (includeLastDay) {
        var difference = this.getDifference();
        return (Math.floor(difference / this.oneDay) * 24 + (includeLastDay ? 24 : 0)) * 60;
    };

    ns.date.compareSeconds = function (includeLastDay) {
        var difference = this.getDifference();
        return (Math.round(difference / this.oneDay) + (includeLastDay ? 1 : 0)) * 86400;
    };

})(shado);