export interface SkillCluster {
  category: string;
  code: string;
  tagline: string;
  skills: {
    name: string;
    description: string;
    level: "Core" | "Advanced" | "Proficient";
    highlight?: boolean;
  }[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  unit?: string;
  subtext: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tech: string[];
  description: string;
  architectureDetails: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics: ProjectMetric[];
  pipeline: string[];
  qa: {
    problem: string;
    built: string;
    howItWorks: string;
    learned: string;
    proof: string;
  };
}

export interface LearningItem {
  issuer: string;
  title: string;
  modules: string[];
  icon: string;
  category: "Algorithms & Languages" | "AI & Machine Learning" | "Applied Systems";
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "KAUSTAV GHOSH HAZRA",
    firstName: "KAUSTAV",
    lastName: "GHOSH HAZRA",
    title: "AI / ML ENGINEER & SOFTWARE DEVELOPER",
    tagline: "I BUILD SYSTEMS THAT TURN IDEAS INTO SOMETHING REAL.",
    subtagline: "Bridging mathematical rigor, low-level neural architectures, and robust software engineering.",
    currentRole: "Third-Year B.Tech in Computer Science & Engineering",
    institution: "Meghnad Saha Institute of Technology",
    graduationYear: "2028",
    status: "Available for High-Impact Roles & Research Collaborations",
    systemId: "SYS-KGH-2026",
  },

  links: {
    github: "https://github.com/KAUSTAV-GH",
    linkedin: "https://www.linkedin.com/in/kaustav-ghosh-hazra-2005k/",
    leetcodePrimary: "https://leetcode.com/u/Kaustav_Ghosh_Hazra/",
    leetcodeSecondary: "https://leetcode.com/KAUSTAV-GH/",
    email: "mailto:kaustavghoshhazra123@gmail.com",
    emailRaw: "kaustavghoshhazra123@gmail.com",
  },

  philosophy: {
    questionTitle: "BEFORE THE SYSTEM, THERE WAS A QUESTION.",
    quote1: "I DON'T JUST WANT CODE TO RUN.",
    quote2: "I WANT TO UNDERSTAND WHY IT WORKS.",
    narrative:
      "True engineering begins at the ground floor. While high-level libraries abstract away the complexities of modern computing, real intuition comes from deriving mathematical tensors, implementing backpropagation step-by-step from scratch, and architecting systems with predictable performance and zero black-box dependencies.",
  },

  skills: [
    {
      category: "INTELLIGENCE",
      code: "CLUSTER / 01",
      tagline: "Neural networks, mathematical optimization, and vision pipelines.",
      skills: [
        { name: "Machine Learning", description: "Supervised & Unsupervised foundational paradigms", level: "Core", highlight: true },
        { name: "Deep Learning", description: "Multi-layer representations & loss optimization", level: "Core", highlight: true },
        { name: "Neural Networks (from scratch)", description: "Matrix math, forward & backward propagation", level: "Advanced", highlight: true },
        { name: "Convolutional Neural Networks (CNN)", description: "Kernel filters, pooling, and spatial convolutions", level: "Advanced", highlight: true },
        { name: "Computer Vision", description: "Feature extraction, edge detection & spatial analysis", level: "Proficient" },
        { name: "Supervised Learning", description: "Classification, regression & decision boundaries", level: "Core" },
        { name: "Feature Engineering", description: "Dimensionality reduction, scaling & data cleansing", level: "Proficient" },
        { name: "Model Training & Evaluation", description: "Validation curves, confusion matrices, metrics", level: "Core" },
        { name: "Model Optimization", description: "Learning rates, activation tuning & convergence", level: "Proficient" },
      ],
    },
    {
      category: "ENGINEERING",
      code: "CLUSTER / 02",
      tagline: "Low-level computation, algorithmic efficiency, and memory control.",
      skills: [
        { name: "Python", description: "Scientific computing, numerical arrays & ML scripting", level: "Core", highlight: true },
        { name: "NumPy", description: "Vectorized linear algebra & tensor manipulation", level: "Advanced", highlight: true },
        { name: "Pandas", description: "High-performance tabular manipulation & analytics", level: "Proficient" },
        { name: "Scikit-learn", description: "Data preprocessing, pipelines & evaluation metrics", level: "Core" },
        { name: "Java", description: "Object-oriented design patterns & backend fundamentals", level: "Proficient" },
        { name: "C", description: "Pointer arithmetic, manual memory & systems programming", level: "Proficient" },
        { name: "C++", description: "Data structures, algorithms & template programming", level: "Proficient", highlight: true },
        { name: "JavaScript (ES6+)", description: "Asynchronous concurrency, event loops & APIs", level: "Proficient" },
      ],
    },
    {
      category: "WEB & APIS",
      code: "CLUSTER / 03",
      tagline: "Interactive client interfaces and deterministic data communication.",
      skills: [
        { name: "HTML5", description: "Semantic document architecture & accessibility", level: "Core" },
        { name: "CSS3", description: "Modern responsive layouts, flexbox & transitions", level: "Core" },
        { name: "JavaScript DOM", description: "Dynamic manipulation & event-driven UI updates", level: "Core" },
        { name: "Fetch API", description: "Asynchronous HTTP telemetry & JSON parsing", level: "Core", highlight: true },
        { name: "REST APIs", description: "Client-server contracts & stateless integrations", level: "Core", highlight: true },
      ],
    },
    {
      category: "WORKBENCH & TOOLS",
      code: "CLUSTER / 04",
      tagline: "Development environments, version control, and data persistence.",
      skills: [
        { name: "Git", description: "Distributed version control, branching & cherry-picking", level: "Core" },
        { name: "GitHub", description: "Collaboration, open-source CI & project management", level: "Core", highlight: true },
        { name: "Streamlit", description: "Rapid prototyping of ML model interfaces", level: "Proficient" },
        { name: "SQLite", description: "Embedded relational database schemas & queries", level: "Proficient" },
        { name: "VS Code", description: "Polyglot workspace setup, debugging & profiling", level: "Core" },
      ],
    },
  ] as SkillCluster[],

  projects: [
    {
      id: "cnn-from-scratch",
      number: "01",
      title: "CNN WITH SIGMOID — FROM SCRATCH",
      subtitle: "Pure NumPy Neural Architecture with Analytical Backpropagation",
      category: "DEEP LEARNING / SCIENTIFIC COMPUTATION",
      tech: ["Python", "NumPy", "Scikit-learn", "Matplotlib"],
      description:
        "Engineered a complete Convolutional Neural Network from mathematical first principles using only Python and NumPy without PyTorch or TensorFlow. Implements custom 2D convolution, sigmoid activation, max pooling, flattening, dense linear transformations, softmax probabilities, cross-entropy loss, and rigorous backward pass gradients.",
      architectureDetails: [
        "Zero Framework Dependency: 100% pure NumPy array operations.",
        "Analytical Gradient Derivation: Custom backpropagation calculus for convolutional filters and dense weight matrices.",
        "Custom Convolution Engine: 3x3 kernel slide with stride 1 and edge padding.",
        "Sigmoid & Softmax Mathematical Formulation: Numerically stable exponents with clipping.",
      ],
      githubUrl: "https://github.com/KAUSTAV-GH",
      metrics: [
        { label: "TEST ACCURACY", value: "95.28", unit: "%", subtext: "Verified on unseen 8x8 digits" },
        { label: "TRAINING ACCURACY", value: "95.69", unit: "%", subtext: "Zero overfit divergence" },
        { label: "INFERENCE LATENCY", value: "~0.43", unit: "ms", subtext: "Per image on standard CPU" },
        { label: "THROUGHPUT", value: "2,300+", unit: "img/s", subtext: "Vectorized batch processing" },
        { label: "DATASET", value: "Scikit-learn Digits", subtext: "1,797 samples (8x8 grayscale)" },
        { label: "TRAINING EPOCHS", value: "20", subtext: "Rapid cross-entropy convergence" },
      ],
      pipeline: [
        "INPUT IMAGE (8x8 Grayscale Matrix)",
        "CONVOLUTION (3x3 Kernel Filter Matrix)",
        "FEATURE MAP (Spatial Pattern Extraction)",
        "SIGMOID (Non-Linear Activation Mapping)",
        "MAX POOLING (2x2 Spatial Downsampling)",
        "FLATTEN (1D Vector Transformation)",
        "DENSE (Linear Weight Matrix Product)",
        "SOFTMAX (Normalized Probability Distribution)",
        "PREDICTION (Argmax Class Identification)",
      ],
      qa: {
        problem:
          "High-level frameworks (PyTorch/TensorFlow) hide tensor memory layouts, gradient accumulation bugs, and internal matrix computations behind opaque C++ bindings.",
        built:
          "A modular, fully hand-coded Convolutional Neural Network with custom mathematical forward and backward passes written purely in Python and NumPy.",
        howItWorks:
          "Applies a 3x3 kernel convolution across the 8x8 input, activates via Sigmoid, performs 2x2 max-pooling downsampling, flattens to a feature vector, computes dense affine logits, and maps to probabilities using Softmax. Gradients flow backwards analytically using chain-rule calculus.",
        learned:
          "Deep mastery of gradient calculus, vanishing gradient dynamics in sigmoid activations, memory stride efficiencies in NumPy, and spatial invariance in feature maps.",
        proof:
          "Achieved 95.28% test accuracy on unseen Scikit-learn Digits, ~0.43ms latency per sample, and 2,300+ images/sec CPU throughput across 20 training epochs.",
      },
    },
    {
      id: "sky-sense-weather",
      number: "02",
      title: "SKY SENSE WEATHER",
      subtitle: "Dynamic Asynchronous Atmospheric Telemetry Engine",
      category: "FRONTEND / ASYNC REST INTEGRATION",
      tech: ["HTML5", "CSS3", "JavaScript", "Fetch API", "REST API"],
      description:
        "A responsive atmospheric intelligence interface engineered with modern JavaScript and vanilla CSS. Consumes live meteorological REST endpoints, transforms raw payloads into structured telemetry, and renders real-time weather analytics.",
      architectureDetails: [
        "Pure Vanilla Stack: Zero heavy UI dependencies for instant cold boot.",
        "Asynchronous Pipeline: Resilient Fetch API integration with error handling & retry fallback.",
        "Atmospheric Design System: Dynamic visual states reflecting ambient meteorological conditions.",
      ],
      githubUrl: "https://github.com/KAUSTAV-GH/Skysence-weather",
      metrics: [
        { label: "DATA PROTOCOL", value: "REST / JSON", subtext: "Stateless asynchronous telemetry" },
        { label: "INTEGRATION", value: "Fetch API", subtext: "Native browser HTTP runtime" },
        { label: "DEPENDENCIES", value: "0", subtext: "100% lightweight vanilla architecture" },
      ],
      pipeline: [
        "ATMOSPHERE (Real-World Meteorological Sensor Data)",
        "DATA (Stateless JSON HTTP Payload)",
        "API (RESTful Endpoint Handlers & Validation)",
        "INTERFACE (Reactive DOM State Render)",
        "WEATHER (Interactive Client Dashboard)",
      ],
      qa: {
        problem:
          "Weather dashboards often overload users with slow-loading bundles, unoptimized DOM redraws, and brittle network request handling.",
        built:
          "Sky Sense Weather — a fast, lightweight, atmospheric client application built with clean modular JavaScript and real-time REST integration.",
        howItWorks:
          "Dispatches async HTTP requests via Fetch API, parses geographic coordinates and weather metrics, updates CSS custom properties to reflect atmospheric conditions, and renders reactive UI components without external frameworks.",
        learned:
          "Asynchronous error containment, DOM paint optimization, state-driven CSS theming, and resilient API contract handling.",
        proof:
          "Live working open-source repository at github.com/KAUSTAV-GH/Skysence-weather with instant load times.",
      },
    },
  ] as Project[],

  engineeringLoop: [
    { step: "01", name: "UNDERSTAND", description: "Deconstruct the problem into fundamental mathematical & computational constraints." },
    { step: "02", name: "DESIGN", description: "Architect data pipelines, tensor dimensions, and deterministic software interfaces." },
    { step: "03", name: "BUILD", description: "Translate mathematical formulations and system designs into clean, modular code." },
    { step: "04", name: "TEST", description: "Subject models and codebases to boundary tests, edge cases, and stress validation." },
    { step: "05", name: "MEASURE", description: "Quantify loss convergence, throughput, memory footprint, and test accuracy." },
    { step: "06", name: "IMPROVE", description: "Optimize bottlenecks, fine-tune hyper-parameters, and eliminate technical debt." },
  ],

  hackathon: {
    title: "UNDER PRESSURE, I BUILD.",
    event: "Smart India Hackathon (SIH) — Internal Rounds",
    participation: "Participated in internal selection rounds twice",
    atmosphere: "High-Velocity Rapid Prototyping & Algorithmic Problem Solving",
    description:
      "Engineered software solutions under tight time constraints during two consecutive Smart India Hackathon internal rounds at Meghnad Saha Institute of Technology. Collaborated on system breakdown, architecture feasibility, and rapid implementation under competitive pressure.",
    takeaway: "Validated agility, clear architectural communication, and the discipline to ship functional code when every minute matters.",
  },

  dsa: {
    title: "TRAINING THE ENGINE.",
    subtitle: "Data Structures, Algorithmic Problem Solving & Mathematical Discipline",
    description:
      "Consistent problem-solving practice on LeetCode sharpening algorithmic intuition across arrays, two pointers, binary search, trees, graphs, and dynamic programming.",
    platforms: [
      { name: "LeetCode Primary Profile", url: "https://leetcode.com/u/Kaustav_Ghosh_Hazra/", handle: "Kaustav_Ghosh_Hazra" },
      { name: "LeetCode Secondary Handle", url: "https://leetcode.com/KAUSTAV-GH/", handle: "KAUSTAV-GH" },
    ],
  },

  learningArchive: [
    {
      issuer: "Coursera",
      title: "C & C++ Programming Foundations",
      category: "Algorithms & Languages",
      icon: "Code",
      modules: [
        "C for Everyone: Programming Fundamentals",
        "C for Everyone: Structured Programming",
        "C++ for C Programmers (Part A)",
        "C++ for C Programmers (Part B)",
      ],
    },
    {
      issuer: "Microsoft AI Learning Series",
      title: "Advanced Artificial Intelligence Track",
      category: "AI & Machine Learning",
      icon: "Brain",
      modules: [
        "Computer Vision",
        "Natural Language Processing (NLP)",
        "Generative AI",
        "Speech AI",
        "Information Extraction",
        "Azure Machine Learning",
      ],
    },
    {
      issuer: "Specialized AI Workshops",
      title: "Next-Gen Agentic & Generative AI",
      category: "AI & Machine Learning",
      icon: "Cpu",
      modules: [
        "AI Agents Architecture",
        "Generative AI Foundations",
        "Agentic AI Workflow Systems",
      ],
    },
    {
      issuer: "App Development Workshop",
      title: "Mobile & Cloud Systems",
      category: "Applied Systems",
      icon: "Smartphone",
      modules: [
        "Java for Android Systems",
        "Firebase Realtime Database & Auth",
        "Client-Side API Integration",
        "Mobile Lifecycle Management",
      ],
    },
  ] as LearningItem[],

  education: {
    institution: "Meghnad Saha Institute of Technology",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science and Engineering",
    status: "Third Year Undergraduate",
    expectedGraduation: "2028",
    focus: "Artificial Intelligence, Machine Learning, Computer Vision, and Software Engineering",
  },

  workbench: [
    {
      name: "CNN-from-Scratch",
      description: "Convolutional Neural Network built with pure Python & NumPy implementing custom backpropagation and sigmoid activations.",
      tech: "Python / NumPy",
      url: "https://github.com/KAUSTAV-GH",
      type: "Core ML System",
    },
    {
      name: "Skysence-weather",
      description: "Atmospheric weather intelligence dashboard consuming REST APIs with asynchronous JavaScript Fetch handling.",
      tech: "JavaScript / HTML5 / CSS3",
      url: "https://github.com/KAUSTAV-GH/Skysence-weather",
      type: "Frontend Engine",
    },
    {
      name: "Algorithms-and-DSA",
      description: "Curated implementations of core data structures, graph traversals, and dynamic programming solutions.",
      tech: "C++ / Python / Java",
      url: "https://github.com/KAUSTAV-GH",
      type: "Problem Solving",
    },
  ],
};
