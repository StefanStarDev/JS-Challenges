function solve(name, area, population, country, postCode) {

    let obj = {
        name,
        area,
        population,
        country,
        postCode,
    }

    for (const key in obj) {
        let value = obj[key]
        console.log(`${key} -> ${value}`);

    }



}

solve("Sofia", " 492", "1238438", "Bulgaria", "1000")