
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

let moveX = 0.1;
let moveY = 0.01;
let isMoving = false;
function animate() {
    cube.rotation.y += .17;//0.01;
	if(isMoving) {
		if(cube.position.x >= 6){
			moveX *= -1;
		}
		if(cube.position.x <= -6) {
			moveX *= -1;
		}
		cube.position.x += moveX;
	}
	if(isMoving) {
		if(cube.position.y >= 4) {
			moveY *= -1;
		}
		if(cube.position.y <=-4) {
			moveY *= -1;
		}
		cube.position.y += moveY;
	}
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

document.addEventListener('keydown', onDocumentKeyDown);
function onDocumentKeyDown(event) {
	code = event.code;
	if(code == 'Space') {
		isMoving=!isMoving;
	}
}