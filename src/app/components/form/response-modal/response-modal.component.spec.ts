import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResponseModalComponent } from './response-modal.component';
import { MostUsedWords } from '../../../shared/injectables/mostUsedWords';

describe('HeaderComponent', () => {

    // Could not get it work 
    it('should test the table ', (done) => {

        TestBed.configureTestingModule({ declarations: [ResponseModalComponent], imports: [MostUsedWords] });
        const fixture = TestBed.createComponent(ResponseModalComponent);
        const component = fixture.componentInstance;
        console.log(fixture)
        fixture.whenStable().then(() => {
            // fixture.detectChanges();

            let tableRows = fixture.nativeElement.querySelectorAll('tr');
            expect(tableRows.length).toBe(3);

            // Header row
            let headerRow = tableRows[0];
            expect(headerRow.cells[0].innerHTML).toBe('No.');
            expect(headerRow.cells[1].innerHTML).toBe('Word');
            expect(headerRow.cells[2].innerHTML).toBe('Repeated');

            done();
        });
    });

});
