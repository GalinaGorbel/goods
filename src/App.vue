<template>
  <div v-if="isLoading">
    <spinner></spinner>
  </div>
  <router-view v-else></router-view>
</template>

<script>
export default {
  async created() {
    this.isLoading = true;
    await this.$store.dispatch('requests/loadGoods');
    this.isLoading = false;
  },
  data() {
    return {
      isLoading: false
    };
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');
body {
  font-family: 'Source Sans Pro', sans-serif;
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
  background: rgba(255, 254, 251, 0.8);
  color: #3f3f3f;
  font-weight: 600;
}
p,
h1,
h2 {
  margin: 0;
}
</style>
