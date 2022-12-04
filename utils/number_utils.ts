export default class NumberUtils {
    static format(num: number, formatter: Intl.NumberFormat = Intl.NumberFormat('en', {notation: 'compact'})) {
        return formatter.format(num)
    }
}