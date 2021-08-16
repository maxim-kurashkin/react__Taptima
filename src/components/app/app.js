import React from 'react';
import AppHeader from '../app-header';
import AppMenu from '../app-menu';
import AppTabs from '../app-tabs';
import AppProfileForm from '../app-profile-form';
import './app.css';

const App = () => {
    return(
        <div className="app">
            <AppHeader/>
            <div className="container__main">
                <div className="left__side">
                    <AppMenu/>
                </div>
                <div className="right__side">
                    <AppTabs/>
                    <AppProfileForm/>
                </div>
            </div>
        </div>


    )
}

export default App;