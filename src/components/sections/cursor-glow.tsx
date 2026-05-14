"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [isMobile]);

  if (isMobile || !visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[100] w-[300px] h-[300px] rounded-full transition-transform duration-100 ease-out"
      style={{
        left: position.x - 150,
        top: position.y - 150,
        background:
          "radial-gradient(circle, rgba(184,212,55,0.08) 0%, rgba(184,212,55,0.02) 40%, transparent 70%)",
      }}
    />
  );
}
