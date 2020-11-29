let server = 2;
const loadPerMin = [10, 60, 50, 15, 20];
const serverRunIntervalInM = 60000;
const index = 0;

const checkLoad = (l) => {
    console.log('l', l)
    if(l < 50){
        server = server/2;
    } else{
        server = 2*server + 1;
    }

    server = Math.round(server)
    console.log('server', server)
}


for (let index = 0; index < loadPerMin.length; index++) {
    const load = loadPerMin[index];
    console.log('load', load)
    setInterval(checkLoad(load), 60000)
}

console.log(server)

