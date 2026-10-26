<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = route.params.id;

const data = ref();


onMounted(async () => {
    try {
        const res = await fetch(`http://192.168.15.18:3000/api/campanhas/${id}`);
        data.value = await res.json();


    } catch (err) {
        console.log(err);
    }
});

const result = Number((100 * Number(data.value.valorArrecadado)) / Number(data.value.metaValor)).toFixed(0);


</script>

<template>
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
                        <p> <span>{{ result }}%</span> da meta</p>
                    </div>

                    <div class="about">
                        <div class="donates">
                            <UsersRound /> <span>{{ volunteers }}</span> doadores
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    }

}
</style>