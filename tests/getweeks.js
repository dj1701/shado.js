"use strict"

var shado = require('../release/shado-min');
var expect = require('chai').expect;

describe('Get Weeks', () => {
    
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

        it('Should return 2035 weeks with dates between 01/01/1981 and 02/01/2020', () => {
            var firstDate = "01/01/1981";
            var secondDate = "02/01/2020";
            var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();

            expect(weeks).to.equal(2035);
        });

        describe('with time segment', () => {
            it('Should return 469 weeks with dates between 01/01/2010 01:00:00:000 and 01/01/2019 01:00:00.000', () => {
                var firstDate = "01/01/2010 01:00:00:000";
                var secondDate = "01/01/2019 01:00:00:000";
                var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
    
                expect(weeks).to.equal(469);
            });

            it('Should return 2691 weeks with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/06/1967 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
    
                expect(weeks).to.equal(2691);
            });

            describe('ISO 8601 format', () => {
                it('Should return 261 weeks with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
        
                    expect(weeks).to.equal(261);
                });

                it('Should return 1891 weeks with ISO dates between 1969-02-01T12:50:25:654Z and 2005-05-05T16:55:35:545Z', () => {
                    var firstDate = "1969-02-01T12:50:25:654Z";
                    var secondDate = "2005-05-05T16:55:35:545Z";
                    var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
        
                    expect(weeks).to.equal(1891);
                });

                it('Should return 65 weeks with ISO dates between 2014-02-01T12:50:25:654Z and 2015-05-05T16:55:35:545Z', () => {
                    var firstDate = "2014-02-01T12:50:25:654Z";
                    var secondDate = "2015-05-05T16:55:35:545Z";
                    var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
        
                    expect(weeks).to.equal(65);
                });

                it('Should return 5165 weeks with ISO dates between 2000-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2000-12-31T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
        
                    expect(weeks).to.equal(5165);
                });

                it('Should return 5165 weeks with ISO dates between 2001-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2001-01-01T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
        
                    expect(weeks).to.equal(5165);
                });

                it('Should return 2691 weeks with dates between 1967-06-01T03:34:25:233Z and 2019-01-01T19:32:44:12Z', () => {
                    var firstDate = "1967-06-01T03:34:25:233Z";
                    var secondDate = "2019-01-01T19:32:44:12Z";
                    var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
        
                    expect(weeks).to.equal(2691);
                });
            });
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

            describe('with time segment', () => {
                it('Should return 574 weeks dates between 01/01/2008 01:00:00:000 and 01/01/2019 01:00:00:000', () => {
                    var firstDate = "01/01/2008 01:00:00:000";
                    var secondDate = "01/01/2019 01:00:00:000";
                    var weeks = shado.date.setDates(firstDate, secondDate, true).getWeeks();
        
                    expect(weeks).to.equal(574);
                });
    
                it('Should return 2691 weeks with dates between 06/01/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "06/01/1967 03:34:25:233";
                    var secondDate = "01/01/2019 19:32:44:12";
                    var weeks = shado.date.setDates(firstDate, secondDate, true).getWeeks();
        
                    expect(weeks).to.equal(2691);
                });
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

                var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getWeeks();

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
});