//POUR QUE CE FICHIER SOIT PRIS EN COMPTE IL FAUT CHANGER LE LIEN DU ROUTER DANS LE FICHIER APP.JS
import { createBrowserRouter } from 'react-router-dom';
//COMPONENTS
//PAGES
import Constructioncomp from '../components/Constructioncomponent';
import Singlespacecomp from '../components/Singlespacecomponent';

//ROUTER
export const router = createBrowserRouter([
    {
      path: '/',
      element: Singlespacecomp({ showsingleComponent: <Constructioncomp/>}),//its for the page structure fixing the navbar at the top and the other elements
  },
  ]);