function solve(jsonStr){

    let person = JSON.parse(jsonStr)
    

    for (const key in person) {
        const value = person[key]
        console.log(`${key}: ${value}`);
        
    }
    



}

solve('{"name": "George", "age": 40, "town": "Sofia"}')