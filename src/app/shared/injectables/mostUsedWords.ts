import { Injectable } from "@angular/core";
import { Word } from 'src/app/interfaces/word';


@Injectable({
    providedIn: 'root'
})
export class MostUsedWords {

    wordsAndNumberOfWords: Word[] = [];

    paragraphProcessor(text_out: string) {
        // REGex to count only words
        let str = text_out.replace(/(^\s*)|(\s*$)/gi, "");
        str = str.replace(".", "");
        str = str.replace("_", "");
        str = str.replace("-", "");
        str = str.replace(/[ ]{2,}/gi, " ");
        str = str.replace(/\n /, "\n");
        str = str.replace(".", "");
        return this.wordCounter(str);
    }


    wordCounter(processedParagraph: string) {
        // Capitalize all the words
        const splittedParagraph = processedParagraph.split(' ').map((value => value.toUpperCase()));

        // Pushing words with their count number 
        splittedParagraph.map((word) => this.wordsAndNumberOfWords.push({ word: word, count: 1 }));

        // Sorting the array    
        this.wordsAndNumberOfWords.sort(function (a, b) {
            if (a.word < b.word) { return -1; }
            if (a.word > b.word) { return 1; }
            return 0;
        });

        // Counting the occurence of each word
        for (let index = 0; index < this.wordsAndNumberOfWords.length - 1; index++) {
            if (this.wordsAndNumberOfWords[index].word == this.wordsAndNumberOfWords[index + 1].word) {
                this.wordsAndNumberOfWords[index].count++;
                this.wordsAndNumberOfWords.splice(index + 1, 1);
                index--;
            }
        }

        // Sorting the array based on the objects' count number
        this.wordsAndNumberOfWords.sort((a, b) => (a.count > b.count) ? -1 : 1);

        // Removing unwanted objects (Top 10 Only)
        this.wordsAndNumberOfWords.splice(10, this.wordsAndNumberOfWords.length)

        return this.wordsAndNumberOfWords
    }

}