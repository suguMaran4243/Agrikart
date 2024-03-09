import {CanDeactivate} from "@angular/router";
import { ContactComponent } from "../../contact.component";

export class CanDeactivateServices implements CanDeactivate<ContactComponent>
{
 canDeactivate(component:ContactComponent)
 {
    console.log("HI")
     alert('You are not allowed to move away')
     return  component.canExit();
 }
}
