// assets/js/campaign-management.js

document.addEventListener("DOMContentLoaded", () => {
    const campaignTypeSelect = document.getElementById("campaign-type");
    const imageUploadBox = document.getElementById("image-upload-box");
    const videoUploadBox = document.getElementById("video-upload-box");

    // Campaign Type এর উপর ভিত্তি করে Upload Field পরিবর্তন
    if (campaignTypeSelect) {
        campaignTypeSelect.addEventListener("change", (e) => {
            const selectedType = e.target.value;

            imageUploadBox.classList.remove("active");
            videoUploadBox.classList.remove("active");

            if (selectedType === "video") {
                videoUploadBox.classList.add("active");
            } else if (selectedType === "banner" || selectedType === "native" || selectedType === "interstitial") {
                imageUploadBox.classList.add("active");
            }
        });
    }

    // Campaign Form Submit Handler
    const campaignForm = document.getElementById("campaign-form");
    if (campaignForm) {
        campaignForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Campaign created successfully! Waiting for Admin Approval.");
            campaignForm.reset();
            imageUploadBox.classList.remove("active");
            videoUploadBox.classList.remove("active");
            // ডিফল্ট ব্যানার ফিল্ড চালু রাখা
            imageUploadBox.classList.add("active");
        });
    }
});
