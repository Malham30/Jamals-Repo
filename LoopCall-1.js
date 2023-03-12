function simpleCount() {
    var currTime = 10;
    /*  for (initial condition, ending condition - stop when not true, what to
after each loop) i++ same as  i = i+1*/
    for (var x = 1; x < 12; x++) {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "Time until blastoff is " + currTime + " seconds!";
            currTime = currTime - 1;
        }, 1000 * x);
    }
}
function simpleDo() {
    var currTime = 10;
    var x = 1;
    do {
        setTimeout(function () {
            document.getElementById("countdownTimer").innerHTML = "Time until blastoff is " + currTime + " seconds!";
            currTime = currTime - 1;
        }, 1000 * x);
        x += 1;
    } while (x < 12);
}
function betterCountdown() {
    var currTime = 10;
    for (var x = 1; x <= 11; x++) {
        if (x == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML ="Blastoff!!!";
            }, 1000 * x);
        } else if (x > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * x);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Time until blastoff is " + currTime + " seconds!";
                currTime = currTime - 1;
            }, 1000 * x);
        }
    }
}
function whileCount() {
    var currTime = 10;
    var x = 1;
    while (x < 12) {

        if (x == 11) {
            setTimeout(function () {
                //code goes here for timer
                document.getElementById("countdownTimer").innerHTML = "WE HAVE BLASTOFF!!!";
            }, 1000 * x);
        } else if (x > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Warning the time left is less than half, clear the zone in " + currTime + " seconds";
                currTime = currTime - 1;
            }, 1000 * x);
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Time left until Blastoff is " + currTime +" seconds";
                currTime = currTime - 1;
            }, 1000 * x);
        }
        x = x + 1;
    }
}
