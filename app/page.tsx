import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { HeroPhotoCarousel } from "@/components/HeroPhotoCarousel";
import { LiquidHighlights } from "@/components/LiquidHighlights";
import { homeMoments, proofPoints, teamInfo } from "@/data/siteContent";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="hero-kicker">
              <span>Embedded portfolio case study</span>
              <span>Final baseline V1.0.26</span>
            </div>
            <div>
              <h1 className="display">Velo</h1>
              <p className="hero-lede">
                A compact embedded system that remembers, updates, verifies, and recovers.
              </p>
              <p className="hero-summary">
                Built across firmware, touch UI, hook LEDs, Wi-Fi, Node-RED cloud flows, signed
                release tooling, fallback recovery, and board-level validation.
              </p>
            </div>
          </div>

          <div className="hero-media reveal">
            <HeroPhotoCarousel />
            <div className="proof-grid">
              {proofPoints.map((point) => (
                <div className="proof-tile" key={point.label}>
                  <p className="proof-value">{point.value}</p>
                  <p className="proof-label">{point.label} - {point.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <LiquidHighlights />

      <section className="section narrative-section">
        <div className="container section-header">
          <p className="eyebrow">More than a UI demo</p>
          <h2 className="headline">Update. Verify. Recover.</h2>
          <p className="subhead">
            The project is deliberately built as a complete engineering story: the device has a
            product surface, a release pipeline, a security policy, and negative tests that prove
            the system refuses unsafe updates.
          </p>
        </div>

        <div className="container moment-grid">
          {homeMoments.map((moment, index) => (
            <article className="moment-row" key={moment.title}>
              <span className="moment-index">0{index + 1}</span>
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section proof-cinema">
        <div className="container proof-cinema-grid">
          <div>
            <p className="eyebrow dark">Validation as a feature</p>
            <h2 className="headline">The impressive part is not only that it works.</h2>
            <p className="subhead dark-copy">
              It also shows what happens when a release is wrong: a forged manifest is rejected, a
              modified payload fails install, and a trial image can fall back to the confirmed slot.
            </p>
            <Link className="button primary" href="/validation">
              <Sparkles size={18} /> See proof page
            </Link>
          </div>
          <div className="evidence-stack" aria-label="Evidence highlights">
            <div className="evidence-mini success">
              <strong>V1.0.26</strong>
              <span>Signed OTA confirmed after RST</span>
            </div>
            <div className="evidence-mini reject">
              <strong>check failed</strong>
              <span>Bad manifest stopped before install</span>
            </div>
            <div className="evidence-mini warn">
              <strong>0x46</strong>
              <span>Bad payload rejected during install</span>
            </div>
            <Link className="evidence-mini link" href="/ota-lab">
              <strong>Try the OTA lab</strong>
              <span>
                Interactive release paths <ArrowRight size={15} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container team-panel">
          <div>
            <p className="eyebrow">Team</p>
            <h2 className="headline small">Built by Team {teamInfo.number}: {teamInfo.name}.</h2>
            <p className="subhead">
              A two-person embedded systems team turned the project from board bring-up into a
              validated product-style system with firmware, cloud release flow, OTA recovery, and
              presentation evidence.
            </p>
          </div>
          <div className="team-roster" aria-label="Team roster">
            {teamInfo.members.map((member, index) => (
              <article className="team-member" key={member.email}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <ul className="team-contributions">
                    {member.contributions.map((contribution) => (
                      <li key={contribution}>{contribution}</li>
                    ))}
                  </ul>
                  <a href={`mailto:${member.email}`}>
                    <Mail size={16} /> {member.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
