<template>
  <div class="header-wrapper">
    <h1 class="header-wrapper--heading">Dijkstra's Algorithm Calculator</h1>
    <p class="header-wrapper--sub-text">Discovering Optimal Routes Through Nodes Using Dijkstra's Method</p>
  </div>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.header-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: $primary-70;
  height: 377px;
  color: $white;

  &--heading {
    margin-top: 5rem;
    font-size: 2.25rem;
    font-weight: 600;
    line-height: 3rem;
  }

  &--sub-text {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.4rem;
  }
}
</style>