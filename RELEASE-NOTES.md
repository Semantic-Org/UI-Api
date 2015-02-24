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