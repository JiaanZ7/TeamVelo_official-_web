import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { productFeatures } from "@/data/siteContent";

const useCaseSteps = [
  {
    title: "See the room before leaving",
    detail: "Time, weather, and reminder state stay in the user’s natural doorway glance path.",
  },
  {
    title: "Let the hook speak quietly",
    detail: "Hook LEDs move the reminder out of the screen and into the physical object area.",
  },
  {
    title: "Recover without drama",
    detail: "OTA, fallback, and signed release policy protect the product behavior after deployment.",
  },
];

const hardwareRoadmap = [
  "A larger display with a cleaner capacitive touch surface.",
  "A lighter hook structure that keeps strength while reducing visual weight.",
  "A more integrated enclosure using opaque, environmentally conscious materials, with only the rear cover remaining serviceable.",
  "A more advanced low-power chip platform for better energy control.",
  "A simplified sensing stack: remove ToF1, replace ToF2 with a compact infrared module integrated into the front panel.",
  "Multiple visual editions instead of a box-like shape, starting with an antler-inspired version.",
];

const familyRoadmap = [
  {
    title: "BLE 5.0 room objects",
    detail: "Future Velo devices can become lightweight connected furniture accessories instead of isolated boards.",
  },
  {
    title: "A tracking camera companion",
    detail: "The next product is planned as a smart tracking camera that can coordinate with the Velo panel.",
  },
  {
    title: "A home intelligence panel",
    detail: "After the third product, the panel can become the central brain for a small smart-furniture ecosystem.",
  },
];

export default function ProductPage() {
  return (
    <main>
      <section className="product-hero">
        <div className="container product-hero-grid">
          <div>
            <p className="eyebrow dark">Product surface</p>
            <h1 className="headline page-title">A reminder object that lives beside the door.</h1>
            <p className="subhead dark-copy">
              Velo turns weather, time, reminder state, hook LEDs, and OTA reliability into one
              quiet daily object: glance once, take what matters, and leave with confidence.
            </p>
          </div>
          <MediaPlaceholder
            label="Product in context"
            title="A daily carry reminder surface: screen, hooks, and physical objects in one frame."
            src="/media/photos/velo-installed-bag-close.jpg"
            alt="Velo installed on a whiteboard with keys and a small bag hanging below."
            tone="light"
            minHeight={520}
            priority
          />
        </div>
      </section>

      <section className="section product-feature-band">
        <div className="container">
          <div className="feature-grid">
            {productFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="feature-cell" key={feature.title}>
                  <span className="feature-icon">
                    <Icon size={20} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.summary}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section product-use-section">
        <div className="container split-page">
          <div>
            <p className="eyebrow">Use case</p>
            <h2 className="headline small">A calmer leaving routine.</h2>
            <p className="subhead">
              The current prototype is deliberately focused: one installed surface, one room
              context, one daily moment, and enough reliability to feel like a product instead of a
              classroom demo.
            </p>
          </div>
          <div className="product-use-list">
            {useCaseSteps.map((step, index) => (
              <article className="product-use-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-vision-section">
        <div className="container product-vision-grid">
          <div>
            <p className="eyebrow dark">Vision</p>
            <h2 className="headline small">From one reminder device to a light smart-furniture family.</h2>
            <p className="subhead dark-copy">
              The next direction is not to make one heavier screen. It is to connect smaller,
              softer, BLE 5.0 and IoT-enabled home objects that can cooperate around the room.
            </p>
          </div>
          <div className="future-card-grid">
            {familyRoadmap.map((item) => (
              <article className="future-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-roadmap-section">
        <div className="container split-page">
          <div>
            <p className="eyebrow">Next hardware revision</p>
            <h2 className="headline small">The next Velo should feel less like a box and more like an object.</h2>
            <p className="subhead">
              The first prototype proved the system. The next revision focuses on industrial design,
              touch quality, sensing integration, material choice, and power efficiency.
            </p>
          </div>
          <div className="roadmap-list">
            {hardwareRoadmap.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section product-mystery-section">
        <div className="container product-mystery-panel">
          <p className="eyebrow dark">Next object</p>
          <h2 className="headline small">A smart tracking camera is waiting behind the panel.</h2>
          <p className="subhead dark-copy">
            The second product is planned as a companion camera that can coordinate with Velo. The
            panel becomes the interface; the camera becomes the moving eye; together they hint at a
            future connected home system.
          </p>
        </div>
      </section>
    </main>
  );
}
