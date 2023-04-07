// ==UserScript==
// @name         0x7C2f Boilerplate
// @version      1.0
// @updateURL    https://raw.githubusercontent.com/0x7C2f/Boilerplate/main/boilerplate.user.js
// @description  My personal userscripts boilerplate.
// @author       0x7C2f
// @homepageURL     https://github.com/0x7C2f/Boilerplate
// @supportURL      https://github.com/0x7C2f/Boilerplate/discussions
// @include      *
// @namespace    https://github.com/0x7C2f/Boilerplate
// @grant        none
// ==/UserScript==

// Array of blacklisted URLs
var blacklistedUrls = ["github.com", "rollercoin.com"];

// Function to load jquery
function addJQuery(callback) {
  var script = document.createElement("script");

  script.setAttribute(
    "src",
    "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"
  );

  script.addEventListener(
    "load",
    function () {
      var script = document.createElement("script");
      script.textContent =
        "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
      document.body.appendChild(script);
    },
    false
  );
  document.body.appendChild(script);
}
// Prevent Visibility Tracking
function visibility() {
  window.addEventListener(
    "visibilitychange",
    function (event) {
      event.stopImmediatePropagation();
    },
    true
  );
  window.addEventListener(
    "blur",
    function (event) {
      event.stopImmediatePropagation();
    },
    true
  );
  window.addEventListener(
    "mouseleave",
    function (event) {
      event.stopImmediatePropagation();
    },
    true
  );
}

// Check if the current URL is blacklisted
function isBlacklistedUrl(url) {
  return blacklistedUrls.includes(url);
}

// the guts of this userscript
function main() {
  var currentUrl = window.location.href;
  if (!isBlacklistedUrl(currentUrl)) {
    visibility();
  }
}

addJQuery(main);
