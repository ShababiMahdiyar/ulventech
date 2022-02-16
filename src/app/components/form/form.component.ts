import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ResponseModalComponent } from './response-modal/response-modal.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  validateForm: FormGroup;
  isVisible = false;
  isConfirmLoading = false;

  constructor(private fb: FormBuilder, private modalService: NzModalService, private http: HttpClient,
  ) {
    this.validateForm = this.fb.group({
      name: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      comment: [null, [Validators.maxLength(150)]]
    });
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(key)) {
        this.validateForm.controls[key].markAsPristine();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls['confirm'].updateValueAndValidity());
  }

  userNameAsyncValidator = (control: FormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        // An example of not qualified input
        if (control.value === 'Mahdiyar') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  showModal(): void {
    this.modalService.create({
      nzClosable: false,
      nzTitle: 'Hello ' + '<b>' + this.validateForm.value.name + '</b>',
      nzContent: ResponseModalComponent,
      nzComponentParams: {
        data: this.validateForm.value
      }
    });
  }



  handleCancel(): void {
    this.isVisible = false;
  }


}
