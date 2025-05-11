const circles = document.querySelectorAll('.circle');
const nav = document.querySelector('.circular-navigation');

const orbits = [];

function getCenter() {
    return {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    };
};

function animate() {
    const { x: centerX, y: centerY } = getCenter();
    orbits.forEach(orbit => {
        orbit.angle += orbit.speed;
        const x = centerX + Math.cos(orbit.angle) * orbit.radius;
        const y = centerY + Math.sin(orbit.angle) * orbit.radius;
        orbit.el.style.left = `${x - 30}px`;
        orbit.el.style.top = `${y - 30}px`;
    });
        requestAnimationFrame(animate);
}


circles.forEach((circle, index) => {
    const angle = (index / circles.length) * 2 * Math.PI;
    const radius = 100 + Math.random() * 50;
    const speed = 0.002 + Math.random() * 0.002;

    orbits.push({
        el: circle,
        angle,
        radius,
        speed
    });
});

animate();

circles.forEach((circle, index) => {
    circle.style.setProperty('--index', index);
    circle.addEventListener('click', () => {
        const sectionId = circle.getAttribute('data-section');

        document.querySelectorAll('.menu').forEach(section => {
            section.classList.remove('active');
        });

        if (sectionId !== 'home') {
            document.getElementById(sectionId).classList.add('active');
            document.body.classList.add('nav-left');
        } else {
            document.body.classList.remove('nav-left');
        }
    });
});
