"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, ArrowRight, ArrowUpRight, CheckCircle, Zap, Target, BarChart3 } from "lucide-react"

export default function OutsidersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c4dff] via-[#b4ff4d] to-[#7c4dff]"></div>
          <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-[#7c4dff]/10 blur-3xl"></div>
          <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-[#b4ff4d]/10 blur-3xl"></div>

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
                  Outsiders{" "}
                  <span className="text-[#b4ff4d] relative">
                    Co.
                    <span className="absolute -bottom-1 left-0 right-0 h-1 bg-white"></span>
                  </span>
                </h1>
                <p className="text-lg text-white/80 md:text-xl max-w-2xl">
                  Desenvolvimento completo de identidade visual para marca de moda voltada para pessoas que não seguem a
                  multidão.
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-[#b4ff4d]/30 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-[#7c4dff]/30 blur-xl"></div>
                <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#7c4dff] to-[#6a3afc] p-1 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-black">
                    <div className="relative h-full w-full">
                      <Image
                        src="/images/outsiders-logo.png"
                        alt="Outsiders Logo"
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
                  Construção de uma marca para <span className="text-purple-600">quem não segue a multidão</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  "Outsiders" refere-se a quem está fora da norma, os "excluídos" ou aqueles que não seguem a multidão.
                  "Co." é uma abreviação de "Company" (empresa), sugerindo uma marca para pessoas que têm um estilo
                  único e independente.
                </p>
                <p className="text-muted-foreground mb-6">
                  A Outsiders Co. importa as melhores peças das marcas mais desejadas, trazendo exclusividade e
                  qualidade para quem busca se destacar.
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
                      <p className="font-medium">Posicionamento de Marca</p>
                      <p className="text-muted-foreground">
                        Estratégia de comunicação alinhada ao público-alvo exclusivo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Materiais de Embalagem</p>
                      <p className="text-muted-foreground">Criação de embalagens e materiais promocionais exclusivos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative mx-auto w-full max-w-md">
                  <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-purple-100 blur-xl"></div>
                  <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-purple-100 blur-xl"></div>
                  <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 p-1 shadow-xl">
                    <div className="h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white">
                      <Image
                        src="/images/outsiders-brand.png"
                        alt="Construção da marca Outsiders"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-purple-500 shadow-lg flex items-center justify-center">
                    <Target className="h-10 w-10 text-white" />
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Paletas de Cores</h2>
              <p className="mt-4 text-muted-foreground">
                Desenvolvemos duas paletas de cores para a Outsiders Co., permitindo versatilidade nas aplicações da
                marca.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/outsiders-colors-purple.png"
                  alt="Paleta de cores roxa"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Paleta Principal</h3>
                  <p className="text-muted-foreground">
                    Baseada em tons de roxo, ciano e preto, transmitindo exclusividade e modernidade.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/outsiders-colors-blue.png"
                  alt="Paleta de cores azul"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Paleta Alternativa</h3>
                  <p className="text-muted-foreground">
                    Baseada em tons de azul, verde e preto, oferecendo versatilidade para diferentes aplicações.
                  </p>
                </div>
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
                  A tipografia escolhida para a Outsiders Co. é a Space Grotesk, uma fonte moderna e versátil que
                  transmite personalidade e atitude, alinhada com o posicionamento da marca.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Moderna e Versátil</p>
                      <p className="text-muted-foreground">Funciona bem em diferentes tamanhos e aplicações</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c4dff] text-white mt-1">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium">Personalidade Única</p>
                      <p className="text-muted-foreground">
                        Transmite atitude e exclusividade, valores centrais da marca
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/outsiders-typography.png"
                  alt="Tipografia Space Grotesk"
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
                  O logotipo da Outsiders Co. foi desenvolvido para ser versátil e impactante em diferentes aplicações.
                </p>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/outsiders-logo.png"
                  alt="Variações do logo Outsiders"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
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
                Conheça algumas das aplicações da identidade visual da Outsiders Co. em diferentes materiais.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/outsiders-packaging.png"
                  alt="Embalagem Outsiders"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Embalagem</h3>
                  <p className="text-muted-foreground">
                    Embalagem exclusiva em plástico preto com o logotipo da marca em destaque.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/outsiders-promo.png"
                  alt="Material promocional Outsiders"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Material Promocional</h3>
                  <p className="text-muted-foreground">
                    Peças promocionais para divulgação da marca nas redes sociais e outros canais.
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
                A nova identidade visual fortaleceu o posicionamento da Outsiders Co. no mercado de moda exclusiva.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reconhecimento</h3>
                <p className="text-muted-foreground">
                  Aumento significativo no reconhecimento da marca no mercado de moda exclusiva, estabelecendo uma
                  presença visual forte e consistente.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Posicionamento</h3>
                <p className="text-muted-foreground">
                  Consolidação do posicionamento da empresa como exclusiva e autêntica no mercado de moda para pessoas
                  que buscam se destacar.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-[#7c4dff]/30 hover:shadow-lg transition-all hover:-translate-y-2">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Diferenciação</h3>
                <p className="text-muted-foreground">
                  Identidade visual que destaca a Outsiders Co. da concorrência, transmitindo exclusividade e
                  personalidade única.
                </p>
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
                    alt="Kivolt Logo"
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center items-center p-6">
                  <Link href="/portfolio/casabrasil">
                    <Button className="bg-[#7c4dff] hover:bg-[#6a3afc] text-white">Ver mais</Button>
                  </Link>
                </div>

                <div className="p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold group-hover:text-[#7c4dff] transition-colors">Casa Brasil</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-[#7c4dff]/10 text-[#7c4dff]">Gastronomia</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">O cantinho brasileiro na cidade.</p>
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

