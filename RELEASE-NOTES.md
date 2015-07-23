### Version 2.0.7 - July 22, 2015

- **API** - Fixed some cases where `onComplete`, `onSuccess` and `onFailure` would receive XHR as first parameter and not `response`. [#2713](https://github.com/Semantic-Org/Semantic-UI/issues/2713)
- **API** - Fixed issue where `onFailure` would pass response as stringified JSON and not a JS object [#2713](https://github.com/Semantic-Org/Semantic-UI/issues/2713)
- **API** - All API callbacks now recieve `xhr` from API request as the third calback parameter

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