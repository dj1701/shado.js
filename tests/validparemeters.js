"use strict"

var shado = require('../shado-min');
var expect = require('chai').expect;

describe('Valid Parameters', () => {

    describe('for the method setDates', () => {
        it('Should not raise exception if first parameter is date object', () => {
            var firstDate = new Date(2014, 3, 27);
            var secondDate = "27/04/2014";

            expect(() => {
                shado.date.setDates(firstDate, secondDate);
            }).not.to.throw('Parameters are not of expected type string or date');
        });

        it('Should not raise exception if second parameter is date valid date object', () => {
            var firstDate = "01/01/1970";
            var secondDate = new Date(2014, 3, 27);

            expect(() => {
                shado.date.setDates(firstDate, secondDate);
            }).not.to.throw('Parameters are not of expected type string or date');
        });

        it('Should return 451440000 seconds with dates object parameters between 01/01/2000 and 22/04/2014 excluding last day', () => {
            var firstDate = new Date(2000, 0, 1);
            var secondDate = new Date(2014, 3, 22);
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(451440000);
        });
    });

    describe('for the method setDatesByUnits', () => {
        it('Should not raise exception if day parameter is a number or string', () => {
            var firstDay = 1;
            var firstMonth = 1;
            var firstYear = 2015;

            var secondDay = 1;
            var secondMonth = 1;
            var secondYear = 2016;

            expect(() => {
                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
            }).not.to.throw('Parameters are expecting type number or string');
        });

        it('Should not raise exception if year parameter is a number or string', () => {
            var firstDay = '1';
            var firstMonth = 1;
            var firstYear = 2016;

            var secondDay = 1;
            var secondMonth = '1';
            var secondYear = 2018;

            expect(() => {
                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
            }).not.to.throw('Parameters are expecting type number or string');
        });

        it('Should not raise exception if month parameter is a number or string', () => {
            var firstDay = 1;
            var firstMonth = 5;
            var firstYear = 2016;

            var secondDay = 1;
            var secondMonth = 1;
            var secondYear = 2017;

            expect(() => {
                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
            }).not.to.throw('Parameters are expecting type number or string');
        });

        it('Should return 451440000 seconds with dates object parameters between 01/01/2000 and 22/04/2014 excluding last day', () => {
            var firstDay = 1;
            var firstMonth = 1;
            var firstYear = 2000;

            var secondDay = 22;
            var secondMonth = 4;
            var secondYear = 2014;

            shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
            var seconds = shado.date.getSeconds(false);

            expect(seconds).to.equal(451440000);
        });
    });
});