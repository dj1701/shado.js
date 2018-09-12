shado.js
========

This is a JavaScript library to provide precise date comparison calculations between two dates for Years, Months, Days, Weeks, Hours, Minutes and Seconds.

Commands to build and run tests
-------------------------------

1.  npm install

    Download all package dependences needed for creating the node_module folder.

2.  npm run build:shado

    Will minify using uglify-js to create new file called shado-min.js and run all the tests in the ShadoSpec.js file, which reads in from the minified shado-min.js file.

3.  npm test

    This will run all the tests implemented in the ShadoSpec.js file wothout minification.

Instructions on how to use
--------------------------

1.  setDates Method

    The method takes three parameters for start date and end date with an optional boolean true indicating requirement to use US Date Format.  Default is UK date format.  Both date paramenters can be either a string using the UK date format of dd/mm/yyyy or US date format mm/dd/yyyy.  Otherwise JavaScript Date Objects.  If using Date Objects the optional boolean parameter is not relevant, because system settings take over the date formatting.  The call to the setDates method does not require the use of the "new" key word to instantiate the object.  The namespace pattern is used exposing the methods required.  If either parameter is not a string and date type, an exception will be raised with the error message of ‘Parameters are expecting type string or date’.


    Example UK Date Format using string parameters:

            var shado = require("shado-min");

            var firstDate = "01/01/1970";
            var secondDate = "01/01/1986";
            shado.date.setDates(firstDate, secondDate);

    Example US Date Format using string parameters:

            var shado = require("shado-min");

            var firstDate = "02/01/1970";
            var secondDate = "10/01/1986";
            shado.date.setDates(firstDate, secondDate, true);

    Example of Date Object parameters:

            var shado = require("shado-min");

            var firstDate = new Date(2000, 0, 1);
            var secondDate = new Date(2014, 3, 22);
            shado.date.setDates(firstDate, secondDate);

    Example of mixed types of string and instantiated date object:

            var shado = require("shado-min");

            var firstDate = "01/01/1970";
            var secondDate = new Date(2014, 3, 27);
            shado.date.setDates(firstDate, secondDate);

2.  setDatesByUnits Method

    This method allows individual date units of Day, Month and Year to be passed in as separate parameters, providing additional option as to date input.  The parameter type can be a number or string.  The string numbers can have a 0 prefix on them, for example ‘01’.  As with the setDates method, the setDatesByUnits method does not require the use of the "new" key word to instantiate the object.   If the parameters are not a number or string type, an exception will be raised with the error message of ‘Parameters are expecting type number or string’.

    Example of the setDatesByUnits method:

            var shado = require("shado-min");

            var firstDay = 31;
            var firstMonth = 12;
            var firstYear = 1899;
            var secondDay = 31;
            var secondMonth = 12;
            var secondYear = 2150;
            shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear);

3.  After calling either the setDates or setDatesByUnits method.  Developers can call other methods for Years, Months and Weeks to return the calculated date comparisons.       

    Example:

            var years = shado.date.getYears();
            var months = shado.date.getMonths();
            var weeks = shado.date.getWeeks();

4.  For Days, Hours, Minutes and Seconds there is one boolean parameter required.  This parameter indicates to include the last day in the calculation or not.
    Therefore, true = include last day, false = exclude last day.  This is not optional.

    Example:

            var days = shado.date.getDays(false); //exclude last day.
            var days = shado.date.getDays(true);  //include last day.

            var hours = shado.date.getHours(false); //exclude last day.
            var hours = shado.date.getHours(true);  //include last day.

            var minutes = shado.date.getMinutes(false); //exclude last day.
            var minutes = shado.date.getMinutes(true)); //include last day.

            var seconds = shado.date.getSeconds(false); //exclude last day.
            var seconds = shado.date.getSeconds(true);  //include last day.

Date Formatting
---------------

1.  format method

    The method requires 3 paramters.  The first is the date either has a string or date object.  The second is the format pattern used to transform the date into the desired result.  The third paramter is a boolean indicating whether the date parameter is in US format (true) or UK format (false or not provided).

    Example:

            var shado = require("shado-min");

            var result = shado.date.format("02-09-2018", "DDDD OI MMMM, yyyy");

    The date must be provided in US format for the format method to create the result correcly with the third parameter set to true.

    Example US Date Format:

            var shado = require("shado-min");

            var result = shado.date.format("09-02-2018", "DDDD OI MMMM, yyyy", true);

    If using Date Objects the optional boolean parameter is not relevant.  The Date Object uses system settngs.
    
    Example using Date Object:

            var shado = require("shado-min");

            var result = shado.date.format(new Date(2018, 8, 2), "DDDD OI MMMM, yyyy");

    The result: Sunday 2nd September, 2018

2.  Supported formats

        M: Month number (1, 2, 3... 12)
        MM: Month number with leading zero (01, 02, 03... 12)
        MMM: Month abbreviation (Jan, Feb, Mar... Dec)
        MMMM: Month name (January, February, March... December)

        yyyy: Year number 1990, 2018, 2000
        yy: 90, 18, 00

        dd: 01..09, 10..20, 21..31
        d: 1..9, 10...20, 21..31
        OI: Day number with ordinal indicator (1st, 2nd, 3rd... 12th)
        DDD: Mon, Tues...Sun
        DDDD: Monday, Tuesday...Sunday

        Supprts Hydens -, forward lash / as separators, commas and blank spaces.

Included with the library is a specs folder containing a js file called ShadoSpec.js.  The development of the date comparison calculations is Test Driven.
The Mocha Test Runner from npmjs.org was used to unit test each method and drive out the code design.

It is intended that future versions will be released when time is available.  All I ask is constructive feedback is provided from your experience in using this library.  My email address is: dj1701.io@gmail.com

Browser Support:
----------------

Shado.js has been tested on the latest versions of Intenet Explorer, Firefox and Chrome. A minified version has been added for optimised download time.
