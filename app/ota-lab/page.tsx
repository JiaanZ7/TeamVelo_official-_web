import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OtaReleasePlayground } from "@/components/OtaReleasePlayground";

export default function OtaLabPage() {
  return (
    <main className="ota-page">
      <section className="page-hero dark">
        <div className="container split-page">
          <div>
            <p className="eyebrow dark">OTA Lab</p>
            <h1 className="headline page-title">Release. Reject. Recover.</h1>
          </div>
          <p className="subhead dark-copy">
            A clickable proof of the A/B OTA story: the device chooses the inactive slot, verifies
            signed policy, rejects bad bytes, and returns safely when a trial fails.
          </p>
        </div>
      </section>

      <section className="section ota-theater-section">
        <div className="container">
          <div className="section-header compact dark">
            <p className="eyebrow dark">Interactive release playground</p>
            <h2 className="headline small">Switch the active slot. Then choose a release outcome.</h2>
            <p className="subhead dark-copy">
              The same release policy has to behave correctly from A to B, from B to A, and under
              negative security tests.
            </p>
            <div className="proof-link-row dark">
              <Link className="proof-link" href="/gallery#ota-proof-reels">
                Watch real OTA reels <ArrowRight size={15} />
              </Link>
              <Link className="proof-link" href="/gallery#release-tool-evidence">
                View release-tool proof <ArrowRight size={15} />
              </Link>
            </div>
          </div>
          <div className="ota-theater-shell">
            <OtaReleasePlayground />
          </div>
        </div>
      </section>
    </main>
  );
}
