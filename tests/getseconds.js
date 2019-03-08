"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Seconds', () => {
    
    describe('Calculation difference in seconds with two dates', () => {
        it('Should return 451526400 seconds with dates between 01/01/2000 and 22/04/2014 including last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "22/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(true);

            expect(seconds).to.equal(451526400);
        });

        it('Should return 451440000 seconds with dates between 01/01/2000 and 22/04/2014 excluding last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "22/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(451440000);
        });

        it('Should return 1398211200 seconds with dates between 01/01/1970 and 22/04/2014 including last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "22/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(true);

            expect(seconds).to.equal(1398211200);
        });

        it('Should return 1398124800 seconds with dates between 01/01/1970 and 22/04/2014 excluding last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "22/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(1398124800);
        });

        it('Should return 691200 seconds with dates between 14/04/2014 and 21/04/2014 including last day', () => {
            var firstDate = "14/04/2014";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(true);

            expect(seconds).to.equal(691200);
        });

        it('Should return 604800 seconds with dates between 14/04/2014 and 21/04/2014 excluding last day', () => {
            var firstDate = "14/04/2014";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(604800);
        });

        it('Should return 3607632000 seconds with dates between 01/01/1900 and 27/04/2014 including last day', () => {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(true);

            expect(seconds).to.equal(3607632000);
        });

        it('Should return 3607545600 seconds with dates between 01/01/1900 and 27/04/2014 excluding last day', () => {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            var seconds = shado.date.setDates(firstDate, secondDate).getSeconds(false);

            expect(seconds).to.equal(3607545600);
        });

        describe('In US date format', () => {
            it('Should return 1398124800 seconds with dates between 01/01/1970 and 04/22/2014 excluding last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/22/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(false);

                expect(seconds).to.equal(1398124800);
            });

            it('Should return 1398211200 seconds with dates between 01/01/1970 and 04/22/2014 including last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/22/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(true);

                expect(seconds).to.equal(1398211200);
            });

            it('Should return 691200 seconds with dates between 04/14/2014 and 04/21/2014 including last day', () => {
                var firstDate = "04/14/2014";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(true);

                expect(seconds).to.equal(691200);
            });

            it('Should return 604800 seconds with dates between 04/14/2014 and 04/21/2014 excluding last day', () => {
                var firstDate = "04/14/2014";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(false);

                expect(seconds).to.equal(604800);
            });

            it('Should return 3607545600 seconds with dates between 01/01/1900 and 04/27/2014 excluding last day', () => {
                var firstDate = "01/01/1900";
                var secondDate = "04/27/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var seconds = shado.date.getSeconds(false);

                expect(seconds).to.equal(3607545600);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as numbers', () => {
            it('Should return 7920806400 seconds with dates between 31 12 1899 and 31 12 2150, excluding last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getSeconds(false);

                expect(result).to.equal(7920806400);
            });

            it('Should return 7920892800 minutes with dates between 31 12 1899 and 31 12 2150, including last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getSeconds(true);

                expect(result).to.equal(7920892800);
            });

            it('Should return 84600 seconds with dates between 1 1 2016 and 1 1 2016, including last day', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getSeconds(true);

                expect(result).to.equal(86400);
            });

            it('Should return 0 seconds with dates between 1 1 2016 and 1 1 2016, excluding last day', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getSeconds(false);

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as strings', () => {
            it('Should return 7920806400 seconds with dates between "31" "12" "1899" and "31" "12" "2150", excluding last day', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1899";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2150";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getSeconds(false);

                expect(result).to.equal(7920806400);
            });

            it('Should return 7920892800 minutes with dates between "31" "12" "1899" and "31" "12" "2150", including last day', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1899";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2150";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getSeconds(true);

                expect(result).to.equal(7920892800);
            });

            it('Should return 84600 seconds with dates between "01" "01" "2009" and "01" "01" "2009", including last day', () => {
                var firstDay = "01";
                var firstMonth = "01";
                var firstYear = "2009";

                var secondDay = "01";
                var secondMonth = "01";
                var secondYear = "2009";

                var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getSeconds(true);

                expect(result).to.equal(86400);
            });

            it('Should return 0 seconds with dates between "01" "01" "2009" and "01" "01" "2009", excluding last day', () => {
                var firstDay = "01";
                var firstMonth = "01";
                var firstYear = "2009";

                var secondDay = "01";
                var secondMonth = "01";
                var secondYear = "2009";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getSeconds(false);

                expect(result).to.equal(0);
            });
        });
    });
});