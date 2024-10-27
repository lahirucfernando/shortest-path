<template>
    <div class="card-wrapper">
        <v-card width="721" min-height="344" elevation="10">
            <v-row>
                <v-col class="pa-0" cols="12" md="6">
                    <PathSelector />
                </v-col>

                <v-col class="pa-0"  cols="12" md="6">
                    <ResultDisplay />
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script setup lang="ts">
import PathSelector from './PathSelectorForm.vue';
import ResultDisplay from './ResultDisplay.vue';

</script>

<style lang="scss" scoped>
.card-wrapper {
    position: absolute;
    top: 247px;
    left: 50%;
    transform: translateX(-50%);

    .v-card {
        border-radius: 8px;
    }
}
</style>