function solve(input){

    for (let i = 0; i < input.length; i++) {
        let table = input[i].split(' | ')
        let newObj = {}
        let town = table[0]
        let latitude = +table[1]
        let longitude = +table[2]

        newObj.town = town
        newObj.latitude = latitude.toFixed(2)
        newObj.longitude = longitude.toFixed(2)
        console.log(newObj);
          
    }


}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)