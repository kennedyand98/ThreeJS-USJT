var scene;
var camera;
var renderer;
var sphere;

var init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  this.createAEsphere();

  camera.position.x = 25;
  camera.position.y = 10;
  camera.position.z = 40;
  camera.lookAt(scene.position);

  this.render();
};

var render = () => {
  requestAnimationFrame(render);
  this.animate();
  renderer.render(scene, camera);
};

var animate = () => {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
};

var createAEsphere = () => {
  var geometry = new THREE.SphereGeometry(5, 32, 32);
  // var material = new THREE.ImageUtils.loadTexture("usjt_logo.png");
  var material = new THREE.MeshBasicMaterial({ color: "blue" });
  sphere = new THREE.Mesh(geometry, material);
  sphere.name - "mySphere";
  scene.add(sphere);
};

window.onload = this.init;
