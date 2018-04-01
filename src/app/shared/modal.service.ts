import { Injectable, TemplateRef, ContentChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';


@Injectable()
export class ModalService {

  public modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  openConfirmDialog() :any{
    this.modalRef = this.modalService.show(ConfirmModalComponent);
    this.modalRef.content.onClose.subscribe(result => {
      console.log('results', result);
      return result;
    })
  }


}
