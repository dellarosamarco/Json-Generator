export const getLastName = () : string => {
    return lastNames[Math.floor(Math.random() * lastNames.length)]
}

const lastNames = [
    "POOPY",
    "POP POP",
    "BABABOI",
    "BUBBA"
]