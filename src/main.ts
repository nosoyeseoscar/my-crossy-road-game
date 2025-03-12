import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components/DirectionalLight";
import { player } from "./components/Player";
import { map,initializeMap } from "./components/Map";
import { animateVehicles } from "./animateVehicles";
import { animatePlayer } from "./animatePlayer";
import "./style.css";
import "./collectUserInputs";

function initializeGame() {
    initializeMap();
}

function animate() {
    animateVehicles();
    animatePlayer();
    
    renderer.render(scene, camera);
}

const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
dirLight.target = player;
/* scene.add(dirLight); */
player.add(dirLight);

/* const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100, -100, 200);
scene.add(dirLight); */

const camera = Camera();
player.add(camera);
/* scene.add(camera);
 */
initializeGame();

const renderer = Renderer();
renderer.setAnimationLoop( animate )
//renderer.render(scene, camera);