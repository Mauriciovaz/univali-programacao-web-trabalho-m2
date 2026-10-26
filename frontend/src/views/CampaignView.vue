<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import ToDoComponent from '@/components/ToDoComponent.vue';
import { CalendarDays, CircleDollarSign, MoveRight } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const data = ref({});
let result = 0;
onMounted(async () => {
    try {
        const id = route.params.id;
        const res = await fetch(`${import.meta.env.VITE_API_URL}/campanhas/${id}`);
        data.value = await res.json();

        result = Number((100 * Number(data.value.valorArrecadado)) / Number(data.value.metaValor)).toFixed(0);

    } catch (err) {
        console.log(err);
    } finally {
        globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
});



</script>

<template>
    <div>
        <div class="p-campaign container">
            <div class="p-campaign wrapper">
                <div class="info">
                    <img :src="data.imagemUrl" alt="">
                    <div class="content">
                        <div class="tags">
                            <span>{{ data.categoria }}</span>
                        </div>
                        <div class="title">{{ data.titulo }}</div>
                        <div class="description">{{ data.descricao }}</div>

                        <div class="result">
                            <progress max="100" :value="Number(result)"></progress>
                            <div> <span>{{ result }}%</span>
                                <p>da meta</p>
                            </div>
                        </div>


                        <div class="donates">
                            <div class="value">
                                <CircleDollarSign /> <span>R$ {{ data.valorArrecadado }}</span> arrecadados
                            </div>
                            <div class="goal"> Meta: R$ {{ data.metaValor }}</div>
                        </div>

                        <div class="period">
                            <CalendarDays size="4rem" />
                            <div class="content">
                                <p class="title">Período</p>
                                <p>de {{
                                    `${String(data.dataInicio).split('-')[2]}/${String(data.dataInicio).split('-')[1]}/${String(data.dataInicio).split('-')[0]}`
                                }} a {{
                                        `${String(data.dataFim).split('-')[2]}/${String(data.dataFim).split('-')[1]}/${String(data.dataFim).split('-')[0]}`
                                    }}</p>
                            </div>
                        </div>
                        <ButtonComponent :text="'Fazer uma doação'" :icon="MoveRight"
                            v-if="data.categoria === 'roupas' || data.categoria === 'alimentos'" />
                    </div>
                </div>
            </div>
        </div>

        <ToDoComponent />
        <InfoComponent />
    </div>
</template>

<style lang="scss" scoped>
.p-campaign {
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

        .info {
            display: grid;
            grid-template-columns: 500px 1fr;
            gap: 2rem;

            img {
                width: 100%;
                height: 500px;
                object-fit: cover;
                border-radius: 1rem;
            }

            .content {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 1rem;

                .tags {
                    display: flex;
                    gap: 0.2rem;
                    flex-wrap: wrap;

                    span {
                        background-color: var(--green);
                        color: var(--white);
                        font-size: 1.5rem;
                        padding: 0.5rem 1rem 0.5rem 1rem;
                        border-radius: 1rem;
                    }
                }

                .title {
                    color: var(--green-dark);
                    font-size: 2.5rem;
                    font-weight: 700;
                }

                .description {
                    color: var(--green-dark);
                    font-size: 1.5rem;
                    font-weight: 400;
                }

                .result {
                    display: flex;
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    progress {
                        border-radius: 1rem;
                        width: 300px;
                        height: 1rem;
                    }

                    progress::-webkit-progress-bar {
                        background-color: #ddd9d9c5;
                        border-radius: 7px;
                    }

                    @keyframes prog {
                        0% {
                            width: 0%;
                        }
                    }

                    progress::-webkit-progress-value {
                        color: red;
                        border-radius: 1rem;
                        background-color: var(--green);
                        animation: prog 1s;
                    }

                    div {
                        display: flex;
                        align-items: end;
                        color: var(--green-dark);
                        gap: 0.1rem;
                        font-size: 1.3rem;

                        span {
                            font-weight: 700;
                        }

                        p {
                            display: flex;
                        }
                    }
                }

                .donates {
                    display: flex;
                    align-items: center;
                    gap: 2rem;

                    .value {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        color: var(--green-dark);
                        font-size: 1.2rem;

                        span {
                            font-weight: 700;
                        }

                        padding: 0 2rem 0 0;
                        border-right: 1px solid var(--green-dark);
                    }

                    .goal {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        color: var(--green-dark);
                        font-size: 1.2rem;
                    }
                }

                .period {
                    display: flex;
                    gap: 1rem;
                    color: var(--green-dark);

                    .content {
                        display: flex;
                        flex-direction: column;
                        gap: 0px;

                        .title {
                            font-size: 1.4rem;
                            margin: 0;
                        }

                        p {
                            font-size: 1.2rem;
                            color: var(--green-dark);
                            margin: 0;
                        }
                    }

                }

                :deep(.c-button) {
                    width: 100%;
                    padding: 1.5rem;
                    gap: 0.7rem;
                    justify-content: center;
                    font-size: 1.5rem;
                }
            }
        }
    }

}
</style>