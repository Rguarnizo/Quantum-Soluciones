import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/app.scss";

import * as THREE from "three";

function App() {
  var camera, scene, renderer;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x6699cc);
  scene.fog = new THREE.Fog(0xff00ff,0.1,8);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight
  );

  renderer = new THREE.WebGL1Renderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  //? Geometry.
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    //wireframe: true,
  });
  var cube = new THREE.Mesh(geometry, material);

  scene.add(cube);
  camera.position.z = 5;

  document.body.appendChild(renderer.domElement);

  renderer.render(scene, camera);

  var animate = function () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  };

  animate();

  return <></>;
}

export default App;
