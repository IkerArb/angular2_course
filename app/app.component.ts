import { Component } from '@angular/core';

import { HeaderComponent } from "./common/header.component";

@Component({
    selector: 'my-awesome-tag',
    template: `
    <app-header></app-header>
    <h1>Hello!</h1>
    <div></div>`,
    directives : [HeaderComponent]
})
export class AppComponent { }
