chrome.omnibox.onInputChanged.addListener(function (query, suggest) {
  var accessToken = 'ujIM63vP1cZ4ng87QOz7y__YYSnXQzvFBgQnNGLUJpXTs8fb2nSTGFCipbwnnIiu';

  fetch('https://api.genius.com/search?access_token=' + accessToken + '&q=' + encodeURIComponent(query)).then(function (response) {
    response.json().then(function (data) {
      suggest(data.response.hits.map(function (hit) {
        return {
          content: hit.result.url,
          description: hit.result.title + ' by ' + hit.result.primary_artist.name
        };
      }));
    });
  });
});

chrome.omnibox.onInputEntered.addListener(function (content) {
  chrome.tabs.update({ url: content });
});

function openPage() {
    var gettingCurrent = browser.tabs.query({active: true});
    gettingCurrent.then(onGot, onError);
}

function onGot(tabInfo) {
    var accessToken = 'ujIM63vP1cZ4ng87QOz7y__YYSnXQzvFBgQnNGLUJpXTs8fb2nSTGFCipbwnnIiu';
    var title = tabInfo[0].title;
    title  = title.replace("YouTube", "");
    title = title.replace(" - ", "");
    console.log(title);
    fetch('https://api.genius.com/search?access_token=' + accessToken + '&q=' + encodeURIComponent(title)).then(function (response) {
        response.json().then(function(data) {
	   // console.log(data);
	   // console.log(data.response.hits[0].result.url);
	    var songPage = data.response.hits[0].result.url;
	    browser.tabs.create({
		url: songPage
	    })
	});
    });
}

function onError(error) {
    console.log(`Error: ${error}`);
    openSite();
}

function openSite() {
    browser.tabs.create({
        url:"https://genius.com"
    });
}

browser.browserAction.onClicked.addListener(openPage);
