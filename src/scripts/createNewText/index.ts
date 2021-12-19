import { createNewSuggestion } from './utils/textUtils';
import LinkMap from './LinkMap';
import DependentLinksOfText from './DependentLinksOfText';

const createNewText = (
    srcText: string,
    countSuggestion: number = 1,
    maxWordCount: number = 1
): string => {
    const dependentLinksOfText = new DependentLinksOfText(srcText);
    const linkMap = new LinkMap();
    let newText = '';

    for (let [prevLink, currentLink] of dependentLinksOfText) {
        linkMap.set(prevLink, currentLink);
    }

    for (let i = 1; i <= countSuggestion; i += 1) {
        newText += `${createNewSuggestion(linkMap, maxWordCount)} `;
    }

    return newText;
};

export default createNewText;
