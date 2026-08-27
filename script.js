const counterElement = document.getElementById("views");

let count = 248102; 

function updateCounter() {
    const randomIncrement = Math.floor(Math.random() * 7) + 1;
    count += randomIncrement;

    counterElement.textContent = count.toLocaleString();

    const randomDelay = 1;
    setTimeout(updateCounter, randomDelay);
}

updateCounter();