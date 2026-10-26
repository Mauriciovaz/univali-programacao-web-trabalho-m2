<script setup>
import CardCampaignComponent from '@/components/CardCampaignComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import InfoComponent from '@/components/InfoComponent.vue';
import ToDoComponent from '@/components/ToDoComponent.vue';
import { onMounted, ref } from 'vue';

const campaignsArr = ref([]);

onMounted(async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/campanhas`);

    campaignsArr.value = await res.json();
    console.log(campaignsArr);

  } catch (err) {
    console.log(err);
  }

});
</script>

<template>
  <div class="p-home">
    <HeroComponent />
    <div class="s-campaigns container">
      <div class="s-campaigns wrapper">
        <p class="s-campaigns title">Campanhas</p>
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

  &.campaigns {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 1rem;
    justify-content: space-between
  }
}
</style>
