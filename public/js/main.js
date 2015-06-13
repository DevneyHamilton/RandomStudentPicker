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

var pickStudent = function(students){
    //var randomIndex = Math.floor(Math.random() * students.length)
    //var theChosenOne = students[randomIndex]
    var theChosenOne = _.sample(students);
    var htmlString = theChosenOne + "!"
    $("#chosen-student-container").html(htmlString)
}

var pickFromMyStudents = function(){
    pickStudent(myStudents);
};

var reset = function(){
	myStudents = _.shuffle(myStudents);
     $("#chosen-student-container").html("?");
};


                                         
$("#pick-student-button").click(pickFromMyStudents)
$("#reset-button").click(reset)
