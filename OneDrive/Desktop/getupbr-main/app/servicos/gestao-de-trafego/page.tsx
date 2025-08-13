"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Target,
  TrendingUp,
  BarChart3,
  Zap,
  Users,
  Award,
  MousePointer,
  Search,
  Instagram,
} from "lucide-react"

export default function GestaoDeTrafegoPage() {
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
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de saber mais sobre gestão de tráfego.",
                "_blank",
              )
            }
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
                  window.open(
                    "https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de saber mais sobre gestão de tráfego.",
                    "_blank",
                  )
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
                  <span>Serviço Especializado</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter mb-4 sm:mb-6 text-white leading-tight">
                  Gestão de{" "}
                  <span className="text-[#b4ff4d] relative">
                    Tráfego
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-white"></span>
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                  Atraia visitantes qualificados e transforme-os em clientes através de estratégias de tráfego pago
                  otimizadas e campanhas de alta performance.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-xs sm:max-w-md">
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 h-20 w-20 sm:h-32 sm:w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1rem-4px)] sm:rounded-[calc(1.5rem-4px)] bg-white">
                    <div className="relative h-full w-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 flex items-center justify-center">
                      <MousePointer className="h-16 w-16 sm:h-24 sm:w-24 text-blue-600" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                  <Target className="h-6 w-6 sm:h-10 sm:w-10 text-[#7c4dff]" />
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
                Soluções completas em <span className="text-blue-600">Gestão de Tráfego</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Desenvolvemos estratégias personalizadas para cada tipo de negócio, garantindo o melhor retorno sobre
                investimento em suas campanhas de tráfego pago.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Search className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Google Ads",
                  description: "Campanhas otimizadas no Google para capturar intenção de compra no momento certo.",
                  features: ["Pesquisa", "Display", "Shopping", "YouTube"],
                },
                {
                  icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Meta Ads",
                  description: "Anúncios no Facebook e Instagram para alcançar seu público-alvo com precisão.",
                  features: ["Facebook", "Instagram", "Messenger", "Audience Network"],
                },
                {
                  icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "LinkedIn Ads",
                  description: "Campanhas B2B direcionadas para profissionais e empresas no LinkedIn.",
                  features: ["Sponsored Content", "Message Ads", "Lead Gen", "Dynamic Ads"],
                },
                {
                  icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Analytics & Tracking",
                  description: "Monitoramento completo e análise de dados para otimização contínua.",
                  features: ["Google Analytics", "Pixel Tracking", "Conversões", "Relatórios"],
                },
                {
                  icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Otimização de Conversão",
                  description: "Melhoria contínua das taxas de conversão através de testes e ajustes.",
                  features: ["A/B Testing", "Landing Pages", "Funis", "CRO"],
                },
                {
                  icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
                  title: "Consultoria Estratégica",
                  description: "Planejamento estratégico personalizado para maximizar seus resultados.",
                  features: ["Estratégia", "Planejamento", "Consultoria", "Treinamento"],
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
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

        {/* Process Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#7c4dff]/5 to-[#b4ff4d]/5">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>Nosso Processo</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                Como trabalhamos com <span className="text-blue-600">Gestão de Tráfego</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                Um processo estruturado e comprovado para garantir os melhores resultados em suas campanhas.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "01",
                  title: "Análise e Diagnóstico",
                  description: "Analisamos seu negócio, concorrência e oportunidades de mercado.",
                },
                {
                  step: "02",
                  title: "Estratégia Personalizada",
                  description: "Desenvolvemos uma estratégia única baseada em seus objetivos.",
                },
                {
                  step: "03",
                  title: "Implementação",
                  description: "Criamos e lançamos campanhas otimizadas em todas as plataformas.",
                },
                {
                  step: "04",
                  title: "Otimização Contínua",
                  description: "Monitoramos e otimizamos constantemente para maximizar resultados.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6 mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-blue-600 text-white text-lg sm:text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-xs sm:text-sm text-[#7c4dff] mb-4">
                <Award className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span>Resultados</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                Resultados que <span className="text-blue-600">comprovam nossa expertise</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-sm sm:text-base">
                Números reais de clientes que confiaram em nossa gestão de tráfego.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  metric: "+300%",
                  title: "ROI Médio",
                  description: "Retorno sobre investimento em campanhas",
                  icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
                },
                {
                  metric: "+250%",
                  title: "Aumento em Conversões",
                  description: "Melhoria na taxa de conversão",
                  icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
                },
                {
                  metric: "-40%",
                  title: "Redução no CPA",
                  description: "Custo por aquisição otimizado",
                  icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
                },
                {
                  metric: "+500%",
                  title: "Crescimento em Leads",
                  description: "Aumento na geração de leads qualificados",
                  icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                },
              ].map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2 text-center"
                >
                  <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 mx-auto">
                    {result.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{result.metric}</h3>
                  <h4 className="text-base sm:text-lg font-semibold mb-2">{result.title}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-16 -left-16 sm:-top-24 sm:-left-24 h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 sm:-bottom-24 sm:-right-24 h-32 w-32 sm:h-48 sm:w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl"></div>

          <div className="container relative px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Pronto para aumentar suas vendas com tráfego qualificado?
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
                Agende uma consultoria gratuita e descubra como podemos transformar seus investimentos em tráfego pago
                em resultados reais para seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/orcamento">
                  <Button className="bg-white text-[#7c4dff] hover:bg-white/90 shadow-lg hover:shadow-white/30 transition-all duration-300 mt-6 sm:mt-8">
                    Solicitar orçamento{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de uma consultoria gratuita sobre gestão de tráfego.",
                      "_blank",
                    )
                  }
                  className="bg-[#b4ff4d] text-[#7c4dff] hover:bg-[#a3e644] font-medium shadow-lg hover:shadow-[#b4ff4d]/30 transition-all duration-300 mt-6 sm:mt-8"
                >
                  Consultoria gratuita{" "}
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
              Desenvolvido por <span className="font-medium text-[#7c4dff]">Caio Mega</span> (GETUP)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
