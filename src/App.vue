<template>
  <div id="app" style="display: flex; flex-direction: column">
    <DSButton variant="primary">My button</DSButton>

    <MyButton style="margin-top: 10px"  variant="secondary">plugin button</MyButton>
    <my-button style="margin-top: 10px"  variant="secondary">another button</my-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DSButton from "@/components/button/button.vue";

@Component({
  components: {DSButton},
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
