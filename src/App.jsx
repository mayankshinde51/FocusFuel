import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Zap, Clock, Activity, Box } from "lucide-react";

// Top-level app with simple "screens"
export default function FocusFuelApp() {
  const [screen, setScreen] = useState("landing"); // "landing" | "dashboard" | "signin"

  if (screen === "dashboard") {
    return <FocusFuelDashboard onBack={() => setScreen("landing")} />;
  }

  if (screen === "signin") {
    return <SignInScreen onBack={() => setScreen("landing")} />;
  }

  return (
    <FocusFuelLanding
      onGetApp={() => setScreen("dashboard")}
      onSignIn={() => setScreen("signin")}
    />
  );
}

// Original landing UI, now wired to navigation
function FocusFuelLanding({ onGetApp, onSignIn }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE6F0] via-[#FFF8E6] to-[#E8FFFB] text-gray-900 antialiased">
      <header className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-emerald-400 flex items-center justify-center shadow-xl">
            <Zap className="text-white" size={24} />
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-tight">FocusFuel</h1>
            <p className="text-xs text-slate-700">
              Energy-aware productivity for busy professionals
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <a className="text-sm font-medium hover:underline" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline" href="#how">
            How it works
          </a>
          <button
            className="text-sm font-medium hover:underline"
            type="button"
            onClick={onGetApp}
          >
            Demo app
          </button>
          <button
            className="ml-2 px-4 py-2 rounded-lg bg-white/70 backdrop-blur-sm border border-white/30 text-sm font-semibold shadow"
            type="button"
            onClick={onSignIn}
          >
            Sign in
          </button>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* HERO */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-8">
          <div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Work with your energy — not against it.
            </motion.h2>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-4 text-lg text-slate-700"
            >
              FocusFuel learns your daily energy rhythm and builds a smart
              timetable so you do creative, high-value work when you’re
              naturally at your best.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={onGetApp}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-lg font-semibold bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg hover:scale-[1.02] transform transition"
              >
                Try FocusFuel — Free
              </button>
              <a
                href="#how"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-white/60 bg-white/60 backdrop-blur-sm text-sm font-medium hover:scale-[1.02] transform transition"
              >
                How it works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white/60 backdrop-blur-sm shadow">
                <Sun size={20} />
                <p className="text-xs mt-2 font-medium">Energy-aware</p>
              </div>
              <div className="p-3 rounded-xl bg-white/60 backdrop-blur-sm shadow">
                <Clock size={20} />
                <p className="text-xs mt-2 font-medium">Smart timetable</p>
              </div>
              <div className="p-3 rounded-xl bg-white/60 backdrop-blur-sm shadow">
                <Activity size={20} />
                <p className="text-xs mt-2 font-medium">
                  More output, less burnout
                </p>
              </div>
            </div>

            <blockquote className="mt-8 border-l-4 border-pink-400 pl-4 italic text-slate-700 bg-white/40 p-4 rounded-lg">
              "FocusFuel isn’t just another planner or to-do list app. It helps
              you manage your energy, not just your time."
            </blockquote>
          </div>

          {/* Right column: mock app */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="w-full max-w-md rounded-3xl p-6 bg-gradient-to-tr from-white/80 to-white/40 shadow-2xl border border-white/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Today</p>
                  <p className="text-xs text-slate-500">Tuesday • Oct 21</p>
                </div>
                <div className="text-sm font-medium">FocusFuel</div>
              </div>

              <div className="mt-4 h-36 flex flex-col gap-3">
                <EnergyBar label="Morning" level="high" />
                <EnergyBar label="Afternoon" level="medium" />
                <EnergyBar label="Evening" level="low" />
              </div>

              <div className="mt-6 rounded-xl p-3 bg-white/70 shadow-inner">
                <p className="text-xs font-medium">Today&apos;s Smart Slots</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Slot
                    title="Creative Work"
                    time="9:30 - 11:00"
                    importance="High"
                  />
                  <Slot
                    title="Emails & Admin"
                    time="14:00 - 15:00"
                    importance="Low"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-20">
          <h3 className="text-2xl font-bold">Why FocusFuel?</h3>
          <p className="mt-2 text-slate-700 max-w-2xl">
            Built for busy professionals (25–45) with jam-packed schedules.
            FocusFuel helps you protect your mental energy, do your best work in
            less time, and reclaim evenings for life outside work.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Zap size={22} />}
              title="Energy-first scheduling"
              text="Log how you feel (high / medium / low). FocusFuel learns your rhythm and schedules your top work during peaks."
            />
            <FeatureCard
              icon={<Clock size={22} />}
              title="Smart timetable"
              text="Automatic blocks for deep work, shallow work, and breaks, optimized for your peak energy windows."
            />
            <FeatureCard
              icon={<Box size={22} />}
              title="Easy logging"
              text="Quick tap to mark energy level. No long questionnaires. Start improving from day one."
            />
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how"
          className="mt-20 bg-white/30 p-6 rounded-2xl border border-white/60"
        >
          <h3 className="text-2xl font-bold">How it works</h3>
          <ol className="mt-6 space-y-4">
            <li className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <p className="font-semibold">Log energy</p>
                <p className="text-sm text-slate-700">
                  Tap high / medium / low a few times a day. FocusFuel learns
                  patterns quickly.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <p className="font-semibold">Pattern detection</p>
                <p className="text-sm text-slate-700">
                  The app recognizes when you’re most productive and surfaces
                  high-energy slots.
                </p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <div className="mt-1 w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <p className="font-semibold">Smart timetable</p>
                <p className="text-sm text-slate-700">
                  Get a prioritized schedule that assigns big tasks to peak
                  energy windows and easy tasks to low-energy periods.
                </p>
              </div>
            </li>
          </ol>
        </section>

        {/* INTERACTIVE DEMO */}
        <section className="mt-14 p-6 rounded-xl bg-gradient-to-r from-pink-50 to-blue-50 border border-white/40">
          <h4 className="text-lg font-bold">Try the FocusFuel demo</h4>
          <p className="mt-3 text-slate-800">
            Log your energy for a few time slots and see a sample smart
            timetable generated instantly.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-white/80">
              <h5 className="font-semibold">Energy logger</h5>
              <p className="text-xs text-slate-600 mt-2">
                Tap a slot and choose High / Medium / Low.
              </p>
              <EnergyLogger />
            </div>
            <div className="p-4 rounded-lg bg-white/80">
              <h5 className="font-semibold">Smart schedule preview</h5>
              <p className="text-xs text-slate-600 mt-2">
                FocusFuel assigns priority tasks to your high-energy slots.
              </p>
              <SmartSchedulePreview />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="cta"
          className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-bold">
              Ready to work with your energy?
            </h3>
            <p className="mt-2 text-white/90">
              Get personalized schedules that match your peak energy. Join
              professionals who get more done and feel better doing it.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onGetApp}
              className="px-5 py-3 rounded-lg bg-white text-violet-600 font-semibold shadow"
            >
              Open web app
            </button>
            <button
              type="button"
              onClick={onSignIn}
              className="px-5 py-3 rounded-lg bg-white text-violet-600 font-semibold shadow"
            >
              Sign in
            </button>
          </div>
        </section>

        <footer className="mt-12 py-10 text-sm text-slate-600 text-center">
          Built with ❤️ for busy professionals • © {new Date().getFullYear()} FocusFuel
        </footer>
      </main>
    </div>
  );
}

/* ---------- Helper subcomponents ---------- */
function EnergyBar({ label, level }) {
  const color =
    level === "high"
      ? "bg-emerald-400"
      : level === "medium"
      ? "bg-amber-400"
      : "bg-pink-400";
  const pct =
    level === "high" ? "w-3/4" : level === "medium" ? "w-1/2" : "w-1/4";
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 text-xs text-slate-600">{label}</div>
      <div className="flex-1 bg-white/60 rounded-full h-4">
        <div className={`h-4 rounded-full ${color} ${pct}`} />
      </div>
      <div className="w-14 text-xs text-slate-600 capitalize">{level}</div>
    </div>
  );
}

function Slot({ title, time, importance }) {
  return (
    <div className="p-3 rounded-lg bg-white/90">
      <p className="font-semibold text-sm">{title}</p>
      <p className="text-xs text-slate-600">{time}</p>
      <div className="mt-2 text-xs font-medium text-slate-700">
        {importance} priority
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 shadow-md border border-white/30"
    >
      <div className="w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center shadow-sm">
        {icon}
      </div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-700">{text}</p>
    </motion.div>
  );
}

function EnergyLogger() {
  const initial = [
    { id: "morning", label: "Morning (8–10)", level: "medium" },
    { id: "midday", label: "Midday (11–13)", level: "high" },
    { id: "afternoon", label: "Afternoon (14–16)", level: "medium" },
    { id: "evening", label: "Evening (17–19)", level: "low" },
    { id: "night", label: "Night (20–22)", level: "low" },
  ];

  const [slots, setSlots] = useState(() => {
    try {
      const saved = localStorage.getItem("ff_slots_demo");
      return saved ? JSON.parse(saved) : initial;
    } catch (e) {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem("ff_slots_demo", JSON.stringify(slots));
    window.dispatchEvent(new CustomEvent("ff-demo-update", { detail: slots }));
  }, [slots]);

  function setLevel(id, level) {
    setSlots((s) => s.map((x) => (x.id === id ? { ...x, level } : x)));
  }

  return (
    <div className="mt-4 space-y-3">
      {slots.map((s) => (
        <div key={s.id} className="flex items-center justify-between gap-4">
          <div className="text-sm text-slate-700 w-36">{s.label}</div>
          <div className="flex gap-2">
            {[
              ["high", "High"],
              ["medium", "Medium"],
              ["low", "Low"],
            ].map(([val, label]) => (
              <button
                key={val}
                onClick={() => setLevel(s.id, val)}
                className={`px-3 py-1 rounded-full text-xs font-medium border ${
                  s.level === val
                    ? "bg-gradient-to-r from-pink-500 to-amber-400 text-white border-transparent"
                    : "bg-white/70"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SmartSchedulePreview() {
  const [slots, setSlots] = useState(() => {
    try {
      const saved = localStorage.getItem("ff_slots_demo");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    function handler(e) {
      setSlots(
        e.detail || JSON.parse(localStorage.getItem("ff_slots_demo") || "[]")
      );
    }
    window.addEventListener("ff-demo-update", handler);
    // initialize from storage in case no event is fired yet
    setSlots(JSON.parse(localStorage.getItem("ff_slots_demo") || "[]"));
    return () => window.removeEventListener("ff-demo-update", handler);
  }, []);

  const tasks = [
    { id: 1, name: "Design landing", kind: "creative" },
    { id: 2, name: "Finish report", kind: "focused" },
    { id: 3, name: "Emails & Admin", kind: "admin" },
  ];

  const schedule = (slots || []).map((s) => {
    const suggestion =
      s.level === "high" ? tasks[0] : s.level === "medium" ? tasks[1] : tasks[2];
    return { ...s, suggestion };
  });

  return (
    <div className="mt-4 space-y-3">
      {schedule.length === 0 && (
        <div className="text-sm text-slate-600">
          No data yet — log energy on the left to see suggestions.
        </div>
      )}

      {schedule.map((s) => (
        <div
          key={s.id}
          className="p-3 rounded-lg bg-gradient-to-r from-white to-white/90 border flex items-center justify-between"
        >
          <div>
            <div className="text-sm font-semibold">{s.label}</div>
            <div className="text-xs text-slate-600">
              Energy: <span className="font-medium capitalize">{s.level}</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-sm font-semibold">
              Suggested: {s.suggestion.name}
            </div>
            <div className="text-xs text-slate-600">
              Type: {s.suggestion.kind}
            </div>
          </div>
        </div>
      ))}

      <div className="mt-3 text-xs text-slate-600">
        This interactive demo shows the core idea: match task type to your
        energy. In the real app we use smarter models and more data.
      </div>
    </div>
  );
}

// Simple "app" screen UI
function FocusFuelDashboard({ onBack }) {
  const [focusMode, setFocusMode] = useState("deep");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDE1F0] via-[#FFF2D7] to-[#E6FFF5] text-gray-900 antialiased">
      <header className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="px-3 py-1 rounded-full text-xs border border-pink-300 bg-white/70 hover:bg-white"
          >
            ← Back
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-500 to-emerald-400 flex items-center justify-center shadow-xl">
              <Zap className="text-white" size={18} />
            </div>
            <div>
              <p className="text-sm font-bold">FocusFuel</p>
              <p className="text-[10px] text-slate-600">Energy dashboard</p>
            </div>
          </div>
        </div>
        <div className="text-xs text-slate-600">Demo workspace</div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-10">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="md:col-span-2 p-5 bg-white/80 rounded-2xl shadow border border-white/60">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold">Today&apos;s energy map</h2>
                <p className="text-xs text-slate-600 mt-1">
                  See when to do deep work vs. light tasks.
                </p>
              </div>
              <div className="flex gap-2 text-xs">
                <button
                  className={`px-3 py-1 rounded-full border ${
                    focusMode === "deep"
                      ? "bg-pink-500 text-white border-pink-500"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                  onClick={() => setFocusMode("deep")}
                >
                  Deep work view
                </button>
                <button
                  className={`px-3 py-1 rounded-full border ${
                    focusMode === "light"
                      ? "bg-emerald-500 text-white border-emerald-500"
                      : "bg-white text-slate-700 border-slate-200"
                  }`}
                  onClick={() => setFocusMode("light")}
                >
                  Light tasks view
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <EnergyTile label="Morning" level="high" task="Deep creative work" />
              <EnergyTile label="Midday" level="medium" task="Project execution" />
              <EnergyTile label="Afternoon" level="low" task="Emails & admin" />
              <EnergyTile label="Evening" level="low" task="Planning tomorrow" />
            </div>

            <div className="mt-5 text-[11px] text-slate-600">
              Tip: in a real app, this screen would sync with your calendar and
              tasks. Here it just shows the concept.
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-white/80 rounded-2xl shadow border border-white/60">
              <p className="text-sm font-semibold">Quick actions</p>
              <div className="mt-3 flex flex-col gap-2 text-xs">
                <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold">
                  Start 25-min focus sprint
                </button>
                <button className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-800">
                  Log current energy
                </button>
                <button className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-800">
                  View weekly pattern
                </button>
              </div>
            </div>

            <div className="p-4 bg-white/80 rounded-2xl shadow border border-white/60 text-xs">
              <p className="text-sm font-semibold mb-2">Today&apos;s summary</p>
              <p className="text-slate-700">
                • You do your best deep work between 9:30–11:00 AM.
              </p>
              <p className="text-slate-700 mt-1">
                • Energy dips after 2 PM — good time for admin.
              </p>
              <p className="text-slate-700 mt-1">
                • Evenings are low energy — keep it light and plan tomorrow.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function EnergyTile({ label, level, task }) {
  const levelColor =
    level === "high"
      ? "bg-emerald-100 text-emerald-700"
      : level === "medium"
      ? "bg-amber-100 text-amber-700"
      : "bg-pink-100 text-pink-700";

  return (
    <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className={`mt-1 inline-flex px-2 py-0.5 rounded-full text-[10px] ${levelColor}`}>
        {level.toUpperCase()} energy
      </p>
      <p className="mt-2 text-[11px] text-slate-800">Suggested: {task}</p>
    </div>
  );
}

// Simple sign-in screen
function SignInScreen({ onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFE6F0] via-[#FFF8E6] to-[#E8FFFB] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/90 rounded-2xl shadow-xl border border-white/70 p-6">
        <button
          type="button"
          onClick={onBack}
          className="text-xs text-slate-500 mb-3 hover:underline"
        >
          ← Back to landing
        </button>
        <h2 className="text-xl font-bold">Sign in to FocusFuel</h2>
        <p className="text-xs text-slate-600 mt-1">
          Demo only — this doesn&apos;t actually create an account.
        </p>
        <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1 text-sm">
            <label className="block text-slate-700">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label className="block text-slate-700">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-orange-400 text-white text-sm font-semibold"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
