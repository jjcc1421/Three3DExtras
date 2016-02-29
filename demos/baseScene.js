var scene = new THREE.Scene();
var controls;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
controls = new THREE.OrbitControls(camera);
            
//var camera = new THREE.PerspectiveCamera(50, 1/1, 1, 1000)
camera.position.z = 5;
var geo = new THREE.BoxGeometry(1, 1, 1)
var mat = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xffffff })
var box = new THREE.Mesh(geo, mat)
scene.add(box)
var render = function () {
    controls.update();
				renderer.render(scene, camera);
};
controls.addEventListener('change', render);
render();