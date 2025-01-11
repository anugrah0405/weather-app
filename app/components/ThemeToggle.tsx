import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="bg-background text-foreground">
      {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

