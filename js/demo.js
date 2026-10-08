(function () {
  var dialog = document.getElementById("demo-dialog");
  var openButton = document.getElementById("demo-open");
  var closeButton = document.getElementById("demo-close");
  if (!dialog || !openButton || !closeButton) return;

  openButton.addEventListener("click", function () { dialog.showModal(); });
  closeButton.addEventListener("click", function () { dialog.close(); });
  // ダイアログの外側(背景)をクリックしても閉じる
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
