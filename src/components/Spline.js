/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import spline from '../assets/models/spline.gltf'



export default function Model({ ...props }) {
  const group = useRef()

  let geo = useRef()

  useEffect(() => {
    console.log(geo)
  },[])


  const { nodes, materials } = useGLTF(spline)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh ref={(e) => geo = e} geometry={nodes.Sweep.geometry} material={nodes.Sweep.material} />
    </group>
  )
}

useGLTF.preload('/spline.gltf')
