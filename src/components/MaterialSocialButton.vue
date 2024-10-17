<script setup>
const props = defineProps({
  route: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  component: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  share: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <a :href="route" class="btn me-2" :class="`btn-${props.color}`" target="_blank">
    <i :class="`fab fa-${props.component} fa-lg ${$attrs.class === 'btn-icon-only' ? 'me-0' : 'me-1'} `"></i>
    {{ props.label }}
  </a>
</template>

