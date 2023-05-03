import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TreeRoutingModule } from "./tee-routing.module";
import { TreeComponent } from "./tree.component";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatTreeModule,
        MatIconModule,
        TreeRoutingModule
    ],
    declarations: [
        TreeComponent,
    ],
    exports: []
})
export class TreeModule {}