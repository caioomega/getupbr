"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Linkedin, Twitter, Mail, ArrowUpRight, Menu, X, Users } from "lucide-react"

export default function EquipePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [animatedMembers, setAnimatedMembers] = useState([])

  // Dados da equipe
  const teamMembers = [
    {
      id: 1,
      name: "Gabriel Gonçalves",
      role: "CEO & Design",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8056.PNG-088m3YiX7o2IVigDd6E5WVMkVLpKjI.png",
      bio: "Especialista em design e estratégia digital, Gabriel lidera a GETUP com visão inovadora e foco em resultados excepcionais para nossos clientes.",
      specialties: ["Design UI/UX", "Estratégia Digital", "Gestão de Projetos"],
      department: "Liderança",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "gabriel@getup.com.br",
      },
    },
    {
      id: 2,
      name: "Gabriel Gomes",
      role: "Especialista em Tráfego Pago",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8162.PNG-Niyaji0Z0xxz3pSFADEaIH7M5EHcZA.png",
      bio: "Especializado em estratégias de mídia paga, Gabriel desenvolve campanhas de alta performance que maximizam o ROI dos nossos clientes.",
      specialties: ["Google Ads", "Meta Ads", "LinkedIn Ads"],
      department: "Marketing",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "gomes@getup.com.br",
      },
    },
    {
      id: 3,
      name: "Caio Hilário",
      role: "Desenvolvedor",
      image: "/images/getup-mobile.png",
      bio: "Desenvolvedor talentoso especializado em criar experiências digitais modernas e responsivas utilizando as mais recentes tecnologias front-end.",
      specialties: ["Next.js", "Front-end", "React"],
      department: "Desenvolvimento",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "caio@getup.com.br",
      },
    },
  ]

  // Filtrar membros da equipe com base no departamento selecionado
  const filteredMembers =
    activeFilter === "Todos" ? teamMembers : teamMembers.filter((member) => member.department === activeFilter)

  // Departamentos únicos para o filtro
  const departments = ["Todos", ...new Set(teamMembers.map((member) => member.department))]

  // Efeito para animar os membros da equipe quando o filtro muda
  useEffect(() => {
    setAnimatedMembers([])
    const timer = setTimeout(() => {
      setAnimatedMembers(filteredMembers)
    }, 100)
    return () => clearTimeout(timer)
  }, [activeFilter, filteredMembers])

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
                  <span>Nossa Equipe</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
                  Conheça os{" "}
                  <span className="text-[#7c4dff] relative">
                    talentos
                    <span className="absolute relative">
                      <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#b4ff4d]"></span>
                    </span>
                  </span>{" "}
                  por trás da GETUP
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl max-w-2xl">
                  Nossa equipe multidisciplinar combina experiência, criatividade e paixão por resultados para
                  transformar a presença digital do seu negócio.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/getup-logo-black.png"
                        alt="GETUP Marketing Digital"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#b4ff4d] shadow-lg flex items-center justify-center">
                  <Users className="h-10 w-10 text-[#7c4dff]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container">
            <div className="flex flex-wrap gap-3 justify-center">
              {departments.map((department) => (
                <Button
                  key={department}
                  variant={activeFilter === department ? "default" : "outline"}
                  className={`rounded-full ${activeFilter === department ? "bg-[#7c4dff] text-white" : "border-[#7c4dff]/30 text-[#7c4dff] hover:bg-[#7c4dff]/10"}`}
                  onClick={() => setActiveFilter(department)}
                >
                  {department}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-[#7c4dff]/30 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex gap-3">
                        <a
                          href={member.social.linkedin}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[#7c4dff] transition-colors"
                          aria-label={`LinkedIn de ${member.name}`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[#7c4dff] transition-colors"
                          aria-label={`Twitter de ${member.name}`}
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a
                          href={`mailto:${member.social.email}`}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[#7c4dff] transition-colors"
                          aria-label={`Email de ${member.name}`}
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-[#7c4dff] px-2.5 py-0.5 text-xs font-medium text-white">
                        {member.department}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-[#7c4dff] font-medium">{member.role}</p>
                    </div>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Especialidades:</p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full bg-[#7c4dff]/10 px-2.5 py-0.5 text-xs font-medium text-[#7c4dff]"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section with Animation */}
        <section className="py-20 bg-gradient-to-br from-[#7c4dff]/5 to-[#b4ff4d]/5">
          <div className="container">
            <div className="text-center mb-16 max-w3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Nossos Valores</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Princípios que guiam nosso trabalho
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Mais do que uma equipe, somos um grupo unido por valores e propósitos compartilhados
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "shield",
                  title: "Integridade",
                  description:
                    "Agimos com transparência e honestidade em todas as nossas relações, garantindo a confiança dos nossos clientes e parceiros.",
                },
                {
                  icon: "sparkles",
                  title: "Inovação",
                  description:
                    "Buscamos constantemente novas ideias e soluções criativas para os desafios dos nossos clientes, mantendo-nos na vanguarda do marketing digital.",
                },
                {
                  icon: "trophy",
                  title: "Excelência",
                  description:
                    "Comprometemo-nos com a qualidade em tudo o que fazemos, buscando sempre superar expectativas e entregar resultados excepcionais.",
                },
                {
                  icon: "users",
                  title: "Colaboração",
                  description:
                    "Trabalhamos em estreita parceria com nossos clientes, construindo relacionamentos duradouros baseados em confiança e resultados compartilhados.",
                },
                {
                  icon: "compass",
                  title: "Adaptabilidade",
                  description:
                    "Evoluímos constantemente em um mercado digital em rápida mudança, adaptando nossas estratégias para garantir os melhores resultados.",
                },
                {
                  icon: "target",
                  title: "Impacto",
                  description:
                    "Focamos em gerar resultados tangíveis que impulsionam o crescimento dos negócios dos nossos clientes e criam valor real.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#7c4dff]/10 text-[#7c4dff] hover:bg-[#7c4dff]/20 transition-all">
                    {value.icon === "shield" && (
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
                        className="h-8 w-8"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                        <path d="m14.5 9-5 5"></path>
                        <path d="m9.5 9 5 5"></path>
                      </svg>
                    )}
                    {value.icon === "sparkles" && (
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
                        className="h-8 w-8"
                      >
                        <path d="M12 2v4"></path>
                        <path d="M12 18v4"></path>
                        <path d="M4.93 4.93l2.83 2.83"></path>
                        <path d="M16.24 16.24l2.83 2.83"></path>
                        <path d="M2 12h4"></path>
                        <path d="M18 12h4"></path>
                        <path d="M4.93 19.07l2.83-2.83"></path>
                        <path d="M16.24 7.76l2.83-2.83"></path>
                      </svg>
                    )}
                    {value.icon === "trophy" && (
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
                        className="h-8 w-8"
                      >
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                        <path d="M4 22h16"></path>
                        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                      </svg>
                    )}
                    {value.icon === "users" && (
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
                        className="h-8 w-8"
                      >
                        <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <circle cx="12" cy="10" r="2"></circle>
                        <line x1="8" x2="8" y1="2" y2="4"></line>
                        <line x1="16" x2="16" y1="2" y2="4"></line>
                      </svg>
                    )}
                    {value.icon === "compass" && (
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
                        className="h-8 w-8"
                      >
                        <path d="M2 12h20"></path>
                        <path d="M12 2v20"></path>
                        <path d="m4.93 4.93 14.14 14.14"></path>
                        <path d="m19.07 4.93-14.14 14.14"></path>
                      </svg>
                    )}
                    {value.icon === "target" && (
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
                        className="h-8 w-8"
                      >
                        <path d="M12 3c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C10.21 6.04 10 5.53 10 5c0-.53.21-1.04.59-1.41C10.96 3.21 11.47 3 12 3z"></path>
                        <path d="M12 14c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z"></path>
                        <path d="M20 9c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z"></path>
                        <path d="M4 9c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C2.21 12.04 2 11.53 2 11c0-.53.21-1.04.59-1.41C2.96 9.21 3.47 9 4 9z"></path>
                        <path d="M6.54 5.46c.37.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59.53 0 1.04.21 1.41.59z"></path>
                        <path d="M17.46 5.46c.37.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59.53 0 1.04.21 1.41.59z"></path>
                        <path d="M6.54 17.54c.37.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59.53 0 1.04.21 1.41.59z"></path>
                        <path d="M17.46 17.54c.37.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59.53 0 1.04.21 1.41.59z"></path>
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-[#b4ff4d]/30 blur-3xl"></div>

          <div className="container relative text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Junte-se a nós</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                Vamos transformar sua presença digital juntos
              </h2>
              <p className="text-white/80 text-lg">
                Nossa equipe está pronta para ajudar seu negócio a alcançar novos patamares no mundo digital.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button className="bg-white text-[#7c4dff] hover:bg-white/90 group">
                  Fale com nossa equipe{" "}
                  <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20 transition-colors">
                  Ver nossos projetos
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

