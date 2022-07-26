import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App=(props) => {
	return (
		<div className='app-wrapper'>
			<Header />

			<Router>
				<Navbar />
				<div className='app-wrapper-content'>
					<Routes>
						<Route path="/dialogs/*" element={<Dialogs dialogs={props.state.messagePage.dialogs} messages={props.state.profilePage.messages} />} />
						<Route path="/profile" element={<Profile posts={props.state.messagePage.posts} />} />
						<Route path="/news" element={<News />} />
						<Route path="/music" element={<Music />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
				</div>

			</Router>
		</div>

	);
}

export default App;
