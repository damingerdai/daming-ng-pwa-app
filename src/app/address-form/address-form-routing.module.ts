import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddressFormComponent } from './address-form.component';

const routes = [
    {
        path: '',
        // pathMatch: 'full',
        component: AddressFormComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddressFormRoutingModule {}