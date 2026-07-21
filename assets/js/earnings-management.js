// assets/js/earnings-management.js

document.addEventListener("DOMContentLoaded", () => {
    const revShareInput = document.getElementById("rev-share");
    const pubCommInput = document.getElementById("pub-commission");

    // Revenue Share পরিবর্তন করলে Publisher Commission স্বয়ংক্রিয়ভাবে হিসাব হওয়া
    if (revShareInput && pubCommInput) {
        revShareInput.addEventListener("input", () => {
            let shareVal = parseFloat(revShareInput.value) || 0;
            if (shareVal > 100) shareVal = 100;
            if (shareVal < 0) shareVal = 0;

            // এডমিন Revenue Share থেকে পাবলিশার কমিশন হিসাব (যেমন: ১০০% - রেভিনিউ শেয়ার)
            pubCommInput.value = (100 - shareVal).toFixed(1);
        });
    }

    // ফর্ম সাবমিট ইভেন্ট
    const earningsForm = document.getElementById("earnings-settings-form");
    if (earningsForm) {
        earningsForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Earnings Settings (Revenue Share & Commissions) Successfully Updated!");
        });
    }
});
