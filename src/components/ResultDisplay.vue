<template>
  <div class="result-wrapper" v-if="graphStore.result">
    <h3 class="result-wrapper--title">Result</h3>
    <div class="result-wrapper--body">
      <p>From Node Name = “{{ graphStore.fromNode }}”, To Node Name = ”{{ graphStore.toNode }}”: {{ graphStore.result.path.join(", ") }}</p>
      <p class="pt-5">Total Distance: {{ graphStore.result.distance }}</p>
    </div>
  </div>
  <div v-else class="empty-result-wrapper">
    <v-img
        class="mb-4"
        height="202"
        src="@/assets/default-img.svg"
      />
  </div>
</template>

<script setup lang="ts">
import { useGraphStore } from '@/stores/graphStore';
const graphStore = useGraphStore();

</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.result-wrapper {
  background: $neutrals-5;
  height: 100%;
  padding: 32px 32px 40px 32px;

  &--title {
        color: $primary-70;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        padding-bottom: 16px;
    }

  &--body{
    border-radius: 8px;
    height: 364px;
    background: $white;
    padding: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;    
  }
}

.empty-result-wrapper{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>