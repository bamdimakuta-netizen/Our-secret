$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var passwordInput = $("#password");

  // Try to open when clicking envelope or open button
  envelope.click(function () {
    tryOpen();
  });
  btn_open.click(function () {
    tryOpen();
  });

  // Close button
  btn_reset.click(function () {
    close();
  });

  // Check password before opening
  function tryOpen() {
    var enteredPassword = passwordInput.val();
    if (enteredPassword === "54321") {
      open();
      passwordInput.hide(); // hide password input after success
    } else {
      alert("Incorrect password! Try again.");
    }
  }

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function close() {
    envelope.addClass("close").removeClass("open");
    passwordInput.val("").show(); // reset & show input again
  }
});