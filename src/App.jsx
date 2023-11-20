import { BrowserRouter } from "react-router-dom";
import {
	Navbar,
	Experience,
	Feedbacks,
	Contact,
	Hero,
	About,
	Works,
	StarsCanvas,
	Tech,
} from "./components";

function App() {
	return (
		<>
			<BrowserRouter>
				<div className="relative z-0 bg-primary">
					<div className="bg-hero-patters bg-cover bg-center bg-no-repeat">
						<Navbar />
						<Hero />
					</div>
					<About />
					<Experience />
					<Tech />
					<Works />
					<Feedbacks />
					<div className="relative z-0">
						<Contact />
						<StarsCanvas />
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
