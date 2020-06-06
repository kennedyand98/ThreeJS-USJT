var scene;
var camera;
var renderer;
var sphere;
var controls;
var usjt;

var init = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  var gridXZ = new THREE.GridHelper(100, 10);
  gridXZ.setColors(new THREE.Color(0xff0000), new THREE.Color(0xffffff));
  scene.add(gridXZ);

  controls.update();
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
  sphere.rotation.y += 0.01;
  usjt.rotation.y -= 0.03;
};

var createAEsphere = () => {
  let geometry = new THREE.SphereGeometry(12, 32, 32);
  let material = this.createMaterial();
  sphere = new THREE.Mesh(geometry, material);
  sphere.name - "mySphere";
  sphere.position.set(0, 12, 0);

  let Usjtgeometry = new THREE.SphereGeometry(7, 32, 32);
  let Usjtmaterial = this.createMaterialUsjt();
  usjt = new THREE.Mesh(Usjtgeometry, Usjtmaterial);
  usjt.name - "SãoJudas";
  usjt.position.set(30, 12, 0);

  scene.add(sphere);
  scene.add(usjt);
};

var createMaterial = () => {
  let sphereTexture = new THREE.TextureLoader().load(
    "assets/images/textura-terra.jpg"
  );
  let sphereMaterial = new THREE.MeshBasicMaterial({ map: sphereTexture });
  return sphereMaterial;
};
var createMaterialUsjt = () => {
  let sphereTexture = new THREE.TextureLoader().load(
    "assets/images/usjt_logo.png"
  );
  let sphereMaterialUsjt = new THREE.MeshBasicMaterial({ map: sphereTexture });
  return sphereMaterialUsjt;
};

window.onload = this.init;
