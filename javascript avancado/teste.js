function job1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('deu sucesso job1');
        }, 2000)
    })
}

function job2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('deu sucesso job2');
        }, 1000)
    })
}

const promise = job1();

promise.then(resposta => {
    console.log(resposta);
    return job2()
}).then(resposta2 => {
    console.log(resposta2);
},1000)