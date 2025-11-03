"use client"

import { useEffect } from "react"

interface UseKeyboardNavigationProps {
  onNavigate: (direction: "next" | "prev") => void
  enabled?: boolean
}

/**
 * Hook para navegação por teclado entre seções da apresentação
 * Suporta: Seta Direita (próxima), Seta Esquerda (anterior), J/K (vim-style)
 */
export function useKeyboardNavigation({ onNavigate, enabled = true }: UseKeyboardNavigationProps) {
  useEffect(() => {
    if (!enabled) return

    const handleKeyPress = (event: KeyboardEvent) => {
      const { key } = event

      // Setas do teclado
      if (key === "ArrowRight") {
        event.preventDefault()
        onNavigate("next")
      } else if (key === "ArrowLeft") {
        event.preventDefault()
        onNavigate("prev")
      }

      // Vim-style navigation (opcional)
      if (key === "j" || key === "J") {
        event.preventDefault()
        onNavigate("next")
      } else if (key === "k" || key === "K") {
        event.preventDefault()
        onNavigate("prev")
      }

      // Page Down / Page Up
      if (key === "PageDown") {
        event.preventDefault()
        onNavigate("next")
      } else if (key === "PageUp") {
        event.preventDefault()
        onNavigate("prev")
      }
    }

    // Adiciona listener apenas se o elemento focado não é um input
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      const tagName = target?.tagName.toLowerCase()

      // Não interceptar em inputs, textareas, ou contenteditable
      if (tagName === "input" || tagName === "textarea" || target?.contentEditable === "true") {
        return
      }

      handleKeyPress(event)
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onNavigate, enabled])
}
