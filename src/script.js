import * as dat from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { gsap } from 'gsap'

/**
 * Base
 */
// Debug
const debugObject = {}
// const gui = new dat.GUI({
//     width: 400
// })

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Overlay
 */
const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
const overlayMaterial = new THREE.ShaderMaterial({
    transparent: true,
    uniforms:
    {
        uAlpha: { value: 1 }
    },
    vertexShader: `
        void main()
        {
            gl_Position = vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform float uAlpha;

        void main()
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, uAlpha);
        }
    `
})
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
scene.add(overlay)

/**
 * Loaders
 */
let sceneReady = false
const loadingBarElement = document.querySelector('.loading-bar')

const loadingManager = new THREE.LoadingManager(
    // Loaded
    () =>
    {
        // Wait a little
        window.setTimeout(() =>
        {
            //Animate overlay  
            gsap.to(overlayMaterial.uniforms.uAlpha, { duration: 3, value: 0, delay: 1 })

            // Update loadingBarElement
            loadingBarElement.classList.add('ended')
            loadingBarElement.style.transform = ''
        }, 500)

        window.setTimeout(() =>
        {
            sceneReady = true
        }, 1000)
    },

    // Progress
    (itemUrl, itemsLoaded, itemsTotal) =>
    {
        const progressRatio = itemsLoaded / itemsTotal
        loadingBarElement.style.transform = `scaleX(${progressRatio})`
    } 
)

// Texture loader
const textureLoader = new THREE.TextureLoader(loadingManager)

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader(loadingManager)
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Textures
 */
const bakedTexture1 = textureLoader.load('baked-1.jpg')
bakedTexture1.flipY = false
bakedTexture1.colorSpace = THREE.SRGBColorSpace

const bakedTexture2 = textureLoader.load('baked-2.jpg')
bakedTexture2.flipY = false
bakedTexture2.colorSpace = THREE.SRGBColorSpace

const bakedTexture3 = textureLoader.load('baked-3.jpg')
bakedTexture3.flipY = false
bakedTexture3.colorSpace = THREE.SRGBColorSpace

const bakedTexture4 = textureLoader.load('baked-4.jpg')
bakedTexture4.flipY = false
bakedTexture4.colorSpace = THREE.SRGBColorSpace

const bakedTexture5 = textureLoader.load('baked-5.jpg')
bakedTexture5.flipY = false
bakedTexture5.colorSpace = THREE.SRGBColorSpace

const bakedTexture6 = textureLoader.load('baked-6.jpg')
bakedTexture6.flipY = false
bakedTexture6.colorSpace = THREE.SRGBColorSpace

const bakedTexture7 = textureLoader.load('baked-7.jpg')
bakedTexture7.flipY = false
bakedTexture7.colorSpace = THREE.SRGBColorSpace

const bakedTexture8 = textureLoader.load('baked-8.jpg')
bakedTexture8.flipY = false
bakedTexture8.colorSpace = THREE.SRGBColorSpace

const bakedTexture9 = textureLoader.load('baked-9.jpg')
bakedTexture9.flipY = false
bakedTexture9.colorSpace = THREE.SRGBColorSpace

/**
 * Materials
 */
// Baked material
const b1Material = new THREE.MeshBasicMaterial({ map: bakedTexture1 })

const b2Material = new THREE.MeshBasicMaterial({ map: bakedTexture2 })

const b3Material = new THREE.MeshBasicMaterial({ map: bakedTexture3 })

const b4Material = new THREE.MeshBasicMaterial({ map: bakedTexture4 })

const b5Material = new THREE.MeshBasicMaterial({ map: bakedTexture5 })

const b6Material = new THREE.MeshBasicMaterial({ map: bakedTexture6 })

const b7Material = new THREE.MeshBasicMaterial({ map: bakedTexture7 })

const b8Material = new THREE.MeshBasicMaterial({ map: bakedTexture8 })

const b9Material = new THREE.MeshBasicMaterial({ map: bakedTexture9 })

// Emissions material
const sceneLightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

/**
 * Model
 */
gltfLoader.load('dinosaurgallery-1.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b1Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('dinosaurgallery-2.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b2Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('dinosaurgallery-3.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b3Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('dinosaurgallery-4.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b4Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('dinosaurgallery-5.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b5Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('dinosaurgallery-6.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b6Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('dinosaurgallery-7.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b7Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('dinosaurgallery-8.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b8Material
        })

        scene.add(gltf.scene)
    }
)

gltfLoader.load('dinosaurgallery-9.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b9Material
        })

        scene.add(gltf.scene)
    }
)

// Emissions - find() method
gltfLoader.load('scenelight.glb',(gltf) =>
    {
        gltf.scene.traverse((child) =>
        {
            child.material = b9Material
        })

        const sceneLightMesh = gltf.scene.children.find(child => child.name === 'scenelight')

        sceneLightMesh.material = sceneLightMaterial

        scene.add(gltf.scene)
    }
)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 13.5
camera.position.y = 10
camera.position.z = 12
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true;
controls.rotateSpeed = 0.25;
controls.maxPolarAngle = Math.PI/2; 
controls.minDistance = 5;
controls.maxDistance = 20.5;
controls.enablePan = false; // Disable right click mouse

if (
    controls.getAzimuthalAngle() >= Math.PI / 4 ||
    controls.getAzimuthalAngle() <= -Math.PI / 4
  ) {
    controls.autoRotateSpeed *= -0.200;
  }
 
controls.update();

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

debugObject.clearColor = '#262626'
renderer.setClearColor(debugObject.clearColor)
// gui
//     .addColor(debugObject, 'clearColor')
//     .onChange(() =>
//     {
//         renderer.setClearColor(debugObject.clearColor)
//     })

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()