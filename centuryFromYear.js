// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples :
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
//89 ---> 1
//324 ---> 4

function century(year) {
    let centuryCount = 0;
    while (year > 0){
      year = year - 100;
      centuryCount = centuryCount + 1;
    }
    return centuryCount;
  }