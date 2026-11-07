"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlyphLotteryProps {
  text: string
  className?: string
  iterations?: number
  speed?: number
  delay?: number
}

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§$%&/()=?*+#-_:;!~"

/**
 * Glyph Lottery — Letters that spin like slot reels and lock into a headline.
 */
export default function GlyphLottery({
  text,
  className,
  iterations = 12,
  speed = 40,
  delay = 200,
}: GlyphLotteryProps) {
  const [displayText, setDisplayText] = useState<string[]>(() => text.split(""))
  const [locked, setLocked] = useState<boolean[]>(() => text.split("").map(() => true))
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const chars = text.split("")
    setDisplayText(chars.map((c) => (c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])))
    setLocked(chars.map((c) => c === " "))

    const timeouts: NodeJS.Timeout[] = []

    chars.forEach((targetChar, index) => {
      if (targetChar === " ") {
        return
      }

      const letterDelay = delay + index * 50
      let count = 0

      const interval = setInterval(() => {
        setDisplayText((prev) => {
          const next = [...prev]
          next[index] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          return next
        })
        count++

        if (count >= iterations + index * 2) {
          clearInterval(interval)
          setDisplayText((prev) => {
            const next = [...prev]
            next[index] = targetChar
            return next
          })
          setLocked((prev) => {
            const next = [...prev]
            next[index] = true
            return next
          })
        }
      }, speed)

      timeouts.push(setTimeout(() => {}, letterDelay))
    })

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [text, iterations, speed, delay])

  return (
    <span className={cn("inline-flex flex-wrap font-inherit", className)}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={cn(
            "inline-block transition-colors duration-200",
            locked[i] ? "text-inherit" : "text-[#f26b45] font-mono select-none"
          )}
        >
          {char === " " ? "\u00A0" : displayText[i]}
        </span>
      ))}
    </span>
  )
}
