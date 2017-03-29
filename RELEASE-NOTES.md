### Version 2.2.10 - March 28, 2017

- **Modal** - `onDeny` and `onApprove` callbacks can no longer occur multiple times if you rapidly click a approve/deny button in a. #4479

#### Dropdown

- **Dropdown** - Added new setting `filterRemoteData`, when set to `true` API will be expected to return the complete result set, which will then be filtered clientside to only display matching results. **Thanks @enix223** [#4815](https://github.com/Semantic-Org/Semantic-UI/pull/4815)
- **Dropdown/Search/Checkbox** - Removes use of deprecated `dispatchEvent` DOM APIs for generating simulated events

### Version 2.2.0 - June 26, 2016

- **Progress** - Progress now uses a polling interval for updates. Rapidly updating the progress bar over a period quicker than the animation duration (for example with xhr `onprogress` events say every 50ms) will now appear smooth as butter.
- **API** - `beforeSend` would not correctly cancel request when `return false;` is used in callback. [#3660](https://github.com/Semantic-Org/Semantic-UI/issues/3660)
- **API** - `cache: 'local'` would not return the localstorage cached results in some cases
- **API** - Using `onResponse` with `dataType` other than JSON or JSONP would cause an error. (Not allowing plain text responses to be translated) [#3653](https://github.com/Semantic-Org/Semantic-UI/issues/3653)
- **Dropdown** - `apiSettings` was not defaulting to use `cache: 'local'` as specified in the docs
- **Embed** - `API` setting is now disabled by default
- **Search** - Added `refresh` behavior for search to refresh selector cache. Cache will automatically refresh after API results received

### Version 2.1.7 - Dec 19, 2015

- **API** - All responses fulfilled with settings (like `mockResponse`) will now receive a settings object with all values resolved. For example `url` will be `/user/2/` and not `user/{id}` in the callback. - [#3466](https://github.com/Semantic-Org/Semantic-UI/issues/3466)
- **API** - API now allows the use of settings `response` and `responseAsync` to replace `mockResponse` and `mockResponseAsync`. The use of "mock" may not represent the most common use case which is providing a response from a third party source. (These changes are purely cosmetic and no underlying behavior has changed) - [#3491](https://github.com/Semantic-Org/Semantic-UI/issues/3491)

### Version 2.1.5 - Nov 1, 2015

- **Dropdown** - Added `remoteValues` as a possible `field` setting. Allowing users to return API results using arbitrary JSON object groupings. [#3080](https://github.com/Semantic-Org/Semantic-UI/issues/3080)

#### Features

- **API** - Added `encodeParameters` option to enable/disable parameters being encoded with `encodeURIComponent` [#2752](https://github.com/Semantic-Org/Semantic-UI/issues/2752)
- **API** Added new setting `hideError`, defaults to `auto` (will automatically hide error for elements that are not forms). [#2586](https://github.com/Semantic-Org/Semantic-UI/issues/2586)
- **Dropdown**  - Dropdown using remote data, can now customize the property names returned by api call using `fields` (similar to search).

#### Bugs

- **API** - API debug is now `false` by default, like other modules. [#2817](https://github.com/Semantic-Org/Semantic-UI/issues/2817)
- **Build Tools** - Removed octal literals from install scripts (for color escaping), and uses of future ECMAScript reserved words [#2838 [#2839 **Thanks @artemkaint**](https://github.com/Semantic-Org/Semantic-UI/issues/nt**)
- **API** - API now will use automatically use `form` action if no api event is specified now  when form is `stateContext` but not initialized element

### Version 2.0.7 - July 23, 2015

- **API** - Fixed some cases where `onComplete`, `onSuccess` and `onFailure` would receive XHR as first parameter and not `response`. [#2713](https://github.com/Semantic-Org/Semantic-UI/issues/2713)
- **API** - Fixed issue where `onFailure` would pass response as stringified JSON and not a JS object [#2713](https://github.com/Semantic-Org/Semantic-UI/issues/2713)
- **API** - All API callbacks now receive `xhr` from API request as the third callback parameter

### Version 2.0.5 - July 20, 2015

- **API** - Data replaced in urls, `urlData`, will now be url encoded by default. Additionally checks were added to avoid double encoding already encoded values. [#2394](https://github.com/Semantic-Org/Semantic-UI/issues/2394)

### Version 2.0.3 - July 8, 2015

- **Dropdown** - Dropdown using `<select>` and `apiSettings` will now correctly add new `<option>` value when selections are made [#2573](https://github.com/Semantic-Org/Semantic-UI/issues/2573)

### Version 2.0.1 - July 6, 2015

- **Tab** - Tab now correctly obeys `cache` setting. Removed use of API's local caching by default. [#2493](https://github.com/Semantic-Org/Semantic-UI/issues/2493)

### Version 2.0.0 - June 30, 2015

- **API** - API `onFailure` will now be called **in all failure conditions**, when a request is errored (504, 404 etc), aborted (page change or CORS), or JSON does not pass `successTest` function. `onError` and `onAbort` will also fire for each specific failure condition.
- **Multiselect** - New `multiple` dropdown types have been added. Many new dropdown improvements have been added including tagging/tokenizing features and loading data through API requests.
- **API** - API can now be used with mocked responses, and custom AJAX requests. `mockResponse` has been added to resolve request with a prespecified JSON object, or a synchronous function callback.
- **API** `mockResponseAsync` has been added for custom asynchronous requests. This allows you to specify a custom async callback to resolve an API request, helping with integration with libraries like Ember or Angular that may wrap AJAX requests.
- **API** - API callbacks now have an `onResponse` callback that can adjust a servers response before it is parsed by other callbacks for success or failure conditions. **Thanks @mnquintana**
- **API** - API now provides a local caching setting to avoid server roundtrips for identical urls by using `cache: 'local'`. This is not enabled by default.  Local caching is useful for results that should return the same values across a single session, for example when querying an autocomplete.
- **Dropdown** - Added remote API integration with dropdown, to allow `search selection` to query against a remote dataset.
- **API** - API now has new settings `throttleFirstRequest` and `interruptRequests`. Interrupt requests will abort a previous request on an element when making a new request. `throttleFirstRequest`, sets whether the first request or only subsequent requests should be throttled when a `throttle` duration is specified.
- **Accordion** - Fixed bug where `exclusive: true` could sometimes cause other accordion element animations to get stuck when animating rapidly
- **API** - API longer uses `readyState = 0` as sole check for request abort, this may accidentally trigger with `JSONP` or `CORS` requests.
- **API** - Fixed `this` context of `beforeSend` to use `stateContext` not `element`
- **API** - Fixed `loadingDuration` not correctly delaying requests when invoking with  `.api('query')`
- **Search** - Search will no longer incorrectly produce an error when API settings are passed through metadata
- **Search** - Search API calls now use the same level debug settings as search

### Version 1.11.0 - March 3, 2015

- **Search** - Fix a bug with `onSelect returning `null` when results retrieved from cached API query

### Version 1.10.4 - February 28, 2015

- **API** - Remove console error message when no API url is specified but element is a `form` (defaults to `form` action)
- **API** - `api` check for [serialize object](https://github.com/macek/jquery-serialize-object) optional dependency no longer produces error when `serializeForm: true` and dependency is not found.

### Version 1.10.0 - February 23, 2015

- **API** - Added `was cancelled` to determine whether request was cancelled by `beforeSend`
- **State** - Text states now handle `cancelled` API requests correctly

### Version 1.9.3 - February 20, 2015

- **API** - Simplified `api` debug output to console to more clearly label url and data sent

### UI Changes

- **API** - API now has an ``onRequest`` callback setting that receives the XHR promise after initializing the request

### Version 1.8.0 - January 23, 2015

- **API** - Added new behavior `$.api('abort')` which cancels current request
- **API** - Fixed bug where `$.api('get xhr')` was not correctly returning xhr promise
- **API** - Fixed bug where API would query resource immediately when specifying `on: false`

### Version 1.5.0 - December 30, 2014

- **Progress** - Progress bars now display all intermediary percentage values when animating. Improved performance when progress bar is rapidly updated.

### Version 1.4.0 - December 22, 2014

- Improved documentation for API and Tab to be slightly more comprehensive

### Version 1.2.0 - December 08, 2014

- **Dropdown** - Fixes bug with dropdown converted from ``select`` that use ``<option`` values with capital letters not being selectable

### Version 0.8.3 - Oct 30, 2013

- **Modal** - Adds fixes for opening modals when other modals are opened, adds a few new API behaviors
- **Form** - Fixes issues with form validation not escaping regex characters

### Version 0.1.0 - Sep 25, 2013