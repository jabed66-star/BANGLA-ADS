// assets/js/settings.js

document.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // ১. ট্যাব স্যুইচ করার হ্যান্ডলার
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // ২. সেটিংস ফর্ম সাবমিট অ্যালার্ট
    const settingForms = document.querySelectorAll("form");
    settingForms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Settings updated successfully!");
        });
    });
});
