import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// import { Container } from "./components/Grid";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import NoMatch from "./pages/NoMatch";
// import MainPage from "./pages/MainPage"
// import Head from "./components/Head";
// import userAPI from "./utils/userAPI";
// import ProtectedRoute from "./components/ProtectedRoute"

import Landing from "./pages/Landing"
import Start from "./pages/Start"
import ChatBubble from "./pages/ChatBubble"
import ChatBubbleDetail from "./pages/ChatBubbleDetail"

function App() {
// 	const [userState, setUserState] = useState({});

//    useEffect(() => { 
// 	   // auth user on first render
//       authenticate() 
//    }, []);

// 	//user authentication
// 	function authenticate() {
// 		return userAPI.authenticateUser()
// 			.then(({ data }) => {
// 				console.log('user:', data );
//             setUserState(data);
// 			})
// 			.catch((err) => console.log('registered user:', err.response));
// 	}

	return (

		// <Router>
		// 	<Head />
		// 	<Container>
		// 		<Switch>
		// 			<Route
		// 				exact
		// 				path='/'
		// 				render={ props => (
		// 					<Login
		// 						{...props}
		// 						userState={userState}
		// 						setUserState={setUserState}
		// 					/>
		// 				)}
		// 			/>
					
		// 		</Switch>
		// 	</Container>
        //  { userState.email ? <Redirect to="/main" /> : <></>}
		// </Router>
		<div>

			<Landing/>
			<Start/>
			<ChatBubble/>
			<ChatBubbleDetail/>

		</div>
	);

}

export default App;
