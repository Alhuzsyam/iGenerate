import { Component, OnInit } from '@angular/core';
import {ElementRef, ViewChild } from '@angular/core';
import { Promt } from '../models/promt';
import { GenerateserviceService } from '../service/generateservice.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})

export class GenerateComponent implements OnInit {
  command = new Promt;
  imageUrl: any | null = null;
  @ViewChild('myInput') myInput!: ElementRef<HTMLInputElement> | null;
  items = ['Realistic painting of a dystopian industrial city with towering factories, pollution-filled air, and a gloomy sky.', 'Victorian-era painting of a masquerade ball with elaborate costumes, contrasting colors, and soft lighting.', 'Whimsical painting of an enchanted forest with mythical creatures, vibrant colors, and intricate details.', 'Cityscape painting during a rainy day, focusing on reflections in puddles with a mix of soft and harsh brush strokes.', 'Surreal painting of a child dreaming about floating among stars, using soft, dreamy colors and elements of fantasy.','Arctic landscape painting with glaciers, polar bears, and the Northern Lights, using different shades of blue and green.','Steampunk-inspired painting representing the human mind as a complex mechanism, with intricate details and metallic colors.'];
  ngOnInit(): void {
  }
  constructor(private generateService:GenerateserviceService){
    this.myInput = null;
  }
  supriseMe():any{
    if (this.myInput) {
      this.myInput.nativeElement.value = this.items[Math.floor(Math.random()*this.items.length)];;
      this.myInput.nativeElement.dispatchEvent(new Event('input'));
    }
  }
  generate(): void {
    if(this.command.prompt == undefined){
      alert("Command can't be null");
    }
    else{
      this.generateService.postImage(this.command).subscribe(
        response=>{
           console.log('Image URL:', response);
           this.imageUrl = response;
        },
        error => {
          console.error('Error calling image service:', error);
        }
      );
      console.log(this.command);
    }
  }
}

