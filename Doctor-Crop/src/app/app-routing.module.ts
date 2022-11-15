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
    path: 'shome',
    loadChildren: () => import('./shome/shome.module').then( m => m.ShomePageModule)
  },
  {
    path: 'sdetect',
    loadChildren: () => import('./sinhalapages/sdetect/sdetect.module').then( m => m.SdetectPageModule)
  },
  {
    path: 'sprevent',
    loadChildren: () => import('./sinhalapages/sprevent/sprevent.module').then( m => m.SpreventPageModule)
  },
  {
    path: 'ssettings',
    loadChildren: () => import('./sinhalapages/ssettings/ssettings.module').then( m => m.SsettingsPageModule)
  },
  {
    path: 'thome',
    loadChildren: () => import('./thome/thome.module').then( m => m.ThomePageModule)
  },  {
    path: 'tdetect',
    loadChildren: () => import('./tamilpages/tdetect/tdetect.module').then( m => m.TdetectPageModule)
  },
  {
    path: 'tprevent',
    loadChildren: () => import('./tamilpages/tprevent/tprevent.module').then( m => m.TpreventPageModule)
  },
  {
    path: 'tsettings',
    loadChildren: () => import('./tamilpages/tsettings/tsettings.module').then( m => m.TsettingsPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
