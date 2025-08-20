import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MultipleString = () => {
  const stringRef = useRef(null);
  const audioRef = useRef(null);
  const paths = useRef([]);
  const stringCount = 1; // 🔢 Number of strings
  const finalPath = (y) => `M 10 ${y} Q 500 ${y} 990 ${y}`;
  let isReleased = false;

  useEffect(() => {
    const string = stringRef.current;
    const audio = audioRef.current;
    const viewBoxHeight = 200;

    const getRelativeXY = (event, isTouch = false) => {
      const rect = string.getBoundingClientRect();
      const renderedHeight = rect.height;
      const client = isTouch ? event.touches[0] : event;

      const x = client.clientX - rect.left;
      const y = ((client.clientY - rect.top) / renderedHeight) * viewBoxHeight;
      return { x, y };
    };

    const isTouchOutside = (e) => {
      const rect = string.getBoundingClientRect();
      const touch = e.touches[0];
      return (
        touch.clientX < rect.left ||
        touch.clientX > rect.right ||
        touch.clientY < rect.top ||
        touch.clientY > rect.bottom
      );
    };

    const animateToFinal = () => {
      paths.current.forEach((pathEl, i) => {
        const y = (i + 1) * (viewBoxHeight / (stringCount + 1));
        gsap.to(pathEl, {
          attr: { d: finalPath(y) },
          duration: 0.5,
          ease: "elastic.out(1, 0.2)",
        });
      });

      if (audio) {
        audio.currentTime = 0;
        audio.play().catch((e) => console.log("Sound blocked:", e));
      }
    };

    const animateToCursor = (x, y) => {
      paths.current.forEach((pathEl, i) => {
        const baseY = (i + 1) * (200 / (stringCount + 1));

        // ❗ Difference calculate karo
        const diff = y - baseY;

        // ❗ Stretch exaggerate karo by multiplying
        const stretchedY = baseY + diff * 2.5; // 2.5 = sensitivity factor

        const path = `M 10 ${baseY} Q ${x} ${stretchedY} 990 ${baseY}`;
        gsap.to(pathEl, {
          attr: { d: path },
          duration: 0.2,
          ease: "power3.out",
        });
      });
    };

    // Mouse events
    const onMouseMove = (e) => {
      const { x, y } = getRelativeXY(e);
      animateToCursor(x, y);
    };

    const onMouseLeave = () => animateToFinal();

    // Touch events
    const onTouchStart = () => (isReleased = false);
    const onTouchMove = (e) => {
      if (isReleased) return;
      const { x, y } = getRelativeXY(e, true);
      animateToCursor(x, y);
      if (isTouchOutside(e)) {
        isReleased = true;
        animateToFinal();
      }
    };
    const onTouchEnd = () => {
      if (!isReleased) {
        isReleased = true;
        animateToFinal();
      }
    };

    string.addEventListener("mousemove", onMouseMove);
    string.addEventListener("mouseleave", onMouseLeave);
    string.addEventListener("touchstart", onTouchStart);
    string.addEventListener("touchmove", onTouchMove);
    string.addEventListener("touchend", onTouchEnd);

    return () => {
      string.removeEventListener("mousemove", onMouseMove);
      string.removeEventListener("mouseleave", onMouseLeave);
      string.removeEventListener("touchstart", onTouchStart);
      string.removeEventListener("touchmove", onTouchMove);
      string.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div className="bg-white flex flex-col items-center pt-32 px-4">
      <h1 className="text-4xl font-bold text-gray-800 text-center">
        Musical Strings
      </h1>
      <p className="text-gray-500 text-center mt-2">
        "Hover" or "Touch" them to stretch and play sounds.
      </p>
      <div
        ref={stringRef}
        className="w-full max-w-[1000px] h-[400px] aspect-[5/1] mx-auto touch-none flex justify-center items-center "
      >
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full block"
        >
          {[...Array(stringCount)].map((_, i) => {
            const y = (i + 1) * (200 / (stringCount + 1));
            return (
              <path
                key={i}
                ref={(el) => (paths.current[i] = el)}
                d={`M 10 ${y} Q 500 ${y} 990 ${y}`}
                stroke="black"
                strokeWidth="2"
                fill="transparent"
              />
            );
          })}
        </svg>
        <audio ref={audioRef} src="/sound.mp3" preload="auto" />
      </div>
    </div>
  );
};

export default MultipleString;
