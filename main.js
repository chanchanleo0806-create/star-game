import { initWorld } from './world.js';

const { scene, camera, renderer } = initWorld();

window.togglePhone = () => {
    document.getElementById('phone-container').classList.toggle('active');
};

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
