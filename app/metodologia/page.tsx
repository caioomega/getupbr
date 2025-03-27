"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Menu,
  X,
  Zap,
  Target,
  BarChart3,
  Lightbulb,
  LineChart,
  Users,
  Rocket,
} from "lucide-react"

export default function MetodologiaPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-[#7c4dff]">
              GETUP
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1 hover:text-[#7c4dff]"
            >
              Serviços
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-[#7c4dff]"
            >
              Sobre
            </Link>
            <Link
              href="/#portfolio"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-[#7c4dff]"
            >
              Portfólio
            </Link>
            <Link
              href="/#contact"
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
                href="/#services"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Serviços
              </Link>
              <Link
                href="/#about"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Sobre
              </Link>
              <Link
                href="/#portfolio"
                className="flex items-center text-lg font-medium text-muted-foreground transition-colors hover:text-[#7c4dff]"
                onClick={toggleMobileMenu}
              >
                Portfólio
              </Link>
              <Link
                href="/#contact"
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
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8d7e9] via-[#f8d7e9] to-[#e9d7f8] py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[#7c4dff]/10 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#b4ff4d]/10 blur-3xl"></div>

          <div className="container relative">
            <Link
              href="/"
              className="inline-flex items-center text-[#7c4dff] hover:text-[#6a3afc] transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Voltar para a página inicial</span>
            </Link>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white/50 px-3 py-1 text-sm text-[#7c4dff] backdrop-blur-sm mb-4">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Nossa Metodologia</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                  Como{" "}
                  <span className="text-[#7c4dff] relative">
                    transformamos
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#b4ff4d]"></span>
                  </span>{" "}
                  negócios digitais
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
                  Nossa metodologia exclusiva combina estratégia, criatividade e tecnologia para impulsionar o
                  crescimento do seu negócio no ambiente digital.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/getup-logo-green.png"
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
          </div>
        </section>

        {/* Metodologia Overview */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                  <Zap className="mr-1 h-3.5 w-3.5" />
                  <span>Visão Geral</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">
                  Uma abordagem orientada por <span className="text-[#7c4dff]">resultados</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  Nossa metodologia foi desenvolvida ao longo de anos de experiência, combinando as melhores práticas do
                  mercado com insights exclusivos para criar uma abordagem que realmente funciona.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Baseada em dados</p>
                      <p className="text-muted-foreground">
                        Utilizamos análises avançadas para tomar decisões estratégicas fundamentadas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Personalizada para cada cliente</p>
                      <p className="text-muted-foreground">
                        Adaptamos nossa abordagem às necessidades específicas do seu negócio
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Foco em ROI</p>
                      <p className="text-muted-foreground">
                        Priorizamos estratégias que geram o melhor retorno sobre o investimento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative mx-auto w-full max-w-md">
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white">
                      <Image
                        src="/images/getup-flag.png"
                        alt="Metodologia GETUP"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                    <Target className="h-10 w-10 text-[#7c4dff]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Etapas da Metodologia */}
        <section className="py-20 bg-gradient-to-br from-[#7c4dff]/5 to-[#b4ff4d]/5 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl"></div>

          <div className="container relative">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Processo</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                As 5 etapas da nossa metodologia
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Um processo estruturado e comprovado para transformar sua presença digital e impulsionar resultados
                mensuráveis
              </p>
            </div>

            <div className="space-y-16">
              {/* Etapa 1 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] bg-white p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">
                          <Lightbulb className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">1. Diagnóstico</h3>
                        <p className="text-muted-foreground">Análise profunda do seu negócio e mercado</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#7c4dff]">Diagnóstico Estratégico</h3>
                  <p className="text-muted-foreground mb-6">
                    Iniciamos com uma análise completa do seu negócio, mercado e concorrência. Identificamos
                    oportunidades, desafios e definimos os objetivos que guiarão nossa estratégia.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Análise de mercado e concorrência</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Auditoria de presença digital</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Definição de KPIs e objetivos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Etapa 2 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#7c4dff]">Planejamento Estratégico</h3>
                  <p className="text-muted-foreground mb-6">
                    Com base no diagnóstico, desenvolvemos um plano estratégico personalizado que define as ações,
                    canais e táticas que utilizaremos para alcançar seus objetivos.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Definição de canais e estratégias</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Planejamento de conteúdo e criativo</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Definição de cronograma e orçamento</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] bg-white p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">
                          <Target className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">2. Planejamento</h3>
                        <p className="text-muted-foreground">Estratégia personalizada para seus objetivos</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Etapa 3 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative">
                  <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] bg-white p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">
                          <Rocket className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">3. Execução</h3>
                        <p className="text-muted-foreground">Implementação ágil e eficiente</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#7c4dff]">Execução Estratégica</h3>
                  <p className="text-muted-foreground mb-6">
                    Colocamos o plano em ação com uma abordagem ágil e eficiente. Nossa equipe multidisciplinar trabalha
                    de forma integrada para implementar as estratégias definidas.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Implementação de campanhas</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Produção de conteúdo e design</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Desenvolvimento técnico e integrações</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Etapa 4 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4 text-[#7c4dff]">Monitoramento e Análise</h3>
                  <p className="text-muted-foreground mb-6">
                    Acompanhamos de perto o desempenho das estratégias implementadas, analisando dados e métricas para
                    identificar oportunidades de otimização.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Monitoramento em tempo real</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Análise de métricas e KPIs</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Identificação de insights e tendências</p>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 relative">
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] bg-white p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">
                          <LineChart className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">4. Monitoramento</h3>
                        <p className="text-muted-foreground">Análise contínua de desempenho</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Etapa 5 */}
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="relative">
                  <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] bg-white p-8 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">
                          <BarChart3 className="h-10 w-10" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">5. Otimização</h3>
                        <p className="text-muted-foreground">Melhoria contínua baseada em dados</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#7c4dff]">Otimização Contínua</h3>
                  <p className="text-muted-foreground mb-6">
                    Com base nos dados coletados, otimizamos continuamente as estratégias para maximizar os resultados.
                    Este ciclo de melhoria contínua garante que sua presença digital evolua constantemente.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Ajustes estratégicos baseados em dados</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Testes A/B e experimentação</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <p className="text-muted-foreground">Relatórios de desempenho e recomendações</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Resultados</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">O que você pode esperar</h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Nossa metodologia comprovada entrega resultados consistentes e mensuráveis para nossos clientes
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Aumento de tráfego qualificado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Atraia mais visitantes interessados no seu produto ou serviço através de estratégias de marketing
                  digital otimizadas.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Média de +150% de aumento</span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Melhoria na taxa de conversão
                </h3>
                <p className="text-muted-foreground mb-6">
                  Transforme mais visitantes em leads e clientes com estratégias de conversão otimizadas e experiências
                  de usuário aprimoradas.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Média de +80% de aumento</span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl border bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-2 hover:scale-[1.02]">
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#7c4dff]/5 group-hover:bg-[#7c4dff]/10 transition-all duration-500"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#7c4dff]/10 text-[#7c4dff] group-hover:bg-[#7c4dff] group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  <BarChart3 className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold group-hover:text-[#7c4dff] transition-colors">
                  Retorno sobre investimento
                </h3>
                <p className="text-muted-foreground mb-6">
                  Maximize o ROI das suas campanhas de marketing com estratégias otimizadas e focadas em resultados
                  mensuráveis.
                </p>
                <div className="mt-auto flex items-center text-[#7c4dff] font-medium">
                  <span>Média de 3x de retorno</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                  Pronto para transformar seu negócio digital?
                </h2>
                <p className="text-white/80">
                  Entre em contato conosco hoje mesmo e descubra como nossa metodologia pode impulsionar seus
                  resultados.
                </p>
                <Button className="bg-white text-[#7c4dff] hover:bg-white/90 group">
                  Agendar uma consultoria gratuita{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative aspect-video overflow-hidden rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-xl">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="space-y-4 text-center">
                      <h3 className="text-2xl font-bold text-white">Consultoria Estratégica</h3>
                      <p className="text-white/80">
                        Agende uma sessão gratuita com nossos especialistas para analisar seu negócio e identificar
                        oportunidades.
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
              <Link href="/#services" className="text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors">
                Serviços
              </Link>
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors">
                Sobre
              </Link>
              <Link href="/#portfolio" className="text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors">
                Portfólio
              </Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-[#7c4dff] transition-colors">
                Contato
              </Link>
            </nav>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-[#7c4dff] transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#7c4dff] transition-colors">
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#7c4dff] transition-colors">
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
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

