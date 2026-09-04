const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const header = $('.site-header');
const menuButton = $('#menuButton');
const navLinks = $('#navLinks');

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

menuButton?.addEventListener('click', () => {
  const open = navLinks?.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(Boolean(open)));
});

$$('.nav-links a').forEach(link => link.addEventListener('click', () => {
  navLinks?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));


document.addEventListener('click', event => {
  if (!navLinks?.classList.contains('open')) return;
  if (navLinks.contains(event.target) || menuButton?.contains(event.target)) return;
  navLinks.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks?.classList.contains('open')) {
    navLinks.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.focus();
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal-up').forEach(el => revealObserver.observe(el));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    $$('.nav-links a').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-40% 0px -45% 0px', threshold: 0 });
$$('main section[id]').forEach(section => sectionObserver.observe(section));

/* Hero rotating focus */
const focusWords = ['computer vision', 'NLP & RAG', 'AI deployment', 'medical AI', 'product-focused AI'];
let focusIndex = 0;
const focusEl = $('#rotatingFocus');
if (focusEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    focusEl.classList.add('swap');
    setTimeout(() => {
      focusIndex = (focusIndex + 1) % focusWords.length;
      focusEl.textContent = focusWords[focusIndex];
      focusEl.classList.remove('swap');
    }, 240);
  }, 2600);
}

/* Dialog data */
const projectData = {
  cadify: {
    kicker: 'Graduation Project · Computer Vision · AI Engineering',
    title: 'CADify',
    intro: 'An end-to-end system for converting raster architectural floor plans into structured, editable CAD/DXF outputs with support for 3D scene generation.',
    role: 'I designed and developed the complete topology reconstruction stage and owned its code, evaluation workflow, JSON handoff, FastAPI endpoint, and Modal deployment/integration.',
    metrics: [['15', 'manually labeled floor plans'], ['0.93', 'wall reconstruction F1'], ['0.99 / 0.96', 'door-window F1 / IoU'], ['3h → 1–2m', 'manual to automated workflow']],
    bullets: [
      'Converted model outputs into connected walls, junctions, openings, rooms, and downstream CAD/3D handoff data.',
      'Built evaluation tooling against manually labeled topology ground truth.',
      'Created the FastAPI endpoint and connected model inference on Modal.',
      'Produced outputs that can feed editable CAD workflows and the 3D stage.'
    ],
    note: 'Source code and model assets remain private because CADify is a team graduation project. This portfolio presents non-confidential architecture, responsibilities, results, and demo output only.'
  },
  eyeai: {
    kicker: 'Medical AI · Team Leadership · Product Thinking',
    title: 'EyeAI',
    intro: 'An AI-assisted retinal screening project focused on diabetic retinopathy classification and lesion-level segmentation.',
    role: 'I led the full team while also developing the AI workstream. The model experiments and reported AI results were my direct technical work.',
    metrics: [['0.93', 'Macro AUC on the test set'], ['5', 'DR severity grades'], ['8', 'competing teams'], ['2', 'ophthalmologists consulted']],
    bullets: [
      'Curated, cleaned, and balanced retinal datasets.',
      'Trained and evaluated YOLO26 for five-grade diabetic retinopathy classification.',
      'Evaluated U-Net++ with a ResNet34 encoder for lesion segmentation.',
      'Built the Syrian market and go-to-market study and used physician discussions to inform the business model.',
      'The project won Best Team among 8 teams; I received Best Leader among 8 team leaders.'
    ],
    note: 'The project is presented as clinical decision support, not as a replacement for ophthalmologists.'
  },
  haloscan: {
    kicker: 'Medical Computer Vision · Real Laboratory Workflow',
    title: 'HaloScan',
    intro: 'A computer vision workflow for supporting Antibiotic Susceptibility Testing from Petri-dish images for Al-Khateeb Laboratory in Damascus.',
    role: 'I labeled the YOLO training dataset, trained the antibiotic-disc detection model, and contributed to the research and evaluation of the wider workflow.',
    metrics: [['320', 'real laboratory images'], ['0.90+', 'disc detection precision'], ['0.94 / 0.91', 'segmentation Dice / IoU'], ['10–15m → 1–2m', 'analysis & reporting time']],
    bullets: [
      'Worked with real laboratory imagery rather than a purely synthetic or classroom dataset.',
      'Supported an automation flow spanning detection, inhibition-zone analysis, measurement, and reporting.',
      'Helped reduce the full manual workflow to roughly one to two minutes.'
    ],
    note: 'Client code, dataset, and proprietary implementation details remain private.'
  },
  shifaa: {
    kicker: 'Arabic NLP · Classification · Deployment',
    title: 'Shifaa',
    intro: 'An end-to-end Arabic NLP system that classifies medical questions into 16 specialties and exposes the result through an interactive Streamlit application.',
    role: 'I worked through EDA, preprocessing experiments, leakage checks, and model comparison before selecting the final transformer-based approach.',
    metrics: [['16', 'medical categories'], ['0.82', 'accuracy'], ['0.70', 'macro-F1']],
    bullets: [
      'Compared TF-IDF with traditional ML baselines, CNN/LSTM approaches, and AraBERT.',
      'Addressed data leakage and class-distribution issues during experimentation.',
      'Deployed the final model through Hugging Face and Streamlit.'
    ],
    note: 'The live demo is available directly from the project card.'
  },
  equipment: {
    kicker: 'Computer Vision · Tracking · Streaming Analytics',
    title: 'Equipment Utilization',
    intro: 'A compact end-to-end prototype for monitoring excavator activity from video and turning visual detections into operational utilization analytics.',
    role: 'I built the post-detection workflow that links detections across frames, analyzes motion and machine state, classifies activity, emits structured events, stores them, and visualizes the results in an interactive dashboard.',
    metrics: [['ACTIVE / INACTIVE', 'utilization state'], ['4', 'activity classes'], ['Kafka + PostgreSQL', 'event streaming and storage'], ['Streamlit', 'interactive dashboard']],
    bullets: [
      'Tracks the excavator across frames using detection geometry such as IoU, center distance, and size consistency.',
      'Uses motion analysis, including optical flow and region-based logic, so arm-only movement is not mistaken for inactivity.',
      'Classifies work states into DIGGING, SWINGING_LOADING, DUMPING, and WAITING.',
      'Generates structured JSON events, streams them through Kafka, stores them in PostgreSQL, and reports active time, idle time, and utilization percentage.'
    ],
    note: 'The public repository focuses on the post-detection pipeline; the YOLOv8n detector was trained separately using Roboflow data plus images extracted from project videos.'
  },
  zuma: {
    kicker: 'Classical Computer Vision · Real-Time Automation',
    title: "Zuma's Magician",
    intro: 'A real-time computer vision system that automates Zuma gameplay without using machine learning.',
    role: 'I built the full vision and decision loop, from ROI selection and motion analysis to target selection and automated action.',
    metrics: [['OpenCV', 'core vision stack'], ['Real-time', 'decision loop'], ['Classical CV', 'no ML model required']],
    bullets: [
      'Used Hough-circle detection and HSV color analysis for ball understanding.',
      'Used optical flow and path logic for motion and trajectory reasoning.',
      'Connected perception to target selection and automated control.'
    ],
    note: 'This project highlights classical computer vision and systems thinking rather than deep learning.'
  },
  rag: {
    kicker: 'RAG · NLP · LLM Application',
    title: 'Lecture-Saver 3000',
    intro: 'A PDF question-answering assistant designed to ground answers in course documents rather than rely on an LLM alone.',
    role: 'I built the retrieval workflow, document ingestion, chunking, metadata handling, and source-citation behavior.',
    metrics: [['RAG', 'retrieval-augmented generation'], ['File + page', 'source-level citations'], ['ChromaDB', 'vector storage']],
    bullets: [
      'Ingests course PDFs and prepares chunked content for semantic retrieval.',
      'Uses Sentence Transformers for embeddings and Gemini for answer generation.',
      'Returns file/page references so users can trace answers back to the source.'
    ],
    note: 'The project emphasizes grounded retrieval behavior instead of unverified accuracy claims.'
  }
};

const impactData = {
  cadify: {
    title: 'CADify impact',
    text: 'A floor plan that can take roughly three hours to reconstruct manually can be processed by the automated workflow in about one to two minutes, while still producing editable CAD-ready output and supporting 3D generation.'
  },
  eyeai: {
    title: 'EyeAI result',
    text: 'The five-grade diabetic retinopathy classifier achieved 0.93 Macro AUC on the test set. I also led the team that won Best Team among 8 competing teams.'
  },
  haloscan: {
    title: 'HaloScan scale',
    text: 'The project used 320 real laboratory images from Al-Khateeb Laboratory, giving the work a real-world data and workflow context.'
  },
  leadership: {
    title: 'Leadership scale',
    text: 'As HR Manager, I supported 40 trainees and their team leads, followed progress, helped onboard new members, and coordinated with Finance and IT.'
  }
};

const galleryData = {
  eyeai: {
    title: 'EyeAI — Demo Gallery',
    intro: 'Selected retinal analysis outputs showing classification summaries and lesion segmentation overlays.',
    images: [
      ['assets/eyeai-demo-1.jpg', 'Retinal analysis summary with segmentation overlay', 'landscape'],
      ['assets/eyeai-demo-2.jpg', 'Proliferative diabetic retinopathy analysis summary', 'landscape'],
      ['assets/eyeai-demo-3.jpg', 'Retinal lesion contour overlay', 'landscape'],
      ['assets/eyeai-demo-4.jpg', 'Lesion layer segmentation close-up', 'landscape']
    ]
  },
  haloscan: {
    title: 'HaloScan — App Demo',
    intro: 'Selected app and model-output views from the AST workflow. The source code and client dataset remain private.',
    images: [
      ['assets/haloscan-demo-1.jpg', 'HaloScan welcome screen', 'portrait'],
      ['assets/haloscan-demo-2.jpg', 'HaloScan laboratory history screen', 'portrait'],
      ['assets/haloscan-demo-3.jpg', 'HaloScan antimicrobial susceptibility result screen', 'portrait'],
      ['assets/haloscan-demo-4.jpg', 'Antibiotic disc detection output', 'wide']
    ]
  }
};

const processData = [
  {
    number: '01',
    heading: 'Understand the problem before choosing the model.',
    copy: 'Clarify the users, constraints, data, inputs, outputs, and what success should look like.',
    list: ['Define the actual use case and decision flow.', 'Map the data and edge cases.', 'Choose evaluation criteria that match the real goal.']
  },
  {
    number: '02',
    heading: 'Experiment with evidence, not assumptions.',
    copy: 'Prepare data carefully, compare approaches, inspect failure cases, and avoid over-trusting a single metric.',
    list: ['Clean and balance the data.', 'Compare baselines and stronger architectures.', 'Inspect errors, leakage, and failure modes.']
  },
  {
    number: '03',
    heading: 'Engineer the workflow around the model.',
    copy: 'Turn the best approach into a structured system with clear interfaces, handoffs, and reproducible logic.',
    list: ['Build APIs and structured outputs.', 'Design for integration and downstream use.', 'Keep the pipeline maintainable and deployment-ready.']
  },
  {
    number: '04',
    heading: 'Deliver something useful and measurable.',
    copy: 'Connect the technical output to a workflow, a user need, and a measurable improvement.',
    list: ['Deploy and document the solution.', 'Measure time, quality, or decision-support impact.', 'Communicate results to technical and non-technical stakeholders.']
  }
];

const dialog = $('#caseDialog');
const dialogContent = $('#dialogContent');
const dialogClose = $('#dialogClose');

function openDialog(html, gallery = false) {
  if (!dialog || !dialogContent) return;
  dialogContent.classList.toggle('gallery-dialog', gallery);
  dialogContent.innerHTML = html;
  dialog.showModal();
}

function renderCaseStudy(project) {
  const metrics = project.metrics.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('');
  const bullets = project.bullets.map(item => `<li>${item}</li>`).join('');
  return `
    <div class="dialog-kicker">${project.kicker}</div>
    <h2 id="caseTitle">${project.title}</h2>
    <p>${project.intro}</p>
    <h3>My role</h3>
    <p>${project.role}</p>
    <div class="dialog-metrics">${metrics}</div>
    <h3>What I worked on</h3>
    <ul>${bullets}</ul>
    <p class="dialog-note">${project.note}</p>
  `;
}

function renderGallery(gallery) {
  const tiles = gallery.images.map(([src, alt, kind]) => `
    <figure class="gallery-tile ${kind}">
      <img src="${src}" alt="${alt}" loading="lazy" />
    </figure>
  `).join('');
  return `
    <div class="dialog-kicker">Project demo</div>
    <h2 id="caseTitle">${gallery.title}</h2>
    <p class="gallery-intro">${gallery.intro}</p>
    <div class="gallery-grid">${tiles}</div>
  `;
}

$$('[data-case]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectData[button.dataset.case];
    if (project) openDialog(renderCaseStudy(project), false);
  });
});

$$('[data-gallery]').forEach(button => {
  button.addEventListener('click', () => {
    const gallery = galleryData[button.dataset.gallery];
    if (gallery) openDialog(renderGallery(gallery), true);
  });
});

$$('[data-impact]').forEach(button => {
  button.addEventListener('click', () => {
    const item = impactData[button.dataset.impact];
    if (!item) return;
    openDialog(`
      <div class="dialog-kicker">Impact</div>
      <h2 id="caseTitle">${item.title}</h2>
      <p>${item.text}</p>
    `, false);
  });
});

dialogClose?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
  if (!inside) dialog.close();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && dialog?.open) dialog.close();
});

/* Interactive process */
const processTabs = $$('.process-tab');
const processNumber = $('#processNumber');
const processHeading = $('#processHeading');
const processCopy = $('#processCopy');
const processList = $('#processList');

function setProcess(index) {
  const data = processData[index];
  if (!data) return;
  processNumber.textContent = data.number;
  processHeading.textContent = data.heading;
  processCopy.textContent = data.copy;
  processList.innerHTML = data.list.map(item => `<li>${item}</li>`).join('');
  processTabs.forEach((tab, tabIndex) => {
    const active = tabIndex === index;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
  });
}

processTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setProcess(index));
  if (window.matchMedia('(pointer:fine)').matches) {
    tab.addEventListener('mouseenter', () => setProcess(index));
  }
});

/* Interactive CADify cover: zoom across the generated cover without using raw screenshots. */
const cadifyCover = $('#cadifyCover');
const cadifyNote = $('#cadifyStageNote');
const cadifyStages = $$('.cadify-stage');
const cadifyView = [
  { transform: 'scale(1)', origin: 'center', note: 'A polished overview of the complete image → topology → CAD/3D workflow.' },
  { transform: 'scale(1.35)', origin: '16% 68%', note: 'Plan input — the workflow begins from a raster or hand-drawn architectural floor plan.' },
  { transform: 'scale(1.34)', origin: '50% 68%', note: 'Topology — walls, openings, rooms, and structural relationships are reconstructed into structured geometry.' },
  { transform: 'scale(1.34)', origin: '84% 68%', note: 'CAD & 3D — structured output feeds editable CAD and downstream 3D generation.' }
];

cadifyStages.forEach((button, index) => {
  button.setAttribute('role', 'tab');
  button.setAttribute('aria-selected', String(index === 0));
  button.addEventListener('click', () => {
    const view = cadifyView[index];
    cadifyStages.forEach((item, itemIndex) => {
      const active = itemIndex === index;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    if (cadifyCover) {
      cadifyCover.style.transform = view.transform;
      cadifyCover.style.transformOrigin = view.origin;
    }
    if (cadifyNote) cadifyNote.textContent = view.note;
  });
});

/* =========================
   V5 interactive hero network
   ========================= */
const heroVisual = $('#heroVisual');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');

if (heroVisual && !reducedMotion.matches) {
  const resetHeroParallax = () => {
    heroVisual.style.setProperty('--hero-x', '0px');
    heroVisual.style.setProperty('--hero-y', '0px');
  };

  if (finePointer.matches) {
    heroVisual.addEventListener('pointermove', event => {
      const rect = heroVisual.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      heroVisual.style.setProperty('--hero-x', `${(px * 12).toFixed(1)}px`);
      heroVisual.style.setProperty('--hero-y', `${(py * 10).toFixed(1)}px`);
    });
    heroVisual.addEventListener('pointerleave', resetHeroParallax);
  }

  heroVisual.addEventListener('click', () => {
    heroVisual.classList.remove('is-pulsing');
    void heroVisual.offsetWidth;
    heroVisual.classList.add('is-pulsing');
    window.setTimeout(() => heroVisual.classList.remove('is-pulsing'), 950);
  });
}
