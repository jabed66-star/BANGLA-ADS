// assets/js/add-funds.js

document.addEventListener("DOMContentLoaded", () => {
    const paymentGateway = document.getElementById("payment-gateway");
    const gatewayBoxes = document.querySelectorAll(".payment-details-box");

    // মেথড নির্বাচনের সাথে সাথে পেমেন্ট এড্রেস দেখানো
    if (paymentGateway) {
        paymentGateway.addEventListener("change", (e) => {
            const selectedGateway = e.target.value;

            gatewayBoxes.forEach(box => box.classList.remove("active"));

            if (selectedGateway) {
                const targetBox = document.getElementById(`${selectedGateway}-info`);
                if (targetBox) {
                    targetBox.classList.add("active");
                }
            }
        });
    }

    // এড্রেস কপি করার ফাংশন
    window.copyText = function(elementId, btnElement) {
        const textToCopy = document.getElementById(elementId).innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = btnElement.innerText;
            btnElement.innerText = "Copied!";
            btnElement.style.backgroundColor = "#10b981";
            setTimeout(() => {
                btnElement.innerText = originalText;
                btnElement.style.backgroundColor = "#64748b";
            }, 2000);
        }).catch(() => {
            alert("Failed to copy!");
        });
    };

    // ডিপোজিট ফর্ম সাবমিট হ্যান্ডলার
    const depositForm = document.getElementById("deposit-form");
    if (depositForm) {
        depositForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Deposit request submitted successfully! Pending admin approval.");
            depositForm.reset();
            gatewayBoxes.forEach(box => box.classList.remove("active"));
        });
    }
});
