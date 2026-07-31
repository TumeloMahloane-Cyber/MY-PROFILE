AOS.init({ once: true, mirror: false });

// --- TECHNICAL EVALUATION TABS ENGINE ---
function switchSkillTab(tabKey) {
  const tabs = ["core-tech", "data-systems", "methodology"];
  tabs.forEach((key) => {
    const contentEl = document.getElementById(`tab-${key}`);
    const btnEl = document.getElementById(`btn-${key}`);
    if (key === tabKey) {
      contentEl.classList.remove("hidden");
      setTimeout(() => {
        contentEl.classList.remove("opacity-0", "scale-95");
        contentEl.classList.add("opacity-100", "scale-100");
      }, 50);
      btnEl.classList.add(
        "bg-white",
        "shadow-sm",
        "text-slate-800",
        "active-tab-glow"
      );
      btnEl.classList.remove("text-slate-500");
    } else {
      contentEl.classList.remove("opacity-100", "scale-100");
      contentEl.classList.add("opacity-0", "scale-95");
      contentEl.classList.add("hidden");
      btnEl.classList.remove(
        "bg-white",
        "shadow-sm",
        "text-slate-800",
        "active-tab-glow"
      );
      btnEl.classList.add("text-slate-500");
    }
  });
}

/* --- DYNAMIC INTERACTIVE PIPELINE SHUFFLE CONTROLLER --- */
let shuffleIntervalId = null;
let isShuffleActive = true;

function autoShuffleProjects() {
  if (!isShuffleActive) return;

  const gridWrapper = document.getElementById("project-grid-wrapper");
  const cardElements = Array.from(
    document.querySelectorAll(".project-interactive-card")
  );

  cardElements.forEach((card) => {
    card.classList.add("project-card-shuffle-out");
  });

  setTimeout(() => {
    const shuffled = cardElements.sort(() => Math.random() - 0.5);
    gridWrapper.innerHTML = "";
    shuffled.forEach((card) => gridWrapper.appendChild(card));

    setTimeout(() => {
      shuffled.forEach((card) => {
        card.classList.remove("project-card-shuffle-out");
      });
    }, 60);
  }, 450);
}

// Initialize default active cycle
shuffleIntervalId = setInterval(autoShuffleProjects, 6000);

// Toggle Engine Action
function togglePipelineEngine() {
  const controlBtn = document.getElementById("shuffler-control-btn");
  const dotIndicator = document.getElementById("shuffler-dot");
  const textLabel = document.getElementById("shuffler-label");

  if (isShuffleActive) {
    // Deactivate layout changes
    isShuffleActive = false;
    clearInterval(shuffleIntervalId);

    // Switch wrapper classes to show critical red notification mode
    controlBtn.className =
      "inline-flex items-center gap-2.5 px-4 py-2.5 bg-red-50/90 text-red-700 border border-red-200/80 rounded-xl font-mono-tech text-[10px] uppercase font-bold shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer";
    dotIndicator.className =
      "w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse-red";
    textLabel.innerText = "Auto-Shuffling Inactive";
  } else {
    // Reactivate loop sequence
    isShuffleActive = true;
    shuffleIntervalId = setInterval(autoShuffleProjects, 6000);

    // Fallback to blue runtime style mapping
    controlBtn.className =
      "inline-flex items-center gap-2.5 px-4 py-2.5 bg-blue-50/90 text-blue-700 border border-blue-200/80 rounded-xl font-mono-tech text-[10px] uppercase font-bold shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer";
    dotIndicator.className =
      "w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse-blue";
    textLabel.innerText = "Auto-Shuffling Pipeline Active";

    // Execute quick immediate shuffle step to register response feel
    autoShuffleProjects();
  }
}

// --- AMBIENT CYBER THREAT LOG EMITTER ANIMATION ---
const threatLogs = [
  {
    text: "> SCANNING PORT: 8080 ... DETECTING BRUTE FORCE ATTEMPT",
    color: "text-amber-400",
  },
  {
    text: "> WARNING: SQL injection pattern recognized on '/api/auth/login'",
    color: "text-red-400 font-bold",
  },
  {
    text: "> CORRELATING THREAT FROM IP: 198.51.100.42",
    color: "text-slate-500",
  },
  {
    text: "> INSTANTIATING PARAMETERIZED QUERY BOUNDARIES ...",
    color: "text-blue-400",
  },
  {
    text: "> SUCCESS: Malicious request blocked. Threat vector dropped.",
    color: "text-emerald-400",
  },
  {
    text: "> MONITORING NETWORK HANDSHAKE INGESTION ENGINE ...",
    color: "text-slate-500",
  },
  {
    text: "> PACKET DROPPED: Invalid checksum on segment sequence",
    color: "text-red-300",
  },
  {
    text: "> DEPLOYING SYSTEM RE-INDEX ROTATION COUNTER-MEASURE",
    color: "text-purple-400",
  },
  {
    text: "> VERIFYING RETENTION INTEGERS FOR ACTIVE REPOS ... OK",
    color: "text-emerald-500",
  },
];

const consoleBuffer = document.getElementById("cyber-threat-console");
let initialLogIndex = 0;

function emitCyberThreatLogs() {
  if (consoleBuffer.children.length > 7) {
    consoleBuffer.removeChild(consoleBuffer.firstChild);
  }

  const currentItem = threatLogs[initialLogIndex];
  const logLine = document.createElement("p");
  logLine.className = `${currentItem.color} transition-all duration-500 opacity-0 transform translate-x-1`;
  logLine.innerText = currentItem.text;

  consoleBuffer.appendChild(logLine);

  setTimeout(() => {
    logLine.classList.remove("opacity-0", "translate-x-1");
  }, 50);

  initialLogIndex = (initialLogIndex + 1) % threatLogs.length;
  setTimeout(emitCyberThreatLogs, 2500);
}
emitCyberThreatLogs();

// --- TERMINAL TYPING CONTROLLER ---
const sortingAlgorithms = [
  {
    name: "QuickSort.java",
    code: `public class QuickSort {\n    public void sort(int[] arr, int low, int high) {\n        if (low < high) {\n            int pi = partition(arr, low, high);\n            sort(arr, low, pi - 1);\n            sort(arr, pi + 1, high);\n        }\n    }\n}`,
  },
  {
    name: "MergeSort.java",
    code: `public class MergeSort {\n    void merge(int[] arr, int l, int m, int r) {\n        int n1 = m - l + 1;\n        int n2 = r - m;\n        int[] L = new int[n1];\n        int[] R = new int[n2];\n    }\n}`,
  },
];

const terminal = document.getElementById("java-terminal");
const filenameLabel = document.getElementById("terminal-filename");
let currentAlgoIndex = 0;
let currentCharIndex = 0;

function typeCodeAmbiently() {
  const currentAlgo = sortingAlgorithms[currentAlgoIndex];
  filenameLabel.textContent = currentAlgo.name;
  if (currentCharIndex < currentAlgo.code.length) {
    terminal.textContent += currentAlgo.code.charAt(currentCharIndex);
    currentCharIndex++;
    setTimeout(typeCodeAmbiently, 12);
  } else {
    setTimeout(() => {
      terminal.textContent = "";
      currentCharIndex = 0;
      currentAlgoIndex =
        (currentAlgoIndex + 1) % sortingAlgorithms.length;
      typeCodeAmbiently();
    }, 4000);
  }
}
typeCodeAmbiently();