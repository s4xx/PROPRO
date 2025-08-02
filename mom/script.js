document.addEventListener('DOMContentLoaded', function() {
    // Fondo animado gótico
    const matrixHearts = document.getElementById('matrixHearts');
    const heartSymbols = ['🖤', '🦇', '💜', '🩸', '💀', '🕸️', '🦉', '💘', 'HABIBI'];

    function createMatrixHearts() {
        const heart = document.createElement('div');
        heart.className = 'heart-matrix';
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 2 + Math.random() * 3 + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.fontSize = 16 + Math.random() * 18 + 'px';
        heart.style.filter = 'drop-shadow(0 0 6px #7c3aed)';
        matrixHearts.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createMatrixHearts, 120);

    // Triángulo de imágenes gótico (incluye la rosa)
    const card = document.querySelector('.card');
    const triangleDiv = document.createElement('div');
    triangleDiv.className = 'gothic-triangle-imgs';
    triangleDiv.innerHTML = `
        <img src="https://bcodestorague.anteroteobaldob.workers.dev/share/anteroteobaldob_gmail_com/IMG/ramo.png" alt="Rosa" class="triangle-img img-top">
        <img src="001.jpg" alt="Imagen 2" class="triangle-img img-left">
        <img src="002.jpg" alt="Imagen 3" class="triangle-img img-right">
    `;
    // Inserta el triángulo después del header
    const header = card.querySelector('.header');
    header.insertAdjacentElement('afterend', triangleDiv);

    // Mensaje y explosión gótica
    const heartBtn = document.getElementById('heartBtn');
    const hiddenMessage = document.getElementById('hiddenMessage');
    heartBtn.addEventListener('click', function() {
        hiddenMessage.style.display = 'block';
        for (let i = 0; i < 36; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createExplosion(x, y);
            }, i * 40);
        }
    });

    function createExplosion(x, y) {
        const explosion = document.createElement('div');
        explosion.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        explosion.style.position = 'fixed';
        explosion.style.left = x + 'px';
        explosion.style.top = y + 'px';
        explosion.style.color = `hsl(${Math.random() * 40 + 300}, 80%, 60%)`;
        explosion.style.fontSize = '28px';
        explosion.style.zIndex = '100';
        explosion.style.transform = 'scale(0)';
        explosion.style.animation = `pop 0.5s forwards, fadeOut 0.5s 0.5s forwards`;

        document.body.appendChild(explosion);

        setTimeout(() => {
            explosion.remove();
        }, 1000);
    }

    // Estilos góticos extra para triángulo y animaciones
    const style = document.createElement('style');
    style.textContent = `
        .gothic-triangle-imgs {
            position: relative;
            width: 220px;
            height: 180px;
            margin: 0 auto 18px auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .triangle-img {
            position: absolute;
            width: 90px;
            height: 90px;
            object-fit: cover;
            border-radius: 16px;
            border: 4px solid;
            border-image: linear-gradient(135deg, #7c3aed, #ff0059, #18141a, #fff 80%) 1;
            box-shadow: 0 0 24px 6px rgba(124,48,237,0.7), 0 0 16px #000, 0 0 8px #7c3aed88;
            background: #18141a;
            transition: box-shadow 0.3s, border 0.3s;
        }
        .triangle-img:hover {
            box-shadow: 0 0 32px 12px #ff0059cc, 0 0 24px #7c3aed, 0 0 8px #fff;
            border-color: #ff0059;
        }
        .img-top {
            left: 50%;
            top: 0;
            transform: translate(-50%, 0);
            z-index: 2;
        }
        .img-left {
            left: 0;
            bottom: 0;
            z-index: 1;
        }
        .img-right {
            right: 0;
            bottom: 0;
            z-index: 1;
        }
        @keyframes pop {
            to { transform: scale(1.2) translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); }
        }
        @keyframes fadeOut {
            to { opacity: 0; transform: scale(0.5) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); }
        }
        .heart-matrix {
            position: absolute;
            top: 0;
            pointer-events: none;
            user-select: none;
            animation: fall 4s linear forwards;
        }
        @keyframes fall {
            to { top: 100vh; }
        }
    `;
    document.head.appendChild(style);
});