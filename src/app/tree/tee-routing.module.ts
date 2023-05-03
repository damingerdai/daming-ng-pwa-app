import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TreeComponent } from './tree.component';

const routes = [
    {
        path: '',
        component: TreeComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TreeRoutingModule {}