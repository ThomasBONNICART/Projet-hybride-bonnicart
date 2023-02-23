import { IonItem, IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './competition.css';

const Competition: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>compétition</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">compétition</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
            <IonItem>
              <IonLabel>compétition 1</IonLabel>
              <IonButton>modifier</IonButton>
              <IonButton>supprimer</IonButton>
            </IonItem>
            <IonItem>
              <IonLabel>compétition 2</IonLabel>
              <IonButton>modifier</IonButton>
              <IonButton>supprimer</IonButton>
            </IonItem>
          </IonList>
          
        <IonButton href='/creecompetiton'>crée une compétition</IonButton>
        
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

export default Competition;
