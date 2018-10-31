import { Component, OnInit, ViewEncapsulation , ElementRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  closeResult: String;
  isDisabled: Boolean = true;
  public DivId: any = null;
  public fieldArray: Array<any> = [];
  private newAttribute: any = {};

  constructor(private modalService: NgbModal, public elementRef: ElementRef) { }

  ngOnInit() {
  }
  vertical(content) {
    this.modalService.open(content, { centered: true});
  }
  openLg(content) {
    this.modalService.open(content, {size: 'lg'});
    // const modalRef = this.modalService.open(ModalAboutComponent,{size:'lg'});
    // modalRef.componentInstance.title = 'About';
  }
  addFieldValue() {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }
  toggleDisable(event) {
    console.log(event);
    console.log(event.target.id);
    const target = event.target || event.srcElement || event.currentTarget;
    const idAttr = target.attributes.id;
    const value = idAttr.nodeValue;
    if ( value ) {
        this.isDisabled =  !this.isDisabled;
    }
   console.log(value);
    // if($("."+value).attr('disabled'))
    // {
    //   $("."+value).removeAttr('disabled');
    // }
    // else
    // {
    //   $("."+value).attr('disabled');
    // }
    this.DivId = value;
   // this.isDisabled = !this.isDisabled;
   }
   addLocation(event) {
    console.log(event);
    const title = event.target.attributes.title.nodeValue;
    const modalRef = this.modalService.open(CreateComponent, {size: 'xl'});
    console.log(modalRef);
    modalRef.componentInstance.title = title;
   }
}
