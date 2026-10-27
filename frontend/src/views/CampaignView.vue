<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import ToDoComponent from '@/components/ToDoComponent.vue';
import { CalendarDays, CircleDollarSign, MoveRight, User, Handshake } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const data = ref({});
const donates = ref([]);
const volunteers = ref([]);
const notFound = ref(false);

let result = 0;

const id = route.params.id;

onMounted(async () => {
    try {
        const [resCampaign, resDonates, resVolunteers] = await Promise.all([
            fetch(`${import.meta.env.VITE_API_URL}/campanhas/${id}`),
            fetch(`${import.meta.env.VITE_API_URL}/doacoes?campanhaId=${id}`),
            fetch(`${import.meta.env.VITE_API_URL}/voluntarios?campanhaId=${id}`)
        ]);

        if (resCampaign.status === 404) {
            notFound.value = true;
            return;
        }

        const [campaign, donatesResult, volunteersResult] = await Promise.all([
            resCampaign.json(),
            resDonates.json(),
            resVolunteers.json()
        ]);

        data.value = campaign;
        donates.value = donatesResult;
        volunteers.value = volunteersResult;

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
                <div class="not-found" v-if="notFound">
                    <h2>Campanha não encontrada</h2>
                    <p>A campanha que você procura não existe ou foi removida.</p>
                    <RouterLink to="/">
                        <ButtonComponent :text="'Ver campanhas'" :icon="MoveRight" />
                    </RouterLink>
                </div>
                <div class="info" v-else>
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
                        <RouterLink :to="`/cadastrar?campanha=${id}`">
                            <ButtonComponent :text="'Fazer uma doação'" :icon="MoveRight"
                                v-if="data.status !== 'encerrada' && data.categoria === 'roupas' || data.categoria === 'alimentos'" />
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="s-donates container" v-if="!notFound">
            <div class="s-donates wrapper">
                <div class="donates">
                    <h2>Doações</h2>
                    <p v-if="donates.length === 0">Nenhuma doação realizada no momento</p>
                    <div class="wrapper">
                        <div v-for="d in donates" :key="d.id">
                            <div class="item">
                                <div class="icon">
                                    <User />
                                </div>
                                <div class="info">
                                    <p class="type"> <span>Tipo:</span> {{ d.tipo }}</p>
                                    <p class="money" v-if="d.tipo === 'dinheiro'"> R$ {{ String(d.valor ?? 0) }}</p>
                                    <!-- <p class="description" v-if="d.tipo !== 'dinheiro'"> {{ d.descricao ?? '' }}</p> -->
                                </div>
                                <p class="date"> {{
                                    `${d.data.split('-')[2]}/${d.data.split('-')[1]}/${d.data.split('-')[0]}` }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="volunteers">
                    <h2>Voluntários</h2>
                    <p v-if="volunteers.length === 0">Nenhum voluntário no momento</p>
                    <div class="wrapper">
                        <div v-for="v in volunteers" :key="v.id">
                            <div class="item">
                                <div class="icon">
                                    <Handshake />
                                </div>
                                <div class="info">
                                    <p class="name"> <span>Nome:</span> {{ v.nome }}</p>
                                    <p class="email"> <span>Email:</span> {{ v.email }}</p>
                                    <!-- <p class="description" v-if="d.tipo !== 'dinheiro'"> {{ d.descricao ?? '' }}</p> -->
                                </div>
                                <p class="date"> {{ v.disponibilidade }} </p>
                            </div>
                        </div>
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

        .not-found {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            color: var(--green-dark);

            h2 {
                font-size: 1.8rem;
                font-weight: 700;
            }

            :deep(.c-button) {
                width: fit-content;
            }
        }

        .info {
            display: grid;
            grid-template-columns: 500px 1fr;
            gap: 2rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 1rem;
                object-position: center;
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

        a::after {
            display: none;
        }
    }

}

.s-donates {
    &.container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
        background-color: var(--white);
    }

    &.wrapper {
        width: 100%;
        max-width: 1248px;
        padding: 32px 24px 32px 24px;
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr;
        color: var(--green-dark);

        h2 {
            font-weight: 700;
            font-size: 2rem;
        }

        .donates {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            border-right: 1px solid var(--green-dark);
            padding: 1rem;

            .wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-height: 500px;
                overflow-y: auto;
                padding: 0 0.5rem;

                .item {
                    display: flex;
                    width: 100%;
                    padding: 1rem;
                    justify-content: space-between;
                    align-items: center;
                    background-color: var(--green-light);
                    border-radius: 1rem;

                    .icon {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1rem;
                        border-radius: 6rem;
                        background-color: var(--white);
                    }

                    .type {
                        font-weight: 700;
                    }

                    .date {
                        padding: 1rem;
                        border-radius: 1rem;
                        background-color: var(--green);
                        color: var(--white);
                    }
                }
            }
        }

        .volunteers {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;

            .wrapper {
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                max-height: 500px;
                overflow-y: auto;
                padding: 0 0.5rem;

                .item {
                    display: flex;
                    width: 100%;
                    padding: 1rem;
                    justify-content: space-between;
                    align-items: center;
                    background-color: var(--green-light);
                    border-radius: 1rem;

                    .icon {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 1rem;
                        border-radius: 6rem;
                        background-color: var(--white);
                    }

                    .name,
                    .email {
                        span {
                            font-weight: 700;
                        }
                    }

                    .date {
                        padding: 1rem;
                        border-radius: 1rem;
                        background-color: var(--green);
                        color: var(--white);
                    }
                }
            }
        }
    }
}
</style>