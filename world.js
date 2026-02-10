import * as THREE from 'three';
export function initWorld() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewport').appendChild(renderer.domElement);
    scene.add(new THREE.GridHelper(100, 20, 0x38bdf8, 0x222));
    camera.position.set(0, 5, 10);
    return { scene, camera, renderer };
}
