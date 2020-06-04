import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fsc-button',
  templateUrl: './fsc-button.component.html',
  styleUrls: ['./fsc-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FSCButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
