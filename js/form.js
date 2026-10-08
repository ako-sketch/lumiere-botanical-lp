(function () {
  var form = document.getElementById("entry-form");
  if (!form) return;

  var rules = {
    name: function (v) {
      return v ? "" : "お名前を入力してください。";
    },
    email: function (v) {
      if (!v) return "メールアドレスを入力してください。";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "メールアドレスの形式が正しくありません。";
    },
    instagram: function (v) {
      if (!v) return "Instagramアカウント名を入力してください。";
      return /^@?[A-Za-z0-9._]{1,30}$/.test(v)
        ? ""
        : "半角英数字・ピリオド・アンダースコアで入力してください（30文字まで）。";
    },
  };

  function validate(input) {
    var message = rules[input.name](input.value.trim());
    document.getElementById(input.id + "-error").textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
  }

  Object.keys(rules).forEach(function (name) {
    var input = form.elements[name];
    input.addEventListener("blur", function () { validate(input); });
    input.addEventListener("input", function () {
      if (input.getAttribute("aria-invalid") === "true") validate(input);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstInvalid = null;
    Object.keys(rules).forEach(function (name) {
      var input = form.elements[name];
      if (!validate(input) && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    // デモのため入力内容は送信・保存せず、完了画面へ遷移するだけ
    window.location.href = "thanks.html";
  });
})();
