import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fsc-textbox',
  templateUrl: './fsc-textbox.component.html',
  styleUrls: ['./fsc-textbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FSCTextboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
