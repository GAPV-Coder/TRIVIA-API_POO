//**************************** Gustavo Pereira  ****************************

export default class Desing {
	static printCategories(categories) {
		const container = document.getElementById("categories");
		categories.forEach((category) => {
			container.innerHTML += `<option value="${category.id}">${category.name}</option>`;
		});
	}

	static printQuestions(questions) {
		const container = document.getElementById("containerQ");
		container.innerHTML = "";
		questions.forEach((question) => {
			container.innerHTML += `<div class="col-md-4 mb-4">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                ${question.question}
                                            </div>
                                        </div>
                                    </div>`;
		});
	}
}