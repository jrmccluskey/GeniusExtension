function openPage() {
    browser.tabs.create({
	url:"https://genius.com"
    });
}

browser.browserAction.onClicked.addListener(openPage);
