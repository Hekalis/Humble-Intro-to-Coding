// declare sendSignal Function
function sendSignal(){
    // print HELP! to the console
      console.log('HELP!');
  }
  // initialize loop condition variable
  let i = 0;
  /* check if we have run loop 1000 times */
  while(i < 1000){
    // call sendSignal() Function on each iteration
      sendSignal();
    // increment loop condition variable on each iteration
      //i = i + 1; (add 1 to i variable)
      //i += 1; (equivalent to above)
      i++; // (equivalent to above)
  }