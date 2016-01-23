for (var i = 0; i < 21; i++) {
  if (i%2===0) {
    console.log(i + " " + 'is even');
} else {
    console.log(i + " " + 'is odd')
  }
}

var i = 0

while (i < 21) {
  if(i%2===0){
    console.log(i+ " is even");
  } else {
    console.log(i + " is odd");
  }
  i++;
}


function max(num1, num2) {
 if (num1 > num2) {return(num1)
 }
 else {
   return(num2)
 }
}

max(1,2);


function maxOfThree(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

maxOfThree (4,5,6);
