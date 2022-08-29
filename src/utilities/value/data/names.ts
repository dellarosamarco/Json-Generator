export const getName = () : string => {
    return names[Math.floor(Math.random() * names.length)]
}

const names = [
    "Adam",
    "Jhon",
    "Bob",
    "Martin"
]