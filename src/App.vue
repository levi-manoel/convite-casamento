<script>
import { RouterView } from 'vue-router'
import CountdownFooter from './components/Footer.vue'

export default {
  components: {
    'countdown-footer': CountdownFooter
  }
}
</script>

<template>
  <div class="main__container">
    <div>

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

    <footer>
      <countdown-footer />
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  background-color: #FFFCF0;
}

#app {
  display: flex;
  flex-direction: column;
  align-content: center;
}

header {
  display: flex;
  justify-content: center;
  padding-top: 2em;
}

.main__container {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  height: 100vh;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer {
  bottom: 0;
  width: 100%;
  background-color: #4a5344;
  color: white;
  text-align: center;
  padding: 1.5em 0 4em;

  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 22px;

  margin-top: 1em;
}
</style>
