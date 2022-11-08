import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'settings',
    loadChildren: () => import('./englishpages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'detect',
    loadChildren: () => import('./englishpages/detect/detect.module').then( m => m.DetectPageModule)
  },
  {
    path: 'prevent',
    loadChildren: () => import('./englishpages/prevent/prevent.module').then( m => m.PreventPageModule)
  },
  {
    path: 'crops',
    loadChildren: () => import('./englishpages/crops/crops.module').then( m => m.CropsPageModule)
  },
  {
    path: 'varieties',
    loadChildren: () => import('./englishpages/varieties/varieties.module').then( m => m.VarietiesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
