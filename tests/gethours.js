"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Hours', () => {

    describe('Calculation difference in hours with two dates', () => {
        it('Should return 343392 hours with dates between 18/02/1975 and 21/04/2014 including last day', () => {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(343392);
        });

        it('Should return 343368 hours with dates between 18/02/1975 and 21/04/2014 excluding last day', () => {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(343368);
        });

        it('Should return 24 hours with dates between 01/01/2014 and 02/01/2014 excluding last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(24);
        });

        it('Should return 48 hours with dates between 01/01/2014 and 02/01/2014 including last day', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(48);
        });

        it('Should return 125400 hours with dates between 01/01/2000 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(125400);
        });

        it('Should return 125376 hours with dates between 01/01/2000 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(125376);
        });

        it('Should return 388368 hours with dates between 01/01/1970 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(388368);
        });

        it('Should return 388344 hours with dates between 01/01/1970 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(388344);
        });

        it('Should return 563688 hours with dates between 31/12/1949 and 21/04/2014 excluding last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(563688);
        });

        it('Should return 563712 hours with dates between 31/12/1949 and 21/04/2014 including last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            var hours = shado.date.setDates(firstDate, secondDate).getHours(true);

            expect(hours).to.equal(563712);
        });

        describe('In US date format', () => {
            it('Should return 343368 hours with dates between 02/18/1975 and 04/21/2014 excluding last day', () => {
                var firstDate = "02/18/1975";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(343368);
            });

            it('Should return 24 hours with dates between 01/01/2014 and 01/02/2014 excluding last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(24);
            });

            it('Should return 125400 hours with dates between 01/01/2000 and 04/21/2014 including last day', () => {
                var firstDate = "01/01/2000";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(true);

                expect(hours).to.equal(125400);
            });

            it('Should return 388368 hours with dates between 01/01/1970 and 04/21/2014 including last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(true);

                expect(hours).to.equal(388368);
            });

            it('Should return 388344 hours with dates between 01/01/1970 and 04/21/2014 excluding last day', () => {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(388344);
            });

            it('Should return 563688 hours with dates between 12/31/1949 and 04/21/2014 excluding last day', () => {
                var firstDate = "12/31/1949";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(563688);
            });

            it('Should return 563712 hours with dates between 12/31/1949 and 04/21/2014 including last day', () => {
                var firstDate = "12/31/1949";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(true);

                expect(hours).to.equal(563712);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as numbers', () => {
            it('Should return 2200224 hours with dates between 31 12 1899 and 31 12 2150, excluding last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getHours(false);

                expect(result).to.equal(2200224);
            });

            it('Should return 2200248 hours with dates between 31 12 1899 and 31 12 2150, including last day', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getHours(true);

                expect(result).to.equal(2200248);
            });

            it('Should return 24 hours with dates between 1 1 2016 and 1 1 2016, including last day', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getHours(true);

                expect(result).to.equal(24);
            });

            it('Should return 0 hours with dates between 1 1 2016 and 1 1 2016, excluding last day', () => {
                var firstDay = 1;
                var firstMonth = 1;
                var firstYear = 2016;

                var secondDay = 1;
                var secondMonth = 1;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getHours(false);

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as strings', () => {
            it('Should return 876600 hours with dates between "31" "12" "1920" and "31" "12" "2020", excluding last day', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1920";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2020";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getHours(false);

                expect(result).to.equal(876600);
            });

            it('Should return 876624 hours with dates between "31" "12" "1920" and "31" "12" "2020", including last day', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1920";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2020";

                var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getHours(true);

                expect(result).to.equal(876624);
            });

            it('Should return 24 hours with dates between "01" "01" "2010" and "01" "01" "2010", including last day', () => {
                var firstDay = "01";
                var firstMonth = "01";
                var firstYear = "2010";

                var secondDay = "01";
                var secondMonth = "01";
                var secondYear = "2010";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getHours(true);

                expect(result).to.equal(24);
            });

            it('Should return 0 hours with dates between "01" "01" "2010" and "01" "01" "2010", excluding last day', () => {
                var firstDay = "01";
                var firstMonth = "01";
                var firstYear = "2010";

                var secondDay = "01";
                var secondMonth = "01";
                var secondYear = "2010";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getHours(false);

                expect(result).to.equal(0);
            });
        });
    });
});
