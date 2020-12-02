let totalProfit = 0;


const maxProfit = (noOfBread, noOfVada, noOfSamosa, priceOfSamosa, priceOfVada) => {
    if(noOfBread % 2 === 0){
        
    } else{
        
        //making no of bread even
        noOfBread = noOfBread - 1;

        //checking if no of breads are enough for samosa
        if(noOfBread >= noOfSamosa*2){
            
            totalProfit = noOfSamosa * priceOfSamosa;
            noOfBread = noOfBread - (noOfSamosa*2) + 1
            
            //checking no of unused bread
            if(noOfBread % 2 === 0){

            }else{

                if(noOfBread > noOfVada*2){

                } else if(noOfBread === noOfVada*2){

                }else{
                    
                    noOfBread = noOfBread -1;
                    totalProfit = totalProfit + (noOfBread/2) * priceOfVada 
                    console.log(totalProfit)
                }
            }
        }
    }
}

maxProfit(9, 2, 3, 15, 10);