$(document).on('click','ul li',function(){

      $(this).addClass('active').siblings().removeClass('active');

      
    });


function validation(){

	var input = document.getElementById('yourname').value;

	var yourname = document.getElementById('yourname');
	var username = document.getElementById('username');

	if (input == "") {

		username.innerHTML = "**please fill the your name";
		username.style.color = "red";
		username.style.fontSize ="16px";

		return false;
	}

	if ((input.length<=2) || (input.length>20)) {

		yourname.style.border = "1px solid red";
		yourname.className = "animated pulse infinite";
		username.innerHTML = "** username length must be between 2 and 20";
		username.style.color ="red";
		username.style.fontSize = "16px";

		return false;
	}


	if (!isNaN(input)) {


			username.innerHTML = " ** only characters are allowed";
			username.style.color = "red";
			username.style.fontSize ="16px";


			return false;
	}	

	// close yourname validation

// start email id validation

	var emailid = document.getElementById('email').value;

	var youremail = document.getElementById('email');
	var emailtext = document.getElementById('emailtext');

	if (emailid == "") {

		emailtext.innerHTML = "**please fill the your name";
		emailtext.style.color = "red";
		emailtext.style.fontSize ="16px";

		return false;
	}

	if ((emailid.length<=2) || (emailid.length>20)) {

		youremail.style.border = "1px solid red";
		youremail.className = "animated pulse infinite";
		emailtext.innerHTML = "** username length must be between 2 and 20";
		emailtext.style.color ="red";
		emailtext.style.fontSize = "16px";

		return false;
	}


	if (!isNaN(emailid)) {


			emailtext.innerHTML = " ** only characters are allowed";
			emailtext.style.color = "red";
			emailtext.style.fontSize ="16px";


			return false;
	}	

	// close email id validation


// start subject validation
	var subject = document.getElementById('subject').value;

	var yoursubject = document.getElementById('subject');

	var subjecttext = document.getElementById('subjecttext');


		if (subject == "") {

			subjecttext.innerHTML = " ** please fill the subject";
			subjecttext.style.fontSize = "16px";
			subjecttext.style.color = "red";

			return false;
		}

		if ((subject.length <=2) || (subject.length>20)) {


				subjecttext.innerHTML = "** please subject length must be between 2 and 20";
				subjecttext.style.color ="red";
				subjecttext.style.fontSize = "16px";
				yoursubject.className ="animated  pulse infinite";
				yoursubject.style.border = "1px solid red";

				return false;
		}

		if (!isNaN(subject)) {

			subjecttext.innerHTML = "** only characters are allowed";
			subjecttext.style.border = "1px soid red";
			subjecttext.style.fontSize = "16px";

			return false;
		}


// close subject validation


// start message validation

	var message = document.getElementById('message').value;
	var yourmessage = document.getElementById('message');
	var messagetext = document.getElementById('messagetext');


	if (message == "") {

		messagetext.innerHTML = "** please fill the message";
		messagetext.style.color ="red";
		messagetext.style.fontSize = "16px";

		return false;
	}


	if ((message.length<=20) || (message.length>50)){


			yourmessage.style.border = "1px solid red";
			yourmessage.className = "animated pulse infinite";
			messagetext.innerHTML = "** message length must be between 20 and 50";
			messagetext.style.color ="red";
			messagetext.style.fontSize ="16px";

			return false;
	}


//close message validation


}




// below onclick function coding 


// start yourname validation

  var yourname = document.getElementById('yourname');

	yourname.onclick = function(){

		yourname.className = "animated none";
		yourname.style.border = "2px solid orange";
		yourname.style.width = "100%";
	}

	// close yourname validation

// start emailid validation 


	var youremail = document.getElementById('email');

	youremail.onclick = function(){

		youremail.style.width = "100%";
		youremail.className = "animated none";
		youremail.style.border = "2px solid orange";
	}

// close emailid validation


// start subject validation


var yoursubject = document.getElementById('subject');

yoursubject.onclick = function(){

	yoursubject.style.width = "100%";
	yoursubject.className = "animated name";
	yoursubject.style.border = "2px solid orange";
}

// close subject validation


// start message validation


	var yourmessage = document.getElementById('message');

	yourmessage.onclick = function(){

		yourmessage.style.width = "100%";
		yourmessage.className = "animated name";
		yourmessage.style.border = "2px solid orange"; 
	}


// close message validation