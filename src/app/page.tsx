'use client';

import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Award,
  Star,
  ShieldCheck,
  MapPin,
  MessageCircle,
  Phone,
  ChevronDown,
  Heart,
  Home,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Calendar
} from 'lucide-react';

/* Iconos SVG inline para compatibilidad */
function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconFootprints({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16c0-2 1.5-3 3-3s3 1 3 3-1.5 3-3 3-3-1-3-3z" />
      <path d="M14 16c0-2 1.5-3 3-3s3 1 3 3-1.5 3-3 3-3-1-3-3z" />
      <path d="M8 10c0-2 1.5-3 3-3s3 1 3 3-1.5 3-3 3-3-1-3-3z" />
    </svg>
  );
}

function IconDoorOpen({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
      <path d="M3 21h10V3H3v18z" />
      <path d="M16 11l2 2-2 2" />
      <path d="M7 12h.01" />
    </svg>
  );
}

/* =========================================
   NAVBAR
========================================= */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-[family-name:var(--font-playfair)] font-bold text-[#1B3A2D]">
            PetCare
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#3D3D3D] hover:text-[#1B3A2D] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`ml-4 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 border ${
              scrolled
                ? 'bg-[#C9A84C] text-white border-[#C9A84C] hover:bg-[#b4953f]'
                : 'bg-transparent text-[#C9A84C] border-[#C9A84C] hover:bg-[#C9A84C] hover:text-white'
            }`}
          >
            Agendar ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#1B3A2D]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#1B3A2D]/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-[#3D3D3D] hover:text-[#1B3A2D]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="inline-block mt-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest bg-[#C9A84C] text-white"
          >
            Agendar ahora
          </a>
        </div>
      )}
    </nav>
  );
}

/* =========================================
   HERO
========================================= */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1B3A2D]">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border-2 border-[#C9A84C]/15 pointer-events-none" />
      <div className="absolute -bottom-24 -left-12 w-[300px] h-[300px] rounded-full border-2 border-[#C9A84C]/8 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-6">
          Cuidado premium para quienes lo son todo
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.15] text-[#F7F2E9] max-w-3xl mx-auto mb-6">
          Porque para ti no son una mascota.
          <br />
          <span className="text-[#C9A84C]">Son familia.</span>
        </h1>

        <p className="text-base text-[#F7F2E9]/70 max-w-xl mx-auto mb-10">
          Ofrecemos un nivel de cuidado que tu compañero merece: personalizado, experto
          y con la misma dedicación que tú le darías.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="px-8 py-4 rounded-full bg-[#C9A84C] text-white text-sm font-medium uppercase tracking-widest hover:bg-[#b4953f] transition-all duration-300 shadow-lg"
          >
            Reservar mi lugar
          </a>
          <a
            href="#proceso"
            className="px-8 py-4 rounded-full border border-[#F7F2E9]/40 text-[#F7F2E9] text-sm font-medium uppercase tracking-widest hover:bg-[#F7F2E9]/10 transition-all duration-300 flex items-center gap-2"
          >
            Ver cómo trabajamos
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   TRUST BAR
========================================= */
function TrustBar() {
  const items = [
    { icon: <Award size={20} />, text: '+5 años de experiencia' },
    { icon: <Star size={20} />, text: '4.9/5 — 200+ familias satisfechas' },
    { icon: <ShieldCheck size={20} />, text: 'Seguro y asistencia 24/7' },
    { icon: <Users size={20} />, text: 'Atención personalizada 1 a 1' },
    { icon: <MessageCircle size={20} />, text: 'Actualizaciones en tiempo real' },
  ];

  return (
    <section className="bg-white border-b border-[#1B3A2D]/10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-[#3D3D3D]">
              <span className="text-[#C9A84C]">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SOBRE NOSOTROS
========================================= */
function SobreNosotros() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-[#F7F2E9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
              alt="Cuidador con mascota"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-[#1B3A2D]/10" />
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
              Nuestra Historia
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.2rem)] text-[#1B3A2D] mb-4 leading-snug">
              Nació de un amor genuino. Creció por la confianza de familias como la tuya.
            </h2>
            <div className="space-y-4 text-[15px] text-[#3D3D3D] leading-relaxed">
              <p>
                Todo empezó con una simple pregunta:{" "}
                <em>
                  ¿por qué dejar a tu mascota en manos de alguien con quien no te sientes
                  completamente seguro?
                </em>
              </p>
              <p>
                PetCare nació para cambiar eso. Creamos un espacio donde cada mascota recibe
                atención individual, cuidado experto y todo el amor que merece — exactamente
                como tú lo harías.
              </p>
              <p>
                No somos una guardería masiva. Somos un equipo pequeño, apasionado y altamente
                preparado, comprometido con un solo estándar: el más alto posible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   SERVICIOS
========================================= */
function Servicios() {
  const services = [
    {
      icon: <Home size={28} />,
      title: 'Alojamiento Premium',
      desc: 'Tu mascota duerme en un ambiente cálido, seguro y cuidado — no en una jaula. Supervisión nocturna incluida.',
      featured: false,
    },
    {
      icon: <IconFootprints size={28} />,
      title: 'Paseos Personalizados',
      desc: 'Rutas adaptadas al ritmo y energía de tu perro. Siempre 1 a 1, nunca en manada.',
      featured: true,
    },
    {
      icon: <IconDoorOpen size={28} />,
      title: 'Visitas a Domicilio',
      desc: 'Un cuidador certificado va a tu casa para que tu mascota no salga de su ambiente.',
      featured: false,
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Lo que ofrecemos
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.2rem)] text-[#1B3A2D] mb-4">
            Cada servicio, diseñado para el bienestar real de tu compañero.
          </h2>
          <p className="text-[15px] text-[#8A8A8A] max-w-xl mx-auto">
            No ofrecemos paquetes estándar. Cada experiencia se adapta a la personalidad,
            necesidades y rutina específica de tu mascota.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                s.featured
                  ? 'border-[#C9A84C] bg-[#F7F2E9]'
                  : 'border-[#1B3A2D]/8 bg-white'
              }`}
            >
              {s.featured && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 text-[10px] font-medium uppercase tracking-wider text-[#1B3A2D] bg-[#C9A84C]/15 px-3 py-1 rounded-full border border-[#C9A84C]/30">
                  <Star size={12} className="text-[#C9A84C]" /> Más solicitado
                </span>
              )}
              <div className="text-[#C9A84C] mb-5">{s.icon}</div>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#1B3A2D] mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-[#3D3D3D] leading-relaxed mb-6">{s.desc}</p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#C9A84C] hover:text-[#b4953f] transition-colors"
              >
                Consultar <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   PROCESO
========================================= */
function Proceso() {
  const steps = [
    {
      num: '1',
      title: 'Reservá tu consulta gratuita',
      desc: 'Una llamada o chat de 15 minutos para entender a tu mascota, sus rutinas y lo que necesita.',
    },
    {
      num: '2',
      title: 'Conocemos a tu compañero',
      desc: 'Antes del primer servicio, organizamos un encuentro para que la transición sea cero estrés.',
    },
    {
      num: '3',
      title: 'Cuidado con reporte en tiempo real',
      desc: 'Recibirás fotos y actualizaciones durante el servicio. Sabés exactamente cómo está en todo momento.',
    },
    {
      num: '4',
      title: 'Regresa — y nosotros siempre estamos',
      desc: 'Una vez que trabajamos juntos, tenés un cuidador de confianza para siempre.',
    },
  ];

  return (
    <section id="proceso" className="py-20 md:py-28 bg-[#1B3A2D]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Cómo funciona
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.2rem)] text-[#F7F2E9] mb-4">
            Empezar es simple. La calidad, no tanto de encontrar.
          </h2>
          <p className="text-[15px] text-[#F7F2E9]/70 max-w-xl mx-auto">
            En cuatro pasos, tu mascota está en las mejores manos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F7F2E9] rounded-xl p-6 flex flex-col"
            >
              <div className="w-10 h-10 rounded-full bg-[#1B3A2D] text-[#F7F2E9] flex items-center justify-center font-[family-name:var(--font-playfair)] text-lg mb-4">
                {step.num}
              </div>
              <h4 className="text-[15px] font-medium text-[#1B3A2D] mb-2">
                {step.title}
              </h4>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   TESTIMONIOS
========================================= */
function Testimonios() {
  const testimonials = [
    {
      text: 'La primera vez que lo dejé me fui llorando. Cuando llegué, estaba tan feliz que no quería venirse. Ahora sé que está en mejores manos que en ningún otro lado.',
      name: 'Camila R.',
      pet: 'Luka (Border Collie, 2 años)',
    },
    {
      text: 'Nunca había recibido fotos y actualizaciones de mi perro mientras viajaba. Me devolvieron la tranquilidad que buscaba.',
      name: 'Andrés M.',
      pet: 'Bruno (Labrador, 4 años)',
    },
    {
      text: 'Desde que encontré a PetCare, dejar a mi gato dejó de ser un drama. Se queda en casa y viene el cuidador. Perfecto.',
      name: 'Luciana G.',
      pet: 'Milo (Gato Siamés, 6 años)',
    },
  ];

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#F7F2E9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Testimonios
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.2rem)] text-[#1B3A2D] mb-4">
            Lo que dicen las familias que ya confiaron en nosotros.
          </h2>
          <p className="text-[15px] text-[#8A8A8A] max-w-xl mx-auto">
            No te pedimos que confíes en nuestra palabra. Te pedimos que escuches a quienes ya lo hicieron.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border-l-[3px] border-[#C97A5A]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#C9A84C] fill-[#C9A84C]" />
                ))}
              </div>
              <p className="text-[15px] italic text-[#3D3D3D] leading-relaxed mb-6">
                "{t.text}"
              </p>
              <p className="text-sm text-[#8A8A8A]">
                — <strong className="text-[#3D3D3D]">{t.name}</strong>, {t.pet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   STATS
========================================= */
function Stats() {
  const stats = [
    { value: '+200', label: 'mascotas felices' },
    { value: '4.9', label: 'sobre 5 estrellas' },
    { value: '100%', label: 'regresan' },
    { value: '24/7', label: 'disponibles' },
  ];

  return (
    <section className="py-16 bg-white border-y border-[#1B3A2D]/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, idx) => (
            <div key={idx}>
              <p className="font-[family-name:var(--font-playfair)] text-[clamp(2rem,4vw,3rem)] text-[#C9A84C] leading-none mb-2">
                {s.value}
              </p>
              <p className="text-sm text-[#8A8A8A]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   GALERÍA
========================================= */
function Galeria() {
  const images = [
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80',
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
    'https://images.unsplash.com/photo-1583511655857-d19b8a455d7c?w=600&q=80',
    'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600&q=80',
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&q=80',
    'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80',
  ];

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#F7F2E9]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Galería
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.2rem)] text-[#1B3A2D] mb-4">
            Momentos reales, cuidados reales.
          </h2>
          <p className="text-[15px] text-[#8A8A8A] max-w-xl mx-auto">
            Las fotos más poderosas son las que muestran lo que vivimos cada día.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={src}
                alt={`Galería ${idx + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#1B3A2D]/0 group-hover:bg-[#1B3A2D]/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C9A84C] hover:text-[#b4953f] transition-colors"
          >
            <IconInstagram size={18} /> Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FAQ
========================================= */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Qué pasa si mi mascota tiene una emergencia?',
      a: 'Contamos con un protocolo de emergencias claro: veterinario de guardia disponible 24/7, contacto inmediato con el dueño y traslado al centro veterinario más cercano si es necesario.',
    },
    {
      q: '¿Cuántas mascotas cuidan al mismo tiempo?',
      a: 'Trabajamos con un máximo de 5 mascotas por turno en alojamiento, y los paseos son siempre 1 a 1. Así garantizamos la atención personalizada que prometemos.',
    },
    {
      q: '¿Cómo sé cómo está mi mascota durante el servicio?',
      a: 'Recibirás fotos y actualizaciones vía WhatsApp cada pocas horas. Durante el alojamiento, enviamos un reporte nocturno para que descanses tranquilo.',
    },
    {
      q: '¿Qué necesito llevar para el alojamiento?',
      a: 'Solo la comida habitual de tu mascota y algún objeto familiar (manta o juguete) para que se sienta en casa. Nosotros proveemos todo lo demás.',
    },
    {
      q: '¿Cómo reservo y cuáles son los precios?',
      a: 'Podés reservar a través del formulario de contacto o directo por WhatsApp. Te enviamos una cotización personalizada según el servicio y la duración.',
    },
    {
      q: '¿Trabajan con mascotas que tienen comportamientos especiales?',
      a: 'Sí. Nuestro equipo está capacitado para manejar diversas necesidades: ansiedad por separación, medicación, dietas especiales y más. Lo conversamos en la consulta inicial.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C9A84C] mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.2rem)] text-[#1B3A2D]">
            Todo lo que necesitás saber.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#1B3A2D]/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F7F2E9]/50 transition-colors"
              >
                <span className="text-[15px] font-medium text-[#1B3A2D] pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#C9A84C] shrink-0 transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-5 pb-5 text-sm text-[#3D3D3D] leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================
   CTA FINAL
========================================= */
function CTAFinal() {
  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#1B3A2D]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(1.6rem,3vw,2.2rem)] text-[#F7F2E9] mb-4">
          "El primer paso es el más fácil. Lo que sigue, nos encargamos nosotros."
        </h2>
        <p className="text-[15px] text-[#F7F2E9]/70 mb-8 max-w-xl mx-auto">
          Reserva una consulta gratuita de 15 minutos. Sin compromiso, sin presión.
          Solo una conversación para saber si somos el lugar correcto para tu compañero.
        </p>

        <a
          href="https://wa.me/5490000000000?text=Hola,%20quiero%20consultar%20sobre%20sus%20servicios%20de%20cuidado%20🐾"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C9A84C] text-white text-sm font-medium uppercase tracking-widest hover:bg-[#b4953f] transition-all duration-300 shadow-lg"
        >
          <ArrowRight size={16} /> Reservar mi consulta gratuita
        </a>

        <div className="mt-8 p-5 rounded-xl border border-[#C9A84C]/30 bg-[#C9A84C]/10 max-w-lg mx-auto">
          <p className="text-sm text-[#F7F2E9]/80">
            💡{" "}
            <strong className="text-[#F7F2E9]">Disponibilidad limitada para nuevas familias este mes.</strong>{" "}
            Asegurá el tuyo.
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================
   FOOTER
========================================= */
function Footer() {
  return (
    <footer className="bg-white border-t border-[#1B3A2D]/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#1B3A2D]">
              PetCare
            </span>
            <p className="mt-3 text-sm text-[#8A8A8A]">
              Cuidado premium. Confianza real.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-[#C9A84C] transition-colors">
                <IconInstagram size={18} />
              </a>
              <a href="https://wa.me/5490000000000" target="_blank" rel="noopener noreferrer" className="text-[#8A8A8A] hover:text-[#C9A84C] transition-colors">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8A8A8A] mb-4">Links rápidos</p>
            <ul className="space-y-2 text-sm text-[#3D3D3D]">
              <li><a href="#servicios" className="hover:text-[#C9A84C] transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-[#C9A84C] transition-colors">Nosotros</a></li>
              <li><a href="#galeria" className="hover:text-[#C9A84C] transition-colors">Galería</a></li>
              <li><a href="#contacto" className="hover:text-[#C9A84C] transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#8A8A8A] mb-4">Contacto</p>
            <ul className="space-y-2 text-sm text-[#3D3D3D]">
              <li className="flex items-center gap-2"><Phone size={14} className="text-[#C9A84C]" /> +54 9 000 000-0000</li>
              <li className="flex items-center gap-2"><MessageCircle size={14} className="text-[#C9A84C]" /> WhatsApp</li>
              <li className="flex items-center gap-2"><Clock size={14} className="text-[#C9A84C]" /> Lun – Dom: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1B3A2D]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8A8A8A]">
            © {new Date().getFullYear()} PetCare. Todos los derechos reservados.
          </p>
          <a href="#" className="text-xs text-[#8A8A8A] hover:text-[#3D3D3D] transition-colors">
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}

/* =========================================
   WHATSAPP FLOTANTE
========================================= */
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5490000000000?text=Hola,%20quiero%20consultar%20sobre%20sus%20servicios%20de%20cuidado%20🐾"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
    </a>
  );
}

/* =========================================
   PÁGINA PRINCIPAL
========================================= */
export default function PetCareWebsite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <SobreNosotros />
        <Servicios />
        <Proceso />
        <Testimonios />
        <Stats />
        <Galeria />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
