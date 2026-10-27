<script setup>
import CardCampaignComponent from '@/components/CardCampaignComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import ToDoComponent from '@/components/ToDoComponent.vue';
import { onMounted, ref } from 'vue';

const campaignsArr = ref([]);
const statusFilter = ref('');

async function getCampaigns() {
  try {
    const query = statusFilter.value ? `?status=${statusFilter.value}` : '';
    const res = await fetch(`${import.meta.env.VITE_API_URL}/campanhas${query}`);

    campaignsArr.value = await res.json();
  } catch (err) {
    console.log(err);
  }
}

const changeFilter = (status) => {
  statusFilter.value = status;
  getCampaigns();
};

onMounted(async () => {
  await getCampaigns();
  globalThis.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
});
</script>

<template>
  <div class="p-home">
    <HeroComponent />
    <div class="s-campaigns container" id="campaigns">
      <div class="s-campaigns wrapper">
        <p class="s-campaigns title">Campanhas</p>
        <div class="s-campaigns filters">
          <div :class="`filter ${statusFilter === '' ? 'select' : ''}`" @click="() => changeFilter('')">Todas</div>
          <div :class="`filter ${statusFilter === 'ativa' ? 'select' : ''}`" @click="() => changeFilter('ativa')">Ativas</div>
          <div :class="`filter ${statusFilter === 'encerrada' ? 'select' : ''}`" @click="() => changeFilter('encerrada')">Encerradas</div>
        </div>
        <p v-if="campaignsArr.length === 0" class="s-campaigns empty">Nenhuma campanha encontrada</p>
        <div class="s-campaigns campaigns">
          <CardCampaignComponent v-for="campaign in campaignsArr" :key="campaign.id" :image="campaign.imagemUrl"
            :category="campaign.categoria" :title="campaign.titulo" :description="campaign.descricao"
            :value="campaign.valorArrecadado" :meta="campaign.metaValor" :volunteers="campaign.vagasVoluntarios"
            :status="campaign.status" :id="campaign.id" />
        </div>
      </div>
    </div>
    <ToDoComponent/>
    <InfoComponent/>
  </div>
</template>

<style lang="scss" scoped>
.s-campaigns {
  &.container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
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

  &.title {
    color: var(--green-dark);
    font-size: 1.8rem;
    font-weight: 700;
  }

  &.empty {
    color: var(--green-dark);
  }

  &.filters {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    .filter {
      padding: 0.6rem 1.5rem;
      background-color: var(--white);
      border: 1px solid var(--green-dark);
      border-radius: 1rem;
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

  &.campaigns {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 0.7rem;
    justify-content: space-between;
    max-height: 1000px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 1rem;
  }
}
</style>
