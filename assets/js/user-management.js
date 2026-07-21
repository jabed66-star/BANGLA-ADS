// assets/js/assets/js/user-management.js

document.addEventListener("DOMContentLoaded", () => {
    const userSearch = document.getElementById("user-search");
    const roleFilter = document.getElementById("role-filter");
    const statusFilter = document.getElementById("status-filter");
    const userTableRows = document.querySelectorAll("#user-table-body tr");

    // ইউজার সার্চ ও ফিল্টারিং ফাংশন
    function filterUsers() {
        const searchText = userSearch.value.toLowerCase();
        const selectedRole = roleFilter.value;
        const selectedStatus = statusFilter.value;

        userTableRows.forEach(row => {
            const nameEmail = row.children[0].textContent.toLowerCase();
            const role = row.getAttribute("data-role");
            const status = row.getAttribute("data-status");

            const matchesSearch = nameEmail.includes(searchText);
            const matchesRole = (selectedRole === "all" || role === selectedRole);
            const matchesStatus = (selectedStatus === "all" || status === selectedStatus);

            if (matchesSearch && matchesRole && matchesStatus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    if (userSearch) userSearch.addEventListener("input", filterUsers);
    if (roleFilter) roleFilter.addEventListener("change", filterUsers);
    if (statusFilter) statusFilter.addEventListener("change", filterUsers);

    // স্ট্যাটাস পরিবর্তনের বোতাম হ্যান্ডলিং (Global function)
    window.changeUserStatus = function(btn, newStatus) {
        const row = btn.closest("tr");
        const statusTd = row.children[3];
        
        let confirmMsg = `Are you sure you want to change status to ${newStatus.toUpperCase()}?`;
        if (!confirm(confirmMsg)) return;

        row.setAttribute("data-status", newStatus);

        // ব্যাজ আপডেট
        if (newStatus === "approved") {
            statusTd.innerHTML = '<span class="badge badge-approved">Approved</span>';
        } else if (newStatus === "suspended") {
            statusTd.innerHTML = '<span class="badge badge-suspended">Suspended</span>';
        } else if (newStatus === "banned") {
            statusTd.innerHTML = '<span class="badge badge-banned">Banned</span>';
        }

        alert(`User status updated to ${newStatus.toUpperCase()}`);
        filterUsers(); // ফিল্টার রিফ্রেশ
    };
});
