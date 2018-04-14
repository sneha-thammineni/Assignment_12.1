function counterReducer(actionType, counter) {
	var initialCounter = counter;
    if (actionType === "INC") {
        counter++;
        console.log("Given Counter value is "+initialCounter+". Its Incremented by 1. The result is "+counter);
    }
    if (actionType === "DEC") {
        counter--;
        console.log("Given Counter value is "+initialCounter+". Its Decremented by 1. The result is "+counter);
    }
}

counterReducer("INC", 2);
counterReducer("DEC", 10);


