import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WorkPlaceComponent } from './game-window/work-place/work-place.component';
import { PicSelectorComponent } from './game-window/pic-selector/pic-selector.component';
import { GameWindowComponent } from './game-window/game-window.component';

const routes: Routes = [
    {
        path: 'gameWindow', component: GameWindowComponent, children: [
            { path: 'pic', component: PicSelectorComponent, outlet: 'picSelect' },
            { path: ':id', component: WorkPlaceComponent, outlet: 'workPlace' }
        ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
