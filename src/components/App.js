import React from 'react';
import {Router,HashRouter, Route, Link, Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';


// BrowserRouter
const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={StreamList} />
                        <Route path='/streams/new' exact component={StreamCreate} />
                        <Route path='/streams/edit/:id' exact component={StreamEdit} />
                        <Route path='/streams/delete/:id' exact component={StreamDelete} />
                        <Route path='/streams/:id' exact component={StreamShow} />
                    </Switch>

                    {/* <Route path='/' component={PageOne} /> */}

                </div>
            </Router>
        </div>
    )
}




export default App;

// //memory router
// const App = () => {
//     return (
        
//         <MemoryRouter>
//             <div>
//                 <Route path='/' exact component={PageOne} />
//                 {/* <Route path='/' component={PageOne} /> */}
//                 <Route path='/pagetwo' component={PageTwo} />

//             </div>
//         </MemoryRouter>
//     )
// }

// //hashrouter
// const App = () => {
//     return (

//         <HashRouter>
//             <div>
//                 <Route path='/' exact component={PageOne} />
//                 {/* <Route path='/' component={PageOne} /> */}
//                 <Route path='/pagetwo' component={PageTwo} />

//             </div>
//         </HashRouter>
//     )
// }
