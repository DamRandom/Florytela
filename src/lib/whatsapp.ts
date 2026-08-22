import { SITE_CONFIG } from "./constants";

export interface WhatsAppLinkOptions {
  type?: "general" | "product" | "custom" | "b2b";
  productName?: string;
  productSlug?: string;
  selectedColor?: string;
  quantity?: number;
  customNotes?: string;
  customType?: string;
  brandName?: string;
}

export function createWhatsAppLink(options: WhatsAppLinkOptions = {}): string {
  const {
    type = "general",
    productName,
    productSlug,
    selectedColor,
    quantity,
    customNotes,
    brandName,
  } = options;

  let text = "";

  switch (type) {
    case "product":
      text = `Hola Adriana y equipo Florytela ✨\nMe interesa conocer más sobre el mandil *${productName || "de su catálogo"}*${
        selectedColor ? ` en color *${selectedColor}*` : ""
      }${quantity && quantity > 1 ? ` (cantidad: ${quantity})` : ""}.\n¿Me podrían brindar información de disponibilidad y opciones de entrega?`;
      if (productSlug) {
        text += `\nReferencia: ${SITE_CONFIG.url}/catalogo/${productSlug}`;
      }
      break;

    case "custom":
      text = `Hola Adriana 👋 Me gustaría cotizar un *mandil personalizado* con detalles a medida (bordado/cuero). ${
        customNotes ? `\nDetalles: ${customNotes}` : ""
      }\n¿Cómo podemos iniciar el proceso de diseño en el atelier?`;
      break;

    case "b2b":
      text = `Hola equipo Florytela 🥂 Les escribo de parte de *${brandName || "nuestra marca/restaurante"}* para consultar una propuesta de *mandiles y textiles corporativos*. ¿Podríamos agendar una llamada o recibir su dossier para marcas?`;
      break;

    case "general":
    default:
      text = `Hola Adriana y equipo Florytela ✨ Estuve navegando por su sitio web y me gustaría recibir asesoría sobre sus mandiles de autor.`;
      break;
  }

  const encodedMessage = encodeURIComponent(text);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;
}
