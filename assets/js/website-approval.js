// assets/js/website-approval.js

document.addEventListener("DOMContentLoaded", () => {
    const siteSearch = document.getElementById("site-search");
    const statusFilter = document.getElementById("status-filter");
    const tableRows = document.querySelectorAll("#site-table-body tr");

    // ওয়েবসাইট ফিল্টারিং ফাংশন
    function filterWebsites() {
        const searchText = siteSearch.value.toLowerCase();
        const selectedStatus = statusFilter.value;

        tableRows.forEach(row => {
            const domainAndUser = row.children[0].textContent.toLowerCase();
            const status = row.getAttribute("data-status");

            const matchesSearch = domainAndUser.includes(searchText);
            const matchesStatus = (selectedStatus === "all" || status === selectedStatus);

            if (matchesSearch && matchesStatus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    if (siteSearch) siteSearch.addEventListener("input", filterWebsites);
    if (statusFilter) statusFilter.addEventListener("change", filterWebsites);

    // ওয়েবসাইট অ্যাপ্রুভ বা রিজেক্ট করার ফাংশন
    window.updateSiteStatus = function(btn, newStatus) {
        const row = btn.closest("tr");
        const statusTd = row.children[4];

        if (newStatus === "rejected") {
            const reason = prompt("রিজেক্ট করার কারণ লিখুন (ঐচ্ছিক):");
            if (reason === null) return;
        } else {
            if (!confirm("আপনি কি নিশ্চিত যে আপনি এই ওয়েবসাইটটি Approve করতে চান?")) return;
        }

        row.setAttribute("data-status", newStatus);

        if (newStatus === "approved") {
            statusTd.innerHTML = '<span class="badge badge-approved">Approved</span>';
        } else if (newStatus === "rejected") {
            statusTd.innerHTML = '<span class="badge badge-rejected">Rejected</span>';
        }

        alert(`ওয়েবসাইটটির স্ট্যাটাস পরিবর্তিত হয়ে ${newStatus.toUpperCase()} হয়েছে।`);
        filterWebsites();
    };
});
