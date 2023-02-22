import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonLabel} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './competition.css';

const Competition: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>competition</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">competition</IonTitle>
          </IonToolbar>
        </IonHeader>
        
      </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton tab='match' href='/match'>
          <IonLabel>
            Match
          </IonLabel>
        </IonTabButton>
        <IonTabButton tab='competition' href='/competition'>
          <IonLabel>
            competition
          </IonLabel>
        </IonTabButton>
        <IonTabButton tab='login' href='/login'>
          <IonLabel>
            Deconnexion
          </IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Competition;
