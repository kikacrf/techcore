// INTERAÇÃO DE ABAS
function switchTab(event, tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// CARROSSEL DA ABA PACKET TRACER
let currentSlide = 1;
const totalSlides = 2;

const slideTitles = [
    "Imagem 1 de 2: Topologia Integrada de VLANs (CISCO TMB.jpg)",
    "Imagem 2 de 2: Diagrama Lógico Cisco Packet Tracer (CISO.png)"
];

function moveSlide(direction) {
    document.getElementById(`slide-${currentSlide}`).classList.remove('active');

    currentSlide += direction;

    if (currentSlide > totalSlides) currentSlide = 1;
    if (currentSlide < 1) currentSlide = totalSlides;

    document.getElementById(`slide-${currentSlide}`).classList.add('active');
    document.getElementById('slide-indicator').textContent = slideTitles[currentSlide - 1];
}

// MODAL DE VISUALIZAÇÃO DE IMAGEM
function openModal(imgSrc, title, desc) {
    const modal = document.getElementById('imageModal');
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = desc;
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// FECHAR MODAL COM TECLA ESC OU CLIQUE FORA
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});