import { RhinoModule } from 'rhino3dm';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { get3dmFile, loadRhinoFilesToScene } from './rhino_utils';

const file = 'hello_mesh.3dm'

export async function test_three(rhino: RhinoModule) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.replaceChildren(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  //Do three things
  let material = new THREE.MeshNormalMaterial()
  let rhinoMesh = get3dmFile(rhino, file);
  loadRhinoFilesToScene(rhino, await rhinoMesh, material, scene);

  camera.position.set( 0, 20, 50 );
  controls.update();

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();
}