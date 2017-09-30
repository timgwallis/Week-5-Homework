$(document).ready(function() {
    // console.log( "ready!" );

    // track which question we are on
    var questionCounter = 0;
    // initial time of 15 seconds for each question
    var time = 15;
    // will keep tally of right guesses for end game
    var correctGuesses = 0;
    //will keep tally of wrong guesses for end game
    var incorrectGuesses = 0;

    // question & answer array
    var questions = [
      {
        question: "What kind of software development projects can be executed by Scrum Project Management Framework?",
 	    choices: ["Complete software packages", "Cusotmer projects", "Sub-systems, components or parts of bigger systems", "All kinds of software development projects"],
 	    correctAnswer: "All kinds of software development projects",
 	    image: ""
 	  },
 	  {
 	    question: "What does NOT belong to cornerstones of the agile manifesto?",
 	    choices: ["Individuals and interactions over process and tools", "Working software over comprehensive documentation", "Processes over people", "Customer collaboration over contract negotiation"],
 	    correctAnswer: "Processes over people",
	    image: ""
	  },
	  {
	    question: "Where are the customer requirements stored?",
	    choices: ["In the Product Backlog", "In the Sprint Backlog", "In a database", "In a Scrum Product Requirement Specification"],
	    correctAnswer: "In the Product Backlog",
	    image: ""
	  },
	  {
	    question: "Which concept is NOT defined in the Scrum Framework?",
	    choices: ["Scrum Master", "Project Manager", "Scrum Product Owner", "Daily Scrum"],
	    correctAnswer: "Project Manager",
	    image: ""
	  },
	  {
	    question: "What are the advantages of the Scrum Framework?",
	    choices: ["Fine-grained requirements are only defined when they are really needed.", "All activities to design, build and test a certain functionality are kept together in one phase.", "Changes are expected and welcomed by Scrum team.", "All of the given answers"],
	    correctAnswer: "All of the given answers",
	    image: ""
	  },
	  {
	    question: "Which of these is not one of the constraints of a project?",
	    choices: ["Scope", "Resources", "Team", "Budget"],
	    correctAnswer: "Team",
	    image: ""
	  },
	  {
	    question: "Which of the following is not correct about initial phase of a project?",
	    choices: ["The cost associated at the beginning of the project is highest.", "Stakeholders have maximum influence during this phase", "The highest uncertainty is at this stage of the project.", "All the above statements are correct."],
	    correctAnswer: "The cost associated at the beginning of the project is highest.",
	    image: ""
	  },
	  {
	    question: "The project you are managing has nine stakeholders. How many channel of communications are there between these stakeholders?",
	    choices: ["9", "8", "45", "36"],
	    correctAnswer: "36",
	    image: ""
	  },
	  {
	    question: "Which of the following is not an example of formal communication?",
	    choices: ["Contract", "email", "Project status report", "Status meeting"],
	    correctAnswer: "email",
	    image: ""
	  },
	  {
	    question: "A Project with a total funding of $100,000 finished with a BAC value of $95,000. What term can BEST describe the difference of $5,000?",
	    choices: ["Cost Variance", "Management Overhead", "Management Contingency Reserve", "Schedule Variance"],
	    correctAnswer: "Management Contingency Reserve",
	    image: ""
	  },
	  {
	    question: "If the Earned Value is equal to Actual Cost, it means:",
	    choices: ["Project is on budget and on schedule", "Schedule Variance Index is 1", "There is no schedule variance", "There is no cost variance"],
	    correctAnswer: "There is no cost variance",
	    image: ""
	  },
	  {
	    question: "Which of the following is the most important element of Project Management Plan that is useful in HR Planning process:",
	    choices: ["Risk Management activities", "Quality Assurance activities", "Activity Resource requirements", "Budget Control activities"],
	    correctAnswer: "Activity Resource requirements",
	    image: ""
	  },
	  {
	    question: "Which of the following types of Organizational Charts can be BESTused to track project costs :",
	    choices: ["BHierarchical-type Organizational Chart", "Organizational Breakdown Structure", "Resource Breakdown Structure", "Responsibility Assignment Matrix"],
	    correctAnswer: "Resource Breakdown Structure",
	    image: ""
	  },
	  {
	    question: "A planning phase for an engineering component generated 80 engineering drawings. The QA team randomly selected 8 drawings for inspection. This exercise can BEST be described as example of:",
	    choices: ["Inspection", "Statistical Sampling", "Flowcharting", "Control Charting"],
	    correctAnswer: "Statistical Sampling",
	    image: ""
	  },
	  {
	    question: "During which stage of Risk planning are risks prioritized based on probability and impact?",
	    choices: ["Identify Risks", "Plan Risk responses", "Perform Qualitative risk analysis", "Perform Quantitative risk analysis"],
	    correctAnswer: "Perform Qualitative risk analysis",
	    image: ""
	  }];


	// create question contents according to question count
	function questionContent() {
		// a for loop would be cool here...
    	$("#gameScreen").append("<p><strong>" +
    		questions[questionCounter].question +
    		"</p><p class='choices'>" +
    		questions[questionCounter].choices[0] +
    		"</p><p class='choices'>" +
    		questions[questionCounter].choices[1] +
    		"</p><p class='choices'>" +
    		questions[questionCounter].choices[2] +
    		"</p><p class='choices'>" +
    		questions[questionCounter].choices[3] +
    		"</strong></p>");
	}

	// user guessed correctly
	function userWin() {
		$("#gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" +
			correctAnswer +
			"</span></p>" +
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user guessed incorrectly
	function userLoss() {
		$("#gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$("#gameScreen").append("<p>The answer was <span class='answer'>" +
			correctAnswer +
			"</span></p>" +
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user ran out of time
	function userTimeout() {
		if (time === 0) {
			$("#gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$("#gameScreen").append("<p>The answer was <span class='answer'>" +
				correctAnswer +
				"</span></p>" +
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message :)
	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "Perfection! ";
			var bottomText = "#nerdalert!";
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Good work! ";
			var bottomText = "You can do better though...";
		}
		else {
			var endMessage = "Maybe you'll do better next time. ";
			var bottomText = "#scrub";
		}
		$("#gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" +
			correctGuesses + "</strong> right.</p>" +
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$("#gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$("#start").click(nextQuestion);
	}

	// game clock currently set to 20 seconds
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 20;
			$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			userTimeout();
		}
		else {
			resultsScreen();
		}
	// console.log(questionCounter);
	// console.log(questions[questionCounter].correctAnswer);
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$("#gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
    	$("#start").hide();
    	// $("#gameScreen").append("<div id='question'>");
    	// var nextQuestion = questionContent(questionCounter);
    	// $("#gameScreen").append(nextQuestion);

		// $("#gameScreen").append("<p>" + questions[questionCounter].question + "</p><p>" + questions[questionCounter].choices[0] + "</p><p>" + questions[questionCounter].choices[1] + "</p><p>" + questions[questionCounter].choices[2] + "</p><p>" + questions[questionCounter].choices[3] + "</p>");
		// questionCounter++;
		questionContent();
    	timer();
    	userTimeout();
    }

    // this starts the game
    $("#start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$("#gameScreen").on("click", ".choices", (function() {
		// alert("clicked!");
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			userWin();
		}
		else {
			clearInterval(clock);
			userLoss();
		}
	}));
});
