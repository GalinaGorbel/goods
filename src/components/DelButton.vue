<template>
  <div class="delete" @click="deleteCard">
    <img :src="src" alt="del" />
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      src: `/assets/img/del.svg`
    };
  },
  methods: {
    deleteCard() {
      this.$store.dispatch('requests/deleteGood', this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.delete {
  position: absolute;
  width: 32px;
  height: 32px;
  background: #ff8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 3;
  top: 2%;
  right: 3%;
  display: flex;
  cursor: pointer;
  &:hover {
      background: #f88484c4;
  }
}
img {
  background: 0;
  display: block;
  margin: auto;
}
</style>
