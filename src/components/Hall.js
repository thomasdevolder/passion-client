import React, {Suspense} from 'react';
import styles from './hall.module.css'
import { Canvas, meshPhongMaterial, useFrame } from '@react-three/fiber'
import { Html, RoundedBox, useGLTF, PresentationControls, Environment, ScrollControls, Scroll } from "@react-three/drei"
import zaal from '../assets/models/zaal.gltf'
import ZaalRealOne from './ZaalRealOne'
import Spline from './Spline'

const Model = () => {
    const gltf = useGLTF(zaal, true)
    return <primitive object={gltf.scene} dispose={null} />
}

const Lights = () => {
    return(
        <ambientLight intensity={.3}></ambientLight>
    )
}

const Hall = () => {

    return(
        <main  id="canvas-container" className={styles.container}>
            <Canvas
                
                colorManagement
                camera={{position: [0, 0, 2000], fov: 75 , far: 10000}}
            >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <pointLight position={[-10, 100, 50]} />
                <pointLight position={[-40, 100, 80]} />
                <directionalLight position={[-500, 100, 100]} castShadow intensity={6}>
                    <orthographicCamera attachObject={['shadow', 'camera']} args={[-10, 10, 10, -10, 0.5, 30]} />
                </directionalLight>
                <Suspense fallback={null}>
                    <Environment preset="night" background={false}/>
                        <mesh position={[0,35,0]}>
                            <ScrollControls pages={5}>
                                 <Scroll html style={{ width: '100%' }}>
                                    <p className={styles.room}>Ingang</p>
                                    <p className={styles.room2}>Vestiare</p>
                                    <p className={styles.room2}>BAR</p>
                                    <p className={styles.room2}>dj Booth</p>
                                    <p className={styles.room2}>Toiletten</p>
                                    <p className={styles.room}>Backstage</p>
                                </Scroll>
                                 <ZaalRealOne/>
                            </ScrollControls>
                           
                        </mesh>
                       
                </Suspense>
            </Canvas>
        </main>
        
    )
}

export default Hall