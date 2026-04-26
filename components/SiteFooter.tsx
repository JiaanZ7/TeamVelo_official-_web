import Link from "next/link";
import { teamInfo } from "@/data/siteContent";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow dark">Team {teamInfo.number} / {teamInfo.name} / Final baseline V1.0.26</p>
          <p className="dark-copy">
            Embedded UI, secure A/B OTA, signed releases, fallback, and board-level validation.
          </p>
        </div>
        <Link href="/archive">View technical archive</Link>
      </div>
    </footer>
  );
}
