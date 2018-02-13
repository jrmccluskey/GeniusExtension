const authKey = 'bxEm4CnkqoOG-Kx1gDDpHZkpB0Q_zKQQDaRe336tJjYj8eun8m2txAPFgFg7DWD0';
const apiURL = 'https://api.genius.com/';

fetch(apiURL+ 'search?access_token=' + authKey + '&q=Logic').then((resp) => resp.json()).then(function(data) {
  console.log(data);
});
}