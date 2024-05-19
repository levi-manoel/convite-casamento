<script>
import { RouterView } from 'vue-router'
import CountdownFooter from './components/Footer.vue'

export default {
  components: {
    'countdown-footer': CountdownFooter
  },

  data: () => ({
    isLoading: false
  })
}
</script>

<template>
  <div class="main__container">
    <div class="loading style-2" v-if="isLoading">
      <div class="loading-wheel"></div>
    </div>

    <div>

      <header>
        <h2>
          Jeniffer e Levi
        </h2>
      </header>

      <main>
        <RouterView @startLoading="() => this.isLoading = true" @stopLoading="() => this.isLoading = false" />
        <notifications position="bottom right" />
      </main>

    </div>

    <footer>
      <countdown-footer />
    </footer>
  </div>
</template>

<style>
@font-face {
  font-family: 'amsterdanSignature';
  src: url('./assets/AmsterdamSignature.ttf') format('truetype'),
    url('./assets/AmsterdamSignature.woff') format('woff');
}

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
  padding: 2em 0;
}

h2 {
  font-family: amsterdanSignature;
  color: #4a5344;
  font-size: 100px;
  font-weight: 100;
  margin: 0;
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
  font-size: 16px;

  margin-top: 1em;
}

.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
}

.loading-wheel {
  width: 20px;
  height: 20px;
  margin-top: -40px;
  margin-left: -40px;

  position: absolute;
  top: 50%;
  left: 50%;

  border-width: 30px;
  border-radius: 50%;
  -webkit-animation: spin 1s linear infinite;
}

.style-2 .loading-wheel {
  border-style: double;
  border-color: #ccc transparent;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0);
  }

  100% {
    -webkit-transform: rotate(-360deg);
  }
}
</style>
