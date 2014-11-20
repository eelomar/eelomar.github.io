//var email="eloy@email.com"
//var newemail=email.replace("email","gmail");

//console.log(email);
//console.log(newemail);

//var awesomeThoughts="I am Eloy and I am AWESOME!"
//var funThoughts=awesomeThoughts.replace("AWESOME","FUN")


//$("#main").append(funThoughts);



//var skills=["awesome","programming","Engineer"]

//$("#main").append(skills[2]);

//var bio = {
//	"name":"Eloy",
//	"age":25,
//	"skills":skills[2],
//	"welcome mesage": awesomeThoughts,
//	"picture":"images/yegua.jpg"
//};

//$("#main").append(bio);

//var work ={};
//work.position="Master of universe";

//var educa={};
//educa["name"]="AIT";

//$("#main").append(work["position"]);
//$("#main").append(educa.name);
var work={
	"jobs":[
	{
		"employeer":"Ericsson",
		"title":"Trainer Engineer",
		"location":"Athlone",
		"dates":"September 2013 - May 2015",
		"description":"Develop some research in telecommunications for Ericsson "
	},
	{
		"employeer":"Inescop",
		"title":"Practics Engineer",
		"location":"Elda",
		"dates":"July 2011 - July 2011",
		"description":"Work with a robotic arm and its sensors"
	},
	{
		"employeer":"Escarche",
		"title":"Helping boy",
		"location":"Elda",
		"dates":"Summers from 2007 to 2010",
		"description":"Help to instal and repare A.A. and super friges"
	}
	]
};
var projects={
	"projects":[
	{
		"title":"Map Reduce",
		"dates":"September 2013 - January 2014",
		"images":["images/hadoopCluster.jpg","images/structure.jpg","images/performance.jpg"],
		"description":"Work with Map/reduce parallel programing mode and its issues with telecommunication´s data"
	},
	{
		"title":"Outlier detection",
		"dates":"February 2014 - February 2015",
		"images":["images/approach.jpg","images/framework.jpg","images/bigdata.jpg"],
		"description":"Develop an user interface to show the users abnormals terms from different data sources indexed in Solr"
	}]
};
var bio={
	"name":"Eloy Martinez Colomina",
	"role":"Industrial Engineer",
	"image":"images/fry.jpg",
	"contacts":{
		"mobile":"003530851562822",
		"email":"emartinez@research.ait.ie",
		"github":"eelomar",
		"location":"Athlone, Ireland"
	},
	"skills":["Big Data","Data Mining","Java","Front-End Developer"],
	"welcomeMessage":"Hello everyone, I hope you enjoy my page"
};
var educational={
	"schools":[
	{
		"name":"Univerty polytechnic of Valencia ",
		"location":"Valencia, Spain",
		"degree":"Insdustrial Engineer",
		"majors":["Electronics","Automatization","General industry"],
		"dates":"September 2007 - June 2012",
		"url":"http://www.upv.es"
	},
	{
		"name":"Athlone Institute of Technology ",
		"location":"Athlone, Ireland",
		"degree":"Bachelor Software Engineer",
		"majors":["Java","Server Side"],
		"dates":"September 2012 - June 2013",
		"url":"http://www.ait.ie"

	},
	{
		"name":"IES La Torreta",
		"location":"Elda, Spain",
		"degree":"High school diploma",
		"majors":["Technology"],
		"dates":"September 2001 - June 2007",
		"url":"http://ies-latorreta.es/portal/"

	}
	],
	"onlineCourses":[{
		"title":"Front-End Web Developer",
		"school":"Udacity",
		"dates":"November 2014 - OnLine",
		"url":"https://www.udacity.com/"
	},{
		"title":"Advance Java",
		"school":"Coursera",
		"dates":"September 2014 - December 2014",
		"url":"https://www.coursera.org/"
	}]
};
//my header
var formattedName=HTMLheaderName.replace("%data%", "Eloy Martinez")
var formattedRole=HTMLheaderRole.replace("%data%", "Master Engineer")

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formatedHTMLbioPic=HTMLbioPic.replace("%data%",bio.image);
var formatedHTMLWelcomeMsg=HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formatedHTMLbioPic);
$("#header").append(formatedHTMLWelcomeMsg);


var formatedHTMLmobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
var formatedHTMLemail=HTMLemail.replace("%data%",bio.contacts.email);
var formatedHTMLgithub=HTMLgithub.replace("%data%",bio.contacts.github);
var formatedHTMLlocation=HTMLlocation.replace("%data%",bio.contacts.location);
$("#topContacts").append(formatedHTMLmobile);
$("#topContacts").append(formatedHTMLemail);
$("#topContacts").append(formatedHTMLgithub);
$("#topContacts").append(formatedHTMLlocation);

//lesson2
displayWork();
function displayWork(){

if(bio["skills"].length!==0){
console.log("Pass if bio");
$("#header").append(HTMLskillsStart);
// si descomentas estos todos en una linea con comas
	var formatedSkill = HTMLskills.replace("%data%",bio["skills"]);
	console.log(formatedSkill);
	$("#skills").append(formatedSkill);

	//var formatedSkill = HTMLskills.replace("%data%",bio["skills"][0]);
	//console.log(formatedSkill);
	//$("#skills").append(formatedSkill);

//	formatedSkill = HTMLskills.replace("%data%",bio["skills"][1]);
//	console.log(formatedSkill);
//	$("#skills").append(formatedSkill);
//	formatedSkill = HTMLskills.replace("%data%",bio["skills"][2]);
//	console.log(formatedSkill);
//	$("#skills").append(formatedSkill);
//	formatedSkill = HTMLskills.replace("%data%",bio["skills"][3]);
//	console.log(formatedSkill);
//	$("#skills").append(formatedSkill);
}

if(work.jobs.length>0){
	console.log("Pass if work jobs");
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		var formatedHTMLworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employeer);
		var formatedHTMLworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedBoth=formatedHTMLworkEmployer+formatedHTMLworkTitle;
		$(".work-entry:last").append(formattedBoth);

		var formatedHTMLworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formatedHTMLworkDates);

		var formatedHTMLworkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formatedHTMLworkLocation);

		var formatedHTMLworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formatedHTMLworkDescription);

	}
}

}
//display click on screen


$(document).click(function(loc){
	logClicks(loc.pageX,loc.pageY);
});

function locationizer(work_obj){
	var locations=[];
	if( work_obj.jobs.length>0){
		for(var job in work_obj.jobs){
			locations.push(work_obj.jobs[job].location);
		}
	}
	return locations;

}
console.log(locationizer(work));

//internationalizeButton

function inName(string2Names){
	var finalName = string2Names;
	var name=finalName.split(" ");

	name[0]=name[0][0].toUpperCase()+name[0].slice(1).toLowerCase();
	name[1]=name[1].toUpperCase();

	finalName=name[0] +" "+ name[1];


    // Don't delete this line!
    return finalName;
}
//$("#main").append(internationalizeButton);
//add fucntion to object
projects.display=function() {
	if(projects.projects.length>0){
		console.log("Pass if at least one project");
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formatedHTMLprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			$(".project-entry:last").append(formatedHTMLprojectTitle);

			var formatedHTMLprojectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			$(".project-entry:last").append(formatedHTMLprojectDates);

			var formatedHTMLprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formatedHTMLprojectDescription);
			if(projects.projects[project].images.length>0){

			for (image in projects.projects[project].images){
				var formatedHTMLprojectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(formatedHTMLprojectImage);}


			}}
		}

	}

projects.display();
//append maps..moreover uncomment scrip in header and fucntion in helper.js
$("#mapDiv").append(googleMap);