export const siteData = {
  brand: {
    name: "DJ Breno",
    signature: "DJ e experiência audiovisual para eventos",
    location: "Uberlândia e região",
    label: "Casamentos • Aniversários • Corporativo",
    tagline: "+ 650 eventos entregues em 8 anos de carreira",
  },
  seo: {
    title: "DJ Breno | Casamentos, Aniversários e Corporativo",
    description:
      "Site institucional do DJ Breno para eventos sociais e corporativos, com contato para orçamento, apresentação da marca e acesso aos perfis do Instagram.",
  },
  nav: [
    { label: "Início", shortLabel: "Início", icon: "home", href: "#inicio" },
    { label: "Sobre", shortLabel: "Sobre", icon: "user", href: "#sobre" },
    { label: "Serviços", shortLabel: "Serviços", icon: "disc", href: "#servicos" },
    { label: "Instagram", shortLabel: "Insta", icon: "instagram", href: "#instagram" },
    { label: "Contato", shortLabel: "Contato", icon: "message", href: "#contato" },
  ],
  hero: {
    headline: "O som certo para transformar o seu evento em uma experiência memorável.",
    subheadline:
      "Performance musical, leitura de pista e presença profissional para casamentos, aniversários e eventos corporativos.",
    ctaPrimary: "Solicitar orçamento",
    ctaSecondary: "Ver Instagram",
    backgroundImage: "./foto1.jpg",
    highlights: [
      "Casamentos",
      "Aniversários",
      "Corporativo",
      "Experiência audiovisual",
    ],
  },
  contact: {
    whatsapp: {
      phoneE164: "5500000000000",
      display: "(00) 00000-0000",
      defaultMessage:
        "Olá! Quero solicitar um orçamento para o meu evento.",
    },
    instagram: {
      handle: "@djbrenomatheus",
      url: "https://www.instagram.com/djbrenomatheus/",
    },
    audiovisualInstagram: {
      handle: "@brenomatheusaudiovisual",
      url: "https://www.instagram.com/brenomatheusaudiovisual/",
    },
  },
  metrics: [
    { value: "650+", label: "eventos entregues" },
    { value: "8 anos", label: "de carreira" },
    { value: "2 perfis", label: "de conteúdo e bastidores" },
  ],
  about: {
    title: "Quem é o DJ Breno",
    text:
      "Breno atua em eventos sociais e corporativos com repertório estratégico, leitura de público e conduções que respeitam a energia de cada momento da festa.",
    tagline:
      "Uma apresentação pensada para criar atmosfera, manter a pista viva e entregar profissionalismo do início ao fim.",
    imageSrc: "./foto1.jpg",
    imageAlt: "DJ Breno em apresentação",
    note: "Para usar a foto real, basta adicionar o arquivo em ./foto1.jpg.",
  },
  services: {
    title: "Serviços",
    subtitle: "Formatos preparados para diferentes tipos de evento.",
    items: [
      {
        title: "Casamentos",
        description:
          "Trilha sonora alinhada com cerimônia, recepção e pista, respeitando cada etapa da celebração.",
      },
      {
        title: "Aniversários",
        description:
          "Sets dinâmicos para festas intimistas ou grandes comemorações, sempre acompanhando o perfil dos convidados.",
      },
      {
        title: "Corporativo",
        description:
          "Ambientação sonora e condução musical com postura profissional para marcas, confraternizações e eventos especiais.",
      },
    ],
  },
  socialProfiles: [
    {
      title: "@djbrenomatheus",
      description: "Perfil principal com apresentações, eventos e identidade do DJ.",
      href: "https://www.instagram.com/djbrenomatheus/",
    },
    {
      title: "@brenomatheusaudiovisual",
      description: "Bastidores, estrutura e conteúdo audiovisual dos eventos.",
      href: "https://www.instagram.com/brenomatheusaudiovisual/",
    },
  ],
  instagram: {
    title: "Instagram",
    subtitle: "Acompanhe o perfil oficial e os bastidores do trabalho do DJ Breno.",
    profileTitle: "@djbrenomatheus",
    profileSubtitle: "DJ Breno",
    description:
      "Veja momentos de pista, estrutura, bastidores e a energia dos eventos direto no Instagram.",
    embedUrl: "https://www.instagram.com/djbrenomatheus/embed",
    buttonLabel: "Ver no Instagram",
  },
  contactSection: {
    title: "Contato para orçamento",
    cta: "Vamos conversar sobre a trilha sonora do seu evento.",
    secondary:
      "Envie a data, cidade e tipo de evento para receber um atendimento personalizado.",
    primaryButton: "Chamar no WhatsApp",
    secondaryButton: "Enviar direct",
  },
};

export function buildWhatsAppLink(phoneE164, message) {
  const text = encodeURIComponent(message || "");
  const query = text ? `?text=${text}` : "";
  return `https://wa.me/${phoneE164}${query}`;
}
