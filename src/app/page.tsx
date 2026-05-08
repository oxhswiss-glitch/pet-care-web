'use client';

import React from 'react';
import FlowArt, { FlowSection } from '../components/ui/story-scroll';
import { PawPrint, Heart, Calendar, ShieldCheck, Star, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

export default function PetCareWebsite() {
  return (
    <FlowArt aria-label="Pet Care Luxury Experience">
      {/* SECCIÓN 01: HERO - The First Impression */}
      <FlowSection
        aria-label="Inicio"
        style={{ backgroundColor: '#F9FAFB', color: '#1E1B4B' }}
        className="flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center gap-2">
            <Sparkles size={12} /> Excellence in Pet Care
          </p>
          <hr className="w-12 border-t-2 border-indigo-500 mb-8" />

          <div className="relative">
            <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-serif italic leading-[0.8] uppercase tracking-tighter">
              Pure
              <br />
              <span className="text-indigo-600">Devotion</span>
            </h1>
            {/* Glassmorphism decorative element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>

          <hr className="my-[4vw] border-none border-t border-indigo-200 w-full max-w-md" />

          <p className="mt-auto max-w-[60ch] text-[clamp(1.1rem,2vw,1.5rem)] font-light leading-relaxed text-slate-600 px-4">
            Elevando el estándar del cuidado animal. Un santuario de bienestar donde la
            sofisticación se encuentra con la ternura más absoluta.
          </p>

          <button className="mt-12 px-10 py-4 bg-indigo-900 text-white font-medium rounded-full hover:bg-indigo-800 transition-all duration-500 hover:scale-105 shadow-xl shadow-indigo-200 flex items-center gap-3 group">
            Explore the Experience
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </FlowSection>

      {/* SECCIÓN 02: SERVICES - The Bespoke Offer */}
      <FlowSection
        aria-label="Nuestros Servicios"
        style={{ backgroundColor: '#1E1B4B', color: '#F9FAFB' }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="flex justify-between items-start">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-300 flex items-center gap-2">
              <Heart size={14} /> Curated Services
            </p>
            <span className="text-xs font-serif italic opacity-50">Est. 2024</span>
          </div>

          <hr className="my-[2vw] border-none border-t border-white/10" />

          <div className="relative">
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-serif italic leading-[0.8] uppercase tracking-tighter">
              Bespoke
              <br />
              <span className="text-indigo-400">Care</span>
            </h2>
          </div>

          <hr className="my-[2vw] border-none border-t border-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="text-indigo-400" />,
                title: "Exclusive Boarding",
                desc: "Suites privadas con control climático y atención 24/7 para una estancia sin estrés."
              },
              {
                icon: <PawPrint className="text-indigo-400" />,
                title: "Elite Walking",
                desc: "Rutas seleccionadas y estimulación cognitiva para mantener la vitalidad de su mascota."
              },
              {
                icon: <ShieldCheck className="text-indigo-400" />,
                title: "Wellness Clinic",
                desc: "Monitoreo preventivo la vanguardia médica para asegurar una vida larga y saludable."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-all duration-500 group">
                <div className="mb-6 p-3 bg-white/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <p className="mb-3 text-xl font-serif italic">{item.title}</p>
                <p className="text-sm leading-relaxed opacity-60 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-12 flex justify-end">
            <p className="max-w-[40ch] text-right text-[clamp(1rem,1.5vw,1.2rem)] font-light italic opacity-70">
              Diseñado para quienes no aceptan menos que la perfección para sus compañeros.
            </p>
          </div>
        </div>
      </FlowSection>

      {/* SECCIÓN 03: TRUST - The Philosophy */}
      <FlowSection
        aria-label="Cómo funciona"
        style={{ backgroundColor: '#FFFFFF', color: '#1E1B4B' }}
      >
        <div className="flex flex-col h-full justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-500 flex items-center gap-2">
            <Star size={14} /> Our Philosophy
          </p>
          <hr className="my-[2vw] border-none border-t border-indigo-100" />

          <div className="relative">
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-serif italic leading-[0.8] uppercase tracking-tighter">
              Absolute
              <br />
              <span className="text-indigo-600">Trust</span>
            </h2>
          </div>

          <hr className="my-[2vw] border-none border-t border-indigo-100" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Curation", desc: "Análisis detallado de la personalidad y necesidades de su mascota." },
              { step: "02", title: "Matching", desc: "Asignación de un cuidador experto especializado en su raza y temperamento." },
              { step: "03", title: "Harmony", desc: "Integración total en nuestra rutina de bienestar y lujo." }
            ].map((step, idx) => (
              <div key={idx} className="relative group">
                <span className="text-6xl font-serif italic opacity-10 absolute -top-8 -left-4 group-hover:opacity-20 transition-opacity">
                  {step.step}
                </span>
                <p className="relative z-10 mb-2 text-lg font-bold uppercase tracking-wider">{step.title}</p>
                <p className="text-sm leading-relaxed opacity-60 font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-auto flex items-center gap-6 p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} alt="client" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 italic opacity-80">
              <MessageSquare size={20} className="text-indigo-500" />
              <p>"Un estándar de cuidado que no conocíamos. Mi mascota nunca estuvo en mejores manos." - Elena R.</p>
            </div>
          </div>
        </div>
      </FlowSection>

      {/* SECCIÓN 04: CTA - The Invitation */}
      <FlowSection
        aria-label="Contacto"
        style={{ backgroundColor: '#F9FAFB', color: '#1E1B4B' }}
        className="flex items-center justify-center"
      >
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4 flex items-center gap-2">
            <PawPrint size={14} /> The Invitation
          </p>
          <hr className="my-[2vw] border-none border-t border-indigo-200" />

          <div className="relative">
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-serif italic leading-[0.8] uppercase tracking-tighter">
              Join the
              <br />
              <span className="text-indigo-600">Elite</span>
            </h2>
          </div>

          <hr className="my-[2vw] border-none border-t border-indigo-200" />

          <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2vw,1.5rem)] font-light leading-relaxed text-slate-600 px-4">
            Reserve un espacio exclusivo para su compañero.
            Cupos limitados para garantizar la máxima calidad de servicio.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
             <button className="px-12 py-5 bg-indigo-900 text-white font-medium rounded-full hover:bg-indigo-800 transition-all duration-500 hover:scale-105 shadow-2xl shadow-indigo-200 uppercase tracking-widest text-xs">
               Agendar Consulta VIP
             </button>
             <button className="px-12 py-5 bg-white text-indigo-900 border border-indigo-200 font-medium rounded-full hover:bg-indigo-50 transition-all duration-500 uppercase tracking-widest text-xs">
               Ver Catálogo
             </button>
          </div>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
