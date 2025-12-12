import { Hero } from "@/components/hero"
import { BookSection } from "@/components/book-section"
import { AuthorSection } from "@/components/author-section"
import { ContactSection } from "@/components/contact-section"
import { PurchaseSection } from "@/components/purchase-section"
import { Footer } from "@/components/footer"
import { VideoSection } from "@/components/video-section"
import { GalleryCarousel } from "@/components/gallery-carousel"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <GalleryCarousel />
      <BookSection />
      <VideoSection />
      <AuthorSection />
      <ContactSection />
      <PurchaseSection />
      <Footer />
    </main>
  )
}
