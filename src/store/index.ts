import { createStore } from 'redux';


import { rootReducer } from './root-reducer';
import { devToolsEnhancer } from '@redux-devtools/extension';

const enchancer = devToolsEnhancer();


const store = createStore(rootReducer, enchancer);


export default store;