var humanYearsCatYearsDogYears = function(humanYears) {

  let cat = 0
  let dog = 0
  let yearsAfterThree = humanYears - 2

  if(humanYears == 1){
    cat = 15
    dog = 15
  }else if(humanYears == 2){
    cat = 24
    dog = 24
  }else{
    cat = 24 + yearsAfterThree * 4
    dog = 24 + yearsAfterThree * 5
  }
  return [humanYears,cat,dog];
}
