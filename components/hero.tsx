import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary/50">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">José Freitez</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-balance text-primary">
              Umbrales
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed text-balance">
              Catorce historias donde la realidad es la única frontera que se rompe.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="min-w-[200px] bg-primary hover:bg-primary/90" asChild>
              <a href="#purchase">Comprar ahora</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <a href="#book">Conocer más</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
