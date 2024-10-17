<template>
  <footer class="footer ">
    <div class="container">
      <div class="row">
        <!-- Sección de la Marca -->
        <div class="col-md-4 ms-auto ">
          <div>
            <RouterLink :to="brand.route">
              <img :src="brand.logo" class="ms-n6 footer-logo " alt="main_logo" />
            </RouterLink>
          </div>
          <div>
            <ul class="d-flex flex-row nav navbar-nav-hover">
              <li class="nav-item dropdown dropdown-hover" v-for="{ icon, link } of socials" :key="link">
                <a class="nav-link pe-1" :href="link" target="_blank" v-html="icon"></a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Sección de Menús -->
        <div class="col-md-3 col-sm-6 col-6  custom-heading" v-for="{ name, items } of menus" :key="name">
          <h6 class="text-lg moving-text">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav ">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <RouterLink :to="{ name: item.href }" class="">
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <!-- Sección de Derechos Reservados -->
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Todos los derechos reservados. &copy; {{ new Date().getFullYear() }} Alondra Nuts
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import logoDark from "@/assets/img/propias/fondo-home.png";

defineProps({
  brand: {
    type: Object,
    logo: String,
    route: String,
    default: () => ({
      name: "Alondra Nuts",
      logo: logoDark,
      route: "/",
    }),
  },
  socials: {
    type: Array,
    default: () => [
      {
        icon: '<i class="fab fa-facebook text-lg opacity-8"></i>',
        link: "https://www.facebook.com",
      },
      {
        icon: '<i class="fab fa-twitter text-lg opacity-8"></i>',
        link: "https://twitter.com",
      },
      {
        icon: '<i class="fab fa-instagram text-lg opacity-8"></i>',
        link: "https://www.instagram.com/alondranuts/",
      }
    ],
  },
  menus: {
    type: Array,
    default: () => [
      {
        name: "Información",
        items: [
          { name: "Nosotros", href: "about" },
          { name: "Comentarios", href: "about" },
          { name: "Porque Nosotros", href: "about" },
          { name: "Beneficios Nuts", href: "about" },
        ],
      },
      {
        name: "Nuestros Productos",
        items: [
          { name: "Confitados", href: "about" },
          { name: "Naturales", href: "about" },
          { name: "Los Más Visto", href: "about" },
          { name: "Recientemente", href: "about" },
        ],
      },
      {}, {}
    ],
  },
});
</script>
<style scoped>
.custom-heading {
  display: flex;
  flex-direction: column;
  justify-content: center; 
}
.moving-text {
  margin-left: -5%; 
}
</style>
