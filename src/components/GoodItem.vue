<template>
  <transition name="bounce">
    <div
      class="card"
      @mouseenter="active = !active"
      @mouseleave="active = !active"
      v-if="!delCard"
    >
      <div class="card__img">
        <img :src="link" :alt="title" />
      </div>
      <h3 class="card__title">{{ title }}</h3>
      <p class="card__text">{{ description }}</p>
      <span class="card__price"
        >{{ new Intl.NumberFormat('ru-RU').format(price) }} руб.</span
      >
      <del-button
        @click="delCard = !delCard"
        v-if="active"
        :id="id"
      ></del-button>
    </div>
  </transition>
</template>

<script>
import DelButton from '../components/DelButton.vue';

export default {
  props: ['id', 'title', 'link', 'description', 'price'],
  data() {
    return {
      active: false,
      delCard: false
    };
  },
  components: {
    DelButton
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin-bottom: 16px;
  margin-left: 14px;
  &__img {
    height: 50%;
  }
  &__title {
    padding-top: 16px;
    font-size: 20px;
    margin-bottom: 16px;
  }
  &__text {
    flex: 1;
    font-weight: normal;
    font-size: 16px;
    margin-bottom: 32px;
  }
  &__price {
    font-size: 24px;
    margin-bottom: 24px;
  }
  &__title,
  &__price,
  &__text {
    padding: 0 16px;
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0px 0px;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@media (min-width: 768px) {
  .card {
    //width: 32%;
    margin-left: 19px;
  }
}
@media (min-width: 1024px) {
  .card {
    width: 47%;
  }
}
@media (min-width: 1440px) {
  .card {
    margin-left: 14px;
    width: 32%;
  }
}
</style>
