import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    exports: []
})
export class DashboardModule {}