type CounterMap = {
    [key: string]: number
}

class Counter {
    private counterMap: CounterMap = {};

    public set(link: string): void {
        const { counterMap } = this;
        counterMap[link] = counterMap[link] ? counterMap[link] + 1 : 1;
    }

    public get(link: string): number {
        const { counterMap } = this;
        return counterMap[link] || 1;
    }
}

export default Counter;
