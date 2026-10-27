<script setup>
import CardTodoComponent from './CardTodoComponent.vue';
import { Heart, UserGroup, Plus } from '@lucide/vue';
</script>

<template>
    <div class="s-todo container">
        <div class="s-todo wrapper">
            <p class="s-todo title">O que você pode fazer</p>
            <div class="s-todo cards">
                <CardTodoComponent :icon="Heart" :title="'Fazer uma doação'"
                    :subtitle="'Contribua com qualquer valor e ajude quem precisa'" />
                <CardTodoComponent :icon="UserGroup" :title="'Ser voluntário'"
                    :subtitle="'Doe seu tempo e talento para causas importantes'" />
                <CardTodoComponent :icon="Plus" :title="'Cadastrar uma causa'"
                    :subtitle="'Tem uma causa? Cadastre e alcance mais pessoas'" />
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.s-todo {
    &.container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--green-light);
    }

    &.wrapper {
        width: 100%;
        max-width: 1248px;
        padding: 32px 24px 32px 24px;
        display: flex;
        justify-content: start;
        flex-direction: column;
        gap: 1rem;
    }

    &.title {
        color: var(--green-dark);
        font-size: 1.8rem;
        font-weight: 700;
    }

    &.cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 1rem;
        justify-content: space-between
    }
}
</style>