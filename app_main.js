//**************************** Gustavo Pereira  ****************************

import Request from "./Classes/Request.js";
import UI from "./Classes/UI.js";
import Result from "./Classes/Results.js";

const questionsForm = document.querySelector("#form-triviaOOP");

questionsForm.addEventListener("submit", (event) => {
	event.preventDefault();
	Request.getQuestions()
		.then((response) => response.json())
		.then((data) => UI.printQuestions(data.results));

	let score = document.getElementById("score-container");
	score.innerHTML = "";
});

Request.getCategories()
	.then((response) => response.json())
	.then((data) => UI.printCategories(data.trivia_categories));

const choice = document.querySelector("#containerQ");
choice.addEventListener("submit", (event) => {
	event.preventDefault();
	let [counter, length] = Result.getAnswers();
	UI.printScore(counter, length);
});
