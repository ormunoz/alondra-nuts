<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Productos"
                description="¡Tenemos una gran variedad de productos para todos los gustos!"
                :count="25"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Clientes"
                description="Con una gran cantidad de clientes que nos avala la calidad"
                :count="50"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Comentarios"
                description="Más de 20 Comentarios que aprueban nuestros productos."
                :count="20"
                :duration="3000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
