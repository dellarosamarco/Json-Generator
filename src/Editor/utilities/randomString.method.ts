const chars = [
    'a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z','x','y','w','j','k'
]

export function randomString(length=64){
    let string = "";
    
    for(let n=0;n<length;n++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }

    return string;
}