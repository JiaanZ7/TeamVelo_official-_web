import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EngineeringExplorer } from "@/components/EngineeringExplorer";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { engineeringPhotoRows, hardParts } from "@/data/siteContent";

export default function EngineeringPage() {
  return (
    <main>
      <section className="page-hero dark">
        <div className="container split-page">
          <div>
            <p className="eyebrow dark">Engineering</p>
            <h1 className="headline page-title">A system you can trace.</h1>
          </div>
          <p className="subhead dark-copy">
            Follow the work from the screen to RTOS tasks, hardware drivers, Wi-Fi services,
            Node-RED cloud flows, signed OTA policy, release tooling, and validation evidence.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--night)", color: "var(--cream)" }}>
        <div className="container">
          <div className="section-header compact dark">
            <p className="eyebrow dark">Guided architecture map</p>
            <h2 className="headline small">Choose a path through the system.</h2>
            <p className="subhead dark-copy">
              Each route lights up the layers that made Velo more than a single-screen prototype.
            </p>
          </div>
          <EngineeringExplorer />
        </div>
      </section>

      <section className="section engineering-photo-section">
        <div className="container section-header">
          <p className="eyebrow">From board to product</p>
          <h2 className="headline small">The system has hardware evidence.</h2>
          <p className="subhead">
            PCB, signal capture, and assembly photos make the engineering path tangible before the
            page moves into the deeper failure stories.
          </p>
          <div className="proof-link-row">
            <Link className="proof-link" href="/gallery#media-board">
              Open hardware stills <ArrowRight size={15} />
            </Link>
            <Link className="proof-link" href="/gallery#release-tool-evidence">
              View release tooling <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="container photo-evidence-grid">
          {engineeringPhotoRows.map((row) => (
            <article className="photo-evidence-card" key={row.title}>
              <MediaPlaceholder
                label={row.label}
                title={row.title}
                src={row.image}
                alt={row.alt}
                minHeight={280}
              />
              <p>{row.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section hard-parts-section">
        <div className="container section-header">
          <p className="eyebrow">The hard parts we solved</p>
          <h2 className="headline small">Failures became evidence.</h2>
          <p className="subhead">
            These are the engineering stories that make Velo feel complete: not only successful
            demos, but real failure modes that were isolated, fixed, and validated.
          </p>
          <div className="proof-link-row">
            <Link className="proof-link" href="/gallery#ota-proof-reels">
              Watch validation reels <ArrowRight size={15} />
            </Link>
            <Link className="proof-link" href="/validation#release-proof-board">
              Open proof board <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="container hard-parts-list">
          {hardParts.map((part, index) => (
            <article className="hard-part-row" key={part.title}>
              <span className="moment-index">0{index + 1}</span>
              <div>
                <h3>{part.title}</h3>
                <dl>
                  <div>
                    <dt>Challenge</dt>
                    <dd>{part.challenge}</dd>
                  </div>
                  <div>
                    <dt>Resolution</dt>
                    <dd>{part.resolution}</dd>
                  </div>
                  <div>
                    <dt>Proof</dt>
                    <dd>{part.proof}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
