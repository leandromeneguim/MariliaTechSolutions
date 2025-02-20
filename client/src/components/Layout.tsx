import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocialButtons from "./SocialButtons";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      {children}
      <SocialButtons />
      <Footer />
    </div>
  );
}
