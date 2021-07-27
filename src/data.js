import {v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        
        {
            name: "Green Tea",
            cover: "https://i.scdn.co/image/ab67616d0000b27339dcd686eba5179dd5a9f506",
            artist: "Eli Way",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7944",
            color:          ["#FAD6BE","#FCE7E6"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Daydream",
            cover: "https://i.scdn.co/image/e679a351b106693e32cdd9acd0abd3976110fbba",
            artist: "Eli way",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=7856",
            color: ["#018987","#A36F59"],
            id: uuidv4(),
            active: false
        },
    ]
}
export default chillHop;