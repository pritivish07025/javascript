let form = document.getElementById("profileForm");
let gallery = document.getElementById("badgeGallery");
let fileInput = document.getElementById("profilepic");
let fileText = document.getElementById("fileText");

let serial = 1;
let pendingDataUrl = null;

fileInput.addEventListener("change", function () {
    let file = fileInput.files[0];
    if (file) {
        fileText.textContent = file.name;
        let reader = new FileReader();
        reader.onload = function (e) {
            pendingDataUrl = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let name = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let id = String(serial).padStart(4, "0");
    serial++;

    let avatarHtml;
    if (pendingDataUrl) {
        avatarHtml = `<img class="badge-avatar" src="${pendingDataUrl}">`;
    } else {
        let initial = name.trim().charAt(0).toUpperCase() || "?";
        avatarHtml = `<div class="badge-avatar-fallback">${initial}</div>`;
    }

    let card = document.createElement("div");
    card.classList.add("badge-card");
    card.innerHTML = `
        <div class="badge-stripe"></div>
        <div class="badge-body">
            ${avatarHtml}
            <p class="badge-name">${name}</p>
            <p class="badge-meta">${age} &middot; ${email}</p>
            <div class="badge-footer">
                <span class="badge-id">#ID-${id}</span>
                <span class="status-dot"></span>
            </div>
        </div>
    `;

    gallery.prepend(card);

    form.reset();
    fileText.textContent = "Upload profile photo";
    pendingDataUrl = null;
});