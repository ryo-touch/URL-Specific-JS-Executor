(function() {
  // global
  document.querySelector(".file-transfers-global-header").remove();

  // ファイルをアップロードしたときの画面
  document.querySelector('.add-files-view-scrollable-container').style.flex = 'none';
  document.querySelector('#file-transfer-container > div > div').style.justifyContent = 'start';

  // ファイルの送信準備完了 画面
  document.querySelector(".redesigned-confirmation-view__hero").remove(); // 画像消す
  document.querySelector('.redesigned-confirmation-view__container').style.minHeight = '0px';
  document.querySelector('.redesigned-confirmation-view__container').style.minHeight = '0px';
  document.querySelector('.redesigned-confirmation-view__content-container').style.maxWidth = '100%';
  document.querySelector('.redesigned-confirmation-view__content-container').style.Width = '100%';
  document.querySelector('.redesigned-transfer-container__wrapper').style.alignItems = 'flex-start';
  document.querySelector('.redesigned-transfer-container__wrapper').style.justifyContent = 'start';
  console.log('JavaScript executed');
})();
