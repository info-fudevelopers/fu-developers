import { ProjectMock } from './mockups/Mockups';
import type { ProjectMockup } from '../data/projects';

function ProjectPreview({ kind }: { kind: ProjectMockup }) {
  return (
    <div className="service-scene__browser">
      <div className="service-scene__browser-bar">
        <span />
        <span />
        <span />
        <span>FU PROJECT PREVIEW</span>
      </div>
      <div className="service-scene__project">
        <ProjectMock kind={kind} />
      </div>
    </div>
  );
}

function GameScene() {
  return (
    <div className="service-scene__game">
      <span className="service-scene__game-label">GAME CONCEPT</span>
      <span className="service-scene__game-orbit" />
      <span className="service-scene__game-player" />
      <span className="service-scene__game-platform service-scene__game-platform--one" />
      <span className="service-scene__game-platform service-scene__game-platform--two" />
      <span className="service-scene__game-coin" />
      <span className="service-scene__game-ground" />
    </div>
  );
}

function AiScene() {
  return (
    <div className="service-scene__ai">
      <svg viewBox="0 0 320 190" aria-hidden="true">
        <path d="M50 95 120 45 190 75 260 35M50 95l70 50 70-70 70 80M120 45l0 100M190 75l70-40M190 75l70 80" />
      </svg>
      <span className="service-scene__ai-node service-scene__ai-node--one" />
      <span className="service-scene__ai-node service-scene__ai-node--two" />
      <span className="service-scene__ai-node service-scene__ai-node--three" />
      <span className="service-scene__ai-node service-scene__ai-node--four" />
      <span className="service-scene__ai-node service-scene__ai-node--five" />
      <span className="service-scene__ai-core">AI</span>
    </div>
  );
}

function SoftwareScene() {
  return (
    <div className="service-scene__software">
      <div className="service-scene__software-sidebar">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="service-scene__software-content">
        <span className="service-scene__software-title" />
        <span className="service-scene__software-row" />
        <span className="service-scene__software-row" />
        <span className="service-scene__software-row" />
        <span className="service-scene__software-chart">
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}

function CustomScene() {
  return (
    <div className="service-scene__custom">
      <span className="service-scene__custom-card service-scene__custom-card--back" />
      <span className="service-scene__custom-card service-scene__custom-card--middle" />
      <span className="service-scene__custom-card service-scene__custom-card--front">
        <i />
        <i />
        <i />
      </span>
      <span className="service-scene__custom-node service-scene__custom-node--one" />
      <span className="service-scene__custom-node service-scene__custom-node--two" />
    </div>
  );
}

export default function ServiceHeroVisual({ slug }: { slug: string }) {
  let visual;
  switch (slug) {
    case 'web-development':
      visual = <ProjectPreview kind="portfolio" />;
      break;
    case 'web-applications':
      visual = <ProjectPreview kind="todo" />;
      break;
    case 'mobile-apps':
      visual = (
        <div className="service-scene__phone">
          <ProjectMock kind="weather" />
        </div>
      );
      break;
    case 'games':
      visual = <GameScene />;
      break;
    case 'ai-solutions':
      visual = <AiScene />;
      break;
    case 'software':
      visual = <SoftwareScene />;
      break;
    case 'custom-development':
      visual = <CustomScene />;
      break;
    default:
      return null;
  }

  return (
    <div className={`service-scene service-scene--${slug}`} aria-hidden="true">
      {visual}
    </div>
  );
}
