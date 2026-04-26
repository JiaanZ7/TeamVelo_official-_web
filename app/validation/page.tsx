import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ValidationMatrix } from "@/components/ValidationMatrix";
import { ZoomableImage } from "@/components/ZoomableImage";
import { ZoomableVideo } from "@/components/ZoomableVideo";
import {
  evidenceShots,
  validationPillars,
  validationProtocols,
} from "@/data/siteContent";

const timeline = [
  {
    version: "0.01",
    phase: "First hardware contact",
    detail: "UART visibility, ToF bring-up, and the first usable distance logs made the board observable.",
  },
  {
    version: "0.05",
    phase: "Sensor signal cleanup",
    detail: "Range status, zero readings, and 8190 mm failures became filtered sensor semantics.",
  },
  {
    version: "0.10",
    phase: "RTOS foundation",
    detail: "FreeRTOS, CPU/GDB inspection, boot-chain visibility, and task-level debugging came online.",
  },
  {
    version: "0.15",
    phase: "Dual ToF platform",
    detail: "XSHUT sequencing and I2C address control turned two same-address sensors into a usable platform.",
  },
  {
    version: "0.20",
    phase: "Display bring-up",
    detail: "HX8357D moved from white/black screens and bus timing failures into real UI graphics.",
  },
  {
    version: "0.25",
    phase: "Touch recovery",
    detail: "Dead ADC values became mapped touch input through bench tests, voltage checks, and coordinate modeling.",
  },
  {
    version: "0.30",
    phase: "Interactive prototype",
    detail: "The screen became an input surface with drawing, palette tests, erase behavior, and UI feedback.",
  },
  {
    version: "0.40",
    phase: "Product definition",
    detail: "The project became a door-side reminder device with weather context, presence sensing, and hook LEDs.",
  },
  {
    version: "0.50",
    phase: "Layered architecture",
    detail: "Drivers, screens, services, managers, storage, and UI boundaries replaced one-off demo wiring.",
  },
  {
    version: "0.60",
    phase: "Connected product",
    detail: "Wi-Fi, Node-RED time/weather/reminders, location, and NVM3 memory formed the connected path.",
  },
  {
    version: "0.70",
    phase: "Power and UX polish",
    detail: "Sleep/wake, brightness, distance behavior, settings, and recovery from display artifacts improved the product feel.",
  },
  {
    version: "0.80",
    phase: "Release discipline",
    detail: "Build, flash, GDB, serial, testbed, backup, and artifact workflows became repeatable.",
  },
  {
    version: "0.85",
    phase: "First OTA reality",
    detail: "V1.0.6 and V1.0.12 exposed manifest paths, upload directories, reboot timing, and release-state problems.",
  },
  {
    version: "0.90",
    phase: "Local A/B fallback",
    detail: "Recovery moved from cloud-side old packages toward real local A/B trial and confirmed-slot behavior.",
  },
  {
    version: "0.95",
    phase: "Slot-aware OTA",
    detail: "Active-slot detection, target inactive slot selection, and reboot persistence became the central reliability story.",
  },
  {
    version: "0.97",
    phase: "Failure defense",
    detail: "Fallback and bad-package tests proved that the system had to reject failure, not only celebrate success.",
  },
  {
    version: "0.99",
    phase: "Signed release chain",
    detail: "Ed25519 signed manifests and payload SHA-256 binding added a real release security boundary.",
  },
  {
    version: "V1.0.0",
    phase: "Official showcase story",
    detail: "The public story became one complete embedded product: sensing, UI, LEDs, OTA, fallback, security, and tooling.",
    kind: "official",
  },
  {
    version: "V1.0.16",
    phase: "Clean OTA baseline",
    detail: "A stable A-slot baseline combined stack, Wi-Fi, presence, and touch-reboot fixes for OTA validation.",
  },
  {
    version: "V1.0.17",
    phase: "A to B upgrade",
    detail: "The board validated inactive-slot installation from A into slot B after the reboot-touch path was fixed.",
  },
  {
    version: "V1.0.18",
    phase: "B to A upgrade",
    detail: "The second direction proved the release path was not hardcoded to one slot or one version pair.",
  },
  {
    version: "V1.0.19",
    phase: "Fallback and bad package",
    detail: "Dedicated negative releases demonstrated local fallback and bad-package refusal on real hardware.",
  },
  {
    version: "V1.0.20",
    phase: "Signed manifest OTA",
    detail: "A valid signed release installed and survived reset; a bad-signature manifest failed during check.",
  },
  {
    version: "V1.0.21",
    phase: "Payload hash binding",
    detail: "Firmware verified the staged payload SHA-256 against the signed manifest, then passed a positive board test.",
  },
  {
    version: "V1.0.22",
    phase: "Tampered payload rejection",
    detail: "A validly signed manifest with modified payload bytes passed check but failed install with checksum error.",
  },
  {
    version: "V1.0.23",
    phase: "Release tool integration",
    detail: "The GUI/tool flow joined A/B package generation, signing, upload, and endpoint verification.",
  },
  {
    version: "V1.0.24",
    phase: "LED and OTA coexistence",
    detail: "The install path paused hook LED I2S refresh during flash operations, keeping LED-on without destabilizing OTA.",
  },
  {
    version: "V1.0.25",
    phase: "Frozen signed baseline",
    detail: "The final stable engineering baseline froze LED-on behavior, A/B OTA, fallback, signed manifests, and release tooling.",
    kind: "official",
  },
  {
    version: "V1.0.26",
    phase: "Tool-generated proof",
    detail: "The release tool generated and uploaded A/B artifacts, and the device stayed on the signed OTA after RST.",
  },
  {
    version: "V1.0.27",
    phase: "Final negative evidence",
    detail: "Fallback, bad package, bad signature, and LED behavior were recorded as presentation-ready validation media.",
  },
];

export default function ValidationPage() {
  return (
    <main className="validation-page">
      <section className="page-hero dark validation-hero">
        <div className="container split-page">
          <div>
            <p className="eyebrow dark">Validation</p>
            <h1 className="headline page-title">Evidence before applause.</h1>
          </div>
          <p className="subhead dark-copy">
            The final story is backed by board-level tests, negative security tests, reset
            persistence, fallback recovery, and a release tool that makes the process repeatable.
          </p>
        </div>
      </section>

      <section className="section tight validation-proof-band validation-art-band">
        <div className="container validation-pillars">
          {validationPillars.map((pillar) => (
            <article className="validation-pillar" key={pillar.label}>
              <strong>{pillar.value}</strong>
              <span>{pillar.label}</span>
              <p>{pillar.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section tight validation-ledger-section validation-art-ledger" id="validation-matrix">
        <div className="container validation-ledger-layout">
          <div className="validation-ledger-main">
            <ValidationMatrix />
            <div className="timeline">
              {timeline.map((item) => (
                <article
                  className={`timeline-item ${item.kind === "official" ? "official" : ""}`}
                  key={`${item.version}-${item.phase}`}
                >
                  <div className="timeline-marker">
                    <strong>{item.version}</strong>
                    <span>{item.phase}</span>
                  </div>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="timeline-intro-panel">
            <p className="eyebrow">Release timeline</p>
            <h2>From first signal to signed release.</h2>
            <p>
              The project did not jump straight from prototype to final. The ledger keeps the
              official showcase version and the later engineering firmware releases visible
              together, so the difficulty after V1.0.0 is still part of the story.
            </p>
            <Link className="button light" href="/archive">
              View technical archive <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section validation-protocol-section validation-art-protocol">
        <div className="container section-header dark">
          <p className="eyebrow dark">Protocol</p>
          <h2 className="headline small">A release has to pass the whole chain.</h2>
          <p className="subhead dark-copy">
            The validation story is deliberately staged. A bad manifest should never reach
            install; a bad payload should never become a trial image; a bad trial should recover.
          </p>
        </div>
        <div className="container protocol-table" role="table" aria-label="Validation protocol">
          <div className="protocol-row header" role="row">
            <span>Phase</span>
            <span>Accepts</span>
            <span>Rejects</span>
            <span>Artifact</span>
          </div>
          {validationProtocols.map((protocol) => (
            <div className="protocol-row" role="row" key={protocol.phase}>
              <strong>{protocol.phase}</strong>
              <span>{protocol.accepts}</span>
              <span>{protocol.rejects}</span>
              <em>{protocol.artifact}</em>
            </div>
          ))}
        </div>
      </section>

      <section className="section evidence-section" id="release-proof-board">
        <div className="container section-header">
          <p className="eyebrow">Evidence board</p>
          <h2 className="headline small">Every critical release path has a witness.</h2>
          <p className="subhead">
            The validation set covers the normal OTA path, policy rejection, payload rejection,
            fallback recovery, release-tool output, and the LED behavior that had to survive the
            final install path.
          </p>
        </div>
        <div className="container evidence-grid-large">
          {evidenceShots.map((shot) => (
            <article className="evidence-card" key={shot.title}>
              <div className={`evidence-frame ${shot.image || shot.video ? "with-image" : "text-only"}`}>
                {shot.video ? (
                  <ZoomableVideo
                    src={shot.video}
                    poster={shot.poster}
                    title={shot.title}
                    label={shot.version}
                    buttonClassName="evidence-video-button"
                  />
                ) : shot.image ? (
                  <ZoomableImage
                    src={shot.image}
                    alt={shot.alt ?? shot.title}
                    title={shot.title}
                    label={shot.version}
                    imageClassName="evidence-image"
                    buttonClassName="evidence-image-button"
                    sizes="(max-width: 960px) 50vw, 33vw"
                  />
                ) : (
                  <span>{shot.result}</span>
                )}
              </div>
              <div className="evidence-card-body">
                <p className="eyebrow">{shot.version}</p>
                <h3>{shot.title}</h3>
                <strong>{shot.result}</strong>
                <p>{shot.detail}</p>
                <p className="capture-note">{shot.evidence}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
