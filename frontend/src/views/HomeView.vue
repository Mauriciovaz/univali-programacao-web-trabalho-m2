<script setup>
import CampaignCard from '@/components/CampaignCard.vue';
import HeroComponent from '@/components/HeroComponent.vue';
const campaigns = Array.from({ length: 3 });
</script>

<template>
  <div class="p-home">
    <HeroComponent />
    <div class="s-campaigns container">
      <div class="s-campaigns wrapper">
        <p class="s-campaigns title">Campanhas</p>
        <div class="s-campaigns campaigns">
          <CampaignCard v-for="(_, index) in campaigns" :key="index" />
        </div>
      </div>
    </div>
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
    font-size: 1.5rem;
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
