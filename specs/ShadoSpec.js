describe('Date Comparison', function () {

    describe('Calculate difference in years with two dates', function () {
        it('Should return 16 years with dates between 01/01/1970 and 01/01/1986', function () {
            var firstDate = "01/01/1970";
            var secondDate = "01/01/1986";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(16);
        });

        it('Should return 23 years with dates between 31/12/1990 and 29/03/2014', function () {
            var firstDate = "31/11/1990";
            var secondDate = "29/03/2014";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(23);
        });

        it('Should return 23 years with dates between 01/01/1991 and 29/03/2014', function () {
            var firstDate = "01/01/1991";
            var secondDate = "29/03/2014";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(23);
        });

        it('Should return 23 years with dates between 30/10/1990 and 29/03/2014', function () {
            var firstDate = "30/10/1990";
            var secondDate = "29/03/2014";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(23);
        });

        it('Should return 16 years with dates between 30/04/1997 and 29/03/2014', function () {
            var firstDate = "30/04/1997";
            var secondDate = "29/03/2014";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(16);
        });

        it('Should return 16 years with dates between 31/12/1969 and 01/01/1986', function () {
            var firstDate = "31/12/1969";
            var secondDate = "01/01/1986";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(16);
        });

        it('Should return 16 years with dates between 31/12/1969 and 30/12/1986', function () {
            var firstDate = "31/12/1969";
            var secondDate = "30/12/1986";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(16);
        });

        it('Should return 50 years with dates between 30/03/1964 and 30/03/2014', function () {
            var firstDate = "30/03/1964";
            var secondDate = "30/03/2014";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(50);
        });

        it('Should return 24 years with dates between 30/11/1989 and 01/04/2014', function () {
            var firstDate = "30/11/1989";
            var secondDate = "01/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(24);
        });

        it('Should return 64 years with dates between 31/10/1949 and 01/05/2014', function () {
            var firstDate = "31/10/1949";
            var secondDate = "01/05/2014";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(64);
        });

        it('Should return 1 year with dates between 01/01/2014 and 01/01/2015', function () {
            var firstDate = "01/01/2014";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(1);
        });

        it('Should return 2 years with dates between 01/01/2013 and 01/01/2015', function () {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var years = shado.date.compareYears();

            expect(years).toBe(1);
        });

        describe('In US date format', function () {
            it('Should return 23 years with dates between 10/30/1990 and 03/29/2014', function () {
                var firstDate = "10/30/1990";
                var secondDate = "03/29/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var years = shado.date.compareYears();

                expect(years).toBe(23);
            });

            it('Should return 1 year with dates between 01/01/2014 and 01/01/2015', function () {
                var firstDate = "01/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setValues(firstDate, secondDate, true);
                var years = shado.date.compareYears();

                expect(years).toBe(1);
            });

            it('Should return 50 years with dates between 03/30/1964 and 03/30/2014', function () {
                var firstDate = "03/30/1964";
                var secondDate = "03/30/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var years = shado.date.compareYears();

                expect(years).toBe(50);
            });

            it('Should return 16 years with dates between 04/30/1997 and 03/29/2014', function () {
                var firstDate = "04/30/1997";
                var secondDate = "03/29/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var years = shado.date.compareYears();

                expect(years).toBe(16);
            });

            it('Should return 16 years with dates between 09/21/1989 and 09/21/2014', function () {
                var firstDate = "09/21/1989";
                var secondDate = "09/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var years = shado.date.compareYears();

                expect(years).toBe(25);
            });
        });
    });

    describe('Calculation difference in months with two dates', function () {
        it('Should return 12 months between 01/01/2014 and 01/01/2015', function () {
            var firstDate = "01/01/2014";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(12);
        });

        it('Should return 24 months between 01/01/2013 and 01/01/2015', function () {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(24);
        });

        it('Should return 7 months between 01/06/2014 and 01/01/2015', function () {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(7);
        });

        it('Should return 6 months between 01/07/2014 and 01/01/2015', function () {
            var firstDate = "01/07/2014";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(6);
        });

        it('Should return 203 months with dates between 31/12/1969 and 30/12/1986', function () {
            var firstDate = "31/12/1969";
            var secondDate = "30/12/1986";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(203);
        });

        it('Should return 773 months with dates between 31/10/1949 and 01/05/2014', function () {
            var firstDate = "31/10/1949";
            var secondDate = "01/05/2014";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(773);
        });

        it('Should return 470 months with dates between 18/02/1975 and 21/04/2014', function () {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(470);
        });

        it('Should return 531 months with dates between 01/01/1970 and 21/04/2014', function () {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(531);
        });

        it('Should return 171 months with dates between 01/01/2000 and 21/04/2014', function () {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(171);
        });

        it('Should return 1371 months with dates between 01/01/1900 and 27/04/2014', function () {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var months = shado.date.compareMonths();

            expect(months).toBe(1371);
        });

        describe('In US date format', function () {
            it('Should return 470 months with dates between 02/18/1975 and 04/21/2014', function () {
                var firstDate = "02/18/1975";
                var secondDate = "04/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var months = shado.date.compareMonths();

                expect(months).toBe(470);
            });

            it('Should return 1371 months with dates between 01/01/1900 and 04/27/2014', function () {
                var firstDate = "01/01/1900";
                var secondDate = "04/27/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var months = shado.date.compareMonths();

                expect(months).toBe(1371);
            });

            it('Should return 12 months between 01/01/2014 and 01/01/2015', function () {
                var firstDate = "01/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setValues(firstDate, secondDate, true);
                var months = shado.date.compareMonths();

                expect(months).toBe(12);
            });

            it('Should return 416 months with dates between 01/01/1980 and 09/21/2014', function () {
                var firstDate = "01/01/1980";
                var secondDate = "09/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var months = shado.date.compareMonths();

                expect(months).toBe(416);
            });

            it('Should return 773 months with dates between 10/31/1949 and 05/01/2014', function () {
                var firstDate = "10/31/1949";
                var secondDate = "05/01/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var months = shado.date.compareMonths();

                expect(months).toBe(773);
            });
        });
    });

    describe('Calculation difference in weeks with two dates', function () {
        it('Should return 2310 weeks with dates between 01/01/1970 and 16/04/2014', function () {
            var firstDate = "01/01/1970";
            var secondDate = "16/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(2310);
        });

        it('Should return 2311 weeks with dates between 01/01/1970 and 17/04/2014', function () {
            var firstDate = "01/01/1970";
            var secondDate = "17/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(2311);
        });

        it('Should return 5965 weeks with dates between 01/01/1900 and 03/05/2014', function () {
            var firstDate = "01/01/1900";
            var secondDate = "03/05/2014";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(5965);
        });

        it('Should return 3365 weeks with dates between 31/10/1949 and 01/05/2014', function () {
            var firstDate = "31/10/1949";
            var secondDate = "01/05/2014";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(3365);
        });

        it('Should return 148 weeks with dates between 20/01/1961 and 22/11/1963', function () {
            var firstDate = "20/01/1961";
            var secondDate = "22/11/1963";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(148);
        });

        it('Should return 3355 weeks with dates between 31/12/1949 and 21/04/2014', function () {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(3355);
        });

        it('Should return 882 weeks with dates between 31/12/1969 and 30/12/1986', function () {
            var firstDate = "31/12/1969";
            var secondDate = "30/12/1986";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(886);
        });

        it('Should return 14 weeks with dates between 01/01/2014 and 10/04/2014', function () {
            var firstDate = "01/01/2014";
            var secondDate = "10/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(14);
        });

        it('Should return 2608 weeks with dates between 30/03/1964 and 30/03/2014', function () {
            var firstDate = "30/03/1964";
            var secondDate = "30/03/2014";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(2608);
        });

        it('Should return 0 weeks with dates between 01/01/2014 and 02/01/2014', function () {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setValues(firstDate, secondDate);
            var weeks = shado.date.compareWeeks();

            expect(weeks).toBe(0);
        });

        describe('In US date format', function () {
            it('Should return 3365 weeks with dates between 10/31/1949 and 05/01/2014', function () {
                var firstDate = "10/31/1949";
                var secondDate = "05/01/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var weeks = shado.date.compareWeeks();

                expect(weeks).toBe(3365);
            });

            it('Should return 0 weeks with dates between 01/01/2014 and 01/02/2014', function () {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var weeks = shado.date.compareWeeks();

                expect(weeks).toBe(0);
            });

            it('Should return 882 weeks with dates between 12/31/1969 and 12/30/1986', function () {
                var firstDate = "12/31/1969";
                var secondDate = "12/30/1986";
                shado.date.setValues(firstDate, secondDate, true);
                var weeks = shado.date.compareWeeks();

                expect(weeks).toBe(886);
            });

            it('Should return 5965 weeks with dates between 01/01/1900 and 05/03/2014', function () {
                var firstDate = "01/01/1900";
                var secondDate = "05/03/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var weeks = shado.date.compareWeeks();

                expect(weeks).toBe(5965);
            });

            it('Should return 148 weeks with dates between 01/20/1961 and 11/22/1963', function () {
                var firstDate = "01/20/1961";
                var secondDate = "11/22/1963";
                shado.date.setValues(firstDate, secondDate, true);
                var weeks = shado.date.compareWeeks();

                expect(weeks).toBe(148);
            });
        });
    });

    describe('Calculation difference in days with two dates', function () {
        it('Should return 1 day with dates between 01/01/2014 and 02/01/2014 excluding last day', function () {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(false);

            expect(days).toBe(1);
        });

        it('Should return 2 days with dates between 01/01/2014 and 02/01/2014 including last day', function () {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(true);

            expect(days).toBe(2);
        });

        it('Should return 100 days with dates between 01/01/2014 and 10/04/2014 including last day', function () {
            var firstDate = "01/01/2014";
            var secondDate = "10/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(true);

            expect(days).toBe(100);
        });

        it('Should return 99 days with dates between 01/01/2014 and 10/04/2014 excluding last day', function () {
            var firstDate = "01/01/2014";
            var secondDate = "10/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(false);

            expect(days).toBe(99);
        });

        it('Should return 23473 days with dates between 31/12/1949 and 07/04/2014 excluding last day', function () {
            var firstDate = "31/12/1949";
            var secondDate = "07/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(false);

            expect(days).toBe(23473);
        });

        it('Should return 23474 days with dates between 31/12/1949 and 07/04/2014 including last day', function () {
            var firstDate = "31/12/1949";
            var secondDate = "07/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(true);

            expect(days).toBe(23474);
        });

        it('Should return 78 days with dates between 25/09/1988 and 12/12/1988 excluding last day', function () {
            var firstDate = "25/09/1988";
            var secondDate = "12/12/1988";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(false);

            expect(days).toBe(78);
        });

        it('Should return 79 days with dates between 25/09/1988 and 12/12/1988 including last day', function () {
            var firstDate = "25/09/1988";
            var secondDate = "12/12/1988";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(true);

            expect(days).toBe(79);
        });

        it('Should return 33 days with dates between 29/02/2012 and 01/04/2012 including last day', function () {
            var firstDate = "29/02/2012";
            var secondDate = "01/04/2012";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(true);

            expect(days).toBe(33);
        });

        it('Should return 32 days with dates between 29/02/2012 and 01/04/2012 excluding last day', function () {
            var firstDate = "29/02/2012";
            var secondDate = "01/04/2012";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(false);

            expect(days).toBe(32);
        });

        it('Should return 1037 days with dates between 20/01/1961 and 22/11/1963 including last day', function () {
            var firstDate = "20/01/1961";
            var secondDate = "22/11/1963";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(true);

            expect(days).toBe(1037);
        });

        it('Should return 1036 days with dates between 20/01/1961 and 22/11/1963 excluding last day', function () {
            var firstDate = "20/01/1961";
            var secondDate = "22/11/1963";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(false);

            expect(days).toBe(1036);
        });

        describe('In US date format', function () {
            it('Should return 1036 days with dates between 01/20/1961 and 11/22/1963 excluding last day', function () {
                var firstDate = "01/20/1961";
                var secondDate = "11/22/1963";
                shado.date.setValues(firstDate, secondDate, true);
                var days = shado.date.compareDays(false);

                expect(days).toBe(1036);
            });

            it('Should return 1037 days with dates between 01/20/1961 and 11/22/1963 including last day', function () {
                var firstDate = "01/20/1961";
                var secondDate = "11/22/1963";
                shado.date.setValues(firstDate, secondDate, true);
                var days = shado.date.compareDays(true);

                expect(days).toBe(1037);
            });

            it('Should return 1 day with dates between 01/01/2014 and 01/02/2014 excluding last day', function () {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var days = shado.date.compareDays(false);

                expect(days).toBe(1);
            });

            it('Should return 2 days with dates between 01/01/2014 and 01/02/2014 including last day', function () {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var days = shado.date.compareDays(true);

                expect(days).toBe(2);
            });

            it('Should return 99 days with dates between 01/01/2014 and 04/10/2014 excluding last day', function () {
                var firstDate = "01/01/2014";
                var secondDate = "04/10/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var days = shado.date.compareDays(false);

                expect(days).toBe(99);
            });

            it('Should return 100 days with dates between 01/01/2014 and 04/10/2014 including last day', function () {
                var firstDate = "01/01/2014";
                var secondDate = "04/10/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var days = shado.date.compareDays(true);

                expect(days).toBe(100);
            });
        });
    });

    describe('Calculation difference in hours with two dates', function () {
        it('Should return 343368 hours with dates between 18/02/1975 and 21/04/2014 including last day', function () {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(true);

            expect(hours).toBe(343368);
        });

        it('Should return 343344 hours with dates between 18/02/1975 and 21/04/2014 excluding last day', function () {
            var firstDate = "18/02/1975";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(false);

            expect(hours).toBe(343344);
        });

        it('Should return 24 hours with dates between 01/01/2014 and 02/01/2014 excluding last day', function () {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(false);

            expect(hours).toBe(24);
        });

        it('Should return 48 hours with dates between 01/01/2014 and 02/01/2014 including last day', function () {
            var firstDate = "01/01/2014";
            var secondDate = "02/01/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(true);

            expect(hours).toBe(48);
        });

        it('Should return 125376 hours with dates between 01/01/2000 and 21/04/2014 including last day', function () {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(true);

            expect(hours).toBe(125376);
        });

        it('Should return 125352 hours with dates between 01/01/2000 and 21/04/2014 excluding last day', function () {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(false);

            expect(hours).toBe(125352);
        });

        it('Should return 388344 hours with dates between 01/01/1970 and 21/04/2014 including last day', function () {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(true);

            expect(hours).toBe(388344);
        });

        it('Should return 388322 hours with dates between 01/01/1970 and 21/04/2014 excluding last day', function () {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(false);

            expect(hours).toBe(388320);
        });

        it('Should return 563664 hours with dates between 31/12/1949 and 21/04/2014 excluding last day', function () {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(false);

            expect(hours).toBe(563664);
        });

        it('Should return 563688 hours with dates between 31/12/1949 and 21/04/2014 including last day', function () {
            var firstDate = "31/12/1949";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var hours = shado.date.compareHours(true);

            expect(hours).toBe(563688);
        });

        describe('In US date format', function () {
            it('Should return 343344 hours with dates between 02/18/1975 and 04/21/2014 excluding last day', function () {
                var firstDate = "02/18/1975";
                var secondDate = "04/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var hours = shado.date.compareHours(false);

                expect(hours).toBe(343344);
            });

            it('Should return 24 hours with dates between 01/01/2014 and 01/02/2014 excluding last day', function () {
                var firstDate = "01/01/2014";
                var secondDate = "01/02/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var hours = shado.date.compareHours(false);

                expect(hours).toBe(24);
            });

            it('Should return 125376 hours with dates between 01/01/2000 and 04/21/2014 including last day', function () {
                var firstDate = "01/01/2000";
                var secondDate = "04/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var hours = shado.date.compareHours(true);

                expect(hours).toBe(125376);
            });

            it('Should return 388344 hours with dates between 01/01/1970 and 04/21/2014 including last day', function () {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var hours = shado.date.compareHours(true);

                expect(hours).toBe(388344);
            });

            it('Should return 563664 hours with dates between 12/31/1949 and 04/21/2014 excluding last day', function () {
                var firstDate = "12/31/1949";
                var secondDate = "04/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var hours = shado.date.compareHours(false);

                expect(hours).toBe(563664);
            });
        });
    });

    describe('Calculation difference in minutes with two dates', function () {
        it('Should return 1051200 minutes between 01/01/2013 and 01/01/2015 excluding last day', function () {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var minutes = shado.date.compareMinutes(false);

            expect(minutes).toBe(1051200);
        });

        it('Should return 1052640 minutes between 01/01/2013 and 01/01/2015 including last day', function () {
            var firstDate = "01/01/2013";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var minutes = shado.date.compareMinutes(true);

            expect(minutes).toBe(1052640);
        });

        it('Should return 308160 minutes between 01/06/2014 and 01/01/2015 excluding last day', function () {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var minutes = shado.date.compareMinutes(false);

            expect(minutes).toBe(308160);
        });

        it('Should return 309560 minutes between 01/06/2014 and 01/01/2015 including last day', function () {
            var firstDate = "01/06/2014";
            var secondDate = "01/01/2015";
            shado.date.setValues(firstDate, secondDate);
            var minutes = shado.date.compareMinutes(true);

            expect(minutes).toBe(309600);
        });

        it('Should return 23300640 minutes with dates between 01/01/1970 and 21/04/2014 including last day', function () {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var minutes = shado.date.compareMinutes(true);

            expect(minutes).toBe(23300640);
        });

        it('Should return 23299200 minutes with dates between 01/01/1970 and 21/04/2014 excluding last day', function () {
            var firstDate = "01/01/1970";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var minutes = shado.date.compareMinutes(false);

            expect(minutes).toBe(23299200);
        });

        it('Should return 7522560 minutes with dates between 01/01/2000 and 21/04/2014 including last day', function () {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var minutes = shado.date.compareMinutes(true);

            expect(minutes).toBe(7522560);
        });

        it('Should return 7521120 minutes with dates between 01/01/2000 and 21/04/2014 excluding last day', function () {
            var firstDate = "01/01/2000";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var minutes = shado.date.compareMinutes(false);

            expect(minutes).toBe(7521120);
        });

        describe('In US date format', function () {
            it('Should return 1051200 minutes between 01/01/2013 and 01/01/2015 excluding last day', function () {
                var firstDate = "01/01/2013";
                var secondDate = "01/01/2015";
                shado.date.setValues(firstDate, secondDate, true);
                var minutes = shado.date.compareMinutes(false);

                expect(minutes).toBe(1051200);
            });

            it('Should return 1052640 minutes between 01/01/2013 and 01/01/2015 including last day', function () {
                var firstDate = "01/01/2013";
                var secondDate = "01/01/2015";
                shado.date.setValues(firstDate, secondDate, true);
                var minutes = shado.date.compareMinutes(true);

                expect(minutes).toBe(1052640);
            });

            it('Should return 308160 minutes between 06/01/2014 and 01/01/2015 excluding last day', function () {
                var firstDate = "06/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setValues(firstDate, secondDate, true);
                var minutes = shado.date.compareMinutes(false);

                expect(minutes).toBe(308160);
            });

            it('Should return 309560 minutes between 01/06/2014 and 01/01/2015 including last day', function () {
                var firstDate = "06/01/2014";
                var secondDate = "01/01/2015";
                shado.date.setValues(firstDate, secondDate, true);
                var minutes = shado.date.compareMinutes(true);

                expect(minutes).toBe(309600);
            });

            it('Should return 23300640 minutes with dates between 01/01/1970 and 04/21/2014 including last day', function () {
                var firstDate = "01/01/1970";
                var secondDate = "04/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var minutes = shado.date.compareMinutes(true);

                expect(minutes).toBe(23300640);
            });
        });
    });

    describe('Calculation difference in seconds with two dates', function () {
        it('Should return 451526400 seconds with dates between 01/01/2000 and 22/04/2014 including last day', function () {
            var firstDate = "01/01/2000";
            var secondDate = "22/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var seconds = shado.date.compareSeconds(true);

            expect(seconds).toBe(451526400);
        });

        it('Should return 451440000 seconds with dates between 01/01/2000 and 22/04/2014 excluding last day', function () {
            var firstDate = "01/01/2000";
            var secondDate = "22/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var seconds = shado.date.compareSeconds(false);

            expect(seconds).toBe(451440000);
        });

        it('Should return 1398211200 seconds with dates between 01/01/1970 and 22/04/2014 including last day', function () {
            var firstDate = "01/01/1970";
            var secondDate = "22/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var seconds = shado.date.compareSeconds(true);

            expect(seconds).toBe(1398211200);
        });

        it('Should return 1398124800 seconds with dates between 01/01/1970 and 22/04/2014 excluding last day', function () {
            var firstDate = "01/01/1970";
            var secondDate = "22/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var seconds = shado.date.compareSeconds(false);

            expect(seconds).toBe(1398124800);
        });

        it('Should return 691200 seconds with dates between 14/04/2014 and 21/04/2014 including last day', function () {
            var firstDate = "14/04/2014";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var seconds = shado.date.compareSeconds(true);

            expect(seconds).toBe(691200);
        });

        it('Should return 604800 seconds with dates between 14/04/2014 and 21/04/2014 excluding last day', function () {
            var firstDate = "14/04/2014";
            var secondDate = "21/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var seconds = shado.date.compareSeconds(false);

            expect(seconds).toBe(604800);
        });

        it('Should return 3607632000 seconds with dates between 01/01/1900 and 27/04/2014 including last day', function () {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var seconds = shado.date.compareSeconds(true);

            expect(seconds).toBe(3607632000);
        });

        it('Should return 3607545600 seconds with dates between 01/01/1900 and 27/04/2014 excluding last day', function () {
            var firstDate = "01/01/1900";
            var secondDate = "27/04/2014";
            shado.date.setValues(firstDate, secondDate);
            var seconds = shado.date.compareSeconds(false);

            expect(seconds).toBe(3607545600);
        });

        describe('In US date format', function () {
            it('Should return 1398124800 seconds with dates between 01/01/1970 and 04/22/2014 excluding last day', function () {
                var firstDate = "01/01/1970";
                var secondDate = "04/22/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var seconds = shado.date.compareSeconds(false);

                expect(seconds).toBe(1398124800);
            });

            it('Should return 1398211200 seconds with dates between 01/01/1970 and 04/22/2014 including last day', function () {
                var firstDate = "01/01/1970";
                var secondDate = "04/22/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var seconds = shado.date.compareSeconds(true);

                expect(seconds).toBe(1398211200);
            });

            it('Should return 691200 seconds with dates between 04/14/2014 and 04/21/2014 including last day', function () {
                var firstDate = "04/14/2014";
                var secondDate = "04/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var seconds = shado.date.compareSeconds(true);

                expect(seconds).toBe(691200);
            });

            it('Should return 604800 seconds with dates between 04/14/2014 and 04/21/2014 excluding last day', function () {
                var firstDate = "04/14/2014";
                var secondDate = "04/21/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var seconds = shado.date.compareSeconds(false);

                expect(seconds).toBe(604800);
            });

            it('Should return 3607545600 seconds with dates between 01/01/1900 and 04/27/2014 excluding last day', function () {
                var firstDate = "01/01/1900";
                var secondDate = "04/27/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var seconds = shado.date.compareSeconds(false);

                expect(seconds).toBe(3607545600);
            });
        });
    });

    describe('Invalid Leap Year', function () {
        it('Should increment end date to 01/03/2015 if end date is 29/02/2015 - invalid leap year', function () {
            var firstDate = "27/06/2014";
            var secondDate = "29/02/2015";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(false);

            expect(days).toBe(247);
        });

        it('Should increment start date to 01/03/2014 if start date is 29/02/2014 - invalid leap year', function () {
            var firstDate = "29/02/2014";
            var secondDate = "01/03/2014";
            shado.date.setValues(firstDate, secondDate);
            var days = shado.date.compareDays(false);

            expect(days).toBe(0);
        });

        describe('In US date format', function () {
            it('Should increment end date to 03/01/2015 if end date is 02/29/2015 - invalid leap year', function () {
                var firstDate = "06/27/2014";
                var secondDate = "02/29/2015";
                shado.date.setValues(firstDate, secondDate, true);
                var days = shado.date.compareDays(false);

                expect(days).toBe(247);
            });

            it('Should increment start date to 01/03/2014 if start date is 29/02/2014 - invalid leap year', function () {
                var firstDate = "02/29/2014";
                var secondDate = "03/01/2014";
                shado.date.setValues(firstDate, secondDate, true);
                var days = shado.date.compareDays(false);

                expect(days).toBe(0);
            });
        });
    });

    describe('Invalid Parameters', function () {
        it('Should raise exception if either parameter is not of type String', function () {
            var firstDate = new Object();
            var secondDate = new Object();

            expect(function () {
                shado.date.setValues(firstDate, secondDate);
            }).toThrow(new Error('Parameters are not of type string'));
        });

        it('Should raise exception if one parameter is not of type Date', function () {
            var firstDate = new Object();
            var secondDate = new Date(2014, 3, 27);

            expect(function () {
                shado.date.setValues(firstDate, secondDate);
            }).toThrow(new Error('Parameters are not of type string'));
        });

        it('Should raise exception if both parameters is null', function () {
            var firstDate = null;
            var secondDate = null;

            expect(function () {
                shado.date.setValues(firstDate, secondDate);
            }).toThrow(new Error('Parameters are not of type string'));
        });

        it('Should raise exception if one parameter is not string', function () {
            var firstDate = new Date(2014, 3, 27);
            var secondDate = "27/04/2014";

            expect(function () {
                shado.date.setValues(firstDate, secondDate);
            }).toThrow(new Error('Parameters are not of type string'));
        });
    });

    describe('Create new date object', function () {
        it('Should return new data object for given date of "01/01/1970"', function () {
            var date = "01/01/1970";
            var expectedDate = new Date(1970, 0, 1);

            var result = shado.date.createDate(date);
            expect(result).toEqual(expectedDate);
        });

        it('Should return new data object for given date of "19/07/2014"', function () {
            var date = "19/07/2014";
            var expectedDate = new Date(2014, 6, 19);

            var result = shado.date.createDate(date);
            expect(result).toEqual(expectedDate);
        });

        it('Should return new data object for given US date of "07/19/2014"', function () {
            var date = "07/19/2014";
            var expectedDate = new Date(2014, 6, 19);

            var result = shado.date.createDate(date, true);
            expect(result).toEqual(expectedDate);
        });

        it('Should return new data object for current date', function () {
            var today = new Date();
            var date = "".concat(today.getDate(), '/', ("0" + (today.getMonth() + 1)).slice(-2), '/', today.getFullYear());
            var expectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

            var result = shado.date.createDate(date);
            expect(result).toEqual(expectedDate);
        });

        it('Should return new data object for current date in US date format', function () {
            var today = new Date();
            var date = "".concat(("0" + (today.getMonth() + 1)).slice(-2), '/', today.getDate(), '/', today.getFullYear());
            var expectedDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());

            var result = shado.date.createDate(date, true);
            expect(result).toEqual(expectedDate);
        });
    });
});