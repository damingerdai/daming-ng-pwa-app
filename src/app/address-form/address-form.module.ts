import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddressFormRoutingModule } from "./address-form-routing.module";
import { AddressFormComponent } from "./address-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCardModule,
        ReactiveFormsModule,
        AddressFormRoutingModule
    ],
    declarations: [
        AddressFormComponent
    ],
    exports: []
})
export class AddressModule { }