"use client"

import { useState, useRef } from "react"
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
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ChevronDown,
  Menu,
  Play,
  Pause,
  X,
} from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

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

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#7c4dff]">GETUP</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1 hover:text-[#7c4dff]"
            >
              Serviços <ChevronDown className="h-3 w-3 opacity-50" />
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-[#7c4dff]"
            >
              Sobre
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-[#7c4dff]"
            >
              Portfólio
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-[#7c4dff]"
            >
              Contato
            </Link>
          </nav>
          <Button className="hidden md:flex bg-[#7c4dff] hover:bg-[#6a3afc] text-white group">
            Fale Conosco{" "}
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
          <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            <Menu className="h-5 w-5" />
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
              <Button className="mt-4 w-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white group">
                Fale Conosco{" "}
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </nav>
          </div>
        </div>
      )}
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8d7e9] via-[#f8d7e9] to-[#e9d7f8] py-20 md:py-32">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[#7c4dff]/10 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#b4ff4d]/10 blur-3xl"></div>

          <div className="container relative grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white/50 px-3 py-1 text-sm text-[#7c4dff] backdrop-blur-sm">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Transforme sua presença digital</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Eleve sua marca com a{" "}
                <span className="text-[#7c4dff] relative">
                  GETUP
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#b4ff4d]"></span>
                </span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Especialistas em Gestão de Tráfego, Design e Marketing Digital para impulsionar seu negócio no mundo
                online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Conheça nossos serviços{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#7c4dff] text-[#7c4dff] hover:bg-[#7c4dff]/10 transition-colors"
                >
                  Solicitar orçamento
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-white bg-[#7c4dff]/20 flex items-center justify-center text-xs font-medium text-[#7c4dff]"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">+500</span> clientes satisfeitos
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white">
                  <div className="relative h-full w-full">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20tela%202025-03-26%20001955-EXA4JnMwJO3Uv8RydeEr8uY7PIj5Jn.png"
                      alt="GETUP Marketing Digital"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                <Zap className="h-10 w-10 text-[#7c4dff]" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7c4dff]/10">
                  <TrendingUp className="h-8 w-8 text-[#7c4dff]" />
                </div>
                <h3 className="text-xl font-bold">+200%</h3>
                <p className="text-sm text-muted-foreground">Aumento de tráfego</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7c4dff]/10">
                  <Target className="h-8 w-8 text-[#7c4dff]" />
                </div>
                <h3 className="text-xl font-bold">+150%</h3>
                <p className="text-sm text-muted-foreground">Conversão de leads</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7c4dff]/10">
                  <Award className="h-8 w-8 text-[#7c4dff]" />
                </div>
                <h3 className="text-xl font-bold">+50</h3>
                <p className="text-sm text-muted-foreground">Prêmios conquistados</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7c4dff]/10">
                  <Users className="h-8 w-8 text-[#7c4dff]" />
                </div>
                <h3 className="text-xl font-bold">+500</h3>
                <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl"></div>

          {/* Animated Shapes */}
          <div className="absolute top-20 left-10 h-16 w-16 rounded-full bg-[#7c4dff]/10 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 h-20 w-20 rounded-full bg-[#b4ff4d]/10 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 h-12 w-12 rounded-full bg-[#7c4dff]/10 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container relative">
            <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
              <div
                className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4 shadow-sm animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Sparkles className="mr-1 h-3.5 w-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                <span>Nossos Serviços</span>
              </div>

              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] pb-2">
                  Soluções completas para sua presença digital
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#b4ff4d] rounded-full"></div>
              </div>

              <p className="mt-6 text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Combinamos estratégia, criatividade e tecnologia para impulsionar seu negócio no mundo digital com
                soluções inovadoras e resultados mensuráveis.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Serviço 1 - Gestão de Tráfego */}
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <MousePointer className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Gestão de Tráfego
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estratégias personalizadas para atrair visitantes qualificados e converter em clientes.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Serviço 2 - Design Criativo */}
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <Palette className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">Design Criativo</h3>
                <p className="text-muted-foreground mb-6">
                  Criação de identidades visuais impactantes e materiais que comunicam sua essência.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Serviço 3 - Marketing Digital */}
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <BarChart3 className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Marketing Digital
                </h3>
                <p className="text-muted-foreground mb-6">
                  Estratégias integradas para aumentar sua visibilidade e engajamento online.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Serviço 4 - Gestão de Redes Sociais */}
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <MessageSquare className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Gestão de Redes Sociais
                </h3>
                <p className="text-muted-foreground mb-6">
                  Criação de conteúdo relevante e gerenciamento completo das suas plataformas sociais.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Serviço 5 - Consultoria Estratégica */}
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Consultoria Estratégica
                </h3>
                <p className="text-muted-foreground mb-6">
                  Análise e planejamento para otimizar seus resultados e superar a concorrência.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Serviço 6 - Produção de Conteúdo */}
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <Globe className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Produção de Conteúdo
                </h3>
                <p className="text-muted-foreground mb-6">
                  Criação de conteúdo relevante e atrativo para diferentes plataformas e objetivos.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Serviço 7 - Desenvolvedores para Empresas */}
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <path d="M18 16.98h-5.99c-1.66 0-3.01-1.34-3.01-3s1.34-3 3.01-3H18"></path>
                    <path d="M9 17H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v1.5"></path>
                    <circle cx="18" cy="14" r="3"></circle>
                    <path d="M18 11v1.5"></path>
                    <path d="M18 16.5V18"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Desenvolvedores para Empresas
                </h3>
                <p className="text-muted-foreground mb-6">
                  Equipe de desenvolvedores qualificados para criar soluções digitais sob medida para o seu negócio.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Serviço 8 - Tráfego Pago */}
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">Tráfego Pago</h3>
                <p className="text-muted-foreground mb-6">
                  Estratégias de anúncios pagos em plataformas como Google, Meta e LinkedIn para atrair clientes
                  qualificados.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Saiba mais</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>

              {/* Destaque - Serviço em Destaque */}
              <div className="group relative overflow-hidden rounded-xl border-2 border-[#7c4dff] bg-gradient-to-br from-[#7c4dff]/5 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] lg:col-span-3">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#b4ff4d]/10 group-hover:bg-[#b4ff4d]/20 transition-all duration-500"></div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  <div className="mb-6 md:mb-0 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-[#7c4dff] text-white group-hover:scale-110 transition-all duration-500">
                    <Sparkles className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div className="flex-1">
                    <div className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-[#7c4dff] mb-3 shadow-sm">
                      <Zap className="mr-1 h-3.5 w-3.5" />
                      <span>Pacote Completo</span>
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-[#7c4dff] transition-colors mb-3">
                      Solução Digital Integrada
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Combine todos os nossos serviços em uma estratégia digital completa para maximizar seus
                      resultados. Desde o desenvolvimento até o tráfego pago, cuidamos de tudo para você.
                    </p>
                    <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white group">
                      Solicitar proposta personalizada{" "}
                      <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
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

        <section id="about" className="py-20 bg-gradient-to-br from-[#7c4dff]/5 to-[#b4ff4d]/5">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="relative mx-auto w-full max-w-md">
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white">
                      <div className="relative h-full w-full bg-gradient-to-br from-[#7c4dff]/80 to-[#b4ff4d]/30 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=600')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
                        <h3 className="text-5xl font-bold text-white drop-shadow-md">GETUP</h3>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                    <Award className="h-10 w-10 text-[#7c4dff]" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff]">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Sobre nós</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Sobre a{" "}
                  <span className="text-[#7c4dff] relative">
                    GETUP
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#b4ff4d]"></span>
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Somos uma agência especializada em marketing digital, focada em resultados reais e mensuráveis para
                  nossos clientes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Equipe especializada</p>
                      <p className="text-muted-foreground">
                        Profissionais com experiência em diversas áreas do marketing digital
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Estratégias personalizadas</p>
                      <p className="text-muted-foreground">
                        Soluções sob medida para cada cliente e objetivo de negócio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Resultados mensuráveis</p>
                      <p className="text-muted-foreground">
                        Acompanhamento detalhado de métricas e KPIs para otimização contínua
                      </p>
                    </div>
                  </div>
                </div>
                <Link href="/equipe">
                  <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white group relative overflow-hidden">
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

        <section id="mission-video" className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8d7e9] to-[#7c4dff]/10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl"></div>

          {/* Animated Shapes */}
          <div className="absolute top-20 right-10 h-16 w-16 rounded-full bg-[#7c4dff]/10 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 h-20 w-20 rounded-full bg-[#b4ff4d]/10 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div
                className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4 shadow-sm animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Sparkles className="mr-1 h-3.5 w-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                <span>Nossa Missão</span>
              </div>

              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] pb-2">
                  Transformando negócios através do digital
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#b4ff4d] rounded-full"></div>
              </div>

              <p className="mt-6 text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Descubra como ajudamos empresas a alcançarem seus objetivos de marketing digital com estratégias
                inovadoras e resultados comprovados.
              </p>
            </div>

            <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6 order-2 md:order-1">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7c4dff] to-[#6a3afc]">
                  O que as empresas buscam conosco
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1">
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#7c4dff] transition-colors">
                      Aumento de visibilidade
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Estratégias para destacar sua marca no ambiente digital
                    </p>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1">
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <Target className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#7c4dff] transition-colors">
                      Conversão de leads
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Otimização de funis de vendas e experiência do usuário
                    </p>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1">
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <Palette className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#7c4dff] transition-colors">
                      Identidade visual
                    </h4>
                    <p className="text-sm text-muted-foreground">Design que comunica a essência da sua marca</p>
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1">
                    <div className="absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#7c4dff] transition-colors">
                      Resultados mensuráveis
                    </h4>
                    <p className="text-sm text-muted-foreground">Relatórios detalhados e métricas de desempenho</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/metodologia">
                    <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white group relative overflow-hidden">
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
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>

                  {/* Video container with fancy border */}
                  <div className="relative w-[250px] sm:w-[280px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] opacity-30 mix-blend-overlay"></div>

                    {/* Inner container */}
                    <div className="relative rounded-[calc(2rem-4px)] overflow-hidden bg-white">
                      {/* Video overlay elements */}
                      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10"></div>

                      {/* Custom play/pause button overlay */}
                      <div
                        className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                        onClick={togglePlayPause}
                      >
                        <div
                          className={`h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                        >
                          <div className="h-12 w-12 rounded-full bg-[#7c4dff] flex items-center justify-center">
                            {isPlaying ? (
                              <Pause className="h-6 w-6 text-white" />
                            ) : (
                              <Play className="h-6 w-6 text-white ml-1" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Actual video */}
                      <div className="aspect-[9/16]">
                        <video
                          ref={videoRef}
                          className="w-full h-full object-cover"
                          loop
                          playsInline
                          poster="/placeholder.svg?height=720&width=405"
                        >
                          <source
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AQMztU4YioBmepotj2M8BlTZHKaC-Iz6CsIh5zWFVyegKASVL4OtUlATtgNJdCBtQtoMo89A-N8nO5VnjNCWkE4arjP0b0-t45DCqwI-aEblN2jrN2HOH8eO6d1bXZ0QYK7njB.mp4"
                            type="video/mp4"
                          />
                          Seu navegador não suporta vídeos HTML5.
                        </video>
                      </div>
                    </div>
                  </div>

                  {/* Decorative badge */}
                  <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                    <Zap className="h-8 w-8 text-[#7c4dff]" />
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

        {/* Galeria de Imagens */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl"></div>

          <div className="container relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Nossa Marca</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] pb-2">
                Presença digital em todos os lugares
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#b4ff4d] rounded-full"></div>
              <p className="mt-6 text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Nossa marca está presente em diversas plataformas e formatos, sempre mantendo a identidade visual
                consistente.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/images/getup-mobile.png"
                  alt="GETUP em dispositivos móveis"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Presença mobile-first</p>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/images/getup-watch.png"
                  alt="GETUP em smartwatches"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Integração com wearables</p>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/images/getup-tote.png"
                  alt="GETUP em materiais promocionais"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Materiais promocionais</p>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/images/getup-wall.jpeg"
                  alt="GETUP em ambientes físicos"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Presença em ambientes físicos</p>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/images/getup-gold.png"
                  alt="GETUP em materiais premium"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Materiais premium</p>
                </div>
              </div>

              <div className="relative aspect-square overflow-hidden rounded-xl group">
                <Image
                  src="/images/getup-office.png"
                  alt="GETUP em ambientes corporativos"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">Ambientes corporativos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl"></div>

          {/* Animated Shapes */}
          <div className="absolute top-20 right-10 h-16 w-16 rounded-full bg-[#7c4dff]/10 animate-pulse"></div>
          <div
            className="absolute bottom-20 left-10 h-20 w-20 rounded-full bg-[#b4ff4d]/10 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div
                className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4 shadow-sm animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <Sparkles className="mr-1 h-3.5 w-3.5 animate-spin" style={{ animationDuration: "5s" }} />
                <span>Nosso Portfólio</span>
              </div>

              <div className="relative">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] pb-2">
                  Projetos que transformam negócios
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#b4ff4d] rounded-full"></div>
              </div>

              <p className="mt-6 text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Conheça alguns dos nossos projetos de sucesso que impulsionaram o crescimento de nossos clientes no
                ambiente digital.
              </p>
            </div>

            {/* Projeto Destaque - Kivolt */}
            <div className="mb-12 group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600 mb-4">
                    <Sparkles className="mr-1 h-3.5 w-3.5" />
                    <span>Branding</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Kivolt - Setor Elétrico</h3>
                  <p className="text-muted-foreground mb-6">
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
                    <Button className="w-fit bg-[#7c4dff] hover:bg-[#6a3afc] text-white group">
                      Ver projeto completo{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="relative overflow-hidden">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                    <div className="relative overflow-hidden bg-blue-600">
                      <Image src="/images/kivolt-logo.png" alt="Kivolt Logo" fill className="object-cover" />
                    </div>
                    <div className="relative overflow-hidden bg-white">
                      <Image src="/images/kivolt-watch.png" alt="Kivolt em Smartwatch" fill className="object-cover" />
                    </div>
                    <div className="relative overflow-hidden bg-white">
                      <Image
                        src="/images/kivolt-brand.png"
                        alt="Construção da marca Kivolt"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden bg-gray-900">
                      <Image
                        src="/images/kivolt-badge.png"
                        alt="Aplicação da marca Kivolt"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto Destaque - Outsiders */}
            <div className="mb-12 group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600 mb-4">
                    <Sparkles className="mr-1 h-3.5 w-3.5" />
                    <span>Branding</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Outsiders Co. - Moda Exclusiva</h3>
                  <p className="text-muted-foreground mb-6">
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
                    <Button className="w-fit bg-[#7c4dff] hover:bg-[#6a3afc] text-white group">
                      Ver projeto completo{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="relative overflow-hidden">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                    <div className="relative overflow-hidden bg-purple-600">
                      <Image src="/images/outsiders-logo.png" alt="Outsiders Logo" fill className="object-cover" />
                    </div>
                    <div className="relative overflow-hidden bg-white">
                      <Image
                        src="/images/outsiders-typography.png"
                        alt="Outsiders Typography"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden bg-white">
                      <Image
                        src="/images/outsiders-brand.png"
                        alt="Outsiders Brand Construction"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden bg-black">
                      <Image
                        src="/images/outsiders-packaging.png"
                        alt="Outsiders Packaging"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projeto Destaque - Casa Brasil */}
            <div className="mb-12 group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-lg hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 mb-4">
                    <Sparkles className="mr-1 h-3.5 w-3.5" />
                    <span>Branding</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Casa Brasil - Gastronomia Brasileira</h3>
                  <p className="text-muted-foreground mb-6">
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
                    <Button className="w-fit bg-[#7c4dff] hover:bg-[#6a3afc] text-white group">
                      Ver projeto completo{" "}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                <div className="relative overflow-hidden">
                  <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                    <div className="relative overflow-hidden bg-green-800">
                      <Image
                        src="/images/casabrasil-logo-green.png"
                        alt="Casa Brasil Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden bg-white">
                      <Image
                        src="/images/casabrasil-beer.png"
                        alt="Casa Brasil Aplicação"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden bg-white">
                      <Image
                        src="/images/casabrasil-brand.png"
                        alt="Casa Brasil Conceito"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative overflow-hidden bg-amber-600">
                      <Image
                        src="/images/casabrasil-logo-orange.png"
                        alt="Casa Brasil Logo Variação"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Não precisamos de projetos adicionais, pois já temos os 3 projetos destacados acima */}

            <div className="mt-16 text-center">
              <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Ver todos os projetos{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
              </Button>
            </div>

            {/* Animated Dots */}
            <div className="flex justify-center mt-12 gap-2">
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

        <section className="py-20 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl"></div>

          <div className="container relative">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                  <Zap className="mr-1 h-3.5 w-3.5" />
                  <span>Vamos começar</span>
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Pronto para transformar sua presença digital?
                </h2>
                <p className="text-white/80">
                  Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a crescer.
                </p>
                <Button className="bg-white text-[#7c4dff] hover:bg-white/90 group">
                  Solicitar orçamento{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-video overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl font-bold text-white">Agende uma consulta gratuita</h3>
                      <p className="text-white/80">
                        Vamos analisar seu negócio e propor estratégias personalizadas para seus objetivos.
                      </p>
                      <Button className="bg-[#b4ff4d] text-[#7c4dff] hover:bg-[#a3e644] group font-medium">
                        Agendar agora{" "}
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-[#7c4dff]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Contato</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entre em Contato</h2>
                <p className="text-muted-foreground">
                  Estamos prontos para ajudar seu negócio a alcançar novos patamares. Preencha o formulário ou use um
                  dos nossos canais de contato.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7c4dff]/10 hover:border-[#7c4dff]/30 transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-muted-foreground">(00) 0000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7c4dff]/10 hover:border-[#7c4dff]/30 transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">contato@getup.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-[#7c4dff]/10 hover:border-[#7c4dff]/30 transition-colors">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-muted-foreground">Av. Principal, 1000 - Centro</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] hover:bg-[#7c4dff] hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] hover:bg-[#7c4dff] hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] hover:bg-[#7c4dff] hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] hover:bg-[#7c4dff] hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="space-y-4 bg-white p-6 rounded-xl shadow-lg border border-[#7c4dff]/10">
                <h3 className="text-xl font-bold">Envie uma mensagem</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nome
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Assunto
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Descreva seu projeto ou necessidade..."
                  ></textarea>
                </div>
                <Button className="w-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Enviar mensagem{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-gradient-to-b from-gray-50 to-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#7c4dff]">GETUP</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Especialistas em Gestão de Tráfego, Design e Marketing Digital
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-8">
            <nav className="flex flex-col gap-2 md:flex-row md:gap-4">
              <Link href="#services" className="text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors">
                Serviços
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors">
                Sobre
              </Link>
              <Link href="#portfolio" className="text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors">
                Portfólio
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors">
                Contato
              </Link>
            </nav>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-[#7c4dff] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#7c4dff] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#7c4dff] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} GETUP Marketing Digital. Todos os direitos reservados.
            </p>
            <p className="text-center text-sm text-muted-foreground md:text-right">Desenvolvido com ♥ pela GETUP</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

