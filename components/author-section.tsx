import { Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AuthorSection() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Author Photo */}
          <div>
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent/20 rounded-2xl transform rotate-3" />
              <img
                src="/autor1.jpeg"
                alt="José Freitez"
                className="relative rounded-2xl w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Author Bio */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sobre el autor</h2>
              <div className="h-1 w-20 bg-accent rounded" />
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="font-serif text-2xl text-foreground">J</span>osé Freitez es programador y narrador
                venezolano, radicado actualmente en Colombia. Su escritura nace en la intersección entre la lógica del
                código y las grietas de lo real, explorando cómo la tecnología reconfigura nuestra manera de habitar el
                mundo.
              </p>
              <p>
                <span className="italic">Umbrales</span> es su primera colección de cuentos, un ejercicio de
                extrañamiento donde cada historia funciona como una puerta: algunas se abren hacia el asombro, otras
                hacia la inquietud, pero todas invitan a cruzar.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="icon" variant="outline" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button size="icon" variant="outline" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
