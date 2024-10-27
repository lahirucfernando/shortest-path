<template>
    <div class="path-selector-form">
        <v-form ref="formRef">
            <h3 class="path-selector-form--title">Select Path</h3>
            <v-select v-model="graphStore.fromNode" :items="graphStore.nodesList" label="From Node" outlined
                :rules="[requiredRule]" @update:model-value="graphStore.resetResults()"></v-select>
            <v-select v-model="graphStore.toNode" :items="graphStore.nodesList" label="To Node" outlined
                :rules="[requiredRule]" @update:model-value="graphStore.resetResults()" class="mt-3"></v-select>

            <v-row class="mt-4">
                <v-col>
                    <v-btn outlined rounded="lg" class="clear-btn text-none" @click="onClear">Clear</v-btn>

                    <v-btn rounded="lg" class="calculate-btn ml-3 text-none" @click="onCalculate">
                        Calculate
                        <template v-slot:append>
                            <v-img src="@/assets/calculator-icon.svg" width="20" height="20" class="ml-1"></v-img>
                        </template>
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>

</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import { VForm } from 'vuetify/components/VForm';
import { useGraphStore } from '@/stores/graphStore';


const formRef: Ref<VForm | null> = ref(null);
const graphStore = useGraphStore();

const requiredRule = (value: string) => !!value || 'This field is required';

const onClear = () => {
    formRef.value?.reset()
    graphStore.resetResults()
};

const onCalculate = () => {
    if (formRef.value?.validate()) {
        graphStore.calculateShortestPath();
    }
};

</script>


<style lang="scss" scoped>
@import '@/styles/variables.scss';

.path-selector-form {
    padding: 32px 24px 32px 32px;

    &--title {
        color: $primary-70;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        padding-bottom: 24px;
    }

    .clear-btn {
        color: $secondary-40;
        border: 1px solid $secondary-40;
    }

    .calculate-btn {
        color: $white;
        background-color: $secondary-40;
    }
}
</style>