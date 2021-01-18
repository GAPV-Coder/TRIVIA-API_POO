//**************************** Gustavo Pereira  ****************************

export default class UI {
	static printCategories(categories) {
		const container = document.getElementById("categories");
		categories.forEach((category) => {
			container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
		});
	}

	static printQuestions(questions) {
		const container = document.getElementById("containerQ");
		container.innerHTML = "";
		//**************************** Camila valderrama  ****************************
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
}
