const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    heading: "Secciones y/o Categorías",
    description:
      "Tenemos una gran variedad de Secciones y/o Categorías para compartir.",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "Beneficios Nuts",
        // subtitle: "10 Examples",
        route: "page-headers",
        pro: false,
      },
      {
        image: imgFeatures,
        title: "Productos Confitados",
        // subtitle: "14 Examples",
        route: "page-features",
        pro: false,
      },
      {
        image: imgPricing,
        title: "Productos Naturales",
        // subtitle: "8 Examples",
        route: "presentation",
        pro: true,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        title: "Comentarios",
        // subtitle: "1 Example",
        route: "presentation",
        pro: true,
      },
      {
        image: imgBlogPosts,
        title: "Los Más Vistos",
        // subtitle: "11 Examples",
        route: "presentation",
        pro: true,
      },
      {
        image: imgTestimonials,
        title: "Agregados este Mes",
        // subtitle: "11 Examples",
        route: "presentation",
        pro: true,
      },
    ],
  },
];
