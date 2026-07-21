// assets/js/fraud-detection.js

document.addEventListener("DOMContentLoaded", () => {
    // IP ব্লক করার হ্যান্ডলার
    const ipForm = document.getElementById("ip-block-form");
    const ipInput = document.getElementById("block-ip-input");
    const ipTableBody = document.getElementById("blocked-ip-tbody");

    if (ipForm) {
        ipForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const ipValue = ipInput.value.trim();

            if (ipValue) {
                const newRow = document.createElement("tr");
                newRow.innerHTML = `
                    <td><code>${ipValue}</code></td>
                    <td>Manual Block</td>
                    <td>2026-07-21</td>
                    <td><span class="badge-blocked">Blocked</span></td>
                    <td><button class="btn-danger" style="padding: 4px 8px; font-size:12px;" onclick="this.closest('tr').remove()">Unblock</button></td>
                `;
                ipTableBody.appendChild(newRow);
                ipInput.value = "";
                alert(`IP ${ipValue} has been blocked successfully!`);
            }
        });
    }

    // গ্লোবাল Fraud Settings সেভ করার হ্যান্ডলার
    const fraudForm = document.getElementById("fraud-limits-form");
    if (fraudForm) {
        fraudForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Click limits and Fraud settings saved successfully!");
        });
    }
});
