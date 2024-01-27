import { Component, OnInit,Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {


  @Input() forName:string;
  @Input() idname:string;
  @Input() lable:string;
  @Input() control:FormControl

  constructor() { }

  ngOnInit(): void {
  }

}
