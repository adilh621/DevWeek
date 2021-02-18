import React from 'react';

import { BrowserRouter as Router , Route} from 'react-router-dom'
import Main from "./components/Main"
import Chat from "./components/Chat"
const App = ()=>(

    <Router>
        <Route path='/' exact component={Main} />
        <Route path='/chat' exact component={Chat} />
        
    </Router>
)

export default App;