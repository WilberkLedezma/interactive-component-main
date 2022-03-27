const cardNumbers = document.querySelector(".card-numbers");
const btnSubmit = document.getElementById("buttonSubmit");

cardNumbers.addEventListener("click", (e) => {
	if (e.target.className == "number desactive") {
		e.target.classList.remove("desactive");
		e.target.classList.add("active");
	} else if (e.target.className == "number active") {
		e.target.classList.add("desactive");
		e.target.classList.remove("active");
	}
});

function countTheNumbers() {
	const btnNumbers = document.querySelectorAll(".active");
	return btnNumbers.length;
}

btnSubmit.addEventListener("click", () => {
	const count = countTheNumbers();
	const card = document.querySelector(".card");
	card.innerHTML = `<div class="card-image">
			<img src="images/illustration-thank-you.svg" alt="Image">
		</div>
		<div class="cards-selected">
			<p>You selected ${count} out of 5</p>
		</div>
		<h3 class="card-thank-you">Thank You!</h3>
		<p class="card-content">We appreciate you taking the time to give a rating. If you ever need more support,
			don’t hesitate to get in touch!</p>`
});