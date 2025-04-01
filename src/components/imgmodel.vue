<template>
    <Transition name="fade">
        <div v-if="imageModel" class="fixed inset-0 z-[500] flex items-center justify-center backdrop-blur-md" @click="imageModel = undefined">
            <div class="absolute inset-0 bg-black/30"></div>
            <img :src="imageModel.src" :alt="imageModel.alt" class="max-w-full max-h-full object-contain z-[2]" />
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useEventListener, onKeyStroke } from '@vueuse/core';
const imageModel = ref<HTMLImageElement>();

useEventListener('click', async (e) => {
    const path = Array.from(e.composedPath());
    console.log('path: ', path);

    const first = path[0];
    if (!(first instanceof HTMLElement)) return;
    if (first.tagName !== 'IMG') return;

    if (path.some((el) => el instanceof HTMLElement && ['A', 'BUTTON'].includes(el.tagName))) return;

    // Do not open image when they are moving. Mainly for mobile to avoid conflict with hovering behavior.
    const pos = first.getBoundingClientRect();

    await new Promise((resolve) => {
        window.setTimeout(resolve, 50);
    });
    const newPos = first.getBoundingClientRect();
    if (pos.left !== newPos.left || pos.top !== newPos.top) return;

    imageModel.value = first as HTMLImageElement;
});
onKeyStroke('Escape', (e) => {
    if (imageModel.value) {
        imageModel.value = undefined;
        e.preventDefault();
    }
});
</script>
<style lang="scss"></style>
