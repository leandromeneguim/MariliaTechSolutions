
import React from "react"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img 
        src="/LOGOMARILIA-PRETA.png" 
        alt="Logo"
        className="h-8 w-auto dark:hidden"
      />
      <img 
        src="/LOGOMARILIA-BRANCA.png" 
        alt="Logo"
        className="hidden h-8 w-auto dark:block"
      />
    </div>
  )
}
