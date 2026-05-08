'use client';

import React from 'react';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { PawPrint, Heart, Calendar, ShieldCheck, Star, MessageSquare } from 'lucide-react';

export default function PetCareWebsite() {
  return (
    <FlowArt aria-label="Pet Care Services Presentation">
      {/* SECCIÓN 01: HERO */}
      <FlowSection
        aria-label="Inicio"
        style={{ backgroundColor: '#FFEFD5', color: '#5D4037' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
          <PawPrint size={14} /> 01 — Cuidado Premium
        </p>
        <hr className="my-[2vw] border-none border-t border-stone-400" />
        <div className="relative">
          <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Amor
            <br />
            Y
            <br />
            Cuidado
          </h1>
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-50"></div>
        </div>
        <hr className="my-[2vw] border-none border-t border-stone-400" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Damos a tu mascota la atención que merece. Paseos, guardería y cuidado especializado
          con profesionales certificados que aman lo que hacen.
        </p>
      </FlowSection>

      {/* SECCIÓN 02: SERVICIOS */}
      <FlowSection
        aria-label="Nuestros Servicios"
        style={{ backgroundColor: '#5D4037', color: '#FFEFD5' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
          <Heart size={14} /> 02 — Lo que ofrecemos
        </p>
        <hr className="my-[2vw] border-none border-t border-white/30" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Súper
            <br />
            Mascotas
            <br />
            Felices
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/30" />

        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[250px] flex-1 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <Calendar className="mb-4 text-orange-300" size={32} />
            <p className="mb-2 text-lg font-bold uppercase tracking-wider">Guardería</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-80">
              Un espacio seguro y divertido donde tu mascota puede socializar y jugar mientras tú trabajas.
            </p>
          </div>
          <div className="min-w-[250px] flex-1 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <PawPrint className="mb-4 text-orange-300" size={32} />
            <p className="mb-2 text-lg font-bold uppercase tracking-wider">Paseos Activos</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-80">
              Rutas personalizadas para asegurar que tu perro queme energía y regrese relajado a casa.
            </p>
          </div>
          <div className="min-w-[250px] flex-1 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
            <ShieldCheck className="mb-4 text-orange-300" size={32} />
            <p className="mb-2 text-lg font-bold uppercase tracking-wider">Cuidado Médico</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-80">
              Administración de medicamentos y monitoreo de salud constante para mascotas con necesidades especiales.
            </p>
          </div>
        </div>

        <hr className="my-[2vw] border-none border-t border-white/30" />
        <p className="mt-auto ml-auto max-w-[50ch] text-right text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Cada mascota es única, por eso nuestros planes se adaptan a su personalidad y energía.
        </p>
      </FlowSection>

      {/* SECCIÓN 03: TESTIMONIOS / PROCESO */}
      <FlowSection
        aria-label="Cómo funciona"
        style={{ backgroundColor: '#FFFFFF', color: '#5D4037' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
          <Star size={14} /> 03 — Confianza Total
        </p>
        <hr className="my-[2vw] border-none border-t border-stone-200" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            Cero
            <br />
            Estrés
            <br />
            Solo
            <br />
            Amor
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-stone-200" />

        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Registro</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Cuéntanos sobre tu mascota: edad, raza, gustos y cualquier condición médica.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Encuentro</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Agendamos una cita de presentación para que tu mascota y nosotros nos conozcamos.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Diversión</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              ¡Comienza la aventura! Recibirás fotos y videos constantes de su día.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-stone-200" />
        <div className="flex gap-4 italic opacity-70">
          <MessageSquare size={20} />
          <p>"La mejor decisión para mi perro Max. Nunca estuvo tan feliz y cuidado." - Ana G.</p>
        </div>
      </FlowSection>

      {/* SECCIÓN 04: CTA FINAL */}
      <FlowSection
        aria-label="Contacto"
        style={{ backgroundColor: '#F4A460', color: '#fff' }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2">
          <PawPrint size={14} /> 04 — Únete a la familia
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div>
          <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
            ¿Listos
            <br />
            Para
            <br />
            Jugar?
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Reserva tu primera cita hoy mismo y regálale a tu mascota el día más feliz de su vida.
        </p>
        <div className="mt-8">
           <button className="px-8 py-4 bg-white text-[#F4A460] font-bold uppercase rounded-full hover:bg-stone-100 transition-colors">
             Agendar Cita Gratis
           </button>
        </div>
      </FlowSection>
    </FlowArt>
  );
}
