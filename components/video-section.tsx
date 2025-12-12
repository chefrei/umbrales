export function VideoSection() {
    return (
        <section className="py-24 px-4 bg-muted/50">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Trailer Oficial</h2>
                    <div className="h-1 w-20 bg-accent rounded mx-auto" />
                </div>

                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl border-2 border-border/50 bg-black">
                    <video
                        width="100%"
                        height="100%"
                        controls
                        className="w-full h-full"
                    >
                        <source src="/Video_Umbrales.mp4" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>
            </div>
        </section>
    )
}
