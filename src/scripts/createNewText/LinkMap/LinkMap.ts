import Pair from './Pair';
import Counter from './Counter';

type RelatedLinks = {
    value: string;
    probability: number;
}[];

class LinkMap {
    counter: Counter;
    pair: Pair;

    constructor() {
        this.counter = new Counter();
        this.pair = new Pair();
    }

    public set(prevLink: string, link: string): void {
        this.counter.set(link);
        this.pair.set(prevLink, link);
    }

    public get(link: string): RelatedLinks {
        const relatedLinks = this.pair.get(link);
        const sumRelatedLinks: number = relatedLinks
            .reduce((acc, relatedLink) => acc + this.counter.get(relatedLink), 0);

        return relatedLinks
            .map(relatedLink => {
                return {
                    value: relatedLink,
                    probability: this.counter.get(relatedLink) / sumRelatedLinks
                }
            })
    }

    public getRandomLink(): string {
        const links = Object.keys(this.pair.map);
        return links[Math.floor(Math.random() * links.length)];
    }

    public getRandomLinkFomReleatedLinks(link: string): string {
        const threshold = Math.random();
        const relatedLinks = this
            .get(link)
            .sort((linkA, linkB) => linkA.probability - linkB.probability);

        for (let link of relatedLinks) {
            if (link.probability > threshold) { 
                return link.value;
            }
        }

        return relatedLinks[relatedLinks.length - 1].value;
    }
}

export default LinkMap;
