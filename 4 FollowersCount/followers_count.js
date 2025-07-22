let count = 0;


function increaseCount() {
    count++;
    displayCount();
    setTimeout(checkCountValue, 0);

    if (count > 0){
        document.getElementById("resetBtn").disabled = false;
    }
}

function resetCount() {
    count = 0;
    alert("The followers count has been reset.");
    displayCount()
    document.getElementById("resetBtn").disabled = true;
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function checkCountValue() {
    let message = `Your Instagram post gained ${count} followers! `;

    if (count === 10) {
        message += "😁Congratulations!";
        alert(message);
    } else if (count === 20) {
        message += "👏🏽Keep it up!";
        alert(message);
    } else if (count % 10 === 0 && count > 20) {
        message += "😲Great job!😲";
        alert(message);
    }
}