export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  trending?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Smartwatch Ultra Series 9",
    price: 199.90,
    image: "https://images.unsplash.com/photo-1546868871-70c122469d8b?w=800&q=80",
    category: "Eletrônicos",
    description: "O smartwatch mais avançado com monitoramento de saúde 24/7 e GPS integrado.",
    rating: 4.8,
    reviews: 1250,
    trending: true
  },
  {
    id: "2",
    name: "Fone de Ouvido Noise Cancelling Pro",
    price: 299.90,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Eletrônicos",
    description: "Cancelamento de ruído ativo e som de alta fidelidade para uma experiência imersiva.",
    rating: 4.9,
    reviews: 890,
    trending: true
  },
  {
    id: "3",
    name: "Mini Projetor Portátil 4K",
    price: 450.00,
    image: "https://images.unsplash.com/photo-1535016120720-40c646be4480?w=800&q=80",
    category: "Eletrônicos",
    description: "Transforme qualquer parede em um cinema com este projetor compacto e potente.",
    rating: 4.7,
    reviews: 450,
    trending: true
  },
  {
    id: "4",
    name: "Luminária de Mesa Sunset",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=800&q=80",
    category: "Casa",
    description: "Crie a atmosfera perfeita com a luz do pôr do sol em seu quarto.",
    rating: 4.6,
    reviews: 2100
  },
  {
    id: "5",
    name: "Teclado Mecânico RGB Wireless",
    price: 350.00,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
    category: "Eletrônicos",
    description: "Teclado compacto com switches azuis e iluminação personalizável.",
    rating: 4.8,
    reviews: 670
  },
  {
    id: "6",
    name: "Garrafa Térmica Inteligente",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1602143393494-721d002d3405?w=800&q=80",
    category: "Acessórios",
    description: "Display LED de temperatura e isolamento a vácuo por 24 horas.",
    rating: 4.5,
    reviews: 1500
  },
  {
    id: "7",
    name: "Umidificador de Ar Ultrassônico",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    category: "Casa",
    description: "Melhore a qualidade do ar com estilo e silêncio.",
    rating: 4.7,
    reviews: 980
  },
  {
    id: "8",
    name: "Kit de Pincéis de Maquiagem Profissional",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    category: "Beleza",
    description: "12 pincéis essenciais para uma maquiagem impecável.",
    rating: 4.9,
    reviews: 3200
  },
  {
    id: "9",
    name: "Carregador Portátil MagSafe",
    price: 189.00,
    image: "https://images.unsplash.com/photo-1610944230744-2958a9a34891?w=800&q=80",
    category: "Eletrônicos",
    description: "Carregamento magnético rápido para o seu iPhone.",
    rating: 4.8,
    reviews: 1100
  },
  {
    id: "10",
    name: "Massageador Muscular Elétrico",
    price: 249.90,
    image: "https://images.unsplash.com/photo-1544117518-30dd5ff7a986?w=800&q=80",
    category: "Saúde",
    description: "Alívio imediato para tensões musculares com 6 níveis de intensidade.",
    rating: 4.7,
    reviews: 750
  },
  {
    id: "11",
    name: "Câmera de Segurança Wi-Fi 360",
    price: 199.00,
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800&q=80",
    category: "Casa",
    description: "Monitore sua casa de qualquer lugar com visão noturna e áudio bidirecional.",
    rating: 4.6,
    reviews: 1300
  },
  {
    id: "12",
    name: "Mochila Antifurto com USB",
    price: 149.90,
    image: "https://images.unsplash.com/photo-1553062407-98eeb94c6a62?w=800&q=80",
    category: "Acessórios",
    description: "Design moderno, resistente à água e com compartimento para notebook.",
    rating: 4.8,
    reviews: 2400
  },
  {
    id: "13",
    name: "Aspirador de Pó Robô Inteligente",
    price: 899.00,
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80",
    category: "Casa",
    description: "Limpeza automática programável para todos os tipos de piso.",
    rating: 4.5,
    reviews: 560
  },
  {
    id: "14",
    name: "Liquidificador Portátil USB",
    price: 99.90,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&q=80",
    category: "Cozinha",
    description: "Sucos e shakes frescos em qualquer lugar.",
    rating: 4.4,
    reviews: 1800
  },
  {
    id: "15",
    name: "Ring Light com Tripé",
    price: 129.00,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&q=80",
    category: "Eletrônicos",
    description: "Iluminação profissional para seus vídeos e fotos.",
    rating: 4.7,
    reviews: 4100
  },
  {
    id: "16",
    name: "Mouse Gamer Ergonômico",
    price: 149.00,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80",
    category: "Eletrônicos",
    description: "Alta precisão e conforto para longas sessões de jogo.",
    rating: 4.8,
    reviews: 920
  },
  {
    id: "17",
    name: "Escova Alisadora 3 em 1",
    price: 119.90,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    category: "Beleza",
    description: "Alisa, seca e modela com tecnologia de íons negativos.",
    rating: 4.6,
    reviews: 2700
  },
  {
    id: "18",
    name: "Organizador de Cabos Magnético",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80",
    category: "Acessórios",
    description: "Mantenha sua mesa organizada com estilo.",
    rating: 4.9,
    reviews: 150
  },
  {
    id: "19",
    name: "Tapete de Yoga Antiderrapante",
    price: 139.00,
    image: "https://images.unsplash.com/photo-1592432676556-26d5630e4202?w=800&q=80",
    category: "Saúde",
    description: "Material ecológico e alta densidade para seus exercícios.",
    rating: 4.7,
    reviews: 840
  },
  {
    id: "20",
    name: "Suporte para Notebook Ajustável",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80",
    category: "Acessórios",
    description: "Melhore sua postura com 6 níveis de ajuste.",
    rating: 4.8,
    reviews: 1200
  },
  {
    id: "21",
    name: "Mini Seladora de Embalagens",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1584263343369-148553fc824d?w=800&q=80",
    category: "Cozinha",
    description: "Mantenha seus alimentos frescos por muito mais tempo.",
    rating: 4.3,
    reviews: 3500
  },
  {
    id: "22",
    name: "Lâmpada Inteligente RGB Wi-Fi",
    price: 69.90,
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80",
    category: "Casa",
    description: "Controle a iluminação por voz ou pelo celular.",
    rating: 4.7,
    reviews: 5200
  },
  {
    id: "23",
    name: "Kit de Lentes para Celular",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
    category: "Eletrônicos",
    description: "Macro, Wide e Fisheye para fotos incríveis com seu smartphone.",
    rating: 4.5,
    reviews: 640
  },
  {
    id: "24",
    name: "Difusor de Aromas com LED",
    price: 149.00,
    image: "https://images.unsplash.com/photo-1602928294221-441f03b88543?w=800&q=80",
    category: "Casa",
    description: "Aromaterapia e cromoterapia em um único aparelho.",
    rating: 4.8,
    reviews: 1900
  },
  {
    id: "25",
    name: "Balança Digital de Bioimpedância",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1591336397452-944686489379?w=800&q=80",
    category: "Saúde",
    description: "Acompanhe 13 índices corporais pelo seu celular.",
    rating: 4.6,
    reviews: 2100
  },
  {
    id: "26",
    name: "Fone de Ouvido Condução Óssea",
    price: 229.00,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
    category: "Eletrônicos",
    description: "Ouça música sem bloquear seus ouvidos, ideal para esportes.",
    rating: 4.7,
    reviews: 430
  },
  {
    id: "27",
    name: "Mini Ar Condicionado Portátil",
    price: 179.90,
    image: "https://images.unsplash.com/photo-1585336139118-132f7f21503e?w=800&q=80",
    category: "Casa",
    description: "Refresque seu ambiente pessoal de forma econômica.",
    rating: 4.2,
    reviews: 1100
  },
  {
    id: "28",
    name: "Tripé Polvo Flexível",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?w=800&q=80",
    category: "Acessórios",
    description: "Prenda seu celular em qualquer lugar para fotos perfeitas.",
    rating: 4.6,
    reviews: 3800
  },
  {
    id: "29",
    name: "Espelho de Maquiagem com LED",
    price: 99.00,
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
    category: "Beleza",
    description: "Iluminação ajustável e zoom para detalhes precisos.",
    rating: 4.7,
    reviews: 1600
  },
  {
    id: "30",
    name: "Barbeador Elétrico 5 em 1",
    price: 189.00,
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
    category: "Beleza",
    description: "Corte preciso e multifuncional para barba e cabelo.",
    rating: 4.8,
    reviews: 870
  }
];
