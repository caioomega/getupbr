"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#7c4dff] hover:bg-[#6a3afc] text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-gentle"
      size="icon"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
    </Button>
  )
}
