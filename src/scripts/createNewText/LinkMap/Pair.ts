type PairMap = {
    [key: string]: string[];
}

class Pair {
    private pairMap: PairMap = {};

    public set(prevlink: string, link: string): void {
        const { pairMap } = this;
        
        if (pairMap[prevlink]) {
            pairMap[prevlink].push(link);
            return;
        }

        pairMap[prevlink] = [link];
    }

    public get(link: string): string[] {
        const { pairMap } = this;

        return pairMap[link] || ['.'];
    }

    public get map() {
        return this.pairMap;
    }
}

export default Pair;
