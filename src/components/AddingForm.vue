<template>
  <form method="POST" class="form" @submit.prevent="submitForm">
    <div class="form__control">
      <label for="name">Наименование товара</label>
      <input
        class="form__input"
        :class="{ form__input_error: !validity.name }"
        type="text"
        name="name"
        id="name"
        placeholder="Введите наименование товара"
        v-model.trim="good.name"
        @blur="validateInput"
      />
      <p class="form__error-message" v-if="!validity.name">
        Поле является обязательным
      </p>
    </div>
    <div class="form__control">
      <label for="description">Описание товара</label>
      <textarea
        rows="6"
        class="form__input"
        type="text"
        name="description"
        id="description"
        placeholder="Введите описание товара"
        v-model="good.description"
      ></textarea>
    </div>
    <div class="form__control">
      <label for="imageLink">Ссылка на изображение товара</label>
      <input
        class="form__input"
        :class="{ form__input_error: !validity.link }"
        type="text"
        name="link"
        id="imageLink"
        placeholder="Введите ссылку"
        v-model="good.link"
        @blur="validateInput"
      />
      <p class="form__error-message" v-if="!validity.link">
        Поле является обязательным
      </p>
    </div>
    <div class="form__control">
      <label for="price">Цена товара</label>
      <input
        class="form__input"
        :class="{ form__input_error: !validity.price }"
        type="text"
        name="price"
        id="price"
        placeholder="Введите цену"
        v-model="good.price"
        @blur="validateInput"
      />
      <p class="form__error-message" v-if="!validity.price">
        Поле является обязательным
      </p>
    </div>
    <button
      class="form__button"
      :class="{ form__button_valid: validity.button }"
    >
      Добавить товар
    </button>
    <transition name="text">
      <p class="text" v-if="added">Товар успешно добавлен!</p>
    </transition>
  </form>
</template>

<script>
export default {
  data() {
    return {
      good: {
        name: null,
        description: null,
        link: null,
        price: null
      },
      validity: {
        name: true,
        link: true,
        price: true,
        button: false
      }
    };
  },
  computed: {
    added() {
      return this.$store.getters['requests/added'];
    }
  },
  methods: {
    submitForm() {
      Object.keys(this.good).forEach(key => {
        if (!this.good[key] && key != 'description') {
          this.validity[key] = false;
          this.validity.button = false;
        } else {
          this.validity[key] = true;
          this.validity.button = true;
        }
      }, this.good);

      if (this.validity.button) {
        this.$store.dispatch('requests/addGood', { ...this.good });

        Object.keys(this.good).forEach(function(key) {
          this[key] = '';
        }, this.good);

        this.validity.button = false;
      }
    },
    validateInput(e) {
      let elem = e.target.name;

      if (!this.good[elem]) {
        this.validity[elem] = false;
        this.validity.button = false;
      } else {
        this.validity[elem] = true;
      }

      if (this.good.name && this.good.price && this.good.link) {
        this.validity.button = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
  margin-bottom: 20px;
  &__control {
    margin-bottom: 16px;
    label {
      font-size: 10px;
      line-height: 13px;
      margin-bottom: 4px;
      font-weight: 400;
    }
  }
  &__input {
    color: #b4b4b4;
    border: none;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding-top: 10px;
    padding-left: 16px;
    padding-bottom: 11px;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    width: 100%;
    font-family: inherit;
    &_error {
      border: 1px solid #ff8484;
    }
  }
  &__button {
    width: 100%;
    color: #b4b4b4;
    font-size: 12px;
    background: #eeeeee;
    border: none;
    border-radius: 10px;
    padding: 10px 0px 11px;
    letter-spacing: -0.02em;
    cursor: pointer;
    &:hover {
      background: #e4dede;
    }
    &_valid {
      background: #7bae73;
      color: #fff;
      &:hover {
        background: #7bae73a4;
      }
    }
  }
  &__error-message {
    color: #ff8484;
    font-size: 10px;
    font-weight: normal;
    margin-top: 4px;
  }
}
.text {
  text-align: center;
  color: green;
  padding-top: 10px;
}
.text-enter-active,
.text-leave-active {
  transition: opacity 0.6s ease-in;
}

.text-enter-from,
.text-leave-to {
  opacity: 0;
}

</style>
