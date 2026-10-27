<script setup>
import ToDoComponent from '@/components/ToDoComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { Heart, Plus, Users, MoveRight, TriangleAlert } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

let message = ref('');

let optionSelect = ref('register');
let donateType = ref('money');

let donateObj = ref({
    value: null,
    type: donateType.value,
    description: null,
    name: '',
    email: '',
    phone: '',
});

let volunteeringObj = ref({
    name: '',
    email: '',
    phone: '',
    availability: ''
});

let campaignObj = ref({
    titulo: '',
    descricao: '',
    categoria: '',
    metaValor: null,
    valorArrecadado: 0,
    dataInicio: '',
    dataFim: '',
    status: 'ativa',
    vagasVoluntarios: null,
    imagemUrl: ''
});

const changeOption = (option) => {
    optionSelect.value = option;
};

const changeDonateObj = (value) => {
    donateObj.value.value = value;
};

const changeAvailability = (value) => {
    volunteeringObj.value.availability = value;
};

const campaignData = ref({});
let type = ref('');


const changeDonateType = (type) => {
    donateType.value = type;
    donateObj.value.type = type;
    donateObj.value.value = null;
    donateObj.value.description = null;

    document.querySelector('#description').value = '';
};

onMounted(async () => {
    try {
        const campaign = route.query.campanha;
        if (!campaign) {
            optionSelect.value = 'register';
        } else {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/campanhas/${campaign}`);
            const data = await res.json();
            campaignData.value = data;
            if (data.categoria === 'voluntariado') {
                type.value = 'volunteering';
                optionSelect.value = 'volunteering';
            } else {
                type.value = 'donate';
                optionSelect.value = 'donate';
            }
        }
    } catch (err) {
        console.log(err);
    } finally {
        globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

});

async function newDonate() {
    try {
        const { description, email, name, phone, type, value } = donateObj.value;
        if (!email || !name || !phone) {
            alert('Preencha todos os dados');
        } else {
            if (type === 'money' && !value) {
                alert('Selecione o valor');
            } else if (type === 'other' && !description) {
                alert('Preencha a descrição');
            } else {
                const parseData = {
                    campanhaId: Number(route.query.campanha),
                    nome: name,
                    email,
                    telefone: String(phone),
                    tipo: type === 'money' ? 'dinheiro' : 'item',
                    valor: value ?? 0,
                    descricao: description
                };
                const res = await fetch(`${import.meta.env.VITE_API_URL}/doacoes`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(parseData)
                });

                const result = await res.json();

                if (!res.ok) {
                    message.value = result.erro;
                } else {
                    message.value = result.mensagem;
                }
            }
        }
    } catch (err) {
        message.value = err.response.data.erro;
    }
}

async function newVolunteering() {
    try {
        const { availability, email, name, phone } = volunteeringObj.value;
        if (!email || !name || !phone) {
            alert('Preencha todos os dados');
        } else {
            const parseData = {
                campanhaId: Number(route.query.campanha),
                nome: name,
                email,
                telefone: String(phone),
                disponibilidade: availability
            };
            const res = await fetch(`${import.meta.env.VITE_API_URL}/voluntarios`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(parseData)
            });

            const result = await res.json();

            if (!res.ok) {
                message.value = result.erro;
            } else {
                message.value = result.mensagem;
            }
        }
    } catch (err) {
        message.value = err.response.data.erro;
        console.log(err.response.data.erro);
    }
}

async function newRegister() {
    try {
        const { categoria, dataFim, dataInicio, descricao, imagemUrl, metaValor, titulo, vagasVoluntarios } = campaignObj.value;
        if (!categoria || !dataFim || !dataInicio || !descricao || !imagemUrl || !metaValor || !titulo || !vagasVoluntarios) {
            alert('Preencha todos os dados');
        } else {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/campanhas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...campaignObj.value,
                    dataInicio: `${campaignObj.value.dataInicio.split('/')[2]}-${campaignObj.value.dataInicio.split('/')[1]}-${campaignObj.value.dataInicio.split('/')[0]}`,
                    dataFim: `${campaignObj.value.dataFim.split('/')[2]}-${campaignObj.value.dataFim.split('/')[1]}-${campaignObj.value.dataFim.split('/')[0]}`
                })
            });

            const result = await res.json();

            if (!res.ok) {
                message.value = result.erro;
            } else {
                message.value = 'Campanha registrada com sucesso';
            }
        }
    } catch (err) {
        message.value = err.response.data.erro;
        console.log(err.response.data.erro);
    }
}

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
                    <div :class="`option donate ${optionSelect === 'donate' ? 'select' : ''} ${type === 'volunteering' || !type || campaignData.status === 'encerrada' ? 'disabled' : ''}`"
                        @click="() => changeOption('donate')">
                        <Heart size="1.4rem" />
                        Doar
                    </div>
                    <div :class="`option volunteering ${optionSelect === 'volunteering' ? 'select' : ''} ${!type || campaignData.status === 'encerrada' ? 'disabled' : ''}`"
                        @click="() => changeOption('volunteering')">
                        <Users size="1.4rem" />
                        Voluntariado
                    </div>
                    <div :class="`option register ${optionSelect === 'register' ? 'select' : ''} ${!!type ? 'disabled' : ''}`"
                        @click="() => changeOption('register')">
                        <Plus size="1.4rem" />
                        Cadastrar causa
                    </div>
                </div>

                <p v-if="campaignData.status === 'encerrada'" class="warning">
                    <TriangleAlert size="1.7rem" /> Campanha enecrrada, não é possível realizar doações ou se
                    voluntariar
                </p>

                <h2 v-if="!!message">{{ message }}</h2>

                <div class="form container">
                    <div class="donate" v-if="optionSelect === 'donate'">
                        <h2>Dados da Doação</h2>
                        <form>
                            <p>Tipo de doação</p>
                            <div class="type">
                                <div :class="`money ${donateType === 'money' ? 'select' : ''}`"
                                    @click="() => changeDonateType('money')">Dinheiro</div>
                                <div :class="`other ${donateType === 'other' ? 'select' : ''}`"
                                    @click="() => changeDonateType('other')">Outro</div>
                            </div>
                            <p v-if="donateType === 'money'">Valor da doação</p>
                            <div class="values" v-if="donateType === 'money'">
                                <div :class="`value ${donateObj.value === 25 ? 'select' : ''}`"
                                    @click="() => changeDonateObj(25)">
                                    R$ 25
                                </div>
                                <div :class="`value ${donateObj.value === 50 ? 'select' : ''}`"
                                    @click="() => changeDonateObj(50)">
                                    R$ 50
                                </div>
                                <div :class="`value ${donateObj.value === 100 ? 'select' : ''}`"
                                    @click="() => changeDonateObj(100)">
                                    R$ 100
                                </div>
                                <div :class="`value ${donateObj.value === 200 ? 'select' : ''}`"
                                    @click="() => changeDonateObj(200)">
                                    R$ 200
                                </div>
                                <div :class="`value ${donateObj.value === 300 ? 'select' : ''}`"
                                    @click="() => changeDonateObj(300)">
                                    R$ 300
                                </div>
                            </div>

                            <p v-if="donateType === 'other'">Descreva o que será doado</p>
                            <textarea id="description" v-if="donateType === 'other'" rows="4"
                                @input="(e) => donateObj.description = e.target.value"></textarea>

                            <p>Nome Completo</p>
                            <input type="text" id="name" @input="(e) => donateObj.name = e.target.value">

                            <p>E-mail</p>
                            <input type="text" id="email" @input="(e) => donateObj.email = e.target.value">

                            <p>Telefone</p>
                            <input type="text" id="telefone" @input="(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                donateObj.phone = e.target.value
                            }" maxlength="11">

                            <ButtonComponent :text="'Enviar'" :icon="MoveRight" :type="'button'" @click="(e) => {
                                e.preventDefault();
                                newDonate();
                            }" />
                        </form>
                    </div>
                    <div class="volunteering" v-if="optionSelect === 'volunteering'">
                        <h2>Dados Voluntário</h2>
                        <form>
                            <p>Disponibilidade</p>
                            <div class="availability">
                                <div :class="`value ${volunteeringObj.availability === 'segunda' ? 'select' : ''}`"
                                    @click="() => changeAvailability('segunda')">
                                    Segunda
                                </div>
                                <div :class="`value ${volunteeringObj.availability === 'terca' ? 'select' : ''}`"
                                    @click="() => changeAvailability('terca')">
                                    Terça
                                </div>
                                <div :class="`value ${volunteeringObj.availability === 'quarta' ? 'select' : ''}`"
                                    @click="() => changeAvailability('quarta')">
                                    Quarta
                                </div>
                                <div :class="`value ${volunteeringObj.availability === 'quinta' ? 'select' : ''}`"
                                    @click="() => changeAvailability('quinta')">
                                    Quinta
                                </div>
                                <div :class="`value ${volunteeringObj.availability === 'sexta' ? 'select' : ''}`"
                                    @click="() => changeAvailability('sexta')">
                                    Sexta
                                </div>
                                <div :class="`value ${volunteeringObj.availability === 'sabado' ? 'select' : ''}`"
                                    @click="() => changeAvailability('sabado')">
                                    Sábado
                                </div>
                                <div :class="`value ${volunteeringObj.availability === 'domingo' ? 'select' : ''}`"
                                    @click="() => changeAvailability('domingo')">
                                    Domingo
                                </div>
                            </div>
                            <p>Nome Completo</p>
                            <input type="text" id="name" @input="(e) => volunteeringObj.name = e.target.value">

                            <p>E-mail</p>
                            <input type="text" id="email" @input="(e) => volunteeringObj.email = e.target.value">

                            <p>Telefone</p>
                            <input type="text" id="telefone" @input="(e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                volunteeringObj.phone = e.target.value
                            }" maxlength="11">

                            <ButtonComponent :text="'Enviar'" :icon="MoveRight" :type="'button'" @click="(e) => {
                                e.preventDefault();
                                newVolunteering();
                            }" />
                        </form>
                    </div>
                    <div class="register" v-if="optionSelect === 'register'">
                        <h2>Dados da Campanha</h2>
                        <form>
                            <p>Categoria</p>
                            <div class="type">
                                <div :class="`food ${campaignObj.categoria === 'alimentos' ? 'select' : ''}`"
                                    @click="() => campaignObj.categoria = 'alimentos'">Alimentos</div>
                                <div :class="`clothing ${campaignObj.categoria === 'roupas' ? 'select' : ''}`"
                                    @click="() => campaignObj.categoria = 'roupas'">Roupas</div>
                            </div>

                            <p>Titulo</p>
                            <input type="text" id="title" @input="(e) => campaignObj.titulo = e.target.value">

                            <p>Descrição</p>
                            <textarea id="description" rows="4"
                                @input="(e) => campaignObj.descricao = e.target.value"></textarea>

                            <div class="wrapper">
                                <div>
                                    <p>Meta de valor</p>
                                    <input type="text" id="meta" @input="(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                        campaignObj.metaValor = e.target.value
                                    }" maxlength="6">
                                </div>

                                <div>
                                    <p>Qtde. vagas de voluntários</p>
                                    <input type="text" id="vagas" @input="(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                        campaignObj.vagasVoluntarios = e.target.value
                                    }" maxlength="6">
                                </div>

                            </div>

                            <p>URL da imagem</p>
                            <input type="text" id="title" @input="(e) => campaignObj.imagemUrl = e.target.value">

                            <div class="wrapper">
                                <div>
                                    <p>Data inicial</p>
                                    <input type="text" id="meta" @input="(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, '')
                                            .replace(/^(\d{2})(\d)/, '$1/$2')
                                            .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
                                            .slice(0, 10);
                                        campaignObj.dataInicio = e.target.value
                                    }" placeholder="00/00/0000">
                                </div>

                                <div>
                                    <p>Data Final</p>
                                    <input type="text" id="meta" @input="(e) => {
                                        e.target.value = e.target.value.replace(/\D/g, '')
                                            .replace(/^(\d{2})(\d)/, '$1/$2')
                                            .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')
                                            .slice(0, 10);
                                        campaignObj.dataFim = e.target.value
                                    }" placeholder="00/00/0000">
                                </div>

                            </div>

                            <ButtonComponent :text="'Enviar'" :icon="MoveRight" :type="'button'" @click="(e) => {
                                e.preventDefault();
                                newRegister();
                            }" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <ToDoComponent />
        <InfoComponent />
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

                &.disabled {
                    pointer-events: none;
                    filter: opacity(0.5);
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

                        .type {
                            display: flex;
                            width: 100%;
                            justify-content: start;
                            gap: 1rem;

                            .money,
                            .other {
                                padding: 1rem 2rem;
                                display: flex;
                                align-items: center;
                                font-weight: bold;
                                font-size: 1.2rem;
                                border: 1px solid var(--green-dark);
                                border-radius: 1rem;
                                cursor: pointer;

                                &:hover,
                                &.select {
                                    background-color: var(--green-dark);
                                    color: var(--white);
                                }
                            }
                        }

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

                .volunteering {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    form {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;

                        .availability {
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

                .register {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;

                    form {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;

                        .type {
                            display: flex;
                            width: 100%;
                            justify-content: start;
                            gap: 1rem;

                            .food,
                            .clothing {
                                padding: 1rem 2rem;
                                display: flex;
                                align-items: center;
                                font-weight: bold;
                                font-size: 1.2rem;
                                border: 1px solid var(--green-dark);
                                border-radius: 1rem;
                                cursor: pointer;

                                &:hover,
                                &.select {
                                    background-color: var(--green-dark);
                                    color: var(--white);
                                }
                            }
                        }

                        .wrapper {
                            display: flex;
                            gap: 1rem;

                            div {
                                display: flex;
                                flex-direction: column;
                                gap: 1rem;
                                width: 100%;
                            }
                        }
                    }
                }
            }
        }

        .warning {
            font-size: 1.2rem;
            color: var(--green-dark);
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        :deep(.c-button) {
            width: fit-content;
            padding: 1rem 2rem 1rem 2rem;
            gap: 0.7rem;
        }
    }
}
</style>