
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const canvas = document.querySelector("#c");
const renderer = new THREE.WebGLRenderer({canvas, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


{
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00, opacity: 0.5 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 2;

let moveX = 0;
let moveY = 0;
let isMoving = false;
let moveUp = false;
function animate() {
    cube.rotation.y += .1;//0.01;
	cube.rotation.x += .08;
	if(isMoving) {
		// if(cube.position.x >= 6){
		// 	moveX *= -1;
		// }
		// if(cube.position.x <= -6) {
		// 	moveX *= -1;
		// }
		cube.position.x += moveX;
	}
	if(isMoving) {
		// if(cube.position.y >= 4) {
		// 	moveY *= -1;
		// }
		// if(cube.position.y <=-4) {
		// 	moveY *= -1;
		// }
		cube.position.y += moveY;
	}
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();

document.addEventListener('keydown', onDocumentKeyDown);
function onDocumentKeyDown(event) {
	console.log(event.code)
	switch(event.code) {
		case 'Space':
			isMoving=true;
			break;
		case 'ArrowLeft':
			moveX  = -0.1;
			break;
		case 'ArrowRight':
			moveX = 0.1;
			break;
		case 'ArrowUp':
			moveY = 0.1;
			break;
		case 'ArrowDown':
			moveY = -0.1;
			break;
		case 'KeyZ':
			camera.position.z += 0.1;
			break;
		case 'KeyX':
			camera.position.z -= 0.07;
			break;
	}
}

document.addEventListener('keyup', onDocumentKeyUp);
function onDocumentKeyUp(event) {
	switch(event.code) {
		case 'Space':
			isMoving=false;
			break;
		case 'ArrowLeft':
		case 'ArrowRight':
			moveX = 0;
			break;
		case 'ArrowUp':
		case 'ArrowDown':
			moveY = 0;
			break;
	}
}