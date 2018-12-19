"use strict"

var shado = require('../shado-min');
var expect = require('chai').expect;

describe('Date Comparison', () => {

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

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getMonths();

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

    describe('Calculation difference in weeks with two dates', () => {
        it('Should return 2310 weeks with dates between 01/01/1970 and 16/04/2014', () => {
            var firstDate = "01/01/1970";
            var secondDate = "16/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(2310);
        });

        it('Should return 2311 weeks with dates between 01/01/1970 and 17/04/2014', () => {
            var firstDate = "01/01/1970";
            var secondDate = "17/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(2311);
        });

        it('Should return 5965 weeks with dates between 01/01/1900 and 03/05/2014', () => {
            var firstDate = "01/01/1900";
            var secondDate = "03/05/2014";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(5965);
        });

        it('Should return 3365 weeks with dates between 31/10/1949 and 01/05/2014', () => {
            var firstDate = "31/10/1949";
            var secondDate = "01/05/2014";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(3365);
        });

        it('Should return 148 weeks with dates between 20/01/1961 and 22/11/1963', () => {
            var firstDate = "20/01/1961";
            var secondDate = "22/11/1963";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(148);
        });

        it('Should return 3355 weeks with dates between 31/12/1949 and 21/04/2014', () => {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(3355);
        });

        it('Should return 882 weeks with dates between 31/12/1969 and 30/12/1986', () => {
            var firstDate = "31/12/1969";
            var secondDate = "30/12/1986";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(886);
        });

        it('Should return 14 weeks with dates between 01/01/2014 and 10/04/2014', () => {
            var firstDate = "01/01/2014";
            var secondDate = "10/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(14);
        });

        it('Should return 2608 weeks with dates between 30/03/1964 and 30/03/2014', () => {
            var firstDate = "30/03/1964";
            var secondDate = "30/03/2014";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(2608);
        });

        it('Should return 0 weeks with dates between 01/01/2014 and 02/01/2014', () => {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setDates(firstDate, secondDate);
            var weeks = shado.date.getWeeks();

            expect(weeks).to.equal(0);
        });

        describe('In US date format', () => {
            it('Should return 3365 weeks with dates between 10/31/1949 and 05/01/2014', () => {
                var firstDate = "10/31/1949";
                var secondDate = "05/01/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var weeks = shado.date.getWeeks();

                expect(weeks).to.equal(3365);
            });

            it('Should return 0 weeks with dates between 01/01/2014 and 01/02/2014', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var weeks = shado.date.getWeeks();

                expect(weeks).to.equal(0);
            });

            it('Should return 882 weeks with dates between 12/31/1969 and 12/30/1986', () => {
                var firstDate = "12/31/1969";
                var secondDate = "12/30/1986";
                shado.date.setDates(firstDate, secondDate, true);
                var weeks = shado.date.getWeeks();

                expect(weeks).to.equal(886);
            });

            it('Should return 5965 weeks with dates between 01/01/1900 and 05/03/2014', () => {
                var firstDate = "01/01/1900";
                var secondDate = "05/03/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var weeks = shado.date.getWeeks();

                expect(weeks).to.equal(5965);
            });

            it('Should return 148 weeks with dates between 01/20/1961 and 11/22/1963', () => {
                var firstDate = "01/20/1961";
                var secondDate = "11/22/1963";
                shado.date.setDates(firstDate, secondDate, true);
                var weeks = shado.date.getWeeks();

                expect(weeks).to.equal(148);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as numbers', () => {
            it('Should return 13096 weeks with dates between 31 12 1899 and 31 12 2150', () => {
                var firstDay = 31;
                var firstMonth = 12;
                var firstYear = 1899;

                var secondDay = 31;
                var secondMonth = 12;
                var secondYear = 2150;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getWeeks();

                expect(result).to.equal(13096);
            });

            it('Should return 2609 weeks with dates between 30/03/1964 and 06/04/2014', () => {
                var firstDay = 30;
                var firstMonth = 3;
                var firstYear = 1964;

                var secondDay = 6;
                var secondMonth = 4;
                var secondYear = 2014;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getWeeks();

                expect(result).to.equal(2609);
            });

            it('Should return 1 week with dates between 10 10 2016 and 17 10 2016', () => {
                var firstDay = 10;
                var firstMonth = 10;
                var firstYear = 2016;

                var secondDay = 17;
                var secondMonth = 10;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getWeeks();

                expect(result).to.equal(1);
            });

            it('Should return 0 week with dates between 10 10 2016 and 15 10 2016', () => {
                var firstDay = 10;
                var firstMonth = 10;
                var firstYear = 2016;

                var secondDay = 15;
                var secondMonth = 10;
                var secondYear = 2016;

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getWeeks();

                expect(result).to.equal(0);
            });
        });

        describe('With individual unit parameters for Day, Month and Year as strings', () => {
            it('Should return 5217 weeks with dates between "31" "12" "1920" and "31" "12" "2020"', () => {
                var firstDay = "31";
                var firstMonth = "12";
                var firstYear = "1920";

                var secondDay = "31";
                var secondMonth = "12";
                var secondYear = "2020";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var months = shado.date.getWeeks();

                expect(months).to.equal(5217);
            });

            it('Should return 241 weeks with dates between "19" "08" "2011" and "06" "04" "2016"', () => {
                var firstDay = "19";
                var firstMonth = "08";
                var firstYear = "2011";

                var secondDay = "06";
                var secondMonth = "04";
                var secondYear = "2016";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getWeeks();

                expect(result).to.equal(241);
            });

            it('Should return 1 week with dates between "10" "10" "2016" and "17" "10" "2016"', () => {
                var firstDay = "10";
                var firstMonth = "10";
                var firstYear = "2016";

                var secondDay = "17";
                var secondMonth = "10";
                var secondYear = "2016";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getWeeks();

                expect(result).to.equal(1);
            });

            it('Should return 0 week with dates between "10" "10" "2016" and "15" "10" "2016"', () => {
                var firstDay = "10";
                var firstMonth = "10";
                var firstYear = "2016";

                var secondDay = "15";
                var secondMonth = "10";
                var secondYear = "2016";

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getWeeks();

                expect(result).to.equal(0);
            });
        });
    });

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

    describe('Calculation difference in hours with two dates', () => {
        it('Should return 343368 hours with dates between 18/02/1975 and 21/04/2014 including last day', () => {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(343368);
        });

        it('Should return 343344 hours with dates between 18/02/1975 and 21/04/2014 excluding last day', () => {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(343344);
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

        it('Should return 125376 hours with dates between 01/01/2000 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(125376);
        });

        it('Should return 125352 hours with dates between 01/01/2000 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(125352);
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

        it('Should return 563664 hours with dates between 31/12/1949 and 21/04/2014 excluding last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(false);

            expect(hours).to.equal(563664);
        });

        it('Should return 563688 hours with dates between 31/12/1949 and 21/04/2014 including last day', () => {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var hours = shado.date.getHours(true);

            expect(hours).to.equal(563688);
        });

        describe('In US date format', () => {
            it('Should return 343344 hours with dates between 02/18/1975 and 04/21/2014 excluding last day', () => {
                var firstDate = "02/18/1975";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(343344);
            });

            it('Should return 24 hours with dates between 01/01/2014 and 01/02/2014 excluding last day', () => {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(24);
            });

            it('Should return 125376 hours with dates between 01/01/2000 and 04/21/2014 including last day', () => {
                var firstDate = "01/01/2000";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(true);

                expect(hours).to.equal(125376);
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

            it('Should return 563664 hours with dates between 12/31/1949 and 04/21/2014 excluding last day', () => {
                var firstDate = "12/31/1949";
                var secondDate = "04/21/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var hours = shado.date.getHours(false);

                expect(hours).to.equal(563664);
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

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getHours(false);

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

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getHours(true);

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
            shado.date.setDates(firstDate, secondDate);
            var seconds = shado.date.getSeconds(false);

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

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getSeconds(false);

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

                shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);
                var result = shado.date.getSeconds(true);

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

    describe('Invalid Leap Year', () => {
        it('Should increment end date to 01/03/2015 if end date is 29/02/2015 - invalid leap year', () => {
            var firstDate = "27/06/2014";
            var secondDate = "29/02/2015";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(247);
        });

        it('Should increment start date to 01/03/2014 if start date is 29/02/2014 - invalid leap year', () => {
            var firstDate = "29/02/2014";
            var secondDate = "01/03/2014";
            shado.date.setDates(firstDate, secondDate);
            var days = shado.date.getDays(false);

            expect(days).to.equal(0);
        });

        describe('In US date format', () => {
            it('Should increment end date to 03/01/2015 if end date is 02/29/2015 - invalid leap year', () => {
                var firstDate = "06/27/2014";
                var secondDate = "02/29/2015";
                shado.date.setDates(firstDate, secondDate, true);
                var days = shado.date.getDays(false);

                expect(days).to.equal(247);
            });

            it('Should increment start date to 01/03/2014 if start date is 29/02/2014 - invalid leap year', () => {
                var firstDate = "02/29/2014";
                var secondDate = "03/01/2014";
                shado.date.setDates(firstDate, secondDate, true);
                var days = shado.date.getDays(false);

                expect(days).to.equal(0);
            });
        });
    });

    describe('Invalid Parameters for method setDates', () => {
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

    describe('Invalid Parameters for method setDatesByUnit', () => {
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

    describe('Valid Parameters for both Date and String objects', () => {
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

    describe('Create new date object', () => {
        it('Should return new date object for given date of "01/01/1970"', () => {
            var date = "01/01/1970";
            var expectedDate = new Date(1970, 0, 1);

            var result = shado.date.createDate(date);
            expect(result).to.deep.equal(expectedDate);
        });

        it('Should return new date object for given date of "19/07/2014"', () => {
            var date = "19/07/2014";
            var expectedDate = new Date(2014, 6, 19);

            var result = shado.date.createDate(date);
            expect(result).to.deep.equal(expectedDate);
        });

        it('Should return new date object for given US date format of "07/19/2014"', () => {
            var date = "07/19/2014";
            var expectedDate = new Date(2014, 6, 19);

            var result = shado.date.createDate(date, true);
            expect(result).to.deep.equal(expectedDate);
        });

        it('Should return new date object for current date', () => {
            var today = new Date();
            var date = "".concat(("0" + today.getDate()).slice(-2), '/', ("0" + (today.getMonth() + 1)).slice(-2), '/', today.getFullYear());
            var expectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

            var result = shado.date.createDate(date);
            expect(result).to.deep.equal(expectedDate);
        });

        it('Should return new date object for current date in US date format', () => {
            var today = new Date();
            var date = "".concat(("0" + (today.getMonth() + 1)).slice(-2), '/', ("0" + today.getDate()).slice(-2), '/', today.getFullYear());
            var expectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

            var result = shado.date.createDate(date, true);
            expect(result).to.deep.equal(expectedDate);
        });
    });

    describe('Format Date', () => {
        [{ date: "01/11/2014", formatPattern: "dd/MM/yyyy", expectedDate: "01/11/2014" },
         { date: "01/02/2015", formatPattern: "dd/MM/yy", expectedDate: "01/02/15" },
         { date: "01/03/2015", formatPattern: "dd MMM, yyyy", expectedDate: "01 Mar, 2015" },
         { date: "10/11/2015", formatPattern: "dd MMMM, yyyy", expectedDate: "10 November, 2015" },
         { date: "10/11/1991", formatPattern: "OI MMMM, yyyy", expectedDate: "10th November, 1991" },
         { date: "01/11/1991", formatPattern: "OI MMMM, yyyy", expectedDate: "1st November, 1991" },
         { date: "02/02/1992", formatPattern: "OI MMMM, yyyy", expectedDate: "2nd February, 1992" },
         { date: "03/04/1999", formatPattern: "OI MMMM, yyyy", expectedDate: "3rd April, 1999" },
         { date: "04/04/2000", formatPattern: "OI MMMM, yyyy", expectedDate: "4th April, 2000" },
         { date: "21/07/2002", formatPattern: "OI MMMM, yyyy", expectedDate: "21st July, 2002" },
         { date: "30/06/2004", formatPattern: "OI MMMM, yyyy", expectedDate: "30th June, 2004" },
         { date: "31/12/2009", formatPattern: "OI MMMM, yyyy", expectedDate: "31st December, 2009" },
         { date: "04-04-2000", formatPattern: "dd-MM-yyyy", expectedDate: "04-04-2000" },
         { date: "04-04-2000", formatPattern: "dd-MMM-yyyy", expectedDate: "04-Apr-2000" },
         { date: "09-12-2010", formatPattern: "d-MMM-yyyy", expectedDate: "9-Dec-2010" },
         { date: "01-12-2010", formatPattern: "d-MMM-yyyy", expectedDate: "1-Dec-2010" },
         { date: "04-04-2000", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Tuesday 4th April, 2000" },
         { date: "29-08-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Wednesday 29th August, 2018" },
         { date: "02-09-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Sunday 2nd September, 2018" },
         { date: "25-08-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Saturday 25th August, 2018" },
         { date: "01-12-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Saturday 1st December, 2018" },
         { date: "01-12-2018", formatPattern: "DDD OI MMMM, yyyy", expectedDate: "Sat 1st December, 2018" },
         { date: "01-12-2018", formatPattern: "DDD-dd-MMM, yyyy", expectedDate: "Sat-01-Dec, 2018" },
         { date: "26-08-2018", formatPattern: "DDD dd MMM", expectedDate: "Sun 26 Aug" },
         { date: "26-08-2018", formatPattern: "DDD OI MMM", expectedDate: "Sun 26th Aug" }
        ].forEach(function (data) {
            it('Should format date ' + data.date + ' with given format string of ' + data.formatPattern + ' with expected result of ' + data.expectedDate, () => {
                var result = shado.date.format(data.date, data.formatPattern);
                expect(result).to.equal(data.expectedDate);
            });
        });

        describe('In US date format', () => {
            [{ date: "11/01/2014", formatPattern: "MM/dd/yyyy", expectedDate: "11/01/2014" },
             { date: "07/21/2002", formatPattern: "OI MMMM, yyyy", expectedDate: "21st July, 2002" },
             { date: "12-01-2018", formatPattern: "DDD-dd-MMM, yyyy", expectedDate: "Sat-01-Dec, 2018" },
             { date: "08-29-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Wednesday 29th August, 2018" }
            ].forEach(function (data) {
                it('Should format date ' + data.date + ' with given format string of ' + data.formatPattern + ' with expected result of ' + data.expectedDate, () => {
                    var result = shado.date.format(data.date, data.formatPattern, true);
                    expect(result).to.equal(data.expectedDate);
                });
            });
        });

        describe('Date object as date parameter', () => {
            [{ date: "01/11/2018", formatPattern: "dd/MM/yyyy", expectedDate: "01/11/2018" },
            { date: "01/05/1977", formatPattern: "OI MMMM, yyyy", expectedDate: "1st May, 1977" },
            { date: "30/06/2004", formatPattern: "OI MMMM, yyyy", expectedDate: "30th June, 2004" },
            { date: "25-09-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Tuesday 25th September, 2018" },
            { date: "02-12-2018", formatPattern: "DDDD OI MMMM, yyyy", expectedDate: "Sunday 2nd December, 2018" }
            ].forEach(function (data) {
                it('Should format date ' + data.date + ' with given format string of ' + data.formatPattern + ' with expected result of ' + data.expectedDate, () => {
                    var dateString = data.date.match(/^(\d{2})[\/|-](\d{2})[\/-](\d{4})/);
                    var date = new Date(dateString[3], dateString[2] - 1, dateString[1]);
                    var result = shado.date.format(date, data.formatPattern);
                    expect(result).to.equal(data.expectedDate);
                });
            });
        });

        describe('Invalid parameters', () => {
            it('Should raise exception if parameter is not a number or date', () => {
                expect(() => {
                    shado.date.format(new Array(), 1);
                }).to.throw('Parameters expected should be of type string or date');
            });
        });
    });
});