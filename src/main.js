// var LeapYear = require('./../src/leapyear-logic.js').leapYearModule;
import './../src/styles.css';
import $ from 'jquery';
import 'bootstrap';
import { LeapYear } from './../src/leapyear-logic.js';

$().ready(function() {
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var leapYear = new LeapYear(year);
    var result = leapYear.isLeapYear();

    $(".year").text(year);
    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }
    $("#result").show();
  });
});
