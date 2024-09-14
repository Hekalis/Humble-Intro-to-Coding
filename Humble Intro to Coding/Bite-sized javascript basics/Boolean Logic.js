let distance = 250;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineFunctioning = true;

// FIRST Evaluation
if(!isEngineFunctioning || distance > 200 ) {
  console.log('wont make it');
}

// SECOND Evaluation (check if FIRST is false)
else if(distanceCondition && fuel >= 100) {
  console.log('you will make it');
}

// THIRD Evaluation (check if FIRST and SECOND false)
else if(distance < 100 && fuel >= 25) {
    console.log('you will make it');
}