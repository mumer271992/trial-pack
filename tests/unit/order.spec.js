/* eslint-disable no-undef */
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import OrderComponent from '../../src/components/Order.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const actions = {
  selectPack: jest.fn(),
};
const store = new Vuex.Store({
  actions,
});

describe('Test select trial pack of your choice', () => {
  const wrapper = mount(OrderComponent, {
    localVue,
    store,
  });
  test('Test pack select method is working', () => {
    const dataItem = wrapper.vm.sizes[0];
    wrapper.vm.onSelect(dataItem);
    const selectedPack = wrapper.vm.selectedSize;
    expect(selectedPack).toBe(dataItem.number);
  });
  test('Test pack select changes current image', () => {
    // const wrapper = mount(OrderComponent);
    const dataItem = wrapper.vm.$data.sizes[0];
    wrapper.vm.onSelect(dataItem);
    const selectedImage = wrapper.vm.$data.currentImage;
    expect(selectedImage).toBe(dataItem.image);
  });
  test('Test pack select button click', () => {
    // const wrapper = mount(OrderComponent);
    const dataItems = wrapper.vm.$data.sizes;
    dataItems.forEach((dataItem) => {
      const button = wrapper.find(`#package-no-${dataItem.number}`);
      button.trigger('click');
      const selectedPack = wrapper.vm.selectedSize;
      expect(selectedPack).toBe(dataItem.number);
    });
  });
});
