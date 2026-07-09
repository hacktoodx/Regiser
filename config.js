// config.js
const ADMIN_TG_ID = "7234688831"; 
const GAS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwpgFr425h5sFIfRcXdnZl_lp1__ir7zTUkR53-Zj8bNtYQ_hO_7qlU6aeIGyYlGsX/exec";

const firebaseConfig = {
    apiKey: "AIzaSyAxHBeocnF00uoHiMUqMyY2ZgAx9ALVFQI",
    authDomain: "hacktood-member.firebaseapp.com",
    projectId: "hacktood-member",
    storageBucket: "hacktood-member.firebasestorage.app",
    messagingSenderId: "67545978384",
    appId: "1:67545978384:web:5e13a0549263fadb7d5c95",
    measurementId: "G-Q430JLX5J7"
};

// เริ่มต้น Firebase (ต้องรันหลังจากโหลดไลบรารี Firebase ใน HTML แล้ว)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// เปิดหน้าจอ Telegram ให้เต็มจอ
if (window.Telegram && window.Telegram.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
}
