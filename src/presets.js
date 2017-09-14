/* eslint-disable file */
// import installExtension, {
//   EMBER_INSPECTOR, REACT_DEVELOPER_TOOLS,
//   BACKBONE_DEBUGGER, JQUERY_DEBUGGER,
//   ANGULARJS_BATARANG, VUEJS_DEVTOOLS,
//   REDUX_DEVTOOLS, REACT_PERF,
//   CYCLEJS_DEVTOOL,
// } from 'electron-devtools-installer';
import { reducer } from 'redux-devtools-extension';
import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/brace-fold';

if (process.env.NODE_ENV !== 'test') {
  require('../fonts/index.css');
  require('codemirror/lib/codemirror.css');
  require('codemirror/addon/fold/foldgutter.css');
}
const store = createStore(reducer);
createStore(store, reducer, devToolsEnhancer());


// const store = createStore(reducer, preloadedState, devToolsEnhancer().then let store => {
//   subscribe({
//      this.store.subscribe(preloadedState, store(( => {
//           dispatch();
//       });
//     })
// }));
