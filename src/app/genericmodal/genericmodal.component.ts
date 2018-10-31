import { Component, Input, OnInit , ViewEncapsulation} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './genericmodal.component.html',
  styleUrls: ['./genericmodal.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None,
})
export class GenericmodalComponent implements OnInit {
  @Input() title = `Generic modal`;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {

  }
}
