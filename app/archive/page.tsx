import {
  archiveLinks,
  archivePhotoRows,
  archiveSources,
  archiveStats,
  codeQualityRows,
  versionJourney,
} from "@/data/siteContent";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";

export default function ArchivePage() {
  return (
    <main className="archive-page">
      <section className="page-hero dark archive-hero">
        <div className="container split-page">
          <div>
            <p className="eyebrow dark">Technical archive</p>
            <h1 className="headline page-title">The record behind the result.</h1>
          </div>
          <p className="subhead dark-copy">
            Velo has a polished final surface, but the archive proves the engineering behind it:
            self-authored code scale, module boundaries, release automation, backup discipline,
            and the reconstructed 0.01 to V1.0.0 development journey.
          </p>
        </div>
      </section>

      <section className="section tight archive-stats-section">
        <div className="container archive-stats">
          {archiveStats.map((stat) => (
            <article className="archive-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
              <p>{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section archive-photo-section archive-art-section">
        <div className="container section-header">
          <p className="eyebrow">Physical development evidence</p>
          <h2 className="headline small">The build journey is visible on the bench.</h2>
          <p className="subhead">
            These photos turn the archive into more than documents: first power, measurements,
            display bring-up, and final internals show how the project was physically debugged.
          </p>
        </div>
        <div className="container photo-evidence-grid">
          {archivePhotoRows.map((row) => (
            <article className="photo-evidence-card" key={row.title}>
              <MediaPlaceholder
                label={row.label}
                title={row.title}
                src={row.image}
                alt={row.alt}
                minHeight={260}
              />
              <p>{row.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section code-quality-section archive-code-section">
        <div className="container section-header">
          <p className="eyebrow">Code quality evidence</p>
          <h2 className="headline small">The project grew into a layered codebase.</h2>
          <p className="subhead">
            The line counts are not shown as vanity numbers. They show that Velo moved beyond a
            single demo loop into separable firmware, services, hardware managers, security checks,
            and release tooling.
          </p>
        </div>
        <div className="container code-quality-table" role="table" aria-label="Code quality evidence">
          <div className="code-quality-row header" role="row">
            <span>Area</span>
            <span>Scale</span>
            <span>What it covers</span>
            <span>Quality signal</span>
          </div>
          {codeQualityRows.map((row) => (
            <div className="code-quality-row" role="row" key={row.metric}>
              <strong>{row.metric}</strong>
              <em>{row.value}</em>
              <span>{row.detail}</span>
              <span>{row.quality}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section journey-section archive-journey-section">
        <div className="container section-header">
          <p className="eyebrow">Version journey</p>
          <h2 className="headline small">From first signal to final signed release.</h2>
          <p className="subhead">
            The early 0.xx labels are a presentation timeline reconstructed from engineering
            checkpoints, backups, board evidence, and release milestones. The final engineering
            baseline is V1.0.26.
          </p>
        </div>
        <div className="container journey-list">
          {versionJourney.map((stage) => (
            <article className="journey-row" key={stage.version}>
              <strong>{stage.version}</strong>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
                <span>{stage.evidence}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tight archive-record-section">
        <div className="container section-header compact">
          <p className="eyebrow">Primary records</p>
          <h2 className="headline small">What proves this was self-developed.</h2>
        </div>
        <div className="container archive-grid">
          {archiveLinks.map((item) => {
            const Icon = item.icon;
            return (
              <article className="archive-item" key={item.title}>
                <span className="feature-icon">
                  <Icon size={20} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section archive-ledger-section">
        <div className="container section-header dark">
          <p className="eyebrow dark">Engineering ledger</p>
          <h2 className="headline small">Proof of quality, not just quantity.</h2>
          <p className="subhead dark-copy">
            This ledger focuses on reviewable engineering assets: code structure, reliability,
            security, release tooling, and traceable validation practice.
          </p>
        </div>
        <div className="container archive-ledger">
          {archiveSources.map((source) => (
            <article className="ledger-row" key={source.title}>
              <span>{source.kind}</span>
              <h3>{source.title}</h3>
              <p>{source.detail}</p>
              <code>{source.evidence}</code>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
