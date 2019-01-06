"use strict"

var shado = require('../shado-min');
var expect = require('chai').expect;

describe('Invalid Parameters', () => {

    describe('for the method setDates', () => {
        it('Should raise exception if either parameter is not of type String', () => {
            var firstDate = new Object();
            var secondDate = new Object();

            expect(() => {
                shado.date.setDates(firstDate, secondDate);
            }).to.throw('Parameters are expecting type string or date');
        });

        it('Should raise exception if one parameter is not of type Date or String', () => {
            var firstDate = new Object();
            var secondDate = new Date(2014, 3, 27);

            expect(() => {
                shado.date.setDates(firstDate, secondDate);
            }).to.throw('Parameters are expecting type string or date');
        });

        it('Should raise exception if both parameters is null', () => {
            var firstDate = null;
            var secondDate = null;

            expect(() => {
                shado.date.setDates(firstDate, secondDate);
            }).to.throw('Parameters are expecting type string or date');
        });
    });

    describe('for the method setDatesByUnit', () => {
        it('Should raise exception if day parameter is not a number or string', () => {
            var firstDay = new Object();
            var firstMonth = 1;
            var firstYear = 2016;

            var secondDay = 1;
            var secondMonth = 1;
            var secondYear = 2016;

            expect(() => {
                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
            }).to.throw('Parameters are expecting type number or string');
        });

        it('Should raise exception if year parameter is not a number or string', () => {
            var firstDay = 1;
            var firstMonth = 1;
            var firstYear = 2016;

            var secondDay = 1;
            var secondMonth = 1;
            var secondYear = new Date();

            expect(() => {
                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
            }).to.throw('Parameters are expecting type number or string');
        });

        it('Should raise exception if month parameter is not a number or string', () => {
            var firstDay = 1;
            var firstMonth = null;
            var firstYear = 2016;

            var secondDay = 1;
            var secondMonth = 1;
            var secondYear = 2016;

            expect(() => {
                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
            }).to.throw('Parameters are expecting type number or string');
        });
    });
});