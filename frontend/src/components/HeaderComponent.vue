<script setup>
import { HandHeart } from '@lucide/vue';

</script>

<template>
    <div class="c-header container">
        <div class="c-header wrapper">
            <div class="c-header logo">
                <div class="c-header logo icon">
                    <HandHeart color="var(--green)" width="32px" height="32px" />
                </div>
                <div class="c-header logo text">
                    <p class="c-header logo text title">Ponto</p>
                    <p class="c-header logo text subtitle">de apoio</p>
                </div>
            </div>
            <ul class="c-header nav">
                <li>
                    <RouterLink to="/">
                        Inicio
                    </RouterLink>
                </li>
                <li>
                    <a href="/cadastrar" >
                        Cadastrar Campanha
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.c-header {
    display: flex;

    &.container {
        width: 100vw;
        height: 5rem;
        background-color: #fafafa;
        justify-content: center;
        background-color: var(--green-dark);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
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

    &.nav {
        gap: 1rem;
        font-size: 1.2rem;
        li {
            list-style: none;
        }
        a {
            gap: 0.2rem;
            align-items: center;
            display: flex;
        }
    }
}
</style>