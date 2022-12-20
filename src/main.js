import { render } from './render.js';
import TripFiltersView from './view/trip-filters-view.js';
import NewEventButtonView from './view/new-event-button-view.js';

const siteFiltersElement = document.querySelector('.trip-controls__filters');
const siteTripMainElement = document.querySelector('.trip-main');


render(new TripFiltersView(), siteFiltersElement);
render(new NewEventButtonView(), siteTripMainElement);
