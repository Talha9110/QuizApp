// correct answers
const correctAnswers = ["A", "B", "A", "A"];
// get form
const form = document.querySelector(".quiz-form");
// result
const result = document.querySelector(".result");
// form event
form.addEventListener("submit", (e) => {
	e.preventDefault();
	// user answers
	const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
	let score = 0;
	// check answers
	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
		// remove display none class from result
		result.classList.remove("d-none");
		// automatically scroll to top when clicked on submit button
		scrollTo(0, 0);
		// to show output in span tag
		let output = 0;
		// timer for showing result in span quickly
		const timer = setInterval(() => {
			result.querySelector("span").textContent = `${output}%`;
			if (output == score) {
				clearInterval(timer);
			} else {
				output++;
			}
		}, 10);
	});
});
