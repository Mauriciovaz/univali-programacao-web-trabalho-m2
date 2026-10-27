<script setup>
defineProps({
    text: {
        required: true
    },
    icon: {
        required: false
    },
    type: {
        required: false
    }
});
</script>
<template>
    <button type="{{ type ?? 'button' }}" class="c-button container" v-if="!link">
        <span>{{ text }}</span>
        <component v-if="icon" :is="icon" />
    </button>
</template>

<style lang="scss" scoped>
.c-button {
    &.container {
        background-color: var(--yellow);
        color: var(--green-dark);
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        font-weight: 700;
        border-radius: 3rem;
        border: 1px solid var(--yellow);
        cursor: pointer;

        &:hover{
            background-color: var(--green-dark);
            color: var(--yellow);
        }
    }
}
</style>
