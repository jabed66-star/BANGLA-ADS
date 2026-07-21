// assets/js/announcements.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("announcement-form");
    const tableBody = document.getElementById("announcement-tbody");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("ann-title").value;
            const target = document.getElementById("ann-target").value;
            const type = document.getElementById("ann-type").value;
            const message = document.getElementById("ann-message").value;
            const today = new Date().toISOString().split("T")[0];

            // Badge Types Logic
            let badgeClass = "badge-info";
            if (type === "Warning") badgeClass = "badge-warning";
            if (type === "Important") badgeClass = "badge-danger";
            if (type === "Update") badgeClass = "badge-success";

            // নতুন নোটিশ রো তৈরি
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>
                    <strong>${title}</strong><br>
                    <small style="color:#64748b;">${message}</small>
                </td>
                <td><span class="badge badge-info">${target}</span></td>
                <td><span class="badge ${badgeClass}">${type}</span></td>
                <td>${today}</td>
                <td>
                    <button class="btn-delete" onclick="deleteNotice(this)">Delete</button>
                </td>
            `;

            tableBody.prepend(newRow);
            form.reset();
            alert("নতুন অ্যানাউন্সমেন্ট সফলভাবে প্রকাশ করা হয়েছে!");
        });
    }

    // নোটিশ ডিলেট করার ফাংশন
    window.deleteNotice = function(btn) {
        if (confirm("আপনি কি নিশ্চিত যে আপনি এই নোটিশটি মুছে ফেলতে চান?")) {
            const row = btn.closest("tr");
            row.remove();
        }
    };
});
