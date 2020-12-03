let totalProfit = 0;



const maxProfit = (noOfbread, noOfVada, noOfSamosa, priceOfVada, priceOfSamosa) => {
    if (priceOfSamosa >= priceOfVada){
        if((noOfSamosa*2) <= noOfbread){

            totalProfit = noOfSamosa * priceOfSamosa
            noOfbread = noOfbread - noOfSamosa*2 
     
            if(noOfbread >= noOfVada*2){
     
             totalProfit = totalProfit + (noOfVada*priceOfVada)
             console.log(totalProfit)
     
            }else{
             if(noOfbread % 2 === 0){
                 totalProfit = totalProfit +  (noOfbread/2)*priceOfVada
                 console.log(totalProfit)
             }else{
                 totalProfit = totalProfit + ((noOfbread-1)/2)*priceOfVada
                 console.log(totalProfit)
             }
            }
     
         }else{
             if(noOfbread % 2 === 0){
                 totalProfit = (noOfbread/2) * priceOfSamosa
                 console.log(totalProfit)
             }else{
                 totalProfit = ((noOfbread-1)/2) * priceOfSamosa
                 console.log(totalProfit)
             }
         }
    } else{
        if((noOfVada*2) <= noOfbread){

            totalProfit = noOfVada * priceOfVada
            noOfbread = noOfbread - noOfVada*2 
     
            if(noOfbread >= noOfSamosa*2){
     
             totalProfit = totalProfit + (noOfSamosa*priceOfSamosa)
             console.log(totalProfit)
     
            }else{
             if(noOfbread % 2 === 0){
                 totalProfit = totalProfit +  (noOfbread/2)*priceOfSamosa
                 console.log(totalProfit)
             }else{
                 totalProfit = totalProfit + ((noOfbread-1)/2)*priceOfSamosa
                 console.log(totalProfit)
             }
            }
     
         }else{
             if(noOfbread % 2 === 0){
                 totalProfit = (noOfbread/2) * priceOfVada
                 console.log(totalProfit)
             }else{
                 totalProfit = ((noOfbread-1)/2) * priceOfVada
                 console.log(totalProfit)
             }
         }
    }
}

maxProfit(4, 100, 100, 15, 10)
