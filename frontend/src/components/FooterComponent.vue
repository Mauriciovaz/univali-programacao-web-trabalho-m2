<script setup>
import { HandHeart } from '@lucide/vue';

</script>

<template>
    <div class="c-footer container">
        <div class="c-footer wrapper">
            <div class="c-footer logo">
                <div class="c-footer logo icon">
                    <HandHeart color="var(--green)" width="32px" height="32px" />
                </div>
                <div class="c-footer logo text">
                    <p class="c-footer logo text title">Ponto</p>
                    <p class="c-footer logo text subtitle">de apoio</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c-footer {
    display: flex;

    &.container {
        width: 100vw;
        background-color: #fafafa;
        justify-content: center;
        background-color: var(--green-dark);
        padding: 1rem 0rem 1rem 0rem;
    }

    &.wrapper {
        width: 100%;
        max-width: 1248px;
        padding: 0px 24px 0px 24px;
        justify-content: space-between;
        align-items: center;
    }

    &.logo {
        gap: 1.5rem;
        align-items: center;
        color: var(--white);

        &.icon {
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            background-color: var(--green-light);
            border-radius: 6rem;
        }

        &.text {
            flex-direction: column;
            gap: 0px;

            &.title {
                font-weight: 700;
                font-size: 1.2rem;
            }

            &.subtitle {
                font-size: 1rem;
            }

        }
    }
}
</style>