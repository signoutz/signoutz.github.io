import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class="header">header</div>
  `,
  styles: ['.header {background-color: red;text-align: center;color: #fff;font-size: 4em; } ']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
