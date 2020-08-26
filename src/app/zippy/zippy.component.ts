import { Component, OnInit, Input } from '@angular/core';
import { useAnimation } from '@angular/animations';
import { expandCollapse } from './zippy.component.animations';


@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.scss'],
  animations: [expandCollapse]
})
export class ZippyComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('title') title: string;
  isExpanded: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
