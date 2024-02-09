const sleep = (duration) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Ran after 2 secs');
        }, duration);
    })
}

sleep(2000).then((result)=> {
    console.log(result);
}).catch((error)=> {
    console.log(error);
})