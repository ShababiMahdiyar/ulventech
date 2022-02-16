import { MostUsedWords } from './mostUsedWords';

describe('MostUsedWord', () => {

    let service: MostUsedWords;
    beforeEach(() => { service = new MostUsedWords(); });

    describe('Word Counter', () => {
        it('should return the highest repeated word count', () => {
            expect(service.paragraphProcessor("Test ulventech test right.")[0].count).toEqual(2);
        });

        it('should return an array of length of 2', () => {
            expect(service.paragraphProcessor("Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above.").length).toEqual(10)
        });

        it('should return an the expected object', () => {
            expect(service.paragraphProcessor("Lorem Lorem LOREM LOREM lOrEm")).toEqual([{word: "LOREM", count: 5}]);
        });

        
    });

});
