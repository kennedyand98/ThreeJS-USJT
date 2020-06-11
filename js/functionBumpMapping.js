var container = document.getElementById( "containerBumpMapping" );
var rendererB = new THREE.WebGLRenderer( {antialias: true} );
var cameraB = new THREE.PerspectiveCamera( 50, 841/594, 0.1, 10000 );
var sceneB = new THREE.Scene();

sceneB.add( cameraB );
rendererB.setSize(window.innerWidth, window.innerHeight);
container.appendChild( rendererB.domElement );

//////////////////////////////////////////////////////////

/* Textures */
THREE.crossOrigin = "";
var bmap =  new THREE.TextureLoader().load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/33170/egyptian_friz_2.png", {}, function(){});
var smap =  new THREE.TextureLoader().load("https://s3-us-west-2.amazonaws.com/s.cdpn.io/33170/specular_map.jpg", {}, function(){});


/* Camera Settings */
cameraB.position.z = 600;
cameraB.position.x = 15;
cameraB.position.y = 15;
cameraB.lookAt(new THREE.Vector3(0,0,0));

/* Lightening */
var light = new THREE.PointLight( new THREE.Color("rgb(255,70,3)"), 2.5);
var light2 = new THREE.PointLight( new THREE.Color("rgb(255,15,255)"), 4);
light.position.set( 0, -100, 1000 );
light2.position.set( 50, 50, 1000 );



/* Old Wall */
var oldMaterial = new THREE.MeshPhongMaterial({
  color      :  new THREE.Color("rgb(155,196,30)"),
  emissive   :  new THREE.Color("rgb(7,3,5)"),
  specular   :  new THREE.Color("rgb(255,113,0)"),
  shininess  :  20,
  bumpMap    :  bmap,
  map        :  smap,
  bumpScale  :  0.45,
});
var oldWall = new THREE.Mesh( new THREE.PlaneGeometry(4000,400,32,8), oldMaterial );

/* Scene */
sceneB.add( oldWall );
sceneB.add ( light );
sceneB.add ( light2 );

/* Updating Scene */
var tmp = 0;
function update() {
  cameraB.lookAt(new THREE.Vector3(1000*Math.sin(tmp),0,0));
  cameraB.position.x = 2000*Math.sin(tmp)/1.5;
  light.position.set(1000*Math.sin(tmp), 100*Math.sin(tmp), 500 );
  light2.position.set(1000*Math.sin(tmp), 100*Math.cos(tmp), 500 );
  tmp += 1/400;
}

/* Render */
function renderB() {
  requestAnimationFrame( renderB );			
  rendererB.render( sceneB, cameraB );
  update();			
}

this.renderB()