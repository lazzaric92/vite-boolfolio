<script >
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

  export default {
    data() {
      return { 

      }
    },
    components: {
      AppHeader,
      AppMain,
      AppFooter
    }
  }
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
  @use '../node_modules/bootstrap/scss/bootstrap.scss';
  @use './style/general.scss';
  @use './style/partials/variables' as *;
  @use './style/partials/mixins' as *;
</style>
