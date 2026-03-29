// src/components/shared/BookingModal.tsx
"use client";
import { useState } from "react";
import {
  X, MessageCircle, Wrench, ArrowRight, ArrowLeft,
  CheckCircle2, PhoneCall, Zap, User, Phone,
  Snowflake, WashingMachine, Refrigerator, Wind, HelpCircle,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { buildWhatsAppURL } from "@/lib/whatsapp";

const C = {
  bg: "#f7f8fc",
  surface: "#ffffff",
  border: "#e4e7f0",
  borderGold: "rgba(245,166,35,0.55)",
  text: "hsl(220,55%,14%)",
  textSub: "hsl(220,20%,40%)",
  textMuted: "hsl(220,15%,60%)",
  gold: "hsl(37,90%,48%)",
  goldLight: "rgba(245,166,35,0.10)",
  goldBorder: "rgba(245,166,35,0.30)",
  navy: "hsl(220,85%,23%)",
  shadow: "0 32px 80px rgba(11,43,107,0.14), 0 2px 8px rgba(11,43,107,0.06)",
};

type Appliance = {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  accentBg: string;
  accentBorder: string;
  problems: string[];
  isOther?: boolean;
};

const APPLIANCES: Appliance[] = [
  {
    id: "ac", label: "AC", sublabel: "Air Conditioner",
    icon: <Snowflake />,
    iconBg: "linear-gradient(135deg,#e0f2fe,#bae6fd)", iconColor: "#0369a1",
    accentBg: "rgba(14,165,233,0.06)", accentBorder: "rgba(14,165,233,0.25)",
    problems: ["Not Cooling","Water Leaking","Strange Noise","Not Turning On","Gas Refill Needed","Remote Not Working","Bad Smell"],
  },
  {
    id: "refrigerator", label: "Refrigerator", sublabel: "Fridge / Freezer",
    icon: <Refrigerator />,
    iconBg: "linear-gradient(135deg,#ede9fe,#ddd6fe)", iconColor: "#6d28d9",
    accentBg: "rgba(109,40,217,0.05)", accentBorder: "rgba(109,40,217,0.20)",
    problems: ["Not Cooling","Frost Build-up","Strange Noise","Water Leaking","Compressor Issue","Door Seal Damaged","Fridge Too Warm"],
  },
  {
    id: "washing-machine", label: "Washing Machine", sublabel: "Semi / Fully Auto",
    icon: <WashingMachine />,
    iconBg: "linear-gradient(135deg,#d1fae5,#a7f3d0)", iconColor: "#065f46",
    accentBg: "rgba(16,185,129,0.05)", accentBorder: "rgba(16,185,129,0.22)",
    problems: ["Not Spinning","Water Leaking","Strange Noise","Not Draining","Won't Start","Drum Not Rotating","Error Code on Display"],
  },
  {
    id: "air-cooler", label: "Air Cooler", sublabel: "Desert / Tower / Window",
    icon: <Wind />,
    iconBg: "linear-gradient(135deg,#e0f7fa,#b2ebf2)", iconColor: "#00796b",
    accentBg: "rgba(0,150,136,0.05)", accentBorder: "rgba(0,150,136,0.22)",
    problems: ["Not Cooling","Motor Issue","Water Pump Failure","Dry Pads","Noisy Fan","Water Leaking","Bad Smell","Not Turning On"],
  },
];

const OTHER_APPLIANCE: Appliance = {
  id: "other", label: "Other", sublabel: "Any other appliance",
  icon: <HelpCircle />,
  iconBg: "linear-gradient(135deg,#fef3c7,#fde68a)", iconColor: "#b45309",
  accentBg: "rgba(180,83,9,0.05)", accentBorder: "rgba(180,83,9,0.22)",
  problems: [],
  isOther: true,
};

interface BookingModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [appliance, setAppliance] = useState<Appliance | null>(null);
  const [model, setModel] = useState("");
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);
  const [extraNote, setExtraNote] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const reset = () => {
    setStep(1); setAppliance(null); setModel("");
    setSelectedProblems([]); setExtraNote(""); setName(""); setPhone("");
  };
  const handleClose = () => { reset(); onClose(); };

  const chatDirectly = () => {
    window.open(buildWhatsAppURL("Hello Hosatti Refrigeration Service! 👋\n\nI need help with an appliance repair."), "_blank", "noopener,noreferrer");
    handleClose();
  };

  const toggleProblem = (p: string) =>
    setSelectedProblems(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);

  const pickAppliance = (a: Appliance) => {
    setAppliance(a);
    setSelectedProblems([]);
    setExtraNote("");
    setModel("");
  };

  const bookService = () => {
    const prob = [...selectedProblems, extraNote].filter(Boolean).join(", ");
    const modelLine = model ? `\nModel/Appliance: ${model}` : "";
    const applianceLine = appliance?.id === "other"
      ? `\nAppliance: Other — ${model || "Not specified"}`
      : `\nAppliance: ${appliance?.label}${modelLine}`;
    const msg = `Hello Hosatti Refrigeration Service! 👋\n\nI'd like to book a repair service.\n\nName: ${name}\nPhone: ${phone}${applianceLine}\nProblem(s): ${prob || "Not specified"}\n\nPlease let me know the available slots. Thank you!`;
    window.open(buildWhatsAppURL(msg), "_blank", "noopener,noreferrer");
    handleClose();
  };

  // Step 3 is skipped for "Other" (no problem chips, just freetext)
  const goToStep3 = () => {
    if (appliance?.isOther) {
      setStep(4); // skip to contact
    } else {
      setStep(3);
    }
  };

  const step3Back = () => {
    if (appliance?.isOther) setStep(2);
    else setStep(2);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent
        className="p-0 border-0 rounded-3xl overflow-hidden w-[calc(100%-2.5rem)] sm:w-full sm:max-w-[500px] max-h-[90vh] sm:max-h-[92vh] [&>button.absolute]:hidden"
        style={{ background: C.bg, boxShadow: C.shadow }}
      >
        <div className="overflow-y-auto max-h-[90vh] sm:max-h-[92vh]">

          {/* STEP 1 — Entry */}
          {step === 1 && (
            <>
              <div className="px-6 pt-8 pb-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <DialogTitle className="font-heading font-bold leading-tight" style={{ fontSize: "clamp(1.5rem,4vw,1.9rem)", letterSpacing: "-0.025em", color: C.text }}>
                      Book a Service
                    </DialogTitle>
                    <p className="mt-1 font-body text-sm" style={{ color: C.textMuted }}>Choose how you&apos;d like to get started</p>
                  </div>
                  <CloseBtn onClose={handleClose} />
                </div>
              </div>
              <div className="px-5 pb-4 flex flex-col gap-3">
                <OptionCard onClick={chatDirectly} iconBg="linear-gradient(135deg,#dcfce7,#bbf7d0)" iconColor="#15803d" icon={<MessageCircle className="h-6 w-6" />} title="Chat Directly" subtitle="Open WhatsApp and talk to our team right away" accentHoverBorder="rgba(21,128,61,0.3)" accentHoverBg="rgba(21,128,61,0.04)" />
                <OptionCard onClick={() => setStep(2)} iconBg="linear-gradient(135deg,#fef3c7,#fde68a)" iconColor="#b45309" icon={<Wrench className="h-6 w-6" />} title="Define a Problem" subtitle="Select your appliance, describe the issue & book instantly" accentHoverBorder={C.borderGold} accentHoverBg={C.goldLight} />
              </div>
              <div className="px-5 pb-7 pt-2 flex flex-col items-center gap-2">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex-1 h-px" style={{ background: C.border }} />
                  <p className="font-body text-xs px-1" style={{ color: C.textMuted }}>Quick · Reliable · Local</p>
                  <div className="flex-1 h-px" style={{ background: C.border }} />
                </div>
                <div className="flex items-center gap-1.5">
                  <PhoneCall className="h-3.5 w-3.5" style={{ color: C.gold }} />
                  <p className="font-body text-xs" style={{ color: C.textSub }}>We typically respond within 15 minutes</p>
                </div>
              </div>
            </>
          )}

          {/* Steps 2–4 header */}
          {step >= 2 && <StepHeader step={step} appliance={appliance} onClose={handleClose} />}

          {/* STEP 2 — Pick appliance */}
          {step === 2 && (
            <div className="px-5 pb-6 pt-4 flex flex-col gap-5">
              <p className="font-heading font-bold" style={{ fontSize: "clamp(1.2rem,3vw,1.5rem)", letterSpacing: "-0.02em", color: C.text }}>What needs to be repaired?</p>

              {/* 2×2 grid for main appliances */}
              <div className="grid grid-cols-2 gap-3">
                {APPLIANCES.map((a) => {
                  const sel = appliance?.id === a.id;
                  return (
                    <ApplianceCard key={a.id} a={a} selected={sel} onClick={() => pickAppliance(a)} />
                  );
                })}
              </div>

              {/* "Other" full-width below */}
              <button
                onClick={() => pickAppliance(OTHER_APPLIANCE)}
                className="w-full flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300"
                style={{
                  background: appliance?.id === "other" ? OTHER_APPLIANCE.accentBg : C.surface,
                  border: appliance?.id === "other" ? `2px solid ${OTHER_APPLIANCE.accentBorder}` : `2px solid ${C.border}`,
                  transform: appliance?.id === "other" ? "translateY(-2px)" : "translateY(0)",
                }}
              >
                <div className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: OTHER_APPLIANCE.iconBg, color: OTHER_APPLIANCE.iconColor }}>
                  <span className="h-6 w-6 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full">{OTHER_APPLIANCE.icon}</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="font-body font-bold text-sm" style={{ color: appliance?.id === "other" ? C.navy : C.text }}>Other Appliance / Issue</p>
                  <p className="font-body text-xs mt-0.5" style={{ color: C.textMuted }}>Tell us what you need — we repair most home appliances</p>
                </div>
                {appliance?.id === "other" && <CheckCircle2 className="h-5 w-5 flex-shrink-0" style={{ color: C.gold }} />}
              </button>

              <NavButtons onBack={() => setStep(1)} onNext={goToStep3} nextDisabled={!appliance} nextLabel="Next" />
            </div>
          )}

          {/* STEP 3 — Model + Problems (skipped for "Other") */}
          {step === 3 && appliance && !appliance.isOther && (
            <div className="px-5 pb-6 pt-4 flex flex-col gap-5">
              <p className="font-heading font-bold" style={{ fontSize: "clamp(1.2rem,3vw,1.5rem)", letterSpacing: "-0.02em", color: C.text }}>About your {appliance.label}</p>
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-sm font-semibold" style={{ color: C.text }}>Model name <span className="font-normal" style={{ color: C.textMuted }}>(optional)</span></label>
                <LightInput placeholder="e.g. Voltas 1.5 Ton Inverter" value={model} onChange={setModel} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-sm font-semibold" style={{ color: C.text }}>What&apos;s the problem? <span className="font-normal" style={{ color: C.textMuted }}>(select all that apply)</span></label>
                <div className="flex flex-wrap gap-2">
                  {appliance.problems.map((p) => {
                    const on = selectedProblems.includes(p);
                    return (
                      <button key={p} onClick={() => toggleProblem(p)} className="rounded-full px-3.5 py-2 font-body text-sm font-semibold transition-all duration-200"
                        style={{ background: on ? "linear-gradient(135deg,hsl(37,90%,55%),hsl(30,95%,48%))" : C.surface, border: on ? "1.5px solid transparent" : `1.5px solid ${C.border}`, color: on ? "hsl(216,50%,10%)" : C.text, transform: on ? "scale(1.03)" : "scale(1)" }}>
                        {on && <span className="mr-1">✓</span>}{p}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-sm font-semibold" style={{ color: C.text }}>Anything else? <span className="font-normal" style={{ color: C.textMuted }}>(optional)</span></label>
                <LightTextarea placeholder="Describe the issue in a bit more detail…" value={extraNote} onChange={setExtraNote} rows={2} />
              </div>
              <NavButtons onBack={() => setStep(2)} onNext={() => setStep(4)} nextDisabled={selectedProblems.length === 0 && !extraNote.trim()} nextLabel="Next" />
            </div>
          )}

          {/* STEP 4 (for "Other") — what they need to repair + freetex */}
          {step === 4 && appliance?.isOther && (
            <div className="px-5 pb-6 pt-4 flex flex-col gap-5">
              <p className="font-heading font-bold" style={{ fontSize: "clamp(1.2rem,3vw,1.5rem)", letterSpacing: "-0.02em", color: C.text }}>Tell us what you need</p>
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-sm font-semibold" style={{ color: C.text }}>What appliance needs repair?</label>
                <LightInput placeholder="e.g. Water heater, Geyser, Microwave…" value={model} onChange={setModel} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-sm font-semibold" style={{ color: C.text }}>Describe the problem</label>
                <LightTextarea placeholder="Tell us what's happening — we'll get back to you quickly!" value={extraNote} onChange={setExtraNote} rows={3} />
              </div>
              <NavButtons onBack={() => setStep(2)} onNext={() => setStep(5)} nextDisabled={!model.trim() && !extraNote.trim()} nextLabel="Next" />
            </div>
          )}

          {/* STEP 4 (normal) or STEP 5 (other) — Contact details */}
          {((step === 4 && !appliance?.isOther) || step === 5) && (
            <div className="px-5 pb-7 pt-4 flex flex-col gap-5">
              <p className="font-heading font-bold" style={{ fontSize: "clamp(1.2rem,3vw,1.5rem)", letterSpacing: "-0.02em", color: C.text }}>Your details</p>
              {appliance && (
                <div className="rounded-2xl p-4 flex items-center gap-3.5" style={{ background: C.goldLight, border: `1px solid ${C.goldBorder}` }}>
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center" style={{ background: appliance.iconBg, color: appliance.iconColor }}>
                    <span className="h-6 w-6 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full">{appliance.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-body font-bold text-sm" style={{ color: C.text }}>
                      {appliance.isOther ? (model || "Other Appliance") : appliance.label}
                      {!appliance.isOther && model && <span style={{ color: C.textSub, fontWeight: 400 }}> · {model}</span>}
                    </p>
                    <p className="font-body text-xs mt-0.5 truncate" style={{ color: C.textSub }}>
                      {[...selectedProblems, extraNote].filter(Boolean).join(" · ") || "Issue described above"}
                    </p>
                  </div>
                  <Zap className="h-4 w-4 flex-shrink-0" style={{ color: C.gold }} />
                </div>
              )}
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-sm font-semibold flex items-center gap-2" style={{ color: C.text }}><User className="h-3.5 w-3.5" style={{ color: C.gold }} /> Your full name</label>
                <LightInput placeholder="e.g. Raj Patel" value={name} onChange={setName} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-sm font-semibold flex items-center gap-2" style={{ color: C.text }}><Phone className="h-3.5 w-3.5" style={{ color: C.gold }} /> Phone number</label>
                <LightInput placeholder="e.g. 98765 43210" value={phone} onChange={setPhone} type="tel" />
              </div>
              <div className="flex gap-3 pt-1">
                <GhostBtn onClick={() => appliance?.isOther ? setStep(4) : setStep(3)}><ArrowLeft className="h-4 w-4" /> Back</GhostBtn>
                <button onClick={bookService} disabled={!name.trim() || !phone.trim()} className="flex-1 flex items-center justify-center gap-2.5 rounded-xl h-12 font-body font-bold text-sm transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg,hsl(37,90%,50%),hsl(30,95%,44%))", color: "hsl(216,50%,10%)", boxShadow: "0 4px 20px rgba(245,166,35,0.30)" }}>
                  <MessageCircle className="h-5 w-5" />Book My Service
                </button>
              </div>
              <p className="text-center font-body text-xs" style={{ color: C.textMuted }}>Your details are pre-filled in WhatsApp — just hit send 🚀</p>
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
}

/* ── Sub-components ── */

function ApplianceCard({ a, selected, onClick }: { a: Appliance; selected: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-2.5 rounded-2xl p-4 transition-all duration-300"
      style={{
        background: selected ? a.accentBg : "#fff",
        border: selected ? `2px solid ${a.accentBorder}` : "2px solid #e4e7f0",
        transform: selected ? "translateY(-3px)" : "translateY(0)",
        boxShadow: selected ? "0 6px 20px rgba(11,43,107,0.10)" : "none",
      }}>
      <div className="h-14 w-14 rounded-2xl flex items-center justify-center" style={{ background: a.iconBg, color: a.iconColor }}>
        <span className="h-7 w-7 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full">{a.icon}</span>
      </div>
      <p className="font-body font-bold text-center leading-tight" style={{ fontSize: "0.78rem", color: selected ? C.navy : C.text }}>{a.label}</p>
      <p className="font-body text-center leading-tight" style={{ fontSize: "0.63rem", color: C.textMuted }}>{a.sublabel}</p>
      {selected && <CheckCircle2 className="h-4 w-4" style={{ color: C.gold }} />}
    </button>
  );
}

function StepHeader({ step, appliance, onClose }: { step: number; appliance: Appliance | null; onClose: () => void }) {
  // Total steps = 3 for normal, 4 for "other". Displayed step index = step - 1.
  const isOther = appliance?.isOther;
  const totalSteps = isOther ? 4 : 3;
  const stepIndex = isOther
    ? (step === 2 ? 1 : step === 4 ? 2 : step === 5 ? 3 : step - 1)
    : step - 1;
  const labels = isOther ? ["Appliance","Details","Contact"] : ["Appliance","Problem","Contact"];

  return (
    <div className="sticky top-0 z-20 px-5 pt-5 pb-4" style={{ background: C.bg, borderBottom: `1px solid ${C.border}` }}>
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          {appliance && step > 2 && (
            <div className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: appliance.iconBg, color: appliance.iconColor }}>
              <span className="h-5 w-5 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full">{appliance.icon}</span>
            </div>
          )}
          <div>
            <DialogTitle className="sr-only">Book a Service</DialogTitle>
            <p className="font-body font-bold text-sm" style={{ color: C.text }}>
              {step === 2 && "Select Appliance"}
              {step === 3 && `${appliance?.label} Details`}
              {step === 4 && appliance?.isOther && "Describe Issue"}
              {step === 4 && !appliance?.isOther && "Your Details"}
              {step === 5 && "Your Details"}
            </p>
            <p className="font-body text-xs" style={{ color: C.textMuted }}>Step {stepIndex} of {totalSteps}</p>
          </div>
        </div>
        <CloseBtn onClose={onClose} light />
      </div>
      <div className="flex items-center">
        {Array.from({ length: totalSteps }).map((_, i) => {
          const done = i < stepIndex - 1; const active = i === stepIndex - 1;
          return (
            <div key={i} className="flex items-center flex-1">
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <div className="rounded-full flex items-center justify-center transition-all duration-500 font-body font-bold" style={{ width: active ? "30px" : "22px", height: active ? "30px" : "22px", background: done || active ? "linear-gradient(135deg,hsl(37,90%,50%),hsl(30,95%,44%))" : C.border, color: done || active ? "hsl(216,50%,10%)" : C.textMuted, fontSize: "0.65rem" }}>
                  {done ? "✓" : i + 1}
                </div>
                <span className="font-body font-semibold" style={{ fontSize: "0.55rem", color: active ? C.gold : done ? C.textSub : C.textMuted }}>{labels[i]}</span>
              </div>
              {i < totalSteps - 1 && <div className="flex-1 h-px mx-2 mb-4 transition-all duration-700" style={{ background: done ? "linear-gradient(90deg,hsl(37,90%,50%),hsl(30,95%,44%))" : C.border }} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CloseBtn({ onClose, light = false }: { onClose: () => void; light?: boolean }) {
  return (
    <button onClick={onClose} aria-label="Close dialog" className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-xl transition-all duration-200" style={{ background: light ? C.border : "#edf0f7", color: C.textSub }}>
      <X className="h-4 w-4" />
    </button>
  );
}

function OptionCard({ onClick, iconBg, iconColor, icon, title, subtitle, accentHoverBorder, accentHoverBg }: { onClick: () => void; iconBg: string; iconColor: string; icon: React.ReactNode; title: string; subtitle: string; accentHoverBorder: string; accentHoverBg: string }) {
  return (
    <button onClick={onClick} className="group w-full text-left rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5" style={{ background: C.surface, border: `1.5px solid ${C.border}` }}>
      <div className="flex-shrink-0 h-14 w-14 rounded-2xl flex items-center justify-center" style={{ background: iconBg, color: iconColor }}>
        <span className="h-7 w-7 flex items-center justify-center [&>svg]:h-full [&>svg]:w-full">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-heading font-bold text-base" style={{ color: C.text }}>{title}</p>
        <p className="font-body text-sm mt-0.5" style={{ color: C.textSub }}>{subtitle}</p>
      </div>
      <ArrowRight className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" style={{ color: C.textMuted }} />
    </button>
  );
}

function LightInput({ placeholder, value, onChange, type = "text" }: { placeholder: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} className="w-full rounded-xl px-4 h-12 font-body text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-yellow-400/30" style={{ background: C.surface, border: `1.5px solid ${C.border}`, color: C.text }} />
  );
}

function LightTextarea({ placeholder, value, onChange, rows }: { placeholder: string; value: string; onChange: (v: string) => void; rows: number }) {
  return (
    <textarea rows={rows} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)} className="w-full rounded-xl px-4 py-3 font-body text-sm outline-none transition-all duration-300 resize-none focus:ring-2 focus:ring-yellow-400/30" style={{ background: C.surface, border: `1.5px solid ${C.border}`, color: C.text }} />
  );
}

function NavButtons({ onBack, onNext, nextDisabled, nextLabel }: { onBack: () => void; onNext: () => void; nextDisabled: boolean; nextLabel: string }) {
  return (
    <div className="flex gap-3 pt-1">
      <GhostBtn onClick={onBack}><ArrowLeft className="h-4 w-4" /> Back</GhostBtn>
      <button onClick={onNext} disabled={nextDisabled} className="flex-1 flex items-center justify-center gap-2 rounded-xl h-12 font-body font-bold text-sm transition-all duration-300 disabled:opacity-35 disabled:cursor-not-allowed hover:-translate-y-0.5"
        style={{ background: "linear-gradient(135deg,hsl(37,90%,50%),hsl(30,95%,44%))", color: "hsl(216,50%,10%)", boxShadow: nextDisabled ? "none" : "0 4px 18px rgba(245,166,35,0.28)" }}>
        {nextLabel} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function GhostBtn({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 rounded-xl px-4 h-12 font-body font-semibold text-sm transition-all duration-300 hover:brightness-95" style={{ background: "#edf0f7", border: `1.5px solid ${C.border}`, color: C.textSub }}>
      {children}
    </button>
  );
}
