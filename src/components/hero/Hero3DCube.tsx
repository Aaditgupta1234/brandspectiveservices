import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const Hero3DCube: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    // Scene Setup
    const scene = new THREE.Scene();

    // Camera Setup with matching perspective
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 8.5);

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Build the Parametric Hollow Beveled Cage Cube
    // Dimensions calibrated to match the reference hero proportions
    const c = 1.5;      // Center offset of beams
    const T = 0.58;     // Beam thickness
    const r = 0.16;     // Bevel radius
    const segs = 5;     // Segment resolution for smooth fillets

    const geoms: THREE.BufferGeometry[] = [];

    // 8 Corner nodes
    for (const x of [-c, c]) {
      for (const y of [-c, c]) {
        for (const z of [-c, c]) {
          const corner = new RoundedBoxGeometry(T, T, T, segs, r);
          corner.translate(x, y, z);
          geoms.push(corner);
        }
      }
    }

    // 4 X-axis beams
    for (const y of [-c, c]) {
      for (const z of [-c, c]) {
        const xBeam = new RoundedBoxGeometry(2 * c, T, T, segs, r);
        xBeam.translate(0, y, z);
        geoms.push(xBeam);
      }
    }

    // 4 Y-axis beams (vertical pillars)
    for (const x of [-c, c]) {
      for (const z of [-c, c]) {
        const yBeam = new RoundedBoxGeometry(T, 2 * c, T, segs, r);
        yBeam.translate(x, 0, z);
        geoms.push(yBeam);
      }
    }

    // 4 Z-axis beams
    for (const x of [-c, c]) {
      for (const y of [-c, c]) {
        const zBeam = new RoundedBoxGeometry(T, T, 2 * c, segs, r);
        zBeam.translate(x, y, 0);
        geoms.push(zBeam);
      }
    }

    // Merge into a single seamless geometry and weld vertices for continuous normals
    const mergedGeometry = mergeGeometries(geoms);
    const weldedGeometry = mergeVertices(mergedGeometry, 0.02);
    weldedGeometry.computeVertexNormals();

    // High-fidelity Metallic Lacquer Material matching the reference screenshot
    const cubeMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1048e8'),          // Deep electric sapphire base
      emissive: new THREE.Color('#03114a'),       // Subtle deep emissive foundation
      roughness: 0.16,                            // Smooth polished gloss
      metalness: 0.88,                            // High metallic reflectivity
      clearcoat: 0.95,                            // Protective lacquer coat
      clearcoatRoughness: 0.08,                   // High specular crispness
      reflectivity: 0.95,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#38bdf8'),  // Electric cyan highlight reflection
    });

    const cubeMesh = new THREE.Mesh(weldedGeometry, cubeMaterial);
    
    // Initial orientation matching the reference screenshot:
    // Slightly rotated around Y (showing two sides) and tilted down around X (showing top face)
    const baseRotationX = 0.32;
    const baseRotationY = -0.58;
    const baseRotationZ = 0.06;

    cubeMesh.rotation.set(baseRotationX, baseRotationY, baseRotationZ);
    cubeMesh.scale.set(1.22, 1.22, 1.22);
    // Positioned slightly right and slightly down
    cubeMesh.position.set(0.65, -0.05, 0);

    scene.add(cubeMesh);

    // Sophisticated Multi-Point Lighting Rig matching the reference screenshot
    // 1. Ambient Fill: Deep midnight blue
    const ambientLight = new THREE.AmbientLight(new THREE.Color('#041038'), 2.2);
    scene.add(ambientLight);

    // 2. Primary Key Light: Intense electric cyan / ice blue from top-left-front
    const keyLight = new THREE.DirectionalLight(new THREE.Color('#38bdf8'), 4.8);
    keyLight.position.set(-5, 6, 6);
    scene.add(keyLight);

    // 3. Top Blue Accent Light: Illuminating the top horizontal beams
    const topLight = new THREE.DirectionalLight(new THREE.Color('#60a5fa'), 3.2);
    topLight.position.set(3, 8, 2);
    scene.add(topLight);

    // 4. Rim / Bounce Light: Vivid Magenta & Violet from bottom-right / rear
    // Creates the signature violet specular glow along the inner edges and bottom bevels
    const violetRimLight = new THREE.DirectionalLight(new THREE.Color('#d946ef'), 5.2);
    violetRimLight.position.set(6, -5, -3);
    scene.add(violetRimLight);

    // 5. Secondary Violet Fill: Softening shadow edges
    const purpleBounce = new THREE.PointLight(new THREE.Color('#a855f7'), 3.0, 15);
    purpleBounce.position.set(2, -3, 2);
    scene.add(purpleBounce);

    // 6. Hollow Core Point Light: Soft glowing inner core
    const coreLight = new THREE.PointLight(new THREE.Color('#00d4ff'), 2.0, 8);
    coreLight.position.set(0.65, -0.05, 0);
    scene.add(coreLight);

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse Interaction State
    let targetRotationX = baseRotationX;
    let targetRotationY = baseRotationY;
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    const handleMouseMove = (event: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const normX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = normX;
      mouseY = normY;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      mouseX = 0;
      mouseY = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Visibility Observer to pause rendering when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Subtle resting float oscillation (idle breathing)
      const floatY = prefersReducedMotion ? 0 : Math.sin(elapsedTime * 0.8) * 0.08;
      const floatRotZ = prefersReducedMotion ? 0 : Math.cos(elapsedTime * 0.6) * 0.02;

      cubeMesh.position.y = -0.05 + floatY;

      // Inertial mouse tilt
      if (isHovering && !prefersReducedMotion) {
        targetRotationY = baseRotationY + mouseX * 0.28;
        targetRotationX = baseRotationX - mouseY * 0.22;
      } else {
        targetRotationY = baseRotationY + (prefersReducedMotion ? 0 : Math.sin(elapsedTime * 0.4) * 0.04);
        targetRotationX = baseRotationX + (prefersReducedMotion ? 0 : Math.cos(elapsedTime * 0.5) * 0.03);
      }

      // Smooth dampening
      cubeMesh.rotation.y += (targetRotationY - cubeMesh.rotation.y) * 0.06;
      cubeMesh.rotation.x += (targetRotationX - cubeMesh.rotation.x) * 0.06;
      cubeMesh.rotation.z = baseRotationZ + floatRotZ;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Responsive positioning calibration
      if (newWidth < 768) {
        cubeMesh.scale.set(0.85, 0.85, 0.85);
        cubeMesh.position.set(0, -0.4, 0);
      } else if (newWidth < 1024) {
        cubeMesh.scale.set(1.05, 1.05, 1.05);
        cubeMesh.position.set(0.35, -0.1, 0);
      } else {
        cubeMesh.scale.set(1.25, 1.25, 1.25);
        cubeMesh.position.set(0.65, -0.05, 0);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Resource Cleanup & GPU Disposal
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Dispose Three.js objects
      geoms.forEach((g) => g.dispose());
      mergedGeometry.dispose();
      weldedGeometry.dispose();
      cubeMaterial.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[480px] sm:h-[560px] lg:h-[680px] flex items-center justify-center overflow-visible select-none"
      aria-label="3D metallic sculpture representing multi-dimensional brand architecture"
      role="img"
    >
      {!isSupported && (
        <div className="text-xs text-slate-400 p-4 border border-white/10 rounded-xl bg-obsidian-900/60 backdrop-blur-md">
          WebGL preview unavailable on this device.
        </div>
      )}
    </div>
  );
};

