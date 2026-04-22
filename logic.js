function goToResult() {
    // get values
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;

    // convert age to number
    age = Number(age);

    // validation
    if (name === "" || age === "") {
        alert("Fill all details first 😄");
        return;
    }

    if (age < 0) {
        showMessage("Planning to be born soon? 👀");
        return;
    }

    if (age > 120) {
        showMessage("Are you immortal? 😳");
        return;
    }

    let message = "";

     if (age < 18) {
        message = `${name}, easy… you’ve got time, just enjoy life and complete your homework on time😌`;
    } 
    else if (age >= 18 && age <= 30) {
        message = `${name}, you're in your prime… chill  bro and build your vibe don't worry about your looks 😎`;
    } 
    else if (age > 30 && age <= 50) {
        message = `${name}, you’re slowly becoming a certified old person now 😏`;
    } 
    else {
        message = `${name}, legend zone unlocked… respect the journey and start praying to god soon the time will come 🙌`;
    }

    showMessage(message);
}

// function to display result
function showMessage(msg) {
    let resultBox = document.getElementById("result");

    // if result div not present, create it
    if (!resultBox) {
        resultBox = document.createElement("p");
        resultBox.id = "result";
        document.body.appendChild(resultBox);
    }

    resultBox.innerText = msg;
}
function showMessage(msg) {
    let resultBox = document.getElementById("result");
    resultBox.innerText = msg;
}