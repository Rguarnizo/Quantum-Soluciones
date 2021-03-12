import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/app.scss";

import * as THREE from "three";


function App() {

  var camera,scene,renderer;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight
  );
  
  renderer = new THREE.WebGL1Renderer();
  renderer.setSize(window.innerWidth,window.innerHeight);

  renderer.render(scene,camera);

    document.body.appendChild(renderer.domElement);


  return (
<>
  
</>
  );
}







export default App;
