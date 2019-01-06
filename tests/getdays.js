"use strict"

var shado = require('../shado-min');
var expect = require('chai').expect;

describe('Get Days', () => {
    
    describe('Calculation difference in days with two dates', () => {
        it('Should return 1 day with dates between 01/01/2014 and 02/01/2014 excluding last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(1);
        });

        it('Should return 2 days with dates between 01/01/2014 and 02/01/2014 including last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(2);
        });

        it('Should return 100 days with dates between 01/01/2014 and 10/04/2014 including last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "10/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(100);
        });

        it('Should return 99 days with dates between 01/01/2014 and 10/04/2014 excluding last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "10/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(99);
        });

        it('Should return 23473 days with dates between 31/12/1949 and 07/04/2014 excluding last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "07/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(23473);
        });

        it('Should return 23474 days with dates between 31/12/1949 and 07/04/2014 including last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "07/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(23474);
        });

        it('Should return 78 days with dates between 25/09/1988 and 12/12/1988 excluding last day', () => {
            var firstDate = "25/09/1988";
            var secondDate = "12/12/1988";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(78);
        });

        it('Should return 79 days with dates between 25/09/1988 and 12/12/1988 including last day', () => {
            var firstDate = "25/09/1988";
            var secondDate = "12/12/1988";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(79);
        });

        it('Should return 33 days with dates between 29/02/2012 and 01/04/2012 including last day', () => {
            var firstDate = "29/02/2012";
            var secondDate = "01/04/2012";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(33);
        });

        it('Should return 32 days with dates between 29/02/2012 and 01/04/2012 excluding last day', () => {
            var firstDate = "29/02/2012";
            var secondDate = "01/04/2012";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(32);
        });

        it('Should return 1037 days with dates between 20/01/1961 and 22/11/1963 including last day', () => {
            var firstDate = "20/01/1961";
            var secondDate = "22/11/1963";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(true);

            expect(days).to.equal(1037);
        });

        it('Should return 1036 days with dates between 20/01/1961 and 22/11/1963 excluding last day', () => {
            var firstDate = "20/01/1961";
            var secondDate = "22/11/1963";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(1036);
        });

        describe('In US date format', () => {
            it('Should return 1036 days with dates between 01/20/1961 and 11/22/1963 excluding last day', () => {
                var firstDate = "01/20/1961";
                var secondDate = "11/22/1963";
                shado.date.setDates(firstDate, secondDate, true);
                var days = shado.date.getDays(false);

                expect(days).to.equal(1036);
            });

            it('Should return 1037 days with dates between 01/20/1961 and 11/22/1963 including last day', () => {
                var firstDate = "01/20/1961";
                var secondDate = "11/22/1963";
                shado.date.setDates(firstDate, secondDate, true);
                var days = shado.date.getDays(true);

                expect(days).to.equal(1037);
            });

            it('Should return 1 day with dates between 01/01/2014 and 01/02/2014 excluding last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var days = shado.date.getDays(false);

                expect(days).to.equal(1);
            });

            it('Should return 2 days with dates between 01/01/2014 and 01/02/2014 including last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var days = shado.date.getDays(true);

                expect(days).to.equal(2);
            });

            it('Should return 99 days with dates between 01/01/2014 and 04/10/2014 excluding last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "04/10/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var days = shado.date.getDays(false);

                expect(days).to.equal(99);
            });

            it('Should return 100 days with dates between 01/01/2014 and 04/10/2014 including last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "04/10/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var days = shado.date.getDays(true);

                expect(days).to.equal(100);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as numbers', () => {
            it('Should return 91676 days with dates between 31 12 1899 and 31 12 2150, excluding last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays();

                expect(result).to.equal(91676);
            });

            it('Should return 91677 days with dates between 31 12 1899 and 31 12 2150, including last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(true);

                expect(result).to.equal(91677);
            });

            it('Should return 23474 days with dates between 31 12 1949 and 07 04 2014, including last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1949;

                var secondDay = 7;
                var secondMonth = 4;
                var secondYear = 2014;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(true);

                expect(result).to.equal(23474);
            });

            it('Should return 23473 days with dates between 31 12 1949 and 07 04 2014, excluding last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1949;

                var secondDay = 7;
                var secondMonth = 4;
                var secondYear = 2014;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(false);

                expect(result).to.equal(23473);
            });

            it('Should return 0 day with dates between 10 10 2016 and 10 10 2016, excluding last day', () => {
                var firstDay = 10;
                var firstMonth = 10;
                var firstYear = 2016;

                var secondDay = 10;
                var secondMonth = 10;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(false);

                expect(result).to.equal(0);
            });

            it('Should return 1 day with dates between 10 10 2016 and 10 10 2016, including last day', () => {
                var firstDay = 10;
                var firstMonth = 10;
                var firstYear = 2016;

                var secondDay = 10;
                var secondMonth = 10;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(true);

                expect(result).to.equal(1);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as strings', () => {
            it('Should return 91676 days with dates between "31" "12" "1899" and "31" "12" "2150", excluding last day', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1899";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2150";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(false);

                expect(result).to.equal(91676);
            });

            it('Should return 91677 days with dates between "31" "12" "1899" and "31" "12" "2150", including last day', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1899";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2150";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(true);

                expect(result).to.equal(91677);
            });

            it('Should return 0 day with dates between "10" "10" "2016" and "10" "10" "2016", excluding last day', () => {
                var firstDay = "10";
                var firstMonth = "10";
                var firstYear = "2016";

                var secondDay = "10";
                var secondMonth = "10";
                var secondYear = "2016";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(false);

                expect(result).to.equal(0);
            });

            it('Should return 1 day with dates between "10" "10" "2016" and "10" "10" "2016", including last day', () => {
                var firstDay = "10";
                var firstMonth = "10";
                var firstYear = "2016";

                var secondDay = "10";
                var secondMonth = "10";
                var secondYear = "2016";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getDays(true);

                expect(result).to.equal(1);
            });
        });
    });
});