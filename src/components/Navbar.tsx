import { useState, useEffect } from "react";
import marliCircle from "@/assets/marli-circle.png";
import ContactDialog from "@/components/ContactDialog";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("problem");
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["problem", "solution", "how-it-works", "benefits"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#problem", label: t.navbar.problem, id: "problem" },
    { href: "#solution", label: t.navbar.solution, id: "solution" },
    { href: "#how-it-works", label: t.navbar.howItWorks, id: "how-it-works" },
    { href: "#benefits", label: t.navbar.benefits, id: "benefits" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={marliCircle}
              alt="Experts AI"
              className="h-8 lg:h-10 w-auto"
            />
            <span className="font-serif text-lg lg:text-xl font-extrabold text-foreground">
              Experts AI
            </span>
          </a>

          {/* Navigation Links - Centered Pill Style */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-muted/50 rounded-full p-1 border border-border">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-[#1a2332] text-white"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Contact Us */}
          <button
            onClick={() => setContactDialogOpen(true)}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            {t.navbar.contact}
          </button>
        </div>
      </div>

      <ContactDialog
        open={contactDialogOpen}
        onOpenChange={setContactDialogOpen}
      />
    </nav>
  );
};

export default Navbar;
