import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, Database, ArrowRight, ShieldCheck } from 'lucide-react';

export const WappifyArchitectureDiagram = () => {
  return (
    <div className="w-full rounded-2xl bg-slate-950/90 border border-emerald-500/30 p-5 shadow-2xl relative overflow-hidden my-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-4">
        <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" /> Wappify Async Engine Flow
        </span>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          Sub-20ms Webhook Outbox Queue
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative">
        {/* Node 1: Webhook Ingestion */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 relative z-10"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <Zap className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">1. Webhook Ack</div>
            <div className="text-[11px] text-emerald-400 font-mono font-semibold">&lt;20ms Postgres Queue</div>
          </div>
        </motion.div>

        {/* Node 2: Gemini 1.5 Pro AI */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 relative z-10"
        >
          <div className="w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">2. Gemini 1.5 Pro</div>
            <div className="text-[11px] text-purple-400 font-mono">10-Turn Bot Memory</div>
          </div>
        </motion.div>

        {/* Node 3: DB & Razorpay */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-3 relative z-10"
        >
          <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">3. Merchant Store</div>
            <div className="text-[11px] text-cyan-400 font-mono">Razorpay & Catalog CMS</div>
          </div>
        </motion.div>
      </div>

      {/* Pulsing Signal Flow Line */}
      <div className="hidden md:block absolute top-[62%] left-[28%] right-[28%] h-[2px] bg-slate-800 pointer-events-none">
        <motion.div
          animate={{ x: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          className="w-12 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/50"
        />
      </div>
    </div>
  );
};
