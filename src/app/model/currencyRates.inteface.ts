export interface CurrencyRates {
    base: string,
    date: number,
    rates: {
        [key: string]: number;
    }

}