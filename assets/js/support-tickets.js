// assets/js/support-tickets.js

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("ticket-modal");
    const modalClose = document.getElementById("modal-close");
    const replyForm = document.getElementById("reply-form");
    let currentActiveRow = null;

    // ১. ফিল্টারিং ফাংশন
    const ticketSearch = document.getElementById("ticket-search");
    const statusFilter = document.getElementById("ticket-status-filter");
    const tableRows = document.querySelectorAll("#ticket-tbody tr");

    function filterTickets() {
        const searchText = ticketSearch.value.toLowerCase();
        const selectedStatus = statusFilter.value;

        tableRows.forEach(row => {
            const rowText = row.children[0].textContent.toLowerCase() + row.children[1].textContent.toLowerCase();
            const status = row.getAttribute("data-status");

            const matchesSearch = rowText.includes(searchText);
            const matchesStatus = (selectedStatus === "all" || status === selectedStatus);

            if (matchesSearch && matchesStatus) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    }

    if (ticketSearch) ticketSearch.addEventListener("input", filterTickets);
    if (statusFilter) statusFilter.addEventListener("change", filterTickets);

    // ২. মডাল ওপেন ও রিপ্লাই ম্যানেজমেন্ট
    window.openTicketModal = function(btn, ticketId, user, subject) {
        currentActiveRow = btn.closest("tr");
        document.getElementById("modal-ticket-id").innerText = ticketId;
        document.getElementById("modal-user").innerText = user;
        document.getElementById("modal-subject").innerText = subject;
        
        modal.classList.add("active");
    };

    if (modalClose) {
        modalClose.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    }

    if (replyForm) {
        replyForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const newStatus = document.getElementById("update-status").value;
            
            if (currentActiveRow) {
                const statusTd = currentActiveRow.children[4];
                currentActiveRow.setAttribute("data-status", newStatus);

                if (newStatus === "resolved") {
                    statusTd.innerHTML = '<span class="badge badge-resolved">Resolved</span>';
                } else if (newStatus === "pending") {
                    statusTd.innerHTML = '<span class="badge badge-pending">Pending</span>';
                } else if (newStatus === "closed") {
                    statusTd.innerHTML = '<span class="badge badge-closed">Closed</span>';
                }
            }

            alert("রিপ্লাই সফলভাবে পাঠানো হয়েছে এবং টিকিটের স্ট্যাটাস আপডেট করা হয়েছে!");
            modal.classList.remove("active");
            replyForm.reset();
        });
    }
});
