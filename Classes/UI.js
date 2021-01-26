//**************************** Gustavo Pereira  ****************************

export default class UI {
	static printCategories(categories) {
		let container = document.getElementById("categories");
		categories.forEach((category) => {
			container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
		});
	}

	static printQuestions(questions) {
		let container = document.getElementById("containerQ");
		container.innerHTML = "";
		if (questions.length == 0) {
			container.innerHTML = `<div class="alert alert-danger" role="alert">
            There are not enough questions to match your selections. Please choose different options!
			</div>`;
		} else {
			//**************************** Camila Parada  ****************************
			questions.forEach((question, index) => {
				let cAnswer = question.correct_answer;
				let iAnswers = question.incorrect_answers;
				let allAnswers = iAnswers.concat(cAnswer);
				console.log(cAnswer);
				let randomAnswers = allAnswers.sort(() => Math.random() - 0.5);
				console.log(randomAnswers);

				container.innerHTML += `<div class="col-md-4 mb-4">
                                            <div class="card h-100">
                                                <div class="card-body">
			    									${question.question}
			    									${this.printAnswers(randomAnswers, index, cAnswer)}
                                                </div>
                                                </div>
                                        </div>`;
			});
			container.innerHTML += `<div class="d-flex justify-content-center"><button class="btn btn-primary mt-3" type="submit">Submit Responses</button></div>`;
		}
	}

	static printAnswers(randomAnswers, index, cAnswer) {
		let result = "";
		randomAnswers.forEach((answer) => {
			if (answer == cAnswer) {
				result += `<div class="form-check">
                    <input class="form-check-input" type="radio" name="group${index}" id="${answer}${index}" value="correctGroup${index}" required>
                    <label class="form-check-label" for="${answer}${index}">
                        ${answer}
                    </label>
                </div>`;
			} else {
				result += `<div class="form-check">
                    <input class="form-check-input" type="radio" name="group${index}" id="${answer}${index}" value="incorrectGroup${index}" required>
                    <label class="form-check-label" for="${answer}${index}">
                        ${answer}
                    </label>
                </div>`;
			}
		});
		return result;
	}
	//**************************** Juan Sebastian Caballero ****************************
	static printScore(counter, length) {
		let container = document.getElementById("score-container");

		container.innerHTML = `<div class="card border-success mb-3 mt-4 mx-auto" style="max-width: 18rem;">
            <div class="card-body text-success text-center">
            <h5 class="card-title">Your Score: ${counter}/${length}</h5>
            <p class="card-text">Correct answers: ${counter} <br> Wrong answers: ${
			length - counter
		} <br> Total answers: ${length}</p>
            </div>
        </div>`;
	}
}
