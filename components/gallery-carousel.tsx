"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Placeholder images from public folder
const images = [
    {
        src: "/alma.png",
        alt: "ALMA",
        title: "ALMA"
    },
    {
        src: "/ecos_de_una_noche_antigua.jpg",
        alt: "Ecos de una noche oscura",
        title: "Ecos de una noche oscura"
    },
    {
        src: "/ser_otro.png",
        alt: "Ser Otro",
        title: "Ser Otro"
    },
    {
        src: "/la_casa_rosada.png",
        alt: "La casa Rosada",
        title: "La casa Rosada"
    },
    {
        src: "/otra_vida.png",
        alt: "Otra Vida",
        title: "Otra Vida"
    },
    {
        src: "/Autor2.jpeg",
        alt: "El Autor",
        title: "El Autor"
    },
]

export function GalleryCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on("select", onSelect)
        emblaApi.on("reInit", onSelect)
    }, [emblaApi, onSelect])

    return (
        <section className="py-24 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Mundos Fragmentados</h2>
                    <div className="h-1 w-20 bg-accent rounded mx-auto" />
                    <p className="mt-4 text-muted-foreground">Un vistazo a los escenarios de las historias</p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex gap-6">
                            {images.map((image, index) => (
                                <div className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0" key={index}>
                                    <Card className="border-none shadow-md h-full">
                                        <CardContent className="p-0 h-full relative group overflow-hidden rounded-lg">
                                            <div className="aspect-[3/4] overflow-hidden">
                                                <img
                                                    src={image.src}
                                                    alt={image.alt}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                                <h3 className="text-white font-serif text-xl font-bold">{image.title}</h3>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg border-2 z-10 hidden md:flex"
                        onClick={scrollPrev}
                        disabled={!prevBtnEnabled}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm shadow-lg border-2 z-10 hidden md:flex"
                        onClick={scrollNext}
                        disabled={!nextBtnEnabled}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </section>
    )
}
