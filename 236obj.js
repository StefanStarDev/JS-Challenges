function solve(input){

    let band = input.pop()
    let startOfConcert = input.pop()
    let bandNames = []
    let members = []
    let time = 0

    for (let i = 0; i < input.length; i++) {
        
        let elements = input[i].split('; ')
        let command = elements[0]
        let currentBand = elements[1]
        let members = elements[2].split(', ')
        
        if(command === 'Add'){

            let member1 = members[0]
            let member2 = members[1]
            let member3 = members[2]


     
            if(!bandNames.includes(currentBand)){
                bandNames.push(currentBand)
            }
        
       
        
    }

}
    

console.log(bandNames[2])



}

solve([ 'Play; The Beatles; 2584',
'Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr',
'Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner',
'Play; Eagles; 1869',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards',
'Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart',
'Play; The Rolling Stones; 4239',
'start of concert',
'The Rolling Stones' ]
    )