import * as ko from 'knockout';

import { AppViewModel } from './app.viewModel';
import html from "./app.html";

import { Utils } from '../../ko-register-utils';

let controlName = 'app';

// register the knockout component
Utils.registerKOComponent(ko, controlName, html, AppViewModel);

export { AppViewModel };