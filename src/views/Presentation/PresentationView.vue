<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
//images
import FondoHome from "@/assets/img/propias/fondo-home.png";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div class="page-header min-vh-75 position-relative"
      :style="`background-image: url(${FondoHome}); background-size: contain; background-position: center; background-repeat: no-repeat;`"
      loading="lazy">
      <!-- Overlay Semitransparente -->
      <div class="overlay" style="
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
        "></div>

      <div class="container position-relative" style="z-index: 1">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <p class="lead text-white px-5 mt-6" :style="{ fontWeight: '500' }">
              ¡Bienvenidos! Descubre nuestra selección de frutos secos naturales
              para una dieta balanceada y productos confitados exquisitos para
              endulzar tu día.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <!-- <PresentationInformation /> -->
    <PresentationExample :data="data" />
    <!-- <PresentationPages /> -->
    <BuiltByDevelopers />

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100" :icon="{
            component: 'img',
            src: 'https://avatar.iran.liara.run/public',
            alt: 'Perfil por defecto',
            color: 'success',
          }" title="Titulo comentario" description="Descripción del comentario." :label="'Estrellitas'" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100" :icon="{
            component: 'img',
            src: 'https://avatar.iran.liara.run/public',
            alt: 'Perfil por defecto',
            color: 'success',
          }" title="Titulo comentario" description="Descripción del comentario." :label="'Estrellitas'" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100" :icon="{
            component: 'img',
            src: 'https://avatar.iran.liara.run/public',
            alt: 'Perfil por defecto',
            color: 'success',
          }" title="Titulo comentario" description="Descripción del comentario." :label="'Estrellitas'" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100" :icon="{
            component: 'img',
            src: 'https://avatar.iran.liara.run/public',
            alt: 'Perfil por defecto',
            color: 'success',
          }" title="Titulo comentario" description="Descripción del comentario." :label="'Estrellitas'" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100" :icon="{
            component: 'img',
            src: 'https://avatar.iran.liara.run/public',
            alt: 'Perfil por defecto',
            color: 'success',
          }" title="Titulo comentario" description="Descripción del comentario." :label="'Estrellitas'" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100" :icon="{
            component: 'img',
            src: 'https://avatar.iran.liara.run/public',
            alt: 'Perfil por defecto',
            color: 'success',
          }" title="Titulo comentario" description="Descripción del comentario." :label="'Estrellitas'" />
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Gracias por tu apoyo!</h4>
            <p class="lead mb-0">Siempre le pondremos todo el amor a nuestros productos, Ayudanos compartiendo. </p>
          </div>
          <div class="col-lg-6 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton route="https://twitter.com/intent/tweet?url=https://vercatalogo.com/alondranuts/products/by-all/all" component="twitter" color="twitter" label="" />
            <MaterialSocialButton route="https://www.facebook.com/sharer/sharer.php?u=https://vercatalogo.com/alondranuts/products/by-all/all" component="facebook-square" color="facebook" label=""
              :share="true" />
            <MaterialSocialButton route="https://www.instagram.com/alondranuts/" component="instagram" color="instagram" label="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
