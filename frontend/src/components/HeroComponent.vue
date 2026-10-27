<script setup>
import ButtonComponent from './ButtonComponent.vue';
import { MoveRight } from '@lucide/vue';
</script>
<template>
    <div class="c-hero container">
        <div class="c-hero wrapper">
            <h1>Pequenas ações <br> geram grandes <br> mudanças</h1>
            <h2>Doação, voluntariado e apoio a causas <br> que fazem a diferença na vida de muitas pessoas.</h2>
            <a href="#campaigns">
                <ButtonComponent :text="`Ver campanhas`" :icon="MoveRight" />
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c-hero {

    &.container {
        width: 100vw;
        height: calc(100vh - 80px);
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url('../../public/assets/images/banner_maos_muda.jfif');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        background-position: center;
        margin-top: 80px;
        z-index: 0;
        &::before{
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            background-color: var(--green-dark);
            z-index: 1;
            filter: opacity(0.4);
        }
    }

    &.wrapper {
        width: 100%;
        max-width: 1248px;
        padding: 0px 24px 0px 24px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        z-index: 2;
        animation: intro 1s;
        max-height: 440px;
        h1 {
            font-size: 5rem;
            font-weight: 700;
            color: var(--white);
        }

        h2 {
            font-size: 1.5rem;
            color: var(--green-light);
        }

         a::after{
            display: none;
        }
    }

    :deep(.c-button) {
        width: fit-content;
        padding: 1rem 2rem 1rem 2rem;
        gap: 0.7rem;
    }
}
</style>