export const SITE_CONFIG = {
  name: "Florytela by Adriana Martínez",
  shortName: "Florytela",
  tagline: "Mandiles con elegancia, calidez y personalización",
  description:
    "Mandiles de calidad con diseño propio: elegantes, personalizados y accesibles. Disponibles en tres líneas — Fast, Personalización y Deluxe — para profesionales y emprendedores.",
  url: "https://florytela.com",
  author: "Adriana Martínez",
  whatsappNumber: "5215512345678",
  formattedPhone: "+52 (55) 1234-5678",
  email: "hola@florytela.com",
  instagram: "https://instagram.com/florytela",
  instagramHandle: "@florytela",
  location: "Lima, Perú",
  workshopHours: "Lunes a Sábado con cita previa",
};

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/linea/fast", label: "Fast" },
  { href: "/linea/personalizacion", label: "Personalización" },
  { href: "/linea/deluxe", label: "Deluxe" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const PRODUCT_LINES = [
  {
    id: "fast",
    href: "/linea/fast",
    number: "01",
    name: "Fast",
    tagline: "Rápido y accesible",
    description:
      "Modelos prediseñados listos para pedir. Colores definidos, bolsillos pensados y proceso de producción ágil. El mejor punto de entrada al mundo Florytela.",
    badge: "Entrega rápida",
  },
  {
    id: "personalizacion",
    href: "/linea/personalizacion",
    number: "02",
    name: "Personalización",
    tagline: "Tu mandil, tu diseño",
    description:
      "La línea principal. Elige colores, modelo, bolsillos y configuración desde cero. Disponible desde una sola pieza. Total libertad para crear el mandil que necesitas.",
    badge: "Línea principal",
    featured: true,
  },
  {
    id: "deluxe",
    href: "/linea/deluxe",
    number: "03",
    name: "Deluxe",
    tagline: "Diseño y exclusividad",
    description:
      "La línea de mayor nivel. Mayor calidad, diseños más elaborados y una fuerte dimensión estética. Para quienes buscan un mandil que también sea una pieza de diseño.",
    badge: "Alta costura",
  },
];

export const CATEGORIES = [
  { id: "all", label: "Todos los modelos" },
  { id: "fast", label: "Fast" },
  { id: "personalizacion", label: "Personalización" },
  { id: "deluxe", label: "Deluxe" },
];

export const PILLARS = [
  {
    number: "01",
    title: "Calidad real",
    description:
      "Usamos Ripstop y algodón de buena composición. Materiales que aguantan el uso diario y se ven bien durante mucho tiempo.",
  },
  {
    number: "02",
    title: "Diseño funcional",
    description:
      "Cada bolsillo, tirante y detalle tiene una razón de ser. Mandiles que se adaptan a tu cuerpo y a las herramientas de tu trabajo.",
  },
  {
    number: "03",
    title: "Personalización desde 1 pieza",
    description:
      "No necesitas un pedido enorme. Puedes crear el mandil que quieres desde una sola unidad, con colores, modelo y configuración propia.",
  },
  {
    number: "04",
    title: "Precio accesible",
    description:
      "Elegancia no tiene que significar inalcanzable. Precios pensados para profesionales, emprendedores y personas que valoran lo bien hecho.",
  },
];
