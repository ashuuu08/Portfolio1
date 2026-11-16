import React, { useEffect, useRef, useState } from "react";

/**
 * SignatureSculpture — Real GPU-Accelerated WebGL 3D Experience
 * Powered by Three.js (window.THREE)
 *
 * Features:
 * - Real 3D faceted dark obsidian outer polyhedron with metallic reflections
 * - Glowing Acid Yellow (#E8FF36) inner crystalline core with point-light emission
 * - Precision architectural wireframe cage and floating orbital telemetry rings
 * - Real-time mouse tracking and touch/drag inertia rotation
 * - Zero-memory-leak geometry and material disposal on unmount
 */
export default function SignatureSculpture({ className = "", height = 440 }) {
  const mountRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let cleanupFn = null;
    let pollInterval = null;

    const initThreeScene = () => {
      const THREE = typeof window !== "undefined" ? window.THREE : null;
      if (!THREE || !mountRef.current) return false;

      const container = mountRef.current;
      const width = container.clientWidth || 400;
      const h = height;

      // 1. Scene setup
      const scene = new THREE.Scene();

      // 2. Camera setup
      const camera = new THREE.PerspectiveCamera(45, width / h, 0.1, 1000);
      camera.position.z = 6.8;

      // 3. Renderer setup
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      container.innerHTML = "";
      container.appendChild(renderer.domElement);
      setIsLoaded(true);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Key directional light for metallic specular shine
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    // Cool rim light from bottom left
    const dirLight2 = new THREE.DirectionalLight(0x708090, 1.2);
    dirLight2.position.set(-6, -4, -3);
    scene.add(dirLight2);

    // Acid Yellow internal point light casting glow on facets
    const acidPointLight = new THREE.PointLight(0xe8ff36, 4.0, 12);
    acidPointLight.position.set(0, 0, 0);
    scene.add(acidPointLight);

    // 5. 3D Objects Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Outer Faceted Polyhedron (Dark Obsidian Metallic)
    const outerGeo = new THREE.IcosahedronGeometry(2.0, 0);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x161616,
      metalness: 0.88,
      roughness: 0.18,
      flatShading: true,
      transparent: true,
      opacity: 0.88,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    rootGroup.add(outerMesh);

    // Wireframe Edges Overlay (Hairline Acid Yellow)
    const edgesGeo = new THREE.EdgesGeometry(outerGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0xe8ff36,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.7,
    });
    const wireframeMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    rootGroup.add(wireframeMesh);

    // Inner Glowing Crystalline Core (Acid Yellow Octahedron)
    const innerGeo = new THREE.OctahedronGeometry(1.0, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xe8ff36,
      emissive: 0xe8ff36,
      emissiveIntensity: 0.75,
      metalness: 0.2,
      roughness: 0.1,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    rootGroup.add(innerMesh);

    // Inner Core Wireframe
    const innerEdges = new THREE.EdgesGeometry(innerGeo);
    const innerWireframe = new THREE.LineSegments(
      innerEdges,
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
    );
    innerMesh.add(innerWireframe);

    // Orbital Ring 1 (Thin telemetry orbit)
    const ringGeo1 = new THREE.TorusGeometry(3.0, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xe8ff36,
      transparent: true,
      opacity: 0.35,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    scene.add(ring1);

    // Orbital Ring 2 (Counter-angle neutral ring)
    const ringGeo2 = new THREE.TorusGeometry(3.3, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    // Surrounding Micro Floating Data Particles
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 2.4 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePos[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i + 2] = radius * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe8ff36,
      size: 0.045,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Interactive Mouse & Drag Controls
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / h) * 2 - 1);

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        targetRotationY += deltaX * 0.01;
        targetRotationX += deltaY * 0.01;
        prevMousePos = { x: e.clientX, y: e.clientY };
      } else {
        mouseX = x * 0.45;
        mouseY = y * 0.45;
      }
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - prevMousePos.x;
        const deltaY = e.touches[0].clientY - prevMousePos.y;
        targetRotationY += deltaX * 0.015;
        targetRotationX += deltaY * 0.015;
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // 7. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 400;
      camera.aspect = newWidth / h;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, h);
    };
    window.addEventListener("resize", handleResize);

    // 8. Animation Render Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle ambient spinning
      if (!isDragging) {
        targetRotationY += 0.004;
        targetRotationX += 0.0015;
      }

      // Smooth inertia lerp towards mouse & drag targets
      rootGroup.rotation.y += (targetRotationY + mouseX - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotationX + mouseY - rootGroup.rotation.x) * 0.05;

      // Inner Core counter-rotates and breathes
      innerMesh.rotation.y = -elapsedTime * 0.7;
      innerMesh.rotation.z = Math.sin(elapsedTime * 0.9) * 0.3;
      const coreScale = 1.0 + Math.sin(elapsedTime * 2.5) * 0.06;
      innerMesh.scale.set(coreScale, coreScale, coreScale);

      // Orbital rings rotate slowly
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.12;

      // Particle system gentle oscillation
      particleSystem.rotation.y = elapsedTime * 0.05;

      // Pulse acid point light
      acidPointLight.intensity = 3.5 + Math.sin(elapsedTime * 3.0) * 1.2;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Clean Lifecycle Disposal
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        container.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
        window.removeEventListener("resize", handleResize);

        // Dispose Three.js objects to prevent memory leaks
        outerGeo.dispose();
        outerMat.dispose();
        edgesGeo.dispose();
        edgesMat.dispose();
        innerGeo.dispose();
        innerMat.dispose();
        innerEdges.dispose();
        ringGeo1.dispose();
        ringMat1.dispose();
        ringGeo2.dispose();
        ringMat2.dispose();
        particleGeo.dispose();
        particleMat.dispose();
        renderer.dispose();

        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    const cleanup = initThreeScene();
    if (typeof cleanup === "function") {
      cleanupFn = cleanup;
    } else {
      pollInterval = setInterval(() => {
        if (window.THREE && mountRef.current) {
          clearInterval(pollInterval);
          cleanupFn = initThreeScene();
        }
      }, 50);
    }

    return () => {
      if (pollInterval) clearInterval(pollInterval);
      if (typeof cleanupFn === "function") cleanupFn();
    };
  }, [height]);

  return (
    <div className={`relative w-full flex items-center justify-center select-none ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute inset-0 rounded-full bg-[#E8FF36]/10 filter blur-3xl -z-10 pointer-events-none" />

      {/* 3D WebGL Canvas Mount Container */}
      <div
        ref={mountRef}
        className="w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ height }}
      />
    </div>
  );
}
