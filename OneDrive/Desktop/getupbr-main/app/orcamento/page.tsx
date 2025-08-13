"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Award,
  Zap,
  ArrowUpRight,
} from "lucide-react"

export default function OrcamentoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    description: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappNumber = "5519994871568"
    const message = `*Solicitação de Orçamento - GETUP*

*Dados do Cliente:*
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}
Website: ${formData.website}

*Serviços de Interesse:*
${formData.services.join(", ")}

*Orçamento:* ${formData.budget}
*Prazo:* ${formData.timeline}

*Descrição do Projeto:*
${formData.description}`

    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`, "_blank")
  }

  const services = [
    "Gestão de Tráfego",
    "Design Criativo",
    "Marketing Digital",
    "Gestão de Redes Sociais",
    "Consultoria Estratégica",
    "Produção de Conteúdo",
    "Desenvolvimento Web",
    "Tráfego Pago",
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
          <Link href="/#contact">
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
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white/50 px-3 py-1 text-xs sm:text-sm text-[#7c4dff] backdrop-blur-sm animate-pulse-slow mb-6">
                <Sparkles className="mr-1 h-3 w-3 sm:h-3.5 sm:w-3.5 animate-spin-slow" />
                <span>Solicite seu orçamento</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-[#7c4dff] leading-tight mb-6">
                Vamos transformar sua{" "}
                <span className="relative inline-block">
                  presença digital
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 sm:h-1 bg-[#b4ff4d] animate-width-expand"></span>
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Preencha o formulário abaixo e receba uma proposta personalizada para o seu projeto. Nossa equipe
                entrará em contato em até 24 horas.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
                {[
                  {
                    icon: <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-[#7c4dff]" />,
                    value: "+200%",
                    label: "ROI médio",
                  },
                  {
                    icon: <Target className="h-5 w-5 sm:h-6 sm:w-6 text-[#7c4dff]" />,
                    value: "24h",
                    label: "Resposta",
                  },
                  { icon: <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#7c4dff]" />, value: "+50", label: "Projetos" },
                  {
                    icon: <Users className="h-5 w-5 sm:h-6 sm:w-6 text-[#7c4dff]" />,
                    value: "+500",
                    label: "Clientes",
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

        {/* Form Section */}
        <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-[#7c4dff]/5 blur-3xl animate-pulse-slow"></div>
          <div
            className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#b4ff4d]/5 blur-3xl animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container relative px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Form */}
                <div className="lg:col-span-2">
                  <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-[#7c4dff]/10">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#7c4dff] mb-6">Formulário de Orçamento</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Dados Pessoais */}
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-4">Dados Pessoais</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-xs sm:text-sm font-medium">
                              Nome completo *
                            </label>
                            <input
                              id="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2"
                              placeholder="Seu nome completo"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-xs sm:text-sm font-medium">
                              Email *
                            </label>
                            <input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2"
                              placeholder="seu@email.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="phone" className="text-xs sm:text-sm font-medium">
                              Telefone *
                            </label>
                            <input
                              id="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2"
                              placeholder="(00) 00000-0000"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="company" className="text-xs sm:text-sm font-medium">
                              Empresa
                            </label>
                            <input
                              id="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2"
                              placeholder="Nome da sua empresa"
                            />
                          </div>
                        </div>
                        <div className="mt-4 space-y-2">
                          <label htmlFor="website" className="text-xs sm:text-sm font-medium">
                            Website atual
                          </label>
                          <input
                            id="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2"
                            placeholder="https://seusite.com.br"
                          />
                        </div>
                      </div>

                      {/* Serviços */}
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-4">Serviços de Interesse *</h3>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {services.map((service) => (
                            <div key={service} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                id={service}
                                checked={formData.services.includes(service)}
                                onChange={() => handleServiceChange(service)}
                                className="h-4 w-4 text-[#7c4dff] focus:ring-[#7c4dff] border-gray-300 rounded"
                              />
                              <label htmlFor={service} className="text-xs sm:text-sm font-medium">
                                {service}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Orçamento e Prazo */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="budget" className="text-xs sm:text-sm font-medium">
                            Orçamento estimado *
                          </label>
                          <select
                            id="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2"
                            required
                          >
                            <option value="">Selecione uma faixa</option>
                            <option value="R$ 1.000 - R$ 5.000">R$ 1.000 - R$ 5.000</option>
                            <option value="R$ 5.000 - R$ 10.000">R$ 5.000 - R$ 10.000</option>
                            <option value="R$ 10.000 - R$ 25.000">R$ 10.000 - R$ 25.000</option>
                            <option value="R$ 25.000 - R$ 50.000">R$ 25.000 - R$ 50.000</option>
                            <option value="Acima de R$ 50.000">Acima de R$ 50.000</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="timeline" className="text-xs sm:text-sm font-medium">
                            Prazo desejado *
                          </label>
                          <select
                            id="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="flex h-9 sm:h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2"
                            required
                          >
                            <option value="">Selecione o prazo</option>
                            <option value="Urgente (até 1 semana)">Urgente (até 1 semana)</option>
                            <option value="1-2 semanas">1-2 semanas</option>
                            <option value="1 mês">1 mês</option>
                            <option value="2-3 meses">2-3 meses</option>
                            <option value="Mais de 3 meses">Mais de 3 meses</option>
                          </select>
                        </div>
                      </div>

                      {/* Descrição */}
                      <div className="space-y-2">
                        <label htmlFor="description" className="text-xs sm:text-sm font-medium">
                          Descrição do projeto *
                        </label>
                        <textarea
                          id="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          className="flex min-h-[100px] sm:min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c4dff] focus-visible:ring-offset-2"
                          placeholder="Descreva detalhadamente seu projeto, objetivos, público-alvo e qualquer informação relevante..."
                          required
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white relative overflow-hidden shadow-lg shadow-[#7c4dff]/20 hover:shadow-[#7c4dff]/40 transition-all duration-300"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Enviar solicitação{" "}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-[#7c4dff] to-[#6a3afc] transition-transform duration-300 group-hover:scale-105"></span>
                      </Button>
                    </form>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Processo */}
                  <div className="bg-gradient-to-br from-[#7c4dff]/5 to-[#b4ff4d]/5 p-6 rounded-xl border border-[#7c4dff]/10">
                    <h3 className="text-base sm:text-lg font-bold text-[#7c4dff] mb-4">Nosso Processo</h3>
                    <div className="space-y-4">
                      {[
                        { step: "1", title: "Análise", desc: "Analisamos seu negócio e objetivos" },
                        { step: "2", title: "Estratégia", desc: "Criamos uma estratégia personalizada" },
                        { step: "3", title: "Proposta", desc: "Enviamos uma proposta detalhada" },
                        { step: "4", title: "Execução", desc: "Colocamos o plano em ação" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#7c4dff] text-white text-xs sm:text-sm font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                            <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Garantias */}
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-[#7c4dff]/10">
                    <h3 className="text-base sm:text-lg font-bold text-[#7c4dff] mb-4">Nossas Garantias</h3>
                    <div className="space-y-3">
                      {[
                        "Resposta em até 24 horas",
                        "Proposta sem compromisso",
                        "Consultoria inicial gratuita",
                        "Suporte especializado",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#7c4dff]" />
                          <span className="text-xs sm:text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-6 rounded-xl text-white relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-white/10 blur-xl"></div>
                    <div className="relative">
                      <Zap className="h-6 w-6 sm:h-8 sm:w-8 mb-3" />
                      <h3 className="text-base sm:text-lg font-bold mb-2">Precisa de ajuda?</h3>
                      <p className="text-xs sm:text-sm text-white/80 mb-4">
                        Nossa equipe está pronta para esclarecer suas dúvidas.
                      </p>
                      <a
                        href="https://api.whatsapp.com/send?phone=5519994871568&text=Olá! Preciso de ajuda com o orçamento."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-white text-[#7c4dff] hover:bg-white/90 w-full mt-6 sm:mt-8">
                          Falar no WhatsApp{" "}
                          <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
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
