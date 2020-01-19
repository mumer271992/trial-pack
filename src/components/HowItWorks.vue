<template>
  <section id="how_it_works">
    <div class="container t-c">
      <h2 class="t-c">How it works</h2>
      <div class="c-row top-align f-h">
        <div class="c-col-lg-4 c-col-md-4 c-col-sm-4 c-col-xs-12 t-c">
          <div>
            <img src="../assets/images/lillydoo-your-trialbox-icon.svg" />
          </div>
          <h4>YOUR TEST PACKAGE</h4>
          <div>We give you the products, you take over only the postage.</div>
        </div>
        <div class="c-col-lg-4 c-col-md-4 c-col-sm-4 c-col-xs-12 t-c">
          <div>
            <img src="../assets/images/lillydoo-your-flexibility-icon.svg" />
          </div>
          <h4>YOUR FLEXIBILITY</h4>
          <div>First month box after 14 days for 49,50 € received. Or cancel before the first delivery.</div>
          <div class="links">
            <div><a href="#">Learn more about the</a></div>
            <div><a href="#">LILLYDOO diaper subscription here.</a></div>
          </div>
        </div>
        <div class="c-col-lg-4 c-col-md-4 c-col-sm-4 c-col-xs-12 t-c">
          <div>
            <img src="../assets/images/lillydoo-your-subscription-icon.svg" />
          </div>
          <h4>YOUR MONTHLY BOX</h4>
          <div>Adapt designs or delivery intervals at any time or change the diaper size.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HowItWorksComponent',
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixins.scss';

#how_it_works {
  padding: 4rem 0;
  background-color: #f8f8f8;
  [class*="c-col-"] {
    padding: 0 1.5rem;
    @include media($small){
      padding: 1.5rem 0;
    }
  }
  h2{
    margin-top: 0;
    margin-bottom: 2rem;
  }
  .links{
    margin-top: 2rem;
  }
}
</style>
