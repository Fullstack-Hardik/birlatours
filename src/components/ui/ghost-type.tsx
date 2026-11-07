"use client"

import React, { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GhostTypeProps {
  phrases?: Array<{
    typed: string
    ghost: string
  }>
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
  typedClassName?: string
  ghostClassName?: string
  cursorClassName?: string
}

const defaultPhrases = [
  { typed: "Birla Tour & Travels", ghost: " — Luxury Uttarakhand Cabs" },
  { typed: "Pristine Innova Crysta", ghost: " Across Haridwar & Dehradun" },
  { typed: "Sacred Char Dham Yatra", ghost: " With Veteran Chauffeurs" },
  { typed: "24x7 Jolly Grant Airport", ghost: " Taxi & VIP Pilot Escorts" },
]

/**
 * Ghost Type — A headline that writes itself with AI-style ghost completions.
 */
export default function GhostType({
  phrases = defaultPhrases,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 2200,
  className,
  typedClassName,
  ghostClassName,
  cursorClassName,
}: GhostTypeProps) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showGhost, setShowGhost] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const fullTyped = currentPhrase.typed

    let timer: NodeJS.Timeout

    if (!isDeleting) {
      if (currentText.length < fullTyped.length) {
        timer = setTimeout(() => {
          setCurrentText(fullTyped.slice(0, currentText.length + 1))
        }, typingSpeed)
      } else {
        // Finished typing
        setShowGhost(true)
        timer = setTimeout(() => {
          setShowGhost(false)
          setIsDeleting(true)
        }, pauseDuration)
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(fullTyped.slice(0, currentText.length - 1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  const currentPhrase = phrases[phraseIndex]

  return (
    <span className={cn("inline-flex flex-wrap items-baseline font-inherit leading-tight", className)}>
      <span className={cn("text-stone-950 font-normal transition-colors", typedClassName)}>
        {currentText}
      </span>

      {/* Blinking AI Cursor */}
      <span
        className={cn(
          "inline-block w-[3px] h-[0.9em] ml-1 bg-[#f26b45] animate-pulse align-middle",
          cursorClassName
        )}
        aria-hidden="true"
      />

      {/* Ghost text completion suggestion */}
      <span
        className={cn(
          "text-stone-400/70 italic transition-opacity duration-300 ml-1.5 select-none",
          showGhost ? "opacity-100" : "opacity-0",
          ghostClassName
        )}
      >
        {currentPhrase.ghost}
      </span>
    </span>
  )
}

