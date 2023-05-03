import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
    ],
    exports: []
})
export class DashboardModule {}