import { render } from './render.js';
import TripFiltersView from './view/trip-filters-view.js';

const siteHeaderElement = document.querySelector('.page-header');
const siteFiltersElement = siteHeaderElement.querySelector('.trip-controls__filters');

render(new TripFiltersView(), siteFiltersElement);
