import marliCircle from "@/assets/marli-circle.png";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={marliCircle}
                alt="Experts AI"
                className="h-8 w-auto"
              />
              <span className="font-serif text-lg font-extrabold text-primary-foreground">
                Experts AI
              </span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.companyLinks.about}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.companyLinks.blog}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.companyLinks.careers}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.companyLinks.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.legalLinks.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.legalLinks.terms}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.legalLinks.gdpr}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  {t.footer.legalLinks.dataProcessing}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            {t.footer.copyright}
          </p>

          {/* Language Switcher */}
          <div className="hidden flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary-foreground/60" />
            <div className="relative flex items-center bg-primary-foreground/10 rounded-full p-1">
              {/* Sliding background */}
              <div
                className={`absolute top-1 bottom-1 w-[44px] bg-primary-foreground rounded-full transition-all duration-300 ease-out ${
                  language === "en" ? "left-1" : "left-[calc(50%+2px)]"
                }`}
              />

              {/* Buttons */}
              <button
                onClick={() => setLanguage("en")}
                className={`relative z-10 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ease-out ${
                  language === "en"
                    ? "text-primary"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("zh")}
                className={`relative z-10 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ease-out ${
                  language === "zh"
                    ? "text-primary"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                繁中
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
