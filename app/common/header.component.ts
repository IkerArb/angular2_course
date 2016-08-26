import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: `<header>
    <nav>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">News</a></li>
      </ul>
    </nav>
  </header>`
})
export class HeaderComponent{
  constructor(){

  }
}
