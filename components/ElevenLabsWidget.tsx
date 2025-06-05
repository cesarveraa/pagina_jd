// components/ElevenLabsWidget.tsx
"use client"

import { useEffect, useRef } from "react"

export default function ElevenLabsWidget() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    script.async = true
    script.type = "text/javascript"
    document.body.appendChild(script)

    const element = document.createElement("elevenlabs-convai")
    element.setAttribute("agent-id", "agent_01jwyxd8vjft0sjd23e1fcf4g3")

    containerRef.current?.appendChild(element)

    return () => {
      document.body.removeChild(script)
      containerRef.current?.removeChild(element)
    }
  }, [])

  return <div ref={containerRef} className="w-full max-w-md mx-auto my-4" />
}
