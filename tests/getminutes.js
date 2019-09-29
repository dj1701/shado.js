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

        it('Should return 308220 minutes between 01/06/2014 and 01/01/2015 excluding last day', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(false);

            expect(minutes).to.equal(308220);
        });

        it('Should return 309660 minutes between 01/06/2014 and 01/01/2015 including last day', () => {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(309660);
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

        it('Should return 7523940 minutes with dates between 01/01/2000 and 21/04/2014 including last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setDates(firstDate, secondDate);
            var minutes = shado.date.getMinutes(true);

            expect(minutes).to.equal(7523940);
        });

        it('Should return 7522500 minutes with dates between 01/01/2000 and 21/04/2014 excluding last day', () => {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            var minutes = shado.date.setDates(firstDate, secondDate).getMinutes(false);

            expect(minutes).to.equal(7522500);
        });

        describe('with time segment', () => {
            it('Should return 4733280 minutes with dates between 01/01/2010 01:00:00:000 and 01/01/2019 01:00:00.000', () => {
                var firstDate = "01/01/2010 01:00:00:000";
                var secondDate = "01/01/2019 01:00:00:000";
                var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();
    
                expect(minutes).to.equal(4733280);
            });

            it('Should return 27133498 minutes with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/06/1967 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();

                expect(minutes).to.equal(27133498);
            });

            it('Should return 958 minutes with dates between 01/01/2019 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                var firstDate = "01/01/2019 03:34:25:233";
                var secondDate = "01/01/2019 19:32:44:12";
                var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();
    
                expect(minutes).to.equal(958);
            });

            describe('ISO 8601 format', () => {
                it('Should return 2630880 minutes with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(2630880);
                });

                it('Should return 2630880 minutes with ISO dates between 1999-06-10T14:50:25:545Z and 2004-06-10T14:50:25:545Z last day ignored as time is provied', () => {
                    var firstDate = "1999-06-10T14:50:25:545Z";
                    var secondDate = "2004-06-10T14:50:25:545Z";
                    var minutes = shado.date.setDates(firstDate, secondDate).getMinutes(true);
        
                    expect(minutes).to.equal(2630880);
                });

                it('Should return 19068725 minutes with ISO dates between 1969-02-01T12:50:25:654Z and 2005-05-05T16:55:35:545Z', () => {
                    var firstDate = "1969-02-01T12:50:25:654Z";
                    var secondDate = "2005-05-05T16:55:35:545Z";
                    var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(19068725);
                });

                it('Should return 659705 minutes with ISO dates between 2014-02-01T12:50:25:654Z and 2015-05-05T16:55:35:545Z', () => {
                    var firstDate = "2014-02-01T12:50:25:654Z";
                    var secondDate = "2015-05-05T16:55:35:545Z";
                    var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(659705);
                });

                it('Should return 52069195 minutes with ISO dates between 2000-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2000-12-31T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(52069195);
                });

                it('Should return 52067755 minutes with ISO dates between 2001-12-31T12:50:25:654 and 2099-12-31T16:45:35:545Z', () => {
                    var firstDate = "2001-01-01T12:50:25:654Z";
                    var secondDate = "2099-12-31T16:45:35:545Z";
                    var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(52067755);
                });

                it('Should return 27133498 minutes with dates between 01/06/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "1967-06-01T03:34:25:233Z";
                    var secondDate = "2019-01-01T19:32:44:12Z";
                    var minutes = shado.date.setDates(firstDate, secondDate).getMinutes();
        
                    expect(minutes).to.equal(27133498);
                });
            });
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

            it('Should return 308220 minutes between 06/01/2014 and 01/01/2015 excluding last day', () => {
                var firstDate = "06/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setDates(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(false);

                expect(minutes).to.equal(308220);
            });

            it('Should return 309660 minutes between 01/06/2014 and 01/01/2015 including last day', () => {
                var firstDate = "06/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setDates(firstDate, secondDate, true);
                var minutes = shado.date.getMinutes(true);

                expect(minutes).to.equal(309660);
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

            describe('with time segment', () => {
                it('Should return 5785920 minutes dates between 01/01/2008 01:00:00:000 and 01/01/2019 01:00:00:000', () => {
                    var firstDate = "01/01/2008 01:00:00:000";
                    var secondDate = "01/01/2019 01:00:00:000";
                    var minutes = shado.date.setDates(firstDate, secondDate, true).getMinutes();
        
                    expect(minutes).to.equal(5785920);
                });
    
                it('Should return 27133498 minutes with dates between 06/01/1967 03:34:25:233 and 01/01/2019 19:32:44:12', () => {
                    var firstDate = "06/01/1967 03:34:25:233";
                    var secondDate = "01/01/2019 19:32:44:12";
                    var minutes = shado.date.setDates(firstDate, secondDate, true).getMinutes();
        
                    expect(minutes).to.equal(27133498);
                });
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

                var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getMinutes(false);

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

                var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getMinutes(true);

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