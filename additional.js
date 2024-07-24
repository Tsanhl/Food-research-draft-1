import * as THREE from "three"; 
import './style.css'
import gsap from "gsap"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Scene
const scene = new THREE.Scene()

// Create custom IcosahedronGeometry
class CustomIcosahedronGeometry extends THREE.PolyhedronGeometry {
  constructor(radius = 1, detail = 0) {
    const t = (1 + Math.sqrt(5)) / 2;

    const vertices = [
      -1, t, 0, 1, t, 0, -1, -t, 0, 1, -t, 0,
      0, -1, t, 0, 1, t, 0, -1, -t, 0, 1, -t,
      t, 0, -1, t, 0, 1, -t, 0, -1, -t, 0, 1
    ];

    const indices = [
      0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11,
      1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8,
      3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
      4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1
    ];

    super(vertices, indices, radius, detail);

    this.type = 'CustomIcosahedronGeometry';

    this.parameters = {
      radius: radius,
      detail: detail
    };
  }

  static fromJSON(data) {
    return new CustomIcosahedronGeometry(data.radius, data.detail);
  }
}

// Sizes 
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

// Lights
// Point light
const pointLight = new THREE.PointLight(0xffff, 10, 50)
pointLight.position.set(0, 0, 10)
pointLight.intensity = 2
scene.add(pointLight)

// Ambient light
const ambientLight = new THREE.AmbientLight(0xffff, 1)
scene.add(ambientLight)

// Additional light for more illumination
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(8, 5, 5)
scene.add(directionalLight)

// Camera
const camera = new THREE.PerspectiveCamera(
  45, 
  sizes.width / sizes.height, 
  0.1, 
  100
)
camera.position.z = 20
scene.add(camera)

// Renderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.render(scene, camera)

// Controls 
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.enablePan = false
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 5

// Create and add mesh
const geometry = new CustomIcosahedronGeometry(3, 0)
const material = new THREE.MeshStandardMaterial({
  color: "#",
  roughness: 0.8,
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Resize
window.addEventListener('resize', () => {
  // Update Sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  // Update Camera
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(window.devicePixelRatio)
})

const loop = () => {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
}
loop()

// Timeline magic
const tl = gsap.timeline({ defaults: { duration: 1 }})
tl.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })
tl.fromTo('nav', { y: "-100%" }, { y: "0%" })
tl.fromTo('.title', { opacity: 0 }, { opacity: 1 })

// Mouse Animation Color
let mouseDown = false
let rgb = [12, 23, 55]

window.addEventListener("mousedown", () => (mouseDown = true))
window.addEventListener("mouseup", () => (mouseDown = false))

window.addEventListener('mousemove', (e) => {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.height) * 255), 
      150
    ]
    // Let's animate
    let newColor = new THREE.Color(`rgb(${rgb.join(",")})`)
    gsap.to(mesh.material.color, {
      r: newColor.r, 
      g: newColor.g, 
      b: newColor.b,
    })
  }
})