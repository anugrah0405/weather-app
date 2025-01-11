import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Search({ setCity }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setCity(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <Input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="flex-grow bg-background text-foreground"
      />
      <Button type="submit" className="bg-primary text-primary-foreground">Search</Button>
    </form>
  )
}

