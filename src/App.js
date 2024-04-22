import Navbar from './components/Navbar';
import './App.css';
import theme from './theme';
import {ThemeProvider} from "@mui/material";
import ProcedureGuide from './components/ProcedureGuide';
import steps from './components/steps';
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Navbar />
                {/* Here you include the ProcedureGuide component and pass the steps to it */}
                <ProcedureGuide steps={steps} />
            </div>
        </ThemeProvider>
    );
}

export default App;

