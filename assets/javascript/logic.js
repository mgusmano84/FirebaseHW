$(document).ready(function () {

	var inputInfo= new Firebase("https://trainhome.firebaseio.com/");

	var trainname="";
	var destination="";
	var firstTime =0;
	var duration=0;


	$(".clickHere").on("click", function() {
		trainname= $('.addTrain').val().trim();
		trainname= $('.addDestination').val().trim();
		trainname= $('.addFirst').val().trim();
		trainname= $('.addDuration').val().trim();




});