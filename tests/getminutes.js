"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Minutes', () => {

    describe('Calculation difference in minutes with two dates', () => {
        it('Should return 1051200 minutes between 01/01/2013 and 01/01/2015 excluding last day', () => {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(false);

            expect(minutes).to.equal(1051200);
        });

        it('Should return 1052640 minutes between 01/01/2013 and 01/01/2015 including last day', () => {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(1052640);
        });

        it('Should return 308160 minutes between 01/06/2014 and 01/01/2015 excluding last day', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(false);

            expect(minutes).to.equal(308160);
        });

        it('Should return 309560 minutes between 01/06/2014 and 01/01/2015 including last day', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(309600);
        });

        it('Should return 23302080 minutes with dates between 01/01/1970 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(23302080);
        });

        it('Should return 23300640 minutes with dates between 01/01/1970 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(false);

            expect(minutes).to.equal(23300640);
        });

        it('Should return 7522560 minutes with dates between 01/01/2000 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(7522560);
        });

        it('Should return 7521120 minutes with dates between 01/01/2000 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(false);

            expect(minutes).to.equal(7521120);
        });

        describe('In US date format', () => {
            it('Should return 1051200 minutes between 01/01/2013 and 01/01/2015 excluding last day', () => {
                var firstDate = "01/01/2013";
                var secondDate = "01/01/2015";
                shado.date.setDates(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(false);

                expect(minutes).to.equal(1051200);
            });

            it('Should return 1052640 minutes between 01/01/2013 and 01/01/2015 including last day', () => {
                var firstDate = "01/01/2013";
                var secondDate = "01/01/2015";
                shado.date.setDates(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(true);

                expect(minutes).to.equal(1052640);
            });

            it('Should return 308160 minutes between 06/01/2014 and 01/01/2015 excluding last day', () => {
                var firstDate = "06/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setDates(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(false);

                expect(minutes).to.equal(308160);
            });

            it('Should return 309560 minutes between 01/06/2014 and 01/01/2015 including last day', () => {
                var firstDate = "06/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setDates(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(true);

                expect(minutes).to.equal(309600);
            });

            it('Should return 23302080 minutes with dates between 01/01/1970 and 04/21/2014 including last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(true);

                expect(minutes).to.equal(23302080);
            });

            it('Should return 23300640 minutes with dates between 01/01/1970 and 21/04/2014 excluding last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(false);

                expect(minutes).to.equal(23300640);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as numbers', () => {
            it('Should return 132013440 minutes with dates between 31 12 1899 and 31 12 2150, excluding last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(132013440);
            });

            it('Should return 132014880 minutes with dates between 31 12 1899 and 31 12 2150, including last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(132014880);
            });

            it('Should return 1440 minutes with dates between 1 1 2016 and 2 1 2016, excluding last day', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 2;
                var secondMonth = 1;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(1440);
            });

            it('Should return 2880 minutes with dates between 1 1 2016 and 2 1 2016, including last day', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 2;
                var secondMonth = 1;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(2880);
            });

            it('Should return 1440 minutes with dates between 1 1 2016 and 1 1 2016, including last day', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(1440);
            });

            it('Should return 0 minutes with dates between 1 1 2016 and 1 1 2016, excluding last day', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as strings', () => {
            it('Should return 132013440 minutes with dates between "31" "12" "1899" and "31" "12" "2150", excluding last day', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1899";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2150";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(132013440);
            });

            it('Should return 132014880 minutes with dates between "31" "12" "1899" and "31" "12" "2150", including last day', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1899";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2150";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(132014880);
            });

            it('Should return 1440 minutes with dates between "1" "1" "2030" and "1" "1" "2030", including last day', () => {
                var firstDay = "1";
                var firstMonth = "1";
                var firstYear = "2030";

                var secondDay = "1";
                var secondMonth = "1";
                var secondYear = "2030";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(true);

                expect(result).to.equal(1440);
            });

            it('Should return 0 minutes with dates between "1" "1" "2030" and "1" "1" "2030", excluding last day', () => {
                var firstDay = "1";
                var firstMonth = "1";
                var firstYear = "2030";

                var secondDay = "1";
                var secondMonth = "1";
                var secondYear = "2030";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMinutes(false);

                expect(result).to.equal(0);
            });
        });
    });
});