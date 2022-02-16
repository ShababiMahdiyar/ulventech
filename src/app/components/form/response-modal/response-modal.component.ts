import { Component, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { map, Observable, tap } from 'rxjs';
import { Restaurant } from 'src/app/interfaces/resturant';
import { HttpClient } from '@angular/common/http';
import { MostUsedWords } from '../../../shared/injectables/mostUsedWords';
import { Word } from 'src/app/interfaces/word';


@Component({
  selector: 'app-response-modal',
  templateUrl: './response-modal.component.html',
  styleUrls: ['./response-modal.component.scss']
})

export class ResponseModalComponent {

  @Input() data!: Object;
  restaurant$: Observable<Word[]>;
  top10: Word[] = [];
  response: {status: boolean, message: string} = {status: true, message: ""};
  paragraph: string = "";

  constructor(private modal: NzModalRef, private http: HttpClient, mUsedW: MostUsedWords) {
    this.restaurant$ = this.http.get<Restaurant>('https://random-data-api.com/api/restaurant/random_restaurant').pipe(
      tap({
        error: error => {
          this.response.status = false;
          this.response.message = error.message;
        }
      }),
      map(
        res => {
          this.paragraph = res.description;
          this.top10 = mUsedW.paragraphProcessor(res.description);
          return this.top10;
        }
      )
    );
  }

  handleCancel(): void {
    this.modal.destroy();
  }
  
  destroyModal(): void {
    window.location.reload();
  }

}
