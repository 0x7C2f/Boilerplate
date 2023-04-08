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
// @grant        window.close
// ==/UserScript==

// Array of blacklisted URLs
var blacklistedUrls = ["github.com", "rollercoin.com", "reddit.com"];

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

function autorefresh() {
  "use strict";
  setTimeout(function () {
    location.reload();
  }, 2 * 1000);
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

  if (currentUrl === "worker.mturk.com/tasks") {
    autorefresh();
  }
}

addJQuery(main);
