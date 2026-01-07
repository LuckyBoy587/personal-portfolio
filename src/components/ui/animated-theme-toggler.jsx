import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"

export const AnimatedThemeToggler = ({
  className,
  duration = 500,
  ...props
}) => {
  const [isLight, setIsLight] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const updateTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect();
  }, [])

  const toggleTheme = useCallback(async () => {
    if (!buttonRef.current) return

    if (!document.startViewTransition) {
      document.documentElement.classList.toggle("light")
      localStorage.setItem("theme", !isLight ? "light" : "dark")
      return
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        const newLightState = !isLight
        setIsLight(newLightState)
        document.documentElement.classList.toggle("light")
        localStorage.setItem("theme", newLightState ? "light" : "dark")
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate({
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRadius}px at ${x}px ${y}px)`,
      ],
    }, {
      duration,
      easing: "ease-in-out",
      pseudoElement: "::view-transition-new(root)",
    })
  }, [isLight, duration])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn("fixed top-3 right-3 z-50 p-3 rounded-full glass-card hover:scale-110 transition-all duration-300", className)}
      {...props}>
      {isLight ? <Moon className="w-6 h-6 text-[#1e1b4b]" /> : <Sun className="w-6 h-6 text-yellow-400" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
