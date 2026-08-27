const counterElement = document.getElementById("views");

let count = 248102; 

function updateCounter() {
    count++;

    counterElement.textContent = count.toLocaleString();

    setTimeout(updateCounter, 1);
}

updateCounter();