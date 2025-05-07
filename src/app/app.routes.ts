import { Routes } from '@angular/router';
import { PlaylistPageComponent } from './features/sequencelab/pages/playlist-page/playlist-page.component';
import { WapsPageComponent } from './features/sequencelab/pages/waps-page/waps-page.component';

export const routes: Routes = [
  {
    path: 'playlist', component: PlaylistPageComponent
  },
  {
    path: 'wapp' , component: WapsPageComponent
  },
  {
    path: '', redirectTo: 'playlist', pathMatch: 'full'
  },
];