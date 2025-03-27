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
  Coffee,
  Utensils,
  Beer,
} from "lucide-react"

export default function CasaBrasilPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-900 to-green-950 py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-amber-500 to-[#7c4dff]"></div>
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl"></div>

          <div className="container relative">
            <Link href="/" className="inline-flex items-center text-white hover:text-white/80 transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Voltar para a página inicial</span>
            </Link>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white mb-4">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Projeto de Branding</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-white">
                  Casa{" "}
                  <span className="text-amber-500 relative">
                    Brasil
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-white"></span>
                  </span>
                </h1>
                <p className="text-lg text-white/80 md:text-xl max-w-2xl">
                  Desenvolvimento completo de identidade visual para o cantinho brasileiro na cidade, trazendo a energia
                  de celebração que só o Brasil sabe oferecer.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-amber-500/30 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-amber-500/30 blur-xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 to-green-900 p-1 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/casabrasil-logo-orange.png"
                        alt="Casa Brasil Logo"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-amber-500 shadow-lg flex items-center justify-center">
                  <Beer className="h-10 w-10 text-green-900" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Projeto */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                  <Zap className="mr-1 h-3.5 w-3.5" />
                  <span>Sobre o Projeto</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">
                  O <span className="text-green-800">cantinho brasileiro</span> na nossa cidade
                </h2>
                <p className="text-muted-foreground mb-6">
                  A Casa Brasil é o cantinho brasileiro na nossa cidade, feito para garantir risadas, brindes e muita
                  diversão. Um espaço que celebra a cultura e gastronomia brasileira com autenticidade e alegria.
                </p>
                <p className="text-muted-foreground mb-6">
                  Aqui, cada detalhe foi pensado para trazer o aconchego e a energia de celebração que só o Brasil sabe
                  oferecer.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Identidade Visual Completa</p>
                      <p className="text-muted-foreground">
                        Desenvolvimento de logo, tipografia, paleta de cores e aplicações
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Materiais para o Estabelecimento</p>
                      <p className="text-muted-foreground">
                        Criação de placas, copos, cardápios e outros materiais para o espaço
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Posicionamento de Marca</p>
                      <p className="text-muted-foreground">
                        Estratégia de comunicação que transmite a autenticidade e alegria brasileira
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative mx-auto w-full max-w-md">
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-amber-100 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-green-100 blur-xl"></div>
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 to-green-800 p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white">
                      <Image
                        src="/images/casabrasil-brand.png"
                        alt="Conceito Casa Brasil"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-amber-500 shadow-lg flex items-center justify-center">
                    <Utensils className="h-10 w-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paleta de Cores */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Identidade Visual</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Paleta de Cores</h2>
              <p className="mt-4 text-muted-foreground">
                A paleta de cores da Casa Brasil foi inspirada nas cores da bandeira brasileira, com um toque de
                rusticidade e aconchego.
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/casabrasil-colors.png"
                alt="Paleta de cores Casa Brasil"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Cores Principais</h3>
                <p className="text-muted-foreground">
                  O verde escuro (#0F3508) representa a natureza brasileira, enquanto o âmbar (#D57F1A) traz o calor e a
                  energia do nosso povo. Essas cores se complementam para criar uma identidade visual acolhedora e
                  autêntica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tipografia e Logo */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Tipografia</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Space Grotesk</h2>
                <p className="text-muted-foreground mb-6">
                  A tipografia escolhida para a Casa Brasil é a Space Grotesk, uma fonte moderna e versátil que,
                  combinada com elementos decorativos inspirados na cultura brasileira, cria uma identidade visual única
                  e memorável.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Legibilidade e Personalidade</p>
                      <p className="text-muted-foreground">
                        Perfeita para aplicações em diversos materiais, mantendo a identidade da marca
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Elementos Decorativos</p>
                      <p className="text-muted-foreground">
                        Ícones que representam a cultura brasileira: café, cachaça, plantas tropicais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/casabrasil-typography.png"
                  alt="Tipografia Casa Brasil"
                  width={600}
                  height={600}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>

            <div className="mt-20">
              <div className="text-center mb-12">
                <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  <span>Logotipo</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">Variações do Logo</h2>
                <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                  O logotipo da Casa Brasil foi desenvolvido em formato circular, remetendo a tampas de garrafa e copos,
                  com duas variações principais de cores.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/casabrasil-logo-green.png"
                    alt="Logo Casa Brasil - Versão Verde"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Versão Verde</h3>
                    <p className="text-muted-foreground">
                      Fundo verde com elementos em branco e âmbar, ideal para aplicações em ambientes claros.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/casabrasil-logo-orange.png"
                    alt="Logo Casa Brasil - Versão Âmbar"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Versão Âmbar</h3>
                    <p className="text-muted-foreground">
                      Fundo âmbar com elementos em branco e borda verde, trazendo mais destaque e calor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aplicações */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Aplicações</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Materiais Desenvolvidos</h2>
              <p className="mt-4 text-muted-foreground">
                Conheça algumas das aplicações da identidade visual da Casa Brasil em diferentes materiais.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/casabrasil-beer.png"
                  alt="Caneca Casa Brasil"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Canecas e Copos</h3>
                  <p className="text-muted-foreground">
                    Aplicação do logo em canecas de chopp e copos, trazendo a identidade da marca para a experiência do
                    cliente.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/casabrasil-sign.png"
                  alt="Placa Casa Brasil"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Placa Externa</h3>
                  <p className="text-muted-foreground">
                    Placa para fachada do estabelecimento, com design que remete aos bares tradicionais brasileiros.
                  </p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Impacto do Projeto</h2>
              <p className="mt-4 text-muted-foreground">
                A identidade visual da Casa Brasil ajudou a estabelecer o local como referência em gastronomia
                brasileira na cidade.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-800">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reconhecimento</h3>
                <p className="text-muted-foreground">
                  Estabelecimento rapidamente reconhecido como o autêntico cantinho brasileiro na cidade, com identidade
                  visual marcante e memorável.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-800">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Posicionamento</h3>
                <p className="text-muted-foreground">
                  Consolidação do posicionamento como espaço de celebração e encontro, transmitindo a energia e alegria
                  da cultura brasileira.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-800">
                  <Coffee className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Experiência</h3>
                <p className="text-muted-foreground">
                  Criação de uma experiência completa e coerente para os clientes, desde a comunicação visual até os
                  materiais utilizados no estabelecimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-amber-500/30 blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-amber-500/30 blur-3xl"></div>

          <div className="container relative">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm text-white">
                  <Zap className="mr-1 h-3.5 w-3.5" />
                  <span>Vamos começar</span>
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Pronto para transformar sua marca?
                </h2>
                <p className="text-white/80">
                  Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a se destacar no
                  mercado.
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
                      <h3 className="text-2xl font-bold text-white">Consultoria de Branding</h3>
                      <p className="text-white/80">
                        Agende uma sessão gratuita com nossos especialistas para analisar sua marca e identificar
                        oportunidades.
                      </p>
                      <Button className="bg-amber-500 text-green-900 hover:bg-amber-400 group font-medium">
                        Agendar agora{" "}
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-amber-500 shadow-lg flex items-center justify-center">
                  <Sparkles className="h-10 w-10 text-green-900" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outros Projetos */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <div className="inline-flex items-center rounded-full border border-[#7c4dff]/20 bg-white px-3 py-1 text-sm text-[#7c4dff] mb-4">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                <span>Portfólio</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Outros Projetos</h2>
              <p className="mt-4 text-muted-foreground">Conheça outros projetos desenvolvidos pela nossa equipe</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Projeto Kivolt */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/kivolt-logo.png"
                    alt="Projeto Kivolt"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center p-6">
                  <Link href="/portfolio/kivolt">
                    <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white">Ver mais</Button>
                  </Link>
                </div>

                <div className="p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold group-hover:text-[#7c4dff] transition-colors">Kivolt</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">Energia</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Identidade visual para empresa do setor elétrico.
                  </p>
                </div>
              </div>

              {/* Projeto Outsiders */}
              <div className="group relative overflow-hidden rounded-xl bg-white border border-[#7c4dff]/10 shadow-md hover:shadow-xl transition-all duration-500 hover:border-[#7c4dff] hover:-translate-y-1">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/outsiders-logo.png"
                    alt="Projeto Outsiders"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center p-6">
                  <Link href="/portfolio/outsiders">
                    <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white">Ver mais</Button>
                  </Link>
                </div>

                <div className="p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold group-hover:text-[#7c4dff] transition-colors">Outsiders</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">Moda</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    Marca de moda para quem não segue a multidão.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/#portfolio">
                <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white">
                  Ver todos os projetos{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
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

