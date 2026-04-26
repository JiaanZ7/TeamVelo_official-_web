import {
  Braces,
  CheckCircle2,
  Cloud,
  Cpu,
  FileCheck2,
  GalleryVerticalEnd,
  HardDrive,
  Layers3,
  Lightbulb,
  Radio,
  RotateCcw,
  ShieldCheck,
  TerminalSquare,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type ProofPoint = {
  label: string;
  value: string;
  detail: string;
};

export type TeamMember = {
  name: string;
  email: string;
  role: string;
  contributions: string[];
};

export type TeamInfo = {
  number: string;
  name: string;
  members: TeamMember[];
};

export type ProductFeature = {
  title: string;
  summary: string;
  icon: LucideIcon;
};

export type EngineeringNode = {
  id: string;
  title: string;
  layer: string;
  summary: string;
  files: string[];
};

export type EngineeringPath = {
  id: string;
  label: string;
  headline: string;
  summary: string;
  nodeIds: string[];
};

export type OtaScenario = {
  id: string;
  label: string;
  headline: string;
  description: string;
  finalState: string;
  gates: Array<{
    label: string;
    state: "pass" | "reject" | "skip" | "recover";
    detail: string;
  }>;
};

export type ValidationRow = {
  id: string;
  test: string;
  result: string;
  version: string;
  evidence: string;
  why: string;
};

export type EvidenceShot = {
  title: string;
  result: string;
  version: string;
  evidence: string;
  detail: string;
  galleryHref?: string;
  image?: string;
  video?: string;
  poster?: string;
  alt?: string;
};

export type HardPart = {
  title: string;
  challenge: string;
  resolution: string;
  proof: string;
};

export type ValidationPillar = {
  value: string;
  label: string;
  detail: string;
};

export type ValidationProtocol = {
  phase: string;
  accepts: string;
  rejects: string;
  artifact: string;
};

export type GalleryStoryRow = {
  id: string;
  chapter: string;
  title: string;
  available: string;
  capture: string;
  proof: string;
  href: string;
};

export type PhotoEvidenceRow = {
  label: string;
  title: string;
  detail: string;
  image: string;
  alt: string;
};

export type MediaProof = {
  id: string;
  title: string;
  label: string;
  result: string;
  detail: string;
  src: string;
  type: "image" | "video";
  poster?: string;
  alt?: string;
  hasAudio?: boolean;
};

export type ArchiveStat = {
  value: string;
  label: string;
  detail: string;
};

export type VersionJourneyStage = {
  version: string;
  title: string;
  detail: string;
  evidence: string;
};

export type ArchiveSource = {
  title: string;
  kind: string;
  detail: string;
  evidence: string;
};

export type CodeQualityRow = {
  metric: string;
  value: string;
  detail: string;
  quality: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "Engineering", href: "/engineering" },
  { label: "OTA Lab", href: "/ota-lab" },
  { label: "Validation", href: "/validation" },
  { label: "Gallery", href: "/gallery" },
];

export const proofPoints: ProofPoint[] = [
  {
    label: "Release model",
    value: "A/B",
    detail: "Slot-aware inactive-slot release flow",
  },
  {
    label: "Manifest security",
    value: "Ed25519",
    detail: "Signed manifest and payload hash binding",
  },
  {
    label: "Frozen baseline",
    value: "V1.0.26",
    detail: "Signed tool-generated release with reset proof",
  },
];

export const teamInfo: TeamInfo = {
  number: "12",
  name: "Velo",
  members: [
    {
      name: "Jiaan Zhang",
      email: "jiaanz7@seas.upenn.edu",
      role: "Led the system from board bring-up to final release proof",
      contributions: [
        "Designed and debugged the PCB, brought up the board, integrated LCD, touch, ToF, and hook LEDs, and turned signal checks into hardware evidence.",
        "Built the firmware architecture, RTOS flow, product UI, Wi-Fi, weather, reminder services, storage behavior, and hook LED control.",
        "Completed the A/B OTA system, fallback recovery, Ed25519 signed manifests, payload hash binding, Node-RED release flow, Velo OTA Release Tool, validation gallery, and showcase site.",
      ],
    },
    {
      name: "Tiancheng Pu",
      email: "ptc1018@seas.upenn.edu",
      role: "Supported the physical build and enclosure path",
      contributions: [
        "Supported PCB name/label placement and selected wiring-debug work during hardware bring-up.",
        "Designed, cut, and assembled the enclosure support structure for the final physical device.",
      ],
    },
  ],
};

export const homeMoments = [
  {
    title: "A real product surface",
    detail: "Touch UI, weather context, Wi-Fi setup, reminder state, and hook LEDs work as one door-side experience.",
  },
  {
    title: "A release system, not a demo button",
    detail: "The desktop tool builds slot A and slot B packages, signs manifests, uploads to cloud, and verifies both latest endpoints.",
  },
  {
    title: "A failure story with evidence",
    detail: "Bad signatures, bad payloads, fallback, reset persistence, network timeout, and the LED/OTA interaction fix are documented.",
  },
];

export const productFeatures: ProductFeature[] = [
  {
    title: "Door-side glance",
    summary: "Velo shows time, weather, and reminder context where the user naturally checks before leaving.",
    icon: Lightbulb,
  },
  {
    title: "Touch UI",
    summary: "A compact embedded screen exposes Wi-Fi, weather, brightness, OTA, and settings flows.",
    icon: Zap,
  },
  {
    title: "Hook LEDs",
    summary: "Physical hook lights map reminders from the interface into the environment.",
    icon: Radio,
  },
  {
    title: "Cloud-aware",
    summary: "Node-RED flows provide weather, release manifests, and validation endpoints.",
    icon: Cloud,
  },
];

export const engineeringNodes: EngineeringNode[] = [
  {
    id: "ui",
    title: "Product UI",
    layer: "Experience",
    summary: "Screen flows for weather, settings, Wi-Fi, OTA, and reminder state.",
    files: ["ui/ui_app.c", "screens/screen_home.c", "screens/screen_update.c"],
  },
  {
    id: "rtos",
    title: "RTOS Tasks",
    layer: "Runtime",
    summary: "Separate UI, touch, LED, and service processing paths keep the device responsive.",
    files: ["app.c", "app_power.c"],
  },
  {
    id: "drivers",
    title: "Drivers",
    layer: "Hardware",
    summary: "LCD, touch, hook LED I2S, ToF, GPIO, and backlight control.",
    files: ["drivers/lcd_driver.c", "drivers/touch_driver.c", "managers/hook_led_manager.c"],
  },
  {
    id: "services",
    title: "Services",
    layer: "Domain",
    summary: "Weather, presence, time, location, storage, and OTA service boundaries.",
    files: ["services/node_red_service.c", "services/weather_service.c", "services/ota_ab_service.c"],
  },
  {
    id: "cloud",
    title: "Node-RED Cloud",
    layer: "Cloud",
    summary: "Manifest selection, fw/check, weather data, and release response shaping.",
    files: ["resources/node_red/Select OTA manifest file.json"],
  },
  {
    id: "ota",
    title: "A/B OTA",
    layer: "Recovery",
    summary: "Inactive-slot download, trial boot, confirmation, and fallback behavior.",
    files: ["services/ota_ab_service.c", "fallback/m4_fw_updater.c"],
  },
  {
    id: "security",
    title: "Signed Manifest",
    layer: "Security",
    summary: "Ed25519 verification plus signed payload SHA256 binding.",
    files: ["services/ota_manifest_verify.c", "services/ota_payload_hash.c", "third_party/ed25519"],
  },
  {
    id: "tooling",
    title: "Release Tool",
    layer: "Tooling",
    summary: "Desktop GUI builds A/B packages, signs manifests, uploads, and verifies cloud state.",
    files: ["T12_OTA_Release_Tool/release_tool_gui.py", "T12_Velo_release_kit/tools/release_ota.py"],
  },
  {
    id: "validation",
    title: "Validation Evidence",
    layer: "Proof",
    summary: "Final matrix covers OTA success, bad manifest, bad payload, fallback, and reset persistence.",
    files: ["docs/t12_final_stable_baseline_20260424_v1.md"],
  },
];

export const engineeringPaths: EngineeringPath[] = [
  {
    id: "product",
    label: "Product Path",
    headline: "Touch, screen, and physical hook LEDs operate as one product surface.",
    summary: "This path shows how the interface reaches out of the display and into the physical hooks.",
    nodeIds: ["ui", "rtos", "drivers"],
  },
  {
    id: "cloud",
    label: "Cloud Path",
    headline: "Wi-Fi and Node-RED turn device state into live weather and release decisions.",
    summary: "This path connects the embedded UI to external data while keeping cached local behavior.",
    nodeIds: ["services", "cloud", "ui"],
  },
  {
    id: "ota",
    label: "OTA Path",
    headline: "The release pipeline chooses the inactive slot and protects the update policy.",
    summary: "This path follows the release tool through signed manifests and A/B trial boot.",
    nodeIds: ["tooling", "security", "ota", "services"],
  },
  {
    id: "validation",
    label: "Validation Path",
    headline: "Failures were turned into proof: fallback, rejection, and reset persistence.",
    summary: "This path highlights the evidence chain behind the final V1.0.26 baseline.",
    nodeIds: ["validation", "ota", "security", "tooling"],
  },
];

export const hardParts: HardPart[] = [
  {
    title: "A/B OTA that survives real resets",
    challenge:
      "The project had to update across two firmware slots without overwriting the running image, even during jump updates such as 1016 to 1018.",
    resolution:
      "The release path now targets the inactive slot, trial boots, confirms only after runtime health, and preserves the confirmed image for fallback.",
    proof: "Successful 1018, 1020, 1021, 1022, 1025, and final 1026 resets stayed on the expected confirmed firmware.",
  },
  {
    title: "Signed manifest trust boundary",
    challenge:
      "A cloud manifest can describe which firmware to install, so the device needed to distinguish authentic release policy from edited JSON.",
    resolution:
      "Ed25519 signature verification was added over canonical manifest fields, with the public key embedded in firmware and release-tool signing built into the desktop workflow.",
    proof: "Bad-signature manifests produced check failed before download or install began.",
  },
  {
    title: "Payload identity, not just manifest identity",
    challenge:
      "A valid manifest is not enough if the referenced RPS file is replaced or corrupted after signing.",
    resolution:
      "The signed manifest now binds to the payload SHA256, and install rejects modified bytes before accepting the image.",
    proof: "The bad-payload test passed check, then failed install with the observed 0x46 rejection code.",
  },
  {
    title: "LED behavior without OTA instability",
    challenge:
      "Hook LED I2S refresh collided with the OTA install path and created a real board-level failure during update testing.",
    resolution:
      "OTA install now pauses the hook LED backend, aborts pending I2S transfer cleanly, and resumes product behavior after the critical flash path.",
    proof: "Final releases kept LED_ON behavior while OTA install and reset persistence remained stable.",
  },
];

export const otaScenarios: OtaScenario[] = [
  {
    id: "valid",
    label: "Valid OTA",
    headline: "A signed release reaches the inactive slot and survives reset.",
    description: "The normal path verifies policy, verifies payload identity, trial boots, and confirms.",
    finalState: "New slot confirmed after reset",
    gates: [
      { label: "Manifest signature", state: "pass", detail: "Ed25519 signature matches the embedded public key." },
      { label: "Payload SHA256", state: "pass", detail: "Downloaded RPS bytes match the signed sha256 field." },
      { label: "Inactive slot write", state: "pass", detail: "Package is written to the opposite A/B slot." },
      { label: "Trial boot", state: "pass", detail: "Firmware boots the new slot and reaches confirmation runtime." },
      { label: "Final state", state: "pass", detail: "V1.0.26 remains active after hardware reset." },
    ],
  },
  {
    id: "bad-manifest",
    label: "Bad Manifest",
    headline: "A forged update policy is rejected before download.",
    description: "Signed fields were changed while retaining an old signature. The device refuses the check result.",
    finalState: "Check failed, no install begins",
    gates: [
      { label: "Manifest signature", state: "reject", detail: "Canonical payload no longer matches the signature." },
      { label: "Payload SHA256", state: "skip", detail: "No payload is trusted or downloaded." },
      { label: "Inactive slot write", state: "skip", detail: "Flash is untouched." },
      { label: "Trial boot", state: "skip", detail: "No slot switch is requested." },
      { label: "Final state", state: "pass", detail: "Current firmware remains safe." },
    ],
  },
  {
    id: "bad-payload",
    label: "Bad Payload",
    headline: "A modified firmware file is rejected during install.",
    description: "The manifest is authentic, but the downloaded bytes do not match the signed hash.",
    finalState: "Install rejected before trial boot",
    gates: [
      { label: "Manifest signature", state: "pass", detail: "Release policy is authentic." },
      { label: "Payload SHA256", state: "reject", detail: "Bad package fails during install instead of becoming active." },
      { label: "Inactive slot write", state: "skip", detail: "The tampered payload is not accepted as a valid image." },
      { label: "Trial boot", state: "skip", detail: "No trial boot into a bad image." },
      { label: "Final state", state: "pass", detail: "Confirmed firmware remains active." },
    ],
  },
  {
    id: "fallback",
    label: "Fallback",
    headline: "A trial image can fail without bricking the device.",
    description: "Fallback testing proved the system can return to the previously confirmed slot.",
    finalState: "Recovered to confirmed slot",
    gates: [
      { label: "Manifest signature", state: "pass", detail: "Rollback-capable release policy is trusted." },
      { label: "Payload SHA256", state: "pass", detail: "Payload identity is known." },
      { label: "Inactive slot write", state: "pass", detail: "Trial slot is staged." },
      { label: "Trial boot", state: "recover", detail: "Health confirmation does not complete." },
      { label: "Final state", state: "recover", detail: "Local fallback returns to the confirmed image." },
    ],
  },
];

export const validationRows: ValidationRow[] = [
  {
    id: "ota-success",
    test: "Signed OTA success",
    result: "Pass",
    version: "V1.0.26",
    evidence: "Full OTA video shows install, reboot, and hardware RST persistence.",
    why: "Proves the final release path works beyond hand-built manifests.",
  },
  {
    id: "reset",
    test: "Reset persistence",
    result: "Pass",
    version: "1020-1026",
    evidence: "Successful releases remained active after RST.",
    why: "Shows the trial boot and confirmation path is stable.",
  },
  {
    id: "inactive-slot",
    test: "Inactive-slot selection",
    result: "Pass",
    version: "V1.0.26",
    evidence: "A-active requests slot B; B-active requests slot A.",
    why: "Supports jump updates without overwriting the running slot.",
  },
  {
    id: "manifest",
    test: "Bad signature manifest",
    result: "Rejected",
    version: "1021 experiment",
    evidence: "Device displayed check failed twice.",
    why: "Proves update policy authenticity is enforced before install.",
  },
  {
    id: "payload",
    test: "Bad payload hash",
    result: "Rejected",
    version: "1027 negative test",
    evidence: "Check succeeded, install failed from the intentionally bad package.",
    why: "Proves signed sha256 binds the manifest to exact RPS bytes.",
  },
  {
    id: "fallback",
    test: "Local fallback",
    result: "Pass",
    version: "1027 fallback",
    evidence: "Trial failure returned to confirmed V1.0.26.",
    why: "Shows the device can recover from a bad trial image.",
  },
  {
    id: "led",
    test: "LED retained during final baseline",
    result: "Pass",
    version: "1024 fix",
    evidence: "OTA install pauses hook LED I2S refresh, then resumes.",
    why: "Keeps product behavior without destabilizing OTA install.",
  },
];

export const validationPillars: ValidationPillar[] = [
  {
    value: "A/B",
    label: "Inactive-slot release",
    detail: "A-active devices receive slot B; B-active devices receive slot A.",
  },
  {
    value: "2x",
    label: "Negative security gates",
    detail: "Bad manifest fails at check; bad payload fails during install.",
  },
  {
    value: "1026",
    label: "Persistence proof",
    detail: "Final signed OTA remains active after software reboot and hardware reset.",
  },
  {
    value: "Tool",
    label: "Repeatable delivery",
    detail: "The GUI generates, signs, uploads, and verifies release output.",
  },
];

export const validationProtocols: ValidationProtocol[] = [
  {
    phase: "Check",
    accepts: "Signed manifest with canonical fields and a known key id.",
    rejects: "Edited JSON, stale signature, unknown signature fields.",
    artifact: "Observed result: check failed for bad-signature manifest.",
  },
  {
    phase: "Download",
    accepts: "RPS URL selected for the inactive slot by Node-RED.",
    rejects: "Wrong slot policy, missing file, mismatched remote release target.",
    artifact: "Release tool validates slot A and slot B fw/check responses.",
  },
  {
    phase: "Install",
    accepts: "Payload bytes whose SHA256 matches the signed manifest.",
    rejects: "Modified or truncated payload before it becomes a trial image.",
    artifact: "Bad package video shows check success followed by install failure.",
  },
  {
    phase: "Confirm",
    accepts: "New firmware reaches runtime health and survives reset.",
    rejects: "Trial image that cannot confirm within the safety window.",
    artifact: "Fallback test returned to the confirmed firmware.",
  },
];

export const evidenceShots: EvidenceShot[] = [
  {
    title: "Successful signed OTA",
    result: "Installed and survived RST",
    version: "V1.0.26",
    evidence: "Local check, install screen, full OTA video, and hardware RST persistence.",
    detail: "This is the hero proof slot for the final baseline: tool-generated signed release, confirmed after reboot and RST.",
    video: "/media/videos/velo-ota-v1026-success-rst-ccw.mp4",
    poster: "/media/photos/velo-poster-v1026-success-ccw.jpg",
    galleryHref: "/gallery#ota-success-rst",
  },
  {
    title: "Bad release rejection",
    result: "Signature path refused",
    version: "1027 negative test",
    evidence: "The device shows the negative signed-release path instead of accepting unsafe update policy.",
    detail: "Keeps the security story visible: bad release metadata is not treated as a normal upgrade.",
    video: "/media/videos/velo-bad-signature-manifest-failed-ccw.mp4",
    poster: "/media/photos/velo-poster-bad-signature-manifest-ccw.jpg",
    galleryHref: "/gallery#ota-proof-reels",
  },
  {
    title: "Bad payload rejection",
    result: "Install failed",
    version: "1027 negative test",
    evidence: "Bad-package video showing check success followed by automatic install refusal.",
    detail: "Proves the signed SHA256 field binds the manifest to exact RPS bytes and stops a bad package before trial boot.",
    video: "/media/videos/velo-ota-v1027-bad-package-install-failed-ccw.mp4",
    poster: "/media/photos/velo-poster-v1027-bad-package-ccw.jpg",
    galleryHref: "/gallery#ota-bad-package",
  },
  {
    title: "Fallback recovery",
    result: "Returned to confirmed slot",
    version: "1027 fallback",
    evidence: "Full fallback video returning from trial V1.0.27 to confirmed V1.0.26.",
    detail: "Demonstrates that a bad trial image does not brick the device and that confirmed firmware remains recoverable.",
    video: "/media/videos/velo-ota-v1027-fallback-success-ccw.mp4",
    poster: "/media/photos/velo-poster-v1027-fallback-ccw.jpg",
    galleryHref: "/gallery#ota-fallback",
  },
  {
    title: "Release tool output",
    result: "A/B packages and signed manifests",
    version: "V1.0.26",
    evidence: "Generate, upload, and WinSCP remote file proof for both A and B release artifacts.",
    detail: "Connects the polished product story to the repeatable developer workflow.",
    image: "/media/photos/velo-release-tool-generate-v1026.png",
    alt: "Velo OTA Release Tool showing A/B release generation output.",
    galleryHref: "/gallery#release-tool-evidence",
  },
  {
    title: "LED behavior retained",
    result: "Hook LEDs work after OTA fix",
    version: "1024-1025",
    evidence: "OTA install pauses I2S LED refresh during flash operations, then resumes the product LED behavior.",
    detail: "Highlights the final engineering fix: OTA install pauses I2S LED refresh, then resumes product behavior.",
    video: "/media/videos/velo-hook-leds-final-behavior-ccw.mp4",
    poster: "/media/photos/velo-poster-hook-leds-final-ccw.jpg",
    galleryHref: "/gallery#product-workflow",
  },
];

export const updateProofMedia: MediaProof[] = [
  {
    id: "ota-success-rst",
    title: "V1.0.26 signed OTA survives hardware reset",
    label: "Success reel",
    result: "Installed, rebooted, and stayed on V1.0.26",
    detail:
      "Full device video showing the real OTA path, including hardware RST after the update stayed confirmed.",
    src: "/media/videos/velo-ota-v1026-success-rst-ccw.mp4",
    type: "video",
    poster: "/media/photos/velo-poster-v1026-success-ccw.jpg",
  },
  {
    id: "ota-fallback",
    title: "V1.0.27 fallback returns to confirmed V1.0.26",
    label: "Recovery reel",
    result: "Trial image fails safely",
    detail:
      "A fallback demonstration package boots as a trial, then returns to the confirmed baseline instead of bricking.",
    src: "/media/videos/velo-ota-v1027-fallback-success-ccw.mp4",
    type: "video",
    poster: "/media/photos/velo-poster-v1027-fallback-ccw.jpg",
  },
  {
    id: "ota-bad-signature",
    title: "Bad-signature release is refused",
    label: "Security reel",
    result: "Unsafe release metadata stops before trust",
    detail:
      "The negative manifest path shows that a release must satisfy the signed policy boundary before it can be treated as a normal upgrade.",
    src: "/media/videos/velo-bad-signature-manifest-failed-ccw.mp4",
    type: "video",
    poster: "/media/photos/velo-poster-bad-signature-manifest-ccw.jpg",
  },
  {
    id: "ota-bad-package",
    title: "V1.0.27 bad package fails install",
    label: "Negative reel",
    result: "Check can pass; install still refuses bad bytes",
    detail:
      "A deliberately bad package proves the payload gate catches unsafe firmware before trial boot.",
    src: "/media/videos/velo-ota-v1027-bad-package-install-failed-ccw.mp4",
    type: "video",
    poster: "/media/photos/velo-poster-v1027-bad-package-ccw.jpg",
  },
  {
    id: "ota-timeout",
    title: "Network timeout stops the upgrade path",
    label: "Fault reel",
    result: "0x7 timeout handled without unsafe progress",
    detail:
      "A real unstable-network capture shows the updater stops instead of forcing an uncertain install.",
    src: "/media/videos/velo-ota-network-timeout-0x7-ccw.mp4",
    type: "video",
    poster: "/media/photos/velo-poster-network-timeout-ccw.jpg",
  },
];

export const finalDemoMedia: MediaProof[] = [
  {
    id: "final-narrated-demo-video",
    title: "Complete narrated Velo final demo",
    label: "Final presentation",
    result: "Full project walkthrough with voice narration",
    detail:
      "The complete recording introduces the team, demonstrates the installed device, walks through cloud behavior and hook LEDs, and explains the signed A/B OTA, fallback, bad-release rejection, and final validation story.",
    src: "/media/videos/velo-final-narrated-demo-full.mp4",
    type: "video",
    poster: "/media/photos/velo-final-narrated-demo-poster.jpg",
    hasAudio: true,
  },
];

export const productWorkflowMedia: MediaProof[] = [
  {
    id: "final-product-workflow",
    title: "Final Velo workflow under camera",
    label: "Product reel",
    result: "Touch UI, room context, and hook feedback in one device",
    detail:
      "The final product video shows Velo as a working embedded surface: installed in the room, driven by the real LCD UI, and tied back to the physical hook reminder behavior.",
    src: "/media/videos/velo-final-product-demo-ccw.mp4",
    type: "video",
    poster: "/media/photos/velo-poster-final-product-demo-ccw.jpg",
  },
  {
    id: "hook-led-final-behavior",
    title: "Hook LEDs respond to real reminder state",
    label: "Physical feedback",
    result: "Selected hooks light while inactive hooks stay dark",
    detail:
      "The hook LEDs make the UI visible in the room, proving the final product behavior survived the OTA and fallback work.",
    src: "/media/videos/velo-hook-leds-final-behavior-ccw.mp4",
    type: "video",
    poster: "/media/photos/velo-poster-hook-leds-final-ccw.jpg",
  },
];

export const releaseToolMedia: MediaProof[] = [
  {
    id: "release-tool-generate",
    title: "A/B release generated by the Velo tool",
    label: "Tooling",
    result: "Slot A and slot B packages generated",
    detail:
      "The release tool builds both inactive-slot artifacts and writes signed manifests for the cloud endpoint.",
    src: "/media/photos/velo-release-tool-generate-v1026.png",
    type: "image",
    alt: "Velo OTA Release Tool log after generating V1.0.26 A/B release files.",
  },
  {
    id: "release-tool-upload",
    title: "Release uploaded and verified",
    label: "Upload",
    result: "VM upload complete",
    detail:
      "The upload log verifies artifact URLs, latest manifests, and the fw/check responses for both slot directions.",
    src: "/media/photos/velo-release-tool-upload-v1026.png",
    type: "image",
    alt: "Velo OTA Release Tool log after uploading V1.0.26 release files to the VM.",
  },
  {
    id: "release-tool-cloud",
    title: "VM received both slot artifacts",
    label: "Cloud proof",
    result: "A/B artifacts visible on server",
    detail:
      "WinSCP shows slot A and slot B RPS files plus the latest manifests in the HTTP directory.",
    src: "/media/photos/velo-winscp-v1026-ab-received.png",
    type: "image",
    alt: "WinSCP view of the VM showing V1.0.26 slot A and slot B OTA files.",
  },
  {
    id: "node-red-flow",
    title: "Node-RED routes the live product backend",
    label: "Cloud flow",
    result: "Weather, reminder, OTA, and rollback endpoints are wired",
    detail:
      "The Node-RED flow shows the backend path behind live location/time/weather responses, OTA manifest selection, and firmware report handling.",
    src: "/media/photos/velo-node-red-flow-preview.png",
    type: "image",
    alt: "Node-RED flow preview for the Velo product backend.",
  },
  {
    id: "release-tool-device-ui",
    title: "Device sees the cloud release",
    label: "Device UI",
    result: "Local check finds V1.0.26",
    detail:
      "The embedded update UI confirms the cloud manifest is visible from the actual device path.",
    src: "/media/photos/velo-ota-v1026-check-available-ccw.jpg",
    type: "image",
    alt: "Velo device update page showing V1.0.26 available from the cloud check.",
  },
];

export const galleryItems = [
  {
    id: "still-ota-installing",
    title: "OTA install reaches the device screen",
    label: "Install state",
    tone: "light",
    image: "/media/photos/velo-ota-v1026-installing.jpg",
    alt: "Velo update screen showing V1.0.26 installing from V1.0.25.",
  },
  {
    id: "still-update-ui",
    title: "OTA screen reports V1.0.26 availability",
    label: "Update UI",
    tone: "light",
    image: "/media/photos/velo-ota-v1026-check-available-ccw.jpg",
    alt: "Velo update screen showing a V1.0.26 update available from V1.0.25.",
  },
  {
    id: "still-wifi-connected",
    title: "Wi-Fi setup reaches the connected state",
    label: "Network UI",
    tone: "light",
    image: "/media/photos/velo-wifi-connected.jpg",
    alt: "Velo Wi-Fi screen showing connected network state.",
  },
  {
    id: "still-pcb-complete",
    title: "The final PCB before it disappears into the enclosure",
    label: "Hardware",
    tone: "dark",
    image: "/media/photos/velo-pcb-complete-cw.jpg",
    alt: "Velo custom PCB photographed as a complete board.",
  },
  {
    id: "still-v100-milestone",
    title: "V1.0.0 success screen from the early release path",
    label: "Milestone",
    tone: "light",
    image: "/media/photos/velo-v100-success-screen-cw.jpg",
    alt: "Velo screen showing an early V1.0.0 success state.",
  },
  {
    id: "still-assembly-front",
    title: "Assembly view from the front side",
    label: "Assembly",
    tone: "light",
    image: "/media/photos/velo-assembly-base-pcba-front.jpg",
    alt: "Velo hook base and PCBA photographed from the front during assembly.",
  },
  {
    id: "still-assembly-back",
    title: "Assembly view from the back side",
    label: "Mechanical proof",
    tone: "dark",
    image: "/media/photos/velo-assembly-base-pcba-back.jpg",
    alt: "Velo hook base and PCBA photographed from the back during assembly.",
  },
];

export const galleryStoryRows: GalleryStoryRow[] = [
  {
    id: "product-proof",
    chapter: "01",
    title: "A physical product, not a mockup",
    available: "Installed-device photos anchor the site in a real doorway scenario.",
    capture: "Whiteboard mounting, hook objects, LCD surface, and compact enclosure are visible in the first screen.",
    proof: "Shows this is a physical embedded product, not a web mockup.",
    href: "#media-board",
  },
  {
    id: "product-workflow",
    chapter: "02",
    title: "A UI connected to the room",
    available: "Screen, Wi-Fi, weather, reminder, and hook context photos show the product workflow.",
    capture: "The interface is presented as a working embedded surface instead of a static render.",
    proof: "Connects the UI to the physical reminder behavior.",
    href: "#still-wifi-connected",
  },
  {
    id: "release-pipeline",
    chapter: "03",
    title: "A repeatable release pipeline",
    available: "Release tool generate/upload screenshots, Node-RED flow evidence, and WinSCP VM proof are grouped here as the delivery trail.",
    capture: "The same workflow builds slot A, builds slot B, signs manifests, routes cloud responses, uploads artifacts, and verifies endpoints.",
    proof: "Shows the delivery process is repeatable by a reviewer.",
    href: "#release-tool-evidence",
  },
  {
    id: "failure-proof",
    chapter: "04",
    title: "Failure behavior under camera",
    available: "Fallback, bad package, network timeout, and V1.0.26 success videos are grouped here as the validation reel.",
    capture: "The evidence includes success, rejection, timeout handling, and confirmed-slot recovery.",
    proof: "Shows Velo was tested against failure, not only success.",
    href: "#ota-proof-reels",
  },
];

export const engineeringPhotoRows: PhotoEvidenceRow[] = [
  {
    label: "PCB",
    title: "The custom board made the project physical.",
    detail: "A clean board photo anchors the firmware story in real hardware rather than a simulator.",
    image: "/media/photos/velo-pcb-lightbox.jpg",
    alt: "Velo custom PCB photographed on a light background.",
  },
  {
    label: "Bring-up",
    title: "Signals were measured, not guessed.",
    detail: "Logic-analyzer and wiring evidence shows the debugging path behind display, touch, and sensor behavior.",
    image: "/media/photos/velo-logic-analyzer-signal.jpg",
    alt: "Logic analyzer and wires connected during early Velo signal debugging.",
  },
  {
    label: "Assembly",
    title: "Electronics, LCD, and hook base converged into one unit.",
    detail: "The final assembly photos show the transition from bench wiring to an integrated product surface.",
    image: "/media/photos/velo-assembly-base-pcba-lcd.jpg",
    alt: "Velo hook base, PCBA, and LCD during final assembly.",
  },
];

export const archivePhotoRows: PhotoEvidenceRow[] = [
  {
    label: "First power",
    title: "Power-on and testpoint work",
    detail: "The board was checked through physical testpoints and jumpers before the higher-level product flow was trusted.",
    image: "/media/photos/velo-first-power-testpoints.jpg",
    alt: "Velo PCB during first power-on testing with testpoint and jumper wiring.",
  },
  {
    label: "Thermal check",
    title: "Early hardware safety check",
    detail: "Thermal inspection and power validation helped make the bring-up process disciplined instead of purely trial-and-error.",
    image: "/media/photos/velo-first-power-thermal-check.jpg",
    alt: "Velo PCB during first power-on thermal checking.",
  },
  {
    label: "LCD bring-up",
    title: "Display path under measurement",
    detail: "The first LCD bring-up was paired with signal capture, turning visual progress into measurable engineering evidence.",
    image: "/media/photos/velo-first-lcd-logic-test.jpg",
    alt: "Velo LCD and logic analyzer during early display testing.",
  },
  {
    label: "Internals",
    title: "Final unit with the back opened",
    detail: "The finished device can be inspected as hardware, not just as a polished front face.",
    image: "/media/photos/velo-open-back-internals.jpg",
    alt: "Finished Velo device opened from the back to show its internal structure.",
  },
];

export const archiveStats: ArchiveStat[] = [
  {
    value: "441k",
    label: "buildable source lines",
    detail: "Complete project source footprint including SDK, generated build files, third-party code, and app source.",
  },
  {
    value: "26.8k",
    label: "self-authored firmware lines",
    detail: "Core application firmware excluding SDK, third-party libraries, generated build files, and config.",
  },
  {
    value: "29.3k",
    label: "firmware plus release tooling",
    detail: "Self-authored firmware, OTA release automation, and the Velo desktop release tool together.",
  },
  {
    value: "67",
    label: "backup checkpoints",
    detail: "A visible trail of iterative engineering from early bring-up to the frozen final baseline.",
  },
];

export const versionJourney: VersionJourneyStage[] = [
  {
    version: "0.01",
    title: "First hardware contact",
    detail: "ToF bring-up, UART recovery, and the first real sensor logs.",
    evidence: "Board logs proved the sensor and UART path were alive.",
  },
  {
    version: "0.10",
    title: "RTOS foundation",
    detail: "FreeRTOS, CPU/GDB debugging, and boot-path observability.",
    evidence: "Debugger sessions exposed runtime state instead of guessing from LEDs.",
  },
  {
    version: "0.20",
    title: "Display and touch recovered",
    detail: "HX8357D display, touch ADC bench, X/Y ring mapping, and drawing interaction.",
    evidence: "ADC bench tests converted raw touch behavior into calibrated interaction.",
  },
  {
    version: "0.40",
    title: "Product definition",
    detail: "The project became a door-side weather reminder terminal with hook LEDs.",
    evidence: "The feature set moved from demo drawing to a real reminder workflow.",
  },
  {
    version: "0.60",
    title: "Connected behavior",
    detail: "Wi-Fi, Node-RED, NVM3, sleep/wake, brightness, and distance UI matured.",
    evidence: "Networking, local storage, and low-power behavior became product features.",
  },
  {
    version: "0.85",
    title: "OTA became real",
    detail: "Release paths, 0x1BBE2, V1.0.12 stabilization, and reboot-only bugs.",
    evidence: "Install errors and first-reboot failures forced release-path debugging.",
  },
  {
    version: "0.95",
    title: "A/B fallback proof",
    detail: "Slot-aware OTA, fallback, bad package rejection, and reset persistence.",
    evidence: "Board tests proved reset persistence, rollback, and bad package rejection.",
  },
  {
    version: "V1.0.26",
    title: "Final showcase release",
    detail: "LED_ON product experience, signed manifest, payload hash, release tooling, and reset-persistent OTA.",
    evidence: "Final proof shows V1.0.26 OTA success, fallback demo, bad package rejection, and tooling.",
  },
];

export const archiveSources: ArchiveSource[] = [
  {
    title: "Layered firmware architecture",
    kind: "Code structure",
    detail: "Hardware drivers, product UI, screens, services, managers, storage, and fallback code are separated by responsibility.",
    evidence: "Clear module boundaries make the system reviewable instead of being one large demo file.",
  },
  {
    title: "OTA and recovery state machine",
    kind: "Reliability",
    detail: "The firmware tracks active slot, inactive target, trial boot, confirmation, rollback, and reset persistence.",
    evidence: "The final validation matrix covers success, fallback, bad package, bad signature, and bad payload.",
  },
  {
    title: "Security boundary",
    kind: "Safety",
    detail: "Signed manifest verification and payload hash binding protect release policy and firmware bytes separately.",
    evidence: "Bad manifest fails during check; bad payload fails during install.",
  },
  {
    title: "Release automation",
    kind: "Tooling",
    detail: "The desktop release tool builds slot A/B packages, signs manifests, uploads files, verifies endpoints, and creates acceptance evidence.",
    evidence: "The release flow can be reproduced through a GUI instead of hand-edited JSON.",
  },
  {
    title: "Engineering traceability",
    kind: "Process",
    detail: "The project uses frozen baselines, clean backups, one-click acceptance, and board-level negative tests.",
    evidence: "Failures became recorded validation cases rather than hidden debugging debris.",
  },
];

export const codeQualityRows: CodeQualityRow[] = [
  {
    metric: "Core firmware",
    value: "26,818 lines",
    detail: "Self-authored application firmware excluding SDK, third-party libraries, generated build files, and config.",
    quality: "Split into runtime, UI, services, drivers, managers, storage, and fallback boundaries.",
  },
  {
    metric: "Product UI and screens",
    value: "10,321 lines",
    detail: "Touch UI, home surface, settings, Wi-Fi, update flow, distance page, and supporting UI helpers.",
    quality: "The UI is organized around screens and shared UI infrastructure rather than one monolithic loop.",
  },
  {
    metric: "Services layer",
    value: "7,364 lines",
    detail: "Weather, time, Node-RED integration, OTA, reminder logic, storage-facing behavior, and validation paths.",
    quality: "Network and OTA behavior live behind service boundaries so UI code does not own release policy.",
  },
  {
    metric: "Drivers and managers",
    value: "5,575 lines",
    detail: "LCD, touch, ToF, hook LED, power-facing behavior, and product hardware managers.",
    quality: "Board control is kept below product logic, making hardware problems easier to isolate.",
  },
  {
    metric: "Release tooling",
    value: "2,448 lines",
    detail: "Command-line release automation plus the Windows Velo OTA Release Tool.",
    quality: "A/B packaging, signing, upload, cloud check, and acceptance are repeatable.",
  },
  {
    metric: "Project configuration",
    value: "36,259 lines with config",
    detail: "When project configuration is included, the self-authored delivery footprint grows beyond firmware code alone.",
    quality: "The buildable project preserves the configuration needed to reproduce the embedded result.",
  },
];

export const archiveLinks = [
  {
    title: "Firmware Core",
    href: "#",
    detail: "26.8k self-authored lines across product firmware modules.",
    icon: CheckCircle2,
  },
  {
    title: "Product UI",
    href: "#",
    detail: "10.3k lines across touch UI, screens, and update surfaces.",
    icon: FileCheck2,
  },
  {
    title: "Signed OTA",
    href: "#",
    detail: "Manifest signature and payload hash validation are integrated.",
    icon: ShieldCheck,
  },
  {
    title: "Release Tool",
    href: "#",
    detail: "A/B package generation, signing, upload, and acceptance checks.",
    icon: HardDrive,
  },
  {
    title: "Recovery Logic",
    href: "#",
    detail: "Trial boot, confirm, fallback, and reset persistence.",
    icon: Layers3,
  },
  {
    title: "Validation Practice",
    href: "#",
    detail: "Success cases, bad package, bad signature, bad payload, and fallback.",
    icon: TerminalSquare,
  },
];

export const pageIcons = {
  cpu: Cpu,
  layers: Layers3,
  terminal: TerminalSquare,
  wrench: Wrench,
  braces: Braces,
  gallery: GalleryVerticalEnd,
  shield: ShieldCheck,
  rotate: RotateCcw,
};
