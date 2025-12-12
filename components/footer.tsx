export function Footer() {
  return (
    <footer className="border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">© 2025 José Freitez. Todos los derechos reservados.</p>
          </div>

          <nav className="flex gap-6">
            <a href="#book" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre el libro
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contacto
            </a>
            <a href="#purchase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Comprar
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
