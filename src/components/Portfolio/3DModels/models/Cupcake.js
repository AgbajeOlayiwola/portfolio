/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export default function Cupcake(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/cupcake.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.z = 0.1 - (1 + Math.sin(t / 1.5)) / 20
    group.current.rotation.x = Math.cos(t / 4) / 8
    group.current.rotation.y = Math.sin(t / 4) / 8
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} position={[0, 0.62, 0]} />
      <mesh
        geometry={nodes.Torus.geometry}
        material={materials['Material.004']}
        position={[0, 1.21, 0]}
        scale={[0.74, 0.74, 0.74]}
      />

      <mesh
        geometry={nodes.Torus012.geometry}
        material={materials['Material.007']}
        position={[-0.39, 1.04, 1.07]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.3, 0.26, 0.3]}
      />
      <mesh
        geometry={nodes.Torus001.geometry}
        material={materials['Material.008']}
        position={[0.55, 1.05, 1.06]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.3, 0.26, 0.3]}
      />
    </group>
  )
}

useGLTF.preload('/cupcake.glb')