function search() {
	String artist = document.getElementByID("artist");
	String song = document.getElementByID("song");
	browser.tabs.create({
		url: "https://genius.com/" + artist + "-" + song + "-lyrics"
	});
}
