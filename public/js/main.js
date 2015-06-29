var myStudents = [
"Yara"
, "Christy"
, "Anusha"
, "Sandra"
, "Serene"
, "Jozlin"
, "Maya G"
, "Neha"
, "Hayley"
, "Anya"
, "Erika"
, "Michelle"
, "Serena"
, "Maya M"
, "Kelela"
, "Adhayana"
, "Alexis"
, "Madison"
, "Emily"
, "Jessica"
];

var studentsToPick = myStudents.slice(); //copy so we can remove

var pickStudent = function(students){
    //var randomIndex = Math.floor(Math.random() * students.length)
    //var theChosenOne = students[randomIndex]
    var theChosenOne = students.splice(0,1); //remove the first?
    var htmlString = theChosenOne + "!"
    $("#chosen-student-container").html(htmlString)
}

var pickFromMyStudents = function(){
	studentsToPick = _.shuffle(studentsToPick); //shuffle each time
    pickStudent(studentsToPick);
};

var reset = function(){
	studentsToPick = myStudents.slice();
	studentsToPick = _.shuffle(studentsToPick);
     $("#chosen-student-container").html("?");
};

reset();

                                         
$("#pick-student-button").click(pickFromMyStudents)
$("#reset-button").click(reset)
