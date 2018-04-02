import { Injectable, TemplateRef, ContentChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { Subject } from 'rxjs';


@Injectable()
export class ModalService {

  public modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) { }

  openConfirmDialog() :Subject<boolean>{
    this.modalRef = this.modalService.show(ConfirmModalComponent);
    return this.modalRef.content.onClose;
 }

}
