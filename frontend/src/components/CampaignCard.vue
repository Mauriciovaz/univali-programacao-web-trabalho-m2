<script setup>
import { UsersRound, MoveRight } from '@lucide/vue';
import ButtonComponent from './ButtonComponent.vue';
</script>
<template>
    <div class="c-campaign-card">
        <div class="image">
            <img src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-domesticated-dog.webp?w=760&h=507"
                alt="">
        </div>
        <div class="content">
            <div class="tags"></div>
            <div class="title">Alimente os animais de rua</div>
            <div class="description">Ração, medicamentos e cuidados veterinários.</div>
            <progress max="100" value="42"></progress>
            <p class="meta">42% da meta</p>
            <div class="donors">
                <UsersRound /> 532 doadores
            </div>
            <ButtonComponent :text="'Saiba Mais'" :icon="MoveRight" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.c-campaign-card {
    display: flex;
    flex-direction: column;
    width: 23rem;
    border-radius: 1rem;
    background-color: var(--white);

    .image{
        width: 100%;
        height: 250px;
        img{
            width: 100%;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }
    }

    .content{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
}
</style>