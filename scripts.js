const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')) {
        themeBtn.innerText = "☀️ Mode Terang";
    } else {
        themeBtn.innerText = "🌙 Mode Gelap";
    }

    console.log("tes")
});

const greeting = document.getElementById('greeting');
const jam = new Date().getHours();

greeting.innerText = jam

if (jam < 4 && jam <11) {
    greeting.innerText = "Selamat Pagi, Semangat Coding";
} else if (jam >= 11 && jam < 15) {
    greeting.innerText = "Selamat Siang, Jangan Lupa Istirahat!";
} else if (jam >= 15 && jam < 18) {
    greeting.innerText = "Selamat Sore, Rehat Sejenak Yuk!";
} else {
    greeting.innerText = "Selamat Malam, Coding Dulu Yuk!";
}