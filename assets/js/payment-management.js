// assets/js/payment-management.js

document.addEventListener("DOMContentLoaded", () => {
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    // ১. ট্যাব স্যুইচ করার ফাংশন
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetTab = btn.getAttribute("data-tab");

            // সব ট্যাব থেকে active ক্লাস রিমুভ করা
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            // সিলেক্ট করা ট্যাবে active ক্লাস যোগ করা
            btn.classList.add("active");
            document.getElementById(targetTab).classList.add("active");
        });
    });

    // ২. ডিকোপোজিট বা উইথড্র রিওকুয়েস্ট Approve / Reject করার ফাংশন
    window.handlePaymentAction = function(btn, type, status) {
        const row = btn.closest("tr");
        const statusTd = row.children[5];

        if (status === "rejected") {
            const reason = prompt("বাতিল করার কারণ লিখুন (ঐচ্ছিক):");
            if (reason === null) return;
        } else {
            if (!confirm(`আপনি কি নিশ্চিত যে আপনি এই ${type} রিকুয়েস্টটি Approve করতে চান?`)) return;
        }

        if (status === "approved") {
            statusTd.innerHTML = '<span class="badge badge-approved">Approved</span>';
        } else {
            statusTd.innerHTML = '<span class="badge badge-rejected">Rejected</span>';
        }

        alert(`${type} স্ট্যাটাস ${status.toUpperCase()} করা হয়েছে।`);
    };
});
