<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main__container">
    <header>
      <h2>
        <img src="../public/jl.png" alt="Jeniffer e Levi">
      </h2>
    </header>

    <main>
      <RouterView />
      <notifications position="bottom right" />
    </main>
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #FFFCF0;
  min-height: 100vh;
}

header {
  display: flex;
  justify-content: center;
  padding-top: 2em;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
