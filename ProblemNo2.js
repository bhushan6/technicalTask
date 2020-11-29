const bread = 8
const vada = 2
const samosa = 3
let profit = 0;

const samosaPrice = 15
const vadaPrice = 10


if(bread % 2 === 0){

    if(bread/2 > samosa){
        profit = (bread/2 - samosa) * samosaPrice
        if(bread/2 - samosa % 2 === 0){
            if(bread/2 - samosa > vada){
                profit = profit + vada*vadaPrice 
            }else{
                profit = profit + (vada - (vada-(bread/2 - samosa)) * vadaPrice)
            }
        }else{
            if(bread/2 - samosa > vada){
                profit = profit + vada*vadaPrice 
            } else{
                profit = profit + (vada - (vada-(bread/2 - samosa - 1)) * vadaPrice)
            }
        }
    }else{
        profit = bread/2 * samosaPrice
    }

} else{

    if((bread-1)/2 > samosa){
        profit = ((bread-1)/2 - samosa) * samosaPrice
        // if ()
    }else{
        profit = ((bread-1)/2) * samosaPrice
    }

}

console.log(profit)