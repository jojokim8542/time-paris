function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('clock').textContent = timeString;

    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
}

setInterval(updateClock, 1000);
updateClock();
