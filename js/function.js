var scene, camera, renderer;
var geometry, material, mesh;

function Executar() {
  
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, 1, 1, 10000);
    camera.position.z = 500;

    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({  color: 0xD1A963, wireframe: true });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setClearColor(0x1F5A94);
    renderer.setSize(500, 500);

    var show = document.getElementById('container');
    
    show.appendChild(renderer.domElement);
 

    function animate() {

        requestAnimationFrame(animate);

        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        mesh.rotation.z += 0.01;

        renderer.render(scene, camera);

    }

    animate();
}

window.onload = Executar;

