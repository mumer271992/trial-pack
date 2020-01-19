<template>
  <div class="trial-pack-container">
    <banner-component />
    <order />
    <how-it-works />
    <pack-details />
  </div>
</template>

<script>
import BannerComponent from '../components/Banner.vue';
import HowItWorksComponent from '../components/HowItWorks.vue';
import PackDetailsComponent from '../components/PackDetails.vue';
import OrderComponent from '../components/Order.vue';

export default {
  name: 'TrialPackContainer',
  components: {
    'banner-component': BannerComponent,
    order: OrderComponent,
    'how-it-works': HowItWorksComponent,
    'pack-details': PackDetailsComponent,
  },
};
</script>

<style lang="scss">
.trial-pack-page {
}
</style>
