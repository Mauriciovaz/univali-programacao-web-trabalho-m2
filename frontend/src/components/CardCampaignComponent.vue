<script setup>
import { UsersRound, MoveRight } from '@lucide/vue';
import ButtonComponent from './ButtonComponent.vue';

const props = defineProps({
    image: {
        required: true
    },
    category: {
        required: true
    },
    title: {
        required: true
    },
    description: {
        required: true
    },
    value: {
        required: true
    },
    meta: {
        required: true
    },
    volunteers: {
        required: true
    },
     status: {
        required: true
    },
});

const result = Number((100 * Number(props.value)) / Number(props.meta)).toFixed(0);

</script>
<template>
    <div :class="`c-campaign-card ${status}`">
        <div class="image">
            <img :src="image">
            <span :class="`status ${status}`">{{ status }}</span>
        </div>
        <div class="content">
            <div class="tags">
                <span>{{ category }}</span>
            </div>
            <div class="title">{{ title }}</div>
            <div class="description">{{ description }}</div>
            <progress max="100" :value="Number(result)"></progress>
            <p class="meta">{{ result }}% da meta</p>
            <div class="donors">
                <UsersRound /> <span>{{ volunteers }}</span> vagas voluntários
            </div>
            <ButtonComponent :text="'Saiba Mais'" :icon="MoveRight" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.c-campaign-card {
    display: flex;
    flex-direction: column;
    width: 24rem;
    border-radius: 1rem;
    background-color: var(--green-light);
    max-height: 580px;
    min-height: 580px;
    height: 100%;
    justify-content: space-between;

    &.encerrada{
    filter:  grayscale(0.9);
    }

    .image {
        width: 100%;
        height: 250px;
        position: relative;

        img {
            width: 100%;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            height: 100%;
            object-fit: cover;
        }

        .status{
            position: absolute;
            top: 1rem;
            right: 1rem;
            color: var(--white);
            font-weight: 700;
            background-color: var(--green);
            padding: 0.5rem 1rem 0.5rem 1rem;
            border-radius: 1rem;

            &.encerrada{
                background-color: var(--gray);
            }
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