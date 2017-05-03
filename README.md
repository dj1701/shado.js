shado.js
========

This is a JavaScript library to provide precise date comparison calculations between two dates for Years, Months, Days, Weeks, Hours, Minutes and Seconds.

Instructions on how to use:
---------------------------

1.  setDates Method

    The method takes three parameters for start date and end date with an optional boolean true indicating requirement to use US Date       Format.  Both date paramenters can be either a string using the UK date format of dd/mm/yyyy or US date format mm/dd/yyyy.         Otherwise JavaScript Date Objects.  If using Date Objects the optional boolean parameter is not relevant, because system settings take over the date formatting.  The call to the setDates method does not require the use of the "new" key word to instantiate the object.  The namespace pattern is used exposing the methods required.  If either parameter is not a string and date type, an exception will be raised with the error message of ‘Parameters are expecting type string or date’.


    Example UK Date Format using string parameters:

             var firstDate = "01/01/1970";
             var secondDate = "01/01/1986";
             shado.date.setDates(firstDate, secondDate);

    Example US Date Format using string parameters:

             var firstDate = "02/01/1970";
             var secondDate = "10/01/1986";
             shado.date.setDates(firstDate, secondDate, true);

    Example of Date Object parameters:

             var firstDate = new Date(2000, 0, 1);
             var secondDate = new Date(2014, 3, 22);
             shado.date.setDates(firstDate, secondDate);

    Example of mixed types of string and date:

             var firstDate = "01/01/1970";
             var secondDate = new Date(2014, 3, 27);
             shado.date.setDates(firstDate, secondDate);

2. setDatesByUnits Method

   This method allows individual date units of Day, Month and Year to be passed in as separate parameters, providing additional option   as to date input.  The parameter type can be a number or string.  The string numbers can have a 0 prefix on them, for example ‘01’.  As with the setDates method, the setDatesByUnits method does not require the use of the "new" key word to instantiate the object.   If the parameters are not a number or string type, an exception will be raised with the error message of ‘Parameters are expecting type number or string’.

    Example of the setDatesByUnits method:

            var firstDay = 31;
            var firstMonth = 12;
            var firstYear = 1899;
            var secondDay = 31;
            var secondMonth = 12;
            var secondYear = 2150;
            shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);

3.  After calling either the setDates or setDatesByUnits method.  Developers can call other methods for Years, Months and Weeks to return the          calculated date comparisons.       

    Example:

             var years = shado.date.getYears();
             var months = shado.date.getMonths();
             var weeks = shado.date.getWeeks();

4.  For Days, Hours, Minutes and Seconds there is one boolean parameter required.  This parameter indicates to include the     last day in the calculation or not.  Therefore, true = include last day, false = exclude last day.  This is not           optional.

    Example:

             var days = shado.date.getDays(false); //exclude last day.
             var days = shado.date.getDays(true);  //include last day.

             var hours = shado.date.getHours(false); //exclude last day.
             var hours = shado.date.getHours(true);  //include last day.

             var minutes = shado.date.getMinutes(false); //exclude last day.
             var minutes = shado.date.getMinutes(true)); //include last day.

             var seconds = shado.date.getSeconds(false); //exclude last day.
             var seconds = shado.date.getSeconds(true);  //include last day.

5.  Included with the library is a specs folder containing a js file called ShadoSpec.js.  The development of the date        comparison calculations was Test Driven.  The Jasmine v2.0 Framework was used to unit test each method and drive out      the code design.  Link: http://jasmine.github.io/

It is intended that future versions will be released when time is available.  All we ask is constructive feedback is provided from your experience in using this library.  My email address is: d_jacobs@btopenworld.com

Browser Support:
----------------

Shado.js has been tested on the latast versions as of time of writing with Intenet Explorer, Firefox and Chrome. A minified version has been added for optimised download time.
