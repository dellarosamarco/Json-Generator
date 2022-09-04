export interface ChoiceOptions{
    choices: string[];
}

export const getChoice = (options : ChoiceOptions) : string => {
    if(options.choices === undefined || options.choices.length < 1) return "";
    return options.choices[Math.floor(Math.random() * options.choices.length)];
}