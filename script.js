const viewElement = document.getElementById("views");

let count = 248102; 

function updateViews() {
    count++;

    viewElement.textContent = count.toLocaleString();

    setTimeout(updateViews, 1);
}

updateViews();