"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Search,
  Lightbulb,
  Rocket,
  BarChart3,
  Target,
  Users,
  TrendingUp,
  Award,
  Zap,
  ArrowUpRight,
} from "lucide-react"

export default function MetodologiaPage() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      title: "Análise e Diagnóstico",
      icon: <Search className="h-6 w-6 sm:h-8 sm:w-8" />,
      description:
        "Realizamos uma análise completa do seu negócio, concorrência e mercado para entender o cenário atual.",
      details: [
        "Auditoria completa da presença digital atual",
        "Análise da concorrência e benchmarking",
        "Identificação de oportunidades de mercado",
        "Definição de personas e público-alvo",
        "Análise de pontos fortes e fracos",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      number: "02",
      title: "Estratégia Personalizada",
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
      description:
        "Desenvolvemos uma estratégia única e personalizada baseada nos seus objetivos e necessidades específicas.",
      details: [
        "Definição de objetivos SMART",
        "Criação de estratégia de conteúdo",
        "Planejamento de campanhas de tráfego",
        "Definição de KPIs e métricas",
        "Cronograma detalhado de execução",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      number: "03",
      title: "Implementação",
      icon: <Rocket className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Colocamos a estratégia em prática com execução precisa e acompanhamento constante de cada etapa.",
      details: [
        "Criação de materiais e conteúdos",
        "Configuração de campanhas e ferramentas",
        "Desenvolvimento de identidade visual",
        "Lançamento coordenado das ações",
        "Testes A/B e otimizações iniciais",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      number: "04",
      title: "Monitoramento",
      icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Acompanhamos constantemente os resultados e fazemos ajustes para garantir o melhor desempenho.",
      details: [
        "Monitoramento em tempo real",
        "Relatórios detalhados de performance",
        "Análise de métricas e KPIs",
        "Identificação de oportunidades",
        "Ajustes e otimizações contínuas",
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      number: "05",
      title: "Otimização Contínua",
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
      description: "Refinamos constantemente as estratégias baseadas nos dados coletados para maximizar os resultados.",
      details: [
        "Análise de dados e insights",
        "Otimização baseada em performance",
        "Implementação de melhorias",
        "Escalabilidade das campanhas",
        "Relatórios de crescimento e ROI",
      ],
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center justify-between py-4 px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-lg sm:text-xl font-bold text-[#7c4dff] relative group">
              GETUP
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b4ff4d] group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>
          <Link href="/#about">
            <Button variant="outline" className="text-xs sm:text-sm bg-transparent">
              Voltar ao site
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#f8d7e9] via-[#f8d7e9] to-[#e9d7f8] py-16 sm:py-20 md:py-24">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-[#7c4dff]/10 blur-3xl animate-pulse"></div>
          <div
            className="absolute -top-10 -right-10 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-[#b4ff4d]/10 blur-3xl animate-pulse"
            style={{ animationDuration: "8s", animationDelay: "1s" }}
          ></div>

          <div className="container relative px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white/50 px-3 py-1 text-xs sm:text-sm text-[#7c4dff] backdrop-blur-sm animate-pulse-slow mb-6">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                <span>Nossa Metodologia</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#7c4dff] leading-tight mb-6">
                Metodologia{" "}
                <span className="relative inline-block">
                  GETUP
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-[#b4ff4d] animate-width-expand"></span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Nosso processo estruturado em 5 etapas garante resultados consistentes e mensuráveis para o seu negócio.
                Cada fase é cuidadosamente planejada para maximizar o retorno do seu investimento.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {[
                  {
                    icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-[#7c4dff]" />,
                    value: "5",
                    label: "Etapas",
                  },
                  {
                    icon: <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[#7c4dff]" />,
                    value: "100%",
                    label: "Personalizado",
                  },
                  {
                    icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#7c4dff]" />,
                    value: "+200%",
                    label: "ROI médio",
                  },
                  {
                    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#7c4dff]" />,
                    value: "+500",
                    label: "Projetos",
                  },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-2 sm:mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#7c4dff]/10 mx-auto">
                      {stat.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#7c4dff]">{stat.value}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Steps */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container relative px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7c4dff] mb-4">
                Nosso Processo em 5 Etapas
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Cada etapa é fundamental para o sucesso do seu projeto. Clique em cada uma para conhecer os detalhes.
              </p>
            </div>

            {/* Steps Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeStep === index
                      ? "bg-[#7c4dff] text-white shadow-lg"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span className="font-bold">{step.number}</span>
                  <span className="hidden sm:inline">{step.title}</span>
                </button>
              ))}
            </div>

            {/* Active Step Content */}
            <div className="max-w-4xl mx-auto">
              <div className={`bg-gradient-to-br ${steps[activeStep].color} p-1 rounded-2xl shadow-2xl`}>
                <div className="bg-white rounded-[calc(1rem-4px)] p-6 sm:p-8">
                  <div className="grid gap-8 md:grid-cols-2 items-center">
                    <div>
                      <div
                        className={`inline-flex items-center gap-3 ${steps[activeStep].bgColor} px-4 py-2 rounded-full mb-6`}
                      >
                        <div className={`${steps[activeStep].textColor}`}>{steps[activeStep].icon}</div>
                        <span className={`font-bold text-sm sm:text-base ${steps[activeStep].textColor}`}>
                          Etapa {steps[activeStep].number}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {steps[activeStep].title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
                        {steps[activeStep].description}
                      </p>
                      <div className="space-y-3">
                        {steps[activeStep].details.map((detail, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#7c4dff] mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="relative">
                      <div
                        className={`aspect-square rounded-2xl ${steps[activeStep].bgColor} p-8 flex items-center justify-center`}
                      >
                        <div className={`${steps[activeStep].textColor} opacity-20`}>
                          <div className="w-24 h-24 sm:w-32 sm:h-32">{steps[activeStep].icon}</div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                        <span className="text-lg sm:text-xl font-bold text-[#7c4dff]">{steps[activeStep].number}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Anterior</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className="flex items-center gap-2"
              >
                <span className="hidden sm:inline">Próximo</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#7c4dff]/5 to-[#b4ff4d]/5 relative overflow-hidden">
          <div className="container relative px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#7c4dff] mb-4">Resultados Comprovados</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Nossa metodologia já transformou centenas de negócios. Veja alguns dos resultados que alcançamos.
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  metric: "+250%",
                  title: "Aumento no Tráfego",
                  description: "Média de crescimento no tráfego orgânico dos nossos clientes",
                  icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
                  color: "text-green-600",
                  bg: "bg-green-50",
                },
                {
                  metric: "+180%",
                  title: "Conversão de Leads",
                  description: "Melhoria na taxa de conversão através de otimizações",
                  icon: <Target className="h-6 w-6 sm:h-8 sm:w-8" />,
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  metric: "+300%",
                  title: "ROI em Campanhas",
                  description: "Retorno sobre investimento em campanhas de tráfego pago",
                  icon: <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8" />,
                  color: "text-purple-600",
                  bg: "bg-purple-50",
                },
                {
                  metric: "95%",
                  title: "Satisfação dos Clientes",
                  description: "Taxa de satisfação e renovação de contratos",
                  icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                },
                {
                  metric: "24h",
                  title: "Tempo de Resposta",
                  description: "Tempo médio para resposta e início dos projetos",
                  icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
                  color: "text-yellow-600",
                  bg: "bg-yellow-50",
                },
                {
                  metric: "+500",
                  title: "Projetos Entregues",
                  description: "Número total de projetos concluídos com sucesso",
                  icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
                  color: "text-red-600",
                  bg: "bg-red-50",
                },
              ].map((result, index) => (
                <div
                  key={index}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 ${result.bg} rounded-xl mb-4`}
                  >
                    <div className={result.color}>{result.icon}</div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{result.metric}</h3>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{result.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container relative px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Pronto para aplicar nossa metodologia no seu negócio?
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-8 leading-relaxed">
                Agende uma consulta gratuita e descubra como nossa metodologia pode transformar seus resultados
                digitais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/orcamento">
                  <Button className="bg-white text-[#7c4dff] hover:bg-white/90 shadow-lg hover:shadow-white/30 transition-all duration-300">
                    Solicitar orçamento{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Gostaria de conhecer mais sobre a metodologia GETUP."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#b4ff4d] text-[#7c4dff] hover:bg-[#a3e644] font-medium shadow-lg hover:shadow-[#b4ff4d]/30 transition-all duration-300">
                    Falar no WhatsApp{" "}
                    <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            Desenvolvido por <span className="font-medium text-[#7c4dff]">Caio Mega</span> (GETUP)
          </div>
        </div>
      </footer>
    </div>
  )
}
