shado.js
========

This is a JavaScript library for precise date comparison calculations between two dates for Years, Months, Days, Weeks, Hours, Minutes and Seconds.

Instructions on how to use:
---------------------------

1.  The library exposes a method called setValues.  The method takes three parameters for first date and second date with an optional boolean true indicating requirement to use US Date Format.  Both date paramenters should be strings in either UK date format of dd/mm/yyyy or US date format mm/dd/yyyy.  This call does not require the use of the "new" key word to instantiate the object.  The namespace pattern is used exposing the methods required.  An exception is raised if either date parameter is not a string type with the error message of 'Parameters are not of type string'.

    Example: 
    
             UK Date Format:
             
             var firstDate = "01/01/1970";
             var secondDate = "01/01/1986";
             shado.date.setValues(firstDate, secondDate);
             
             US Date Format:
             
             var firstDate = "02/01/1970";
             var secondDate = "10/01/1986";
             shado.date.setValues(firstDate, secondDate, true);


2.  After calling the setValues method.  Developers can call other methods for Years, Months and Weeks to return the          calculated date comparisons.       

    Example: 
    
             var years = shado.date.compareYears();
             var months = shado.date.compareMonths();
             var weeks = shado.date.compareWeeks();
             
3.  For Days, Hours, Minutes and Seconds there is one boolean parameter required.  This parameter indicates to include the     last day in the calculation or not.  Therefore, true = include last day, false = exclude last day.  This is not           optional.

    Example: 
    
             var days = shado.date.compareDays(false); //exclude last day.
             var days = shado.date.compareDays(true);  //include last day.
             
4.  Included with the library is a specs folder containing a js file called ShadoSpec.js.  The development of the date        comparison calculations was Test Driven.  The Jasmine v2.0 Framework was used to unit test each method and drive out      the code design.  Link: http://jasmine.github.io/

The aim of this library is to aid JavaScript Developers in taking away the pain of date handling in JavaScript.  It is intended that future versions will be released when time is available.  All we ask is constructive feedback is provided from your experience in using this library.

Browser Support:
----------------

Shado.js has been tested on the latast versions as of time of writing with Intenet Explorer, Firefox and Chrome.
