// fizz buzz exercise
/*
each 3 multiplier says fizz 
each 5 multiplier says buzz
each both multipler say  fizz buzz
 */
/* 
for each 3 multiplier, say
 */


for (let i = 1; i < 100; i++) {
  console.log(i);
  if (i%3 === 0 && i%5 === 0) {
    console.log("fizz buzz");
  }
  else if (i%3 === 0){
    console.log("fizz");
  }
  else if (i%5 === 0){ 
    console.log("buzz");
  }
}