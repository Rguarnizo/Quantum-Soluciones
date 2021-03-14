import { Component } from "react";
import * as THREE from "three";
import {OrbitControls} from "../OrbitControls";

class TreeJs extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(
      75, //* CAMPO DE VISIÓN.
      window.innerHeight / window.innerWidth, //* Relación de Aspecto.
      0.1, //* Near
      1000 //* Far
    );

    var renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    //* Define donde se pondrá el Componente.
    this.mount.appendChild(renderer.domElement);

    //* SPHERE GEOMETRY
    var geometry = new THREE.SphereGeometry(
      1, //* Radius
      16,//* HeightEdges
      16 //* WeightEdges
    );
    var material = new THREE.MeshBasicMaterial({
      color: 0x0000bf,
      flatShading: true,
      wireframe: true,
    });
    var sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = -2;
    scene.add(sphere);

    //* TORUS GEOMETRY
    var geometry = new THREE.TorusGeometry(
      1,  //* External radius 
      0.5,//* Internal radius
      16, //* Radial segments
      100 //* Tabular segments
      );
    var material = new THREE.MeshBasicMaterial({
      color: 0x0000bf,
      flatShading: true,
      wireframe: true,
    });
    var torus = new THREE.Mesh(geometry, material);
    torus.position.x = 2;
    scene.add(torus);


    var controls = new OrbitControls(camera,renderer.domElement);
    controls.maxDistance = 10;  //* Max distance Zoom 
    controls.minDistance = 5;   //* Min distance Zoom 
    controls.maxPolarAngle = Math.PI/2; //* Polar Angle of rotation.
    
    console.log(controls.maxPolarAngle);
    camera.position.z = 10;

    var animate = () => {
      requestAnimationFrame(animate);
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.rotation.x += 0.01;
          obj.rotation.y += 0.01;
        }
      });

      renderer.render(scene, camera);
    };

    window.onresize = () => {
      renderer.setSize(window.innerWidth,window.innerHeight);
      camera.aspect = window.innerHeight / window.innerWidth;
    }

    animate();
  }

  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default TreeJs;
