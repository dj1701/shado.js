"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Invalid Parameters', () => {

    describe('for the method set', () => {
        it('Should raise exception if either parameter is not of type String', () => {
            var firstDate = new Object();
            var secondDate = new Object();

            expect(() => {
                shado.date.set(firstDate, secondDate);
            }).to.throw('Parameters are expecting type string or date');
        });

        it('Should raise exception if one parameter is not of type Date or String', () => {
            var firstDate = new Object();
            var secondDate = new Date(2014, 3, 27);

            expect(() => {
                shado.date.set(firstDate, secondDate);
            }).to.throw('Parameters are expecting type string or date');
        });

        it('Should raise exception if both parameters is null', () => {
            var firstDate = null;
            var secondDate = null;

            expect(() => {
                shado.date.set(firstDate, secondDate);
            }).to.throw('Parameters are expecting type string or date');
        });

        it('Should raise exception when firstDate contains invalid date format', () => {
            var firstDate = "1999-06-10T14:50:25:545";
            var secondDate = "2004-06-10T14:50:25:545Z";

            expect(() => {
                shado.date.set(firstDate, secondDate)
            }).to.throw('Invalid date/time pattern provided');
        });

        it('Should raise exception when secondDate contains invalid date format', () => {
            var firstDate = "1999-06-10T14:50:25:545";
            var secondDate = "2004-06-10T14TEST:25:545Z";

            expect(() => {
                shado.date.set(firstDate, secondDate)
            }).to.throw('Invalid date/time pattern provided');
        });
    });

    describe('for the method setByUnit', () => {
        it('Should raise exception if day parameter is not a number or string', () => {
            var startDay = new Object();
            var startMonth = 1;
            var startYear = 2016;
            var startHour = 7;
            var startMinute = 23;
            var startSeconds = 34;

            var endDay = 1;
            var endMonth = 1;
            var endYear = 2016;
            var endHour = 18;
            var endMinute = 5;
            var endSeconds = 50

            expect(() => {
                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
            }).to.throw('Parameters are expecting type number or string');
        });

        it('Should raise exception if hour parameter is not a number or string', () => {
            var startDay = 1;
            var startMonth = 1;
            var startYear = 2016;
            var startHour = 7;
            var startMinute = 23;
            var startSeconds = 34;

            var endDay = 1;
            var endMonth = 1;
            var endYear = 2017;
            var endHour = new Object();
            var endMinute = 5;
            var endSeconds = 50

            expect(() => {
                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
            }).to.throw('Parameters are expecting type number or string');
        });

        it('Should raise exception if year parameter is not a number or string', () => {
            var startDay = 1;
            var startMonth = 1;
            var startYear = 2016;
            var startHour = 7;
            var startMinute = 23;
            var startSeconds = 34;

            var endDay = 1;
            var endMonth = 1;
            var endYear = new Date();
            var endHour = 15;
            var endMinute = 5;
            var endSeconds = 50;

            expect(() => {
                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
            }).to.throw('Parameters are expecting type number or string');
        });

        it('Should raise exception if month parameter is not a number or string', () => {
            var startDay = 1;
            var startMonth = null;
            var startYear = 2016;
            var startHour = 7;
            var startMinute = 23;
            var startSeconds = 34;

            var endDay = 1;
            var endMonth = 1;
            var endYear = 2016;
            var endHour = 15;
            var endMinute = 5;
            var endSeconds = 50;

            expect(() => {
                shado.date.setParams(startDay, startMonth, startYear, startHour, startMinute, startSeconds, endDay, endMonth, endYear, endHour, endMinute, endSeconds);
            }).to.throw('Parameters are expecting type number or string');
        });
    });
});