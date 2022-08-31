export interface DateOptions{
    min?: string;
    max?: string;
}

export const getDate = (options : DateOptions) : string => {
    const start = options.min !== undefined ? new Date(options.min!) : new Date();
    const end = options.max !== undefined ? new Date(options.max!) : new Date();

    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
}