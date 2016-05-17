$(document).ready(function () {

	//sets firebase
	var inputInfo= new Firebase("https://trainhome.firebaseio.com/");

	var trainname="";
	var destination="";
	var firstTime =0;
	var duration=0;

	// var check= "12:56";

	// var convertedTime = moment(check, "hh:mm");
	// console.log(convertedTime)
	// var randomTime = "23:35";
	// var convertedDate = moment(new Date(randomTime));
	// console.log(convertedDate);

	// console.log(gg);


	//sets click funtion from from to reset vars
	$(".clickHere").on("click", function() {
		trainname= $('.addTrain').val().trim();
		destination= $('.addDestination').val().trim();
		firstTime= $('.addFirst').val().trim();
		duration= $('.addDuration').val().trim();

		console.log(trainname);
		console.log(destination);
		console.log(firstTime);
		console.log(duration);

		// var convertedTime = moment(firstTime , "hh:mm");
		// console.log(convertedTime);
		// var currentTime = moment();
		// console.log("Current Time is" + moment(currentTime).format("hh:mm"));
		// var diffTime = moment().diff(moment(convertedTime), "minutes");
		// console.log("Difference in Time is: " + diffTime);
		// var tRemainder = diffTime % duration; 
		// console.log("time remaining: " + tRemainder);

		//pushes to firebase
		inputInfo.push({
			Name: trainname,
			Destination: destination,
			FirstTrainTime: firstTime,
			Duration: duration,
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
		console.log(childSnapshot.val().Duration);

		$('.createData').append("<div class='col-md-3'>"+
			childSnapshot.val().Name+"</div><div class='col-md-3'>"+
			childSnapshot.val().Destination+"</div><div class='col-md-2'>"+
			childSnapshot.val().Duration+" </div><div class='col-md-2'>"+
			childSnapshot.val().FirstTrainTime+"</div><div class='col-md-2'>"+
			"test"+"</div>");
		


		}, function(errorObject){
		console.log("Errors handled: " + errorObject.code);
	});





});
