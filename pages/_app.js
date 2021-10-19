import 'tailwindcss/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from 'react-redux';

import withRedux from "next-redux-wrapper";
import store from '../app/redux/store';


function MyApp({ Component, pageProps }) {
  return  <Provider store={store}>
           <Component {...pageProps} />
         </Provider>
  
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
MyApp = withRedux(makeStore)(MyApp)
export default MyApp;

