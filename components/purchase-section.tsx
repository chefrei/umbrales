import { ShoppingCart, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PurchaseSection() {
  return (
    <section id="purchase" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Consigue tu copia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Disponible en formato físico y digital</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Amazon */}
          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Amazon</CardTitle>
              <CardDescription className="text-base">Envío internacional disponible</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" size="lg" asChild>
                <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
                  Comprar en Amazon
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Personal Order */}
          <Card className="border-2 hover:border-accent transition-colors">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Pedido personal</CardTitle>
              <CardDescription className="text-base">Ejemplares firmados disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-transparent" size="lg" variant="outline" asChild>
                <a href="#contact">Solicitar al autor</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Los pedidos personales incluyen dedicatoria personalizada sin costo adicional
        </p>
      </div>
    </section>
  )
}
