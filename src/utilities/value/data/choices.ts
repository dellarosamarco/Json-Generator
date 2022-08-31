export interface ChoiceOptions{
    choices: string[];
}

export const getChoice = (options : ChoiceOptions) : string => {
    return options.choices[Math.floor(Math.random() * options.choices.length)];
}