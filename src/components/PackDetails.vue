<template>
  <section id="package_details_section">
    <div class="container">
      <h2 class="t-c">Contains your test package</h2>
      <div class="c-row">
        <div class="c-col-lg-6 c-col-md-6 c-col-sm-6 c-col-xs-12">
          <div class="c-row no-wrap">
            <div class="c-col-lg-3 c-col-md-3 c-col-sm-4 c-col-xs-4">
              <img src="../assets/images/diaper.jpg" />
            </div>
            <div class="c-col-lg-9 c-col-md-9 c-col-sm-8 c-col-xs-8">
              <h4>10 LILLYDOO DIAPERS</h4>
              <ul>
                <li>0% perfumes & lotions, 100% LILLYDOO protection</li>
                <li>Extra soft and with an ideal fit</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="c-col-lg-6 c-col-md-6 c-col-sm-6 c-col-xs-12">
          <div class="c-row no-wrap">
            <div class="c-col-lg-3 c-col-md-3 c-col-sm-4 c-col-xs-4">
              <img src="../assets/images/water-wipes-15-small.jpg" />
            </div>
            <div class="c-col-lg-9 c-col-md-9 c-col-sm-8 c-col-xs-8">
              <h4>15 WET WIPES WITH 99% WATER</h4>
              <ul>
                <li>0% perfumes & PEGs, 100% biodegradable</li>
                <li>Naturally pure, extra mild, alternative to "water & cotton"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'PackDetailsComponent',
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixins.scss';

#package_details_section {
  background-color: $white;
  padding: 4rem 0;
  [class*="c-col-"] {
    padding-right: 1rem;
  }
  img {
    width: 100%;
  }
  ul {
    padding-inline-start: 20px;
  }
  h4{
    margin-top: 0px;
  }
}
</style>
