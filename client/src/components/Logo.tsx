import { useTheme } from "@/hooks/use-theme";
import whiteLogo from "../assets/LOGOMARILIA-BRANCA.png";
import blackLogo from "../assets/LOGOMARILIA-PRETA.png";

export function Logo() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      {theme === 'dark' ? (
        <img 
          src={whiteLogo}
          alt="Logo Branca" 
          className="h-20 w-auto ml-4"
        />
      ) : (
        <img 
          src={blackLogo}
          alt="Logo Preta"
          className="h-20 w-auto ml-4"
        />
      )}
    </div>
  );
}