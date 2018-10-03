import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  cols: string;
  rowHeight: string;


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.initBreakPoint();
  }

  initBreakPoint() {
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.cols = '1';
        this.rowHeight = '520px';
      }
    });

    this.breakpointObserver.observe([Breakpoints.Small]).subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.cols = '2';
          this.rowHeight = '500px';
        }
    });

    this.breakpointObserver.observe([Breakpoints.Medium]).subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.cols = '3';
          this.rowHeight = '550px';
        }
    });
    this.breakpointObserver.observe([Breakpoints.Large]).subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.cols = '3';
          this.rowHeight = '500px';
        }
    });

  }

}
