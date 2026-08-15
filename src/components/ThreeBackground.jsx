import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 35;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Group to hold all 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ── Object A: Particle Field ──
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 80;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      particleScales[i] = Math.random() * 1.5 + 0.5;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Particle texture canvas
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, 'rgba(245, 79, 27, 1)');
    grad.addColorStop(0.5, 'rgba(245, 79, 27, 0.4)');
    grad.addColorStop(1, 'rgba(245, 79, 27, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 16, 16);

    const texture = new THREE.CanvasTexture(canvas);
    const particleMaterial = new THREE.PointsMaterial({
      size: 1.2,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // ── Object B: Floating Construction Wireframe Cubes ──
    const cubeGroup = new THREE.Group();
    const cubeCount = 12;
    const cubes = [];

    const cubeMaterials = [
      new THREE.MeshBasicMaterial({ color: 0xf54f1b, wireframe: true, transparent: true, opacity: 0.35 }),
      new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.25 }),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0.15 }),
    ];

    for (let i = 0; i < cubeCount; i++) {
      const size = Math.random() * 3 + 1.5;
      const geometry = new THREE.BoxGeometry(size, size, size);
      const mat = cubeMaterials[i % cubeMaterials.length];
      const mesh = new THREE.Mesh(geometry, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      cubes.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        floatSpeed: Math.random() * 0.002 + 0.001,
        floatOffset: Math.random() * Math.PI * 2,
        initialY: mesh.position.y,
      });

      cubeGroup.add(mesh);
    }
    mainGroup.add(cubeGroup);

    // ── Object C: Construction Floor Grid Plane ──
    const gridHelper = new THREE.GridHelper(90, 30, 0xf54f1b, 0x1e223d);
    gridHelper.position.y = -22;
    gridHelper.rotation.x = 0.2;
    if (Array.isArray(gridHelper.material)) {
      gridHelper.material.forEach((m) => {
        m.transparent = true;
        m.opacity = 0.18;
      });
    } else {
      gridHelper.material.transparent = true;
      gridHelper.material.opacity = 0.18;
    }
    mainGroup.add(gridHelper);

    // ── Mouse Interactivity ──
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      targetMouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ── Resize Handler ──
    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth || window.innerWidth;
      const h = containerRef.current.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // ── Animation Loop ──
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate whole scene smoothly based on mouse
      mainGroup.rotation.y = mouseX * 0.15 + elapsedTime * 0.03;
      mainGroup.rotation.x = -mouseY * 0.1;

      // Animate wireframe cubes
      cubes.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.position.y = item.initialY + Math.sin(elapsedTime * 2 + item.floatOffset) * 1.5;
      });

      // Animate particles slight wave
      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const yIndex = i * 3 + 1;
        positions[yIndex] += Math.sin(elapsedTime + i) * 0.01;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // ── Cleanup on Unmount ──
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      texture.dispose();
      cubeMaterials.forEach((m) => m.dispose());
      cubes.forEach((c) => c.mesh.geometry.dispose());
      gridHelper.geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-75 dark:opacity-85"
    />
  );
};

export default ThreeBackground;
