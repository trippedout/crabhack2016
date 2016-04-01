// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function() {
	chrome.browserAction.onClicked.addListener(function(tab) {
	  chrome.tabs.create({url:chrome.extension.getURL("tabs_api.html")});
	});

	chrome.tabs.onActivated.addListener(function(activeInfo) {
		console.log(activeInfo.tabId + " : " + activeInfo.windowId);
	});

	var onTimer = function() {
		// alert('fuck');
	}

	setInterval(onTimer, 10000);

})();

