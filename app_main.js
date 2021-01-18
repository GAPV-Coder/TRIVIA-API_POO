//**************************** Gustavo Pereira  ****************************

import Request from "./Classes/Request.js";
import UI from "./Classes/UI.js";

const questionsForm = document.querySelector("#form-triviaOOP");

questionsForm.addEventListener("submit", (event) => {
	event.preventDefault();
	Request.getQuestions()
		.then((response) => response.json())
		.then((data) => UI.printQuestions(data.results));
});

Request.getCategories()
	.then((response) => response.json())
	.then((data) => UI.printCategories(data.trivia_categories));
