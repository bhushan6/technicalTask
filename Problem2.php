<?php
$totalProfit = 0;

$noOfbread = 9; 
$noOfVada = 2; 
$noOfSamosa = 3; 
$priceOfVada = 10; 
$priceOfSamosa = 15;

function maxProfit(){

    global $noOfbread, $noOfVada, $noOfSamosa, $priceOfVada, $priceOfSamosa;

    if ($priceOfSamosa >= $priceOfVada){
        if(($noOfSamosa*2) <= $noOfbread){

            $totalProfit = $noOfSamosa * $priceOfSamosa;
            $noOfbread = $noOfbread - $noOfSamosa*2 ;
     
            if($noOfbread >= $noOfVada*2){
     
             $totalProfit = $totalProfit + ($noOfVada*$priceOfVada);
             echo $totalProfit;
             
     
            }else{
             if($noOfbread % 2 === 0){
                 $totalProfit = $totalProfit +  ($noOfbread/2)*$priceOfVada;
                  echo $totalProfit;
                  
             }else{
                 $totalProfit = $totalProfit + (($noOfbread-1)/2)*$priceOfVada;
                 echo $totalProfit;
                 
             }
            }
     
         }else{
             if($noOfbread % 2 === 0){
                 $totalProfit = ($noOfbread/2) * $priceOfSamosa;
                 echo $totalProfit;
                 
             }else{
                 $totalProfit = (($noOfbread-1)/2) * $priceOfSamosa;
                 echo $totalProfit;
                 
             }
         }
    } else{
        if(($noOfVada*2) <= $noOfbread){

            $totalProfit = $noOfVada * $priceOfVada;
            $noOfbread = $noOfbread - $noOfVada*2;
     
            if($noOfbread >= $noOfSamosa*2){
     
             $totalProfit = $totalProfit + ($noOfSamosa*$priceOfSamosa);
             echo $totalProfit;
             
     
            }else{
             if($noOfbread % 2 === 0){
                 $totalProfit = $totalProfit +  ($noOfbread/2)*$priceOfSamosa;
                 echo $totalProfit;
                 
             }else{
                 $totalProfit = $totalProfit + (($noOfbread-1)/2)*$priceOfSamosa;
                 echo $totalProfit;
                 
             }
            }
     
         }else{
             if($noOfbread % 2 === 0){
                 $totalProfit = ($noOfbread/2) * $priceOfVada;
                 echo $totalProfit;
                 
             }else{
                 $totalProfit = (($noOfbread-1)/2) * $priceOfVada;
                 echo $totalProfit;
                
             }
         }
    }
}

maxProfit()
?> 