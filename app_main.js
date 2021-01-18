//**************************** Gustavo Pereira  ****************************

import Request from "./Classes/Request.js";
import Desing from "./Classes/Desing.js";

const questionsForm = document.querySelector("#form-triviaOOP");

questionsForm.addEventListener("submit", (event) => {
	event.preventDefault();
	Request.getQuestions()
		.then((response) => response.json())
		.then((data) => Desing.printQuestions(data.results));
});

Request.getCategories()
	.then((response) => response.json())
	.then((data) => Desing.printCategories(data.trivia_categories));
