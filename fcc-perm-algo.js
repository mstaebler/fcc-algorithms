function permAlone(str) {
  //define a factorial funciton
  var factorial = function factorial(num){
    if (num < 0) {
        return -1;
    }
    else if (num === 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
  };
  //if the string is all the same character return 0
  if(/^(.)\1+$/.test(str)){
    return 0;
  }
  //calculate unique characters in the string
  var unique='';
    for(var i=0; i<str.length; i++){
        if(str.lastIndexOf(str[i]) == str.indexOf(str[i])){
            unique += str[i];
        }
    }
  //factorial of all possible combinations
  var totalPerm = factorial(str.length);

  //calculate the number of duplicated characters
  var dupChars=(str.length-unique.length)/2;
  //calculate the number of invalid permutations
  var invalidPerm = 0;
  for(var j = 0;j<dupChars;j++){
    invalidPerm = invalidPerm + (factorial(str.length-1)*2);
  }
  //calculate the number of overlaps
  var overlapPerm = 0;
  if(dupChars > 1){
  overlapPerm = (2*dupChars)*(factorial(str.length-dupChars));
  }else{
  overlapPerm = 0;
  }
  return totalPerm-invalidPerm+overlapPerm;
}

permAlone('aabb');
