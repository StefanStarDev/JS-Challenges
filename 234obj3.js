function solve(currentStock, orderedStock){

    
    let obj = {}
    

    for (let i = 0; i < currentStock.length; i++) {
        
        if(i % 2 === 0){
            let product = currentStock[i]
            let value = +currentStock[i+1]
            obj[product] = value
        }     
    }
    
    for (let j = 0; j < orderedStock.length; j+=2) {
        

        let key = orderedStock[j]
        let value = +orderedStock[j+1]
        
            if(obj.hasOwnProperty(key)){
                obj[key] += value
                
        
        
        }else{
            obj[key] = value
           
        }
       
    }


    

   for (const key in obj) {
       let value = obj[key]

       console.log(`${key} -> ${value}`);
       
   }
    
    


}

solve([
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]
)