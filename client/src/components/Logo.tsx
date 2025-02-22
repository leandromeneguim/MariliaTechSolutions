
import { useTheme } from "@/hooks/use-theme";

export function Logo() {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      {theme === 'dark' ? (
        <img 
          src="LOGOMARILIA-BRANCA.png"
          alt="Logo Branca" 
          className="h-8 w-auto"
        />
      ) : (
        <img 
          src="LOGOMARILIA-PRETA.png"
          alt="Logo Preta"
          className="h-8 w-auto"
        />
      )}
    </div>
  );
}
