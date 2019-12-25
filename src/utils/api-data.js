const API_KEY = `f452ccae13fd4ab0bb3518bd59adc3ed`;

export function getData(countryCode = 'br') {
    return new Promise((res) => {
        res(fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${API_KEY}`));
    })
}

export function getSearch(query) {
    return new Promise((res) => {
        res(fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`));
    })
}

