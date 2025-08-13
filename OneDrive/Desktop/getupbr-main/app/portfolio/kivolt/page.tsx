"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  Menu,
  X,
  Instagram,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function KivoltPage() {
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
          <Button className="hidden md:flex bg-[#7c4dff] hover:bg-[#6a3afc] text-white group text-sm px-4 py-2">
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
              <Button className="mt-4 w-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white group">
                Fale Conosco{" "}
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 py-12 sm:py-16 md:py-24">
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
                  <span>Projeto de Branding</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter mb-4 sm:mb-6 text-white leading-tight">
                  Kivolt{" "}
                  <span className="text-[#b4ff4d] relative">
                    Energia
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-white"></span>
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                  Desenvolvimento completo de identidade visual para empresa do setor elétrico que atua no Mercado Livre
                  de Energia Elétrica.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-xs sm:max-w-md">
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] sm:rounded-[calc(1.5rem-4px)] bg-white">
                    <div className="relative h-full w-full">
                      <Image src="/images/kivolt-logo.png" alt="Kivolt Logo" fill className="object-cover" priority />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 sm:h-10 sm:w-10 text-[#7c4dff]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Projeto - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="grid gap-8 sm:gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                  <Zap className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span>Sobre o Projeto</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4 sm:mb-6 leading-tight">
                  Construção de uma marca para o <span className="text-blue-600">setor elétrico</span>
                </h2>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  A Kivolt nasce da colaboração entre profissionais com mais de uma década de experiência no setor
                  elétrico, dotados de um profundo entendimento das demandas e desafios enfrentados pelos integradores.
                </p>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                  Esta sólida expertise nos capacita a oferecer uma nova e eficiente solução, permitindo aos
                  integradores comercializar energia no dinâmico Mercado Livre de Energia Elétrica.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Identidade Visual Completa</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Desenvolvimento de logo, tipografia, paleta de cores e aplicações
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Posicionamento de Marca</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Estratégia de comunicação alinhada ao mercado de energia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Materiais Institucionais</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Criação de peças gráficas para comunicação da marca
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative mx-auto w-full max-w-xs sm:max-w-md">
                  <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-blue-100 blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-blue-100 blur-xl"></div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] sm:rounded-[calc(1.5rem-4px)] bg-white">
                      <Image
                        src="/images/kivolt-brand.png"
                        alt="Construção da marca Kivolt"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-blue-500 shadow-lg flex items-center justify-center">
                    <Target className="h-6 w-6 sm:h-10 sm:w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria do Projeto - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>Galeria</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Aplicações da Marca</h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                Conheça as diversas aplicações da identidade visual da Kivolt em diferentes contextos e materiais.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden rounded-xl shadow-lg group">
                <Image
                  src="/images/kivolt-logo.png"
                  alt="Kivolt Logo Variations"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <p className="text-white font-medium text-sm sm:text-base">
                    Variações do logotipo para diferentes aplicações
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <Image
                  src="/images/kivolt-watch.png"
                  alt="Kivolt em Smartwatch"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <p className="text-white font-medium text-sm">Aplicação em dispositivos wearable</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <Image
                  src="/images/kivolt-badge.png"
                  alt="Kivolt Badge"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <p className="text-white font-medium text-sm">Crachá e materiais de identificação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>Resultados</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Impacto do Projeto</h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                A nova identidade visual fortaleceu o posicionamento da Kivolt no mercado de energia elétrica.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Reconhecimento</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Aumento significativo no reconhecimento da marca no setor elétrico, estabelecendo uma presença visual
                  forte e consistente.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Posicionamento</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Consolidação do posicionamento da empresa como inovadora e confiável no mercado livre de energia
                  elétrica.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2 sm:col-span-2 lg:col-span-1">
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Zap className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Diferenciação</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Identidade visual que destaca a Kivolt da concorrência, transmitindo modernidade e expertise no setor
                  elétrico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-16 -left-16 sm:-top-24 sm:-left-24 h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl"></div>

          <div className="container relative px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-center">
              <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs sm:text-sm text-white">
                  <Zap className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  <span>Vamos começar</span>
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white leading-tight">
                  Pronto para transformar sua marca?
                </h2>
                <p className="text-white/80 text-sm sm:text-base">
                  Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a se destacar no
                  mercado.
                </p>
                <Link href="/orcamento">
                  <Button className="bg-white text-[#7c4dff] hover:bg-white/90 group w-full sm:w-auto mt-6 sm:mt-8">
                    Solicitar orçamento{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative aspect-video overflow-hidden rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                    <div className="space-y-3 sm:space-y-4 text-center">
                      <h3 className="text-lg sm:text-2xl font-bold text-white">Consultoria de Branding</h3>
                      <p className="text-white/80 text-xs sm:text-sm">
                        Agende uma sessão gratuita com nossos especialistas para analisar sua marca e identificar
                        oportunidades.
                      </p>
                      <Button
                        onClick={() =>
                          window.open(
                            "https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de agendar uma consultoria de branding.",
                            "_blank",
                          )
                        }
                        className="bg-[#b4ff4d] text-[#7c4dff] hover:bg-[#a3e644] group font-medium text-sm w-full mt-6 sm:mt-8"
                      >
                        Agendar agora{" "}
                        <ArrowUpRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 sm:h-10 sm:w-10 text-[#7c4dff]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outros Projetos - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>Portfólio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Outros Projetos</h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                Conheça outros projetos desenvolvidos pela nossa equipe
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
              {/* Projeto Outsiders */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/outsiders-logo.png"
                    alt="Outsiders Logo"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center p-4 sm:p-6">
                  <Link href="/portfolio/outsiders">
                    <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white text-sm">Ver mais</Button>
                  </Link>
                </div>

                <div className="p-4 sm:p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold group-hover:text-[#7c4dff] transition-colors text-sm sm:text-base">
                      Outsiders Co.
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">Moda</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    Marca de moda para quem não segue a multidão.
                  </p>
                </div>
              </div>

              {/* Projeto Casa Brasil */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/casabrasil-logo-green.png"
                    alt="Casa Brasil Logo"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center p-4 sm:p-6">
                  <Link href="/portfolio/casabrasil">
                    <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white text-sm">Ver mais</Button>
                  </Link>
                </div>

                <div className="p-4 sm:p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold group-hover:text-[#7c4dff] transition-colors text-sm sm:text-base">
                      Casa Brasil
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">Gastronomia</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                    O cantinho brasileiro na cidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Link href="/#portfolio">
                <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white w-full sm:w-auto mt-6 sm:mt-8">
                  Ver todos os projetos{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Mobile Optimized */}
      <footer className="border-t bg-gradient-to-b from-gray-50 to-white">
        <div className="container flex flex-col gap-4 sm:gap-6 py-6 sm:py-8 md:flex-row md:items-center md:justify-between md:py-12 px-4 sm:px-6">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-lg sm:text-xl font-bold text-[#7c4dff]">GETUP</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Especialistas em Gestão de Tráfego, Design e Marketing Digital
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-8">
            <nav className="flex flex-col gap-2 md:flex-row md:gap-4 text-center md:text-left">
              <Link
                href="/#services"
                className="text-xs sm:text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="/#about"
                className="text-xs sm:text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors"
              >
                Sobre
              </Link>
              <Link
                href="/#portfolio"
                className="text-xs sm:text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors"
              >
                Portfólio
              </Link>
              <Link
                href="/#contact"
                className="text-xs sm:text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors"
              >
                Contato
              </Link>
            </nav>
            <div className="flex gap-4 justify-center md:justify-start">
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
        <div className="border-t py-4 sm:py-6">
          <div className="container flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between px-4 sm:px-6">
            <p className="text-center text-xs sm:text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} GETUP Marketing Digital. Todos os direitos reservados.
            </p>
            <p className="text-center text-xs sm:text-sm text-muted-foreground md:text-right">
              Desenvolvido por Caio Mega (GETUP)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
