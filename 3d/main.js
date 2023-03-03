
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import "./style.css";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import gsap from "gsap";

//Scene
const scene=new THREE.Scene();

//geometry



const geometry=new THREE.SphereGeometry(3,64,64);

//material :is how it looks like

const material=new THREE.MeshStandardMaterial({
  color:"#00ff83",

})

//mesh:is combinatin of material and geometry

const mesh=new THREE.Mesh(geometry,material);
scene.add(mesh);
//
const sizes={
   width:window.innerWidth,
   height:window.innerHeight,
}

//light

// const light=new THREE.DirectionalLight(0xffff,1,100);
// light.position.set=(0,10,10)
// scene.add(light)
const light=new THREE.PointLight(0xffff,1,100);
light.position.z=(0,10,10)
scene.add(light)
//camera
const camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 1, 100 );
camera.position.z=20
scene.add(camera);





const canvas=document.querySelector('.webgl');

const renderer = new THREE.WebGLRenderer({canvas});
			renderer.setSize( sizes.width, sizes.height );
			renderer.setPixelRatio(2)
    renderer.render(scene,camera);


window.addEventListener("resize",()=>{
  sizes.width=window.innerWidth
  sizes.height=window.innerHeight
  camera.updateProjectionMatrix()
  //camera.aspect=sizes.width/sizes.height
  renderer.setSize(sizes.width,sizes.height)
})
//controls

const controls=new OrbitControls(camera,canvas);
controls.enableDamping=true;
controls.enablePan=false
controls.enableZoom=false
controls.autoRotate=true
controls.autoRotateSpeed=1


const loop =()=>{
  // mesh.position.x+=0.1
  controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(loop)
}
loop()


//Time line magin


const t1=gsap.timeline({defaults:{duration:1}})
t1.fromTo(mesh.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})
t1.from('nav',{y:"-100%"},{x:"0%"});
t1.fromTo(".title",{opacity:0},{opacity:1});

//mouse animation

let mouseDown=false
let rgb=[]
window.addEventListener("mousedown",()=>(mouseDown=true))
window.addEventListener("mousedown",()=>(mouseDown=true))


window.addEventListener("mousemove",(e)=>{
  if(mouseDown){
    rgb=[
      Math.round((e.pageX/sizes.width)*255),
      Math.round((e.pageX/sizes.height)*255),
      150,
    ]
    let newColor=new THREE.Color(`rgb(${rgb.join(",")})`);
    gsap.to(mesh.material.color,
      {r:newColor.r,
      g:newColor.g,
      b:newColor.b,
    })
  }
})


















