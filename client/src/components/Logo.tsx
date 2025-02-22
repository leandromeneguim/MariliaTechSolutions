
import { useState, useEffect } from 'react';
import logoWhite from '/LOGOMARILIA-BRANCA.PNG';
import logoBlack from '/LOGOMARILIA-PRETA.PNG';

export function Logo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <img 
        src={logoWhite}
        alt="Logo"
        className="h-8 w-auto dark:hidden"
      />
      <img 
        src={logoBlack}
        alt="Logo"
        className="hidden h-8 w-auto dark:block"
      />
    </div>
  )
}
