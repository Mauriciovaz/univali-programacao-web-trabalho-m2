<script setup>
import CardCampaignComponent from '@/components/CardCampaignComponent.vue';
import CardTodoComponent from '@/components/CardTodoComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import { Heart, UserGroup, Plus, Sprout, Users, HeartHandshake } from '@lucide/vue';
const campaigns = Array.from({ length: 3 });
</script>

<template>
  <div class="p-home">
    <HeroComponent />
    <div class="s-campaigns container">
      <div class="s-campaigns wrapper">
        <p class="s-campaigns title">Campanhas</p>
        <div class="s-campaigns campaigns">
          <CardCampaignComponent v-for="(_, index) in campaigns" :key="index" />
        </div>
      </div>
    </div>
    <div class="s-todo container">
      <div class="s-todo wrapper">
        <p class="s-todo title">O que você pode fazer</p>
        <div class="s-campaigns campaigns">
          <CardTodoComponent :icon="Heart" :title="'Fazer uma doação'"
            :subtitle="'Contribua com qualquer valor e ajude quem precisa'" />
          <CardTodoComponent :icon="UserGroup" :title="'Ser voluntário'"
            :subtitle="'Doe seu tempo e talento para causas importantes'" />
          <CardTodoComponent :icon="Plus" :title="'Cadastrar uma causa'"
            :subtitle="'Tem uma causa? Cadastre e alcance mais pessoas'" />
        </div>
      </div>
    </div>
    <div class="s-info container">
      <div class="s-info wrapper">
        <p class="s-info title">Por que doar e se voluntariar?</p>
        <div class="s-info content">
          <div class="item border">
            <div class="icon">
              <Sprout :size="'2rem'" />
            </div>
            <p>Transforma <br /> vidas</p>
          </div>
          <div class="item border">
            <div class="icon">
              <Users :size="'2rem'" />
            </div>
            <p>Fortalece <br /> comunidades</p>
          </div>
          <div class="item">
            <div class="icon">
              <HeartHandshake :size="'2rem'" />
            </div>
            <p>Constrói um <br /> futuro melhor</p>
          </div>
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

.s-todo {
  &.container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--green-light);
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
}

.s-info {
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

  .content {
    display: flex;
    justify-content: space-between;

    .item {
      display: flex;
      align-items: center;
      gap: 2rem;
      width: 100%;
      justify-content: center;
      .icon {
        background-color: var(--green-light);
        width: 6rem;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--green);
        border-radius: 16rem;
      }

      p{
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--green-dark);
      }

      &.border{
        border-right: 0.5px solid var(--green-dark);
      }
    }

  }
}
</style>
