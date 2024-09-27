
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// cars.map((car) => {
//         const isPositive = getRandomInt(0, 1) === 1;
//         const timeAt = new Date();
//         const mutator = getRandomInt(1000000, 100000000);
//         const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator));

//         car.available = availableAt;
// });

// console.log(cars);

const buttonToCars = document.querySelectorAll(".button-general");

for (let i = 0; i < buttonToCars.length; i++) {
buttonToCars[i].href = "http://localhost:8000/cars.html";
}

// cars.map((car) => {
//     const card = document.getElementById('cars-container');

//     card.innerHTML += `
//     <p>id: <b>${car.id}</b></p>
//     <p>plate: <b>${car.plate}</b></p>
//     <p>manufacture: <b>${car.manufacture}</b></p>
//     <p>model: <b>${car.model}</b></p>
//     <p>available at: <b>${car.availableAt}</b></p>
//     <img src=${car.image} alt=${car.manufacture} width="64px">
//     `;
// });

const driverPlaceholder = document.getElementById('driverPlaceholder');
driverPlaceholder.style.display = "none";

// const timePlaceholder = document.querySelector('#time option[selected]');
// timePlaceholder.style.display = "none";

// const penumpangPlaceholder = document.querySelector('#penumpang option[selected]');
// penumpangPlaceholder.style.display = "none";