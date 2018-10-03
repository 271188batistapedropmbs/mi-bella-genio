import { Component, OnInit, OnDestroy } from '@angular/core';
import {HoroscopoService} from '../services/horoscopo.service';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})


export class HoroscopoComponent implements OnInit, OnDestroy {

  horoscopos: any;
  cols = '4';
  fecha: any;
  loading = false;
  constructor(private _servhorosc: HoroscopoService, private breakpointObserver: BreakpointObserver ) { }

  ngOnInit() {
    this.initBreakPoint();
    this.getHoroscopo();

  }

  /* layout responsive a distinto dispositivos */
  initBreakPoint() {
      this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.cols = '1';
        }
      });

      this.breakpointObserver.observe([Breakpoints.Small]).subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.cols = '2';
          }
      });

      this.breakpointObserver.observe([Breakpoints.Medium]).subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.cols = '3';
          }
      });
      this.breakpointObserver.observe([Breakpoints.Large]).subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.cols = '4';
          }
      });
  }

  getHoroscopo(): void {
    this.loading = true;
      this._servhorosc.getHoroscopo().subscribe(( data ) => {
      this.horoscopos = Object.values(data['horoscopo']);
      this.fecha = data['titulo'];
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.getHoroscopo();
  }
}
