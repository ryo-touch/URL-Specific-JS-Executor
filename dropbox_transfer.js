(function() {
  const updateStyles = () => {
    const selectors = {
      header: ".file-transfers-global-header",
      scrollable: '.add-files-view-scrollable-container',
      transferContainer: '#file-transfer-container > div > div',
      createPageContainer: '#file-transfer-container',
      hero: ".redesigned-confirmation-view__hero",
      container: '.redesigned-confirmation-view__container',
      contentContainer: '.redesigned-confirmation-view__content-container',
      wrapper: '.redesigned-transfer-container__wrapper'
    };
    const elements = {};
    for (let key in selectors) {
        elements[key] = document.querySelector(selectors[key]);
    }
  if (elements.header) elements.header.remove();
  if (elements.scrollable) elements.scrollable.style.flex = 'none';
  if (elements.transferContainer) elements.transferContainer.style.justifyContent = 'start';
  if (elements.hero) elements.hero.remove();
  if (elements.container) elements.container.style.minHeight = '0px';
  if (elements.createPageContainer) {
    elements.style.maxWidth = '100%';
    elements.style.width = '100%';
  }
  if (elements.contentContainer) {
    elements.contentContainer.style.maxWidth = '100%';
    elements.contentContainer.style.width = '100%';
  }
  if (elements.wrapper) {
    elements.wrapper.style.alignItems = 'flex-start';
    elements.wrapper.style.justifyContent = 'start';
    elements.style.maxWidth = '100%';
    elements.wrapper.style.width = '120%';
  }
  console.log('JavaScript executed successfully');
  };

  // MutationObserver の設定
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      updateStyles();
    });
  });

  // 監視の開始
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });

  // 初回実行
  updateStyles();

  // オプション: 30秒後に監視を停止
  setTimeout(() => {
    observer.disconnect();
    console.log('Observer disconnected');
  }, 30000);
})();
