import {Routes, Route} from 'react-router-dom';

import Navigation from './routes/home/navigation/navigation.component';

import Home from "./routes/home/home.component";
import Authentication from './routes/home/authentication/authentication.component';

import Shop from './routes/home/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  
  );
};

export default App;
