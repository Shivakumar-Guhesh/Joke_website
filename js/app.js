const jokeBox = document.querySelector('#joke-box');
const getJokeBtn = document.querySelector('#get-joke-btn');
const main = document.getElementsByClassName('main-container')[0];
const time = document.querySelector('#time');

setInterval(() =>{
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes(); 
	let seconds = date.getSeconds();
	time.innerText=hours+':'+minutes+':'+seconds;
},1000 )

var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
var currentIndex = 0;
setInterval(function () {
	main.style.backgroundColor= colors[currentIndex];
	if (!colors[currentIndex]) {
		currentIndex = 0;
	} else {
		currentIndex++;
	}
}, 750);

// const changeBgColor = (color, delay) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			main.style.backgroundColor = color;
// 			resolve();
// 		},delay);
// 	});
// };

// 	changeBgColor('red', 1000)
// 	.then(() => changeBgColor('orange', 1000))
// 	.then(() => changeBgColor('yellow', 1000))
// 	.then(() => changeBgColor('green',1000))
// 	.then(() => changeBgColor('blue',1000))
// 	.then(() => changeBgColor('indigo',1000))
// 	.then(() => changeBgColor('violet',1000))



let getDadJoke = async () => {
	const header = { headers: { Accept: 'application/json' } }
	const res = await axios.get("https://icanhazdadjoke.com/", header);
	console.log(res.data.joke);
	jokeBox.innerText = res.data.joke;
}
getJokeBtn.addEventListener('click', getDadJoke);

