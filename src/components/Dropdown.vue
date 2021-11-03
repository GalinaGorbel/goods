<template>
  <div class="dropdown">
    <select class="dropdown__items" name="sort" v-model="option" @change="sort">
      <option class="dropdown__item" value="default" selected
        >По умолчанию</option
      >
      <option class="dropdown__item" value="name"> По наименованию</option>
      <option class="dropdown__item" value="min">По цене min</option>
      <option class="dropdown__item" value="max">По цене max</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: 'default'
    };
  },
  methods: {
    sort() {
      if (this.option === 'default') {
        this.$store.dispatch('requests/loadGoods');
      } else {
        this.$store.commit('requests/sorting', this.option);
        this.$store.commit('requests/sort', this.option);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 16px 11px;
  &__items {
    border: none;
    color: #b4b4b4;
    font-weight: 400;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
  &__item {
    font-size: 12px;
    line-height: 15px;
  }
}
</style>
