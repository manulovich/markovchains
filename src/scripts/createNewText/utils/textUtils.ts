import LinkMap from '../LinkMap';

const ucFirst = (str: string): string => {
    return str[0].toUpperCase() + str.slice(1);
}

const createNewSuggestion = (
    linkMap: LinkMap,
    maxWordCount: number = 1
): string => {
    let prevWord = linkMap.getRandomLink();
    let suggestion = ucFirst(prevWord);

    if (maxWordCount < 1) {
        return '';
    }

    for (let i = 2; i <= maxWordCount; i += 1) {
        const currentWord = linkMap.getRandomLinkFomReleatedLinks(prevWord);

        if (currentWord === '.' || i === maxWordCount) {
            suggestion += '.';
            break;
        }

        suggestion += ` ${linkMap.getRandomLinkFomReleatedLinks(prevWord)}`;
        prevWord = currentWord;
    };

    return suggestion.slice(0);
};

export {
    ucFirst,
    createNewSuggestion
}
