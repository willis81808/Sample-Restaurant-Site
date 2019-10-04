var names = ["El Cajon","The Spruce","Cafe Balthazar","Restaurant Chicharito","Bouley and Sons","Le Bernardin Italian Kitchen","Marchetti","Bar Boulud","Vinagre","Cabrini-Green","The Bouchon","Giraffa","Gouffiras de Paz","Monteverde","Cafe Rosa","Marchetti's","Zabar's","La Tartelette",`Cafe Verdeña`,"The Gioppina"]

window.onload = function() {
	// select a random restaurant name on page load
	let title = document.getElementById("header-text")
	let titleText = names[Math.floor(Math.random()*names.length)]
	title.textContent = titleText
}