import {Routes} from "@angular/router";
import {LoggedInComponent} from "./components/logged-in/logged-in.component";

export const ROUTES: Routes = [
    { path: '',      component: LoggedInComponent },
    { path: 'home',  component: LoggedInComponent },
]