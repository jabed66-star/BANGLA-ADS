// assets/js/api-management.js

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

    // ২. নতুন API Key জেনারেট করার ফাংশন
    const apiKeyForm = document.getElementById("generate-api-form");
    if (apiKeyForm) {
        apiKeyForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const randomKey = "ab_live_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            document.getElementById("api-key-output").value = randomKey;
            alert("নতুন API Key সফলভাবে তৈরি করা হয়েছে!");
        });
    }

    // ৩. কোড ক্লিপবোর্ডে কপি করার ফাংশন
    window.copyCode = function(button) {
        const codeText = button.parentElement.querySelector("pre, code, .endpoint-url").innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            const originalText = button.innerText;
            button.innerText = "Copied!";
            setTimeout(() => {
                button.innerText = originalText;
            }, 1500);
        });
    };
});
