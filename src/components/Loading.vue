<template>
  <div class="loading-card">
    <div class="loading-one"></div>
    <div class="loading-two"></div>
    <div class="loading-three"></div>
    <div class="loading-four"></div>
    <div class="loading-five"></div>
    <div class="loading-six"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@keyframes up-to-down {
  0% {
    height: 0.5rem;
  }
  50% {
    height: 4rem;
  }
  100% {
    height: 0.5rem;
  }
}
.loading-card {
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading-one {
  width: 1rem;
  animation-name: up-to-down;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  background-color: #14B8A6;
}
.loading-two {
  width: 1rem;
  animation-name: up-to-down;
  animation-duration: 1s;
  animation-delay: 50ms;
  animation-iteration-count: infinite;
  background-color: #0EA5E9;
}
.loading-three {
  width: 1rem;
  animation-name: up-to-down;
  animation-duration: 1s;
  animation-delay: 100ms;
  animation-iteration-count: infinite;
  background-color: #A78BFA;
}
.loading-four {
  width: 1rem;
  animation-name: up-to-down;
  animation-duration: 1s;
  animation-delay: 150ms;
  animation-iteration-count: infinite;
  background-color: #FACC15;
}
.loading-five {
  width: 1rem;
  animation-name: up-to-down;
  animation-duration: 1s;
  animation-delay: 200ms;
  animation-iteration-count: infinite;
  background-color: #FCA5A5;
}
.loading-six {
  width: 1rem;
  animation-name: up-to-down;
  animation-duration: 1s;
  animation-delay: 250ms;
  animation-iteration-count: infinite;
  background-color: #94A3B8;
}
</style>
