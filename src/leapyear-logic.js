// business logic
export function LeapYear(inputtedYear) {
   this.year = inputtedYear;
}

LeapYear.prototype.isLeapYear = function() {
  var year = this.year;
  if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

// exports.leapYearModule = LeapYear;
