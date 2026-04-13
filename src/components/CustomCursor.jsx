import React, { useRef, useEffect } from "react";
import { gsap } from "../lib/gsap-config";

export function CustomCursor() {
  const cursorRef = useRef(null);
  const ringARef = useRef(null);
  const ringBRef = useRef(null);
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const vel = useRef({ x: 0, y: 0 });
  const scrollVel = useRef(0);
  const lastScroll = useRef(0);
  const hovering = useRef(false);
  const pressing = useRef(false);
  const hidden = useRef(true);
  const rafId = useRef(null);
  const smoothPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const ringA = ringARef.current;
    const ringB = ringBRef.current;
    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!cursor || !ringA || !ringB || !dot || !trail) return;

    let prevX = -100, prevY = -100;
    let angleA = 0, angleB = 180;
    let scaleTarget = 1;

    const onMove = (e) => {
      vel.current.x = e.clientX - prevX;
      vel.current.y = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      if (hidden.current) {
        hidden.current = false;
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
      }
    };

    const onScroll = () => {
      const delta = Math.abs(window.scrollY - lastScroll.current);
      scrollVel.current = Math.min(delta, 60);
      lastScroll.current = window.scrollY;
    };

    const onEnterInteractive = () => {
      hovering.current = true;
    };
    const onLeaveInteractive = () => {
      hovering.current = false;
    };
    const onDown = () => { pressing.current = true; };
    const onUp = () => { pressing.current = false; };
    const onLeave = () => {
      hidden.current = true;
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };

    const setupInteractives = () => {
      const els = document.querySelectorAll("a, button, [role='button'], input, textarea, select, .cursor-hover");
      els.forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
      return els;
    };

    let interactiveEls = setupInteractives();
    const observer = new MutationObserver(() => {
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      interactiveEls = setupInteractives();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    const tick = () => {
      const lerpFactor = 0.14;
      smoothPos.current.x += (pos.current.x - smoothPos.current.x) * lerpFactor;
      smoothPos.current.y += (pos.current.y - smoothPos.current.y) * lerpFactor;

      const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);
      const scrollBoost = scrollVel.current * 0.8;
      const rotSpeed = 1.2 + speed * 0.4 + scrollBoost * 0.3;

      angleA += rotSpeed;
      angleB -= rotSpeed * 0.7;

      if (hovering.current) {
        scaleTarget += (1.6 - scaleTarget) * 0.12;
      } else if (pressing.current) {
        scaleTarget += (0.7 - scaleTarget) * 0.15;
      } else {
        scaleTarget += (1 - scaleTarget) * 0.1;
      }

      const stretch = 1 + Math.min(speed * 0.008, 0.15);
      const moveAngle = Math.atan2(vel.current.y, vel.current.x) * (180 / Math.PI);

      cursor.style.transform = `translate(${smoothPos.current.x}px, ${smoothPos.current.y}px)`;

      const gapA = hovering.current ? 50 : 25 + scrollBoost * 0.5;
      const gapB = hovering.current ? 40 : 20 + scrollBoost * 0.4;

      ringA.style.transform = `rotate(${angleA}deg) scale(${scaleTarget})`;
      ringA.setAttribute("stroke-dasharray", `${180 - gapA} ${gapA}`);
      ringA.style.opacity = hovering.current ? "0.9" : "0.5";

      ringB.style.transform = `rotate(${angleB}deg) scale(${scaleTarget})`;
      ringB.setAttribute("stroke-dasharray", `${160 - gapB} ${gapB}`);
      ringB.style.opacity = hovering.current ? "0.7" : "0.3";

      const dotScale = pressing.current ? 1.8 : hovering.current ? 0.4 : 1;
      dot.style.transform = `rotate(${moveAngle + 45}deg) scale(${dotScale * stretch}, ${dotScale / stretch})`;
      dot.style.opacity = hovering.current ? "0.6" : "1";

      trail.style.transform = `rotate(${moveAngle}deg) scaleX(${Math.min(speed * 0.08, 1.5)})`;
      trail.style.opacity = `${Math.min(speed * 0.03, 0.4)}`;

      vel.current.x *= 0.88;
      vel.current.y *= 0.88;
      scrollVel.current *= 0.92;

      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      document.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      observer.disconnect();
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9998]"
      style={{ opacity: 0, willChange: "transform" }}
    >
      <svg
        width="40" height="40"
        viewBox="-20 -20 40 40"
        className="absolute -left-5 -top-5"
        style={{ overflow: "visible" }}
      >
        {/* Trail smear — velocity streak */}
        <line
          ref={trailRef}
          x1="-12" y1="0" x2="0" y2="0"
          stroke="#E8A838"
          strokeWidth="1"
          strokeLinecap="round"
          style={{ opacity: 0, transformOrigin: "center", transition: "opacity 0.1s" }}
        />

        {/* Ring A — outer arc, fast orbit */}
        <circle
          ref={ringARef}
          cx="0" cy="0" r="14"
          fill="none"
          stroke="#E8A838"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="155 25"
          style={{ transformOrigin: "center", opacity: 0.5 }}
        />

        {/* Ring B — inner arc, counter-orbit, thinner */}
        <circle
          ref={ringBRef}
          cx="0" cy="0" r="9"
          fill="none"
          stroke="#E8A838"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="140 20"
          style={{ transformOrigin: "center", opacity: 0.3 }}
        />

        {/* Center — diamond dot */}
        <rect
          ref={dotRef}
          x="-2.5" y="-2.5" width="5" height="5"
          rx="1"
          fill="#E8A838"
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </div>
  );
}
