import { Component } from '@angular/core';
import { PropertyBindingComponent } from './property-binding.component';
import { EventBindingComponent } from './event-binding.component';

@Component({
  moduleId: module.id,
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css'],
  directives: [PropertyBindingComponent, EventBindingComponent]
})
export class DatabindingComponent{
  stringInterpolation: string = 'This is a string interpolation.';
  numberInterpolation: number = 2;

  onTest(){
    return true;
  }
}
