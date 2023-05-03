import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddressFormRoutingModule } from "./address-form-routing.module";

@NgModule({
    imports: [
        CommonModule,
        AddressFormRoutingModule
    ],
    exports: []
})
export class AddressModule {}