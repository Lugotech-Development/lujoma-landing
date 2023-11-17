<template>
  <div class="container-g" id="container">
  </div>
</template>

<script>
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight, DirectionalLightHelper, HemisphereLight,  Box3, Vector3, MathUtils } from 'three';

// loader
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default {

    mounted(){
      this.startRender();
    },

    data: () => ({
      // scene: new Scene()
    }),

    methods: {

    frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
      const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
      const halfFovY = MathUtils.degToRad(camera.fov * .6);
      const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
      // compute a unit vector that points in the direction the camera is now
      // in the xz plane from the center of the box
      const direction = (new Vector3())
          .subVectors(camera.position, boxCenter)
          .multiply(new Vector3(1, 0, 1))
          .normalize();

      // move the camera to a position distance units way from the center
      // in whatever direction the camera was from the center already
      camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

      // pick some near and far values for the frustum that
      // will contain the box.
      camera.near = boxSize / 100;
      camera.far = boxSize * 100;

      camera.updateProjectionMatrix();

      // point the camera to look at the center of the box
      camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
    },

      startRender(){

        const scene = new Scene();
        const camera = new PerspectiveCamera(75, 600 / 600, 0.1, 1000);

        const renderer = new WebGLRenderer({antialias: true, alpha: true});

        renderer.gammaOutput = true
        //renderer.setClearColor (0xffffff);

        // const hlight = new AmbientLight(0x404040);
        // scene.add(hlight)

        //renderer.setSize(window.innerWidth, window.innerHeight);
       let container = document.getElementById('container');
       //renderer.setSize(container.clientWidth, container.clientHeight);
       renderer.setSize(300, 300);

        document.querySelector('#container').appendChild(renderer.domElement)

        // const geometry = new BoxGeometry();
        // const material = new MeshBasicMaterial({ color: 0x00ff00 })
        // const cube = new Mesh(geometry, material);

        // scene.add(cube);

          const directionalLight = new DirectionalLight(0xffffff,0.5);
          directionalLight.position.set(2,1,0);
          // directionalLight.target = globe;
          directionalLight.castShadow = true;
          scene.add(directionalLight);
          // scene.add(directionalLight.target)

          // const helper = new DirectionalLightHelper(directionalLight)
          // scene.add(helper)


        const light = new HemisphereLight(0x404040, 0xFFFFFF, 0.5)
        scene.add(light);

        camera.position.z = 450;


        const loader = new GLTFLoader();

        let globe = null;

        loader.load('/models/model3/scene.gltf', (gltf) => {

          globe = gltf.scene.children[0];

          scene.add(gltf.scene);

          const root = gltf.scene;
          const box = new Box3().setFromObject(root);

          const boxSize = box.getSize(new Vector3()).length();
          const boxCenter = box.getCenter(new Vector3());

          // set the camera to frame the box
          this.frameArea(boxSize * 0.8, boxSize, boxCenter, camera);

          animate();

          this.$emit("OnGloboReady")

        }, undefined, function(err){
          console.log(err)
        })

        function animate(){
          requestAnimationFrame(animate);

           globe.rotation.x += 0.006;
           //globe.rotation.z += 0.006;
          
          renderer.render(scene, camera)
        }

        

      },

    }
}
</script>

<style lang="scss">
.container-g{
  position: relative;
  top: 0; left:0;
  height: 200px;
  width: 200px;
  //background-color: #C9A52C;
  border-radius: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  /* border: 1px solid red; */
}

// @keyframes gira {
//     from{
//         transform: rotateZ(0deg);
//     }
//     to{
//         transform: rotateZ(360deg);
//     }
// }

// .circle-border{

//     position: absolute;
//     top: 75px;
//     left: 73px;
//     height: 450px;
//     width: 450px;

//     border: 3px solid #099B7E;
//     border-radius: 50%;

//     transform: rotateZ(0deg);

//     animation-name: gira;
//     animation-duration: 10s;
//     animation-iteration-count: infinite;
//     // animation-fill-mode: forwards;
//     animation-timing-function: linear;

//     .marker{
        
//         position: absolute;
//         top: 40px; left: 40px;
//         height: 45px;
//         width: 45px;
//         //border-radius: 50%;
//         //border: 2px solid #099B7E;
//         display: flex;
//         justify-content: center;
//         align-items: center;

//         img{
//             height: 40px;
//             margin-bottom: 5px;
//             transform: rotateZ(-40deg);
//         }
    
//     }

//     .mensajero{
        
//         position: absolute;
//         bottom: 40px; right: 40px;
//         height: 45px;
//         width: 45px;
//         // border-radius: 50%;
//         // border: 2px solid #099B7E;

//         img{
//             height: 40px;
//             margin-bottom: 5px;
//             transform: rotateZ(140deg);
//         }
    
//     }
// }
</style>
