import React from 'react';
import Welcome from '../components/Welcome/Welcome';
import WelcomeState from "../components/Welcome/WelcomeState";
import TextWithButton from "../components/task/TextWithButton";

function App() {
    return (
        <div>
            <Welcome
                user={{
                    name: 'Petras',
                    surname: 'Petraitis',
                }}
            />
            <hr/>
            <Welcome
                user={{
                    name: 'Antanas',
                    surname: 'Antanaitis',
                }}
                salary={3000}
            />
            <hr/>
            <WelcomeState user={{
                name: 'Antanas',
                surname: 'Antanaitis',
            }}/>
            <TextWithButton value={"This is textas"}></TextWithButton>
        </div>
    );
}

export default App;
