import { LeapYear } from './../src/leapyear-logic.js';

describe('LeapYear', function() {
  var reusableLeapYear;

  beforeEach(function() {
    reusableLeapYear = new LeapYear(1984);
  });

  it('should test if user input is a leap-year', function() {
    expect(reusableLeapYear.isLeapYear()).toEqual(true);
  });

  it('should test if user input is not a leap-year', function() {
    var notLeapYear = new LeapYear(2019);
    expect(notLeapYear.isLeapYear()).toEqual(false);
  })
});
