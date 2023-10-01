<canvas bind:this={canvas} class="bg-cover"></canvas>

<script lang="js">
	import * as THREE from "three";
    import { onMount } from "svelte"

    let canvas

    onMount(() => {
        createScene(canvas)
    })

    const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
let renderer;
scene.add(cube);
camera.position.z = 5;

const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
    //   renderer.setClearColor(new THREE.Color("#1c1624"));
  renderer.render(scene, camera);
};

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: el });
  resize();
  animate();
}

window.addEventListener('resize', resize);
</script>

<style>
    		canvas {
                display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 100%;
    transition: opacity 1500ms ease-out;
		}
</style>