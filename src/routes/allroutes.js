//POUR QUE CE FICHIER SOIT PRIS EN COMPTE IL FAUT CHANGER LE LIEN DU ROUTER DANS LE FICHIER APP.JS

import { createBrowserRouter } from 'react-router-dom';
//COMPONENTS
import Homepagecomp from '../components/Homepagecomponent';
import Compositioncomp from '../components/Compositioncomponent';
//import Titlepartcomp from '../components/Titlepartcomponent';
import Unavailablecomp from '../components/notavailiablecomponent';
import Constructioncomp from '../components/Constructioncomponent';
import Carrercomp from '../components/Carrercomponent';
//PAGES
import Compositionpagecomp from '../pages/Compositionpage';
import Aboutmecomp from '../components/Aboutcomponent';
import Singlespacecomp from '../components/Singlespacecomponent';
import Workscomp from '../components/Workscomponent';
//import Constructionpagecomp from '../pages/Constructionpage';

//ROUTER
export const router = createBrowserRouter([
    {
      path: '/',
      element: <Compositionpagecomp />,//its for the page structure fixing the navbar at the top and the other elements
      children: [
        {
          index: true, 
          element: <Homepagecomp/>,
        },{
          path: 'aboutme',
          element: Compositioncomp ({titleName: 'ABOUT ME', showoffComponent: <Aboutmecomp/>}),//OK  =>element: Compositioncomp ({title: Titlepartcomp('ABOUTME'), showoffComponent:<Components/>})
      },{
        path: 'carrer',
        element: Compositioncomp ({titleName: 'EDUCATIONAL BACKGROUND', showoffComponent: <Carrercomp/>}),//OK  =>element: Compositioncomp ({title: Titlepartcomp('ABOUTME'), showoffComponent:<Components/>})
    },{
        path: 'works',
        element: Compositioncomp ({titleName: 'MY WORKS', showoffComponent: <Workscomp/>}),//OK  =>element: Compositioncomp ({title: Titlepartcomp('ABOUTME'), showoffComponent:<Components/>})
    },{
        path: 'contactme',
        element: Compositioncomp ({titleName:'CONTACTS', showoffComponent: Unavailablecomp('CONTACTS')}),//OK  =>element: Compositioncomp ({title: Titlepartcomp('ABOUTME'), showoffComponent:<Components/>})
    },{
      path: 'construction',
      element: Singlespacecomp({ showsingleComponent: <Constructioncomp/>})
    }
  ],
  },
  ]);