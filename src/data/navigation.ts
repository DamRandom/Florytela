import type { NavigationLink, ProductLine, SitePillar } from "@/types";

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

export const NAV_LINKS: NavigationLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/linea/fast", label: "Fast" },
  { href: "/linea/personalizacion", label: "Personalización" },
  { href: "/linea/deluxe", label: "Deluxe" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export const PRODUCT_LINES: ProductLine[] = [
  {
    id: "fast",
    href: "/linea/fast",
    name: "Línea Fast",
    subtitle: "Rápido & Accesible",
    tagline: "Modelos prediseñados listos para entrega ágil",
    description:
      "La alternativa más sencilla y económica. Modelos y bolsillos predeterminados en colores específicos, listos para vestir tu jornada sin esperas.",
    imageFull: "/images/fast/complete.png",
    imageDetail: "/images/fast/close-up.png",
    detailLabel: "Costuras reforzadas y ajuste ergonómico",
    badge: "Entrega Ágil",
    highlights: ["Modelos prediseñados", "Proceso de producción rápido", "El precio más accesible"],
    cta: "Ver modelos Fast",
  },
  {
    id: "personalizacion",
    href: "/linea/personalizacion",
    name: "Personalización",
    subtitle: "Tu Mandil, Tu Diseño",
    tagline: "Nuestra propuesta principal creada desde cero",
    description:
      "Libertad total para elegir colores, modelo, cantidad y disposición de bolsillos según tus herramientas. Confeccionado a tu medida desde 1 unidad.",
    imageFull: "/images/personlize/complete.png",
    imageDetail: "/images/personlize/close-up.png",
    detailLabel: "Bordado de logotipo y tirantes desmontables",
    badge: "Línea Insignia",
    featured: true,
    highlights: ["Diseño desde cero", "Bolsillos y colores a elección", "Disponible desde 1 pieza"],
    cta: "Diseñar a medida",
  },
  {
    id: "deluxe",
    href: "/linea/deluxe",
    name: "Línea Deluxe",
    subtitle: "Alta Costura & Diseño",
    tagline: "Mandiles donde el diseño tiene el máximo protagonismo",
    description:
      "Nuestra línea de mayor nivel. Mayor sofisticación, acabados de autor y siluetas distintivas para quienes conciben el mandil como una pieza de arte.",
    imageFull: "/images/deluxe/complete.png",
    imageDetail: "/images/deluxe/close-up.png",
    detailLabel: "Textil premium y herrajes macizos de autor",
    badge: "Edición Exclusiva",
    highlights: ["Acabados superiores", "Diseño de autor elaborado", "Estética sofisticada"],
    cta: "Conocer línea Deluxe",
  },
];

export const CATEGORIES = [
  { id: "all", label: "Todos los modelos" },
  { id: "fast", label: "Fast" },
  { id: "personalizacion", label: "Personalización" },
  { id: "deluxe", label: "Deluxe" },
];

export const PILLARS: SitePillar[] = [
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
