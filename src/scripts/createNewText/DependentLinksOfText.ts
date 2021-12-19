class DependentLinksOfText {
    splitText: string[];

    constructor(text: string) {
        this.splitText = text
            .trim()
            .split(/[,.?! \n:]/)
            .filter(link => link != '');
    }

    [Symbol.iterator](): any {
        let index = 0;
        
        return {
            next: () => {
                index += 1;

                if (index >= this.splitText.length) {
                    return { done: true };
                }

                return {
                    value: [
                        this.splitText[index - 1].toLowerCase(),
                        this.splitText[index].toLowerCase()
                    ],
                    done: false
                }
            }
        }
    }
}

export default DependentLinksOfText;
