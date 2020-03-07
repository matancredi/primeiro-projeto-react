function job(callback1, callback2) {
    const promise = new Promise((resolve) => {
        setTimeout(function() {
        callback1();
    }, 2000)
    })
    setTimeout(function() {
        callback2();
            setTimeout(function() {
            callback2();
                setTimeout(function() {
                callback2();
            }, 1000)
        }, 1000)
    }, 1000)

    promise.then(resposta => {
        resolve(resposta);

})
}

module.exports = job;