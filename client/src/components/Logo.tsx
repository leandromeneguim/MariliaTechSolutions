
import { useState, useEffect } from 'react';

export function Logo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2">
      <img 
        src="LOGOMARILIA-BRANCA.PNG" 
        alt="Logo"
        className="h-8 w-auto dark:hidden"
      />
      <img 
        src="LOGOMARILIA-PRETA.PNG" 
        alt="Logo"
        className="hidden h-8 w-auto dark:block"
      />
    </div>
  )
}
