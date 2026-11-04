export type ProjectKey = "cadify" | "eyeai" | "haloscan" | "shifaa" | "equipment" | "zuma" | "rag"
export type Project = {
  key: ProjectKey
  title: string
  tags: string[]
  summary: string
  image: string
  imageSize: [number, number]
  imageAlt: string
  metrics?: [string, string][]
  href?: string
  hrefLabel?: string
  gallery?: string[]
  kicker: string
  intro: string
  role: string
  details: string[]
  note: string
}

export const projects: Project[] = [
  {
    key: "cadify",
    title: "CADify",
    tags: ["Graduation project", "Private source"],
    summary: "AI-powered floor plan to editable CAD/DXF and 3D workflow.",
    image: "assets/cadify-cover.webp",
    imageSize: [1448, 1086],
    imageAlt: "CADify floor plan to CAD and 3D portfolio cover",
    metrics: [
      ["15", "labeled plans"],
      ["0.93", "wall F1"],
      ["0.99", "opening F1"],
      ["3h → 1–2m", "workflow"],
    ],
    kicker: "Graduation Project · Computer Vision · AI Engineering",
    intro:
      "An end-to-end system for converting raster architectural floor plans into structured, editable CAD/DXF outputs with support for 3D scene generation.",
    role: "I designed and developed the complete topology reconstruction stage and owned its code, evaluation workflow, JSON handoff, FastAPI endpoint, and Modal deployment/integration.",
    details: [
      "Converted model outputs into connected walls, junctions, openings, rooms, and downstream CAD/3D handoff data.",
      "Built evaluation tooling against manually labeled topology ground truth.",
      "Created the FastAPI endpoint and connected model inference on Modal.",
      "Produced outputs that can feed editable CAD workflows and the 3D stage.",
    ],
    note: "Source code and model assets remain private because CADify is a team graduation project. This portfolio presents non-confidential architecture, responsibilities, results, and demo output only.",
  },
  {
    key: "eyeai",
    title: "EyeAI",
    tags: ["Team Lead + AI", "Awarded"],
    summary:
      "Led the team and AI workstream for diabetic retinopathy screening, combining classification, lesion segmentation, evaluation, and market validation.",
    image: "assets/eyeai-cover.webp",
    imageSize: [1448, 1086],
    imageAlt: "EyeAI diabetic retinopathy screening portfolio cover",
    metrics: [
      ["0.93", "macro AUC"],
      ["1st", "of 8 teams"],
    ],
    gallery: [
      "assets/eyeai-demo-1.jpg",
      "assets/eyeai-demo-2.jpg",
      "assets/eyeai-demo-3.jpg",
      "assets/eyeai-demo-4.jpg",
    ],
    kicker: "Medical AI · Team Leadership · Product Thinking",
    intro:
      "An AI-assisted retinal screening project focused on diabetic retinopathy classification and lesion-level segmentation.",
    role: "I led the full team while also developing the AI workstream. The model experiments and reported AI results were my direct technical work.",
    details: [
      "Curated, cleaned, and balanced retinal datasets.",
      "Trained and evaluated YOLO26 for five-grade diabetic retinopathy classification.",
      "Evaluated U-Net++ with a ResNet34 encoder for lesion segmentation.",
      "Built the Syrian market and go-to-market study and used physician discussions to inform the business model.",
      "The project won Best Team among 8 teams; I received Best Leader among 8 team leaders.",
    ],
    note: "The project is presented as clinical decision support, not as a replacement for ophthalmologists.",
  },
  {
    key: "haloscan",
    title: "HaloScan",
    tags: ["Medical CV", "Private source"],
    summary:
      "AI-assisted Antibiotic Susceptibility Testing using real laboratory images, disc detection, and structured mobile reporting.",
    image: "assets/haloscan-cover.webp",
    imageSize: [1448, 1086],
    imageAlt: "HaloScan antibiotic susceptibility testing portfolio cover",
    metrics: [
      ["320", "lab images"],
      ["10–15m → 1–2m", "workflow"],
    ],
    href: "https://haloscanlabs.lovable.app/",
    hrefLabel: "Visit website",
    gallery: [
      "assets/haloscan-demo-1.jpg",
      "assets/haloscan-demo-2.jpg",
      "assets/haloscan-demo-3.jpg",
      "assets/haloscan-demo-4.webp",
    ],
    kicker: "Medical Computer Vision · Real Laboratory Workflow",
    intro:
      "A computer vision workflow for supporting Antibiotic Susceptibility Testing from Petri-dish images for Al-Khateeb Laboratory in Damascus.",
    role: "I labeled the YOLO training dataset, trained the antibiotic-disc detection model, and contributed to the research and evaluation of the wider workflow.",
    details: [
      "Worked with real laboratory imagery rather than a purely synthetic or classroom dataset.",
      "Supported an automation flow spanning detection, inhibition-zone analysis, measurement, and reporting.",
      "Helped reduce the full manual workflow to roughly one to two minutes.",
    ],
    note: "Client code, dataset, and proprietary implementation details remain private.",
  },
  {
    key: "shifaa",
    title: "Shifaa",
    tags: ["Arabic NLP", "Live demo"],
    summary:
      "Benchmarked traditional ML, CNN/LSTM, and AraBERT after EDA and leakage checks for Arabic medical question classification.",
    image: "assets/shifaa-cover.webp",
    imageSize: [1448, 1086],
    imageAlt: "Shifaa Arabic medical question classification portfolio cover",
    metrics: [
      ["0.82", "accuracy"],
      ["0.70", "macro-F1"],
    ],
    href: "https://shifaa-app-app-kphfdr6vpdwjnhkfirlgpu.streamlit.app/",
    hrefLabel: "Try live demo",
    kicker: "Arabic NLP · Classification · Deployment",
    intro:
      "An end-to-end Arabic NLP system that classifies medical questions into 16 specialties and exposes the result through an interactive Streamlit application.",
    role: "I worked through EDA, preprocessing experiments, leakage checks, and model comparison before selecting the final transformer-based approach.",
    details: [
      "Compared TF-IDF with traditional ML baselines, CNN/LSTM approaches, and AraBERT.",
      "Addressed data leakage and class-distribution issues during experimentation.",
      "Deployed the final model through Hugging Face and Streamlit.",
    ],
    note: "The live demo is available directly from the project card.",
  },
  {
    key: "equipment",
    title: "Equipment Utilization",
    tags: ["Computer Vision", "End-to-end prototype"],
    summary:
      "Excavator monitoring that connects detection and tracking with motion analysis, activity classification, event streaming, and analytics.",
    image: "assets/equipment-cover.webp",
    imageSize: [1448, 1086],
    imageAlt:
      "Equipment detection heavy machinery computer vision portfolio cover",
    metrics: [
      ["Active / inactive", "state"],
      ["4", "activity classes"],
    ],
    href: "https://drive.google.com/file/d/1fv1ya04vSTPLmU0ictKXS1WBlUBDRIAU/view?usp=drive_link",
    hrefLabel: "Watch demo",
    kicker: "Computer Vision · Tracking · Streaming Analytics",
    intro:
      "A compact end-to-end prototype for monitoring excavator activity from video and turning visual detections into operational utilization analytics.",
    role: "I built the post-detection workflow that links detections across frames, analyzes motion and machine state, classifies activity, emits structured events, stores them, and visualizes the results in an interactive dashboard.",
    details: [
      "Tracks the excavator across frames using detection geometry such as IoU, center distance, and size consistency.",
      "Uses optical flow and region-based logic so arm-only movement is not mistaken for inactivity.",
      "Classifies work states into DIGGING, SWINGING_LOADING, DUMPING, and WAITING.",
      "Streams structured JSON events through Kafka, stores them in PostgreSQL, and reports utilization in Streamlit.",
    ],
    note: "The public repository focuses on the post-detection pipeline; the YOLOv8n detector was trained separately using Roboflow data plus images extracted from project videos.",
  },
  {
    key: "zuma",
    title: "Zuma's Magician",
    tags: ["Classical CV", "Real-time automation"],
    summary:
      "Real-time computer vision automation using motion analysis, path tracking, target selection, color matching, and decision logic.",
    image: "assets/zuma-cover.webp",
    imageSize: [1448, 1086],
    imageAlt: "Zuma real-time computer vision automation portfolio cover",
    href: "https://github.com/Ayama11/Automated-Zuma-Player",
    hrefLabel: "View project",
    kicker: "Classical Computer Vision · Real-Time Automation",
    intro:
      "A real-time computer vision system that automates Zuma gameplay without using machine learning.",
    role: "I built the full vision and decision loop, from ROI selection and motion analysis to target selection and automated action.",
    details: [
      "Used Hough-circle detection and HSV color analysis for ball understanding.",
      "Used optical flow and path logic for motion and trajectory reasoning.",
      "Connected perception to target selection and automated control.",
    ],
    note: "This project highlights classical computer vision and systems thinking rather than deep learning.",
  },
  {
    key: "rag",
    title: "Lecture-Saver 3000",
    tags: ["RAG", "LLM application"],
    summary:
      "PDF assistant with ingestion, chunking, semantic retrieval, metadata handling, and file/page-level source citations.",
    image: "assets/rag-cover.webp",
    imageSize: [1586, 992],
    imageAlt: "Lecture-Saver 3000 RAG learning assistant portfolio cover",
    kicker: "RAG · NLP · LLM Application",
    intro:
      "A PDF question-answering assistant designed to ground answers in course documents rather than rely on an LLM alone.",
    role: "I built the retrieval workflow, document ingestion, chunking, metadata handling, and source-citation behavior.",
    details: [
      "Ingests course PDFs and prepares chunked content for semantic retrieval.",
      "Uses Sentence Transformers for embeddings and Gemini for answer generation.",
      "Returns file/page references so users can trace answers back to the source.",
    ],
    note: "The project emphasizes grounded retrieval behavior instead of unverified accuracy claims.",
  },
]

export const processSteps = [
  {
    number: "01",
    name: "Understand",
    title: "Understand the problem before choosing the model.",
    copy: "Clarify users, constraints, data, inputs, outputs, and what success should look like.",
    points: [
      "Define the real use case and decision flow.",
      "Map data and edge cases.",
      "Choose evaluation criteria that match the goal.",
    ],
  },
  {
    number: "02",
    name: "Experiment",
    title: "Experiment with evidence, not assumptions.",
    copy: "Prepare data carefully, compare approaches, inspect failure cases, and avoid over-trusting a single metric.",
    points: [
      "Clean and balance the data.",
      "Compare baselines and stronger architectures.",
      "Inspect errors, leakage, and failure modes.",
    ],
  },
  {
    number: "03",
    name: "Engineer",
    title: "Engineer the workflow around the model.",
    copy: "Turn the best approach into a structured system with clear interfaces, handoffs, and reproducible logic.",
    points: [
      "Build APIs and structured outputs.",
      "Design for downstream use.",
      "Keep the pipeline deployment-ready.",
    ],
  },
  {
    number: "04",
    name: "Deliver",
    title: "Deliver something useful and measurable.",
    copy: "Connect the technical output to a workflow, a user need, and a measurable improvement.",
    points: [
      "Deploy and document the solution.",
      "Measure time, quality, or impact.",
      "Communicate clearly to every stakeholder.",
    ],
  },
]

export const experience: [string, string, string, string][] = [
  [
    "Apr 2026 — Aug 2026",
    "AI / Computer Vision Trainee & Team Leader",
    "EyeAI · MozaicAI",
    "Led the full team and AI workstream, from data curation and model evaluation to market study and final project positioning. Best Team and Best Leader among 8 competing teams.",
  ],
  [
    "Mar 2025 — Sep 2025",
    "Contract Computer Vision Engineer",
    "HaloScan · Al-Khateeb Laboratory",
    "Worked on real laboratory data, including YOLO dataset labeling, antibiotic-disc detection training, and research/evaluation support for an automated AST workflow.",
  ],
  [
    "Sep 2022 — Mar 2023",
    "HR Manager",
    "RBCs Team",
    "Coordinated onboarding, training, progress follow-up, and support for 40 trainees and their team leads while collaborating with Finance and IT.",
  ],
]

export const skillGroups: [string, string][] = [
  [
    "AI & ML",
    "Machine Learning · Deep Learning · Computer Vision · NLP · RAG · Classification · Detection · Segmentation · Dataset Curation · Evaluation · Error Analysis",
  ],
  [
    "Frameworks",
    "PyTorch · TensorFlow · Hugging Face · OpenCV · YOLO · U-Net++ · ResNet34 · Sentence Transformers · NumPy · Pandas",
  ],
  [
    "Engineering",
    "FastAPI · REST APIs · Inference Pipelines · Model Deployment · Modal · Docker · Streamlit · Git · GitHub",
  ],
  [
    "Product & collaboration",
    "Product Thinking · Technical Communication · Team Leadership · Research · Market Validation · Business Model Thinking",
  ],
]
