<template>
  <nav class="navbar navbar-expand-lg top-0" :class="{
    'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
      props.transparent,
    'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
      props.sticky,
    'navbar-light bg-white py-3': props.light,
    'navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
  }">
    <div :class="props.transparent || props.light || props.dark
      ? 'container'
      : 'container-fluid px-0'
      ">
      <!-- Nombre de la Marca (Visible en todas las pantallas) -->
      <RouterLink class="navbar-brand" :class="[
        (props.transparent && textDark.value) || !props.transparent
          ? 'text-dark font-weight-bolder ms-sm-3'
          : 'text-white font-weight-bolder ms-sm-3',
        props.transparent || props.dark
          ? 'text-white'
          : 'font-weight-bolder ms-sm-3',
      ]" :to="{ name: 'presentation' }" rel="tooltip" title="Home Page"
        data-placement="bottom">
        Alondra Nuts
      </RouterLink>

      <!-- Botón de Hamburguesa (a la derecha) -->
      <button class="navbar-toggler shadow-none ms-auto" type="button" data-bs-toggle="collapse"
        data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>

      <!-- Contenido del Menú -->
      <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2 animate__animated animate__fadeIn">
            <RouterLink :to="{ name: 'about' }" class="border-radius-md d-flex align-items-center">
              <i class="fa fa-box me-2 d-lg-none"></i> <!-- Icono de productos -->
              <span>Productos</span>
            </RouterLink>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2 animate__animated animate__fadeIn">
            <RouterLink :to="{ name: 'contactus' }" class="border-radius-md d-flex align-items-center">
              <i class="fa fa-hand-holding-heart me-2 d-lg-none"></i> <!-- Icono de beneficios -->
              <span>Beneficios</span>
            </RouterLink>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2 animate__animated animate__fadeIn">
            <RouterLink :to="{ name: 'about' }" class="border-radius-md d-flex align-items-center">
              <i class="fa fa-users me-2 d-lg-none"></i> <!-- Icono de quienes somos -->
              <span>Nosotros</span>
            </RouterLink>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2 animate__animated animate__fadeIn">
            <RouterLink :to="{ name: 'author' }" class="border-radius-md d-flex align-items-center">
              <i class="fa fa-comments me-2 d-lg-none"></i> <!-- Icono de comentarios -->
              <span>Comentarios</span>
            </RouterLink>
          </li>
          <!-- Mostrar solo si el usuario es administrador -->
          <li v-if="isAdmin" class="nav-item dropdown dropdown-hover mx-2 animate__animated animate__fadeIn">
            <RouterLink :to="{ name: 'about' }" class="border-radius-md d-flex align-items-center">
              <i class="fa fa-cogs me-2 d-lg-none"></i> <!-- Icono de administración -->
              <span>Administración</span>
            </RouterLink>
          </li>
          <!-- Mostrar solo si el usuario no está autenticado -->
          <li v-if="!isAuthenticated" class="nav-item dropdown dropdown-hover mx-2 animate__animated animate__fadeIn">
            <RouterLink :to="{ name: 'signin-basic' }" class="border-radius-md d-flex align-items-center">
              <i class="fa fa-sign-in-alt me-2 d-lg-none"></i>
              <span>Iniciar Sesión</span>
            </RouterLink>
          </li>
          <!-- Mostrar solo si el usuario está autenticado -->
          <li v-if="isAuthenticated" class="nav-item dropdown dropdown-hover mx-2 animate__animated animate__fadeIn">
            <button @click="logout" class="border-radius-md d-flex align-items-center bg-transparent border-0">
              <i class="fa fa-sign-out-alt me-2 d-lg-none"></i>
              <span>Cerrar Sesión</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

const props = defineProps({
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

const isAuthenticated = ref(true);
const isAdmin = ref(true);

const logout = () => {
  isAuthenticated.value = false;
  isAdmin.value = false;
};

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>

<style scoped>

@keyframes slide-down {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
