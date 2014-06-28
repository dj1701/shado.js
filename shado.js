var Shado = {
    Date: {
        createDate: function (str) {
            var dateString = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
            return new Date( dateString[3], dateString[2]-1, dateString[1] );
        },

        Compare: function (firstDate, secondDate) {
            var self = this;

            if (Object.prototype.toString.call(firstDate) !== "[object String]" || Object.prototype.toString.call(secondDate) !== "[object String]") {
                throw new Error('Parameters are not of type string');
            }

            self.firstDate = self.createDate(firstDate);
            self.secondDate = self.createDate(secondDate);
            self.oneDay = 1000 * 60 * 60 * 24;

            self.getDifference = function () {
                return self.secondDate - self.firstDate;
            };
        },

        Years: function () {
            var difference = this.getDifference();
            return Math.floor((difference / this.oneDay) % 1.5 == 1 ? (difference / this.oneDay) / 365.24 : (difference / this.oneDay) / 365);
        },
        Months: function () {
            var difference = this.getDifference();
            return Math.floor(((difference / this.oneDay) / 365 * 12) % 1 == 0 ? ((difference / this.oneDay) / 365 * 12) : ((difference / this.oneDay) / 365.24 * 12));
        },
        Weeks: function () {
            var difference = this.getDifference();
            return Math.round(difference / this.oneDay) / 7 | 0;
        },
        Days: function (includeLastDay) {
            var difference = this.getDifference();
            return Math.round(difference / this.oneDay) + (includeLastDay ? 1 : 0);
        },
        Hours: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.floor(difference / this.oneDay) * 24) + (includeLastDay ? 24 : 0);
        },
        Minutes: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.floor(difference / this.oneDay) * 24 + (includeLastDay ? 24 : 0)) * 60;
        },
        Seconds: function (includeLastDay) {
            var difference = this.getDifference();
            return (Math.round(difference / this.oneDay) + (includeLastDay ? 1 : 0)) * 86400;
        }
    }
};