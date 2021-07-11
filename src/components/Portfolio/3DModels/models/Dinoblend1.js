/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export default function Dinoblend(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Dinoblend1.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = 0.2 - (1 + Math.sin(t / 1.5)) / 20
    group.current.rotation.x = Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.position.y = (16 + Math.sin(t / 1.5)) / 10
  })

  const { actions } = useAnimations(animations, group)
  return (
    
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" position={[-0.36, 0.26, -0.13]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.Bone004} />
        <primitive object={nodes.Bone009} />
        <primitive object={nodes.Bone011} />
        <skinnedMesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Cube.skeleton}
        />
        
      </group>
    </group>
  )
}

useGLTF.preload('/Dinoblend1.glb')