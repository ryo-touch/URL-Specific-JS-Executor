(function() {
  document.querySelector(".toolbar").remove();
  document.querySelector(".navbar").remove();
  document.querySelector(".chat-header").remove();
  document.querySelector('.content-wrapper').style.paddingTop = '0px';
  document.querySelector(".threads-mid").remove();
  document.querySelector(".threads-bottom").remove();
  document.querySelector('.threads').style.borderRight = '0px';
  removeButtonText();
  const divElement = document.querySelector('div.d-grid.p-3');
  if (divElement) {
    divElement.style.setProperty('padding', '0rem', 'important');
  }
  const iconElement = document.querySelector('span.plus-icon.white.icon');
  if (iconElement) {
    iconElement.style.marginRight = '0rem';
  }
  console.log('JavaScript executed');
})();

function removeButtonText() {
  const button = document.querySelector('button[onclick="thread_create()"]');
  button.innerHTML = '';
  const iconSpan = document.createElement('span');
  iconSpan.className = 'plus-icon white icon';
  button.appendChild(iconSpan);
}
