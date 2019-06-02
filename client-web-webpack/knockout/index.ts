import * as knockout from "knockout";

import { AppViewModel } from "./components/app";

// Create the element we will mount to
let app = document.createElement('div');
app.setAttribute("data-bind", "component:{ name: 'app'}");
document.body.appendChild(app);

var appViewModel = new AppViewModel({});
knockout.applyBindings(appViewModel, app);