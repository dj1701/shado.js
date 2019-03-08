"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Months', () => {

    describe('Calculation difference in months with two dates', () => {
        it('Should return 12 months between 01/01/2014 and 01/01/2015', () => {
            var firstDate = "01/01/2014";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(12);
        });

        it('Should return 24 months between 01/01/2013 and 01/01/2015', () => {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(24);
        });

        it('Should return 7 months between 01/06/2014 and 01/01/2015', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(7);
        });

        it('Should return 6 months between 01/07/2014 and 01/01/2015', () => {
            var firstDate = "01/07/2014";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(6);
        });

        it('Should return 203 months with dates between 31/12/1969 and 30/12/1986', () => {
            var firstDate = "31/12/1969";
            var secondDate = "30/12/1986";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(203);
        });

        it('Should return 774 months with dates between 31/10/1949 and 01/05/2014', () => {
            var firstDate = "31/10/1949";
            var secondDate = "01/05/2014";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(774);
        });

        it('Should return 470 months with dates between 18/02/1975 and 21/04/2014', () => {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(470);
        });

        it('Should return 531 months with dates between 01/01/1970 and 21/04/2014', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(531);
        });

        it('Should return 171 months with dates between 01/01/2000 and 21/04/2014', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(171);
        });

        it('Should return 1371 months with dates between 01/01/1900 and 27/04/2014', () => {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var months = shado.date.getMonths();

            expect(months).to.equal(1371);
        });

        it('Should return 1430 months with dates between 01/01/1900 and 27/04/2014', () => {
            var firstDate = "01/01/1900";
            var secondDate = "05/03/2019";
            var months = shado.date.setDates(firstDate, secondDate).getMonths();

            expect(months).to.equal(1430);
        });

        describe('In US date format', () => {
            it('Should return 470 months with dates between 02/18/1975 and 04/21/2014', () => {
                var firstDate = "02/18/1975";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(470);
            });

            it('Should return 470 months with date objects between 02/18/1975 and 04/21/2014', () => {
                var firstDate = new Date(1975, 1, 18);
                var secondDate = new Date(2014, 3, 21);
                shado.date.setDates(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(470);
            });

            it('Should return 1371 months with dates between 01/01/1900 and 04/27/2014', () => {
                var firstDate = "01/01/1900";
                var secondDate = "04/27/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(1371);
            });

            it('Should return 12 months between 01/01/2014 and 01/01/2015', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setDates(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(12);
            });

            it('Should return 416 months with dates between 01/01/1980 and 09/21/2014', () => {
                var firstDate = "01/01/1980";
                var secondDate = "09/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(416);
            });

            it('Should return 774 months with dates between 10/31/1949 and 05/01/2014', () => {
                var firstDate = "10/31/1949";
                var secondDate = "05/01/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var months = shado.date.getMonths();

                expect(months).to.equal(774);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as numbers', () => {
            it('Should return 774 months with dates between 31 10 1949 and 1 5 2014', () => {
                var firstDay = 31;
                var firstMonth = 10;
                var firstYear = 1949;

                var secondDay = 1;
                var secondMonth = 5;
                var secondYear = 2014;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var months = shado.date.getMonths();

                expect(months).to.equal(774);
            });

            it('Should return 3012 months with dates between 31 12 1899 and 31 12 2150', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getMonths();

                expect(result).to.equal(3012);
            });

            it('Should return 1 month with dates 1 12 1999 and 1 1 2000', () => {
                var firstDay = 1;
                var firstMonth = 12;
                var firstYear = 1999;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2000;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMonths();

                expect(result).to.equal(1);
            });

            it('Should return 0 month with dates 1 12 1999 and 31 12 1999', () => {
                var firstDay = 1;
                var firstMonth = 12;
                var firstYear = 1999;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 1999;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMonths();

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as strings', () => {
            it('Should return 1200 months with dates between "31" "12" "1920" and "31" "12" "2020"', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1920";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2020";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var months = shado.date.getMonths();

                expect(months).to.equal(1200);
            });

            it('Should return 774 months with dates between "31" "10" "1949" and "1" "5" "2014"', () => {
                var firstDay = "31";
                var firstMonth = "10";
                var firstYear = "1949";

                var secondDay = "1";
                var secondMonth = "5";
                var secondYear = "2014";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var months = shado.date.getMonths();

                expect(months).to.equal(774);
            });

            it('Should return 1 month with dates "1" "12" "1999" and "1" "1" "2000"', () => {
                var firstDay = "1";
                var firstMonth = "12";
                var firstYear = "1999";

                var secondDay = "1";
                var secondMonth = "1";
                var secondYear = "2000";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMonths();

                expect(result).to.equal(1);
            });

            it('Should return 0 month with dates "01" "12" "1999" and "31" "12" "1999"', () => {
                var firstDay = "01";
                var firstMonth = "12";
                var firstYear = "1999";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "1999";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMonths();

                expect(result).to.equal(0);
            });
        });
    });
});