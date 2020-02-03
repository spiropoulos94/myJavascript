document.getElementById("startBtn").addEventListener("click", function countDown(minutes) {
    minutes = 2
    let seconds = 60;
    let interval = setInterval(() => {
        seconds--;


        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }

        if (seconds < 10) {
            seconds = "0" + seconds
        }

        if (seconds == 0 & minutes == 0) {
            clearInterval(interval)
            alert("Session is over.Take a break before restarting!")
        }

        console.log(`${minutes}:${seconds}`)
        document.getElementById("displayTime").innerHTML = `${minutes}:${seconds}`
    }, 100)
}
)

//countDown(1)//