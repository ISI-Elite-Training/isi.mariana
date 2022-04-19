console.log('Hello world!');

(function () {


    var d = document;
    var sA = ['polyfills', 'js'];

    for (var i = 0; i < sA.length; i++) {
        var s = d.createElement('script');
        s.src = 'https://isi.marianaiframes.com/' + sA[i];
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    }
})();
