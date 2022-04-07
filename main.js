//Create scene
const scene = new THREE.Scene();

//Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight ); 
renderer.setPixelRatio(window.devicePixelRatio);                   
document.body.appendChild( renderer.domElement );



//Camera setup
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0, 1, 1);
camera.lookAt(0, 0, 0);





//Add button

const button = document.createElement("BUTTON");
button.innerHTML = "Rotate";
document.body.appendChild(button);

//Create model

const square = new THREE.BoxGeometry(1, 0.1, 1);

const lightsquare = new THREE.MeshBasicMaterial( { color: 0xE0C4A8 } );

const darksquare = new THREE.MeshBasicMaterial( { color: 0x6A4236 } );

const board = new THREE.Group();

for( let i = 0; i < 10; i++){
    for( let j = 0; j < 10; j++){
     let cube;
     if( j % 2 == 0){
       cube = new THREE.Mesh( square, i % 2 == 0 ? lightsquare : darksquare)
     }else{
      cube = new THREE.Mesh( square, i % 2 == 0 ? darksquare : lightsquare)
     }
     cube.position.set( i, 0, j);
     board.add(cube);
  }
} 

   
scene.add(board);
renderer.render( scene, camera );


//Rotation function
button.addEventListener('click', ()=>{
    board.rotation.y -= Math.PI * 0.5;
    renderer.render( scene, camera );
})
