/**
 * Created by ajit on 9/17/2016.
 */
import {Component} from "@angular/core";
import {SimpleService} from "./services/simpleservice";
@Component({
    selector: 'skp-img',
    template: `
<img src="https://i.ytimg.com/vi/VCs0hkL52WY/maxresdefault.jpg" alt="Subject #1: Dank Memes: Class B">
<div>{{simpleService.message}}</div>
`
})

export class SkinnyPComponent {
    //dad
    constructor(private simpleService:SimpleService){}
};