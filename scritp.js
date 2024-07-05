// REAL TIME__________________________________________________________

function clock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour > 12) {
        hour = hour - 12;
    }
    let hours = document.getElementById("hrs");
    hours.innerText = hour;
    let minutes = document.getElementById("mins");
    minutes.innerText = minute;
    let seconds = document.getElementById("secs");
    seconds.innerText = second;
}
setInterval(() => {
    clock();
}, 1000);



// AM PM ___________________________________________________

let date = new Date();
let hour = date.getHours();
if (hour >= 12) {
    document.getElementById("ampm").innerText = "PM";
}
else {
    document.getElementById("ampm").innerText = "AM";
};

// BUTTON_____________________________________________________________________________

let button = document.getElementById("button");
button.addEventListener("mouseover", function () {
    this.innerText = "Party Time";
})
button.addEventListener("mouseout", function () {
    this.innerText = "Set Alarm";
})


// GOOD AFTERNOON EVENING NIGHT ___________________________________________________________________

let greeting = document.getElementById("greeting");
if (hour >= 12 && hour < 16) {
    greeting.innerHTML = "Good Afternoon";
}
else if (hour >= 16 && hour <= 20) {
    greeting.innerHTML = "Good Evening";
}
else if (hour >= 20 && hour <= 24) {
    greeting.textContent = "Good Night";
}


// MESSAGE  TEA LUNCH SLEEP__________________________________________________________________________________________________


button.addEventListener("click", function () {
    let date = new Date();
    let hour = date.getHours();

    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");

    if (parseInt(wakeUp.value) === hour) {
        document.getElementById("settime").innerHTML = "Grab some Breakfast!";
     } else if (parseInt(lunch.value) === hour) {
        document.getElementById("settime").innerHTML = "Let's have some Lunch!";
     } else if (parseInt(nap.value) === hour) {
        document.getElementById("settime").innerHTML = "Get some Tea!";
    } else if (parseInt(night.value) === hour) {
        document.getElementById("settime").innerHTML = "Go to Sleep";

    }
})


// PHOTO LUNCH TEA NIGHT______________________________________________________________________________________________________________________________________

button.addEventListener("click", function () {
    let date = new Date();
    let hour = date.getHours();

    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");

    if (parseInt(wakeUp.value) === hour) {
        document.getElementById("clockimage").src = "photos/Component 30 – 1.svg";
    } else if (parseInt(lunch.value) === hour) {
        document.getElementById("clockimage").src = "photos/Component 31 GÇô 1.jpg";
    } else if (parseInt(nap.value) === hour) {
       document.getElementById("clockimage").src = "photos/lunch_image.jpg";
    } else if (parseInt(night.value) === hour) {
       document.getElementById("clockimage").src = "photos/goodnight_image.svg";
    }
})




// WAKE UP LUNCH NAP NIGHT TIME _____________________________________________________________________________________________________________________


button.addEventListener("click", function () {
    let date = new Date();
    let hour = date.getHours();

    let wakeUp = document.getElementById("wakeUp");
    let lunch = document.getElementById("lunch");
    let nap = document.getElementById("nap");
    let night = document.getElementById("night");



    let timing = document.getElementsByClassName("timing");
    timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
    timing[1].innerText = lunch.options[lunch.selectedIndex].text;
    timing[2].innerText = nap.options[nap.selectedIndex].text;
    timing[3].innerText = night.options[night.selectedIndex].text;
});

