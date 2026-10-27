<script setup>

defineProps({
    title: {
        required: true
    },
    subtitle: {
        required: true
    },
    icon: {
        required: true
    }
});
</script>
<template>
    <div class="c-todo-card">
        <div class="icon">
            <component v-if="icon" :is="icon" />
        </div>
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ subtitle }}</p>
    </div>
</template>
<style lang="scss" scoped>
.c-todo-card {
    display: flex;
    flex-direction: column;
    width: 23rem;
    border-radius: 1rem;
    background-color: var(--white);
    max-height: 300px;
    min-height: 300px;
    height: 100%;
    justify-content: center;
    padding: 1rem;
    align-items: center;
    text-align: center;
    gap: 1rem;

    .icon {
        background-color: var(--green-light);
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--green);
        border-radius: 16rem;

        svg{
            width: 2rem;
            height: 2rem;
        }
    }

    .title {
        color: var(--green-dark);
        font-size: 1.5rem;
        font-weight: 700;
    }

    .subtitle {
        color: var(--green-dark);
        font-size: 1rem;
        font-weight: 400;
    }
}
</style>