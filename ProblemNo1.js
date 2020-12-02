let server = 2;
const loadPerMin = [10, 60, 50, 15, 20];
const serverRunIntervalInM = 60000;
const index = 0;

const checkLoad = (load) => {
    if(load < 50){
        server = server/2;
    } else{
        server = 2*server + 1;
    }
    server = Math.floor(server)
    // console.log(server)
}

loadPerMin.forEach((load) => {
    setInterval(checkLoad(load), serverRunIntervalInM)
    console.log(server)
})
