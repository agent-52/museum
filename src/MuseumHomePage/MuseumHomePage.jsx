import { useEffect } from "react"
import "./MuseumHomePage.css"
import Header from "../Header/Header"
import Button from "../Button/Button"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useParams } from "react-router-dom";

const MuseumHomePage = ({name="Central Museum, Indore", timing="9am-6pm", days="mon-sat", description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quod vero dolorem provident accusamus, molestias beatae minima soluta consequatur voluptatem repellat aut consectetur mollitia perferendis similique ipsum delectus blanditiis explicabo?", pricing={}, imgArray=[], videoArray=[]}) =>{

  const { museum } = useParams();
  console.log(museum)

  useEffect(() =>{



    /**
     * Base
     */
    

    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    /**
     * Models
     */
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/draco/")
    const gltfLoader = new GLTFLoader()
    gltfLoader.setDRACOLoader(dracoLoader)

    let mixer = null
    gltfLoader.load(
        "/3d/15.glb",
        (gltf) => 
        {
            // mixer = new THREE.AnimationMixer(gltf.scene)
            // const action = mixer.clipAction(gltf.animations[0])
            // const action1 = mixer.clipAction(gltf.animations[1])
            // const action2 = mixer.clipAction(gltf.animations[2])
            // action.play()
            // action1.play()
            // action2.play()
            // console.log(gltf)
            // console.log(action)

            //for model3
            // gltf.scene.scale.set(5.3, 5.3, 5.3)

            //for model7
            // gltf.scene.scale.set(2.2, 2.2, 2.2)

            //for model11
            // gltf.scene.scale.set(5, 5, 5)

            //for model12
            // gltf.scene.scale.set(1.8, 1.8, 1.8)

            //for model13
            // gltf.scene.scale.set(0.4, 0.4, 0.4)

            //for model15
            gltf.scene.scale.set(6,6,6)
            gltf.scene.rotation.y = 1

            //for model16
            

            scene.add(gltf.scene)

            const model = gltf.scene;

            // Calculate the bounding box of the model (but no a single Mesh) so that the whole model is centered
            let box3 = new THREE.Box3();
            box3.expandByObject(model);

            // Assign the center point of the bounding box to the vector
            let center = new THREE.Vector3();
            box3.getCenter(center);

            // Reposition the model so that it is centered.
            model.position.x = model.position.x - center.x;
            model.position.y = model.position.y - center.y;
            model.position.z = model.position.z - center.z;

            
            
          },
            
            
        
    )

    

    /**
     * Floor
     */
    // const floor = new THREE.Mesh(
    //     new THREE.PlaneGeometry(10, 10),
    //     new THREE.MeshStandardMaterial({
    //         color: '#444444',
    //         metalness: 0,
    //         roughness: 0.5
    //     })
    // )
    // floor.receiveShadow = true
    // floor.rotation.x = - Math.PI * 0.5
    // scene.add(floor)

    /**
     * Lights
     */
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.set(1024, 1024)
    directionalLight.shadow.camera.far = 15
    directionalLight.shadow.camera.left = - 7
    directionalLight.shadow.camera.top = 7
    directionalLight.shadow.camera.right = 7
    directionalLight.shadow.camera.bottom = - 7
    directionalLight.position.set(2, 2, 2)
    scene.add(directionalLight)

    // const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1)
    // directionalLight1.castShadow = true
    // directionalLight1.shadow.mapSize.set(1024, 1024)
    // directionalLight1.shadow.camera.far = 15
    // directionalLight1.shadow.camera.left = - 7
    // directionalLight1.shadow.camera.top = 7
    // directionalLight1.shadow.camera.right = 7
    // directionalLight1.shadow.camera.bottom = - 7
    // directionalLight1.position.set(3, 3, 3)
    // scene.add(directionalLight1)

    const hemiSphericalLight = new THREE.HemisphereLight("white", "white", 1)
    scene.add(hemiSphericalLight)

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth/2.1,
        height: window.innerHeight/1.2
    }

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth/2.1
        sizes.height = window.innerHeight/1.2

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
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    camera.position.set(2, 2, 2)
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.target.set(0, 0, 0)
    controls.enableDamping = true

    //horizontal only
    controls.minPolarAngle = Math.PI/2;
    controls.maxPolarAngle = Math.PI/2;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true
    })
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    /**
     * Animate
     */
    const clock = new THREE.Clock()
    let previousTime = 0

    const tick = () =>
    {
        const elapsedTime = clock.getElapsedTime()
        const deltaTime = elapsedTime - previousTime
        previousTime = elapsedTime

        //Update mixer
        // if(mixer !== null){
        //     mixer.update(deltaTime)
        // }
      

        // Update controls
        controls.update() 

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()

  })

  return(
    <div className="overflowXH">
      <Header />
      <div className="gridSection1 body placeC pdI3">
        <div className="flexC gap2 w100">
          <h1 className="lightBold fsXl">{name}</h1>
          <div className="fs1">{description}</div>
          <div className="flex alignC gap4 ">
            <Button text="Buy Ticket" classArray="blackHover fs1"/>
            <div className="flex gap2">
              <div className="flexC gap00">
                <div className="bold">Days</div>
                <div>{days}</div>
              </div>
              <div className="flexC gap00">
                <div className="bold">Time</div>
                <div>{timing}</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" placeC canvasContainer">
          <canvas className="webgl"></canvas>
          
        </div>
      </div>

    </div>
  )
}

export default MuseumHomePage