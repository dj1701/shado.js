"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Years', () => {

    describe('Calculate difference in years with two dates', () => {
        it('Should return 16 years with dates between 01/01/1970 and 01/01/1986', () => {
            var firstDate = "01/01/1970";
            var secondDate = "01/01/1986";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(16);
        });

        it('Should return 23 years with dates between 31-12-1990 and 29-03-2014', () => {
            var firstDate = "31-11-1990";
            var secondDate = "29-03-2014";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(23);
        });

        it('Should return 23 years with dates between 01/01/1991 and 29/03/2014', () => {
            var firstDate = "01/01/1991";
            var secondDate = "29/03/2014";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(23);
        });

        it('Should return 23 years with dates between 30/10/1990 and 29/03/2014', () => {
            var firstDate = "30/10/1990";
            var secondDate = "29/03/2014";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(23);
        });

        it('Should return 16 years with dates between 30/04/1997 and 29/03/2014', () => {
            var firstDate = "30/04/1997";
            var secondDate = "29/03/2014";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(16);
        });

        it('Should return 16 years with dates between 31/12/1969 and 01/01/1986', () => {
            var firstDate = "31/12/1969";
            var secondDate = "01/01/1986";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(16);
        });

        it('Should return 16 years with dates between 31/12/1969 and 30/12/1986', () => {
            var firstDate = "31/12/1969";
            var secondDate = "30/12/1986";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(16);
        });

        it('Should return 50 years with dates between 30/03/1964 and 30/03/2014', () => {
            var firstDate = "30/03/1964";
            var secondDate = "30/03/2014";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(50);
        });

        it('Should return 24 years with dates between 30/11/1989 and 01/04/2014', () => {
            var firstDate = "30/11/1989";
            var secondDate = "01/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(24);
        });

        it('Should return 64 years with dates between 31/10/1949 and 01/05/2014', () => {
            var firstDate = "31/10/1949";
            var secondDate = "01/05/2014";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(64);
        });

        it('Should return 1 year with dates between 01/01/2014 and 01/01/2015', () => {
            var firstDate = "01/01/2014";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(1);
        });

        it('Should return 2 years with dates between 01/01/2013 and 01/01/2015', () => {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var years = shado.date.getYears();

            expect(years).to.equal(2);
        });

        it('Should return 9 years with dates between 01/01/2010 and 01/01/2019', () => {
            var firstDate = "01/01/2010";
            var secondDate = "01/01/2019";
            var years = shado.date.setDates(firstDate, secondDate).getYears();

            expect(years).to.equal(9);
        });

        describe('In US date format', () => {
            it('Should return 23 years with dates between 10/30/1990 and 03/29/2014', () => {
                var firstDate = "10/30/1990";
                var secondDate = "03/29/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(23);
            });

            it('Should return 1 year with dates between 01-01-2014 and 01-01-2015', () => {
                var firstDate = "01-01-2014";
                var secondDate = "01-01-2015";
                shado.date.setDates(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(1);
            });

            it('Should return 50 years with dates between 03/30/1964 and 03/30/2014', () => {
                var firstDate = "03/30/1964";
                var secondDate = "03/30/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(50);
            });

            it('Should return 16 years with dates between 04/30/1997 and 03/29/2014', () => {
                var firstDate = "04/30/1997";
                var secondDate = "03/29/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(16);
            });

            it('Should return 16 years with dates between 09/21/1989 and 09/21/2014', () => {
                var firstDate = "09/21/1989";
                var secondDate = "09/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var years = shado.date.getYears();

                expect(years).to.equal(25);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as numbers', () => {
            it('Should return 1 year with dates between 1 1 2016 and 1 1 2017', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2017;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getYears();

                expect(result).to.equal(1);
            });

            it('Should return 101 years with dates between 28 4 2016 and 28 4 2117', () => {
                var firstDay = 28;
                var firstMonth = 4;
                var firstYear = 2016;

                var secondDay = 28;
                var secondMonth = 4;
                var secondYear = 2117;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getYears();

                expect(result).to.equal(101);
            });

            it('Should return 251 years with dates between 31 12 1899 and 31 12 2150', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getYears();

                expect(result).to.equal(251);
            });

            it('Should return 0 year with dates 2 1 1999 and 1 1 2000', () => {
                var firstDay = 2;
                var firstMonth = 1;
                var firstYear = 1999;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2000;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getYears();

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as strings', () => {
            it('Should return 1 year with dates between "1" "1" "2016" and "1" "1" "2017"', () => {
                var firstDay = "1";
                var firstMonth = "1";
                var firstYear = "2016";

                var secondDay = "1";
                var secondMonth = "1";
                var secondYear = "2017";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getYears();

                expect(result).to.equal(1);
            });

            it('Should return 19 years with dates between "31" "12" "2001" and "31" "12" "2020"', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "2001";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2020";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getYears();

                expect(result).to.equal(19);
            });

            it('Should return 1 year with dates "01" "01" "1999" and "01" "01" "2000"', () => {
                var firstDay = "01";
                var firstMonth = "01";
                var firstYear = "1999";

                var secondDay = "01";
                var secondMonth = "01";
                var secondYear = "2000";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getYears();

                expect(result).to.equal(1);
            });

            it('Should return 0 year with dates "02" "01" "1999" and "01" "01" "2000"', () => {
                var firstDay = "02";
                var firstMonth = "01";
                var firstYear = "1999";

                var secondDay = "01";
                var secondMonth = "01";
                var secondYear = "2000";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getYears();

                expect(result).to.equal(0);
            });
        });
    });
});