const Trip = 
`
<section class="c-trip__header">
<img data-block="widget-img" class="c-trip__image" src="http://localhost:3000/images/placehoder-img.svg" alt="trip image">

<div class="c-trip__title">
<div data-block="capsule" class="c-capsule c-trip__heading">
<h2 data-block="capsule-view" data-input-name="trip_title" tabindex="0" data-input-label="Trip title" data-placeholder="Trip title" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></h2>
</div>
</div>
<div class="c-trip__info">
<div class="c-trip__location">
<span class="c-inline-icon">
<svg data-name="map-pin" xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="#333">
<path d="M6,0C2.6,0,0,3.019,0,6.541a10.53,10.53,0,0,0,3,6.642A19.961,19.961,0,0,0,6,16a19.961,19.961,0,0,0,3-2.818c1.4-1.61,3-4.025,3-6.642C12,3.019,9.3,0,6,0ZM6,9.057A2.294,2.294,0,0,1,4,6.541,2.294,2.294,0,0,1,6,4.025,2.294,2.294,0,0,1,8,6.541,2.294,2.294,0,0,1,6,9.057Z" />
</svg>
</span>
<span data-block="capsule" class="c-capsule">
<p data-block="capsule-view" data-input-name="location" tabindex="0" data-input-label="Trip location" data-placeholder="Trip location" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></p>
<div data-block="error" class="c-error h-hidden">
<p data-block="error-message" class="c-error__message">

</p>
</div>
</span>
</div>

<div data-block="date-range" class="c-date">
<div class="c-date__dates">
<span class="c-inline-icon">
<svg data-name="cal-icon-lg" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="#333">
<path d="M3,4A.945.945,0,0,0,2,5v6a.945.945,0,0,0,1,1H13a.945.945,0,0,0,1-1V5a.945.945,0,0,0-1-1H3M3,1H13a2.946,2.946,0,0,1,3,3v7a2.946,2.946,0,0,1-3,3H3a2.946,2.946,0,0,1-3-3V4A2.946,2.946,0,0,1,3,1ZM4,0H6V2H4Zm.5.5h1v1h-1ZM10,0h2V2H10Zm.5.5h1v1h-1ZM5,5H6A.945.945,0,0,1,7,6V7A.945.945,0,0,1,6,8H5A.945.945,0,0,1,4,7V6A.945.945,0,0,1,5,5Zm0,.5H6a.472.472,0,0,1,.5.5V7a.472.472,0,0,1-.5.5H5A.472.472,0,0,1,4.5,7V6A.472.472,0,0,1,5,5.5Z" />
</svg>
</span>
<span data-block="capsule" class="c-date__start c-capsule">
<time data-block="capsule-view" data-input-name="start_date" tabindex="0" data-input-label="Trip start date" data-placeholder="Start date" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></time>
</span>
<span>&#8212</span>
<span data-block="capsule" class="c-date__end c-capsule">
<time data-block="capsule-view" data-input-name="end_date" tabindex="0" data-input-label="Trip end date" data-placeholder="End date" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></time>
</span>
</div>
<div class="c-date__days-info h-hidden">
<time data-block="days-long" class="c-date__days"></time>
<time data-block="days-away" class="c-date__days"></time>
</div>
</div>
</div>
<div class="c-trip__controls">
<div data-block="controls" class="c-controls c-controls--modal@mobile">
<div data-block="controls-box" class="c-controls__box">
<ul class="c-controls__list">
<li class="c-controls__item">
<button data-controls="toggle" class="c-controls__btn c-controls__btn--round">
<span class="c-controls__icon">
<svg data-name="ec-ico" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="#333">
<path d="M.3,7.7h0a.967.967,0,0,1,0-1.4l6-6A.967.967,0,0,1,7.7.3l6,6a.967.967,0,0,1,0,1.4h0a.967.967,0,0,1-1.4,0L7.7,3.2a.967.967,0,0,0-1.4,0L1.7,7.7A.967.967,0,0,1,.3,7.7Z" />
</svg>
</span>
<span class="c-controls__text">
Toggle
</span>
</button>
</li>
<li class="c-controls__item">
<button data-controls="delete" class="c-controls__btn">
<span class="c-controls__icon">
<svg data-name="btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="#333">
<path d="M19,4H15V3a2.946,2.946,0,0,0-3-3H8A2.946,2.946,0,0,0,5,3V4H1A1,1,0,0,0,1,6H2V19a2.946,2.946,0,0,0,3,3H15a2.946,2.946,0,0,0,3-3V6h1a1,1,0,0,0,0-2ZM7,3A1.075,1.075,0,0,1,8,2h4a1.075,1.075,0,0,1,1,1V4H7Zm9,16a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V6H16Z" />
</svg>
</span>
<span class="c-controls__text">
Delete trip
</span>
</button>
</li>
<li class="c-controls__item">
<button class="c-controls__btn">
<span class="c-btn__icon">
<svg data-name="icon-printer" xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="#333">
<path d="M17,7H16V1a1.075,1.075,0,0,0-1-1H5A1.075,1.075,0,0,0,4,1V7H3a2.946,2.946,0,0,0-3,3v4a2.946,2.946,0,0,0,3,3H4v1a1.075,1.075,0,0,0,1,1H15a1.075,1.075,0,0,0,1-1V17h1a2.946,2.946,0,0,0,3-3V10A2.946,2.946,0,0,0,17,7ZM6,2h8V7H6Zm8,15H6V13h8Zm4-3a1.075,1.075,0,0,1-1,1H16V12a1.075,1.075,0,0,0-1-1H5a1.075,1.075,0,0,0-1,1v3H3a1.075,1.075,0,0,1-1-1V10A1.075,1.075,0,0,1,3,9H17a1.075,1.075,0,0,1,1,1Z" />
</svg>
</span>
<span class="c-controls__text">
Print trip
</span>
</button>
</li>
</ul>
<button data-controls="close" class="c-controls__close">
<span class="c-controls__icon">
<svg data-name="close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="#333">
<path d="M13.7.3a1.088,1.088,0,0,1,0,1.5L8.5,7l5.2,5.2a1.061,1.061,0,0,1-1.5,1.5L7,8.5,1.8,13.7a1.088,1.088,0,0,1-1.5,0,1.087,1.087,0,0,1,0-1.5L5.5,7,.3,1.8A1.087,1.087,0,0,1,.3.3,1.087,1.087,0,0,1,1.8.3L7,5.5,12.2.3A1.087,1.087,0,0,1,13.7.3Z" />
</svg>
</span>
<span class="h-sr-only">
Close
</span>
</button>
</div>
<div data-block="controls-backdrop" class="c-controls__backdrop is-hidden"></div>
<button data-controls="show" class="c-controls__show">
<span class="c-controls__icon">
<svg data-name="options-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4" fill="#333">
<circle cx="2" cy="2" r="2" transform="translate(16)" />
<circle cx="2" cy="2" r="2" transform="translate(8)" />
<circle cx="2" cy="2" r="2" />
</svg>
</span>
<span class="h-sr-only">
Options
</span>
</button>
</div>
</div>
</section>
<div data-control="target" class="c-trip__body">
<div class="c-trip__widgets">
<article data-control="parent" data-widget="weather" class="c-widget h-hidden">
<div class="c-widget__header">
<h3 class="c-widget__heading">Weather</h3>
<div class="c-widget__controls">
<div class="c-controls">
<button data-controls="toggle" class="c-controls__btn c-controls__btn--round c-controls__btn--sm">
<span class="c-controls__icon">
<svg data-name="ec-ico" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="#333">
<path d="M.3,7.7h0a.967.967,0,0,1,0-1.4l6-6A.967.967,0,0,1,7.7.3l6,6a.967.967,0,0,1,0,1.4h0a.967.967,0,0,1-1.4,0L7.7,3.2a.967.967,0,0,0-1.4,0L1.7,7.7A.967.967,0,0,1,.3,7.7Z" />
</svg>
</span>
<span class="c-controls__text">
Toggle
</span>
</button>
</div>
</div>
</div>
<div data-control="target" class="c-widget__body">
<section data-block="current-weather" class="c-current-weather">
<div class="c-current-weather__heading">
<h4 class="c-widget__sub-heading">Weather today</h4>
</div>
<div class="c-current-weather__body">
<img data-block="current-w-icon" class="c-current-weather__icon" src="#" alt="">
<div class="c-current-weather__details">
<span data-block="current-desc" class="c-current-weather__desc"></span>
<div class="c-current-weather__temp">
<span data-block="current-temp"></span><span>&deg;c</span>
</div>
</div>
</div>
</section>
<section data-block="forecast-weather" class="c-forecast-weather">
</section>
</div>
</article>
<article data-control="parent" data-widget="travel_details" class="c-widget">
<div class="c-widget__header">
<h3 class="c-widget__heading">Travel details</h3>
<div class="c-widget__controls">
<div class="c-controls">
<button data-controls="toggle" class="c-controls__btn c-controls__btn--round c-controls__btn--sm">
<span class="c-controls__icon">
<svg data-name="ec-ico" xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="#333">
<path d="M.3,7.7h0a.967.967,0,0,1,0-1.4l6-6A.967.967,0,0,1,7.7.3l6,6a.967.967,0,0,1,0,1.4h0a.967.967,0,0,1-1.4,0L7.7,3.2a.967.967,0,0,0-1.4,0L1.7,7.7A.967.967,0,0,1,.3,7.7Z" />
</svg>
</span>
<span class="c-controls__text">
Toggle
</span>
</button>
</div>
</div>
</div>
<div data-control="target" class="c-widget__body c-travel-details">
<section class="c-travel-details__group">
<h4 class="c-widget__sub-heading">Departure</h4>
<ul class="c-travel-details__list">
<li class="c-travel-details__item">
<span class="c-travel-details__label">Flight:</span>
<span data-block="capsule" class="c-capsule">
<span data-block="capsule-view" data-input-name="dep_flight_num" tabindex="0" data-input-label="flight number" data-placeholder="number" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
</li>
<li class="c-travel-details__item">
<span class="c-travel-details__label">Dep:</span>
<span data-block="capsule" data-input-type="time" class="c-capsule c-date--time c-travel-details__input">
<span data-block="capsule-view" data-input-name="dep_depart_time" tabindex="0" data-input-label="Departure time" data-placeholder="HH:MM" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
<span data-block="capsule" data-input-type="datepicker" class="c-capsule c-date c-travel-details__input">
<span data-block="capsule-view" data-input-name="dep_depart_date" tabindex="0" data-input-label="Depatrure date" data-placeholder="date" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
</li>
<li class="c-travel-details__item">
<span class="c-travel-details__label">Arr:</span>
<span data-block="capsule" data-input-type="time" class="c-capsule c-date--time c-travel-details__input">
<span data-block="capsule-view" data-input-name="dep_arrive_time" tabindex="0" data-input-label="Arrival time" data-placeholder="HH:MM" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
<span data-block="capsule" data-input-type="datepicker" class="c-capsule c-date c-travel-details__input">
<span data-block="capsule-view" data-input-name="dep_arrive_date" tabindex="0" data-input-label="Arrival date" data-placeholder="date" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
</li>
</ul>
</section>
<section class="c-travel-details__group">
<h4 class="c-widget__sub-heading">Return</h4>
<ul class="c-travel-details__list">
<li class="c-travel-details__item">
<span class="c-travel-details__label">Flight:</span>
<span data-block="capsule" class="c-capsule">
<span data-block="capsule-view" data-input-name="ret_flight_num" tabindex="0" data-input-label="flight number" data-placeholder="number" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
</li>
<li class="c-travel-details__item">
<span class="c-travel-details__label">Dep:</span>
<span data-block="capsule" data-input-type="time" class="c-capsule c-date--time c-travel-details__input">
<span data-block="capsule-view" data-input-name="ret_depart_time" tabindex="0" data-input-label="Departure time" data-placeholder="HH:MM" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
<span data-block="capsule" data-input-type="datepicker" class="c-capsule c-date c-travel-details__input">
<span data-block="capsule-view" data-input-name="ret_depart_date" tabindex="0" data-input-label="Depatrure date" data-placeholder="date" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
</li>
<li class="c-travel-details__item">
<span class="c-travel-details__label">Arr:</span>
<span data-block="capsule" data-input-type="time" class="c-capsule c-date--time c-travel-details__input">
<span data-block="capsule-view" data-input-name="ret_arrive_time" tabindex="0" data-input-label="Arrival time" data-placeholder="HH:MM" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
<span data-block="capsule" data-input-type="datepicker" class="c-capsule c-date c-travel-details__input">
<span data-block="capsule-view" data-input-name="ret_arrive_date" tabindex="0" data-input-label="Arrival date" data-placeholder="date" class="c-capsule__view h-empty" aria-description="Click or press Enter to edit"></span>
</span>
</li>
</ul>
</section>
</div>
</article>
</div>
<section class="c-trip__destinations">
<div class="section__header">
<h3 class="section__heading">Destinations</h3>
<button data-block="new-destination" class="c-btn c-btn--secondary c-btn--icon-only@mobile">
<span class="c-btn__icon c-btn__icon--revolve">
<svg data-name="add-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#333">
<path data-name="Path-1" d="M12,6a1.075,1.075,0,0,1-1,1H7v4a1.075,1.075,0,0,1-1,1,1.075,1.075,0,0,1-1-1V7H1A1.075,1.075,0,0,1,0,6,1.075,1.075,0,0,1,1,5H5V1A1.075,1.075,0,0,1,6,0,1.075,1.075,0,0,1,7,1V5h4A1.075,1.075,0,0,1,12,6Z" />
</svg>
</span>
<span class="c-btn__text">Destination</span>
</button>
</div>
<div id="destinations_list" class="section__body">

</div>
</section>
</div>
`

export default Trip;