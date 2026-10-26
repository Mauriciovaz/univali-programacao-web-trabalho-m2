<script setup>
import { Heart, Plus, Users } from '@lucide/vue';

</script>

<template>
    <div>
        <div class="p-register container">
            <div class="p-register wrapper">
                <div class="hero">
                    <div class="icon">
                        <Heart size="5rem" />
                    </div>
                    <div class="text">
                        <h1>Faça a diferença</h1>
                        <p>Escolha como você quer ajudar e preencha o formulário abaixo. Qualquer apoio é muito
                            importante</p>
                    </div>
                </div>

                <div class="options">
                    <div class="option donate select">
                        <Heart size="1.4rem" />
                        Doar
                    </div>
                    <div class="option volunteering">
                        <Users size="1.4rem" />
                        Voluntariado
                    </div>
                    <div class="option register">
                        <Plus size="1.4rem" />
                        Cadastrar causa
                    </div>
                </div>

                <div class="form container">
                    <div class="donate">
                        <h2>Dados da Doação</h2>
                        <p>Valor da doação</p>
                        <div class="values">
                            <div class="value">
                                R$ 25
                            </div>
                            <div class="value select">
                                R$ 50
                            </div>
                            <div class="value">
                                R$ 100
                            </div>
                            <div class="value">
                                R$ 200
                            </div>
                            <div class="value">
                                R$ 300
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.p-register {
    &.container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
    }

    &.wrapper {
        width: 100%;
        max-width: 1248px;
        padding: 32px 24px 32px 24px;
        display: flex;
        justify-content: start;
        flex-direction: column;
        gap: 1rem;

        .hero {
            padding: 32px 0px 32px 0px;
            display: flex;
            align-items: center;
            gap: 2rem;

            .icon {
                padding: 4rem;
                background-color: var(--white);
                color: var(--green-dark);
                border-radius: 10rem;
            }

            .text {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                color: var(--green-dark);

                h1 {
                    font-size: 3rem;
                }

                p {
                    font-size: 1.4rem;
                }
            }
        }

        .options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;

            .option {
                display: flex;
                align-items: center;
                gap: 1rem;
                justify-content: center;
                padding: 1rem 0;
                background-color: var(--white);
                border: 1px solid var(--green-dark);
                border-radius: 1rem;
                width: 100%;
                cursor: pointer;
                color: var(--green-dark);
                font-weight: 700;
                font-size: 1rem;

                &:hover,
                &.select {
                    background-color: var(--green-dark);
                    color: var(--white);
                }
            }
        }

        .form {
            &.container {
                background-color: var(--white);
                border-radius: 1rem;
                padding: 1rem;
                color: var(--green-dark);

                .donate {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    .values {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        gap: 1rem;

                        .value {
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            font-weight: 700;
                            padding: 1rem 0;
                            border-radius: 1rem;
                            border: 1px solid var(--green-dark);
                            cursor: pointer;
                            &:hover,
                            &.select {
                                background-color: var(--green-dark);
                                color: var(--white);
                            }
                        }
                    }

                }

            }
        }
    }
}
</style>