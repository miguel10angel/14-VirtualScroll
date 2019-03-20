import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;
  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  irfinal() {
    this.viewPort.scrollToIndex( this.personas.length );
  }

  irMitad() {
    this.viewPort.scrollToIndex( this.personas.length / 2 );
  }

  irInicio() {
    this.viewPort.scrollToIndex( 0 );
  }

}
