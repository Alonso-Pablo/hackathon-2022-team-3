export function truncate(string: string, number: number) {
    return string?.length > number
        ? string.substr(0, number - 1) + ' ...'
        : string
}
