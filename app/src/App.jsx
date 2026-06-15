import { useState } from "react";

// ── Brand mark ────────────────────────────────────────────────────────────────

function MarkDot({ size = 28 }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <g fill="var(--accent)">
        <circle cx="16" cy="46" r="1.8" />
        <circle cx="26" cy="42" r="3" />
        <circle cx="38" cy="34" r="5.5" />
        <circle cx="52" cy="20" r="9.5" />
      </g>
    </svg>
  );
}

// ── Audience config ───────────────────────────────────────────────────────────

const AUDIENCES = [
  { id: "all",        label: "All guides" },
  { id: "sme",        label: "For L&D Partners" },
  { id: "department", label: "For Departments" },
  { id: "individual", label: "For You" },
];

const AUDIENCE_STYLE = {
  sme:        { bg: "rgba(91,108,140,0.10)",  text: "#5B6C8C", border: "rgba(91,108,140,0.25)" },
  department: { bg: "rgba(107,123,92,0.10)",  text: "#6B7B5C", border: "rgba(107,123,92,0.25)" },
  individual: { bg: "rgba(21,94,99,0.09)",    text: "#155E63", border: "rgba(21,94,99,0.25)" },
};

const AUDIENCE_LABEL = {
  sme:        "For L&D Partners",
  department: "For Departments",
  individual: "For You",
};

// ── Reflective models (inline in guide 3) ─────────────────────────────────────

const MODELS = [
  { id: "era",      name: "ERA Cycle",             steps: 3,    tagline: "Quick and practical",      bestFor: "Routine clinical learning" },
  { id: "driscoll", name: "Driscoll's What Model", steps: 3,    tagline: "Three sharp questions",    bestFor: "When you need structure fast" },
  { id: "kolb",     name: "Kolb's Learning Cycle", steps: 4,    tagline: "Experience-based",         bestFor: "Patterns over time" },
  { id: "gibbs",    name: "Gibbs' Reflective Cycle", steps: 6,  tagline: "Thorough and structured",  bestFor: "Complex or significant events" },
  { id: "johns",    name: "Johns' Model",           steps: 5,    tagline: "Healthcare-specific",      bestFor: "Leadership and ethical situations" },
  { id: "free",     name: "Free reflection",        steps: null, tagline: "Your own structure",       bestFor: "Experienced reflectors" },
];

// ── Guide content ─────────────────────────────────────────────────────────────

const GUIDES = [

  // ── FULL GUIDES ──────────────────────────────────────────────────────────────

  {
    id: "feedback-that-lands",
    title: "Giving feedback that lands",
    description: "Most of us give far less feedback than we should — and when we do, we focus almost entirely on what to improve. This guide is about giving more feedback, not just better feedback — including the strengths-based kind that tells people what to keep doing.",
    audience: "sme",
    duration: "8 min",
    status: "ready",
    steps: [
      {
        label: "The feedback we're not giving",
        body: "Here's something worth saying plainly: most of us don't give enough feedback. Not developmental feedback — feedback, full stop.\n\nWe hold back the positive because we worry about it feeling hollow, or embarrassing someone, or coming across as over the top. And when we do give positive feedback, the person receiving it often bats it away — too uncomfortable to sit with it properly.\n\nBut think about what that costs. If someone doesn't know specifically what they're doing well, they can't do more of it deliberately. They can't build on their strengths. They can't walk into their next clinic, their next session, their next difficult conversation with a clear sense of themselves as a capable practitioner.\n\nThe missing half of feedback culture isn't more constructive criticism. It's more positive, specific, strengths-based feedback — given regularly, and received without deflection.",
        prompt: "When did you last tell someone specifically what they were doing well — not as a preamble to something else, but as the whole point?",
      },
      {
        label: "Start with safety",
        body: "Feedback lands when the person receiving it feels safe enough to hear it. Before you say anything substantive, the practitioner needs to feel: 'This person is on my side. They want me to succeed.' That's not soft — it's neuroscience. When people feel threatened, the brain shifts into self-protection mode and stops learning. When they feel safe, it stays open.\n\nThis matters as much for positive feedback as developmental. Someone who doesn't trust the relationship won't believe a genuine compliment — they'll be waiting for the 'but.' Take a moment before you begin: make your positive intent visible. Not as a formula — as a genuine act.",
        prompt: "Think about a piece of feedback you've received that really stuck with you. What made it possible to hear it?",
      },
      {
        label: "What you saw, not what you think",
        body: "The most useful feedback describes behaviour you actually observed — not your interpretation of it. 'You rushed through the explanation of the test results' is observable. 'You seemed anxious about the family' is an interpretation. The first opens a conversation; the second can feel like a verdict.\n\nThe SBI frame helps: Situation (what was happening), Behaviour (what you observed), Impact (what it led to). Keep it specific. Keep it in the room.\n\nAnd this applies equally to positive feedback. 'You're great with families' is too vague to be useful. 'The way you paused after you shared the results and asked if they had questions — that gave the family space to process, and you could see it land' is something a practitioner will remember and repeat.",
        prompt: "In your last feedback conversation, did you describe what you saw — or what you thought it meant?",
      },
      {
        label: "Ask before you tell",
        body: "The most effective developmental conversations start with a question, not a statement. Ask 'How do you think that went?' before you offer your view. This isn't a tactic — it's a genuine acknowledgment that the practitioner knows things you don't, including how they felt and what they were trying to do.\n\nOften they'll identify the same thing you were going to say. When that happens, your role shifts from evaluator to ally. When they don't, you've learned something about their self-perception that changes how you frame what you offer.",
        prompt: "What would you have found out if you'd asked first in your most recent assessment conversation?",
      },
      {
        label: "One thing — and make it count",
        body: "The feedback that changes practice is specific and next-step-able. 'You could improve your communication with families' is too broad to act on. 'Next time you share a complex result, try pausing and asking: What questions do you have?' is something a practitioner can do tomorrow.\n\nThe same rule applies to strengths. 'Well done today' disappears. 'The way you brought the child back into the conversation when the parents were getting anxious — keep doing that, it's a real skill' stays.\n\nOne thing per conversation. Whether it's something to build or something to keep building on — one clear, specific observation beats a comprehensive review every time. The goal isn't thoroughness. It's movement.",
        prompt: "What's the most specific piece of positive feedback you could give someone you're currently supporting — something you've actually observed that they should keep doing?",
      },
    ],
    tryThis: "Before your next feedback conversation, write down two things: one thing you specifically observed this person doing well, and one thing that would move their practice forward. Lead with the strength — not as a warm-up, but because it matters equally. Make both specific enough that they couldn't apply to anyone else.",
    video: {
      title: "Giving feedback that lands",
      description: "A short film to accompany this guide — watching it alongside is optional but recommended.",
    },
    resources: [
      { title: "The gift of feedback", type: "Article", url: "https://hayleyleverblog.wordpress.com/2023/02/02/the-gift-of-feedback/", note: "Sets the right tone — feedback as something we offer each other, not something done to us." },
      { title: "The joy of feedback", type: "Talk", url: "https://youtu.be/h4zNEl7XgXI?si=r5eFbEgkOBVfi-Si", note: "TED talk on why feedback matters — worth 15 minutes of anyone's time." },
      { title: "Common models for effective feedback in clinical education", type: "Paper", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9842479/", note: "Orsini et al (2022) — overview of Pendleton, CEDAR, and other frameworks for clinical educators." },
      { title: "NHS Healthcare Leadership Model", type: "Tool", url: "https://www.leadershipacademy.nhs.uk/healthcare-leadership-model/", note: "Free self-assessment and affordable 360 — structured feedback for NHS contexts." },
      { title: "Feedback in clinical education", type: "Resource", url: "https://www.nes.scot.nhs.uk/media/5pvmbhy3/nesd1240_unit_4_v3.pdf", note: "Comprehensive NHS Education for Scotland resource with models and practical tools." },
    ],
  },

  {
    id: "expect-pact-visit",
    title: "What to expect from a PACT visit",
    description: "An honest picture of what a PACT visit involves — what happens, what 'ready' actually means, and how to make the most of it.",
    audience: "department",
    duration: "6 min",
    status: "ready",
    steps: [
      {
        label: "What PACT is — and isn't",
        body: "PACT stands for Paediatric Audiology Capability Toolkit. A visit is not an inspection. It's a structured developmental conversation between your service and a Learning & Development Partner who knows paediatric audiology well.\n\nThe question isn't 'Have you failed?' It's 'What is your service doing well, and where does it want to grow?' The frame is appreciative: your strengths are the foundation, not the exception. The L&D Partner is not there to catch you out — they're there to help your service see itself clearly.",
        prompt: "What does your service do particularly well that a visitor would see evidence of?",
      },
      {
        label: "What happens and when",
        body: "A PACT visit typically involves a pre-visit review of documents — clinical protocols, audit data, CPD records — followed by conversations with the service lead, observation of clinical practice, and a structured feedback session.\n\nYou will know the visit is coming. This is not a surprise inspection. That preparation window is valuable — not to hide anything, but to make sure the work you are already doing is visible and legible to someone coming in from outside.",
        prompt: "What would an informed visitor see if they spent a day in your service right now?",
      },
      {
        label: "What 'ready' actually means",
        body: "Being ready for a PACT visit is not about having perfect documentation. It's about being able to talk honestly about your service — what you're proud of, what you're working on, and how you know.\n\nServices that do well have a habit of reflection built in: regular team conversations about practice, CPD that connects to real clinical questions, and a culture where it feels safe to say 'we're not sure about this yet.' That culture takes time to build, but it's also what makes a PACT visit a productive experience rather than an anxious one.",
        prompt: "What would you want a visitor to understand about your service that wouldn't be obvious from the documents?",
      },
      {
        label: "Making the most of the feedback",
        body: "The feedback from a PACT visit is the most valuable part. It's an external view of your service from someone who has seen many services at different stages — rare in any profession.\n\nTreat it as a gift that deserves a proper response: listen to understand, not to defend; write down the specific observations, not just the general impression; and within the first week, turn at least one thing into a concrete next step that you share with your team.",
        prompt: "What would make it easier for your team to receive and act on feedback honestly?",
      },
    ],
    tryThis: "Before the visit, talk to one member of your team. Ask them: 'What do you think we do brilliantly?' and 'What do you think we're still figuring out?' Use their answers — not to rehearse a script, but to go into the feedback conversation more honestly.",
    video: {
      title: "What to expect from a PACT visit",
      description: "A short orientation film for services approaching their first visit.",
    },
  },

  {
    id: "reflective-practice-approach",
    title: "Reflective practice — find your approach",
    description: "What reflective practice actually is, why it matters beyond compliance, and which model might suit you best.",
    audience: "individual",
    duration: "8 min",
    status: "ready",
    modelCards: true,
    steps: [
      {
        label: "Reflection isn't the same as thinking about it",
        body: "Most practitioners think about their work constantly. Reflective practice is something different: structured thinking that slows down an experience and asks — what happened, what did I learn, what will I do differently? — in a way that produces insight rather than just a better version of the same story.\n\nThe difference is usually this: do you come out of it with something new — a shift in understanding, an intention to try something — or do you come out with the same view, confirmed?",
        prompt: "When did you last reflect on something at work in a way that genuinely changed something — even something small?",
      },
      {
        label: "Different situations call for different approaches",
        body: "There is no single right reflective model. ERA (Experience, Reflection, Action) is quick and practical — good for routine learning after a straightforward session. Driscoll's What Model asks three sharp questions: What? So what? Now what? Gibbs is slower and more thorough — good for complex situations that need unpacking. Johns' Model is healthcare-specific and explores the ethical and contextual dimensions. Kolb's cycle is best when you're working through a pattern over time.\n\nThe most important question is: what does this experience actually need?",
        prompt: "What experience have you been carrying recently that might benefit from a more structured reflection?",
        showModels: true,
      },
      {
        label: "Reflection with a colleague beats reflection alone",
        body: "Solo reflection is valuable. Peer reflection is more powerful — partly because a colleague will ask the question you weren't going to ask yourself, and partly because saying something out loud changes it.\n\nThe question isn't whether you do peer reflection. It's whether the conversations you already have with colleagues are doing this work. Sometimes they are. Often, one good question would turn an ordinary conversation into a developmental one: 'What would you do differently?' or 'What surprised you about that?'",
        prompt: "Who in your team would be a good thinking partner for your reflective practice?",
      },
      {
        label: "Making it a habit, not a task",
        body: "The biggest obstacle to reflective practice isn't capability — it's the busyness of clinical life. Good intentions get swept away by the next patient, the next referral, the next urgent thing.\n\nThe antidote is not more discipline. It's a smaller commitment. Five minutes after a complex case. One question at the end of a team meeting. One thing written down before you leave. The depth of practice builds over time if the habit is there. The habit won't build if the commitment starts too big to survive a busy week.",
        prompt: "What's the smallest version of reflective practice that you could actually sustain?",
      },
    ],
    tryThis: "Choose one model from the list above that fits something that happened this week — a conversation, a case, a moment that stayed with you. Set yourself 10 minutes. Try it. Notice what comes up that you wouldn't have found by just thinking about it.",
    video: {
      title: "Reflective practice — a short introduction",
      description: "An accessible introduction for practitioners new to structured reflection.",
    },
  },

  // ── COMING SOON ──────────────────────────────────────────────────────────────

  {
    id: "difficult-conversations",
    title: "Having difficult conversations with compassion",
    description: "How to hold space for honest, sometimes uncomfortable conversations without losing the relationship or the person.",
    audience: "sme",
    duration: "8 min",
    status: "soon",
  },
  {
    id: "ldp-not-assessor",
    title: "Being an L&D Partner, not an assessor",
    description: "The mindset shift that changes everything — from evaluating performance to supporting development.",
    audience: "sme",
    duration: "6 min",
    status: "soon",
  },
  {
    id: "edi-assessment",
    title: "EDI in capability assessment",
    description: "How to ensure your practice is equitable and free from unconscious bias — and why it matters in paediatric audiology specifically.",
    audience: "sme",
    duration: "7 min",
    status: "soon",
  },
  {
    id: "assessor-wellbeing",
    title: "Looking after yourself as an L&D Partner",
    description: "Assessment is emotionally demanding work. This guide is for the person doing it.",
    audience: "sme",
    duration: "5 min",
    status: "soon",
  },
  {
    id: "peer-support-service",
    title: "Setting up peer support in your service",
    description: "How to build a culture of peer learning and mutual support — not as a formal programme, but as how you work.",
    audience: "department",
    duration: "7 min",
    status: "soon",
  },
  {
    id: "using-pact-feedback",
    title: "How to use feedback from a PACT visit",
    description: "Converting assessment feedback into real development — what to do in the days and weeks that follow.",
    audience: "department",
    duration: "6 min",
    status: "soon",
  },
  {
    id: "collective-anxiety",
    title: "Managing collective anxiety about assessment",
    description: "How to help your team stay grounded and purposeful when assessment pressure builds.",
    audience: "department",
    duration: "6 min",
    status: "soon",
  },
  {
    id: "psychological-safety",
    title: "Psychological safety — what it is and how to build it",
    description: "The conditions that make learning possible at work — and the small things that create or destroy them.",
    audience: "individual",
    duration: "7 min",
    status: "soon",
  },
  {
    id: "assessment-anxiety",
    title: "Managing assessment anxiety",
    description: "A reframe for practitioners who feel anxious about assessment — and a set of tools that actually help.",
    audience: "individual",
    duration: "6 min",
    status: "soon",
  },
  {
    id: "appreciative-enquiry",
    title: "Appreciative enquiry in practice",
    description: "The methodology behind PACT's developmental frame — and how to use it in your own conversations.",
    audience: "individual",
    duration: "8 min",
    status: "soon",
  },
];

// ── Resources data ────────────────────────────────────────────────────────────

const RESOURCES = [
  { id: "obs-framework",     title: "Observation framework",          type: "PDF",      desc: "The structured observation record used by L&D Partners during a PACT visit." },
  { id: "feedback-template", title: "Feedback summary template",      type: "Word",     desc: "A fillable template for structuring post-visit feedback to the service." },
  { id: "dev-plan",          title: "Development plan template",      type: "Word",     desc: "For services to document agreed development priorities and next steps after a visit." },
  { id: "reflect-sheets",    title: "Reflective practice worksheets", type: "PDF",      desc: "One worksheet per supported model — ERA, Driscoll, Kolb, Gibbs, Johns." },
  { id: "self-assess",       title: "Pre-visit self-assessment",      type: "Template", desc: "Helps services identify strengths and focus areas before a visit." },
  { id: "faq-review",        title: "Capability review FAQ",          type: "PDF",      desc: "Answers to the most common questions about what a PACT visit involves." },
];

// ── Interactive data ──────────────────────────────────────────────────────────

const INTERACTIVE = [
  { id: "real-talk",    title: "Conversation practice",       provider: "Real Talk Studio", desc: "AI-powered scenario simulations for practising assessment conversations — a safe space to try things before they matter." },
  { id: "readiness",    title: "Pre-visit readiness check",   provider: "Interactive tool", desc: "A structured self-assessment to help your service prepare — identifies strengths and focus areas before a visit." },
  { id: "model-match",  title: "Find your reflective model",  provider: "Guided selector",  desc: "Answer a few questions about your situation and get a recommendation for which reflective framework fits it best." },
];

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [audience, setAudience]       = useState("all");
  const [activeGuide, setActiveGuide] = useState(null);

  if (activeGuide) {
    return <GuideViewer guide={activeGuide} onBack={() => setActiveGuide(null)} />;
  }

  const filtered = audience === "all" ? GUIDES : GUIDES.filter(g => g.audience === audience);
  const ready    = filtered.filter(g => g.status === "ready");
  const soon     = filtered.filter(g => g.status === "soon");

  return (
    <div style={s.root}>
      <Header />
      <main style={s.main}>
        <div style={s.page}>
          <div style={s.intro}>
            <h1 style={s.h1}>Practical guides for paediatric audiology</h1>
            <p style={s.introSub}>Short, structured learning for L&D Partners, departments preparing for assessment, and individual practitioners. Each guide takes 5–8 minutes and ends with one thing to try.</p>
          </div>

          <div style={s.filterRow} role="group" aria-label="Filter by audience">
            {AUDIENCES.map(a => (
              <button key={a.id}
                style={{ ...s.filterBtn, ...(audience === a.id ? s.filterBtnOn : {}) }}
                aria-pressed={audience === a.id}
                onClick={() => setAudience(a.id)}>
                {a.label}
              </button>
            ))}
          </div>

          {ready.length > 0 && (
            <div style={s.guideSection}>
              <div style={s.guideGrid}>
                {ready.map(g => (
                  <GuideCard key={g.id} guide={g} onOpen={() => setActiveGuide(g)} />
                ))}
              </div>
            </div>
          )}

          {soon.length > 0 && (
            <div style={s.guideSection}>
              <div style={s.soonLabel}>Coming soon</div>
              <div style={s.guideGrid}>
                {soon.map(g => (
                  <GuideCard key={g.id} guide={g} onOpen={null} />
                ))}
              </div>
            </div>
          )}

          <div style={s.sectionDivider} />
          <ResourceCentre />
          <VideoLibrary />
          <InteractiveTools />
        </div>
      </main>
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────

function Header({ onBack }) {
  return (
    <header style={s.header}>
      <div style={s.headerInner}>
        <div style={s.brand}>
          <MarkDot size={22} />
          <span style={s.brandMain}>Better Practice</span>
          <span style={s.brandColon}>:</span>
          <span style={s.brandSub}>Learn</span>
        </div>
        {onBack && (
          <button style={s.backBtn} onClick={onBack}>← All guides</button>
        )}
      </div>
    </header>
  );
}

// ── Guide card ────────────────────────────────────────────────────────────────

function GuideCard({ guide, onOpen }) {
  const ac = AUDIENCE_STYLE[guide.audience];
  return (
    <div
      style={{ ...s.card, ...(onOpen ? s.cardReady : s.cardSoon) }}
      onClick={onOpen || undefined}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onKeyDown={onOpen ? e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } } : undefined}
      aria-label={onOpen ? `Open guide: ${guide.title}` : undefined}>

      <div style={s.cardMeta}>
        <span style={{ ...s.audTag, background: ac.bg, color: ac.text, borderColor: ac.border }}>
          {AUDIENCE_LABEL[guide.audience]}
        </span>
        {guide.duration && onOpen && <span style={s.durTag}>{guide.duration}</span>}
        {!onOpen && <span style={s.soonTag}>Coming soon</span>}
      </div>

      <div style={s.cardTitle}>{guide.title}</div>
      <div style={s.cardDesc}>{guide.description}</div>
      {onOpen && <span style={s.cardCta}>Open guide →</span>}
    </div>
  );
}

// ── Guide viewer ──────────────────────────────────────────────────────────────

function GuideViewer({ guide, onBack }) {
  const [step, setStep] = useState(0);

  const totalIdeas = guide.steps?.length ?? 0;
  const isIntro    = step === 0;
  const isTryThis  = step === totalIdeas + 1;
  const isDone     = step === totalIdeas + 2;
  const ideaIndex  = step - 1; // 0-based when step >= 1

  const progressPct = isDone ? 100 : Math.round((step / (totalIdeas + 2)) * 100);

  if (isDone) {
    return (
      <div style={s.root}>
        <Header onBack={onBack} />
        <main style={s.main}>
          <div style={{ ...s.viewerPage, alignItems: "center", textAlign: "center", paddingTop: 32 }}>
            <div style={s.doneCircle}>✓</div>
            <h2 style={s.doneTitle}>Guide complete</h2>
            <p style={s.doneSub}>You've worked through <em>{guide.title}</em>.</p>
            <div style={s.doneCard}>
              <div style={s.doneCardLabel}>Your try this</div>
              <p style={s.doneCardText}>{guide.tryThis}</p>
            </div>
            {guide.resources && (
              <div style={s.resourcesBox}>
                <div style={s.resourcesLabel}>Go further</div>
                {guide.resources.map((r, i) => (
                  <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" style={s.resourceItem}>
                    <span style={s.resourceType}>{r.type}</span>
                    <div style={s.resourceContent}>
                      <div style={s.resourceTitle}>{r.title}</div>
                      <div style={s.resourceNote}>{r.note}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
            <button style={s.primaryBtn} onClick={onBack}>← Back to guides</button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div style={s.root}>
      <Header onBack={onBack} />
      <div style={s.progressBar} role="progressbar" aria-valuenow={progressPct} aria-valuemin={0} aria-valuemax={100}>
        <div style={{ ...s.progressFill, width: `${progressPct}%` }} />
      </div>
      <main style={s.main}>
        <div style={s.viewerPage}>

          {/* ── Intro ── */}
          {isIntro && (
            <div style={s.viewCard}>
              <div style={s.viewMeta}>
                {(() => { const ac = AUDIENCE_STYLE[guide.audience]; return (
                  <span style={{ ...s.audTag, background: ac.bg, color: ac.text, borderColor: ac.border }}>
                    {AUDIENCE_LABEL[guide.audience]}
                  </span>
                ); })()}
                <span style={s.durTag}>{guide.duration}</span>
              </div>
              <h1 style={s.viewTitle}>{guide.title}</h1>
              <p style={s.viewSubtitle}>{guide.description}</p>
              <div style={s.outlineBox}>
                <div style={s.outlineLabel}>What you'll work through</div>
                <ol style={s.outlineList}>
                  {guide.steps.map((st, i) => (
                    <li key={i} style={s.outlineItem}>
                      <span style={s.outlineNum}>{i + 1}</span>
                      <span style={s.outlineName}>{st.label}</span>
                    </li>
                  ))}
                  <li style={s.outlineItem}>
                    <span style={{ ...s.outlineNum, background: "var(--flag)", color: "var(--ink)" }}>✦</span>
                    <span style={s.outlineName}>Try this</span>
                  </li>
                </ol>
              </div>
              <button style={s.primaryBtn} onClick={() => setStep(1)}>Begin →</button>
            </div>
          )}

          {/* ── Key idea ── */}
          {!isIntro && !isTryThis && !isDone && (
            <div style={s.viewCard}>
              <div style={s.ideaEyebrow}>Key idea {step} of {totalIdeas}</div>
              <h2 style={s.ideaTitle}>{guide.steps[ideaIndex].label}</h2>
              <div style={s.ideaBody}>
                {guide.steps[ideaIndex].body.split("\n\n").map((para, i) => (
                  <p key={i} style={s.para}>{para}</p>
                ))}
              </div>

              {/* Inline model cards — shown on step 2 of the reflective practice guide */}
              {guide.steps[ideaIndex].showModels && (
                <div style={s.modelGrid}>
                  {MODELS.map(m => (
                    <div key={m.id} style={s.modelCard}>
                      <div style={s.modelName}>{m.name}</div>
                      <div style={s.modelMeta}>
                        {m.steps ? `${m.steps} steps · ` : ""}{m.tagline}
                      </div>
                      <div style={s.modelBest}>Best for: {m.bestFor}</div>
                    </div>
                  ))}
                </div>
              )}

              <div style={s.promptBox}>
                <div style={s.promptLabel}>Reflect on this</div>
                <p style={s.promptText}>{guide.steps[ideaIndex].prompt}</p>
              </div>

              <div style={s.navRow}>
                <button style={s.ghostBtn} onClick={() => setStep(step - 1)}>← Back</button>
                <button style={s.primaryBtn} onClick={() => setStep(step + 1)}>
                  {step === totalIdeas ? "Try this →" : "Next →"}
                </button>
              </div>
            </div>
          )}

          {/* ── Try this ── */}
          {isTryThis && (
            <div style={s.viewCard}>
              <div style={s.tryEyebrow}>Before you close</div>
              <h2 style={s.tryTitle}>Try this</h2>
              <p style={s.tryBody}>{guide.tryThis}</p>

              {guide.video && (
                <div style={s.videoCard}>
                  <div style={s.videoPlayBtn}>▶</div>
                  <div style={s.videoText}>
                    <div style={s.videoTitle}>{guide.video.title}</div>
                    <div style={s.videoDesc}>{guide.video.description}</div>
                    <div style={s.videoSoon}>Video coming soon</div>
                  </div>
                </div>
              )}

              <div style={s.navRow}>
                <button style={s.ghostBtn} onClick={() => setStep(step - 1)}>← Back</button>
                <button style={s.primaryBtn} onClick={() => setStep(step + 1)}>Done →</button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

// ── Section heading ───────────────────────────────────────────────────────────

function SectionHead({ label, subtitle }) {
  return (
    <div style={s.sectionHead}>
      <div style={s.sectionLabel}>{label}</div>
      {subtitle && <div style={s.sectionSub}>{subtitle}</div>}
    </div>
  );
}

// ── Resource centre ───────────────────────────────────────────────────────────

function ResourceCentre() {
  return (
    <div style={s.newSection}>
      <SectionHead
        label="Resources"
        subtitle="Assessment tools, templates, and reference materials"
      />
      <div style={s.resourceGrid}>
        {RESOURCES.map(r => (
          <div key={r.id} style={s.resourceCard}>
            <div style={s.resourceCardMeta}>
              <span style={s.resourceTypeTag}>{r.type}</span>
              <span style={s.soonTag}>Coming soon</span>
            </div>
            <div style={s.resourceCardTitle}>{r.title}</div>
            <div style={s.resourceCardDesc}>{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Video library ─────────────────────────────────────────────────────────────

function VideoLibrary() {
  const videos = GUIDES.filter(g => g.video);
  return (
    <div style={s.newSection}>
      <SectionHead
        label="Videos"
        subtitle="Short films to accompany the guides — watch on their own or alongside"
      />
      <div style={s.videoLibGrid}>
        {videos.map(g => {
          const ac = AUDIENCE_STYLE[g.audience];
          return (
            <div key={g.id} style={s.videoLibCard}>
              <div style={s.videoLibThumb}>
                <span style={s.videoLibPlay}>▶</span>
              </div>
              <div style={s.videoLibInfo}>
                <div style={s.videoLibMeta}>
                  <span style={{ ...s.audTag, background: ac.bg, color: ac.text, borderColor: ac.border }}>
                    {AUDIENCE_LABEL[g.audience]}
                  </span>
                  <span style={s.soonTag}>Coming soon</span>
                </div>
                <div style={s.videoLibTitle}>{g.video.title}</div>
                <div style={s.videoLibDesc}>{g.video.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Interactive tools ─────────────────────────────────────────────────────────

function InteractiveTools() {
  return (
    <div style={s.newSection}>
      <SectionHead
        label="Practice tools"
        subtitle="Structured exercises and conversation simulations for deeper learning"
      />
      <div style={s.guideGrid}>
        {INTERACTIVE.map(item => (
          <div key={item.id} style={{ ...s.card, ...s.cardSoon }}>
            <div style={s.cardMeta}>
              <span style={s.interactiveTag}>{item.provider}</span>
              <span style={s.soonTag}>Coming soon</span>
            </div>
            <div style={s.cardTitle}>{item.title}</div>
            <div style={s.cardDesc}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  root: { minHeight: "100dvh", background: "var(--bg)", display: "flex", flexDirection: "column" },

  header: { background: "var(--surface)", borderBottom: "1px solid var(--rule)", position: "sticky", top: 0, zIndex: 50, flexShrink: 0 },
  headerInner: { maxWidth: 900, margin: "0 auto", padding: "0 20px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" },
  brand: { display: "flex", alignItems: "center", gap: 6 },
  brandMain: { fontWeight: 600, fontSize: 17, letterSpacing: "var(--tight)", color: "var(--ink)" },
  brandColon: { fontWeight: 300, fontSize: 17, color: "var(--ink-80)" },
  brandSub: { fontWeight: 500, fontSize: 17, letterSpacing: "var(--tight)", color: "var(--accent)" },
  backBtn: { background: "none", border: "none", color: "var(--ink-80)", fontSize: 12, fontFamily: "var(--mono)", cursor: "pointer", padding: "8px 0", minHeight: 44, letterSpacing: "0.01em" },

  progressBar: { height: 2, background: "var(--rule)", position: "sticky", top: 56, zIndex: 49, flexShrink: 0 },
  progressFill: { height: "100%", background: "var(--accent)", transition: "width 0.3s ease" },

  main: { flex: 1, padding: "28px 20px 56px" },
  page: { maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 },
  viewerPage: { maxWidth: 620, margin: "0 auto", display: "flex", flexDirection: "column", gap: 20, paddingTop: 4 },

  intro: { display: "flex", flexDirection: "column", gap: 8, paddingTop: 4 },
  h1: { fontSize: 30, fontWeight: 600, color: "var(--ink)", letterSpacing: "var(--tight)", margin: 0, lineHeight: 1.2 },
  introSub: { fontSize: 15, color: "var(--ink-80)", lineHeight: 1.7, margin: 0, maxWidth: "62ch" },

  filterRow: { display: "flex", gap: 6, flexWrap: "wrap" },
  filterBtn: { padding: "7px 14px", borderRadius: 20, border: "1px solid var(--rule)", background: "var(--surface)", color: "var(--ink-80)", fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "var(--mono)", minHeight: 36, letterSpacing: "0.01em" },
  filterBtnOn: { background: "var(--accent)", color: "var(--accent-ink)", borderColor: "var(--accent)" },

  guideSection: { display: "flex", flexDirection: "column", gap: 12 },
  soonLabel: { fontSize: 11, fontWeight: 500, color: "var(--ink-80)", textTransform: "uppercase", letterSpacing: "var(--caps)", fontFamily: "var(--mono)" },
  guideGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(272px, 1fr))", gap: 10 },

  card: { background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "var(--r-card)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 10 },
  cardReady: { cursor: "pointer" },
  cardSoon: { opacity: 0.55 },
  cardMeta: { display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap" },
  audTag: { borderRadius: 10, padding: "2px 9px", fontSize: 11, fontWeight: 500, fontFamily: "var(--mono)", border: "1px solid" },
  durTag: { fontSize: 11, color: "var(--ink-80)", fontFamily: "var(--mono)" },
  soonTag: { fontSize: 11, color: "var(--ink-80)", fontFamily: "var(--mono)", background: "var(--surface-2)", border: "1px solid var(--rule)", borderRadius: 10, padding: "2px 9px" },
  cardTitle: { fontSize: 16, fontWeight: 600, color: "var(--ink)", letterSpacing: "var(--tight)", lineHeight: 1.3 },
  cardDesc: { fontSize: 13, color: "var(--ink-80)", lineHeight: 1.6, flex: 1 },
  cardCta: { fontSize: 12, color: "var(--accent)", fontWeight: 500 },

  // Guide viewer card
  viewCard: { background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "var(--r-card)", padding: "28px 26px 24px", display: "flex", flexDirection: "column", gap: 20 },
  viewMeta: { display: "flex", alignItems: "center", gap: 8 },
  viewTitle: { fontSize: 26, fontWeight: 600, color: "var(--ink)", letterSpacing: "var(--tight)", margin: 0, lineHeight: 1.2 },
  viewSubtitle: { fontSize: 14, color: "var(--ink-80)", lineHeight: 1.7, margin: 0 },

  outlineBox: { background: "var(--surface-2)", borderRadius: "var(--r-ctl)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12 },
  outlineLabel: { fontSize: 10, fontWeight: 500, color: "var(--ink-80)", textTransform: "uppercase", letterSpacing: "var(--caps)", fontFamily: "var(--mono)" },
  outlineList: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 9 },
  outlineItem: { display: "flex", alignItems: "center", gap: 10 },
  outlineNum: { width: 22, height: 22, borderRadius: "50%", background: "var(--accent)", color: "var(--accent-ink)", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "var(--mono)" },
  outlineName: { fontSize: 13, color: "var(--ink)", fontWeight: 500 },

  // Key idea
  ideaEyebrow: { fontSize: 11, fontWeight: 500, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "var(--caps)", fontFamily: "var(--mono)" },
  ideaTitle: { fontSize: 22, fontWeight: 600, color: "var(--ink)", margin: 0, letterSpacing: "var(--tight)", lineHeight: 1.25 },
  ideaBody: { display: "flex", flexDirection: "column", gap: 14 },
  para: { fontSize: 15, color: "var(--ink)", lineHeight: 1.75, margin: 0 },

  promptBox: { background: "rgba(21,94,99,0.06)", border: "1px solid rgba(21,94,99,0.20)", borderRadius: "var(--r-ctl)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 },
  promptLabel: { fontSize: 10, fontWeight: 500, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "var(--caps)", fontFamily: "var(--mono)" },
  promptText: { fontSize: 14, color: "var(--ink)", lineHeight: 1.65, margin: 0, fontStyle: "italic" },

  navRow: { display: "flex", gap: 10, justifyContent: "space-between", alignItems: "center" },

  // Model cards
  modelGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: 8 },
  modelCard: { background: "var(--surface-2)", border: "1px solid var(--rule)", borderRadius: "var(--r-ctl)", padding: "12px 14px", display: "flex", flexDirection: "column", gap: 4 },
  modelName: { fontSize: 13, fontWeight: 600, color: "var(--ink)", letterSpacing: "var(--tight)" },
  modelMeta: { fontSize: 11, color: "var(--ink-80)", fontFamily: "var(--mono)" },
  modelBest: { fontSize: 11, color: "var(--accent)", fontWeight: 500 },

  // Try this
  tryEyebrow: { fontSize: 11, fontWeight: 500, color: "var(--flag-strong)", textTransform: "uppercase", letterSpacing: "var(--caps)", fontFamily: "var(--mono)" },
  tryTitle: { fontSize: 22, fontWeight: 600, color: "var(--ink)", margin: 0, letterSpacing: "var(--tight)" },
  tryBody: { fontSize: 15, color: "var(--ink)", lineHeight: 1.75, background: "var(--surface-2)", borderRadius: "var(--r-ctl)", padding: "16px 18px", margin: 0 },

  videoCard: { display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", background: "var(--surface-2)", borderRadius: "var(--r-ctl)", border: "1px dashed var(--rule)" },
  videoPlayBtn: { width: 40, height: 40, borderRadius: "50%", background: "var(--ink-10)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "var(--ink-80)", flexShrink: 0 },
  videoText: { flex: 1, display: "flex", flexDirection: "column", gap: 3 },
  videoTitle: { fontSize: 13, fontWeight: 600, color: "var(--ink)" },
  videoDesc: { fontSize: 12, color: "var(--ink-80)", lineHeight: 1.45 },
  videoSoon: { fontSize: 11, color: "var(--ink-80)", fontFamily: "var(--mono)", marginTop: 2 },

  // Done
  doneCircle: { width: 56, height: 56, borderRadius: "50%", background: "rgba(21,94,99,0.09)", border: "1px solid rgba(21,94,99,0.22)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "var(--accent)", flexShrink: 0 },
  doneTitle: { fontSize: 24, fontWeight: 600, color: "var(--ink)", margin: "8px 0 0", letterSpacing: "var(--tight)" },
  doneSub: { fontSize: 14, color: "var(--ink-80)", margin: "4px 0 0" },
  doneCard: { background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "var(--r-card)", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 8, maxWidth: 480, width: "100%", textAlign: "left" },
  doneCardLabel: { fontSize: 10, fontWeight: 500, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "var(--caps)", fontFamily: "var(--mono)" },
  doneCardText: { fontSize: 14, color: "var(--ink)", lineHeight: 1.7, margin: 0 },

  resourcesBox: { display: "flex", flexDirection: "column", gap: 8, maxWidth: 480, width: "100%", textAlign: "left" },
  resourcesLabel: { fontSize: 10, fontWeight: 500, color: "var(--ink-80)", textTransform: "uppercase", letterSpacing: "var(--caps)", fontFamily: "var(--mono)", marginBottom: 2 },
  resourceItem: { display: "flex", gap: 10, padding: "12px 14px", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "var(--r-ctl)", textDecoration: "none", alignItems: "flex-start" },
  resourceType: { fontSize: 10, fontWeight: 500, fontFamily: "var(--mono)", color: "var(--ink-80)", background: "var(--surface-2)", border: "1px solid var(--rule)", borderRadius: 8, padding: "2px 7px", whiteSpace: "nowrap", marginTop: 2, flexShrink: 0 },
  resourceContent: { display: "flex", flexDirection: "column", gap: 3 },
  resourceTitle: { fontSize: 13, fontWeight: 600, color: "var(--accent)", letterSpacing: "var(--tight)" },
  resourceNote: { fontSize: 12, color: "var(--ink-80)", lineHeight: 1.5 },

  primaryBtn: { background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: "var(--r-ctl)", padding: "11px 20px", fontSize: 13, fontWeight: 600, cursor: "pointer", minHeight: 44, letterSpacing: "-0.01em" },
  ghostBtn: { background: "none", border: "1px solid var(--rule)", borderRadius: "var(--r-ctl)", padding: "10px 16px", fontSize: 13, fontWeight: 500, color: "var(--ink-80)", cursor: "pointer", minHeight: 44 },

  // Section divider
  sectionDivider: { height: 1, background: "var(--rule)", margin: "4px 0" },

  // Section headings
  newSection: { display: "flex", flexDirection: "column", gap: 12 },
  sectionHead: { display: "flex", flexDirection: "column", gap: 3 },
  sectionLabel: { fontSize: 13, fontWeight: 600, color: "var(--ink)", letterSpacing: "var(--tight)" },
  sectionSub: { fontSize: 13, color: "var(--ink-80)", lineHeight: 1.5 },

  // Resource cards
  resourceGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 10 },
  resourceCard: { background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "var(--r-card)", padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8, opacity: 0.6 },
  resourceCardMeta: { display: "flex", alignItems: "center", gap: 7 },
  resourceTypeTag: { borderRadius: 10, padding: "2px 9px", fontSize: 11, fontWeight: 500, fontFamily: "var(--mono)", background: "var(--surface-2)", color: "var(--ink-80)", border: "1px solid var(--rule)" },
  resourceCardTitle: { fontSize: 14, fontWeight: 600, color: "var(--ink)", letterSpacing: "var(--tight)", lineHeight: 1.3 },
  resourceCardDesc: { fontSize: 12, color: "var(--ink-80)", lineHeight: 1.55 },

  // Video library
  videoLibGrid: { display: "flex", flexDirection: "column", gap: 8 },
  videoLibCard: { background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: "var(--r-card)", padding: "16px 18px", display: "flex", gap: 16, alignItems: "flex-start", opacity: 0.7 },
  videoLibThumb: { width: 56, height: 56, borderRadius: "var(--r-ctl)", background: "var(--surface-2)", border: "1px dashed var(--rule)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  videoLibPlay: { fontSize: 16, color: "var(--ink-80)" },
  videoLibInfo: { flex: 1, display: "flex", flexDirection: "column", gap: 6 },
  videoLibMeta: { display: "flex", alignItems: "center", gap: 7 },
  videoLibTitle: { fontSize: 14, fontWeight: 600, color: "var(--ink)", letterSpacing: "var(--tight)", lineHeight: 1.3 },
  videoLibDesc: { fontSize: 12, color: "var(--ink-80)", lineHeight: 1.55 },

  // Interactive tag
  interactiveTag: { borderRadius: 10, padding: "2px 9px", fontSize: 11, fontWeight: 500, fontFamily: "var(--mono)", background: "rgba(110,74,107,0.09)", color: "#6E4A6B", border: "1px solid rgba(110,74,107,0.22)" },
};
