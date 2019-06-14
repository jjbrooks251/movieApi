function createPromise(method, url, body) {
    return new Promise(function (resolve, reject) {

        let req = new XMLHttpRequest();

        req.open(method, url);
        req.send(body);
        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.onerror = function () {
            reject(Error("Network Error"))
        };

    })

}


function getMovies() {

    let title = document.getElementById('search').value;

    createPromise("GET", "http://www.omdbapi.com/?apikey=b12508f8&t=" + title).then(resolve => { console.log(resolve) });

}