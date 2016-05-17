$(document).ready(function () {

	var inputInfo= new Firebase("https://trainhome.firebaseio.com/");

	var trainname="";
	var destination="";
	var firstTime =0;
	var duration=0;

	// var randomTime = "23:35";
	// var convertedDate = moment(new Date(randomTime));
	// console.log(convertedDate);

	// console.log(gg);



	$(".clickHere").on("click", function() {
		trainname= $('.addTrain').val().trim();
		destination= $('.addDestination').val().trim();
		firstTime= $('.addFirst').val().trim();
		duration= $('.addDuration').val().trim();


		// console.log(trainname);
		// console.log(destination);
		// console.log(firstTime);
		// console.log(duration);

		inputInfo.push({
			Name: trainname,
			Destination: destination,
			FirstTrainTime: firstTime,
			Duration: duration,
			dateadded: Firebase.ServerValue.TIMESTAMP,
		})

		return false;
	});

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



		// $('.trainNameFill').append("<div class='well'>"+
		// 	childSnapshot.val().Name+"</div>");
		// $('.DestinationFill').append("<div class='well'>"+
		// 	childSnapshot.val().Destination+"</div>");
		// $('.FreqFill').append("<div class='well'>"+
		// 	childSnapshot.val().FirstTrainTime+"</div>");
		// $('.NextFill').append("<div class='well'>"+
		// 	childSnapshot.val().Duration+"</div>");

		


		}, function(errorObject){
		console.log("Errors handled: " + errorObject.code);
	});





});


	// <span id='email'> "+
	// 		childSnapshot.val().email+" </span><span id='age'> "+
	// 		childSnapshot.val().age+" </span><span id='comment'> "+
	// 		childSnapshot.val().comment+" </span></div>")