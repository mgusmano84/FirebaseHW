$(document).ready(function () {

	//sets firebase
	var inputInfo= new Firebase("https://trainhome.firebaseio.com/");

	var trainname="";
	var destination="";
	var firstTime =0;
	var freq=0;



	//sets click function to reset vars
	$(".clickHere").on("click", function() {
		trainname= $('.addTrain').val().trim();
		destination= $('.addDestination').val().trim();
		firstTime= $('.addFirst').val().trim();
		freq= $('.addDuration').val().trim(); 

	
		//pushes to firebase
		inputInfo.push({
			Name: trainname,
			Destination: destination,
			FirstTrainTime: firstTime,
			Freq: freq,
			dateadded: Firebase.ServerValue.TIMESTAMP,
		})

		//clear input Values
		$('.addTrain').val('');
		$('.addDestination').val('');
		$('.addFirst').val('');
		$('.addDuration').val('');

		return false;
	});

	//grabs from firebase to create new divs in .createData div
	inputInfo.on("child_added", function(childSnapshot) {


		console.log(childSnapshot.val().Name);
		console.log(childSnapshot.val().Destination);
		console.log(childSnapshot.val().FirstTrainTime);
		console.log(childSnapshot.val().Freq);

		//Moments Logic

		//This make sure the time is before by going back 1 year
		var convertedTime = moment(firstTime,"hh:mm").subtract(1, "years");
		console.log(convertedTime);
		
		//Sets current time
		var currentTime = moment();
		console.log("Current Time is " + moment(currentTime).format("hh:mm"));
		
		//Takes the difference between the cuurent time and converted time
		var diffTime = moment().diff(moment(convertedTime), "minutes");
		console.log("Difference in Time is: " + diffTime);
		
		//This will set the time apart between trains
		var tRemainder = diffTime % freq; 
		console.log(tRemainder);

		//Minutes until the train
		var trainMin = freq - tRemainder;
		console.log("MINUTES TILL TRAIN: " + trainMin);

		//Next train
		var nextTrain = moment().add(trainMin, "minutes")
		console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
		var nextArrival = nextTrain.format("hh:mm");
		console.log(nextArrival);
		var minutesNext = trainMin;
		console.log(minutesNext);

		//This creates the new lines of data being pulled from firebase and moments logic
		$('.createData').append("<div class='col-md-3'>"+
			childSnapshot.val().Name+"</div><div class='col-md-3'>"+
			childSnapshot.val().Destination+"</div><div class='col-md-2'>"+
			childSnapshot.val().Freq+" </div><div class='col-md-2'>"+
			nextArrival+"</div><div class='col-md-2'>"+
			minutesNext+"</div>");
		

		//If errors arise
		}, function(errorObject){
		console.log("Errors handled: " + errorObject.code);
	});


});
