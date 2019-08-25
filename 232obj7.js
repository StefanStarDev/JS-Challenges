function solve(input){

    let numberOfSongs = +input.shift()
    let typeSong = input.pop()
    let songs = []


    class Song{
        constructor(type,name,time){
            this.type = type
            this.name = name
            this.time = time
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {

        let [type,name,time] = input[i].split('_')
        let song = new Song(type, name, time)  
        songs.push(song)
        
        
    }

    if(typeSong === 'all'){
        songs.forEach( el => console.log(el.name));
        
    }else{
        let filtred = songs.filter(i => i.type === typeSong)
        filtred.forEach(i => console.log(i.name));
        
    }
   

}

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
    
    )