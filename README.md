shado.js
========

This is a JavaScript library to provide precise date and time comparison calculations between two dates for Years, Months, Days, Weeks, Hours, Minutes and Seconds.

Installation
------------

Latest stable version:

    npm install shado --save

Instructions on how to use
--------------------------

1.  The setDates Method

    The method takes three parameters for start date and end date with an optional boolean true indicating requirement to use US Date Format.  The default is the UK date format.  Both date parameters can be a string or JavaScript Date Object.  If using Date Objects the optional boolean parameter is not relevant, because system settings take over the date formatting.  The call to the setDates method does not require the use of the "new" key word to instantiate the object.  The namespace pattern is used exposing the methods required.  If either parameter is not a string and date type, an exception will be raised with the error message of ‘Parameters are expecting type string or date’.

    From shado.js version 1.1.5 the setDates method returns the methods allowing the use of dot notation (method chaining) in one line of code as described in section 3.  Functionality remains in place allowing calls to the calculation methods to be made separately as described in section 4.

    Supported Date/Time Formats

    As of version 1.2.0 the setDates method supports the inclusion of the time segment with the date.  The ISO-8601 standard is implemented alongside two other formats for both start and end date parameters.  An exception is raised with the error message of 'Invalid date/time pattern provided' if a date or time is provided in a different format that is not supported.

        1999-06-10T14:50:25:545Z - IS0-8601 Standard
        01/06/1967 03:34:25:233  - Date with time segment
        29-02-2012               - Date only

    With exception of the IS0-8601 standard, both hyden and forward lash can both be applied as separators

    Example UK Date Format using string parameters:

        var shado = require("shado");

        var firstDate = "01-01-1970";
        var secondDate = "01/01/1986";
        var result = shado.date.setDates(firstDate, secondDate).getDays(false);

    Example ISO-8601 Format using string parameters:

        var shado = require("shado");

        var firstDate = "1999-06-10T14:50:25:545Z";
        var secondDate = "2019-04-11T16:34:28:019Z";
        var result = shado.date.setDates(firstDate, secondDate).getDays(false);

    Example UK Date/Time Format using string parameters:

        var shado = require("shado");

        var firstDate = "01-01-1970 03:34:25:233";
        var secondDate = "01/01/1986 15:55:45:239";
        var result = shado.date.setDates(firstDate, secondDate).getMinutes();

    Example US Date Format using string parameters:

        var shado = require("shado");

        var firstDate = "02/01/1970";
        var secondDate = "10/01/1986";
        var result = shado.date.setDates(firstDate, secondDate, true).getDays(true);

    Example of Date Object parameters:

        var shado = require("shado");

        var firstDate = new Date(2000, 0, 1);
        var secondDate = new Date(2014, 3, 22);
        var result = shado.date.setDates(firstDate, secondDate).getWeeks();

    Example of mixed types of string and instantiated date object:

        var shado = require("shado");

        var firstDate = "01/01/1970";
        var secondDate = new Date(2014, 3, 27);
        var result = shado.date.setDates(firstDate, secondDate).getYears();

2.  The setDatesByUnits Method

    This method allows individual date units of Day, Month and Year to be passed in as separate parameters, providing additional option as to date input.  The parameter type can be a number or string.  The string numbers can have an optional 0 prefix on them, for example ‘01’.  As with the setDates method, the setDatesByUnits method does not require the use of the "new" key word to instantiate the object.   If the parameters are not a number or string type, an exception will be raised with the error message of ‘Parameters are expecting type number or string’.

    From shado.js version v1.1.5 the setDatesByUnits method returns the methods allowing the use of dot notation (method chaining) in one line of code.  Functionality remains in place allowing calls to the calculation methods to be made separately as described in section 4.  This method does not support the time segment, this will be implemented in the next version.

    Example of the setDatesByUnits method:

        var shado = require("shado");

        var firstDay = 31;
        var firstMonth = 12;
        var firstYear = 1899;
        var secondDay = 31;
        var secondMonth = 12;
        var secondYear = 2150;
        var result = shado.date.setDatesByUnits(firstDay, firstMonth, firstYear, secondDay, secondMonth, secondYear).getYears();

3.  Calling either the setDates or setDatesByUnits method.  Developers can call methods for Years, Months, Weeks, Days, Hours, Minutes and Seconds to return the calculated difference using dot notation.       

    Example:

        var shado = require("shado");

        var firstDate = new Date(2000, 0, 1);
        var secondDate = new Date(2014, 3, 22);
        var years = shado.date.setDates(firstDate, secondDate).getYears();
        var months = shado.date.setDates(firstDate, secondDate).getMonths();
        var weeks = shado.date.setDates(firstDate, secondDate).getWeeks();
        var days = shado.data.setDates(firstDate, secondDate).getDays(false);
        var hours = shado.date.setDates(firstDate, secondDate).getHours(false);
        var minutes = shado.date.setDates(firstDate, secondDate).getMinutes(false);
        var seconds = shado.date.setDates(firstDate, secondDate).getSeconds(false);

4.  For calculating Days, Hours, Minutes and Seconds there is one boolean parameter required for the inclusion of the last day in the calculated result.
    Therefore, true = include last day, false = exclude last day.  This is not optional for the use of true.  This example shows the calculation methods called separately.

    Example:

        var shado = require("shado");
        shado.date.setDates("1999-06-10T14:50:25:545Z", "2019-04-11T16:34:28:019Z");

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

1.  The format method

    The method requires 3 parameters.  The first is the date either has a string or date object.  The second is the format pattern used to transform the date into the desired result.  The third paramter is a boolean indicating whether the date parameter is in US format (true) or UK format (false or not provided).  The date parameter as a string supports both hydens - and forward lash / as separators.

    Example:

        var shado = require("shado");

        var result = shado.date.format("02-09-2018 06:15:34:126", "DDDD OI MMMM, yyyy - HH:mm:SS:sss");

    The date must be provided in US format for the format method to create the result correctly with the third parameter set to true.

    Example US Date Format:

        var shado = require("shado");

        var result = shado.date.format("09/02/2018", "DDDD OI MMMM, yyyy - HH:mm:SS:sss", true);

    If using Date Objects the optional boolean parameter is not relevant.  The Date Object uses system settngs.
    
    Example using Date Object:

        var shado = require("shado");

        var result = shado.date.format(new Date(2018, 8, 2, 6, 15, 34, 126), "DDDD OI MMMM, yyyy - HH:mm:SS:sss");

    The result: Sunday 2nd September, 2018 - 06:15:34:126

    Example using IS0-8601 Standard:

        var shado = require("shado");

        var result = shado.date.format("1999-06-10T14:50:25:545Z", "DDDD OI MMMM yyyy, HH:mm:SS:sss");

    The result: Thursday 10th June 1999, 14:50:25:545

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

        HH: Hour number with leading zero (01, 02, 03.... 15,16... 23)
        h: Hour without leading zero (1,2,3.....9,15,16... 23)
        mm: Minute number with leading zero (01, 02, 03... 20,45... 59)
        SS: Second number with leading zero (01, 02, 03... 20,45... 59)
        sss: Milisecond number with two leading zeros (001,002....009,010,011... 999)

        Supports Hydens -, forward lash / as separators, commas and blank spaces.

Included with the library is the tests folder containing the js files developed to test drive the design of the shado.js code.  The tests can be viewed in the git repository. The Mocha Test Runner from npmjs.org is used to unit test each method.

Feedback:
---------

I am open to receiving feedback from developers that use this library and welcome pull requests that I will review and if accepted.  Those persons will be acknowledged for their contribution.

I want to contribute to the open source community.  My email address is: dj1701.io@gmail.com


Node Version:
-------------

From shado.js version 1.2.0 or later.  The Node verson of 10.5.0 or later is supported.