import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components/DirectionalLight";
import { player, initializePlayer } from "./components/Player";
import { map,initializeMap } from "./components/Map";
import { animateVehicles } from "./animateVehicles";
import { animatePlayer } from "./animatePlayer";
import "./style.css";
import "./collectUserInputs";
import { hitTest } from "./hitTest";

const scoreDOM = document.getElementById("score");
const resultDOM = document.getElementById("result-container");

document
  .querySelector("#retry")
  ?.addEventListener("click", initializeGame);

function initializeGame() {
    initializePlayer();
    initializeMap();

    //Initialize UI
    if (scoreDOM) scoreDOM.innerText = "0";
    if (resultDOM) resultDOM.style.visibility = "hidden";
}

function animate() {
    animateVehicles();
    animatePlayer();
    hitTest();
    
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