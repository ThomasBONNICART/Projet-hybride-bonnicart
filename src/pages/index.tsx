import { IonLabel, IonButton, IonContent, IonHeader, IonPage, IonTabButton, IonTitle, IonToolbar, IonTabBar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './index.css';

const Index: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Acceuil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        Bienvenue dans pronosticax
      </IonContent>
      <IonTabBar slot="bottom">
      <IonTabButton tab='index' href='/index'>
          <IonLabel>
            Acceuil
          </IonLabel>
        </IonTabButton>
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

export default Index;
