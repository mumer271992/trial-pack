/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import BannerComponent from '../../src/components/Banner.vue';

describe('Testing banner component', () => {
  test('renders correctly', () => {
    const wrapper = mount(BannerComponent);
    expect(wrapper.element).toMatchSnapshot();
  });
});
