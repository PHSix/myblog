<template>
  <div class="img-container">
    <section class="typing">
      <div class="banner-title" style="display: flex; font-size: 2rem">
        {{ renderText }}
        <div class="underline-shape">_</div>
      </div>
      <div class="banner-message" v-if="message">{{ message }}</div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    message: {
      required: false,
    },
  },
  data() {
    return {
      renderText: "",
    };
  },
  mounted() {
    this.typeAnimation();
  },
  methods: {
    typeAnimation() {
      const textInt = setInterval(() => {
        if (this.title.length !== 0) {
          if (this.renderText.length === this.title.length) {
            clearInterval(textInt);
            return;
          }
          this.renderText += this.title[this.renderText.length];
        }
      }, 90);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
  min-height: 100%;
}
.img-container {
  height: 300px;
  overflow: hidden;
  width: 100%;
  background-image: url(../assets/background.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.typing {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee;
}

@keyframes blink-underline {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.banner-title {
  font-family: "Ma Shan Zheng", cursive;
}

.underline-shape {
  margin-left: 3px;
  animation-name: blink-underline;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  font-size: 2rem;
}
.banner-message {
  margin-top: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
