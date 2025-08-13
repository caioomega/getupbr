"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
  Palette,
  Brush,
  Layout,
  Zap,
  Award,
  Eye,
  Layers,
  Phone,
} from "lucide-react"

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg sm:text-xl font-bold text-[#7c4dff] relative group">
              GETUP
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b4ff4d] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              href="/#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
            >
              Serviços
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
            >
              Sobre
            </Link>
            <Link
              href="/#portfolio"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
            >
              Portfólio
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
            >
              Contato
            </Link>
          </nav>
          <Button 
            onClick={() => window.open('https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de saber mais sobre design criativo.', '_blank')}
            className="hidden md:flex bg-[#7c4dff] hover:bg-[#6a3afc] text-white text-sm px-4 py-2"
          >
            Fale Conosco{" "}
            <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              <span className="text-xl font-bold text-[#7c4dff]">GETUP</span>
              <Button variant="outline" size="icon" onClick={toggleMobileMenu}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col gap-6">
              <Link
                href="/#services"
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Serviços
              </Link>
              <Link
                href="/#about"
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Sobre
              </Link>
              <Link
                href="/#portfolio"
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Portfólio
              </Link>
              <Link
                href="/#contact"
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Contato
              </Link>
              <Button 
                onClick={() => {
                  window.open('https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de saber mais sobre design criativo.', '_blank')
                  toggleMobileMenu()
                }}
                className="mt-4 w-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white"
              >
                Fale Conosco{" "}
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 py-12 sm:py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-[#7c4dff]/10 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-[#b4ff4d]/10 blur-3xl"></div>

          <div className="container relative px-4 sm:px-6">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-white/80 transition-colors mb-6 sm:mb-8 text-sm sm:text-base"
            >
              <ArrowLeft className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span>Voltar para a página inicial</span>
            </Link>

            <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
              <div className="max-w-3xl text-center md:text-left">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm text-white mb-4">
                  <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span>Serviço Especializado</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter mb-4 sm:mb-6 text-white leading-tight">
                  Design{" "}
                  <span className="text-[#b4ff4d] relative">
                    Criativo
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-white"></span>
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                  Criamos identidades visuais impactantes e materiais gráficos que comunicam a essência da sua marca de
                  forma única e memorável.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-xs sm:max-w-md">
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] sm:rounded-[calc(1.5rem-4px)] bg-white">
                    <div className="relative h-full w-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 flex items-center justify-center">
                      <Palette className="h-16 w-16 sm:h-24 sm:w-24 text-purple-600" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                  <Brush className="h-6 w-6 sm:h-10 sm:w-10 text-[#7c4dff]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                <Zap className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>O que oferecemos</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                Soluções completas em <span className="text-purple-600">Design Criativo</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Desenvolvemos projetos visuais que conectam sua marca com o público-alvo, criando experiências
                memoráveis e impactantes.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Eye className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Identidade Visual",
                  description: "Criação completa de logotipos, tipografia, cores e elementos visuais da marca.",
                  features: ["Logotipo", "Manual da Marca", "Tipografia", "Paleta de Cores"],
                },
                {
                  icon: <Layout className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Material Gráfico",
                  description: "Desenvolvimento de peças gráficas para comunicação visual e marketing.",
                  features: ["Cartões de Visita", "Folders", "Banners", "Apresentações"],
                },
                {
                  icon: <Layers className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Design Digital",
                  description: "Criação de materiais para plataformas digitais e redes sociais.",
                  features: ["Posts", "Stories", "Banners Web", "E-mail Marketing"],
                },
                {
                  icon: <Brush className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Ilustração",
                  description: "Ilustrações personalizadas para diversos tipos de projetos e aplicações.",
                  features: ["Ilustração Digital", "Ícones", "Mascotes", "Infográficos"],
                },
                {
                  icon: <Palette className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Branding",
                  description: "Estratégia completa de marca para posicionamento e diferenciação.",
                  features: ["Estratégia", "Posicionamento", "Tom de Voz", "Aplicações"],
                },
                {
                  icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Consultoria Criativa",
                  description: "Orientação estratégica para projetos visuais e comunicação da marca.",
                  features: ["Consultoria", "Direção de Arte", "Conceito", "Estratégia Visual"],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Preview */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#7c4dff]/5 to-[#b4ff4d]/5">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>Nosso Trabalho</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                Projetos que <span className="text-purple-600">inspiram e convertem</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                Conheça alguns dos nossos projetos de design que transformaram a comunicação visual de nossos clientes.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Kivolt - Energia",
                  category: "Identidade Visual",
                  image: "/images/kivolt-logo.png",
                  description: "Desenvolvimento completo de identidade visual para empresa do setor elétrico.",
                  link: "/portfolio/kivolt",
                },
                {
                  title: "Outsiders Co.",
                  category: "Branding",
                  image: "/images/outsiders-logo.png",
                  description: "Marca de moda para pessoas que não seguem a multidão.",
                  link: "/portfolio/outsiders",
                },
                {
                  title: "Casa Brasil",
                  category: "Identidade Visual",
                  image: "/images/casabrasil-logo-green.png",
                  description: "O cantinho brasileiro na cidade com identidade autêntica.",
                  link: "/portfolio/casabrasil",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <Link href={project.link} className="block" passHref>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#7c4dff] mb-1">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center text-sm font-medium text-[#7c4dff] transition-colors hover:text-[#6a3afc]"
                    >
                      Ver Projeto
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                <Award className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>Entre em contato</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                Pronto para dar o próximo passo?
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Estamos aqui para ajudar a transformar suas ideias em realidade. Fale conosco e descubra como podemos
                colaborar.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Button
                onClick={() => window.open('https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de saber mais sobre design criativo.', '_blank')}
                className="w-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white text-sm px-4 py-2 flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Fale Conosco pelo WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
