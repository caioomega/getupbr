"use client"

import type React from "react"

import { useState, useRef, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  MousePointer,
  Palette,
  BarChart3,
  MessageSquare,
  Users,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  Target,
  Award,
  CheckCircle,
  ArrowUpRight,
  Globe,
  Mail,
  Phone,
  MapPin,
  Instagram,
  ChevronDown,
  Menu,
  Play,
  Pause,
  X,
  Cpu,
} from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [contactMethod, setContactMethod] = useState("whatsapp")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ["services", "about", "portfolio", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "5519994871568"
    const email = "getupmarketingbr@gmail.com"

    const message = `*Contato via site GETUP*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Assunto:* ${formData.subject}

*Mensagem:*
${formData.message}`

    if (contactMethod === "whatsapp") {
      window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`, "_blank")
    } else {
      window.open(
        `mailto:${email}?subject=${encodeURIComponent(`Contato via site: ${formData.subject}`)}&body=${encodeURIComponent(message)}`,
        "_blank",
      )
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // Gera partículas de forma consistente no cliente
  const heroParticles = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        width: Math.random() * 8 + 4,
        height: Math.random() * 8 + 4,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    [],
  )

  const ctaParticles = useMemo(
    () =>
      Array.from({ length: 15 }, () => ({
        width: Math.random() * 8 + 3,
        height: Math.random() * 8 + 3,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    [],
  )

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header - Mobile Optimized */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-bold text-[#7c4dff] relative group">
              GETUP
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b4ff4d] group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              href="#services"
              className={`text-sm font-medium transition-colors hover:text-[#7c4dff] flex items-center gap-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7c4dff] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${activeSection === "services" ? "text-[#7c4dff] after:scale-x-100" : "text-muted-foreground"}`}
            >
              Serviços <ChevronDown className="h-3 w-3 opacity-50" />
            </Link>
            <Link
              href="#about"
              className={`text-sm font-medium transition-colors hover:text-[#7c4dff] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7c4dff] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${activeSection === "about" ? "text-[#7c4dff] after:scale-x-100" : "text-muted-foreground"}`}
            >
              Sobre
            </Link>
            <Link
              href="#portfolio"
              className={`text-sm font-medium transition-colors hover:text-[#7c4dff] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7c4dff] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${activeSection === "portfolio" ? "text-[#7c4dff] after:scale-x-100" : "text-muted-foreground"}`}
            >
              Portfólio
            </Link>
            <Link
              href="#contact"
              className={`text-sm font-medium transition-colors hover:text-[#7c4dff] relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7c4dff] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100 ${activeSection === "contact" ? "text-[#7c4dff] after:scale-x-100" : "text-muted-foreground"}`}
            >
              Contato
            </Link>
          </nav>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="hidden md:flex bg-[#7c4dff] hover:bg-[#6a3afc] text-white relative overflow-hidden text-sm px-4 py-2"
          >
            <span className="relative z-10 flex items-center">
              Fale Conosco{" "}
              <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden h-9 w-9 bg-transparent" onClick={toggleMobileMenu}>
            <Menu className="h-4 w-4" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
          <div className="fixed inset-x-0 top-0 z-50 min-h-screen w-full border-r bg-background p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[#7c4dff]">GETUP</span>
              </div>
              <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              <Link
                href="#services"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Serviços
              </Link>
              <Link
                href="#about"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Sobre
              </Link>
              <Link
                href="#portfolio"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Portfólio
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Contato
              </Link>
              <Button className="mt-4 w-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Fale Conosco{" "}
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
              </Button>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8d7e9] via-[#f8d7e9] to-[#e9d7f8] py-16 sm:py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-[#7c4dff]/10 blur-3xl animate-pulse"></div>
          <div
            className="absolute -top-10 -right-10 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-[#b4ff4d]/10 blur-3xl animate-pulse"
            style={{ animationDuration: "8s", animationDelay: "1s" }}
          ></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {heroParticles.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/30 animate-float"
                style={{
                  width: `${p.width}px`,
                  height: `${p.height}px`,
                  top: `${p.top}%`,
                  left: `${p.left}%`,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                }}
              ></div>
            ))}
          </div>

          <div className="container relative grid gap-8 md:grid-cols-2 items-center px-4 sm:px-6">
            <div className="space-y-4 sm:space-y-6 animate-fade-in-up text-center md:text-left">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white/50 px-3 py-1 text-xs sm:text-sm text-[#7c4dff] backdrop-blur-sm animate-pulse-slow">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                <span>Transforme sua presença digital</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-[#7c4dff] leading-tight">
                Eleve sua marca com a{" "}
                <span className="relative inline-block">
                  GETUP
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-[#b4ff4d] animate-width-expand"></span>
                </span>
              </h1>
              <p className="max-w-[600px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Especialistas em Gestão de Tráfego, Design e Marketing Digital para impulsionar seu negócio no mundo
                online.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white relative overflow-hidden shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300 text-sm sm:text-base px-6 py-3"
                >
                  <span className="relative z-10 flex items-center">
                    Conheça nossos serviços{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
                </Button>
                <Link href="/orcamento">
                  <Button
                    variant="outline"
                    className="border-[#7c4dff] text-[#7c4dff] hover:bg-[#7c4dff]/10 transition-colors shadow-lg hover:shadow-[#7c4dff]/20 text-sm sm:text-base px-6 py-3 w-full sm:w-auto bg-transparent"
                  >
                    Solicitar orçamento
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 pt-4 justify-center md:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-6 w-6 sm:h-8 sm:w-8 rounded-full border-2 border-white bg-[#7c4dff]/20 flex items-center justify-center text-xs font-medium text-[#7c4dff] transition-transform hover:scale-110 hover:z-10"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">+500</span> clientes satisfeitos
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-xs sm:max-w-md animate-float-slow">
              <div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d]/30 blur-xl animate-pulse"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-[#7c4dff]/30 blur-xl animate-pulse"
                style={{ animationDuration: "6s", animationDelay: "2s" }}
              ></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
                <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] sm:rounded-[calc(1.5rem-4px)] bg-white">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/getup-logo-color.png"
                      alt="GETUP Marketing Digital"
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-700 p-4"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center animate-bounce-slow">
                <Zap className="h-6 w-6 sm:h-10 sm:w-10 text-[#7c4dff]" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Mobile Optimized */}
        <section className="py-8 sm:py-12 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
          <div className="container relative px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-12">
              {[
                {
                  icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-[#7c4dff]" />,
                  value: "+200%",
                  label: "Aumento de tráfego",
                },
                {
                  icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-[#7c4dff]" />,
                  value: "+150%",
                  label: "Conversão de leads",
                },
                {
                  icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#7c4dff]" />,
                  value: "+50",
                  label: "Prêmios conquistados",
                },
                {
                  icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-[#7c4dff]" />,
                  value: "+500",
                  label: "Clientes satisfeitos",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#7c4dff]/10 hover:bg-[#7c4dff]/20 transition-colors">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#7c4dff]">{stat.value}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section - Mobile Optimized */}
        <section id="services" className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl"></div>

          <div className="container relative px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
              <div
                className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4 shadow-sm animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                <span>Nossos Serviços</span>
              </div>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#7c4dff] pb-2 leading-tight">
                  Soluções completas para sua presença digital
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-[#b4ff4d] rounded-full animate-pulse-slow"></div>
              </div>

              <p className="mt-6 text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Combinamos estratégia, criatividade e tecnologia para impulsionar seu negócio no mundo digital com
                soluções inovadoras e resultados mensuráveis.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <MousePointer className="h-5 w-5 sm:h-7 sm:w-7" />,
                  title: "Gestão de Tráfego",
                  description:
                    "Estratégias personalizadas para atrair visitantes qualificados e converter em clientes.",
                  link: "/servicos/gestao-de-trafego",
                },
                {
                  icon: <Palette className="h-5 w-5 sm:h-7 sm:w-7" />,
                  title: "Design Criativo",
                  description: "Criação de identidades visuais impactantes e materiais que comunicam sua essência.",
                  link: "/servicos/design-criativo",
                },
                {
                  icon: <BarChart3 className="h-5 w-5 sm:h-7 sm:w-7" />,
                  title: "Marketing Digital",
                  description: "Estratégias integradas para aumentar sua visibilidade e engajamento online.",
                },
                {
                  icon: <MessageSquare className="h-5 w-5 sm:h-7 sm:w-7" />,
                  title: "Gestão de Redes Sociais",
                  description: "Criação de conteúdo relevante e gerenciamento completo das suas plataformas sociais.",
                },
                {
                  icon: <Users className="h-5 w-5 sm:h-7 sm:w-7" />,
                  title: "Consultoria Estratégica",
                  description: "Análise e planejamento para otimizar seus resultados e superar a concorrência.",
                },
                {
                  icon: <Globe className="h-5 w-5 sm:h-7 sm:w-7" />,
                  title: "Produção de Conteúdo",
                  description: "Criação de conteúdo relevante e atrativo para diferentes plataformas e objetivos.",
                },
                {
                  icon: <Cpu className="h-5 w-5 sm:h-7 sm:w-7" />,
                  title: "Desenvolvedores para Empresas",
                  description:
                    "Equipe de desenvolvedores qualificados para criar soluções digitais sob medida para o seu negócio.",
                },
                {
                  icon: <Target className="h-5 w-5 sm:h-7 sm:w-7" />,
                  title: "Tráfego Pago",
                  description:
                    "Estratégias de anúncios pagos em plataformas como Google, Meta e LinkedIn para atrair clientes qualificados.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                  <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-lg sm:text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                  {service.link && (
                    <Link
                      href={service.link}
                      className="mt-auto flex items-center text-[#7c4dff] font-medium text-sm sm:text-base"
                    >
                      <span>Saiba mais</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  )}
                </div>
              ))}

              {/* Destaque - Serviço em Destaque */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-[#7c4dff] bg-gradient-to-br from-[#7c4dff]/5 to-white p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] lg:col-span-3">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#b4ff4d]/10 group-hover:bg-[#b4ff4d]/20 transition-all duration-500"></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="mb-6 md:mb-0 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-[#7c4dff] text-white group-hover:scale-110 transition-all duration-500 animate-pulse-slow">
                    <Sparkles className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-[#7c4dff] mb-3 shadow-sm">
                      <Zap className="mr-1 h-3.5 w-3.5" />
                      <span>Pacote Completo</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-[#7c4dff] transition-colors mb-3">
                      Solução Digital Integrada
                    </h3>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                      Combine todos os nossos serviços em uma estratégia digital completa para maximizar seus
                      resultados. Desde o desenvolvimento até o tráfego pago, cuidamos de tudo para você.
                    </p>
                    <Link href="/orcamento">
                      <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300">
                        Solicitar proposta personalizada{" "}
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Dots */}
            <div className="flex justify-center mt-16 gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-[#7c4dff]/30 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Mobile Optimized */}
        <section
          id="about"
          className="py-16 sm:py-20 bg-gradient-to-br from-[#7c4dff]/5 to-[#b4ff4d]/5 relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
          </div>

          <div className="container relative px-4 sm:px-6">
            <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
              <div className="relative order-2 md:order-1">
                <div className="relative mx-auto w-full max-w-xs sm:max-w-md">
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d]/30 blur-xl animate-pulse-slow"></div>
                  <div
                    className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-[#7c4dff]/30 blur-xl animate-pulse-slow"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl transform hover:rotate-3 transition-all duration-700">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] sm:rounded-[calc(1.5rem-4px)] bg-white">
                      <div className="relative h-full w-full bg-gradient-to-br from-[#7c4dff]/80 to-[#b4ff4d]/30 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                        <h3 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md animate-pulse-slow">
                          GETUP
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center animate-bounce-slow">
                    <Award className="h-6 w-6 sm:h-10 sm:w-10 text-[#7c4dff]" />
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-6 order-1 md:order-2 text-center md:text-left">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] animate-pulse-slow">
                  <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                  <span>Sobre nós</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-[#7c4dff]">
                  Sobre a{" "}
                  <span className="relative">
                    GETUP
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#b4ff4d] animate-width-expand"></span>
                  </span>
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Somos uma agência especializada em marketing digital, focada em resultados reais e mensuráveis para
                  nossos clientes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm sm:text-base">Equipe especializada</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Profissionais com experiência em diversas áreas do marketing digital
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm sm:text-base">Estratégias personalizadas</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Soluções sob medida para cada cliente e objetivo de negócio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 hover:translate-x-2 transition-transform">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-sm sm:text-base">Resultados mensuráveis</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Acompanhamento detalhado de métricas e KPIs para otimização contínua
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/equipe">
                  <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white relative overflow-hidden shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300 mt-6 sm:mt-8">
                    <span className="relative z-10 flex items-center">
                      Conheça nossa equipe{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Video Section - Mobile Optimized */}
        <section id="mission-video" className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8d7e9] to-[#7c4dff]/10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container relative px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div
                className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4 shadow-sm animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                <span>Nossa Missão</span>
              </div>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#7c4dff] pb-2 leading-tight">
                  Transformando negócios através do digital
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-[#b4ff4d] rounded-full animate-pulse-slow"></div>
              </div>

              <p className="mt-6 text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Descubra como ajudamos empresas a alcançarem seus objetivos de marketing digital com estratégias
                inovadoras e resultados comprovados.
              </p>
            </div>

            <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#7c4dff] text-center md:text-left">
                  O que as empresas buscam conosco
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />,
                      title: "Aumento de visibilidade",
                      description: "Estratégias para destacar sua marca no ambiente digital",
                    },
                    {
                      icon: <Target className="h-5 w-5 sm:h-6 sm:w-6" />,
                      title: "Conversão de leads",
                      description: "Otimização de funis de vendas e experiência do usuário",
                    },
                    {
                      icon: <Palette className="h-5 w-5 sm:h-6 sm:w-6" />,
                      title: "Identidade visual",
                      description: "Design que comunica a essência da sua marca",
                    },
                    {
                      icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />,
                      title: "Resultados mensuráveis",
                      description: "Relatórios detalhados e métricas de desempenho",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-xl border bg-white p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1"
                    >
                      <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                      <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                        {item.icon}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold mb-2 group-hover:text-[#7c4dff] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 text-center md:text-left">
                  <Link href="/metodologia">
                    <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white relative overflow-hidden shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300">
                      <span className="relative z-10 flex items-center">
                        Conheça nossa metodologia{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex justify-center items-center order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d]/30 blur-xl animate-pulse-slow"></div>
                  <div
                    className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-[#7c4dff]/30 blur-xl animate-pulse-slow"
                    style={{ animationDelay: "2s" }}
                  ></div>

                  <div className="relative w-[200px] sm:w-[250px] md:w-[280px] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-2xl transform hover:rotate-2 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] opacity-30 mix-blend-overlay"></div>

                    <div className="relative rounded-[calc(1.5rem-4px)] sm:rounded-[calc(2rem-4px)] overflow-hidden bg-white">
                      <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

                      <div
                        className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                        onClick={togglePlayPause}
                      >
                        <div
                          className={`h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"} hover:scale-110`}
                        >
                          <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full bg-[#7c4dff] flex items-center justify-center">
                            {isPlaying ? (
                              <Pause className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                            ) : (
                              <Play className="h-4 w-4 sm:h-6 sm:w-6 text-white ml-1" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="aspect-[9/16]">
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover"
                          loop
                          playsInline
                          poster="/placeholder.svg?height=720&width=405"
                        >
                          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQMztU4YioBmepotj2M8BlTZHKaC-Iz6CsIh5zWFVyegKASVL4OtUlATtgNJdCBtQtoMo89A-N8nO5VnjNCWkE4arjP0b0-t45DCqwI-aEblN2jrN2HOH8eO6d1bXZ0QYK7njB.mp4" type="video/mp4" />
                          Seu navegador não suporta vídeos HTML5.
                        </video>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center animate-bounce-slow">
                    <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-[#7c4dff]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section - Mobile Optimized */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container relative px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4 animate-pulse-slow">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                <span>Nossa Marca</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#7c4dff] pb-2 leading-tight">
                Presença digital em todos os lugares
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-[#b4ff4d] rounded-full animate-pulse-slow"></div>
              <p className="mt-6 text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Nossa marca está presente em diversas plataformas e formatos, sempre mantendo a identidade visual
                consistente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  src: "/images/getup-mobile.png",
                  alt: "GETUP em dispositivos móveis",
                  caption: "Presença mobile-first",
                },
                { src: "/images/getup-watch.png", alt: "GETUP em smartwatches", caption: "Integração com wearables" },
                {
                  src: "/images/getup-tote.png",
                  alt: "GETUP em materiais promocionais",
                  caption: "Materiais promocionais",
                },
                {
                  src: "/images/getup-wall.jpeg",
                  alt: "GETUP em ambientes físicos",
                  caption: "Presença em ambientes físicos",
                },
                { src: "/images/getup-gold.png", alt: "GETUP em materiais premium", caption: "Materiais premium" },
                {
                  src: "/images/getup-office.png",
                  alt: "GETUP em ambientes corporativos",
                  caption: "Ambientes corporativos",
                },
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl group transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                    <p className="text-white font-medium text-sm sm:text-base">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section - Mobile Optimized */}
        <section id="portfolio" className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container relative px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div
                className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4 shadow-sm animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                <span>Nosso Portfólio</span>
              </div>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#7c4dff] pb-2 leading-tight">
                  Projetos que transformam negócios
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 sm:w-24 h-1 bg-[#b4ff4d] rounded-full animate-pulse-slow"></div>
              </div>

              <p className="mt-6 text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Conheça alguns dos nossos projetos de sucesso que impulsionaram o crescimento de nossos clientes no
                ambiente digital.
              </p>
            </div>

            {/* Projeto Destaque - Kivolt */}
            <div className="mb-8 sm:mb-12 group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs sm:text-sm text-blue-600 mb-4 animate-pulse-slow">
                    <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                    <span>Branding</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-600">Kivolt - Setor Elétrico</h3>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    Desenvolvimento completo de identidade visual para a Kivolt, empresa do setor elétrico que atua no
                    Mercado Livre de Energia Elétrica. O projeto incluiu criação de logo, tipografia, paleta de cores e
                    aplicações da marca.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Branding
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Design
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Identidade Visual
                    </span>
                  </div>
                  <Link href="/portfolio/kivolt">
                    <Button className="w-fit bg-[#7c4dff] hover:bg-[#6a3afc] text-white shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300">
                      Ver projeto completo{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="relative overflow-hidden">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                    {[
                      { src: "/images/kivolt-logo.png", alt: "Kivolt Logo", bg: "bg-blue-600" },
                      { src: "/images/kivolt-watch.png", alt: "Kivolt em Smartwatch", bg: "bg-white" },
                      { src: "/images/kivolt-brand.png", alt: "Construção da marca Kivolt", bg: "bg-white" },
                      { src: "/images/kivolt-badge.png", alt: "Aplicação da marca Kivolt", bg: "bg-gray-900" },
                    ].map((image, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden ${image.bg} transform hover:scale-105 transition-all duration-500`}
                      >
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto Destaque - Outsiders */}
            <div className="mb-8 sm:mb-12 group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-xs sm:text-sm text-purple-600 mb-4 animate-pulse-slow">
                    <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                    <span>Branding</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-600">Outsiders Co. - Moda Exclusiva</h3>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    Desenvolvimento completo de identidade visual para a Outsiders Co., marca de moda voltada para
                    pessoas que não seguem a multidão e buscam um estilo único e independente.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Branding
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Design
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Moda
                    </span>
                  </div>
                  <Link href="/portfolio/outsiders">
                    <Button className="w-fit bg-[#7c4dff] hover:bg-[#6a3afc] text-white shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300">
                      Ver projeto completo{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="relative overflow-hidden">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                    {[
                      { src: "/images/outsiders-logo.png", alt: "Outsiders Logo", bg: "bg-purple-600" },
                      { src: "/images/outsiders-typography.png", alt: "Outsiders Typography", bg: "bg-white" },
                      { src: "/images/outsiders-brand.png", alt: "Outsiders Brand Construction", bg: "bg-white" },
                      { src: "/images/outsiders-packaging.png", alt: "Outsiders Packaging", bg: "bg-black" },
                    ].map((image, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden ${image.bg} transform hover:scale-105 transition-all duration-500`}
                      >
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto Destaque - Casa Brasil */}
            <div className="mb-8 sm:mb-12 group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs sm:text-sm text-green-800 mb-4 animate-pulse-slow">
                    <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                    <span>Branding</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-700">
                    Casa Brasil - Gastronomia Brasileira
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                    Desenvolvimento completo de identidade visual para o cantinho brasileiro na cidade. Um espaço que
                    celebra a cultura e gastronomia brasileira com muita alegria e aconchego.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Branding
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Gastronomia
                    </span>
                    <span className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]">
                      Identidade Visual
                    </span>
                  </div>
                  <Link href="/portfolio/casabrasil">
                    <Button className="w-fit bg-[#7c4dff] hover:bg-[#6a3afc] text-white shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300">
                      Ver projeto completo{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="relative overflow-hidden">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                    {[
                      { src: "/images/casabrasil-logo-green.png", alt: "Casa Brasil Logo", bg: "bg-green-800" },
                      { src: "/images/casabrasil-beer.png", alt: "Casa Brasil Aplicação", bg: "bg-white" },
                      { src: "/images/casabrasil-brand.png", alt: "Casa Brasil Conceito", bg: "bg-white" },
                      {
                        src: "/images/casabrasil-logo-orange.png",
                        alt: "Casa Brasil Logo Variação",
                        bg: "bg-amber-600",
                      },
                    ].map((image, index) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden ${image.bg} transform hover:scale-105 transition-all duration-500`}
                      >
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 sm:mt-16 text-center">
              <Button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white relative overflow-hidden shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  Ver todos os projetos{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
              </Button>
            </div>

            {/* Animated Dots */}
            <div className="flex justify-center mt-8 sm:mt-12 gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-[#7c4dff]/30 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Optimized */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {ctaParticles.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/20 animate-float"
                style={{
                  width: `${p.width}px`,
                  height: `${p.height}px`,
                  top: `${p.top}%`,
                  left: `${p.left}%`,
                  animationDuration: `${p.duration}s`,
                  animationDelay: `${p.delay}s`,
                }}
              ></div>
            ))}
          </div>

          <div className="container relative px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm text-white animate-pulse-slow">
                  <Zap className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                  <span>Vamos começar</span>
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white leading-tight">
                  Pronto para transformar sua presença digital?
                </h2>
                <p className="text-white/80 text-sm sm:text-base">
                  Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a crescer.
                </p>
                <Link href="/orcamento">
                  <Button className="bg-white text-[#7c4dff] hover:bg-white/90 shadow-lg hover:shadow-white/30 transition-all duration-300 mt-6 sm:mt-8">
                    Solicitar orçamento{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-video overflow-hidden rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl transform hover:rotate-2 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                    <div className="space-y-4 text-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">Agende uma consulta gratuita</h3>
                      <p className="text-white/80 text-sm sm:text-base">
                        Vamos analisar seu negócio e propor estratégias personalizadas para seus objetivos.
                      </p>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de agendar uma consulta gratuita.",
                            "_blank",
                          )
                        }
                        className="bg-[#b4ff4d] text-[#7c4dff] hover:bg-[#a3e644] font-medium shadow-lg hover:shadow-[#b4ff4d]/30 transition-all duration-300"
                      >
                        Agendar agora{" "}
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center animate-bounce-slow">
                  <Sparkles className="h-6 w-6 sm:h-10 sm:w-10 text-[#7c4dff]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Mobile Optimized */}
        <section id="contact" className="py-16 sm:py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50"></div>
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container relative px-4 sm:px-6">
            <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
              <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4 animate-pulse-slow">
                  <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                  <span>Contato</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-[#7c4dff]">
                  Entre em Contato
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Estamos prontos para ajudar seu negócio a alcançar novos patamares. Preencha o formulário ou use um
                  dos nossos canais de contato.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7c4dff]/10 hover:border-[#7c4dff]/30 transition-colors bg-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-300">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Telefone</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">+55 19 994871568</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7c4dff]/10 hover:border-[#7c4dff]/30 transition-colors bg-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-300">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">getupmarketingbr@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7c4dff]/10 hover:border-[#7c4dff]/30 transition-colors bg-white shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-300">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Endereço</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">Atendimento 100% online</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/getup_br?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] hover:bg-[#7c4dff] hover:text-white transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </div>
              <div className="space-y-4 bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-[#7c4dff]/10 hover:border-[#7c4dff]/30 transition-all duration-300 transform hover:-translate-y-1 order-1 md:order-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#7c4dff]">Envie uma mensagem</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Assunto
                    </label>
                    <input
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                      placeholder="Como podemos ajudar?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300"
                      placeholder="Descreva seu projeto ou necessidade..."
                      required
                    ></textarea>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-medium">Método de contato preferido</label>
                    <div className="flex gap-4">
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="whatsapp"
                          name="contactMethod"
                          value="whatsapp"
                          checked={contactMethod === "whatsapp"}
                          onChange={() => setContactMethod("whatsapp")}
                          className="h-4 w-4 text-[#7c4dff] focus:ring-[#7c4dff]"
                        />
                        <label htmlFor="whatsapp" className="text-xs sm:text-sm font-medium">
                          WhatsApp
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id="email"
                          name="contactMethod"
                          value="email"
                          checked={contactMethod === "email"}
                          onChange={() => setContactMethod("email")}
                          className="h-4 w-4 text-[#7c4dff] focus:ring-[#7c4dff]"
                        />
                        <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                          Email
                        </label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white relative overflow-hidden shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      Enviar mensagem{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Mobile Optimized with Updated Credit */}
      <footer className="border-t bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        </div>
        <div className="container relative flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4 sm:px-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-lg sm:text-xl font-bold text-[#7c4dff] relative group">
                GETUP
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b4ff4d] group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Especialistas em Gestão de Tráfego, Design e Marketing Digital
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-center">
            <nav className="flex flex-col gap-2 md:flex-row md:gap-4 items-center">
              <Link
                href="#services"
                className="text-xs sm:text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7c4dff] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              >
                Serviços
              </Link>
              <Link
                href="#about"
                className="text-xs sm:text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7c4dff] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              >
                Sobre
              </Link>
              <Link
                href="#portfolio"
                className="text-xs sm:text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7c4dff] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              >
                Portfólio
              </Link>
              <Link
                href="#contact"
                className="text-xs sm:text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#7c4dff] after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100"
              >
                Contato
              </Link>
            </nav>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/getup_br?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-muted-foreground hover:text-[#7c4dff] transition-colors transform hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container relative flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between px-4 sm:px-6">
            <p className="text-center text-xs sm:text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} GETUP Marketing Digital. Todos os direitos reservados.
            </p>
            <p className="text-center text-xs sm:text-sm text-muted-foreground md:text-right">
              Desenvolvido por <span className="font-medium text-[#7c4dff]">Caio Mega</span> (GETUP)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
