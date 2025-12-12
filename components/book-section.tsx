import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function BookSection() {
  return (
    <section id="book" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Book Cover */}
          <div className="order-2 md:order-1">
            <Card className="border-2 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <img src="/umbrales-cover.jpg" alt="Portada de Umbrales" className="w-full h-auto block" />
              </CardContent>
            </Card>
          </div>

          {/* Book Info */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sobre el libro</h2>
              <div className="h-1 w-20 bg-accent rounded" />
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                <span className="font-serif text-2xl text-foreground">U</span>mbrales es una colección de catorce
                relatos donde lo cotidiano se fragmenta para revelar otras capas de lo real. Desde programadores
                atrapados en bucles imposibles hasta casas que guardan secretos más allá de sus paredes, estas historias
                exploran los límites de la percepción, la identidad y la tecnología.
              </p>
              <p>
                Con una prosa precisa y una mirada que transita entre lo inquietante y lo especulativo, José Freitez
                construye mundos que cuestionan dónde termina la razón y empieza lo inexplicable.
              </p>
              <p className="font-semibold text-foreground">
                Porque en estos umbrales, cruzar puede ser el único camino... o el error definitivo.
              </p>
            </div>

            <Button size="lg" variant="outline" asChild>
              <a href="#purchase">Conseguir mi ejemplar</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
