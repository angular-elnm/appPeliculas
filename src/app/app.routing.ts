import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'search/:texto', component: SearchComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true } )],
    exports: [RouterModule]
})
export class AppRoutingModule {}
