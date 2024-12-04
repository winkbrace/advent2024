export function sortNumbersAsc(a: number, b: number): number {
    return a - b;
}

export function sortNumbersDesc(a: number, b: number): number {
    return b - a;
}

export class debug {
    private static shouldLog: boolean = true;

    public static enableLogging(): void {
        debug.shouldLog = true;
    }

    public static disableLogging(): void {
        debug.shouldLog = false;
    }

    public static log(...messages: any[]): void {
        debug.shouldLog && console.log(...messages);
    }
}
