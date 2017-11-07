import { Component, ElementRef } from '@angular/core';
import { TempService } from './temp.service';
import {Temp} from "./Temp";
import {Observable} from "rxjs/Observable";


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Teploty kotle';

  temps: Temp[];

  public dataset: any;
  public options: any;

  private plotArea: any;

  constructor(private el: ElementRef, private tempService: TempService) {
    this.dataset = [{label: "line1", data: [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370]]}];

    this.options = {
      series: {
        lines: { show: true },
        points: {
          radius: 3,
          show: true
        }
      }
    };
  }

  ngOnInit(): void {
    this.plotArea = $(this.el.nativeElement).find('div').empty();

    this.tempService.getAll().then(temps => {
      this.temps = temps;
      let data1 = this.getSpotrebaArray();
      let data2 = this.getTepVenArray();
      let data3 = this.getTepUvnArray();
      this.dataset = [{label: "Spotreba", data: data1}, {label: "Teplota Venku", data: data2}, {label: "Teplota Uvnitr", data: data3}];
      this.options = {
        series: {
          lines: {show: true},
          points: {
            radius: 3,
            show: true
          }
        },
        xaxis: {
          mode: "time",
          timeformat: "%d.%m.%y",
          minTickSize: [1, "day"]
        },
      }

      $.plot(this.plotArea, this.dataset, this.options);
    });
  };

  getSpotrebaArray() : any[] {
    let values = [];
    this.temps.forEach(temp => {
      console.log(new Date(temp.datum));
      values.push([new Date(temp.datum), temp.den_spotreba]);
    });
    return values;
  }

  getTepVenArray() : any[] {
    let values = [];
    this.temps.forEach(temp => {
      console.log(new Date(temp.datum));
      values.push([new Date(temp.datum), temp.p_tep_ven]);
    });
    return values;
  }

  getTepUvnArray() : any[] {
    let values = [];
    this.temps.forEach(temp => {
      console.log(new Date(temp.datum));
      values.push([new Date(temp.datum), temp.p_tep_uvnitr]);
    });
    return values;
  }


}
