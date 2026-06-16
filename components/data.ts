export const WHATSAPP_NUMBER = "59168946666";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Empresa", href: "#empresa" },
  { label: "Servicios", href: "#servicios" },
  { label: "Flota", href: "#flota" },
  { label: "Cobertura", href: "#cobertura" }
];

export const services = [
  { title: "Carga especial", icon: "star" },
  { title: "Maquinaria", icon: "gear" },
  { title: "Cargas pesadas", icon: "truck" },
  { title: "Productos basicos", icon: "package" },
  { title: "Almacenes generales", icon: "warehouse" }
] as const;

export const fleetCards = [
  {
    quantity: "80",
    name: "SIDER",
    images: ["/images/sections/flota/truck-saider.png", "/images/sections/flota/truck-sider-render.png"],
    alt: "Camion SIDER TRANSFRIBOL"
  },
  {
    quantity: "50",
    name: "LONA",
    images: ["/images/sections/flota/truck-lona.png", "/images/sections/flota/truck-lona-render.png"],
    alt: "Camion LONA TRANSFRIBOL"
  },
  {
    quantity: "10",
    name: "LOWBOY",
    images: ["/images/sections/flota/truck-lowboy.png", "/images/sections/flota/truck-lowboy-render.png"],
    alt: "Camion LOWBOY TRANSFRIBOL"
  }
];

export const values = [
  {
    title: "Integridad",
    icon: "shieldCheck",
    text: "Actuamos con honestidad, transparencia y etica en cada una de nuestras operaciones."
  },
  {
    title: "Excelencia",
    icon: "star",
    text: "Buscamos la mejora continua para brindar un servicio logistico de la mas alta calidad."
  },
  {
    title: "Seguridad",
    icon: "shield",
    text: "Protegemos cada carga con responsabilidad, siguiendo los mas altos estandares internacionales."
  },
  {
    title: "Compromiso",
    icon: "users",
    text: "Cumplimos cada servicio con dedicacion absoluta y respeto total hacia nuestros clientes."
  },
  {
    title: "Innovacion",
    icon: "gear",
    text: "Optimizamos procesos con tecnologia y mejoras constantes en logistica integral."
  },
  {
    title: "Confianza",
    icon: "badgeCheck",
    text: "Construimos relaciones de largo plazo basadas en la puntualidad y los resultados tangibles."
  }
] as const;

export const clientLogos = Array.from({ length: 11 }, (_, index) => ({
  src: `/images/clientes/cliente-logo-${index + 1}.jpeg`,
  alt: `Cliente Transfribol ${index + 1}`
}));

export const certifications = [
  {
    iso: "ISO 9001",
    title: "Sistema de Gestion de Calidad",
    text: "Garantizamos servicios de transporte excepcionales mediante procesos de mejora continua enfocados en la satisfaccion total del cliente.",
    icon: "award",
    tone: "blue"
  },
  {
    iso: "ISO 45001",
    title: "Seguridad y Salud Ocupacional",
    text: "Protegemos nuestro capital humano reduciendo riesgos y promoviendo el bienestar integral en cada aspecto de nuestras operaciones logisticas.",
    icon: "shieldCheck",
    tone: "green"
  },
  {
    iso: "ISO 14001",
    title: "Gestion Ambiental",
    text: "Apostamos por la sostenibilidad y la responsabilidad ecologica corporativa, mitigando constantemente nuestro impacto ambiental.",
    icon: "leaf",
    tone: "light"
  }
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Requerimiento",
    text: "Analizamos tu necesidad logistica y tipo de carga para ofrecerte la mejor solucion."
  },
  {
    number: "02",
    title: "Cotizacion",
    text: "Te brindamos un presupuesto optimizado y competitivo ajustado a tus necesidades."
  },
  {
    number: "03",
    title: "Recoleccion",
    text: "Retiramos la mercaderia con puntualidad y cuidado extremo en el manejo."
  },
  {
    number: "04",
    title: "Monitoreo",
    text: "Seguimiento en tiempo real para que siempre sepas donde esta tu carga."
  },
  {
    number: "05",
    title: "Entrega",
    text: "Cumplimos con el destino final garantizando la satisfaccion total."
  }
] as const;
