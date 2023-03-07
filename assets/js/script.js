// Javascript for Copy Button
var copyMsgTimer = null;

function copyText() {
  clearTimeout(copyMsgTimer);
  const copiedText = document.querySelector("#copiedText");
  const copyMsg = document.querySelector(".copyMessage");

  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(copiedText);
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();

  copyMsg.style.opacity = 1;
  copyMsgTimer = setTimeout(() => {
    copyMsg.style.opacity = 0;
  }, 2000);
}

// Javascript for redirect onClick
