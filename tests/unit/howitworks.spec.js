/* eslint-disable no-undef */
import { mount } from '@vue/test-utils';
import HowItWorksComponent from '../../src/components/HowItWorks.vue';

describe('Testing how it works component', () => {
  test('renders correctly', () => {
    const wrapper = mount(HowItWorksComponent);
    expect(wrapper.element).toMatchSnapshot();
  });
});
