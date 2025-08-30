"use client";

import { useEffect, useState, useCallback } from "react";
import useSound from "use-sound";

export default function useSfx() {
  const [muted, setMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // First user gesture detect (autoplay policy)
  // useSfx.tsx
  useEffect(() => {
    const onFirst = () => setHasInteracted(true);
    window.addEventListener("click", onFirst, { once: true });
    window.addEventListener("keydown", onFirst, { once: true });
    window.addEventListener("touchstart", onFirst, { once: true });
    window.addEventListener("scroll", onFirst, { once: true }); // << add this
    return () => {
      window.removeEventListener("click", onFirst);
      window.removeEventListener("keydown", onFirst);
      window.removeEventListener("touchstart", onFirst);
      window.removeEventListener("scroll", onFirst); // << cleanup
    };
  }, []);

  // Load sounds (WAV ok)
  const [rawHover] = useSound("/sounds/hover.wav", {
    volume: 0.25,
    interrupt: true,
  });
  const [rawClick] = useSound("/sounds/click.wav", {
    volume: 0.45,
    interrupt: true,
  });
  const [rawModelHover] = useSound("/sounds/whoosh.flac", {
    volume: 0.5,
    interrupt: true,
  });
  const [rawGreeting] = useSound("/sounds/voice.wav", {
    volume: 0.9,
    interrupt: true,
  });
  const [rawChime] = useSound("/sounds/chime.wav", {
    volume: 0.55,
    interrupt: true,
  });

  // Wrappers that respect mute
  const playHover = useCallback(() => {
    if (!muted)
      try {
        rawHover();
      } catch {}
  }, [muted, rawHover]);
  const playClick = useCallback(() => {
    if (!muted)
      try {
        rawClick();
      } catch {}
  }, [muted, rawClick]);
  const playModelHover = useCallback(() => {
    if (!muted)
      try {
        rawModelHover();
      } catch {}
  }, [muted, rawModelHover]);
  const playGreeting = useCallback(() => {
    if (!muted)
      try {
        rawGreeting();
      } catch {}
  }, [muted, rawGreeting]);
  const playChime = useCallback(() => {
    if (!muted)
      try {
        rawChime();
      } catch {}
  }, [muted, rawChime]);

  const toggleMute = useCallback(() => setMuted((m) => !m), []);

  const forceUnlock = () => {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new AudioContextClass();
      ctx.resume();
    } catch (err) {
      console.warn("AudioContext resume failed", err);
    }
  };

  return {
    toggleMute,

    playHover,
    playClick,
    playModelHover,
    playGreeting,
    playChime,
    forceUnlock,
  };
}
