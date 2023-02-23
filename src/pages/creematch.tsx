import {IonInput, IonItem, IonCheckbox, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonTabBar, IonTabButton, IonLabel, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './match.css';

const Creematch: React.FC = () => {
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
            <IonTitle size="large">création d'un match</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form className="ion-padding">
            <IonItem>
                <IonLabel position="floating">équipe 1</IonLabel>
                <IonInput />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">équipe 2</IonLabel>
                <IonInput />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">pronostique</IonLabel>
                <IonInput />
            </IonItem>
            <IonButton className="ion-margin-top" type="submit" expand="block">
                Envoyer
            </IonButton>
            
        </form>
        <IonButton className="ion-margin-top" href='/match'>
                retour
        </IonButton>
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

export default Creematch;
