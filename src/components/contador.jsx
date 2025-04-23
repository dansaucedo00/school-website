import { useEffect, useRef, useState } from "react";

export function Contador({ final, texto, icono }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const duration = 2000; // en milisegundos
    const frameRate = 30; // 30 actualizaciones por segundo
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let currentFrame = 0;

    const interval = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      const currentValue = Math.round(progress * final);

      if (currentFrame >= totalFrames) {
        setCount(final);
        clearInterval(interval);
      } else {
        setCount(currentValue);
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [visible, final]);

  return (
    <div className="contador" ref={ref}>
      <div className="contador-icon">{icono}</div>
      <h2>+{count}</h2>
      <p>{texto}</p>
    </div>
  );
}
