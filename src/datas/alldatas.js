//import logo from '../assets/img/logo.svg';
import { ReactSVG } from "react-svg";
//<ReactSVG src='../assets/img/logo.svg' />;
import htmlImgLogo from '../assets/img/html5-logo.png';
import cssImgLogo from '../assets/img/css3-logo.png';
import bootstrapImgLogo from '../assets/img/bootstrap4-logo.png';
import javascriptImgLogo from '../assets/img/javascript-logo.png';
import figmaImgLogo from '../assets/img/figma-logo.png';
import wordpressImgLogo from '../assets/img/wordpress-logo.png';
import nodejsImgLogo from '../assets/img/nodejs-logo.png';
import reactImgLogo from '../assets/img/react-logo.png';
// CARRER ICON IMG
import cycergyLogo from '../assets/img/cycergy-logo.png';
import lyceemlLogo from '../assets/img/lyceemarielaurencin-logo.png';
import lyceeelLogo from '../assets/img/lyceeelisalemonnier-logo.png';
import cnamLogo from '../assets/img/cnam-logo.png';
import missionlLogo from '../assets/img/missionlocale-logo.png';
export const titleName = [
     {
        titleid:0,
        titlename:'ACCUEIL'
     },
     {
        titleid:1,
        titlename:'ABOUT ME'
     },
     {
        titleid:2,
        titlename:'CARREER'
     },
     {
        titleid:3,
        titlename:'WORKS'
     },
     {
        titleid:4,
        titlename:'CONTACT ME'
     },
];
export const aboutmeDataPar = 
    {   
        aboutmeparid:0,
        aboutmeparimgsrc:'https://i.pinimg.com/564x/6f/d5/89/6fd589810a145b9068c15b75a511d048.jpg',
        aboutmepar : `Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
        À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
        Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
        `
    }  
;
export const aboutmeData = [
   {
       aboutmeid: 0,
       aboutmetitle:'ABOUT ME ONE',
       aboutmetext: 'Lorem ipsum dolor sit',
       aboutmeimgsrc:htmlImgLogo,
   },
   {
       aboutmeid: 1,
       aboutmetitle:'ABOUT ME TWO',
       aboutmetext: 'Lorem ipsum dolor sit',
       aboutmeimgsrc:cssImgLogo
   },
   {
       aboutmeid: 2,
       aboutmetitle:'ABOUT ME THREE',
       aboutmetext: 'Lorem ipsum dolor sit',
       aboutmeimgsrc:bootstrapImgLogo
   },
   {
       aboutmeid: 3,
       aboutmetitle:'ABOUT ME THREE',
       aboutmetext: 'Lorem ipsum dolor sit',
       aboutmeimgsrc:wordpressImgLogo
   },
   {
       aboutmeid: 4,
       aboutmetitle:'ABOUT ME THREE',
       aboutmetext: 'Lorem ipsum dolor sit',
       aboutmeimgsrc:figmaImgLogo
   },
   {
       aboutmeid: 5,
       aboutmetitle:'ABOUT ME THREE',
       aboutmetext: 'Lorem ipsum dolor sit',
       aboutmeimgsrc:javascriptImgLogo
   },
   {
       aboutmeid: 6,
       aboutmetitle:'ABOUT ME THREE',
       aboutmetext: 'Lorem ipsum dolor sit',
       aboutmeimgsrc:reactImgLogo
   },
   {
       aboutmeid: 6,
       aboutmetitle:'ABOUT ME THREE',
       aboutmetext: 'Lorem ipsum dolor sit',
       aboutmeimgsrc:nodejsImgLogo
   }
];
export const carrerPartData = [
    {
        carrerid:0,
        carrername:'BAC PRO - METIERS DE LA MODE ET DU VETEMENTS - OPTION PRÊT A PORTER',// On peut encore decoupé les données par types de diplomes ect...
        carreryears:['2012','2015'],
        carrerlocation:'France, PARIS',
        carrericon : lyceemlLogo,
        carrerplace:'carrerRight',
        carrerdescription:`Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
        À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
        Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
       `
    },{
        carrerid:1,
        carrername:'BTS - METIERS DE LA MODE ET DU VETEMENTS - OPTION PRÊT A PORTER',
        carreryears:['2015','2017'],
        carrerlocation:'France, PARIS',
        carrericon : lyceeelLogo,
        carrerplace:'carrerLeft',
        carrerdescription:`Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
        À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
        Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
       `
    },{
        carrerid:2,
        carrername:'DISPOSITIF GARANTIE JEUNE',
        carreryears:['2017','2018'],
        carrerlocation:'France, PARIS',
        carrericon : missionlLogo,
        carrerplace:'carrerRight',
        carrerdescription:`Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
        À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
        Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
       `
    },{
        carrerid:3,
        carrername:`FORMATION PASS'NUMERIQUE`,
        carreryears:['2018','2019'],
        carrerlocation:'France, PARIS',
        carrericon : cnamLogo,
        carrerplace:'carrerLeft',
        carrerdescription:`Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
        À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
        Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
       `
    },{
        carrerid:4,
        carrername:`DUT - METIERS DU MULTIMEDIA ET DE L'INFORMATIQUE`,
        carreryears:['2019','2021'],
        carrerlocation:'France, PARIS',
        carrericon : cycergyLogo,
        carrerplace:'carrerRight',
        carrerdescription:`Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
        À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
        Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
       `
    },{
        carrerid:5,
        carrername:'LICENSE PROFESSIONELLE - DEVELOPMENT WEB - OPTION APPLICATION MOBILE', // or [carrernametype:`LICENSE PROFESSIONELLE`,carrernamespecialiszation:`DEVELOPMENT WEB - OPTION APPLICATION MOBILE`]
        carreryears:['2022','2023'],
        carrerlocation:'France, PARIS',
        carrericon : cycergyLogo,
        carrerplace:'carrerLeft',
        carrerdescription:`Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
        À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
        Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
       `
    }
];
export const workelemData = [
   {
       workelemid: 0,
       workelemtitle:'WORKS ONE',
       workelemtext: [{wrktxtid:0, wrktxt:'Lorem ipsum dolor sit'}, {wrktxtid:1, wrktxt:'Lorem ipsum dolor'}],
       workelemimgsrc:[{wrkimgid:0,wrkimgsrc:'https://i.pinimg.com/564x/6f/d5/89/6fd589810a145b9068c15b75a511d048.jpg'}/*{wrkimgid:1,wrkimgsrc:'https://i.pinimg.com/564x/6f/d5/89/6fd589810a145b9068c15b75a511d048.jpg'}*/],
       workelemdescription : `Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
       À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
       Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
      `,
       workelemsquarecolor: '#100da6',
       workelemicon: [{wrktxticonid:0, wrkimgsrcicon: htmlImgLogo},{wrktxticonid:1, wrkimgsrcicon:cssImgLogo},{wrktxticonid:2, wrkimgsrcicon:bootstrapImgLogo},{wrktxticonid:3, wrkimgsrcicon:nodejsImgLogo}]
   },{
       workelemid: 1,
       workelemtitle:'WORKS TWO',
       workelemtext: [{wrktxtid:0, wrktxt:'Lorem ipsum dolor sit'}, {wrktxtid:1, wrktxt:'Lorem ipsum dolor'}],
       workelemimgsrc:[{wrkimgid:0,wrkimgsrc:'https://i.pinimg.com/564x/6f/d5/89/6fd589810a145b9068c15b75a511d048.jpg'}],
       workelemdescription : `Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
       À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
       Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
      `,
       workelemsquarecolor: '#e2cc02',
       workelemicon: [{wrktxticonid:0, wrkimgsrcicon: htmlImgLogo},{wrktxticonid:1, wrkimgsrcicon:cssImgLogo},{wrktxticonid:2, wrkimgsrcicon:bootstrapImgLogo},{wrktxticonid:3, wrkimgsrcicon:nodejsImgLogo}]
   },{
       workelemid: 2,
       workelemtitle:'WORKS THREE',
       workelemtext: [{wrktxtid:0, wrktxt:'Lorem ipsum dolor sit'}, {wrktxtid:1, wrktxt:'Lorem ipsum dolor'}],
       workelemimgsrc:[{wrkimgid:0,wrkimgsrc:'https://i.pinimg.com/564x/6f/d5/89/6fd589810a145b9068c15b75a511d048.jpg'}],
       workelemdescription : `Récemment diplômée d’une licence professionnelle en développement web, je suis actuellement à la recherche d’un emploi en tant que développeuse web front end.
       À la suite de mes études, je me suis spécialisé dans le langage JavaScript, notamment sur la librairie React et le framework Node.js afin de pouvoir travailler sur le front end et le backend.
       Ce portfolio vous donnera en quelque sorte un aperçu de mes compétences.
      `,
       workelemsquarecolor: '#a60d0d',
       workelemicon: [{wrktxticonid:0, wrkimgsrcicon: htmlImgLogo},{wrktxticonid:1, wrkimgsrcicon:cssImgLogo},{wrktxticonid:2, wrkimgsrcicon:bootstrapImgLogo},{wrktxticonid:3, wrkimgsrcicon:nodejsImgLogo}]   
   }
];
export const contactImg = [
    {
        contactimgid:0,
        contactimgsrc: '../assets/img/logo.svg',
        contactimgalt:'logo  de ',
        contactimgtitle:'',
        contactimgtype:''
        },
        {
            contactimgid:1,
            contactimgsrc:'../assets/img/logo.svg',
            contactimgalt:'logo  de ',
            contactimgtitle:'',
            contactimgtype:''
            },
        {
                contactimgid:2,
                contactimgsrc:'..assets/img/logo.svg',
                contactimgalt:'logo  de ',
                contactimgtitle:'',
                contactimgtype:''
                },
                {
                    contactimgid:3,
                    contactimgsrc:'..assets/img/logo.svg',
                    contactimgalt:'logo  de ',
                    contactimgtitle:'',
                    contactimgtype:''
                    },
                    {
                        contactimgid:4,
                        contactimgsrc:'..assets/img/logo.svg',
                        contactimgalt:'logo  de ',
                        contactimgtitle:'',
                        contactimgtype:''
                        }
 ];