import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 1.2, 6.8);

    const gridGroup = new THREE.Group();
    gridGroup.rotation.x = -1.08;
    gridGroup.rotation.z = -0.14;
    scene.add(gridGroup);

    const planeGeometry = new THREE.PlaneGeometry(6.8, 6.8, 34, 34);
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: "#f4efe7",
      transparent: true,
      opacity: 0.18,
      wireframe: true
    });
    const grid = new THREE.Mesh(planeGeometry, gridMaterial);
    gridGroup.add(grid);

    const nodeGeometry = new THREE.SphereGeometry(0.12, 18, 18);
    const nodeMaterial = new THREE.MeshPhysicalMaterial({
      color: "#7dd3c7",
      emissive: "#7dd3c7",
      emissiveIntensity: 0.6,
      roughness: 0.18,
      metalness: 0.08,
      transparent: true,
      opacity: 0.92
    });
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
    scene.add(node);

    const markerGeometry = new THREE.TorusGeometry(0.34, 0.018, 12, 64);
    const markerMaterial = new THREE.MeshBasicMaterial({
      color: "#c96f4a",
      transparent: true,
      opacity: 0.52
    });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.rotation.x = Math.PI / 2;
    scene.add(marker);

    const ambient = new THREE.AmbientLight("#f4efe7", 0.85);
    scene.add(ambient);

    const warmLight = new THREE.PointLight("#c96f4a", 14, 18, 2);
    warmLight.position.set(-2.6, 2.4, 3.8);
    scene.add(warmLight);

    const coolLight = new THREE.PointLight("#7dd3c7", 16, 18, 2);
    coolLight.position.set(2.8, 1.8, 4.4);
    scene.add(coolLight);

    const fillLight = new THREE.DirectionalLight("#d7e8f3", 0.72);
    fillLight.position.set(0, 0, 5);
    scene.add(fillLight);

    const particleCount = 18;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const stride = index * 3;
      particlePositions[stride] = (Math.random() - 0.5) * 5.8;
      particlePositions[stride + 1] = Math.random() * 2.6 + 0.2;
      particlePositions[stride + 2] = (Math.random() - 0.5) * 1.2;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: "#f4efe7",
        size: 0.045,
        transparent: true,
        opacity: 0.26
      })
    );
    scene.add(particles);

    const basePositions = Float32Array.from(planeGeometry.attributes.position.array as ArrayLike<number>);
    const positionAttribute = planeGeometry.attributes.position as THREE.BufferAttribute;

    const updateGrid = (time: number) => {
      for (let index = 0; index < positionAttribute.count; index += 1) {
        const stride = index * 3;
        const x = basePositions[stride];
        const y = basePositions[stride + 1];
        const waveA = Math.sin(x * 1.18 + time * 0.95) * 0.22;
        const waveB = Math.cos(y * 1.42 + time * 1.08) * 0.16;
        const radial = Math.sin(Math.sqrt(x * x + y * y) * 1.8 - time * 1.2) * 0.1;
        positionAttribute.array[stride + 2] = waveA + waveB + radial;
      }

      positionAttribute.needsUpdate = true;
      planeGeometry.computeVertexNormals();
    };

    const resize = () => {
      const parent = canvas.parentElement;

      if (!parent) {
        return;
      }

      const width = parent.clientWidth;
      const height = parent.clientHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    const parent = canvas.parentElement;

    if (parent) {
      resizeObserver.observe(parent);
    }

    const pointerTarget = new THREE.Vector3(0, 0, 0);
    const pointerVelocity = new THREE.Vector3(0, 0, 0);
    const pointerCurrent = new THREE.Vector3(0, 0, 0);
    let isPointerActive = false;

    const updatePointerTarget = (clientX: number, clientY: number) => {
      if (!parent) {
        return;
      }

      const bounds = parent.getBoundingClientRect();
      const normalizedX = ((clientX - bounds.left) / bounds.width) * 2 - 1;
      const normalizedY = ((clientY - bounds.top) / bounds.height) * 2 - 1;

      pointerTarget.set(normalizedX * 1.55, -normalizedY * 0.82, normalizedX * 0.34);
      isPointerActive = true;
    };

    const handlePointerMove = (event: PointerEvent) => {
      updatePointerTarget(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      pointerTarget.set(0, 0, 0);
      isPointerActive = false;
    };

    if (parent && !prefersReducedMotion) {
      parent.addEventListener("pointermove", handlePointerMove);
      parent.addEventListener("pointerleave", handlePointerLeave);
    }

    let frameId = 0;
    const clock = new THREE.Clock();
    let elapsedTime = 0;

    const renderFrame = () => {
      const delta = Math.min(clock.getDelta(), 0.033);
      elapsedTime += delta;
      const animationTime = prefersReducedMotion ? 0 : elapsedTime;

      updateGrid(animationTime);

      const orbitBaseX = Math.sin(animationTime * 0.64) * 1.45;
      const orbitBaseY = Math.cos(animationTime * 0.52) * 0.48 + 0.55;
      const orbitBaseZ = Math.cos(animationTime * 0.64) * 0.42;

      if (!prefersReducedMotion) {
        const spring = isPointerActive ? 13.5 : 7.8;
        const damping = isPointerActive ? 0.86 : 0.88;
        const acceleration = pointerTarget.clone().sub(pointerCurrent).multiplyScalar(spring * delta);

        pointerVelocity.add(acceleration).multiplyScalar(damping);
        pointerCurrent.addScaledVector(pointerVelocity, delta * 60);
      } else {
        pointerCurrent.set(0, 0, 0);
        pointerVelocity.set(0, 0, 0);
      }

      const orbitX = orbitBaseX + pointerCurrent.x;
      const orbitY = orbitBaseY + pointerCurrent.y;
      const orbitZ = orbitBaseZ + pointerCurrent.z;

      node.position.set(orbitX, orbitY, orbitZ);
      marker.position.copy(node.position);

      if (!prefersReducedMotion) {
        gridGroup.rotation.z = -0.14 + Math.sin(elapsedTime * 0.16) * 0.04 + pointerCurrent.x * 0.05;
        gridGroup.rotation.y = pointerCurrent.x * 0.095;
        gridGroup.position.x = pointerCurrent.x * 0.22;
        particles.rotation.y = elapsedTime * 0.04;
        particles.rotation.x = pointerCurrent.y * 0.07;
        marker.rotation.z = elapsedTime * 0.45;
      }

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      if (parent) {
        parent.removeEventListener("pointermove", handlePointerMove);
        parent.removeEventListener("pointerleave", handlePointerLeave);
      }
      particleGeometry.dispose();
      (particles.material as THREE.PointsMaterial).dispose();
      nodeGeometry.dispose();
      markerGeometry.dispose();
      planeGeometry.dispose();
      nodeMaterial.dispose();
      markerMaterial.dispose();
      gridMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-scene-canvas" />;
}
