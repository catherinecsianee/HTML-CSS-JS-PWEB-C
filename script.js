function openModal(name, desc, price) {
    document.getElementById('modal-title').textContent = name.charAt(0).toUpperCase() + name.slice(1);
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal-price').textContent = price;
    let modal = document.getElementById('modal');
    modal.classList.add('show');
    modal.style.display = 'flex';
}
function closeModal() {
    let modal = document.getElementById('modal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
}
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});