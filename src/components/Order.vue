<template>
  <section id="order_section">
    <div class="container">
      <div class="c-row">
        <div class="c-col-lg-6 c-col-md-6 c-col-sm-6 c-col-xs-6 order-image">
          <img :src="currentImage" />
        </div>
        <div class="c-col-lg-6 c-col-md-6 c-col-sm-6 c-col-xs-6 cart-section">
          <h2>Our free test package</h2>
          <div>CHOOSE YOUR SIZE</div>
          <div class="sizes">
            <div
              v-for="size of sizes"
              :key="size.number"
              @click="onSelect(size)"
              :data-test="`package-no-${size.number}`"
              :id="`package-no-${size.number}`"
              :class="`size-button ${size.number === selectedSize ? ' active' : ''}`"
            >
              <div>{{ size.number }}</div>
              <div>{{ size.weight }}</div>
            </div>
          </div>
          <div>Test our diapers and wipes now - In size 1 - 3 our test package contains our wipes with 99% water, from Gr. 4 you will receive our Sensitive Wet Wipes. We pay the products, you only the shipping.</div>
          <ul>
            <li class="brand-color">Automatic transition to the ever-terminable diaper subscription for € 49.50 per delivery.</li>
            <li>Prices include VAT, <a href="#" target="_blank">plus shipping costs</a></li>
          </ul>
          <button class="add-to-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TestPacket1 from '../assets/images/lillydoo-testpaket-10.jpg';
import TestPacket2 from '../assets/images/lillydoo-testpaket-20.jpg';
import TestPacket3 from '../assets/images/lillydoo-testpaket-30.jpg';
import TestPacket4 from '../assets/images/lillydoo-testpaket-40.jpg';
import TestPacket5 from '../assets/images/lillydoo-testpaket-50.jpg';

export default {
  name: 'OrderComponent',
  data() {
    return {
      currentImage: TestPacket1,
      selectedSize: 1,
      sizes: [
        {
          number: 1,
          weight: '2-3 KG',
          selected: false,
          image: TestPacket1,
        },
        {
          number: 2,
          weight: '2-3 KG',
          selected: false,
          image: TestPacket2,
        },
        {
          number: 3,
          weight: '2-3 KG',
          selected: false,
          image: TestPacket3,
        },
        {
          number: 4,
          weight: '2-3 KG',
          selected: false,
          image: TestPacket4,
        },
        {
          number: 5,
          weight: '2-3 KG',
          selected: false,
          image: TestPacket5,
        },
      ],
    };
  },
  methods: {
    onSelect(size) {
      this.selectedSize = size.number;
      this.currentImage = size.image;
      this.$store.dispatch('selectPack', size);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/mixins.scss';

#order_section {
  padding: 4rem 0;
  img {
    width: 100%;
  }
  ul {
    padding-inline-start: 20px;
  }
  button.add-to-cart {
    width: 100%;
    margin-top: 3rem;
  }
  .order-image{
    padding: 0 3rem;
  }
  .cart-section {
    padding: 0 3rem;
    h2{
      margin-top: 0;
    }
    .sizes{
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
      .size-button{
        cursor: pointer;
        display: inline-block;
        border: 1px solid #7c7c7c;
        text-align: center;
        padding: 7px 20px 2px 20px;
        color: #7c7c7c;
        margin-right: 10px;
        &:hover {
          color: $white;
          background-color: $brand;
          border-color: $brand;
        }
        &.active{
          color: $white;
          background-color: $brand;
          border-color: $brand;
        }
        @include media(1324px) {
          margin-bottom: 10px;
        }
        @include media(1024px) {
          padding: 10px 20px 5px 20px;
          margin-bottom: 10px;
        }
        @include media(768px) {
          padding: 10px 20px 5px 20px;
          margin-bottom: 10px;
        }
        @include media(567px) {
          padding: 10px 20px 5px 20px;
          margin-bottom: 10px;
        }
      }

    }
  }
  @include media(768px){
    .order-image, .cart-section {
      padding: 0 1rem;
    }
  }
  @include media(567px){
    .order-image, .cart-section {
      padding: 0;
    }
  }
}
</style>
