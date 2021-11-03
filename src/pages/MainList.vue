<template>
  <div class="container">
    <header class="header">
      <h1 class="title">Добавление товара</h1>
      <dropdown></dropdown>
    </header>
    <main>
      <div class="content-left">
        <adding-form></adding-form>
      </div>
      <div class="content-right">
        <good-item
          v-for="good in goods"
          :key="good.id"
          :title="good.name"
          :link="good.link"
          :description="good.description"
          :price="good.price"
          :id="good.id"
        ></good-item>
        <p v-if="!goods.length">Вы ничего не добавили</p>
      </div>
    </main>
  </div>
</template>

<script>
import AddingForm from '../components/AddingForm.vue';
import Dropdown from '../components/Dropdown.vue';
import GoodItem from '../components/GoodItem.vue';

export default {
  computed: {
    goods() {
      return this.$store.getters['requests/goods'];
    }
  },
  components: {
    AddingForm,
    Dropdown,
    GoodItem
  }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 32px;
  margin: auto;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.title {
  font-size: 28px;
  line-height: 35px;
  margin: 0;
}
.content-left {
  margin: auto;
}
.content-right {
  display: flex;
  flex-wrap: wrap;
}
@media (min-width: 425px) {
  .content-left {
    width: 80%;
  }
}
@media (min-width: 768px) {
  .header {
    justify-content: space-between;
  }
  .content-left {
    float: left;
    width: 47%;
  }
}
@media (min-width: 1024px) {
  .content-left {
    width: 32%;
  }
}
@media (min-width: 1440px) {
  .content-left {
    width: 23%;
  }
}
</style>
