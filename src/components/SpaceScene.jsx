import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function createStarField() {
  const starCount = 1800
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(starCount * 3)
  const colors = new Float32Array(starCount * 3)
  const colorA = new THREE.Color('#8bd3ff')
  const colorB = new THREE.Color('#bca6ff')

  for (let i = 0; i < starCount; i += 1) {
    const i3 = i * 3
    const radius = THREE.MathUtils.randFloat(20, 120)
    const theta = THREE.MathUtils.randFloat(0, Math.PI * 2)
    const phi = THREE.MathUtils.randFloat(0, Math.PI)

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i3 + 1] = radius * Math.cos(phi)
    positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta)

    const colorMix = THREE.MathUtils.randFloat(0, 1)
    const mixed = colorA.clone().lerp(colorB, colorMix)
    colors[i3] = mixed.r
    colors[i3 + 1] = mixed.g
    colors[i3 + 2] = mixed.b
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: 0.6,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })

  return new THREE.Points(geometry, material)
}

function SpaceScene() {
  const canvasRef = useRef(null)
  const frameRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      300
    )
    camera.position.z = 60

    const starField = createStarField()
    const starGroup = new THREE.Group()
    starGroup.add(starField)
    scene.add(starGroup)

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      mouseRef.current = { x, y }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      const { x, y } = mouseRef.current
      starGroup.rotation.y += 0.0008
      starGroup.rotation.x += 0.0004
      starGroup.rotation.y += x * 0.0006
      starGroup.rotation.x += y * 0.0006

      renderer.render(scene, camera)
      frameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      renderer.dispose()
      starField.geometry.dispose()
      starField.material.dispose()
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas ref={canvasRef} className="space-canvas" />
      <div className="space-gradient" />
      <div className="space-vignette" />
      <div className="space-grain" />
    </div>
  )
}

export default SpaceScene
