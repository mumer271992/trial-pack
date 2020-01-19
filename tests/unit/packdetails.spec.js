/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import PackDetailsComponent from '../../src/components/PackDetails.vue';

describe('Testing trial pack included items component', () => {
  test('renders correctly', () => {
    const wrapper = mount(PackDetailsComponent);
    expect(wrapper.element).toMatchSnapshot();
  });
});
