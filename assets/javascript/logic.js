$(document).ready(function () {

	var inputInfo= new Firebase("https://trainhome.firebaseio.com/");

	var trainname="";
	var destination="";
	var firstTime =0;
	var duration=0;


	$(".clickHere").on("click", function() {
		trainname= $('.addTrain').val().trim();
		destination= $('.addDestination').val().trim();
		firstTime= $('.addFirst').val().trim();
		duration= $('.addDuration').val().trim();

		console.log(trainname);
		console.log(destination);
		console.log(firstTime);
		console.log(duration);

		inputInfo.push({
			Name: trainname,
			Destination: destination,
			FirstTrainTime: firstTime,
			Duration: duration,
			dateadded: Firebase.ServerValue.TIMESTAMP,
		})
	});



});