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
            <div class="tags">
                <span>Doação</span>
                <span>Doação</span>
            </div>
            <div class="title">Alimente os animais de rua</div>
            <div class="description">Ração, medicamentos e cuidados veterinários.</div>
            <progress max="100" value="42"></progress>
            <p class="meta">42% da meta</p>
            <div class="donors">
                <UsersRound /> <span>532</span> doadores
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
    background-color: var(--green-light);
    max-height: 580px;
    min-height: 580px;
    height: 100%;
    justify-content: space-between;

    .image {
        width: 100%;
        height: 250px;

        img {
            width: 100%;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
        }
    }

    .content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        justify-content: space-between;

        .tags {
            display: flex;
            gap: 0.2rem;
            flex-wrap: wrap;

            span {
                background-color: var(--green);
                color: var(--white);
                font-size: 1rem;
                padding: 0.5rem 1rem 0.5rem 1rem;
                border-radius: 1rem;
            }
        }

        .title {
            color: var(--green-dark);
            font-size: 1.3rem;
            font-weight: 700;
        }

        .description {
            color: var(--green-dark);
            font-size: 1rem;
            font-weight: 400;
        }

        progress {
            border-radius: 1rem;
            width: 100%;
            height: 0.8rem;
        }

        progress::-webkit-progress-bar {
            background-color: #ddd9d9c5;
            border-radius: 7px;
        }

        progress::-webkit-progress-value {
            color: red;
            border-radius: 1rem;
            background-color: var(--green);
        }

        .meta {
            color: var(--green-dark);
            font-size: 1rem;
        }

        .donors {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            color: var(--green-dark);

            span {
                font-weight: 700;
            }
        }

        :deep(.c-button) {
            width: 100%;
            padding: 0.7rem 1.5rem 0.7rem 1.5rem;
            gap: 0.7rem;
            justify-content: center;
        }
    }
}
</style>