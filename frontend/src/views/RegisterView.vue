<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import { Heart, Plus, Users, MoveRight } from '@lucide/vue';
import { ref } from 'vue';

let optionSelect = ref('donate');
let donateObj = ref({
    value: 0,
    name: '',
    email: ''
});
const changeOption = (option) => {
    optionSelect.value = option;
};

const changeDonateObj = (value) => {
    donateObj.value.value = value;
};
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
                    <div :class="`option donate ${optionSelect === 'donate' ? 'select' : ''}`"
                        @click="() => changeOption('donate')">
                        <Heart size="1.4rem" />
                        Doar
                    </div>
                    <div :class="`option volunteering ${optionSelect === 'volunteering' ? 'select' : ''}`"
                        @click="() => changeOption('volunteering')">
                        <Users size="1.4rem" />
                        Voluntariado
                    </div>
                    <div :class="`option register ${optionSelect === 'register' ? 'select' : ''}`"
                        @click="() => changeOption('register')">
                        <Plus size="1.4rem" />
                        Cadastrar causa
                    </div>
                </div>

                <div class="form container">
                    <div class="donate" v-if="optionSelect === 'donate'">
                        <h2>Dados da Doação</h2>
                        <form>
                            <p>Valor da doação</p>
                            <div class="values">
                                <div :class="`value ${donateObj.value === 25 ? 'select' : ''}`" @click="() => changeDonateObj(25)">
                                    R$ 25
                                </div>
                                <div :class="`value ${donateObj.value === 50 ? 'select' : ''}`" @click="() => changeDonateObj(50)">
                                    R$ 50
                                </div>
                                <div :class="`value ${donateObj.value === 100 ? 'select' : ''}`" @click="() => changeDonateObj(100)">
                                    R$ 100
                                </div>
                                <div :class="`value ${donateObj.value === 200 ? 'select' : ''}`" @click="() => changeDonateObj(200)">
                                    R$ 200
                                </div>
                                <div :class="`value ${donateObj.value === 300 ? 'select' : ''}`" @click="() => changeDonateObj(300)">
                                    R$ 300
                                </div>
                            </div>
                            <p>Nome Completo</p>
                            <input type="text" id="name">

                            <p>E-mail</p>
                            <input type="text" id="email">

                            <ButtonComponent :text="'Enviar'" :icon="MoveRight" :type="'button'" @click="(e) => {
                                e.preventDefault();
                                // submit
                            }"/>
                        </form>
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
                padding: 2rem;
                color: var(--green-dark);

                .donate {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    form {
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

        :deep(.c-button) {
            width: fit-content;
            padding: 1rem 2rem 1rem 2rem;
            gap: 0.7rem;
        }
    }
}
</style>