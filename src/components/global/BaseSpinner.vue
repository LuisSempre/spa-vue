<template>
  <div class="base-spinner fa-5x" v-if="visible">
    <i class="fa fa-cog fa-spin fa-1x fa-fw"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  create () {
    this.$root.$on('Spinner::show', this.alternarSpinner)

    this.$root.$on('Spinner::hide', this.alternarSpinner)
  },
  methods: {
    alternarSpinner () {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/_variables.scss";

.base-spinner {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 100000000000;
  position: absolute;
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $dark-medium;
  color: $feature;
}
</style>
