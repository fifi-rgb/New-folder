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

function createPlanetTexture() {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const gradient = ctx.createRadialGradient(size * 0.3, size * 0.3, size * 0.1, size * 0.5, size * 0.5, size * 0.65)
  gradient.addColorStop(0, '#7dd3fc')
  gradient.addColorStop(0.35, '#2563eb')
  gradient.addColorStop(0.65, '#1e3a8a')
  gradient.addColorStop(1, '#0f172a')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  ctx.globalAlpha = 0.7
  ctx.fillStyle = '#0ea5e9'
  for (let i = 0; i < 80; i += 1) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = Math.random() * 30 + 10
    ctx.beginPath()
    ctx.ellipse(x, y, r, r * 0.6, Math.random() * Math.PI, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.globalAlpha = 0.4
  ctx.fillStyle = '#f8fafc'
  for (let i = 0; i < 120; i += 1) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = Math.random() * 12 + 4
    ctx.beginPath()
    ctx.ellipse(x, y, r, r * 0.7, Math.random() * Math.PI, 0, Math.PI * 2)
    ctx.fill()
  }

  return new THREE.CanvasTexture(canvas)
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

    const ambientLight = new THREE.AmbientLight('#0f172a', 1.2)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight('#93c5fd', 1.6)
    keyLight.position.set(10, 6, 8)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight('#38bdf8', 1)
    rimLight.position.set(-10, -4, -8)
    scene.add(rimLight)

    const planetGroup = new THREE.Group()
    planetGroup.position.set(0, -6, 0)
    scene.add(planetGroup)

    const planetGeometry = new THREE.SphereGeometry(14, 64, 64)
    const planetTexture = createPlanetTexture()
    if (planetTexture) {
      planetTexture.colorSpace = THREE.SRGBColorSpace
    }
    const planetMaterial = new THREE.MeshStandardMaterial({
      map: planetTexture || undefined,
      color: planetTexture ? '#ffffff' : '#1d4ed8',
      roughness: 0.65,
      metalness: 0.1,
      emissive: '#0b1020',
      emissiveIntensity: 0.35,
    })
    const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial)
    planetMesh.rotation.z = 0.15
    planetGroup.add(planetMesh)

    const atmosphereGeometry = new THREE.SphereGeometry(14.6, 64, 64)
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: '#7dd3fc',
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    })
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    planetGroup.add(atmosphereMesh)

    const orbitRingGeometry = new THREE.TorusGeometry(22, 0.04, 16, 200)
    const orbitRingMaterial = new THREE.MeshBasicMaterial({
      color: '#38bdf8',
      transparent: true,
      opacity: 0.5,
    })
    const orbitRing = new THREE.Mesh(orbitRingGeometry, orbitRingMaterial)
    orbitRing.rotation.x = Math.PI * 0.5
    orbitRing.rotation.z = Math.PI * 0.1
    planetGroup.add(orbitRing)

    const satellitesGroup = new THREE.Group()
    planetGroup.add(satellitesGroup)

    const trailMaterial = new THREE.LineBasicMaterial({
      color: '#7dd3fc',
      transparent: true,
      opacity: 0.4,
    })

    const satelliteGeometry = new THREE.IcosahedronGeometry(0.4, 0)
    const satelliteMaterial = new THREE.MeshStandardMaterial({
      color: '#e2e8f0',
      emissive: '#38bdf8',
      emissiveIntensity: 0.6,
      roughness: 0.35,
      metalness: 0.75,
    })

    const satellites = Array.from({ length: 6 }, (_, index) => {
      const radius = 18 + index * 1.6
      const speed = 0.003 + index * 0.0006
      const tilt = THREE.MathUtils.degToRad(10 + index * 6)
      const offset = Math.random() * Math.PI * 2

      const trailGeometry = new THREE.RingGeometry(radius - 0.02, radius + 0.02, 240)
      const trailMesh = new THREE.Mesh(trailGeometry, new THREE.MeshBasicMaterial({
        color: '#22d3ee',
        transparent: true,
        opacity: 0.18,
        side: THREE.DoubleSide,
      }))
      trailMesh.rotation.x = Math.PI * 0.5
      trailMesh.rotation.z = tilt
      satellitesGroup.add(trailMesh)

      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial)
      satellitesGroup.add(satellite)

      return { radius, speed, tilt, offset, satellite, trailMesh, trailGeometry }
    })

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
      starGroup.rotation.y += 0.0007
      starGroup.rotation.x += 0.00035
      starGroup.rotation.y += x * 0.0005
      starGroup.rotation.x += y * 0.0005

      planetGroup.rotation.y += 0.0012
      planetGroup.rotation.x = THREE.MathUtils.lerp(planetGroup.rotation.x, y * 0.1, 0.03)
      planetGroup.rotation.z = THREE.MathUtils.lerp(planetGroup.rotation.z, x * 0.08, 0.03)

      satellites.forEach(({ radius, speed, tilt, offset, satellite }) => {
        const angle = performance.now() * speed * 0.001 + offset
        satellite.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius * 0.15,
          Math.sin(angle) * radius
        )
        satellite.rotation.y += 0.02
        satellite.rotation.z += 0.015
        satellite.rotateOnAxis(new THREE.Vector3(0, 0, 1), tilt * 0.0003)
      })

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
      planetGeometry.dispose()
      planetMaterial.dispose()
      atmosphereGeometry.dispose()
      atmosphereMaterial.dispose()
      orbitRingGeometry.dispose()
      orbitRingMaterial.dispose()
      satelliteGeometry.dispose()
      satelliteMaterial.dispose()
      satellites.forEach(({ trailGeometry, trailMesh }) => {
        trailGeometry.dispose()
        if (trailMesh.material) trailMesh.material.dispose()
      })
      trailMaterial.dispose()
      if (planetTexture) planetTexture.dispose()
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
