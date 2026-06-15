/* ============================================================================
   .scp OPERATING SYSTEM — CONTENT (the one file you edit)
   ----------------------------------------------------------------------------
   The index.html renderer reads this file and draws the whole system. You do
   not touch index.html.

   EDITING BY HAND:
   - Find the section, change the text between the quote marks, keep the
     punctuation around it (quotes, commas, brackets).
   - Plain and warm. No emoji. Write the way we actually talk.
   - Save, re-open index.html. Done.

   EDITING WITH CLAUDE: open this folder and say what changed in plain words
   (see "Maintenance SOP.md" and "team-os skill — spec.md").

   A note on honesty (Constitution P12): where we don't yet have something
   written down, this file says so plainly instead of guessing. Those are real
   prompts for the owner to fill, not gaps to paper over.
   ============================================================================ */

window.CONTENT = {

  meta: {
    title: ".scp Operating System",
    tagline: "How the programming team works — for the people in it, and for the Claude that works alongside them.",
    version: "1.0",
    lastUpdated: "15 June 2026 (added upskilling channels + onboarding role links)",
    stewardNote: "Owned by the team. Edited in content.js. Steward: Rohan."
  },

  /* -------------------------------------------------------------------------- */
  home: {
    eyebrow: "Start here",
    heading: "One place to see who we are, what we do, and how we do it.",
    lede: "This is the programming team's operating system — a living map of our identity, our roles, our workflows, and how we grow. It is built to be read by the people on the team and by the Claude that works alongside us. New here? Start with who we are, then your role. Covering for someone? Go straight to workflows.",
    paths: [
      { to: "onboarding", label: "I'm new here", desc: "Find your role, learn who we are, and see how your work fits with everyone else's." },
      { to: "workflows", label: "I'm covering someone", desc: "Each recurring task, with a checklist you can pick up cold." },
      { to: "team", label: "I want to understand a role", desc: "What each role does, who holds it, and how the pieces fit." },
      { to: "upskilling", label: "I want to get better", desc: "Growth paths by role, plus our facilitation craft and reading." },
      { to: "who-we-are", label: "I want the bigger picture", desc: "Our philosophy, our principles, what we run, and how we measure it." },
      { to: "how-we-scale", label: "I want to think about scale", desc: "How world-class institutions built in India hold quality as they grow — and what we borrow." }
    ],
    usingThis: {
      heading: "How to use this",
      forHumans: "Navigate from the left. Everything lives in one file (content.js). When something changes on the ground, change it here — edit the file, or ask Claude to.",
      forClaude: "This is the companion to the team Constitution: the Constitution is how we work with Claude; this is what we work on. Read the relevant section before acting, and treat the workflow checklists as steps you can actually run."
    }
  },

  /* --------------------------------------------------------------------------
     WHO WE ARE — grounded in the Brand Kit, Master Reference, and data.jsx
     -------------------------------------------------------------------------- */
  whoWeAre: {
    eyebrow: "Who we are",
    heading: "We design learning experiences that leave a question behind.",
    mission: "The Param Science Programming Team is the design and facilitation arm of Param Science (ParSEC), the science centre run by the Param Foundation — an NGO in Bengaluru. We are responsible for every visitor-facing programme: lab sessions, workshops, camps, residencies, hackathons, and outreach, across both centres and for every audience — children aged 6 to 16, school groups, adults, and general visitors. We are not a tech team or a coding programme. We are facilitators and programme designers whose medium is curiosity, and whose measure of success is the quality of a question a child asks on the way home.",
    livingLab: "We are a living lab. The gallery floor is where we test what we think we know. Our sessions are not products we deliver; they are ongoing experiments in what it means to learn around science. We sit inside an NGO, so our work answers to the mission, not to revenue — and that shapes the pace we move at, the questions we ask before designing anything, and the communities we choose to serve.",
    funnel: {
      heading: "The Transformation Arc",
      body: "Every programme is challenge-based and built to move people along one arc: Citizen to Seeker to Solver to Innovator. A Citizen is a passive observer; a Seeker is curious and asking questions; a Solver is hands-on and iterating; an Innovator is building something new from what they discovered. Impact here is directional, not binary — the question isn't 'did they learn a fact?' but 'did they move along the arc?' That movement is the work, and it is what we try to measure."
    },
    principles: [
      { n: "01", title: "Curiosity before answers", body: "We start with what people are already wondering, not with what we want them to know. The question is the unit of learning." },
      { n: "02", title: "Design as care", body: "Every programme, session, and message is made on purpose. Care for the participant's experience is the work itself, not an extra." },
      { n: "03", title: "The facilitator is the medium", body: "The biggest variable in any session is a skilled, present human being. We invest in that above everything else." },
      { n: "04", title: "Rigour without jargon", body: "We are serious about science and about teaching, and we never hide behind complexity. Clarity is respect." },
      { n: "05", title: "Radical accessibility", body: "Science centres usually serve the already-curious. We work against that — in what we design, who we reach, and who we invite in." }
    ],
    whatWeRun: [
      { name: "Gallery operations & lab sessions", desc: "Day-to-day facilitation and visitor engagement at both centres, including structured lab sessions for walk-ins, school groups, and Future Mindz members." },
      { name: "Spark Lab", desc: "Saturday, two hours, ages 6–10, one facilitator, 5–8 children. A five-phase arc — Arrival, Spark, Making Time, Share-out, Trace — built on one constrained activity with a surprising, testable outcome." },
      { name: "Quest Lab", desc: "Sunday, five hours, ages 11+, one facilitator, 6–10 participants. A six-phase arc — Brief, Research, Build I, Crit, Build II, Presentation — around an open challenge with a real constraint." },
      { name: "Expedition Lab", desc: "The camps format. Design in progress." },
      { name: "Catalyst Circle", desc: "Our teacher development programme — a working group, not a course — building facilitation and inquiry-based learning among educators." },
      { name: "Unified Vision for Science", desc: "A quarterly seminar that brings together people from education, STEM, startups, and both formal and informal science. Each edition is themed, and the partnerships outlast the event." },
      { name: "Field Trips", desc: "Quarterly off-site visits, open to Future Mindz members and the public, aligned with Param's mission." },
      { name: "Future Mindz", desc: "Our membership for ages 6–16 — the long bet that steady, playful exposure to scientific thinking changes what a child believes they can do." }
    ],
    kras: [
      "Experience Impact — are participants actually being changed by what we do?",
      "Gallery Health — is the gallery a living lab, not a museum?",
      "Operational Health — is the team functioning well as a unit?",
      "Catalyst Circle — measured in its own teacher-development domain"
    ],
    kpis: [
      "Experience Quality Score — participant and facilitator signals that a session shifted how someone relates to science (target: ≥70% healthy sessions)",
      "Mission-Level Impact — movement along the Transformation Arc (being shaped with the research team; activates in Month 3)",
      "Facilitation Style Score — at least 60% of facilitator moves are question-first, not explanation-first",
      "Experiments Run in the Gallery — the gallery used as a lab (target: ≥4 per centre per month)",
      "Visitor Context Accuracy — do visitors leave understanding this is a lab, not a museum?",
      "Action Item Completion Rate — does the team follow through on what it commits to?",
      "Sessions Delivered vs Planned — watched quietly, flagged only if it dips"
    ],
    kpiNote: "These come from KPI Proposal v3, the canonical KPI document, built on one rule: the numbers are diagnostic, never competitive — they read the health of the system, never a person, and they are weighted to quality over volume (deliberately not a scoreboard of how many programmes ran or how many people came). The live system runs as twelve metrics on five Google Forms with an Apps Script backend and a dashboard, across the two gallery centres, rolled out in phases. Catalyst Circle is measured in its own domain (meetup attendance, teacher creative action, trainer conversion). Honest gap: the team's higher-level organisational KRAs aren't written down in one place this OS can cite — so this page reflects the measurement system as it actually runs, not a KRA framing we can't stand behind."
  },

  /* --------------------------------------------------------------------------
     THE TEAM — roster canonical (15 Jun 2026). Role split corrected by Rohan:
     Programming POC = gallery facilitation; Event POC = events incl. the labs.
     -------------------------------------------------------------------------- */
  team: {
    eyebrow: "The team",
    heading: "Seven core members, an extended research seat — one standard across our centres.",
    lede: "One bet runs across our centres: a child should get the same kind of experience wherever they meet Param. Today the gallery work runs at two ParSEC centres — Jayanagar and Whitefield, each with a Programming POC — while HQ is the team's design-and-systems base, not a walk-in gallery. The flagship the Constitution refers to is the 1.2M sq ft transdisciplinary hub announced at Channahalli (public record); treat it as the growth picture, not a third operating gallery yet. (Worth landing with the team: when Channahalli comes online, and one consistent centre count for these pages — the mission and KPI pages say 'two centres' and older copy said 'three'.) Below is who holds the work today and what each seat owns — so it stays clear even when someone is away.",
    roster: [
      { name: "Pranav Sriram", role: "Team Lead", centre: "HQ", roleId: "team-lead", focus: "Direction, the final go, Catalyst Circle follow-ups, Systems" },
      { name: "Rohan Vijay", role: "Programming (HQ)", centre: "HQ", roleId: "programming-hq", focus: "Session design (PDC), internal systems (KPI, standup, this OS), partnerships, the monthly theme" },
      { name: "Bhanu Prakash", role: "Programming POC", centre: "Whitefield", roleId: "programming-poc", focus: "Gallery facilitation and the Facilitation Guides at Whitefield; currently also covering ops (no ops lead)" },
      { name: "Vaishnavi Nagendra", role: "Programming POC", centre: "Jayanagar", roleId: "programming-poc", focus: "Gallery facilitation at Jayanagar; Project Spy" },
      { name: "Shayan", role: "Event POC", centre: "Jayanagar", roleId: "events-poc", focus: "Events and time-bound sessions at Jayanagar; submits event DPRs and keeps Jayanagar's entries in the Events Hub current" },
      { name: "Shobhana", role: "Programming (part-time)", centre: "—", roleId: "programming-pt", focus: "Catalyst Circle, field trips, Summer Camp" },
      { name: "Taniya", role: "Intern", centre: "—", roleId: "intern", focus: "Corporate Retreat, Impact Analysis" },
      { name: "Aparna", role: "Research (extended)", centre: "HQ", roleId: "research", focus: "Grants & collaborations, Family Science Night, Traffic Futures Gallery" }
    ],
    roles: [
      {
        id: "team-lead",
        name: "Team Lead",
        held: ["Pranav Sriram"],
        purpose: "Holds the team's direction and gives the final go on contested, team-wide, or outside-facing calls. The job above any single session: keep what we run recognisably the same across our centres.",
        responsibilities: [
          "Set and protect the team's direction and quality bar",
          "Give the final go on big or contested calls (at the Wednesday meeting)",
          "Keep the experience consistent across the centres — Jayanagar and Whitefield today, the Channahalli flagship as it comes online",
          "Carry outside commitments — partnerships, MoUs, promises (never handed to AI)"
        ],
        ownsWorkflows: ["wednesday-meeting"],
        talkTo: "For direction, a final go, partnerships, and anything contested across the team.",
        coverRisk: "The final go can't be handed off. When the Team Lead is away, big calls wait for the Wednesday meeting or a named stand-in.",
        onboarding: "onboarding-lead",
        upskilling: "upskilling-lead"
      },
      {
        id: "programming-hq",
        name: "Programming (HQ)",
        held: ["Rohan Vijay"],
        purpose: "The design-and-systems hub. Designs the session frameworks, builds and runs the team's internal systems, leads partnerships and the seminar, and keeps the monthly theme and quality moving.",
        responsibilities: [
          "Design the session frameworks — Spark Lab, Quest Lab, Expedition Lab (the Program Design Cell)",
          "Build and run the internal systems: KPI system, weekly standup, Events Hub, this operating system",
          "Lead partnerships (Season Watch) and help run the seminar (Unified Vision for Science)",
          "Curate the monthly theme, approve the quality of programming-team events, and own the calendar and marketing hand-off (the HQ POC duties — where this role formally sits is still being settled)",
          "Steward the Constitution and the team's work with Claude"
        ],
        ownsWorkflows: ["workshop-design-cycle", "weekly-standup", "kpi-update", "unified-vision", "facilitation-guides", "maintain-this-os"],
        talkTo: "For session design, internal systems, KPIs, partnerships, the monthly theme, and anything Claude-assisted.",
        coverRisk: "Most of the internal-systems know-how sits here. The backup is each system's handover layer — its source of truth, SOP, and handoff prompt. See the workflow pages.",
        onboarding: "onboarding-programming",
        upskilling: "upskilling-programming"
      },
      {
        id: "programming-poc",
        name: "Programming POC (gallery)",
        held: ["Bhanu Prakash — Whitefield", "Vaishnavi Nagendra — Jayanagar"],
        purpose: "Programs the gallery at their centre — the day-to-day facilitation on the floor and the quality of the visitor experience there. The frame is programming the gallery, not only managing the facilitators on it.",
        responsibilities: [
          "Facilitate and program the gallery floor day to day at the centre",
          "Coach the gallery facilitators and hold the quality of facilitation locally",
          "Run the monthly facilitation spot-check — the Facilitation Style score (is at least 60% of facilitation question-first?)",
          "Run and log small experiments in the gallery (KPI 4), and spot-check visitor context: do visitors leave knowing this is a lab, not a museum?"
        ],
        ownsWorkflows: ["gallery-facilitation"],
        talkTo: "For what's happening on the gallery floor at their centre.",
        coverRisk: "Each centre has one programming POC — a single point of failure. Whitefield's POC is also covering ops with no ops lead; that is a structural gap, not a personal one. The detailed POC duties aren't written down yet (see the gallery-facilitation workflow), and cover assignments are still open.",
        onboarding: "onboarding-poc",
        upskilling: "upskilling-facilitation"
      },
      {
        id: "events-poc",
        name: "Event POC",
        held: ["Shayan"],
        purpose: "Owns time-bound delivery at the centre — events, workshops, and lab sessions (Spark Lab, Quest Lab) — from the brief through the day itself. (KPI Proposal v3 defines the Event POC remit as 'events at the centre — sessions, workshops, time-bound programme delivery.')",
        responsibilities: [
          "Deliver time-bound sessions and events at the centre, including the lab sessions",
          "Own event playbooks end to end, planning through execution",
          "Keep the centre's event entries in the Events Hub current — timelines, dependencies, ownership (the Hub itself is Rohan's system)",
          "Coordinate with the Business and Events team, and keep the gallery informed",
          "Run the feedback loop and submit the DPR"
        ],
        ownsWorkflows: ["run-lab-session", "run-event", "events-hub-monitoring", "dpr-submission"],
        talkTo: "For the centre's events, sessions, and event-day coordination.",
        coverRisk: "Sole events lead — a single point of failure for events and time-bound sessions. The backup is the Events Hub and the event playbooks; a named cover is still open. Worth confirming: the lab sessions (Spark, Quest) are designed by the Program Design Cell, and who facilitates which lab at which centre was still being settled during the pilot — so treat 'the Event POC runs the labs' as the working frame, not a closed decision.",
        onboarding: "onboarding-events",
        upskilling: "upskilling-events"
      },
      {
        id: "programming-pt",
        name: "Programming (part-time)",
        held: ["Shobhana"],
        purpose: "Carries specific strands on a part-time rhythm — teacher development and the longer-lead-time programmes.",
        responsibilities: [
          "Run Catalyst Circle (with Pranav on some follow-up threads)",
          "Own field trips — the quarterly rhythm needs a long run-up",
          "Own Summer Camp planning when it's on"
        ],
        ownsWorkflows: ["catalyst-circle", "field-trips"],
        talkTo: "For Catalyst Circle, field trips, and camp planning.",
        coverRisk: "Part-time, so we describe the days reported, never a percentage. Quarterly work shows a gap late — start early.",
        onboarding: "onboarding-programming",
        upskilling: "upskilling-facilitation"
      },
      {
        id: "intern",
        name: "Intern",
        held: ["Taniya"],
        purpose: "Supports active projects, paired with a full-timer on decisions. A growth seat — we keep the scope at intern level.",
        responsibilities: [
          "Support active projects (for example, Corporate Retreat, Impact Analysis)",
          "Pair with a full-timer before any decision beyond intern scope",
          "Document and tidy up as needed"
        ],
        ownsWorkflows: [],
        talkTo: "Pair with the project owner; for scope questions, the Team Lead or Programming (HQ).",
        coverRisk: "Intern work shouldn't be a single point of failure. If it is, that's a scoping flag to raise.",
        onboarding: "onboarding-intern",
        upskilling: "upskilling-programming"
      },
      {
        id: "research",
        name: "Research (extended)",
        held: ["Aparna"],
        purpose: "Research collaboration — grants, collaborations, and research-led programmes. In the standup group for documentation, but counted as research collaboration, not part of the core team's numbers.",
        responsibilities: [
          "Lead grants and collaborations (for example, DSIR, NCBS, Open Blocks)",
          "Carry research-led programmes (Family Science Night, Traffic Futures Gallery)",
          "Line up overlapping research threads (for example, AI in education) with Programming (HQ)"
        ],
        ownsWorkflows: [],
        talkTo: "For grants, outside research collaborations, and research-led programmes.",
        coverRisk: "Extended member — don't read a quiet week as a stalled project; her rhythm is her own.",
        onboarding: "onboarding-programming",
        upskilling: "upskilling-programming"
      }
    ]
  },

  /* --------------------------------------------------------------------------
     WORKFLOWS — each is a checklist someone else could pick up.
     Verified items carry their source. Where steps aren't documented, the
     workflow says so (placeholder) rather than inventing them (Constitution P12).
     -------------------------------------------------------------------------- */
  workflows: {
    eyebrow: "Workflows & routines",
    heading: "Each recurring task, written so someone else can pick it up.",
    lede: "This is what makes leave possible. Each workflow names its owner, its rhythm, what kicks it off, the tools it touches, and the steps. If you're covering, the cover note tells you what to watch. Where a workflow isn't written down yet, it says so — that's an honest gap for its owner to fill through the intake template, not a guess.",
    domains: ["Team operations", "Gallery & lab sessions", "Events", "Programmes", "Communication", "Knowledge & culture"],
    items: [
      {
        id: "weekly-standup",
        name: "Weekly standup report",
        domain: "Team operations",
        ownerRole: "Programming (HQ)",
        cadence: "Weekly",
        trigger: "End of the reporting week; the daily WhatsApp stand-ups have built up.",
        tools: ["WhatsApp export", "/weekly-standup skill", "team-config.json", "report-data.json"],
        steps: [
          "Export the week's WhatsApp stand-up messages from the team group.",
          "Run the /weekly-standup skill. It reads team-config.json (the roster and project map) — never edit the config mid-run.",
          "Let it sort each person's updates against their projects and reporting days.",
          "Read the team report and the Director's brief for accuracy and a supportive, diagnostic tone — no blame, no emoji.",
          "Check the no-mention flags: a project that's gone quiet for too long surfaces as a prompt, not a verdict.",
          "Save the report to the Standup Reports folder and share it the usual way."
        ],
        coverNote: "The config is the source of truth — the skill only reads it. If a name or project looks wrong, fix the config first (that's an Amber change), then re-run. Part-timers and interns are described by days reported, never a percentage.",
        source: "/weekly-standup v3 skill + team-config.json, 2 Areas/Standup Reports"
      },
      {
        id: "kpi-update",
        name: "KPI update cycle",
        domain: "Team operations",
        ownerRole: "Programming (HQ)",
        cadence: "Ongoing (forms) + a monthly review",
        trigger: "Sessions and events happen; facilitators submit data through the forms.",
        tools: ["5 Google Forms", "Apps Script backend", "KPI dashboard (HTML)", "KPI Proposal v3 (canonical)", "KPI System — Edit SOP"],
        steps: [
          "Check facilitators are submitting session and event data through the five forms.",
          "Let the Apps Script backend map the submissions to the KPIs.",
          "Refresh the dashboard for the week or month.",
          "Read the canonical KPI Proposal v3 before changing any definition — never quietly fork a metric.",
          "For any structural change (a new metric, a form field, a rule), follow the Edit SOP's change list — that's Amber and goes to the Wednesday meeting.",
          "Keep all KPI talk diagnostic: this reads system health, not people."
        ],
        coverNote: "Don't change a definition to make a number look better. Locked decisions stay locked unless they're formally reopened. The Edit SOP is the one place that governs changes.",
        source: "KPI System — Edit SOP + KPI Proposal v3 (canonical)"
      },
      {
        id: "workshop-design-cycle",
        name: "Monthly workshop design cycle",
        domain: "Gallery & lab sessions",
        ownerRole: "Programming (HQ) / PDC",
        cadence: "Monthly (design deadline: the 10th)",
        trigger: "The new month's sessions need plans.",
        tools: ["PDC session-plan templates", "Spark/Quest ideation skills", "Observation sheets", "DPR pre-fill"],
        steps: [
          "Pick the curiosity-driven hook question for each format (for example, 'Can paper hold a kilogram?') — never theme-first.",
          "Design to the arc: Spark Lab's five phases; Quest Lab's six phases.",
          "Keep one constrained activity with a surprising, testable outcome. Never explain the science during the session; never show a finished example before making.",
          "Produce the facilitation guide, materials list, minute-by-minute plan, cheat sheet, and observation sheet.",
          "Confirm the budget (Spark Lab under ₹250 a session; Quest Lab ₹1,000–1,500) and source materials before the first weekend.",
          "Hand the design to the Event POC to run; gather observations; improve it for the next run."
        ],
        coverNote: "Design simple first, build capacity, then add constraints. The test of a good design: a facilitator can run the arc by the second time without looking at the plan.",
        source: "Program Design Cell overview + Workshop Design Reflections"
      },
      {
        id: "run-lab-session",
        name: "Run a lab session (Spark / Quest)",
        domain: "Gallery & lab sessions",
        ownerRole: "Event POC",
        cadence: "Weekly (Spark: Saturdays; Quest: Sundays)",
        trigger: "A scheduled cohort session.",
        tools: ["Facilitation guide", "Materials kit", "Observation sheet", "The move set (see Upskilling)"],
        steps: [
          "Prepare the materials kit and read the facilitation guide and cheat sheet.",
          "Spark Lab — run the arc: Arrival, Spark, Making Time, Share-out, Trace.",
          "Quest Lab — run the arc: Brief, Research, Build I, Crit, Build II, Presentation.",
          "Facilitate by asking, not explaining — narrate what you observe ('I notice you changed your fold') rather than evaluate, ask 'what if' not 'why', and protect making time.",
          "Hold the constraint; let participants iterate; don't rescue too early.",
          "Fill the observation sheet while it's fresh; note what to change next time."
        ],
        coverNote: "If you're covering a session you didn't design, the guide and cheat sheet are written to run cold. Read them, lay out the materials, trust the arc. The observation sheet matters most — it's how the design improves. (These are Program Design Cell designs delivered at the centres; who facilitates which lab at which centre was still being settled during the May–July pilot.)",
        source: "Program Design Cell overview + Facilitation Guidebook"
      },
      {
        id: "gallery-facilitation",
        name: "Gallery facilitation (daily)",
        domain: "Gallery & lab sessions",
        ownerRole: "Programming POC (gallery)",
        cadence: "Daily, on the floor",
        placeholder: true,
        note: "This is the Programming POC's core work — programming and facilitating the gallery floor. What it involves is sourced from KPI Proposal v3: coaching the gallery facilitators, the monthly facilitation spot-check (is at least 60% of facilitation question-first?), running and logging small gallery experiments, and visitor-context spot-checks (do visitors leave knowing this is a lab, not a museum?). What isn't written down yet is the day-to-day run-of-show — so rather than invent that, this stays a placeholder for Bhanu and Vaishnavi to fill through the Workflow Intake Template.",
        source: "KPI Proposal v3 (the POC's gallery duties) + owner to document the daily run-of-show"
      },
      {
        id: "dpr-submission",
        name: "DPR submission",
        domain: "Events",
        ownerRole: "Event POC / Programming POC",
        cadence: "Per event",
        trigger: "An event or themed session has been designed or finished.",
        tools: ["Event DPR Submission Form", "DPR template", "Events Hub"],
        steps: [
          "Open the DPR template — DPR is Design, Plan, Report.",
          "Capture the what, how, audience, materials, and intended outcomes.",
          "Submit through the Event DPR Submission Form.",
          "Check the event's status updates in the Events Hub.",
          "After the event, fill the report half: what actually happened, and what was learned."
        ],
        coverNote: "Submitting the DPR isn't optional — a missing DPR is a missing data point for the KPIs downstream.",
        source: "Events & Programming overview"
      },
      {
        id: "events-hub-monitoring",
        name: "Events Hub monitoring",
        domain: "Events",
        ownerRole: "Event POC / Programming (HQ)",
        cadence: "Monday, Wednesday, Friday",
        trigger: "Standing routine.",
        tools: ["Events Hub (Google Sheets)"],
        steps: [
          "Open the Events Hub and scan the full pipeline of active events.",
          "Check each event's timeline, dependencies, and owner are current.",
          "Update statuses; move finished events; flag anything slipping.",
          "Make sure upcoming events have full timelines and dependencies entered.",
          "Raise blockers to the owner or the Wednesday meeting."
        ],
        coverNote: "The Events Hub is the backbone — keeping it current is the whole job. Three passes a week is enough if they actually happen.",
        source: "Events & Programming overview + Events Hub"
      },
      {
        id: "run-event",
        name: "Run an event end to end",
        domain: "Events",
        ownerRole: "Event POC",
        cadence: "Per event",
        trigger: "An event is committed for a centre or month.",
        tools: ["Events Hub", "Param Events SOP", "AIRPORT scoping", "Event Feedback Form"],
        steps: [
          "Scope the event with AIRPORT (Artifact, Interview, Resources, Plan, Options, Restart, Test) — write a brief with the decisions locked.",
          "Enter it in the Events Hub with timeline, dependencies, and owner.",
          "Brief marketing on the theme and what collateral is needed.",
          "Prepare materials, roles, and the run-of-show; confirm facilitator cover.",
          "Run the event; keep the gallery informed throughout.",
          "Collect feedback, complete the DPR, and capture the outcomes for the KPIs."
        ],
        coverNote: "The Param Events SOP and the AIRPORT brief are the backup — a good brief means someone else can run it. A named cover for the Event POC is still open.",
        source: "Events & Programming overview + Constitution (AIRPORT)"
      },
      {
        id: "unified-vision",
        name: "Unified Vision for Science (seminar)",
        domain: "Programmes",
        ownerRole: "Programming (HQ) / team",
        cadence: "Quarterly",
        trigger: "The gap between editions ends; the next one is committed.",
        tools: ["UVS SOP", "Stakeholder list", "Theme research"],
        steps: [
          "Start with research — take real inspiration from similar conferences and public science events before designing. Ground the vision early.",
          "Decide the theme and timing well ahead. Don't let the key calls slip to the end (the lesson from UVS 5 and 6).",
          "Begin stakeholder conversations early in the cycle.",
          "Bring on external experts who fit the theme.",
          "Run the themed seminar: external experts and the team together, with room for the collaboration-building that is the point (detailed run-of-show: see the UVS SOP).",
          "Circulate notes to the network afterwards; record the partnerships formed."
        ],
        coverNote: "Strong execution needs strong grounding, and that grounding has to come before the event, not during it. The UVS SOP exists to avoid the last-minute pressure of past editions.",
        source: "Unified Vision for Science overview + UVS SOP"
      },
      {
        id: "catalyst-circle",
        name: "Catalyst Circle (teacher working group)",
        domain: "Programmes",
        ownerRole: "Programming (part-time)",
        cadence: "Weekly meetups (year-long cohort)",
        placeholder: true,
        note: "Catalyst Circle is a year-long teacher development programme — a working group, not a course — anchored by weekly meetups (per KPI Proposal v3, which tracks meetup attendance). This year's cohort is about 49 teachers, on an expansion model where this year's teachers seed next year's trainer pool. What isn't written down yet is how a meetup actually runs end to end, so rather than guess the steps, this is a placeholder for Shobhana (with Pranav on follow-ups) to fill through the intake template.",
        source: "KPI Proposal v3 (cadence, cohort, model) + owner to document the run-of-show"
      },
      {
        id: "field-trips",
        name: "Field trips",
        domain: "Programmes",
        ownerRole: "Programming (part-time)",
        cadence: "Quarterly",
        trigger: "The quarterly rhythm — the run-up needs to start early.",
        tools: ["Field-trip candidates list", "Mission-alignment check", "Logistics hand-off (business + facilities)"],
        steps: [
          "Start early — the quarterly rhythm means lead time is the real constraint.",
          "Shortlist destinations that fit Param's mission.",
          "Write a researched, cited proposal.",
          "Hand logistics to the business and facilities teams.",
          "Open it to Future Mindz members and the public; run it, and gather feedback."
        ],
        coverNote: "The detailed run-of-show isn't documented — the owner can add it through the intake template. What holds: start a quarter ahead, keep it mission-aligned, and hand logistics to business and facilities.",
        source: "Constitution (Article V: field-trip ideation) + Program Design Cell overview"
      },
      {
        id: "facilitation-guides",
        name: "Facilitation guide production",
        domain: "Gallery & lab sessions",
        ownerRole: "Programming (HQ) / PDC",
        cadence: "Per session format",
        trigger: "A session format needs a guide someone can run.",
        tools: ["Facilitation Guidebook", "Design system / brand kit"],
        steps: [
          "Start from the session design — the arc, the constraint, the materials.",
          "Write the guide so a facilitator can run it without asking the designer.",
          "Include the cheat sheet, materials list, and observation sheet.",
          "Apply the .scp look (see the brand kit) so it matches everything else.",
          "Test it: have someone other than the designer read and run it."
        ],
        coverNote: "A guide only its designer can run isn't finished. The test is a cold read by another facilitator.",
        source: "Facilitation & Workshop Design overview + Facilitation Guidebook"
      },
      {
        id: "wednesday-meeting",
        name: "Wednesday alignment meeting",
        domain: "Team operations",
        ownerRole: "Team Lead",
        cadence: "Weekly — Wednesday 3:00 PM",
        trigger: "Standing meeting.",
        tools: ["Agenda", "Action board", "The Constitution (for Amber calls)"],
        steps: [
          "Gather the Amber proposals and contested items beforehand.",
          "Decide the proposals that are team-wide or affect several people.",
          "Settle classification disputes (standup, KPIs) on the spot.",
          "Ratify any Constitution amendments (with the Team Lead's sign-off) and log them.",
          "Confirm owners and next steps; update the action board."
        ],
        coverNote: "Wednesday is where alignment happens. If something needs a human go, this is where it gets one.",
        source: "Constitution (Articles IV, VI, VIII) + meeting cadence"
      },
      {
        id: "maintain-this-os",
        name: "Maintain this operating system",
        domain: "Knowledge & culture",
        ownerRole: "Programming (HQ) / anyone",
        cadence: "Whenever reality changes",
        trigger: "A role, workflow, person, or resource changed.",
        tools: ["content.js", "Maintenance SOP.md", "team-os skill"],
        steps: [
          "Open content.js in this folder.",
          "Find the section that changed.",
          "Edit the text between the quote marks; keep the punctuation.",
          "Save, then re-open index.html to see it live.",
          "Or open this folder with Claude and say what changed in plain words.",
          "When someone documents a new workflow via the intake template, add it here."
        ],
        coverNote: "This is only useful if it stays true. Treat an out-of-date page as a bug. One source of truth: content.js.",
        source: "This project"
      }
    ]
  },

  /* -------------------------------------------------------------------------- */
  onboarding: {
    eyebrow: "Onboarding",
    heading: "Your first month, by role.",
    lede: "Onboarding here isn't a folder of documents. It's a path: learn who we are, learn your role, watch the work happen, then hold a piece of it. Find your role below.",
    common: {
      heading: "Everyone, first",
      steps: [
        "Read who we are — the mission, the living-lab idea, and the five principles. They decide things; they're not decoration.",
        "Read the Constitution summary — how we work, and how Claude works with us. Learn the Green / Amber / Red tiers.",
        "Meet the team and find your role page.",
        "Join the daily WhatsApp stand-up (11:00 AM) and the Wednesday 3:00 PM meeting.",
        "Set up your tools: Google Drive, Notion, Sheets, and your own Claude project with the team context snippet."
      ]
    },
    paths: [
      {
        id: "onboarding-lead",
        role: "Team Lead",
        roleIds: ["team-lead"],
        weeks: [
          { when: "Week 1", items: ["Get across the current direction, the live projects, and the open Amber calls.", "Re-read the Constitution's agency tiers and stewardship."] },
          { when: "Weeks 2–4", items: ["Run a Wednesday meeting end to end.", "Hold one cross-centre consistency conversation.", "Give the go on a live external or contested call."] }
        ]
      },
      {
        id: "onboarding-programming",
        role: "Programming (HQ) / part-time / research",
        roleIds: ["programming-hq", "programming-pt", "research"],
        weeks: [
          { when: "Week 1", items: ["Read the Program Design Cell overview and the design principles.", "Read the KPI Proposal v3 and the standup system, so you know how we measure and report."] },
          { when: "Weeks 2–4", items: ["Shadow a workshop design cycle.", "Run one internal-system pass (standup or KPI) with the SOP open.", "Pick up one workflow end to end."] }
        ]
      },
      {
        id: "onboarding-poc",
        role: "Programming POC (gallery)",
        roleIds: ["programming-poc"],
        weeks: [
          { when: "Week 1", items: ["Read the Facilitation Guidebook and the move set.", "Spend time on the gallery floor; watch how facilitation actually works at your centre."] },
          { when: "Weeks 2–4", items: ["Facilitate on the floor alongside someone, then on your own.", "Start holding the quality of the gallery experience.", "Note what's working and what isn't, and bring it to the team."] }
        ]
      },
      {
        id: "onboarding-events",
        role: "Event POC",
        roleIds: ["events-poc"],
        weeks: [
          { when: "Week 1", items: ["Read the Param Events SOP and walk the Events Hub end to end.", "Sit in on the Mon/Wed/Fri status pass; watch a lab session run."] },
          { when: "Weeks 2–4", items: ["Scope a small event with AIRPORT.", "Run the Events Hub routine for two weeks.", "Run a lab session and an event day, and close them with feedback + a DPR."] }
        ]
      },
      {
        id: "onboarding-intern",
        role: "Intern",
        roleIds: ["intern"],
        weeks: [
          { when: "Week 1", items: ["Read who we are and the Constitution summary.", "Find your project owner and agree how you'll pair."] },
          { when: "Weeks 2–4", items: ["Support one project under a full-timer.", "Document and tidy up.", "Raise anything that feels beyond intern scope."] }
        ]
      }
    ]
  },

  /* --------------------------------------------------------------------------
     UPSKILLING — role paths + the craft library. Facilitation craft is from
     the Facilitation Guidebook; the voice palette is flagged as exploratory.
     -------------------------------------------------------------------------- */
  upskilling: {
    eyebrow: "Upskilling",
    heading: "Every member, getting better.",
    lede: "We want to be a global-standard science centre built in India, and that only means something if it shows up in each person's craft. Below: a growth path for each role, and a shared library of the craft, reading, and habits that raise the bar.",
    paths: [
      { id: "upskilling-lead", role: "Team Lead", grow: ["Holding quality across centres without doing the work yourself.", "Knowing what to lock, what to delegate, what to trust.", "Keeping shared language and systems alive as the team grows."] },
      { id: "upskilling-programming", role: "Programming / research", grow: ["Session design: the arc, the constraint, the hook question.", "Systems thinking: build the container, not the content; always ship the handover layer.", "Working with Claude: skills, briefs, and the Green/Amber/Red tiers."] },
      { id: "upskilling-facilitation", role: "Programming POC / facilitation", grow: ["The move set: the Narrate, the Productive Pause, the What-If, Let It Fail.", "Observation: seeing what a session is doing, and writing it down.", "The question-first habit: before you speak, ask whether you're about to ask or about to explain.", "Running a guide cold — the mark of a transferable session."] },
      { id: "upskilling-events", role: "Event POC", grow: ["Scoping with AIRPORT: turning an idea into a runnable brief.", "Coordination: timelines, dependencies, keeping the gallery informed.", "Feedback loops: closing every event with what was learned."] }
    ],
    library: {
      facilitationCraft: {
        heading: "Facilitation craft",
        intro: "The medium is the facilitator. The line the whole craft hangs on: your job is to ask, not explain. We aren't installing curiosity — we're drawing out what's already in a participant, moving them from passive observer to seeker, to solver, to innovator.",
        moves: [
          { name: "The Narrate", use: "Say what you observe, not what you judge. 'I notice you changed your fold' — not 'great idea'." },
          { name: "The Productive Pause", use: "Hold the silence. Watch what they do with it; break it only when the struggle stops being useful." },
          { name: "The What-If", use: "Open things up with a question that gives no direction. Ask 'what if', not 'why'." },
          { name: "Let It Fail", use: "When a build collapses, don't rescue it. A collapsed bridge is the learning." }
        ],
        behaviours: [
          "Invite exploration through questions, not explanation.",
          "Protect making time — resist the urge to interrupt.",
          "Never show a finished example before the making phase.",
          "Never explain the science during the session.",
          "Design for agency: where and how does the participant feel in charge?"
        ],
        selfCheck: "The habit behind all of it: before you speak, ask yourself — am I about to ask something, or about to explain something? That's what the Facilitation Style score watches: at least 60% of a facilitator's moves should be question-first. The Programming POC spot-checks monthly.",
        explorations: {
          note: "A set of voice registers explored in the Programming SOP notes — not settled craft yet, but useful for widening your range. Match the voice to the moment.",
          items: [
            "House-lights announcement — gather attention, signal a timed demo.",
            "Thinking-aloud — model the scientific process; lower the fear of being wrong.",
            "Story-circle narrator — link a phenomenon to history or a human story.",
            "Empathetic coach — one-on-one guidance; settle frustration.",
            "Data detective — move from spectacle to analysis; anchor the take-home.",
            "Reflective librarian — wind down; help the group make meaning."
          ]
        }
      },
      designPrinciples: {
        heading: "Design principles",
        items: [
          "Design simple first. Build capacity. Then add constraints.",
          "Never explain the science during the session — the experience is the learning.",
          "Never show a finished example before the making phase.",
          "Market with curiosity ('Can paper hold a kilogram?'), not with a theme.",
          "Word of mouth from a genuinely good session beats any poster."
        ]
      },
      reading: {
        heading: "Team reading",
        items: [
          { title: "The E-Myth Revisited", author: "Michael Gerber", why: "Work on the system, not in it — why every system ships with its handover layer." },
          { title: "Creativity, Inc.", author: "Ed Catmull", why: "Building and protecting a creative culture as an organisation grows." }
        ],
        note: "This list is short on purpose. Add the team's current reading, research articles, and links worth keeping — the Ideaverse is the natural feeder."
      },
      watch: {
        heading: "Channels worth watching",
        intro: "A starting shelf of YouTube channels the team can pull from — for the curiosity hook at the top of a session, for demo and activity ideas, for making a hard idea clear, and for facilitators deepening their own craft. Organised by how you'd reach for them, not by subject.",
        categories: [
          {
            name: "Wonder & big-picture science",
            blurb: "The hook — spark awe and frame why something matters before the hands-on inquiry begins.",
            channels: [
              { name: "Veritasium", url: "https://www.youtube.com/@veritasium", use: "Narrative science and the history of discovery; great for the opening 'why' with older kids and teachers." },
              { name: "Kurzgesagt – In a Nutshell", url: "https://www.youtube.com/@kurzgesagt", use: "Beautifully animated big-question explainers; pure framing and wonder, not demos to replicate." },
              { name: "PBS Space Time", url: "https://www.youtube.com/@pbsspacetime", use: "Astrophysics and cosmology, explained deep; best as facilitator prep and 14–16 inspiration." }
            ]
          },
          {
            name: "Phenomena & demos",
            blurb: "The surprising, testable outcome — hooks a facilitator can stage live or adapt into a station.",
            channels: [
              { name: "The Action Lab", url: "https://www.youtube.com/@TheActionLab", use: "'What would happen if…' real-world demos; a goldmine of safe-to-adapt provocations." },
              { name: "Steve Mould", url: "https://www.youtube.com/@stevemould", use: "The mechanism behind everyday phenomena, built around a striking demo." },
              { name: "NileRed", url: "https://www.youtube.com/@NileRed", use: "Dramatic chemistry that makes 'what's happening here?' irresistible.", caveat: "Inspiration only — lab-grade reagents, not classroom-safe" },
              { name: "styropyro", url: "https://www.youtube.com/@styropyro", use: "Lasers and high voltage; a pure awe-hook for a session on light or energy.", caveat: "Facilitator-curated viewing only — genuinely dangerous to replicate" }
            ]
          },
          {
            name: "Concept clarity & teaching craft",
            blurb: "Making the abstract visible — worked explanations, plus channels for facilitators' own upskilling.",
            channels: [
              { name: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown", use: "Visual-first maths intuition; borrow its 'make it visible' framing when you design an explanation." },
              { name: "The Organic Chemistry Tutor", url: "https://www.youtube.com/@TheOrganicChemistryTutor", use: "Clear worked walkthroughs across maths, chemistry and physics; a prep and remediation shelf." },
              { name: "Mind Your Decisions", url: "https://www.youtube.com/@MindYourDecisions", use: "Bite-size maths puzzles; ready 'can you solve this?' warm-ups for an 11–16 session." },
              { name: "eigenchris", url: "https://www.youtube.com/@eigenchris", use: "Deep lecture series on the maths and physics behind a demo.", caveat: "Facilitator self-upskilling — well above the 6–16 band" }
            ]
          },
          {
            name: "How things work / engineering",
            blurb: "Real-world mechanisms and design constraints — for 'how is this built?' challenges.",
            channels: [
              { name: "Practical Engineering", url: "https://www.youtube.com/@PracticalEngineeringChannel", use: "Infrastructure explained with physical scale models; very adaptable into tray-top demos." },
              { name: "The Engineering Mindset", url: "https://www.youtube.com/@EngineeringMindset", use: "Animated electronics and HVAC fundamentals, jargon-light." },
              { name: "Real Engineering", url: "https://www.youtube.com/@RealEngineering", use: "Documentary-style engineering deep-dives; teen and teacher prep." },
              { name: "ElectroBOOM", url: "https://www.youtube.com/@electroboom", use: "Electrical engineering through comedy and what-not-to-do safety.", caveat: "Teacher-curated clips — the humour normalises dangerous stunts" }
            ]
          }
        ],
        note: "A note on fit: most of these land best with the 12–16 band, with teachers, or as facilitator prep — few suit ages 6–10 directly. And three (NileRed, styropyro, ElectroBOOM) show genuinely unsafe experiments: treat them as facilitator-curated viewing and inspiration, never as a recipe to hand a child. Add to this shelf as the team finds keepers — the Ideaverse is the natural feeder. Links open on YouTube."
      },
      mentorship: {
        heading: "Mentorship & support",
        note: "How mentorship works here isn't defined yet. A simple starting shape, for the team to confirm: each person has a craft they're deepening and someone they learn it with, and the Wednesday meeting surfaces where someone is stuck."
      }
    }
  },

  /* --------------------------------------------------------------------------
     HOW WE SCALE — cited, fact-checked (26 of 29 practices passed verification).
     Keep the citation if you edit a theme.
     -------------------------------------------------------------------------- */
  howWeScale: {
    eyebrow: "How we scale",
    heading: "A global standard, built in India.",
    lede: "We're not trying to look like a Western science centre. We're trying to build, from here, something good enough to stand next to any of them. India has done this before — in companies and in mission-driven institutions that held quality and culture as they grew. Here's what we're deliberately borrowing, and where each idea comes from.",
    orchestration: "Our specific problem is the orchestration layer: as Param runs across more than one centre at once — Jayanagar and Whitefield today, with HQ as the design hub and the announced Channahalli flagship in the growth picture (see the note on the team page) — our job shifts from delivering the experience to making sure it lands the same way wherever it runs and whoever runs it. That needs clarity about the non-negotiables — the intent, the quality markers, the experience a visitor should have — and trust that the person on the ground can hold them without being watched.",
    closingLine: "A global-standard science centre is built the way India's most durable institutions were built: by writing down what good looks like, growing the people who deliver it, and keeping the promise the same at every door.",
    themesNote: "Each borrowed practice below carries a verifiable source (Constitution P8). They are external inspirations we're choosing to adapt, not claims about what we already do.",
    themes: [
      {
        title: "One rubric, every centre",
        principle: "Consistency across centres doesn't come from everyone watching everyone; it comes from one named picture of what good looks like that every centre is measured against. Hold very different sessions to the same few dimensions, and let the score point at a target rather than a pass or a fail.",
        practice_for_scp: "Write a one-page 'session excellence model' with a small fixed set of named categories (say: inquiry quality, facilitation, accessibility, safety, evidence of what a child explored) that travel across Spark Lab, Quest Lab and Catalyst Circle even though the content differs. Each quarter, a facilitator from one centre visits another and scores against those categories, out of a target, not pass/fail. Make it a learning visit for the visitor, never an audit, and rotate who reviews whom so consistency stays a habit, not a launch-day event.",
        inspired_by: ["Tata Group — Tata Business Excellence Model (TBEM)"],
        citation_title: "Tata's Baldrige Advantage: A Multinational's Model for Performance Excellence",
        citation_publisher: "NIST Baldrige Performance Excellence Program",
        citation_url: "https://www.nist.gov/blogs/blogrige/tatas-baldrige-advantage-multinationals-model-performance-excellence"
      },
      {
        title: "Values as decision-guidance, not a poster",
        principle: "Written values only matter when a facilitator can reach for them in the grey moment a session actually produces. The point of writing them down is so the same dilemma resolves the same way whether it comes up at HQ or in Whitefield — and so leaders can be held to them in real calls, not just on a wall.",
        practice_for_scp: "Turn the five values into a short conduct guide for live judgement calls: what to do when a child wants the answer, when a session is running long, when an activity is leaving someone out. Make it the actual filter in the Wednesday meeting — ask out loud, 'does this honour rigour without jargon?' before a session is approved. Protect an unchanging core, refresh the wording as the team grows, and make signing on to it the price of carrying the .scp name.",
        inspired_by: ["Tata Group — Tata Code of Conduct", "Infosys — C-LIFE values"],
        citation_title: "Tata Code of Conduct",
        citation_publisher: "Tata Sons (tata.com)",
        citation_url: "https://www.tata.com/about-us/tata-code-of-conduct"
      },
      {
        title: "Make a facilitator session-ready on purpose",
        principle: "A new facilitator shouldn't become good by accident on the gallery floor. Even a small team can standardise how someone becomes the medium: a defined path, learned by doing rather than memorised, with a real line you cross before you run a session alone.",
        practice_for_scp: "Build a repeatable facilitator foundation: structured shadowing, watched practice runs, and a short assessed run-through against the session rubric before someone is signed off to lead. Hire for disposition (curiosity, warmth, care) over credentials, and invest in thorough, hands-on onboarding so the values are lived, not recited. Make 'session-ready' an explicit line every facilitator crosses, so a Future Mindz session feels the same whichever centre and whichever facilitator a family meets.",
        inspired_by: ["Infosys — Global Education Center, Mysore", "Taj / IHCL — Taj People Philosophy"],
        citation_title: "Why India's Infosys has a university of its own",
        citation_publisher: "The Hechinger Report",
        citation_url: "https://hechingerreport.org/why-indias-infosys-has-a-university-of-its-own/"
      },
      {
        title: "Grow your own bench, then rotate it",
        principle: "Eight people are a shared resource, not centre-bound staff. The cheapest, most durable way a tiny team keeps three centres feeling like one place is to let cross-centre experience, paired with mentorship, carry the culture — while deliberately growing the next facilitators from the community you serve.",
        practice_for_scp: "Treat facilitators as one pool: at a pace that respects capacity, rotate people across centres (Jayanagar and Whitefield today) and across Spark Lab, Quest Lab and Catalyst Circle, each rotation paired with a senior mentor. In parallel, train promising people from your own visitor and teacher community for facilitation, rather than waiting for ready-made hires. Always check the rotation against facilitator load before committing.",
        inspired_by: ["Tata Group — Tata Administrative Service (TAS)", "Zoho — Zoho Schools of Learning", "Aravind Eye Care — trained 'Sisters'"],
        citation_title: "TAS: Leadership Programme at the Tata group",
        citation_publisher: "Tata Sons (tata.com)",
        citation_url: "https://www.tata.com/careers/programs/tas"
      },
      {
        title: "A central kitchen, finished kits to the edge",
        principle: "You scale a small expert team by doing the hard, repeatable work once, centrally, so the front line delivers a finished experience instead of rebuilding it from scratch each time. Standard inputs, local assembly, the same quality everywhere.",
        practice_for_scp: "Have the programming team produce fully-baked session kits — laid-out materials, a clear method, opening and reflection routines — so a facilitator spends their attention only on the irreplaceable human moment, not on setup or redesign. Build a library of tested, reusable building blocks (formats, demos, reflection prompts, materials lists) any centre can recombine for the group in front of them, and pre-stage everything that doesn't need the facilitator's expertise.",
        inspired_by: ["Akshaya Patra — centralised mega-kitchens", "Aravind Eye Care — two-table protocol", "ISRO — reusing proven building blocks"],
        citation_title: "Case Study: Akshaya Patra",
        citation_publisher: "Stanford Social Innovation Review",
        citation_url: "https://ssir.org/articles/entry/case_study_akshaya_patra"
      },
      {
        title: "Local delivery, one central promise",
        principle: "Each centre can run its own operations and local relationships while still showing families one coherent Param Science. Split cleanly what must be local from what must be central: centralise the design standards, the voice, and the quality bar; decentralise the day-to-day running. Being multi-centre is a strength, not a compromise.",
        practice_for_scp: "Name the split out loud. Each centre owns scheduling, its local school and parent relationships, and adapting to its community; the programming team centrally owns session design, the shared identity, and the quality bar — so no centre reinvents the wheel and HQ doesn't micromanage every session. Treat each centre as a real node rooted in its neighbourhood, not a lesser satellite of HQ, while the consistency a family sees — same standards, same warmth, same honesty — is held from the centre.",
        inspired_by: ["Amul / GCMMF — the Anand Pattern", "Zoho — rural offices model", "Titan / Tanishq — standardised retail experience"],
        citation_title: "Operation Flood (the Anand Pattern)",
        citation_publisher: "GKToday",
        citation_url: "https://www.gktoday.in/operation-flood/"
      },
      {
        title: "Let families see the karat",
        principle: "Trust is built by giving people the tool to check you, not by telling them you're good. Make quality visible and verifiable to the children, parents and teachers you serve, and share your own inconvenient numbers rather than only the wins. Owning what didn't work is itself a credibility system.",
        practice_for_scp: "Turn the invisible quality question into something a parent can see: a clear, plain learning goal per session, and a simple signal of what a child actually explored that day — the same at every centre. As the impact framework matures, commit to sharing the honest figures — attendance, drop-off, what a session got wrong — alongside the wins, first inside the team and then with families. Let rigour be something people can check, in the spirit of rigour without jargon.",
        inspired_by: ["Titan / Tanishq — the Karatmeter", "Infosys — voluntary disclosure"],
        citation_title: "How Karatmeters gave a new life to Tanishq",
        citation_publisher: "Simplanations",
        citation_url: "https://www.simplanations.in/p/snap-9-how-karatmeters-gave-a-new"
      },
      {
        title: "Review gates and blameless failure reviews",
        principle: "A second set of eyes at predictable checkpoints catches problems cheaply, before they reach a child or a teacher. When something does flop, the calm question is what happened and what we change, not who to blame — so one centre's mistake becomes a system-wide improvement instead of a repeated one.",
        practice_for_scp: "Put two light fixed gates into the life of every new session or programme: a design review before build, and a readiness review before it goes live, both run by peers who didn't author it. When a session flops or a teacher cohort comes away confused, run a short, repeatable blameless review with someone from outside that centre in the room, capture the cause and the fix, and feed it back into the kits and the rubric so all three centres improve at once.",
        inspired_by: ["ISRO — staged independent design reviews", "ISRO — failure analysis boards"],
        citation_title: "Quality management for space systems in ISRO",
        citation_publisher: "Acta Astronautica (Elsevier)",
        citation_url: "https://www.sciencedirect.com/science/article/abs/pii/S0094576509002197"
      },
      {
        title: "Design for portability, protect the long horizon",
        principle: "The deepest outcomes — curiosity and scientific temper — build over years and resist quarterly metrics, so judge the work by depth and the participant's experience while still aiming high. At the same time, make 'will this travel to another centre' a design question from the first sketch, not an afterthought.",
        practice_for_scp: "Add one line to every new-session brief: how it is replicable at another centre. Capture a small, honest set of measures so what works at one centre can be deliberately spread to the others — the disciplined backbone the impact framework still needs. Hold a patient, founder-like ownership of the mission against pressure to chase only what's easy to count this term, and protect one non-negotiable quality bar for inquiry across every centre, letting only the surroundings flex.",
        inspired_by: ["Akshaya Patra — replicable standardised decisions", "Zoho — long-horizon thinking", "Aravind Eye Care — identical quality across tiers"],
        citation_title: "Case Study: Akshaya Patra",
        citation_publisher: "Stanford Social Innovation Review",
        citation_url: "https://ssir.org/articles/entry/case_study_akshaya_patra"
      }
    ]
  },

  /* --------------------------------------------------------------------------
     THE CONSTITUTION — how we work, and how Claude works with us (v1.1-draft).
     Grounded in the Programming Team Constitution + Context Snippet.
     -------------------------------------------------------------------------- */
  constitution: {
    eyebrow: "The Constitution",
    heading: "How we work — and how Claude works with us.",
    lede: "The team shares one Claude across many people and many systems. The Constitution writes down the rules so any member's Claude knows what we value, what it can do on its own, what it must check first, and what is never its call. A Claude that knows our principles can be trusted with more independence, not less. It's a living, ratified document (currently v1.1-draft); the steward is Rohan.",
    tiers: [
      { name: "Green — act, then show your work", body: "Inside an agreed container: drafting, analysis, ideation, research with citations, formatting; running and maintaining existing systems by their SOPs; building drafts of anything already aligned on. Deliver with a straight account of what you did, decided, and left open." },
      { name: "Amber — propose, then act", body: "Prepare the full thing, but a human says go before it takes effect: new systems or skills, structural changes to a live system, anything that changes another member's workflow, official or outside-facing documents, anything touching the team's stack. Contested or team-wide items go to the Wednesday meeting." },
      { name: "Red — never Claude's call", body: "Judgements about individual people; outside commitments; sending or publishing anything outside the team; deleting or overwriting others' work; children's personal data beyond the agreed instruments; overriding a facilitator-capacity concern a human has raised." }
    ],
    principles: [
      "Design the container, not the content.",
      "Facilitator capacity is a design constraint, not an afterthought.",
      "Every system ships with its handover layer.",
      "One source of truth per system.",
      "Capacity before complexity.",
      "Flag vague terms; build shared language.",
      "Observe first, propose second.",
      "Cite everything from outside.",
      "Data about people is diagnostic, never competitive.",
      "Three tries, then a workaround.",
      "Honest delivery.",
      "Say only what you can stand behind — an honest gap beats confident filler.",
      "Write the way we talk — plain and warm, not performed."
    ],
    rituals: [
      "New projects start with AIRPORT and a project brief — the container future work happens inside.",
      "Before delivering substantial work, Claude runs the Constitutional Check against the principles.",
      "Substantial sessions close with a handoff note, so continuity never depends on memory.",
      "Wednesday 3:00 PM is where alignment happens; the daily 11:00 AM WhatsApp stand-up keeps the week visible."
    ],
    link: "Full copy: 1 Projects/Programming Team Constitution/Programming Team Constitution.md"
  },

  /* --------------------------------------------------------------------------
     EXTERNAL — public-ready face. BUILT, NOT PUBLISHED. Publishing is a human
     decision (Red). Specifics marked for confirmation before going live.
     -------------------------------------------------------------------------- */
  external: {
    eyebrow: "For visitors — preview, unpublished",
    notice: "This is the public-facing face of the team, built and ready. It is not published. Publishing anything outside the team is a human decision. Programme dates, fees, and named facilitators are marked where they need confirming before this goes live.",
    hero: {
      eyebrow: "The Param Science Programming Team",
      heading: "Science is not a subject. It is a way of being in the world.",
      lede: "We design the experiences that happen inside the galleries, across lab sessions, in teacher development, and at the quarterly seminars that pull the wider community together. Our measure of success is the quality of a question a child asks on the way home."
    },
    programmes: [
      { name: "Spark Lab", eyebrow: "Saturdays · ages 6–10", blurb: "One question per session. Children leave with another.", detail: "A constrained, hands-on session built on one surprising activity. Five phases — arrival, spark, making time, share-out, trace. A small group, so every child is seen.", confirm: "Confirm group size, fee, and dates before publishing." },
      { name: "Quest Lab", eyebrow: "Sundays · ages 11+", blurb: "For teenagers ready to take a question past the answer.", detail: "An open challenge with a real constraint, across a six-phase build cycle — brief, research, build, critique, rebuild, present. Real fieldwork; the room isn't always the gallery.", confirm: "Confirm group size, fee, and dates before publishing." },
      { name: "Catalyst Circle", eyebrow: "Ongoing · for teachers", blurb: "A working group, not a course.", detail: "For teachers who treat their classroom as a place of inquiry. A year-long cohort that meets weekly at the centre; open agenda; each teacher brings something they're working through.", confirm: "Confirm cadence and how teachers join before publishing." },
      { name: "Unified Vision for Science", eyebrow: "Quarterly seminar", blurb: "A gathering that pulls the wider science-education community together.", detail: "Four times a year, the team brings together practitioners, researchers, and teachers from across India to think about what science education could be — and where it's falling short.", confirm: "Confirm the next date and capacity before publishing." },
      { name: "Future Mindz", eyebrow: "Membership · ages 6–16", blurb: "The long arc — steady, playful exposure to scientific thinking.", detail: "The bet that what changes a child isn't one visit but a lasting relationship with a place that takes their questions seriously.", confirm: "Confirm fee and benefits before publishing." }
    ],
    closingLine: "We don't perform science education. We live it."
  }
};
