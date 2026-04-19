function updateTime() {
    const now = new Date();

    // Local time
    document.getElementById("userClock").textContent =
        now.toLocaleTimeString() + " LOC";

    // Nepal time
    const nepalTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kathmandu",
        timeStyle: "medium"
    }).format(now);

    document.getElementById("nepalClock").textContent =
        nepalTime + " NP";

    // Auto theme
    const hour = now.getHours();
    if (hour >= 6 && hour < 18) {
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark");
    }
}

setInterval(updateTime, 1000);
updateTime();


// 🔥 CONTACT FORM (FINAL WORKING)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

// 👉 PUT YOUR REAL FORM LINK HERE
const FORMSPREE_URL = "https://formspree.io/f/xzdyrwrz";

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = new FormData(form);

    try {
        const response = await fetch(FORMSPREE_URL, {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            status.innerHTML = "✅ Message sent!";
            form.reset();
        } else {
            status.innerHTML = "❌ Failed to send.";
        }

    } catch (error) {
        status.innerHTML = "⚠️ Network error.";
    }
});