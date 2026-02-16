const titleInput = document.getElementById('noteTitle');
const contentInput = document.getElementById('noteContent');

// Load previously saved data markii bogga la furo
window.onload = () => {
    titleInput.value = localStorage.getItem('vipTitle') || "";
    contentInput.value = localStorage.getItem('vipNote') || "";
};

// Function-ka lagu keydinayo xogta
function saveData() {
    localStorage.setItem('vipTitle', titleInput.value);
    localStorage.setItem('vipNote', contentInput.value);
    alert("Your note has been secured in VIP Storage! ✨");
}

// Auto-save feature runs every 5 seconds
setInterval(() => {
    localStorage.setItem('vipTitle', titleInput.value);
    localStorage.setItem('vipNote', contentInput.value);
}, 5000);