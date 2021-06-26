<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  <div id="app">
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="#">Resutados do Scrapping Armazenado no banco</a>
    </nav>

    <table class="table">
      <tr>
        <!-- <th># ID</th> -->
        <th>Autor</th>
        <th>Citação</th>
      </tr>

      <tr v-for="resultado of resultados" :key="resultado.id">
        <!-- <td>{{ resultado.id }}</td> -->
        <td>{{ resultado.nome_autor }}</td>
        <td>{{ resultado.citacao }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Registro from "./services/scrappings";
export default {
  //name: "App",
  components: {
    // HelloWorld,
  },

  data() {
    return {
      resultados: [],
    };
  },

  mounted() {
    Registro.listar().then((response) => {
      console.log(response.data);
      this.resultados = response.data;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
