import { useEffect } from "react"
import "./MuseumHomePage.css"
import Header from "../Header/Header"
import Button from "../Button/Button"
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useParams } from "react-router-dom";
import  gsap  from "gsap"
import MuseumDataArray from "../MuseumData/MuseumData"
import { Link } from "react-router-dom"
import Bot from "../Bot/Bot"
import PopUp from "../PopUp/PopUp"

// gsap.registerPlugin(useGSAP);
let mId;
const MuseumHomePage = ({ timing="9am-6pm", days="mon-sat", pricing={}, imgArray=[], videoArray=[]}) =>{

  const { museumNumber } = useParams();
  mId = museumNumber
  console.log("Museum id: ",mId)
  const museum = MuseumDataArray[mId-1] 
  function pageCoverAnimation(){
    // const tl = gsap.timeline()
    // tl.to(".pageCover", {
    //   clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    //   duration: 0.4
    // })
  }

  useEffect(() =>{
    
    /**
   * Sizes
   */
    const sizes = {
      
    }


    if(window.innerWidth>=1100){
      sizes.width = window.innerWidth/2.1
      sizes.height = window.innerHeight/1.2
    
    }else if(window.innerWidth>450 && window.innerWidth<=770){
      sizes.width = window.innerWidth/2.5
      sizes.height = window.innerHeight/3
    }else if(window.innerWidth<=450){
      sizes.width = window.innerWidth/1.5
      sizes.height = window.innerHeight/3
    }


    /**
     * Base
     */
    

    // Canvas
    const canvas = document.querySelector('canvas.webgl')

    // Scene
    const scene = new THREE.Scene()

    //loading manager
    const manager = new THREE.LoadingManager();
    // manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    //   console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    // };

    manager.onLoad = function ( ) {
      console.log( 'Loading complete!');
      pageCoverAnimation()
    };

    /**
     * Models
     */
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath("/draco/")
    const gltfLoader = new GLTFLoader(manager)
    gltfLoader.setDRACOLoader(dracoLoader)

    let mixer = null
    gltfLoader.load(
        `/3d/${mId}.glb`,
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
            console.log(mId)

            switch (mId) {
              case "0":
                gltf.scene.scale.set(0.0004, 0.0004, 0.0004)
                gltf.scene.rotation.y = -0.7
                break;
              
              case "1":
                gltf.scene.scale.set(0.2, 0.2, 0.2)
                gltf.scene.rotation.x = 0.5
                gltf.scene.rotation.y = 0.6  
                break;
              case "2":
                gltf.scene.scale.set(0.002, 0.002, 0.002)
                gltf.scene.rotation.y = 0.7
                break;
              case "3":
                gltf.scene.scale.set(0.015, 0.015, 0.015)
                gltf.scene.rotation.y = -3
                break;
              case "4":
                
                gltf.scene.scale.set(0.8, 0.8, 0.8)
                gltf.scene.rotation.y = -1.8
                break;
              case "5":
                gltf.scene.scale.set(0.45, 0.45, 0.45)
                gltf.scene.rotation.z = -0.4
                break;
              
              default:
                gltf.scene.scale.set(1, 1, 1)
                break;
            }

            //for model0
            // gltf.scene.scale.set(0.8, 0.8, 0.8)
            
            //for model1
            // gltf.scene.scale.set(0.2, 0.2, 0.2)
            // gltf.scene.rotation.x = 0.5
            // gltf.scene.rotation.y = 0.6

            //for model2
            // gltf.scene.scale.set(0.8, 0.8, 0.8)
            // gltf.scene.rotation.y = -0.2

            //for model3
            // gltf.scene.scale.set(0.015, 0.015, 0.015)
            // gltf.scene.rotation.y = -3

            //for model5
            // gltf.scene.scale.set(0.0004, 0.0004, 0.0004)
            // gltf.scene.rotation.y = -0.7


            //for model8
            // gltf.scene.scale.set(1,1,1)
            // gltf.scene.rotation.y = 2.7
            

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
    directionalLight.position.set(1, 1, 2)
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
    

    

    window.addEventListener('resize', () =>
    {
        // Update sizes
        if(window.innerWidth>=1100){
          sizes.width = window.innerWidth/2.1
          sizes.height = window.innerHeight/1.2
        }else if(window.innerWidth>450 && window.innerWidth<=768){
          sizes.width = window.innerWidth/2.5
          sizes.height = window.innerHeight/3
        }else if(window.innerWidth<=450){
          sizes.width = window.innerWidth/1.5
          sizes.height = window.innerHeight/3
        }

        
        // sizes.width = window.innerWidth/2.1
        // sizes.height = window.innerHeight/1.2

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
    controls.enableZoom = false

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
      {/* <div className="pageCover"></div> */}
      <Header />
      <div className="flex body alignC gap1 pdI2 museumMainPage">
        <div className="flexC gap2 w100">
          <h1 className="lightBold fsXl">{museum.name}</h1>
          <div className="fs1">{museum.desc}</div>
          <div className="flex alignC ticketContainer" >
            <div className="">
              <PopUp />
              {/* <Link to='/userInfoForm'><Button text="Buy Ticket" classArray="blackHover fs1"/></Link> */}
            </div>
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
      <Bot/>
    </div>
  )
}

export {mId,  MuseumHomePage }