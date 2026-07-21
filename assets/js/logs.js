// assets/js/logs.js

document.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // ১. ট্যাব স্যুইচ করার ফাংশন
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // ২. লগ ফিল্টারিং ফাংশন
    const logSearches = document.querySelectorAll(".log-search");
    logSearches.forEach(searchInput => {
        searchInput.addEventListener("input", (e) => {
            const searchText = e.target.value.toLowerCase();
            const activeTab = document.querySelector(".tab-content.active");
            const rows = activeTab.querySelectorAll("tbody tr");

            rows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchText)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    });
});
