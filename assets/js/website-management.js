// assets/js/website-management.js

document.addEventListener("DOMContentLoaded", () => {
    const adTypeSelect = document.getElementById("ad-type");
    const adSizeSelect = document.getElementById("ad-size");
    const generateBtn = document.getElementById("generate-code-btn");
    const copyBtn = document.getElementById("copy-code-btn");
    const codeOutput = document.getElementById("ad-code-output");

    // Ad type পরিবর্তন অনুযায়ী Ad Size আপডেট করার ফাংশন
    if (adTypeSelect && adSizeSelect) {
        adTypeSelect.addEventListener("change", (e) => {
            const selectedType = e.target.value;
            adSizeSelect.innerHTML = ""; // আগের সাইজগুলো ক্লিয়ার করা

            let sizes = [];
            if (selectedType === "banner" || selectedType === "sticky" || selectedType === "infeed") {
                sizes = [
                    { value: "300x250", text: "300 x 250 (Medium Rectangle)" },
                    { value: "728x90", text: "728 x 90 (Leaderboard)" },
                    { value: "160x600", text: "160 x 600 (Wide Skyscraper)" },
                    { value: "320x50", text: "320 x 50 (Mobile Banner)" },
                    { value: "responsive", text: "Responsive (Auto Adjust)" }
                ];
            } else if (selectedType === "native") {
                sizes = [
                    { value: "responsive", text: "Responsive Native Grid" },
                    { value: "1x1", text: "Single Item Widget" }
                ];
            } else if (selectedType === "video") {
                sizes = [
                    { value: "640x360", text: "16:9 Outstream Video" },
                    { value: "responsive", text: "Auto Video Player" }
                ];
            } else {
                // Popunder / Interstitial
                sizes = [
                    { value: "full", text: "Full Screen / Pop Direct" }
                ];
            }

            sizes.forEach(size => {
                const opt = document.createElement("option");
                opt.value = size.value;
                opt.textContent = size.text;
                adSizeSelect.appendChild(opt);
            });
        });
    }

    // Ad Code Generate করার নিয়ম
    if (generateBtn && codeOutput) {
        generateBtn.addEventListener("click", () => {
            const website = document.getElementById("select-website").value;
            const adName = document.getElementById("ad-name").value || "Ad Unit";
            const adType = document.getElementById("ad-type").value;
            const adSize = document.getElementById("ad-size").value;

            const randomSlotId = Math.floor(100000 + Math.random() * 900000);

            const generatedCode = `\n` +
`<script src="https://adsbangla.com/sdk/v1/ad.js" data-ad-client="AB-PUB-${randomSlotId}" data-ad-slot="${adSize}" async></script>\n` +
`<ins class="adsbangla" data-site="${website}" data-type="${adType}" style="display:inline-block;"></ins>`;

            codeOutput.textContent = generatedCode;
        });
    }

    // Code Copy করার ফাংশন
    if (copyBtn && codeOutput) {
        copyBtn.addEventListener("click", () => {
            const codeText = codeOutput.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = "Copied!";
                copyBtn.style.backgroundColor = "#059669";
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = "";
                }, 2000);
            }).catch(err => {
                alert("Failed to copy code!");
            });
        });
    }
});
