shado.js
========

This is a JavaScript library for precise date comparison calculations between two dates for Years, Months, Days, Weeks, Hours, Minutes and Seconds.

Instructions on how to use:
---------------------------

1.  The library exposes a method called DateCompare.  The method takes two parameters for first date and second date.         Both should be strings in the UK date format of dd/mm/yyyy.  This call does not require the use of the "new" key word     to instantiate the object.  The namespace pattern is used exposing the methods required.

    Example: var firstDate = "01/01/1970";
             var secondDate = "01/01/1986";
             Shado.Date.Compare(firstDate, secondDate);  


2.  After calling the DateCompare method.  Developers can call other methods for Years, Months and Weeks to return the        calculated date comparisons.       

    Example: var years = Shado.Date.Years();
             var months = Shado.Date.Months();
             var weeks = Shado.Date.Weeks();
             
3.  For Days, Hours, Minutes and Seconds there is one boolean parameter required.  This parameter indicates to include the     last day in the calculation or not.  Therefore, true = include last day, false = exclude last day.  This is not           optional.

    Example: var days = Shado.Date.Days(false); //exclude last day.
             var days = Shado.Date.Days(true);  //include last day.
             
4.  Included with the library is a specs folder containing js a file called DateComparisonSpec.js.  The development of        the date comparison calculations was Test Driven.  The Jasmine v2.0 Framework was used to unit test each method and       drive out the code design.  Link: http://jasmine.github.io/

The aim of this library is to aid JavaScript Developers in taking away the pain of date handling in JavaScript.  It is intended that future versions will be released when time is available.  All we ask is constructive feedback is provided from your experience in using this library.

Browser Support:
----------------

Shado.js has been tested on the latast versions as of time of writing with Intenet Explorer, Firefox and Chrome.
