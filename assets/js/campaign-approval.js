// assets/js/campaign-approval.js

document.addEventListener("DOMContentLoaded", () => {
    const campaignSearch = document.getElementById("campaign-search");
    const statusFilter = document.getElementById("status-filter");
    const tableRows = document.querySelectorAll("#campaign-table-body tr");

    // ক্যাম্পেইন সার্চ ও ফিল্টারিং ফাংশন
    function filterCampaigns() {
        const searchText = campaignSearch.value.toLowerCase();
        const selectedStatus = statusFilter.value;

        tableRows.forEach(row => {
            const campaignData = row.children[0].textContent.toLowerCase();
            const status = row.getAttribute("data-status");

            const matchesSearch = campaignData.includes(searchText);
            const matchesStatus = (selectedStatus === "all" || status === selectedStatus);

            if (matchesSearch && matchesStatus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    if (campaignSearch) campaignSearch.addEventListener("input", filterCampaigns);
    if (statusFilter) statusFilter.addEventListener("change", filterCampaigns);

    // স্ট্যাটাস পরিবর্তনের ফাংশন
    window.updateCampaignStatus = function(btn, newStatus) {
        const row = btn.closest("tr");
        const statusTd = row.children[4];

        if (newStatus === "rejected") {
            const reason = prompt("বাতিল করার কারণ লিখুন (ঐচ্ছিক):");
            if (reason === null) return;
        } else {
            if (!confirm("আপনি কি নিশ্চিত যে আপনি এই বিজ্ঞাপনটি Approve করতে চান?")) return;
        }

        row.setAttribute("data-status", newStatus);

        if (newStatus === "active") {
            statusTd.innerHTML = '<span class="badge badge-active">Active</span>';
        } else if (newStatus === "rejected") {
            statusTd.innerHTML = '<span class="badge badge-rejected">Rejected</span>';
        }

        alert(`ক্যাম্পেইনটির স্ট্যাটাস ${newStatus.toUpperCase()} করা হয়েছে।`);
        filterCampaigns();
    };
});
