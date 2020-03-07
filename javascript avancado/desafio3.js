function job(data) {
    return new Promise((resolve, reject) => {
        console.log(data);
        if (isNaN(data)){
            reject("error");
        }
        else if (data%2 == 0){
            setTimeout(function() {
                resolve("even");
            }, 2000);
        }
        else {
            setTimeout(function() {
                resolve("odd");
            }, 1000);
            
        }
        
        });
}

job("a").then(content => console.log(content))
.catch(erro => console.log(erro));


