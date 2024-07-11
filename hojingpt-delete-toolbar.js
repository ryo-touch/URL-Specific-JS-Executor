(function() {
  // ここに実際に実行したいJavaScriptコードを記述する
  // 両脇のサイドバーとヘッダーをなくす
  document.querySelector(".toolbar").remove();
  document.querySelector(".navbar").remove();
  document.querySelector(".chat-header").remove();
  document.querySelector('.content-wrapper').style.paddingTop = '0px';
  document.querySelector('.threads').style.width = '0px';
  console.log('JavaScript executed');
})();
