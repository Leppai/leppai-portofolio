const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


const sendGmail = document.getElementById("sendGmail");

sendGmail.addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Silakan isi semua field terlebih dahulu.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Masukkan alamat email yang valid.");
        return;
    }

    // Tujuan email
    const tujuan = "levifazli29@gmail.com";

    // Subject email
    const subject = `Pesan Portfolio dari ${name}`;

    // Isi pesan
    const body =
        `Halo Syahlevi,

Saya ${name}.
Email saya: ${email}

Pesan:
${message}

Terima kasih.`;

    const gmailURL =
        `https://mail.google.com/mail/?view=cm&fs=1` +
        `&to=${encodeURIComponent(tujuan)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    // Buka Gmail
    window.open(gmailURL, "_blank");
});