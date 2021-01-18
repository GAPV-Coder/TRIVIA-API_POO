//**************************** Gustavo Pereira  ****************************

export default class Request {
	static getCategories() {
		return fetch("https://opentdb.com/api_category.php");
	}

	static getQuestions() {
		const [amount, category] = this.getFilters();
		return fetch(
			`https://opentdb.com/api.php?amount=${amount}&category=${category}`
		);
	}

	static getFilters() {
		const totalQuestions = document.getElementById("questions").value;
		const category = document.getElementById("categories").value;
		return [totalQuestions, category];
	}
}
