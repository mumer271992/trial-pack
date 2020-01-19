<template>
  <section id="banner_section">
    <div class="container f-h">
      <div class="banner_section_content c-row align-center f-h">
        <div class="c-col-lg-3 c-col-md-4 c-col-sm-6 c-col-xs-12 t-c">
          <h1 class="t-c">Discover our skin friendliness</h1>
          <button
            class="primary large"
            @click="scrollToOrder"
          >Now choose your size</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'BannerComponent',
  methods: {
    scrollToOrder() {
      const orderSectionId = '#order_section';
      this.scrollToElement(orderSectionId);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixins.scss';

#banner_section{
  position: relative;
  background-image: url('../assets/images/header-trialbox-tablet.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 620px;
  @include media($mediam) {
    height: 550px;
  }

  .banner_section_content{
    @include media($small) {
      height: 90%;
      padding-top: 10%;
    }
  }
}
</style>
