// assets/js/reports.js

document.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // ১. ট্যাব সুইচ করার ফাংশন
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // ২. ডেট বা ফিল্টার সাবমিট হ্যান্ডলার
    const filterForms = document.querySelectorAll(".report-filter-form");
    filterForms.forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("রিপোর্ট ডাটা ফিল্টার ও আপডেট করা হয়েছে!");
        });
    });
});
