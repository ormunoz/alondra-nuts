<script setup>
import { computed } from 'vue';

// Definición de las propiedades del componente
const props = defineProps({
  color: {
    type: Object,
    default: () => ({
      text: "",
      background: "bg-gray-100",
    }),
  },
  icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  action: {
    type: Object,
    required: false,
  },
});

// Computed para determinar si el icono es una imagen o no
const isImageIcon = computed(() => props.icon.component === 'img');
</script>

<template>
  <div class="info-horizontal border-radius-xl d-block d-md-flex" :class="`${props.color.background}`">
    <!-- Renderizar ícono de Material o Imagen -->
    <i v-if="!isImageIcon" class="material-icons text-3xl" :class="`text-${props.icon.color}`">
      {{ props.icon.component }}
    </i>
    <img v-else :src="props.icon.src" :alt="props.icon.alt || 'Imagen de perfil'" class="icon-image" />

    <!-- Título y Descripción -->
    <div class="ps-0 ps-md-3 mt-3 mt-md-0">
      <h5 :class="`text-${props.color.text}`">{{ props.title }}</h5>
      <p :class="`text-${props.color.text}`">
        {{ props.description }}
      </p>
      
      <!-- Acción / Enlace -->
      <a v-if="props.action?.route" :href="props.action.route" class="icon-move-right" :class="`text-${props.action.label.color ?? 'warning'}`">
        {{ label }}
        <i class="fas fa-arrow-right text-sm ms-1"></i>
      </a>
      <p v-else>
        {{ label }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.icon-image {
  width: 50px; /* Ajusta el tamaño según necesites */
  height: 50px; /* Ajusta el tamaño según necesites */
  border-radius: 50%; /* Hace la imagen redonda */
}
</style>
