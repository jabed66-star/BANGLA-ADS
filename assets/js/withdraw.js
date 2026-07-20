// assets/js/withdraw.js

document.addEventListener("DOMContentLoaded", () => {
    const paymentMethodSelect = document.getElementById("payment-method");
    const methodFields = document.querySelectorAll(".payment-fields");

    // পেমেন্ট মেথড পরিবর্তনের ভিত্তিতে ফিল্ড অন/অফ করা
    if (paymentMethodSelect) {
        paymentMethodSelect.addEventListener("change", (e) => {
            const selectedMethod = e.target.value;

            methodFields.forEach(field => {
                field.classList.remove("active");
            });

            if (selectedMethod) {
                const activeField = document.getElementById(`${selectedMethod}-field`);
                if (activeField) {
                    activeField.classList.add("active");
                }
            }
        });
    }

    // উইথড্র ফর্ম সাবমিট হ্যান্ডলার
    const withdrawForm = document.getElementById("withdraw-form");
    if (withdrawForm) {
        withdrawForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const amount = parseFloat(document.getElementById("withdraw-amount").value);
            const minLimit = 10.00;

            if (amount < minLimit) {
                alert(`Minimum withdraw limit is $${minLimit.toFixed(2)}`);
                return;
            }

            alert("Withdraw request submitted successfully!");
            withdrawForm.reset();
            methodFields.forEach(field => field.classList.remove("active"));
        });
    }
});
