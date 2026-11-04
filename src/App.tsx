import { useEffect, useRef, useState } from "react"

type ProjectKey = "cadify" | "eyeai" | "haloscan" | "shifaa" | "equipment" | "zuma" | "rag"
type Project = {
  key: ProjectKey
  title: string
  tags: string[]
  summary: string
  image: string
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

const projects: Project[] = [
  {
    key: "cadify",
    title: "CADify",
    tags: ["Graduation project", "Private source"],
    summary: "AI-powered floor plan to editable CAD/DXF and 3D workflow.",
    image: "assets/cadify-cover.webp",
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
      "assets/haloscan-demo-4.jpg",
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

const process = [
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

function Icon({
  name,
}: {
  name: "arrow" | "mail" | "linkedin" | "telegram" | "close"
}) {
  const paths = {
    arrow: <path d="M5 19 19 5m0 0H8m11 0v11" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    telegram: <path d="m22 2-7 20-4-9-9-4L22 2Zm0 0L11 13" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [processIndex, setProcessIndex] = useState(0)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [galleryProject, setGalleryProject] = useState<Project | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const menuRef = useRef<HTMLButtonElement>(null)
  const dialogOpen = Boolean(activeProject || galleryProject)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false)
        menuRef.current?.focus()
      }
    }
    const onOutsideClick = (event: PointerEvent) => {
      if (!(event.target as Element).closest(".nav")) setMenuOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth > 900) setMenuOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onOutsideClick)
    window.addEventListener("resize", onResize)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onOutsideClick)
      window.removeEventListener("resize", onResize)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!dialogOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [dialogOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    )
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element))
    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])
  useEffect(() => {
    const dialog = dialogRef.current
    if ((activeProject || galleryProject) && dialog && !dialog.open)
      dialog.showModal()
  }, [activeProject, galleryProject])
  const closeDialog = () => {
    dialogRef.current?.close()
    setActiveProject(null)
    setGalleryProject(null)
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="shell nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Aya Almalla home">
            AA<span>.</span>
          </a>
          <div
            id="primary-links"
            className={`nav-links ${menuOpen ? "open" : ""}`}
          >
            {[
              "About",
              "Projects",
              "Process",
              "Experience",
              "Skills",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              className="mobile-resume"
              href="assets/Aya_Almalla_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume <Icon name="arrow" />
            </a>
          </div>
          <a
            className="nav-resume"
            href="assets/Aya_Almalla_CV.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume <Icon name="arrow" />
          </a>
          <button
            ref={menuRef}
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="primary-links"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">
                <span /> Artificial Intelligence Engineer
              </p>
              <h1>
                Aya <em>Almalla</em>
              </h1>
              <p className="hero-lead">
                Turning AI into effective solutions for real-world challenges.
              </p>
              <p className="hero-description">
                I build applied AI systems across computer vision, NLP, and RAG
                — from data and experimentation to evaluation, APIs, deployment,
                and product integration.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  Explore my work <Icon name="arrow" />
                </a>
                <a
                  className="button secondary"
                  href="assets/Aya_Almalla_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View resume
                </a>
              </div>
              <div className="social-list">
                <a
                  href="https://github.com/Ayama11"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Icon name="arrow" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aya-almalla"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Icon name="arrow" />
                </a>
                <a
                  href="https://huggingface.co/aya99ma"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hugging Face <Icon name="arrow" />
                </a>
              </div>
            </div>
            <div className="hero-art reveal">
              <ContextMark />
              <div className="focus-card">
                <span>Current focus</span>
                <p>
                  Applied AI that moves beyond a model demo and becomes a useful
                  workflow.
                </p>
                <div>
                  <small>Computer Vision</small>
                  <small>NLP & RAG</small>
                  <small>Deployment</small>
                  <small>Product thinking</small>
                </div>
              </div>
            </div>
          </div>
          <div className="shell impact-strip reveal">
            {[
              ["3h → 1–2m", "CADify workflow"],
              ["0.93", "EyeAI macro AUC"],
              ["320", "Laboratory images"],
              ["40", "Trainees supported"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="shell split-layout">
            <SectionTitle
              index="01"
              label="About"
              title="I like the space between a good model and a useful product."
            />
            <div className="body-copy reveal">
              <p>
                I’m an Artificial Intelligence Engineering graduate from
                Damascus University. My work spans computer vision, NLP, RAG
                systems, medical AI, architectural automation, and video
                analytics.
              </p>
              <p>
                I’m most interested in building the full path: preparing the
                data, choosing and testing approaches, measuring what works,
                connecting the model to an API, and shaping the result into
                something people can actually use.
              </p>
              <aside>
                <span /> My strongest projects combine technical ownership with
                measurable impact, deployment, and product thinking.
              </aside>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="shell">
            <div className="heading-row">
              <SectionTitle
                index="02"
                label="Selected work"
                title="Real problems. Clear ownership. Measurable evidence."
              />
              <a
                className="text-link"
                href="https://github.com/Ayama11"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub <Icon name="arrow" />
              </a>
            </div>
            <article className="featured-project reveal">
              <button
                className="featured-image"
                onClick={() => setActiveProject(projects[0])}
                aria-label="Open CADify case study"
              >
                <img src={projects[0].image} alt={projects[0].imageAlt} />
                <span>Featured project</span>
              </button>
              <ProjectBody
                project={projects[0]}
                featured
                onCaseStudy={() => setActiveProject(projects[0])}
              />
            </article>
            <div className="project-grid">
              {projects.slice(1).map((project) => (
                <article className="project-card reveal" key={project.key}>
                  <button
                    className="project-image"
                    onClick={() =>
                      project.gallery
                        ? setGalleryProject(project)
                        : setActiveProject(project)
                    }
                    aria-label={`Open ${project.title} ${
                      project.gallery ? "gallery" : "case study"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                    />
                    <span>
                      {project.gallery ? "View gallery" : "View case study"}{" "}
                      <Icon name="arrow" />
                    </span>
                  </button>
                  <ProjectBody
                    project={project}
                    onCaseStudy={() => setActiveProject(project)}
                    onGallery={
                      project.gallery
                        ? () => setGalleryProject(project)
                        : undefined
                    }
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="shell">
            <SectionTitle
              index="03"
              label="How I work"
              title="A practical AI workflow, not a model in isolation."
            />
            <div className="process-panel reveal">
              <div
                className="process-tabs"
                role="tablist"
                aria-label="Project process"
              >
                {process.map((item, index) => (
                  <button
                    key={item.number}
                    id={`process-tab-${index}`}
                    role="tab"
                    aria-selected={processIndex === index}
                    aria-controls="process-panel"
                    tabIndex={processIndex === index ? 0 : -1}
                    onClick={() => setProcessIndex(index)}
                    onKeyDown={(event) => {
                      const keys = [
                        "ArrowRight",
                        "ArrowDown",
                        "ArrowLeft",
                        "ArrowUp",
                        "Home",
                        "End",
                      ]
                      if (!keys.includes(event.key)) return
                      event.preventDefault()
                      const next =
                        event.key === "Home"
                          ? 0
                          : event.key === "End"
                            ? process.length - 1
                            : (index +
                                (["ArrowRight", "ArrowDown"].includes(event.key)
                                  ? 1
                                  : -1) +
                                process.length) %
                              process.length
                      setProcessIndex(next)
                      document.getElementById(`process-tab-${next}`)?.focus()
                    }}
                  >
                    <span>{item.number}</span>
                    {item.name}
                  </button>
                ))}
              </div>
              <div
                className="process-detail"
                id="process-panel"
                role="tabpanel"
                aria-labelledby={`process-tab-${processIndex}`}
                tabIndex={0}
              >
                <span className="process-number">
                  {process[processIndex].number}
                </span>
                <div>
                  <h3>{process[processIndex].title}</h3>
                  <p>{process[processIndex].copy}</p>
                  <ul>
                    {process[processIndex].points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="shell split-layout">
            <SectionTitle
              index="04"
              label="Experience"
              title="Technical ownership with a product lens."
            />
            <div className="timeline">
              {[
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
              ].map(([date, title, org, copy]) => (
                <article className="timeline-item reveal" key={title}>
                  <span className="timeline-dot" />
                  <time>{date}</time>
                  <h3>{title}</h3>
                  <strong>{org}</strong>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="shell">
            <SectionTitle
              index="05"
              label="Skills"
              title="Tools I use to move from experiment to system."
            />
            <div className="skills-grid">
              {[
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
              ].map(([title, copy], index) => (
                <article className="skill-card reveal" key={title}>
                  <div className="skill-heading">
                    <span className="skill-icon">
                      <SkillIcon index={index} />
                    </span>
                    <h3>{title}</h3>
                    <span className="skill-count">
                      {copy.split(" · ").length} skills
                    </span>
                  </div>
                  <ul className="skill-chips">
                    {copy.split(" · ").map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="beyond-card reveal">
              <div>
                <span>Beyond the model</span>
                <h2>
                  I care whether the solution makes sense for the people using
                  it.
                </h2>
              </div>
              <div>
                <p>
                  My project work also includes market research, go-to-market
                  strategy, Business Model Canvas, opportunity validation, team
                  leadership, and cross-functional coordination.
                </p>
                <p>
                  Recent professional development includes the Aga Khan
                  Foundation Youth Entrepreneurship and Employable Skills (YES)
                  program.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="shell contact-inner reveal">
            <p className="section-label">
              <span>06</span> Contact
            </p>
            <div className="contact-grid">
              <div>
                <h2>
                  Have a real problem where <em>AI could help?</em>
                </h2>
                <p>
                  I’m open to junior opportunities in Applied AI, Computer
                  Vision, NLP, and Machine Learning Engineering.
                </p>
              </div>
              <div className="contact-links">
                <a href="mailto:ayahalmalla@gmail.com">
                  <Icon name="mail" />
                  <span>
                    Email<small>ayahalmalla@gmail.com</small>
                  </span>
                  <Icon name="arrow" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aya-almalla"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="linkedin" />
                  <span>
                    LinkedIn<small>aya-almalla</small>
                  </span>
                  <Icon name="arrow" />
                </a>
                <a href="https://t.me/aya007" target="_blank" rel="noreferrer">
                  <Icon name="telegram" />
                  <span>
                    Telegram<small>@aya007</small>
                  </span>
                  <Icon name="arrow" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <div>
            <strong>Aya Almalla</strong>
            <span>Artificial Intelligence Engineer</span>
          </div>
          <div>
            <a
              href="https://github.com/Ayama11"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="assets/Aya_Almalla_CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a href="#top">Back to top ↑</a>
          </div>
          <small>© 2026 Aya Almalla</small>
        </div>
      </footer>
      <dialog
        ref={dialogRef}
        aria-labelledby="dialog-title"
        onClose={() => {
          setActiveProject(null)
          setGalleryProject(null)
        }}
        onClick={(event) => {
          if (event.target !== dialogRef.current) return
          const bounds = dialogRef.current.getBoundingClientRect()
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            closeDialog()
        }}
      >
        <button
          className="dialog-close"
          onClick={closeDialog}
          aria-label="Close dialog"
        >
          <Icon name="close" />
        </button>
        {activeProject && <CaseStudy project={activeProject} />}
        {galleryProject && <Gallery project={galleryProject} />}
      </dialog>
    </>
  )
}

function SectionTitle({
  index,
  label,
  title,
}: {
  index: string
  label: string
  title: string
}) {
  return (
    <div className="section-title reveal">
      <p className="section-label">
        <span>{index}</span>
        {label}
      </p>
      <h2>{title}</h2>
    </div>
  )
}

function ContextMark() {
  return (
    <div className="signature-mark">
      <svg viewBox="0 0 420 420" role="img" aria-labelledby="signature-title">
        <title id="signature-title">
          Context aperture — an original mark connecting perception,
          understanding, and application
        </title>
        <g
          className="signature-paths"
          fill="none"
          stroke="currentColor"
          strokeWidth="17"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M210 82C143 82 94 130 94 194C94 227 114 247 141 247H210" />
          <path
            d="M210 82C143 82 94 130 94 194C94 227 114 247 141 247H210"
            transform="rotate(120 210 210)"
          />
          <path
            d="M210 82C143 82 94 130 94 194C94 227 114 247 141 247H210"
            transform="rotate(240 210 210)"
          />
        </g>
        <circle className="signature-seed" cx="210" cy="210" r="6.5" />
      </svg>
      <span>From signal to solution</span>
    </div>
  )
}

function SkillIcon({ index }: { index: number }) {
  const paths = [
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v9m-8-4.5 8 4.5 8-4.5M12 12v9" />
    </>,
    <>
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </>,
    <>
      <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />
    </>,
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 21v-3a6 6 0 0 1 12 0v3m2-16a3 3 0 0 1 0 6m1 4a5 5 0 0 1 3 5" />
    </>,
  ]
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[index]}
    </svg>
  )
}
function ProjectBody({
  project,
  featured = false,
  onCaseStudy,
  onGallery,
}: {
  project: Project
  featured?: boolean
  onCaseStudy: () => void
  onGallery?: () => void
}) {
  return (
    <div className={`project-body ${featured ? "featured-body" : ""}`}>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      {featured && <p className="featured-role">{project.role}</p>}
      {project.metrics && (
        <div className="project-metrics">
          {project.metrics.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
      <div className="project-actions">
        {project.href && (
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.hrefLabel} <Icon name="arrow" />
          </a>
        )}
        {onGallery && <button onClick={onGallery}>View gallery</button>}
        <button onClick={onCaseStudy}>
          Case study <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  )
}
function CaseStudy({ project }: { project: Project }) {
  return (
    <div className="dialog-content">
      <p className="dialog-kicker">{project.kicker}</p>
      <h2 id="dialog-title">{project.title}</h2>
      <img className="case-cover" src={project.image} alt={project.imageAlt} />
      <p className="dialog-intro">{project.intro}</p>
      <h3>My role</h3>
      <p>{project.role}</p>
      {project.metrics && (
        <div className="dialog-metrics">
          {project.metrics.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      )}
      <h3>What I worked on</h3>
      <ul>
        {project.details.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="dialog-note">{project.note}</p>
    </div>
  )
}
function Gallery({ project }: { project: Project }) {
  return (
    <div className="dialog-content gallery-content">
      <p className="dialog-kicker">Project demo</p>
      <h2 id="dialog-title">{project.title} gallery</h2>
      <p className="dialog-intro">
        Selected product and model-output views from the project.
      </p>
      <div className={`gallery-grid ${project.key}`}>
        {project.gallery?.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${project.title} demo view ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
