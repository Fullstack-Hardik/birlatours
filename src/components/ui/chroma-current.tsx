"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface ChromaCurrentProps {
  className?: string
  dotSize?: number
  gap?: number
  glowColor?: string
  opacity?: number
}

/**
 * Chroma Current — Currents of light flowing across a grid of glowing dots.
 * Creates an elegant, transparent orange/amber/white fluid light effect.
 */
export default function ChromaCurrent({
  className,
  dotSize = 2,
  gap = 26,
  glowColor = "rgba(242, 107, 69, 0.45)",
  opacity = 0.65,
}: ChromaCurrentProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      width = canvas.width = canvas.parentElement.clientWidth
      height = canvas.height = canvas.parentElement.clientHeight
    }
    window.addEventListener("resize", handleResize)

    let t = 0

    const render = () => {
      t += 0.015
      ctx.clearRect(0, 0, width, height)

      const cols = Math.ceil(width / gap)
      const rows = Math.ceil(height / gap)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap
          const y = j * gap

          // Multiple flowing sine waves for fluid currents
          const wave1 = Math.sin(x * 0.007 + y * 0.005 + t * 1.5)
          const wave2 = Math.cos(x * 0.004 - y * 0.008 + t * 1.2)
          const wave3 = Math.sin((x + y) * 0.006 - t * 0.9)
          const current = (wave1 + wave2 + wave3) / 3 // [-1, 1]

          // Intensity mapping
          const intensity = Math.max(0, current * 0.5 + 0.5)

          // Soft dot base
          ctx.beginPath()
          ctx.arc(x, y, dotSize * (0.8 + intensity * 1.1), 0, Math.PI * 2)

          if (intensity > 0.55) {
            // Bright glowing flowing head
            const glow = (intensity - 0.55) / 0.45
            ctx.fillStyle = `rgba(242, 107, 69, ${0.45 + glow * 0.5})`
            ctx.shadowColor = glowColor
            ctx.shadowBlur = 14 * glow
          } else {
            // Ambient dots
            ctx.fillStyle = `rgba(180, 160, 145, ${0.3 + intensity * 0.3})`
            ctx.shadowBlur = 0
          }
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [dotSize, gap, glowColor])

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      style={{ opacity }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}

