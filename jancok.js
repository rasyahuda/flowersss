// Target Sisa Waktu Riil (Menuju Ulang Tahun Tanggal 20 Juni 2026)
// const targetDate = new Date("June 20, 2026 00:00:00").getTime();

// function updateCountdown() {
//   const now = new Date().getTime();
//   const difference = targetDate - now;

//   const btnGift = document.getElementById("btn-open-gift");
//   const note = document.getElementById("countdown-note");

//   // Perhitungan waktu mundur riil
//   const d = Math.floor(difference / (1000 * 60 * 60 * 24));
//   const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//   const s = Math.floor((difference % (1000 * 60)) / 1000);

//   if(document.getElementById("days")) document.getElementById("days").innerText = d < 10 ? "0" + d : d;
//   if(document.getElementById("hours")) document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
//   if(document.getElementById("minutes")) document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
//   if(document.getElementById("seconds")) document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

//   // ======================================================================
//   // MODE DEVELOPER: Membuka tombol secara paksa walau countdown masih jalan.
//   // JIKA UNTUK HARI H BESOK (PAS DIKASIH): Cukup ganti 'true' menjadi (difference <= 0)
//   // ======================================================================
//   if (true) { 
//     note.innerText = "Developer Mode: Akses Terbuka! ✨";
//     btnGift.classList.remove("disabled");
//     btnGift.removeAttribute("disabled");
//     btnGift.innerText = "OPEN HER GIFT 🎁";
//   } else {
//     if (difference <= 0) {
//       note.innerText = "⏳ Menghitung mundur...";
//       btnGift.classList.add("disabled");
//       btnGift.setAttribute("disabled", "true");
//       btnGift.innerText = "TUNGGU SAMPAI WAKTUNYA 🔒";
//     } else {
//       note.innerText = "Hari ini adalah hari spesialnya! 🎉";
//       btnGift.classList.remove("disabled");
//       btnGift.removeAttribute("disabled");
//       btnGift.innerText = "OPEN HER GIFT 🎁";
//       clearInterval(countdownInterval);
//     }
//   }
// }

// Target Sisa Waktu Riil (Menuju Ulang Tahun Tanggal 20 Juni 2026)
const targetDate = new Date("June 20, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  const btnGift = document.getElementById("btn-open-gift");
  const note = document.getElementById("countdown-note");

  // Perhitungan waktu mundur riil
  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((difference % (1000 * 60)) / 1000);

  if(document.getElementById("days")) document.getElementById("days").innerText = d < 10 ? "0" + d : d;
  if(document.getElementById("hours")) document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
  if(document.getElementById("minutes")) document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
  if(document.getElementById("seconds")) document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;

  // ======================================================================
  // LOGIKA HARI H (20 JUNI 2026)
  // ======================================================================
  if (difference > 0) { 
    // Sudah masuk tanggal 20 Juni atau lewat
    note.innerText = "Hari ini adalah hari spesialnya! 🎉";
    if(btnGift) {
      btnGift.classList.remove("disabled");
      btnGift.removeAttribute("disabled");
      btnGift.innerText = "OPEN HER GIFT 🎁";
    }
    clearInterval(countdownInterval);

    // Pemicu Efek Bunga: Hanya jika halaman pertama aktif
    checkAndTriggerFlowerEffect();
  } else {
    // Masih menghitung mundur (Belum tanggal 20 Juni)
    note.innerText = "⏳ Menghitung mundur...";
    if(btnGift) {
      btnGift.classList.add("disabled");
      btnGift.setAttribute("disabled", "true");
      btnGift.innerText = "TUNGGU SAMPAI WAKTUNYA 🔒";
    }
    // Hapus efek bunga jika belum waktunya (jika ada sisa)
    const container = document.getElementById("flowers");
    if(container) container.innerHTML = "";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Generator Efek Partikel Glow Bintang Melayang Anggun (Selalu Aktif)
function createStars() {
  const container = document.getElementById("stars");
  if(!container) return;
  const starCount = 65;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    const size = Math.random() * 3 + 1.5;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "vh";
    star.style.left = Math.random() * 100 + "vw";
    star.style.setProperty('--d', Math.random() * 4 + 2.5 + "s");
    container.appendChild(star);
  }
}
createStars();

// Fungsi Cek Kondisi untuk Menjalankan Efek Bunga Berguguran
function checkAndTriggerFlowerEffect() {
  const container = document.getElementById("flowers");
  const firstSection = document.getElementById("sec-countdown");
  
  if (!container || !firstSection) return;

  // Efek hanya muncul jika seksi countdown memiliki class 'active' dan wadah masih kosong
  if (firstSection.classList.contains("active") && container.children.length === 0) {
    createFlowers();
  }
}

// Generator Dekorasi Bunga Tulip & Lily Berguguran
function createFlowers() {
  const container = document.getElementById("flowers");
  if (!container) return;
  
  container.innerHTML = ""; // Bersihkan kontainer terlebih dahulu
  const flowerTypes = ["🌷", "🪻", "🌸", "🤍"]; 
  const flowerCount = 30;

  for (let i = 0; i < flowerCount; i++) {
    const petal = document.createElement("div");
    petal.classList.add("flower-petal");
    petal.innerText = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDelay = Math.random() * 8 + "s";
    petal.style.setProperty('--fall-duration', (Math.random() * 5 + 5) + "s");
    const drift = (Math.random() * 100 - 50) + "px";
    petal.style.setProperty('--drift-distance', drift);
    petal.style.fontSize = (Math.random() * 12 + 16) + "px";
    container.appendChild(petal);
  }
}

// Fungsi Animasi Transisi Seksi Halaman Mulus
function navigate(currentId, nextId) {
  const currentSec = document.getElementById(currentId);
  const nextSec = document.getElementById(nextId);
  if(!currentSec || !nextSec) return;
  
  currentSec.style.opacity = "0";
  currentSec.style.transform = "scale(0.96)";
  
  setTimeout(() => {
    currentSec.classList.remove("active");
    nextSec.classList.add("active");
    window.scrollTo({ top: 0 });

    // Setiap kali pindah halaman, cek apakah perlu mematikan atau menghidupkan bunga
    const now = new Date().getTime();
    if (targetDate - now <= 0) {
      if (nextId === "sec-countdown") {
        checkAndTriggerFlowerEffect();
      } else {
        // Hapus bunga di seksi lain agar tidak mengganggu performa/tampilan video & foto
        const container = document.getElementById("flowers");
        if(container) container.innerHTML = "";
      }
    }
  }, 650);
}

const bgMusic = document.getElementById("bg-music");
function playMusic() {
  if(bgMusic) {
    bgMusic.play().catch(err => console.log("Audio play diizinkan user"));
  }
}

// Alur Navigasi Tombol Interaktif Utama
document.getElementById("btn-open-gift").addEventListener("click", (e) => {
  e.preventDefault();
  playMusic();
  navigate("sec-countdown", "sec-gift");
});

document.getElementById("gift-box").addEventListener("click", () => {
  document.getElementById("gift-box").style.transform = "scale(1.25)";
  setTimeout(() => {
    navigate("sec-gift", "sec-letter");
  }, 600);
});

document.getElementById("btn-read-letter").addEventListener("click", (e) => {
  e.preventDefault();
  navigate("sec-letter", "sec-letter-content");
});

document.getElementById("btn-to-memories").addEventListener("click", (e) => {
  e.preventDefault();
  navigate("sec-letter-content", "sec-memories");
});

document.getElementById("btn-to-video").addEventListener("click", (e) => {
  e.preventDefault();
  navigate("sec-memories", "sec-timeline"); 
});

document.getElementById("btn-to-vouchers").addEventListener("click", (e) => {
  e.preventDefault();
  navigate("sec-timeline", "sec-vouchers");
});

document.getElementById("btn-vouchers-to-video").addEventListener("click", (e) => {
  e.preventDefault();
  navigate("sec-vouchers", "sec-video");
});

// Fungsi Interaktif Klaim Virtual Voucher
function claimVoucher(namaVoucher) {
  alert(`🎟️ Yeay! Berhasil mengklaim:\n"${namaVoucher}"\n\nScreenshot layar ini dan kirim ke aku buat ditukarkan yaa! ❤️`);
}

// ======================================================================
// LOGIKA AUTO-PAUSE UNTUK 4 VIDEO (SALING KUNCI AGAR TIDAK TABRAKAN)
// ======================================================================
const videos = [
  document.getElementById("wish-video"),
  document.getElementById("wish-video-2"),
  document.getElementById("wish-video-3"),
  document.getElementById("wish-video-4")
];

videos.forEach((currentVideo) => {
  if (currentVideo) {
    currentVideo.addEventListener("play", () => {
      videos.forEach((otherVideo) => {
        if (otherVideo && otherVideo !== currentVideo && !otherVideo.paused) {
          otherVideo.pause(); 
        }
      });
    });
  }
});

// Navigasi Setelah Halaman Video Selesai Ditonton
document.getElementById("btn-to-wishes").addEventListener("click", (e) => {
  e.preventDefault();
  videos.forEach((v) => {
    if (v && !v.paused) v.pause(); 
  });
  bgMusic.volume = 1.0; 
  navigate("sec-video", "sec-wishes");
});

document.getElementById("btn-to-closing").addEventListener("click", (e) => {
  e.preventDefault();
  navigate("sec-wishes", "sec-closing");
  startClosingTextAnimation();
});

document.getElementById("btn-replay").addEventListener("click", (e) => {
  e.preventDefault();
  if(closingTextInterval) clearInterval(closingTextInterval);
  navigate("sec-closing", "sec-countdown");
});

// Kontrol Alur Pergantian Teks Dinamis di Akhir Halaman
let closingTextInterval;
function startClosingTextAnimation() {
  const closingText = document.getElementById("closing-text");
  if(!closingText) return;
  const texts = ["HAPPY BIRTHDAY", "WITH ALL MY LOVE", "ALWAYS & FOREVER"];
  let index = 0;
  
  closingText.innerText = texts[0];
  
  closingTextInterval = setInterval(() => {
    index = (index + 1) % texts.length;
    setTimeout(() => {
      if(closingText) closingText.innerText = texts[index];
    }, 1500); 
  }, 2000);
}
