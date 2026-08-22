export interface ProductColor {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: "gastronomia" | "barista" | "artesanal" | "especial";
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  description: string;
  price: number;
  images: string[];
  materials: string[];
  colors: ProductColor[];
  customizable: boolean;
  features: string[];
  idealFor: string[];
  dimensions: string;
  careGuide: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  badge?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "aurora",
    slug: "mandil-aurora",
    name: "Mandil Aurora",
    category: "gastronomia",
    categoryLabel: "Alta Cocina",
    tagline: "Elegancia atemporal y versatilidad para el servicio refinado",
    shortDescription:
      "Confeccionado en sarga de algodón premium con tirantes cruzados y detalles en cuero vacuno natural. El equilibrio supremo entre ligereza y resistencia.",
    description:
      "El Mandil Aurora nació para los profesionales que conciben la cocina y el servicio como una forma de arte. Diseñado con una silueta fluida que acompaña el movimiento natural del cuerpo, incorpora un sistema de tirantes cruzados a la espalda que elimina por completo el cansancio cervical. Sus bolsillos asimétricos están calibrados para pinzas, termómetros y libretas de comanda, rematados con costuras triples y remaches de latón pulido.",
    price: 1850,
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop", // Chef / apron mood
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop", // Food styling & apron
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1200&auto=format&fit=crop", // Craft detail
    ],
    materials: [
      "Sarga 100% Algodón Peinado (280 g/m²)",
      "Tirantes desmontables de cuero curtido vegetal",
      "Herrajes y ojales de latón macizo antioxidable",
      "Costuras con hilo Coats Epic de alta resistencia",
    ],
    colors: [
      { name: "Borgoña Atelier", hex: "#480D1F" },
      { name: "Gris Carbón", hex: "#2B2B2B" },
      { name: "Verde Olivo Olivo", hex: "#4A5340" },
      { name: "Arena Natural", hex: "#D8CBB9" },
    ],
    customizable: true,
    features: [
      "Tirantes cruzados en X ajustables con mosquetones de latón",
      "Bolsillo superior para pinzas y termómetro de precisión",
      "Bolsillo ventral dividido con costuras de refuerzo",
      "Tira porta-lito lateral en piel genuina",
      "Largo hasta la rodilla con abertura central ergonómica",
    ],
    idealFor: [
      "Chefs de cocina contemporánea",
      "Restaurantes de autor y fine dining",
      "Sommeliers y jefes de sala",
      "Anfitriones y entusiastas de la gastronomía",
    ],
    dimensions: "84 cm de alto × 72 cm de ancho (ajuste universal adaptable)",
    careGuide: [
      "Desmontar tirantes de piel antes de lavar la prenda",
      "Lavar en máquina en ciclo delicado con agua fría (máx. 30°C)",
      "Usar detergente neutro y evitar blanqueadores ópticos",
      "Secar a la sombra colgado en gancho",
      "Planchar con vapor a temperatura media sobre el reverso",
    ],
    isFeatured: true,
    badge: "Más Solicitado",
  },
  {
    id: "terra",
    slug: "mandil-terra",
    name: "Mandil Terra",
    category: "artesanal",
    categoryLabel: "Atelier & Oficios",
    tagline: "Textura rústica, lino puro y alma artesanal para oficios creativos",
    shortDescription:
      "Lino lavado a la piedra de textura orgánica y caída relajada. Diseñado para pastelería, alfarería, floristería y talleres de creación.",
    description:
      "Inspirado en la tierra y en el ritmo paciente de los talleres manuales. El Mandil Terra celebra la belleza de lo imperfecto y lo natural. El lino europeo prelavado ofrece una transpirabilidad inigualable y una suavidad táctil que mejora lavado tras lavado. Posee un bolsillo amplio tipo canguro para herramientas y una cinta larga envolvente que permite anudarlo al frente con sofisticación bohemia.",
    price: 2150,
    images: [
      "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=1200&auto=format&fit=crop", // Atelier workspace
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1200&auto=format&fit=crop", // Ceramic / pottery apron
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop", // Floral atelier
    ],
    materials: [
      "100% Lino Europeo Lavado a la Piedra (320 g/m²)",
      "Cintas de espiguilla de algodón natural",
      "Etiqueta de tela bordada con monograma Florytela",
    ],
    colors: [
      { name: "Terracota Cálido", hex: "#A85D46" },
      { name: "Lino Crudo / Marfil", hex: "#E8DED2" },
      { name: "Musgo Profundo", hex: "#3D4839" },
      { name: "Azul Añil", hex: "#2C3E50" },
    ],
    customizable: true,
    features: [
      "Diseño envolvente japonés sin ataduras duras o cruzado frontal",
      "Gran bolsillo frontal dividido para pinceles, espátulas o tijeras",
      "Acolchado suave en los hombros para máxima comodidad",
      "Tejido termorregulador y naturalmente antibacteriano",
    ],
    idealFor: [
      "Pasteleros y panaderos artesanales",
      "Floristas y diseñadores botánicos",
      "Ceramistas, escultores y artistas plásticos",
      "Boutiques de autor y concept stores",
    ],
    dimensions: "90 cm de alto × 80 cm de ancho (cobertura amplia)",
    careGuide: [
      "Lavar con agua fría y centrifugado suave",
      "No requiere planchado: el arrugado natural del lino forma parte de su encanto",
      "Secar al aire libre evitando sol directo prolongado",
    ],
    isFeatured: true,
    badge: "Edición Orgánica",
  },
  {
    id: "blanc",
    slug: "mandil-blanc",
    name: "Mandil Blanc",
    category: "gastronomia",
    categoryLabel: "Alta Cocina",
    tagline: "Pureza geométrica, sobriedad y maestría en cocina profesional",
    shortDescription:
      "Loneta blanca inmaculada con pespuntes en contraste sutil o tono sobre tono. El estándar de limpieza impecable para brigadas de vanguardia.",
    description:
      "La quintaesencia del minimalismo culinario. Mandil Blanc proyecta una presencia limpia y pulcra ante cualquier pase de cocina abierta. Elaborado con un tejido tratado con acabado repelente a manchas y fluidos ligeros, combina facilidad de mantenimiento con la estética de sastrería italiana. Los detalles ocultos y el corte sobrio aseguran que la técnica culinaria sea la única protagonista.",
    price: 1750,
    images: [
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1200&auto=format&fit=crop", // Chef portrait minimalist
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop", // Fine dining plating
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop", // Kitchen ambiance
    ],
    materials: [
      "Loneta de Algodón Orgánico Sanforizado (290 g/m²)",
      "Tratamiento protector de teflón ecológico antimanchas",
      "Herrajes ocultos en níquel mate",
    ],
    colors: [
      { name: "Blanco Óptico", hex: "#FAFAFA" },
      { name: "Blanco Roto / Ivory", hex: "#FCFAF6" },
      { name: "Ceniza Pálido", hex: "#DCD8D2" },
    ],
    customizable: true,
    features: [
      "Capa anti-adherente que repele salpicaduras menores",
      "Bolsillo de pecho con sujeción para termómetro y bolígrafo",
      "Tirantes intercambiables en algodón o cuero",
      "Doble refuerzo en la cintura para mayor firmeza",
    ],
    idealFor: [
      "Chefs ejecutivos y reposteros",
      "Cursos de alta cocina y catas",
      "Catering gourmet y eventos exclusivos",
    ],
    dimensions: "82 cm de alto × 70 cm de ancho",
    careGuide: [
      "Apto para lavado profesional a 40°C",
      "Apto para blanqueadores oxigenados sin cloro",
      "Planchar a alta temperatura para reactivar el acabado repelente",
    ],
    isFeatured: true,
    badge: "Clásico Pro",
  },
  {
    id: "sevilla",
    slug: "mandil-sevilla",
    name: "Mandil Sevilla",
    category: "especial",
    categoryLabel: "Edición Especial",
    tagline: "Bordado floral de alta costura, herencia y personalización artística",
    shortDescription:
      "Una joya textil que fusiona motivos botánicos bordados a mano o en bastidor de precisión con base de lino y terciopelo sutil. Hecho por encargo.",
    description:
      "El Mandil Sevilla representa la cumbre artesanal de Florytela. Cada unidad es confeccionada como una pieza de colección numerada. Diseñado por Adriana Martínez en homenaje a la tradición botánica y la sastrería ornamental, ofrece la opción de personalizar el ramo bordado con iniciales o símbolos que cuenten tu historia personal o la de tu espacio.",
    price: 2650,
    images: [
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1200&auto=format&fit=crop", // Botanical embroidery feel
      "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop", // Forest / flora atmosphere
      "https://images.unsplash.com/photo-1607344645866-009c320b5ab8?q=80&w=1200&auto=format&fit=crop", // Textile detail
    ],
    materials: [
      "Lino natural mezclado con sarga de bambú (300 g/m²)",
      "Hilos de seda y algodón mercerizado para bordado",
      "Forro interior suave de algodón batista en pechera",
      "Herrajes en baño de oro envejecido",
    ],
    colors: [
      { name: "Borgoña Imperial", hex: "#480D1F" },
      { name: "Verde Ciprés", hex: "#233329" },
      { name: "Arena Imperial", hex: "#DEC8A9" },
      { name: "Noche Profunda", hex: "#1A1B24" },
    ],
    customizable: true,
    features: [
      "Bordado botánico frontal exclusivo Florytela",
      "Monograma personalizado en hilo de seda incluido",
      "Acabado de dobladillos con puntada invisible de alta sastrería",
      "Certificado de autenticidad firmado por Adriana Martínez",
    ],
    idealFor: [
      "Regalos de alta gama y aniversarios",
      "Hostelería de lujo y marcas boutique",
      "Creadores de contenido y embajadores gastronómicos",
    ],
    dimensions: "86 cm de alto × 74 cm de ancho",
    careGuide: [
      "Lavar en seco o a mano con agua fría y jabón suave",
      "No frotar la zona bordada directamente",
      "Planchar por el revés con un paño de protección",
    ],
    isFeatured: true,
    isNew: true,
    badge: "Edición Atelier",
  },
  {
    id: "studio",
    slug: "mandil-studio",
    name: "Mandil Studio",
    category: "artesanal",
    categoryLabel: "Atelier & Oficios",
    tagline: "Para fotógrafos, artistas, carpinteros y mentes creativas",
    shortDescription:
      "Denim crudo pesado con detalles en cuero cognac y bolsillos modulares reforzados para lentes, herramientas y dispositivos.",
    description:
      "Construido como una armadura de confort para las jornadas en el estudio fotográfico, taller de carpintería fina o mesa de dibujo. El Mandil Studio combina denim japonés selvedge con cuero curtido al roble. Con el paso de los meses y el uso diario, el denim y el cuero desarrollarán una pátina única e irrepetible que refleja el rigor y la pasión de tu oficio.",
    price: 2350,
    images: [
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1200&auto=format&fit=crop", // Studio / denim / craft
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1200&auto=format&fit=crop", // Leather tools / workshop
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop", // Creative lifestyle
    ],
    materials: [
      "Denim Raw 12.5 oz 100% Algodón",
      "Apliques y tiras en Cuero Genuino Cognac",
      "Remaches de cobre macizo estampados a mano",
    ],
    colors: [
      { name: "Denim Índigo Raw", hex: "#1C2D42" },
      { name: "Denim Negro Asfalto", hex: "#1F2124" },
      { name: "Lona Tabaco Vintage", hex: "#7B5B3E" },
    ],
    customizable: true,
    features: [
      "Bolsillo acolchado para smartphone o medidor de luz",
      "Doble porta-herramientas con remaches de cobre",
      "Mosquetón metálico para llaves o paño de limpieza",
      "Tirantes ergonómicos ajustables con hebillas correderas",
    ],
    idealFor: [
      "Fotógrafos y directores de arte",
      "Diseñadores de interiores y ebanistas",
      "Barberos y estilistas de autor",
      "Cerveceros artesanales y destiladores",
    ],
    dimensions: "85 cm de alto × 68 cm de ancho",
    careGuide: [
      "Limpieza puntual en seco o con paño húmedo",
      "Si requiere lavado completo: agua fría, detergente para prendas oscuras, secar al aire",
      "Nutrir el cuero periódicamente con bálsamo natural",
    ],
    isFeatured: true,
    badge: "Alta Resistencia",
  },
  {
    id: "barista",
    slug: "mandil-barista",
    name: "Mandil Barista",
    category: "barista",
    categoryLabel: "Barista & Café",
    tagline: "Agilidad, bolsillos de extracción y estilo en la barra de especialidad",
    shortDescription:
      "Silueta compacta y liviana diseñada junto a campeones baristas. Acceso rápido a termómetros, báscula y toallas de vapor.",
    description:
      "El café de especialidad exige precisión milimétrica y rapidez. El Mandil Barista fue desarrollado tras consultar con baristas y tostadores profesionales. Cuenta con un largo optimizado que no entorpece las sentadillas o movimientos rápidos detrás de la barra, presillas dobles para bayetas de vapor y un bolsillo térmico para herramientas de calibración.",
    price: 1690,
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop", // Specialty coffee barista
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop", // Espresso pour & mood
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop", // Coffee shop interior
    ],
    materials: [
      "Loneta encerada repelente a salpicaduras de café (260 g/m²)",
      "Cintas de algodón reforzado en tejido herringbone",
      "Herrajes niquelados mate de liberación rápida",
    ],
    colors: [
      { name: "Café Moka", hex: "#3D2B1F" },
      { name: "Verde Salvia", hex: "#637061" },
      { name: "Grafito", hex: "#383838" },
      { name: "Beige Tostado", hex: "#C7B299" },
    ],
    customizable: true,
    features: [
      "Doble anillo lateral para colgar paños de vapor",
      "Bolsillo de pechera inclinado para extracción ergonómica de pluma/termómetro",
      "Largo 3/4 que favorece la ventilación y movilidad",
      "Tejido hidrófugo fácil de limpiar con un paño húmedo",
    ],
    idealFor: [
      "Baristas de café de especialidad",
      "Bartenders y mixólogos de coctelería de autor",
      "Catadores y tostadores de café",
    ],
    dimensions: "76 cm de alto × 66 cm de ancho",
    careGuide: [
      "Limpiar salpicaduras superficiales con bayeta húmeda",
      "Lavar en máquina a temperatura máxima de 30°C",
      "No usar secadora eléctrica",
    ],
    isFeatured: false,
    badge: "Especialidad",
  },
  {
    id: "atelier-cintura",
    slug: "mandil-atelier-cintura",
    name: "Mandil Demi Atelier (Cintura)",
    category: "gastronomia",
    categoryLabel: "Alta Cocina",
    tagline: "El mandil medio de tradición bistró con sofisticación moderna",
    shortDescription:
      "Mandil a la cintura confeccionado en sarga pesada con pliegues frontales y fajín de ajuste envolvente. La elección de capitanes y sommeliers.",
    description:
      "Homenaje a la tradición de los cafés y bistrós parisinos y milaneses. El Mandil Demi Atelier se ciñe a la cintura con un fajín ancho que otorga una silueta impecable. Cuenta con doble bolsillo lateral profundo y una abertura central que permite caminar y subir escaleras con total libertad y donaire.",
    price: 1450,
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop", // Restaurant fine dining
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop", // Wine / Sommelier
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop", // Service table
    ],
    materials: [
      "Sarga Gabardina 100% Algodón (310 g/m²)",
      "Cintas anchas reforzadas para lazada frontal o trasera",
      "Costuras de refuerzo en esquinas de bolsillos",
    ],
    colors: [
      { name: "Negro Bistró", hex: "#1A1A1A" },
      { name: "Borgoña Profundo", hex: "#350916" },
      { name: "Gris Taupe", hex: "#8E8071" },
    ],
    customizable: true,
    features: [
      "Corte medio de 65 cm con apertura para zancada",
      "Bolsillo derecho con división para sacacorchos y comanda",
      "Fajín extra largo para ajuste cómodo a cualquier contorno",
      "Caída pesada y elegante sin deformarse",
    ],
    idealFor: [
      "Sommeliers y capitanes de meseros",
      "Hostelería de lujo y banquetería",
      "Personal de sala y mixología clásica",
    ],
    dimensions: "65 cm de alto × 82 cm de ancho",
    careGuide: [
      "Lavar en lavadora hasta 40°C",
      "Planchar bien extendido para marcar los pliegues de sastrería",
    ],
    isFeatured: false,
  },
  {
    id: "sommelier-lino",
    slug: "mandil-sommelier-lino",
    name: "Mandil Sommelier Lino & Seda",
    category: "especial",
    categoryLabel: "Edición Especial",
    tagline: "Distinción ceremonial para cata y hospitalidad de etiqueta",
    shortDescription:
      "Mezcla exclusiva de lino lavado y fibras de seda mate en tono carbón con detalles en tono borgoña y oro envejecido.",
    description:
      "Una creación reservada para los momentos donde la hospitalidad roza lo ceremonial. El Mandil Sommelier combina la nobleza del lino y la caída sedosa de fibras botánicas nobles. Posee bolsillo térmico para lito y compartimento diseñado milimétricamente para termómetro de vino y sacacorchos de colección.",
    price: 2890,
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop", // Wine glass & elegance
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop", // Cellar mood
      "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?q=80&w=1200&auto=format&fit=crop", // Luxury ambiance
    ],
    materials: [
      "70% Lino Francés, 30% Fibras Botánicas de Bambú y Seda (310 g/m²)",
      "Remaches y pasadores en Latón Dorado Satinado",
      "Tirantes de cuero vacuno curtición vegetal encerado",
    ],
    colors: [
      { name: "Carbón Atelier", hex: "#242223" },
      { name: "Borgoña Noir", hex: "#350916" },
      { name: "Taupe Imperial", hex: "#A39382" },
    ],
    customizable: true,
    features: [
      "Compartimento especial para sacacorchos de láminas y dos tiempos",
      "Sujeción de lito magnética oculta en la cintura",
      "Bordado de iniciales en caligrafía clásica incluido",
      "Caja de presentación en cartón rígido entelado con lazo de lino",
    ],
    idealFor: [
      "Grandes sommeliers y embajadores vinícolas",
      "Catas privadas y clubes de vino",
      "Regalo de alto impacto para amantes del vino y la gastronomía",
    ],
    dimensions: "86 cm de alto × 72 cm de ancho",
    careGuide: [
      "Limpieza en seco recomendada",
      "Tratar cuero con crema neutra especial",
    ],
    isFeatured: false,
    isNew: true,
    badge: "Gran Reserva",
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

  return PRODUCTS.filter((p) => p.slug !== currentSlug && (p.category === current.category || p.isFeatured)).slice(
    0,
    limit
  );
}
