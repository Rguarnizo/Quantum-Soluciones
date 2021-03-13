import React from "react";
import * as THREE from "three";


var TreeJs = (props) => {
    var camera, scene, renderer;

    scene = new THREE.Scene();
    
    scene.fog = new THREE.Fog(0xff00ff,0.1,8);
  
  
    var loader = new THREE.TextureLoader();
    loader.load("./SpaceBackgroud.jpg",function(texture){scene.background = texture});
  
    
  
  
    camera = new THREE.PerspectiveCamera(
      75, //* Angulo de campo de visión,
      window.innerWidth / window.innerHeight, //* Aspecto, aspect ratio
      // near = 0.1
      // far = 2000.
    );
  
    var camera2 = new THREE.PerspectiveCamera(
      75, //* Angulo de campo de visión,
      window.innerWidth / window.innerHeight, //* Aspecto, aspect ratio
      3,
      10
    );
  
    var helper = new THREE.CameraHelper(camera2);
    scene.add(helper);
  
  
    renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
  
    //? Geometry.
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      //wireframe: true,
    });
    var cube = new THREE.Mesh(geometry, material);
    cube.position.z = -5;
    scene.add(cube);
  
  
    //? Posicionar la camara: camera.position.z = 5;  Sacamos 5 unidades la camara de la pantalla.
  
    document.body.appendChild(renderer.domElement);
  
  
    var i = 0;
    var animate = function () {
      requestAnimationFrame(animate);
      
      camera.lookAt(camera2.position)
  
      camera.position.x = Math.cos(i) * 30;
      camera.position.z = Math.sin(i) * 30;
  
      i+= 0.01;
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
  
    animate();
  
    return <></>; 
}


export default TreeJs;