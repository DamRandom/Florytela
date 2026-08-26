import type { Product } from "@/types";

export const PRODUCTS: Product[] = [
  // ── 4 Modelos del Atelier Interactivo (Custom) ──
  {
    id: "ejecutivo",
    slug: "mandil-ejecutivo",
    name: "Mandil Ejecutivo",
    category: "personalizacion",
    categoryLabel: "Línea Personalización",
    tagline: "Elegancia profesional, funcionalidad y carácter contemporáneo",
    shortDescription:
      "Base en negro profundo con panel central en gris claro, tirantes de cuero curtido y herrajes metálicos de alta resistencia.",
    description:
      "El negro profundo funciona como base dominante, aportando una presencia sobria y profesional. El panel central en gris claro genera contraste visual y define la silueta del mandil, mientras que los detalles en cuero y los herrajes metálicos añaden un carácter artesanal y sofisticado. Diseñado para entornos gastronómicos y profesionales donde la imagen y la funcionalidad deben ir de la mano.",
    images: [
      "/images/custom/borgona-modelo.jpg",
      "/images/custom/borgona-fondo.png",
    ],
    materials: [
      "Gabardina pesada 100% Algodón Peinado (300 g/m²)",
      "Tirantes desmontables en cuero vacuno natural",
      "Herrajes niquelados y ojales de latón macizo antioxidable",
      "Costuras de alta resistencia con remaches de refuerzo",
    ],
    colors: [
      { name: "Negro Profundo", hex: "#1A1A1A" },
      { name: "Gris Claro", hex: "#B8B8B8" },
      { name: "Cuero Curtido", hex: "#7A5C3E" },
    ],
    customizable: true,
    features: [
      "Bolsillo frontal de acceso rápido para herramientas y comanda",
      "Tirantes de cuero regulables con mosquetones de liberación ágil",
      "Panel de contraste en gris claro para definición de silueta",
      "Herrajes metálicos plateados de estética robusta y premium",
    ],
    idealFor: [
      "Chefs de cocina y brigadas gastronómicas",
      "Baristas, sommeliers y mixólogos",
      "Talleres de diseño, carpintería y anfitriones",
    ],
    dimensions: "84 cm de alto × 72 cm de ancho (ajuste universal adaptable)",
    careGuide: [
      "Desmontar tirantes de cuero antes de lavar la prenda",
      "Lavar en máquina en ciclo delicado con agua fría (máx. 30°C)",
      "Usar detergente neutro y evitar blanqueadores",
      "Secar a la sombra colgado en gancho",
      "Planchar con vapor a temperatura media sobre el reverso",
    ],
    isFeatured: true,
    badge: "Atelier Interactivo",
  },
  {
    id: "ivory-rose",
    slug: "mandil-ivory-rose",
    name: "Mandil Ivory & Rosé",
    category: "personalizacion",
    categoryLabel: "Línea Personalización",
    tagline: "Elegancia luminosa, contraste delicado e identidad distintiva",
    shortDescription:
      "Base ivory luminosa con amplio bolsillo frontal en rosa empolvado, franja borgoña en cintura y tirantes ivory con herrajes plateados.",
    description:
      "El ivory domina la estructura del mandil y aporta una apariencia limpia, luminosa y sofisticada. Sobre esta base, el bolsillo frontal en rosa empolvado introduce un contraste suave y femenino, mientras que la franja borgoña en la cintura y el bordado de Florytela aportan profundidad y carácter a la composición. Una propuesta pensada para destacar la identidad de marca sin sacrificar funcionalidad.",
    images: [
      "/images/custom/ivory-modelo.jpg",
      "/images/custom/ivory-fondo.png",
    ],
    materials: [
      "Lino lavado a la piedra y loneta de algodón orgánico",
      "Cintas de espiguilla de algodón natural en tono ivory",
      "Herrajes metálicos plateados de liberación suave",
      "Bordado de alta definición en hilo borgoña",
    ],
    colors: [
      { name: "Ivory", hex: "#F8F6F0" },
      { name: "Rosa Empolvado", hex: "#E8C4BB" },
      { name: "Borgoña", hex: "#550B14" },
    ],
    customizable: true,
    features: [
      "Amplio bolsillo frontal doble en rosa empolvado",
      "Banda horizontal borgoña que estructura la cintura",
      "Tirantes claros que mantienen la continuidad del diseño",
      "Bordado frontal de identidad de marca en el pecho",
    ],
    idealFor: [
      "Pastelerías, panaderías y repostería artesanal",
      "Floristerías y diseño botánico",
      "Talleres de cerámica y artes plásticas",
      "Boutiques, anfitriones y servicios de catering gourmet",
    ],
    dimensions: "85 cm de alto × 74 cm de ancho",
    careGuide: [
      "Lavar con agua fría y centrifugado delicado",
      "Usar detergente suave para prendas claras",
      "Secar al aire libre evitando sol directo prolongado",
      "Planchar a temperatura media",
    ],
    isFeatured: true,
    badge: "Atelier Interactivo",
  },
  {
    id: "beige-roble",
    slug: "mandil-beige-roble",
    name: "Mandil Beige & Roble",
    category: "personalizacion",
    categoryLabel: "Línea Personalización",
    tagline: "Calidez natural, carácter artesanal y funcionalidad profesional",
    shortDescription:
      "Cuerpo en beige arena con detalles en marrón roble en tirantes, cinturón y amplio bolsillo lateral porta-herramientas.",
    description:
      "El beige arena del cuerpo del mandil aporta una base cálida, limpia y natural. Los detalles en marrón roble —presentes en los tirantes, cinturón y bolsillo frontal— generan profundidad y contraste, mientras que la camisa negra refuerza su carácter profesional y contemporáneo. Ideal para cafeterías, restaurantes, panaderías, talleres artesanales y espacios donde la materia prima y el trabajo manual forman parte de la identidad.",
    images: [
      "/images/custom/verde-modelo.png",
      "/images/custom/verde-fondo.jpg",
    ],
    materials: [
      "Loneta de algodón rústico y lino lavado (310 g/m²)",
      "Tirantes y cinturón en cuero marrón roble de curtición vegetal",
      "Aros y mosquetones metálicos con acabado plateado",
      "Pespuntes dobles de refuerzo en puntos de tensión",
    ],
    colors: [
      { name: "Beige Arena", hex: "#C9BBA8" },
      { name: "Marrón Roble", hex: "#6B4A36" },
      { name: "Marfil", hex: "#F1ECE4" },
    ],
    customizable: true,
    features: [
      "Bolsillo lateral amplio porta-herramientas",
      "Sistema de aros y mosquetones metálicos para ajuste técnico",
      "Cinturón estructurado en cuero roble",
      "Bordado de identidad frontal en tono claro",
    ],
    idealFor: [
      "Cafeterías de especialidad, tostadores y baristas",
      "Restaurantes de concepto artesanal y brasa",
      "Ceramistas, ebanistas y talleres de oficios",
    ],
    dimensions: "88 cm de alto × 76 cm de ancho",
    careGuide: [
      "Desmontar cinturón y tirantes de cuero antes de lavar",
      "Lavar en máquina en ciclo delicado con agua fría",
      "Secar a la sombra",
      "Nutrir el cuero periódicamente con bálsamo natural",
    ],
    isFeatured: true,
    badge: "Atelier Interactivo",
  },
  {
    id: "carbon",
    slug: "mandil-carbon-niquel",
    name: "Mandil Carbón & Níquel",
    category: "personalizacion",
    categoryLabel: "Línea Personalización",
    tagline: "Sobriedad vanguardista, minimalismo para alta exigencia",
    shortDescription:
      "Negro asfalto con pespuntes en gris taupe, discretos remates borgoña y herrajes en níquel mate para alta exigencia.",
    description:
      "Negro asfalto con pespuntes en gris taupe y un discreto remate borgoña en costuras críticas. La máxima expresión del minimalismo contemporáneo. Impecable para cocinas abiertas, brigadas de fine dining y salones donde la elegancia sobria es el protagonista indiscutible.",
    images: [
      "/images/custom/carbon-modelo.png",
      "/images/custom/carbon-fondo.jpg",
    ],
    materials: [
      "Gabardina peinada de 320 g/m² con tratamiento antimanchas",
      "Herrajes en níquel mate anticorrosión",
      "Cintas reforzadas de alta densidad",
      "Costuras triples en áreas de máxima exigencia",
    ],
    colors: [
      { name: "Carbón Asfalto", hex: "#211C1D" },
      { name: "Rojo Borgoña", hex: "#D71920" },
      { name: "Gris Níquel", hex: "#B8B3AC" },
    ],
    customizable: true,
    features: [
      "Bolsillo de pecho inclinado para pase de cocina y termómetro",
      "Bolsillo ventral dividido de alta capacidad",
      "Herrajes níquel mate con mosquetones de liberación rápida",
      "Doble refuerzo en cintura y dobladillos de alta resistencia",
    ],
    idealFor: [
      "Cocinas abiertas, brigadas de fine dining y banquetes",
      "Chefs ejecutivos, pasteleros y sous-chefs",
      "Mixólogos y directores de barra",
    ],
    dimensions: "84 cm de alto × 70 cm de ancho",
    careGuide: [
      "Apto para lavado profesional a 40°C",
      "Apto para centrifugado estándar",
      "Planchar a temperatura media sobre el reverso",
    ],
    isFeatured: true,
    badge: "Atelier Interactivo",
  },

  // ── 3 Modelos Representando las 3 Líneas de Florytela ──
  {
    id: "fast-esencial",
    slug: "mandil-fast-esencial",
    name: "Mandil Línea Fast",
    category: "fast",
    categoryLabel: "Línea Fast",
    tagline: "Modelos prediseñados listos para entrega ágil",
    shortDescription:
      "La alternativa más sencilla y económica. Modelos y bolsillos predeterminados en colores específicos, listos para vestir tu jornada sin esperas.",
    description:
      "La línea Fast es para quien quiere un mandil de buena calidad sin complicaciones ni esperas prolongadas. Modelos predeterminados con ergonomía estudiada, confección en Ripstop y algodón resistente, y acabados reforzados listos para entrega rápida. Ideal para equipar equipos de trabajo o resolver una necesidad inmediata con excelente presencia.",
    images: [
      "/images/fast/complete.png",
      "/images/fast/close-up.png",
    ],
    materials: [
      "Ripstop técnico y algodón preencogido de alta resistencia",
      "Costuras industriales reforzadas",
      "Cintas de algodón ajustables con hebillas correderas",
    ],
    colors: [
      { name: "Negro Clásico", hex: "#1A1A1A" },
      { name: "Arena Natural", hex: "#CBC0B2" },
      { name: "Azul Marino", hex: "#1C2D42" },
    ],
    customizable: false,
    features: [
      "Modelos prediseñados y probados en jornadas reales",
      "Bolsillo frontal funcional de acceso inmediato",
      "Ajuste ergonómico al cuello y cintura",
      "Proceso de confección y despacho acelerado",
    ],
    idealFor: [
      "Equipos de salón y cocina en crecimiento",
      "Emprendedores gastronómicos y cafeterías",
      "Uso diario intensivo sin complicaciones",
    ],
    dimensions: "80 cm de alto × 68 cm de ancho (ajuste universal)",
    careGuide: [
      "Lavar en máquina en ciclo estándar con agua fría o tibia",
      "Secar colgado a la sombra",
      "Planchar a temperatura media",
    ],
    isFeatured: false,
    badge: "Entrega Ágil",
  },
  {
    id: "personalizacion-atelier",
    slug: "mandil-personalizacion-atelier",
    name: "Mandil Línea Personalización",
    category: "personalizacion",
    categoryLabel: "Línea Personalización",
    tagline: "Tu mandil, exactamente como lo necesitas: diseño desde 1 pieza",
    shortDescription:
      "Libertad total para elegir colores, modelo, cantidad y disposición de bolsillos según tus herramientas. Confeccionado a tu medida desde 1 unidad.",
    description:
      "La propuesta insignia de Florytela. Diseñas tu mandil desde cero: seleccionas la paleta de colores, el modelo de pechera o cruzado, la posición exacta de cada bolsillo para tus herramientas y el bordado de tu logotipo o nombre. Sin mínimos de pedido y con asesoría personalizada directa de Adriana Martínez.",
    images: [
      "/images/personlize/complete.png",
      "/images/personlize/close-up.png",
    ],
    materials: [
      "Sargas, linos y mezclas seleccionadas a tu medida",
      "Tirantes intercambiables en cuero genuino o cinta de algodón",
      "Herrajes metálicos personalizados",
      "Bordado computarizado de alta definición de tu logotipo",
    ],
    colors: [
      { name: "Borgoña Florytela", hex: "#550B14" },
      { name: "Beige Hueso", hex: "#CBC0B2" },
      { name: "Taupe", hex: "#7E6961" },
      { name: "Negro Carbón", hex: "#1A1A1A" },
    ],
    customizable: true,
    features: [
      "Diseño desde cero a tu medida y estilo desde 1 sola pieza",
      "Disposición personalizada de bolsillos para tus herramientas",
      "Bordado de logotipo institucional o monograma incluido",
      "Tirantes cruzados en X o sistema cuello desmontable",
    ],
    idealFor: [
      "Chefs, reposteros, sommeliers y baristas independientes",
      "Marcas y restaurantes que cuidan cada detalle de su identidad",
      "Regalos de autor y uniformes corporativos exclusivos",
    ],
    dimensions: "Confección a medida o estándar universal regulable",
    careGuide: [
      "Instrucciones personalizadas según la composición textil seleccionada",
      "Asesoría de mantenimiento y cuidado incluida con tu pedido",
    ],
    isFeatured: true,
    badge: "Línea Insignia",
  },
  {
    id: "deluxe-autor",
    slug: "mandil-deluxe-autor",
    name: "Mandil Línea Deluxe",
    category: "deluxe",
    categoryLabel: "Línea Deluxe",
    tagline: "Alta costura textil, herrajes macizos y diseño de autor",
    shortDescription:
      "Nuestra línea de mayor nivel. Mayor sofisticación, acabados de autor y siluetas distintivas para quienes conciben el mandil como una pieza de arte.",
    description:
      "El máximo exponente de la sastrería en mandiles de Florytela. Fibras puras de lino europeo, sedas botánicas, aplicaciones en cuero vacuno de curtición vegetal y herrajes macizos en latón y oro envejecido. Cada pieza es tratada como una obra de autor numerada, con terminaciones hechas a mano por Adriana Martínez.",
    images: [
      "/images/deluxe/complete.png",
      "/images/deluxe/close-up.png",
    ],
    materials: [
      "100% Lino Europeo lavado a la piedra y sarga de bambú (320 g/m²)",
      "Cuero vacuno de curtición vegetal de primera selección",
      "Herrajes macizos en latón y bronce envejecido",
      "Costuras de alta sastrería con hilo de seda",
    ],
    colors: [
      { name: "Borgoña Imperial", hex: "#480D1F" },
      { name: "Carbón Noir", hex: "#1A1B24" },
      { name: "Oro Satinado", hex: "#C5A880" },
    ],
    customizable: true,
    features: [
      "Siluetas y patronaje de autor exclusivo Florytela",
      "Acabados manuales con puntada invisible de sastrería",
      "Detalles en cuero y latón macizo numerados",
      "Presentación de lujo en caja rígida entelada",
    ],
    idealFor: [
      "Restaurantes de autor y proyectos fine dining",
      "Grandes sommeliers, directores de sala y mixólogos de prestigio",
      "Coleccionistas y apasionados del diseño gastronómico",
    ],
    dimensions: "86 cm de alto × 74 cm de ancho",
    careGuide: [
      "Limpieza en seco o lavado a mano con agua fría y jabón neutro",
      "No frotar áreas ornamentales",
      "Planchar por el revés con paño protector",
    ],
    isFeatured: true,
    badge: "Edición Exclusiva",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

export function getRelatedProducts(currentSlug: string, limit = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return PRODUCTS.slice(0, limit);
  return PRODUCTS.filter(
    (p) => p.slug !== currentSlug && (p.category === current.category || p.isFeatured)
  ).slice(0, limit);
}
