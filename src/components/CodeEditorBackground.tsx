import { useEffect, useState } from 'react';

export default function CodeEditorBackground() {
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoUrl = (import.meta.env.VITE_HERO_VIDEO_URL ?? '').trim();
  const posterUrl = (import.meta.env.VITE_HERO_VIDEO_POSTER ?? '').trim();

  useEffect(() => {
    const media = window.matchMedia(
      '(min-width: 768px) and (prefers-reduced-motion: no-preference)',
    );
    const updateMotionPreference = () => setMotionAllowed(media.matches);
    updateMotionPreference();
    media.addEventListener('change', updateMotionPreference);
    return () => media.removeEventListener('change', updateMotionPreference);
  }, []);

  const showVideo = Boolean(videoUrl && motionAllowed && !videoFailed);

  return (
    <div className="hero-media" aria-hidden="true">
      {posterUrl && (
        <img className="hero-media__poster" src={posterUrl} alt="" fetchPriority="high" />
      )}
      {showVideo && (
        <video
          className="hero-media__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterUrl || undefined}
          onError={() => {
            console.error('The configured FU DEVELOPERS hero video could not be loaded.');
            setVideoFailed(true);
          }}
        >
          <source src={videoUrl} />
        </video>
      )}
      <div className="hero-media__overlay" />
    </div>
  );
}
