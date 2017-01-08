import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjjoIyb_67RAhVLr1QKHVHuBXoQjRwIBw&url=https%3A%2F%2Fwww.tes.com%2Flessons%2Fn6GZTEAew42yzA%2Fdummy&psig=AFQjCNE9po_iBmYGD00ZpR62HHjEhPZtIw&ust=1483842768365274')
  constructor() { }

  ngOnInit() {
  }

}
