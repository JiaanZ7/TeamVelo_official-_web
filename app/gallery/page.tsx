import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { MediaProofCard } from "@/components/MediaProofCard";
import {
  finalDemoMedia,
  galleryItems,
  galleryStoryRows,
  productWorkflowMedia,
  releaseToolMedia,
  updateProofMedia,
} from "@/data/siteContent";

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      <section className="page-hero dark gallery-hero">
        <div className="container split-page">
          <div>
            <p className="eyebrow dark">Gallery</p>
            <h1 className="headline page-title">The shots that make it real.</h1>
          </div>
          <p className="subhead dark-copy">
            A curated evidence reel for the physical product, release pipeline, validation videos,
            and the hardware path behind the final Velo baseline.
          </p>
        </div>
      </section>

      <section className="section tight gallery-story-section">
        <div className="container gallery-storyboard">
          {galleryStoryRows.map((row) => (
            <article className="storyboard-row" id={row.id} key={row.chapter}>
              <span>{row.chapter}</span>
              <div>
                <h2>{row.title}</h2>
                <dl>
                  <div>
                    <dt>Exhibit</dt>
                    <dd>{row.available}</dd>
                  </div>
                  <div>
                    <dt>Evidence</dt>
                    <dd>{row.capture}</dd>
                  </div>
                  <div>
                    <dt>Why it matters</dt>
                    <dd>{row.proof}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section final-demo-section gallery-media-section" id="final-narrated-demo">
        <div className="container section-header compact">
          <p className="eyebrow">Final narrated demo</p>
          <h2 className="headline small">The whole project, shown end to end.</h2>
          <p className="subhead">
            This is the complete presentation recording for reviewers who want the full Velo
            story in one place: product behavior, cloud flow, signed OTA, fallback, and validation.
          </p>
        </div>
        <div className="container media-proof-grid featured single">
          {finalDemoMedia.map((item) => (
            <MediaProofCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section product-workflow-section gallery-media-section" id="product-workflow-reel">
        <div className="container section-header compact">
          <p className="eyebrow">Product workflow</p>
          <h2 className="headline small">The device behaves in the room.</h2>
          <p className="subhead">
            This reel keeps the product proof separate from the OTA lab: screen, installation
            context, and physical hook behavior appear as one finished embedded system.
          </p>
        </div>
        <div className="container media-proof-grid featured">
          {productWorkflowMedia.map((item) => (
            <MediaProofCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section update-proof-section gallery-media-section dark-gallery-strip" id="ota-proof-reels">
        <div className="container section-header compact">
          <p className="eyebrow">Update proof reels</p>
          <h2 className="headline small">Five recordings that make the OTA story tangible.</h2>
          <p className="subhead">
            The update story is shown under real device conditions: success, fallback, signed-policy
            rejection, bad-package rejection, and timeout handling.
          </p>
        </div>
        <div className="container media-proof-grid featured">
          {updateProofMedia.map((item) => (
            <MediaProofCard item={item} key={item.title} />
          ))}
        </div>
      </section>

      <section className="section tight gallery-board-section" id="media-board">
        <div className="container section-header compact">
          <p className="eyebrow">Media board</p>
          <h2 className="headline small">Seven stills that widen the engineering story.</h2>
        </div>
        <div className="container gallery-grid">
          {galleryItems.map((item) => (
            <MediaPlaceholder
              id={item.id}
              key={item.title}
              label={item.label}
              title={item.title}
              src={item.image}
              alt={item.alt}
              tone={item.tone === "light" ? "light" : "dark"}
              minHeight={280}
            />
          ))}
        </div>
      </section>

      <section className="section release-tool-proof-section gallery-media-section" id="release-tool-evidence">
        <div className="container section-header compact">
          <p className="eyebrow">Release-tool evidence</p>
          <h2 className="headline small">The build, upload, and cloud trail is visible.</h2>
          <p className="subhead">
            The desktop tool and Node-RED backend turn the project into a repeatable release
            system instead of a hand-built firmware demo.
          </p>
        </div>
        <div className="container media-proof-grid release-chain-grid">
          {releaseToolMedia.map((item) => (
            <MediaProofCard item={item} key={item.title} />
          ))}
        </div>
      </section>

    </main>
  );
}
