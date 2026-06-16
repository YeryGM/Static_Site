export default function GallerySection() {
  return (
    <section id="galeria-servicios" className="py-16 md:py-24">
      <div className="container px-4 md:px-16">
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="aspect-video bg-[#174773] rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  );
}
