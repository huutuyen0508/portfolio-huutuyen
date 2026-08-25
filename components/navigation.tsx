"use client"

import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/lib/theme-provider"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const navItems = ["home", "projects", "about", "contact"]
  const handleNavClick = (item: string) => { setActiveSection(item); setIsMenuOpen(false); document.getElementById(item)?.scrollIntoView({ behavior: "smooth" }) }
  return <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-10">
      <button onClick={() => handleNavClick("home")} className="font-mono text-sm font-medium tracking-tight">NT<span className="text-accent">.</span></button>
      <div className="hidden items-center gap-8 md:flex">{navItems.map((item) => <button key={item} onClick={() => handleNavClick(item)} className={`font-mono text-xs uppercase tracking-widest transition-colors ${activeSection === item ? "text-accent" : "text-muted-foreground hover:text-foreground"}`}>{item}</button>)}<button onClick={toggleTheme} className="rounded-full border border-border p-2 text-muted-foreground hover:text-accent" aria-label="Toggle theme">{theme === "light" ? <Moon size={15} /> : <Sun size={15} />}</button></div>
      <div className="flex items-center gap-2 md:hidden"><button onClick={toggleTheme} className="rounded-full p-2" aria-label="Toggle theme">{theme === "light" ? <Moon size={17} /> : <Sun size={17} />}</button><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full p-2" aria-label="Toggle menu">{isMenuOpen ? <X size={22} /> : <Menu size={22} />}</button></div>
    </div>
    {isMenuOpen && <div className="flex flex-col gap-4 border-t border-border px-6 py-5 md:hidden">{navItems.map((item) => <button key={item} onClick={() => handleNavClick(item)} className="text-left font-mono text-xs uppercase tracking-widest text-muted-foreground">{item}</button>)}</div>}
  </nav>
}
