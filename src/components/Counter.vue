<script setup>
import { useCounter } from "../store";

const counterStore = useCounter();

counterStore.$subscribe((mutation, state) => {
  console.info(mutation);
  console.info(state);
});

function handleClick() {
  counterStore.counter++;
}

function handleReset() {
  counterStore.$patch({
    counter: 0,
  });
}
</script>
<template>
  <div>
    <h1>Counter {{ counterStore.counter }}</h1>
    <button @click="handleClick">Increment</button>
    <button @click="handleReset">Reset</button>
  </div>
</template>
<style scoped></style>
