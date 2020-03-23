import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'display-qc',
    loadChildren: () => import('./display-qc/display-qc.module').then( m => m.DisplayQcPageModule)
  },
  {
    path: 'controle-qualite',
    loadChildren: () => import('./create/controle-qualite/controle-qualite.module').then( m => m.ControleQualitePageModule)
  },
  {
    path: 'gerer-controle-qualite',
    loadChildren: () => import('./gerer/controle-qualite/controle-qualite.module').then( m => m.ControleQualitePageModule)
  },
  {
    path: 'templates',
    loadChildren: () => import('./gerer/templates/templates.module').then( m => m.TemplatesPageModule)
  },
  {
    path: 'controle-selected',
    loadChildren: () => import('./create/controle-selected/controle-selected.module').then( m => m.ControleSelectedPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
