import {NgModule} from "@angular/core";
import {SimpleService} from "./simpleservice";

@NgModule({})
export class ServicesModule{
    //dad
    static forRoot(){
        return {
            ngModule: ServicesModule,
            providers: [SimpleService]
        }
    }
}

//export all imports so u can use service module and refactor things in simple service
export {
    SimpleService
}