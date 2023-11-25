import { Component } from '@angular/core';
import { AppService } from '../services/app.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-kansas',
  templateUrl: './kansas.component.html',
  styleUrls: ['./kansas.component.css']
})
export class KansasComponent {
  chart: any = []
  elements: any;
  constructor(private service: AppService){
    
  }
  ngOnInit(){
    this.service.WeatherInformation("https://api.weather.gov/gridpoints/TOP/31,80/forecast").subscribe(response=>{
      console.log("clicked",response);

      this.elements= response;
      let labels = [];
      let temperature = [];
      for(let i = 0; i < this.elements["properties"]["periods"].length; i++){
        labels.push(this.elements["properties"]["periods"][i]["name"] );
        temperature.push(this.elements["properties"]["periods"][i]["temperature"]);
      }
      


      this.chart = new Chart('ColumbiaChart', {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Temperature',
              data: temperature,
              fill:false,
              borderWidth: 1,
              
            },
          ],
        },
        options: {
          animations: {
            tension: {
              duration: 1500,
              easing: 'linear',
              from: 0.5,
              to: 0,
              loop: true
            }
          },          
          scales: {
            y: {
              beginAtZero: true,
            },
          }
        },
      });
    })
  }

}
