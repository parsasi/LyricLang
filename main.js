let songs = [{
    id : '1',
    name : 'Yellow Submarine',
    address : 'songs/song1.mp3',
    eng : `` , 
    mand : ``
} , {
    id : '2',
    name : 'Jingle Bells',
    address : 'songs/song2.mp3',
    eng : `` , 
    mand : ``
} ,{
    id : '3',
    name : 'Nights',
    address : 'songs/song2.mp3',
    eng : `` , 
    mand : ``
}];

selectRandomSongs = () => {
    min = Math.ceil(0);
    max = Math.floor(songs.length -1);
    return songs[Math.floor(Math.random() * (max - min + 1)) + min]; 
}

console.log(selectRandomSongs());