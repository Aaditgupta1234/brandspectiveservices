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
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
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

    // Camera Setup - Calibrated framing to guarantee complete silhouette visibility
    const rect = container.getBoundingClientRect();
    const width = rect.width || container.clientWidth || 360;
    const height = rect.height || container.clientHeight || 360;
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0.1, 8.4);

    // WebGL Renderer Setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.maxWidth = '100%';
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // Procedural Studio Environment Map for realistic metallic surface reflections
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement('canvas');
    envCanvas.width = 512;
    envCanvas.height = 256;
    const ctx = envCanvas.getContext('2d');
    if (ctx) {
      // Dark space gradient
      const grad = ctx.createLinearGradient(0, 0, 512, 256);
      grad.addColorStop(0, '#020409');
      grad.addColorStop(0.25, '#061330');
      grad.addColorStop(0.5, '#1e40af');
      grad.addColorStop(0.75, '#0b1633');
      grad.addColorStop(1, '#020409');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 256);

      // Luminous studio light band for crisp chamfer specular reflections
      const lightStrip = ctx.createLinearGradient(0, 90, 512, 160);
      lightStrip.addColorStop(0, 'rgba(56, 189, 248, 0)');
      lightStrip.addColorStop(0.3, 'rgba(56, 189, 248, 0.75)');
      lightStrip.addColorStop(0.5, 'rgba(217, 70, 239, 0.55)');
      lightStrip.addColorStop(0.7, 'rgba(37, 99, 235, 0.7)');
      lightStrip.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = lightStrip;
      ctx.fillRect(0, 85, 512, 75);
    }

    const envTexture = new THREE.CanvasTexture(envCanvas);
    envTexture.mapping = THREE.EquirectangularReflectionMapping;
    const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
    scene.environment = envMap;

    // Parametric Hollow Beveled Cage Cube
    // Refined dimensions: slimmer beams (T=0.38) and smooth fillets (r=0.12)
    // to reduce visual bulk and match reference's architectural, sculpted look
    const c = 1.55;     // Center offset of beams
    const T = 0.38;     // Beam thickness
    const r = 0.12;     // Bevel fillet radius
    const segs = 4;     // Smooth fillet resolution

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

    // Seamless geometric weld
    const mergedGeometry = mergeGeometries(geoms);
    const weldedGeometry = mergeVertices(mergedGeometry, 0.02);
    weldedGeometry.computeVertexNormals();

    // High-End Lacquered Sapphire Metallic Material
    // Replaces flat cartoon blue with lustrous deep cobalt sapphire, crisp highlights, and violet chamfers
    const cubeMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#14387d'),          // Deep electric cobalt sapphire base
      metalness: 0.92,                            // True metallic reflectivity
      roughness: 0.16,                            // Smooth glossy specular
      clearcoat: 0.92,                            // High-end clearcoat lacquer
      clearcoatRoughness: 0.10,
      reflectivity: 0.95,
      specularIntensity: 1.2,
      specularColor: new THREE.Color('#93c5fd'),  // Luminous specular glint along beveled edges
    });

    const cubeMesh = new THREE.Mesh(weldedGeometry, cubeMaterial);
    
    // Exact resting orientation matching reference screenshot
    const baseRotationX = 0.28;
    const baseRotationY = -0.52;
    const baseRotationZ = 0.04;

    cubeMesh.rotation.set(baseRotationX, baseRotationY, baseRotationZ);
    cubeMesh.scale.set(1.18, 1.18, 1.18);
    cubeMesh.position.set(0.18, 0, 0);

    scene.add(cubeMesh);

    // Multi-Point Cinematic Studio Lighting Rig
    // 1. Ambient Fill: Deep midnight blue
    const ambientLight = new THREE.AmbientLight(new THREE.Color('#0a1b42'), 1.8);
    scene.add(ambientLight);

    // 2. Primary Key Light: Ice Cyan from top-left-front (sharp specular reflection along vertical pillar)
    const keyLight = new THREE.DirectionalLight(new THREE.Color('#93c5fd'), 4.2);
    keyLight.position.set(-4.5, 5.5, 6.0);
    scene.add(keyLight);

    // 3. Top Blue Accent Light: Illuminating top beveled faces
    const topLight = new THREE.DirectionalLight(new THREE.Color('#60a5fa'), 2.6);
    topLight.position.set(1.5, 7.0, 2.5);
    scene.add(topLight);

    // 4. Subtle Violet Rim Light: Violet/magenta rim highlight on bottom-right beveled chamfers
    const violetRimLight = new THREE.DirectionalLight(new THREE.Color('#d946ef'), 3.2);
    violetRimLight.position.set(5.5, -4.5, -3.0);
    scene.add(violetRimLight);

    // 5. Hollow Core Glow: Soft cyan fill inside cavity
    const coreLight = new THREE.PointLight(new THREE.Color('#38bdf8'), 1.2, 7);
    coreLight.position.set(0.2, 0, 0);
    scene.add(coreLight);

    // Reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Interactive Mouse Tilt State
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

    // Smooth Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Gentle resting float (subtle breathing)
      const floatY = prefersReducedMotion ? 0 : Math.sin(elapsedTime * 0.7) * 0.05;
      const floatRotZ = prefersReducedMotion ? 0 : Math.cos(elapsedTime * 0.5) * 0.015;

      cubeMesh.position.y = floatY;

      // Inertial mouse tilt
      if (isHovering && !prefersReducedMotion) {
        targetRotationY = baseRotationY + mouseX * 0.22;
        targetRotationX = baseRotationX - mouseY * 0.16;
      } else {
        targetRotationY = baseRotationY + (prefersReducedMotion ? 0 : Math.sin(elapsedTime * 0.35) * 0.025);
        targetRotationX = baseRotationX + (prefersReducedMotion ? 0 : Math.cos(elapsedTime * 0.4) * 0.02);
      }

      // Smooth dampening
      cubeMesh.rotation.y += (targetRotationY - cubeMesh.rotation.y) * 0.05;
      cubeMesh.rotation.x += (targetRotationX - cubeMesh.rotation.x) * 0.05;
      cubeMesh.rotation.z = baseRotationZ + floatRotZ;

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Resize & Framing Calibration
    const handleResize = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const newWidth = rect.width || container.clientWidth || 360;
      const newHeight = rect.height || container.clientHeight || 360;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Controlled scale to prevent clipping across viewports
      if (newWidth < 640) {
        cubeMesh.scale.set(0.78, 0.78, 0.78);
        cubeMesh.position.set(0, 0, 0);
      } else if (newWidth < 1024) {
        cubeMesh.scale.set(0.95, 0.95, 0.95);
        cubeMesh.position.set(0.05, 0, 0);
      } else {
        cubeMesh.scale.set(1.18, 1.18, 1.18);
        cubeMesh.position.set(0.18, 0, 0);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Cleanup & GPU Resource Disposal
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      geoms.forEach((g) => g.dispose());
      mergedGeometry.dispose();
      weldedGeometry.dispose();
      cubeMaterial.dispose();
      envTexture.dispose();
      envMap.dispose();
      pmremGenerator.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full max-w-full h-[280px] sm:h-[360px] lg:h-[450px] flex items-center justify-center overflow-hidden select-none"
      aria-label="Art-directed 3D metallic cage sculpture"
      role="img"
    >
      {!isSupported && (
        <div className="text-xs text-slate-400 p-4 border border-white/10 rounded-xl bg-obsidian-900/60 backdrop-blur-md">
          Interactive preview unavailable on this device.
        </div>
      )}
    </div>
  );
};
