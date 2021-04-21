import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonButton, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonTabs, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import {useState} from "react";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import Tab1Nested from "./pages/Tab1Nested";
import Tab1DoubleNested from "./pages/Tab1DoubleNested";


const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return <IonApp>
    {
      !loggedIn && <IonReactRouter>
        <IonRouterOutlet animated={false}>
          <Route path="/" render={() => <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Logged Out</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
              <IonButton onClick={() => setLoggedIn(true)}>Log In</IonButton>
            </IonContent>
          </IonPage>}/>
        </IonRouterOutlet>
      </IonReactRouter>
    }
    {loggedIn &&
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet animated={false}>
          <Route path="/tab1" component={Tab1} exact={true}/>
          <Route path="/tab1/nested" component={Tab1Nested} exact={true}/>
          <Route path="/tab1/nested/double" component={Tab1DoubleNested} exact={true}/>
          <Route path="/tab2" component={Tab2} exact={true}/>
          <Route path="/tab3" component={Tab3}/>
          <Route path="/" render={() => <Redirect to={"/tab1"}/>} exact={true}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonLabel>Tab 1!!!</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    }
  </IonApp>
};

export default App;
