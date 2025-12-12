import { Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Hablemos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Interesado en una presentación, entrevista o simplemente conversar sobre el libro? Escríbeme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp */}
          <Card className="hover:border-accent transition-colors">
            <CardHeader>
              <MessageSquare className="w-8 h-8 mb-2 text-accent" />
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>Escríbeme directamente</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <a href="https://wa.me/573006104370" target="_blank" rel="noopener noreferrer">
                  Enviar mensaje
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="hover:border-accent transition-colors">
            <CardHeader>
              <Mail className="w-8 h-8 mb-2 text-accent" />
              <CardTitle>Email</CardTitle>
              <CardDescription>Para consultas formales</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-transparent" variant="outline" asChild>
                <a href="mailto:chefrei@gmail.com">chefrei@gmail.com</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Formulario de contacto</CardTitle>
            <CardDescription>Déjame un mensaje y te responderé lo antes posible</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Cuéntame sobre tu consulta o invitación..." rows={6} required />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
