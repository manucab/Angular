import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core'
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    //declarations nos indica que componenetes, pips, ... tiene este módulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //Que cosas quiero que sean visibles fuera del módyulo
    exports: [
        ListadoComponent
    ],
    //En imports van todos los módulos que necesitamos
    imports: [
        //Módulo necesario siempre que queramos trabajar con directivas ngFor,ngIf,...
        CommonModule
    ]
})

export class HeroesModule {}