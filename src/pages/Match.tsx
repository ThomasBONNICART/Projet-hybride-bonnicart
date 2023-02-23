import { IonItem, IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './match.css';

const Match: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>match</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">match</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
            <IonItem>
              <IonLabel>Match 1</IonLabel>
              <IonButton>modifier</IonButton>
              <IonButton>supprimer</IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>Match 2</IonLabel>
              <IonButton>modifier</IonButton>
              <IonButton>supprimer</IonButton>
            </IonItem>
          </IonList>
          
        <IonButton href='/creematch'>crée un match</IonButton>
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

export default Match;
