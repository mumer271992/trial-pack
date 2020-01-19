const UtilityMixin = {
  methods: {
    scrollToElement(element) {
      if (!window || !document.querySelector(element)) return;
      document.querySelector(element).scrollIntoView({
        behavior: 'smooth',
      });
    },
  },
};

export default UtilityMixin;
