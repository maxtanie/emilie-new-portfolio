// import React, { Component } from "react";
// import "./ListsPages.scss";
// import print from "../../Object/print2.json";

// const lists = [
//   {
//     DefaultsCreations: [
//       {
//         item: "print",
//         img:
//           "img/print/flyer-my-bootik/img-300px/maquette-flyer-my-bootik-.jpg",
//         name: "flyer-my-bootik",
//         alt: "Flyer my bootik"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-1.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-2.jpg",
//         isActived: false
//       },
//       {
//         id: 3,
//         img:
//           "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-3.jpg",
//         isActived: false
//       },
//       {
//         id: 4,
//         img:
//           "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-4.jpg",
//         isActived: false
//       },
//       {
//         id: 5,
//         img:
//           "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-5.jpg",
//         isActived: false
//       },
//       {
//         id: 6,
//         img:
//           "http://localhost:3000/img/print/flyer-my-bootik/img-300px/maquette-flyer-my-bootik-.jpg",
//         isActived: false
//       },
//       {
//         id: 7,
//         img:
//           "http://localhost:3000/img/print/flyer-my-bootik/img-300px/maquette-flyer-my-bootik-2.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "My Bootik",
//         item: "print",
//         descriptions: "Flyer my bootik un super rendu"
//       },
//       {
//         id: 2,
//         name: "My Bootik",
//         item: "print",
//         descriptions:
//           "Etape de la création petite pyramide avec un léger éclairage au centre."
//       },
//       {
//         id: 3,
//         name: "My Bootik",
//         item: "print",
//         descriptions:
//           "Etape des barres colorées et duplication des formes en coupe diagonale afin de lui apporter une touche esthétique."
//       },
//       {
//         id: 4,
//         name: "My Bootik",
//         item: "print",
//         descriptions:
//           "Même mise en forme à droite mais en ajoutant des couleurs chaudes."
//       },
//       {
//         id: 5,
//         name: "My Bootik",
//         item: "print",
//         descriptions:
//           "Ajout de divers éléments graphiques : Photo, forme graphique carré arrondie."
//       },
//       {
//         id: 6,
//         name: "My Bootik",
//         item: "print",
//         descriptions:
//           "Design finalisée du flyer ( partie recto) ajout du nom de l'enseigne et coordonnées de la boutique."
//       },
//       {
//         id: 7,
//         name: "My Bootik",
//         item: "print",
//         descriptions:
//           "Design finalisée du flyer ( partie verso) ajout du nom de l'enseigne et coordonnées de la boutique."
//       }
//     ]
//   },
//   {
//     DefaultsCreations: [
//       {
//         item: "print",
//         img: "",
//         name: "magazine-retro-game",
//         alt: "Magazine retrogame"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost/emi_website/img/print/greatwood/img-petite-vignette/MAG-1.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost/emi_website/img/print/greatwood/img-petite-vignette/magazine-couverture-2.jpg",
//         isActived: false
//       },
//       {
//         id: 3,
//         img:
//           "http://localhost/emi_website/img/print/greatwood/img-petite-vignette/magazine-v-2-3.jpg",
//         isActived: false
//       },
//       {
//         id: 4,
//         img:
//           "http://localhost/emi_website/img/print/greatwood/img-petite-vignette/catalogue_gabar-final-4-.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "Magazine retro",
//         item: "print",
//         descriptions: "Magazine retro game super 1"
//       },
//       {
//         id: 2,
//         name: "Magazine retro",
//         item: "print",
//         descriptions: "Magazine retro game super 2 "
//       },
//       {
//         id: 3,
//         name: "Magazine retro",
//         item: "print",
//         descriptions: "Magazine retro game super 3"
//       },
//       {
//         id: 4,
//         name: "Magazine retro",
//         item: "print",
//         descriptions: "Magazine retro game super 4 "
//       }
//     ]
//   },
//   {
//     DefaultsCreations: [
//       {
//         item: "print",
//         img: "",
//         name: "jeux-video",
//         alt: "Jeux vidéo"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost/emi_website/img/print/jeu-video-com/img-petite-vignette/flyer-paris-2011-1.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost/emi_website/img/print/jeu-video-com/img-petite-vignette/flyer-paris-2011-2.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "Jeux video",
//         item: "print",
//         descriptions: "Mon super jeux vidéo 1"
//       },
//       {
//         id: 2,
//         name: "Jeux video",
//         item: "print",
//         descriptions: "Mon super jeux vidéo 2"
//       }
//     ]
//   },
//   {
//     DefaultsCreations: [
//       {
//         item: "print",
//         img: "",
//         name: "affiche-cinema",
//         alt: "Affiche cinéma"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost/emi_website/img/print/affiche-cinema/img-petite-vignette/affiche-30ans-1.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost/emi_website/img/print/affiche-cinema/img-petite-vignette/img-30ans-2.jpg",
//         isActived: false
//       },
//       {
//         id: 3,
//         img:
//           "http://localhost/emi_website/img/print/affiche-cinema/img-petite-vignette/acteurs-3.jpg",
//         isActived: false
//       },
//       {
//         id: 4,
//         img:
//           "http://localhost/emi_website/img/print/affiche-cinema/img-petite-vignette/titre30-ans-4.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "Affiche cinéma",
//         item: "print",
//         descriptions: "Ma super affiche cinéma 1"
//       },
//       {
//         id: 2,
//         name: "Affiche cinéma",
//         item: "print",
//         descriptions: "Ma super affiche cinéma 2"
//       },
//       {
//         id: 3,
//         name: "Affiche cinéma",
//         item: "print",
//         descriptions: "Ma super affiche cinéma 3"
//       },
//       {
//         id: 4,
//         name: "Affiche cinéma",
//         item: "print",
//         descriptions: "Ma super affiche cinéma 4"
//       }
//     ]
//   },
//   {
//     DefaultsCreations: [
//       {
//         item: "print",
//         img: "",
//         name: "carte-de-visite-mallyance",
//         alt: "Carte de visite Mallyance"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost/emi_website/img/print/mallyance/img-petite-vignette/carte-visite-mallyance.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost/emi_website/img/print/mallyance/img-petite-vignette/carte-visite-mallyance2.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "Carte de visite",
//         item: "print",
//         descriptions: "Une superbe carte de visite 1"
//       },
//       {
//         id: 2,
//         name: "Carte de visite",
//         item: "print",
//         descriptions: "Une superbe carte de visite 2"
//       }
//     ]
//   },
//   {
//     DefaultsCreations: [
//       {
//         item: "logo",
//         img: "",
//         name: "chabadou",
//         alt: "Chabadou"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/mockup-boite-chaussures-1.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/carte-de-visite-2.jpg",
//         isActived: false
//       },
//       {
//         id: 3,
//         img:
//           "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/motif-3.jpg",
//         isActived: false
//       },
//       {
//         id: 4,
//         img:
//           "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/motif-4.jpg",
//         isActived: false
//       },
//       {
//         id: 5,
//         img:
//           "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/chabadou-planche-5.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "Chabadou",
//         item: "logo",
//         descriptions: "Chabadou logo 1"
//       },
//       {
//         id: 2,
//         name: "Chabadou",
//         item: "logo",
//         descriptions: "Chabadou logo 2"
//       },
//       {
//         id: 3,
//         name: "Chabadou",
//         item: "logo",
//         descriptions: "Chabadou logo 3"
//       },
//       {
//         id: 4,
//         name: "Chabadou",
//         item: "logo",
//         descriptions: "Chabadou logo 4"
//       },
//       {
//         id: 4,
//         name: "Chabadou",
//         item: "logo",
//         descriptions: "Chabadou logo 5"
//       }
//     ]
//   },

//   {
//     DefaultsCreations: [
//       {
//         item: "logo",
//         img: "",
//         name: "mallyance",
//         alt: "Mallyance"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost/emi_website/img/logo/mallyance/img-vignette/charte-graphique-1.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost/emi_website/img/logo/mallyance/img-vignette/charte-graphique-1-planche.jpg",
//         isActived: false
//       },
//       {
//         id: 3,
//         img:
//           "http://localhost/emi_website/img/logo/mallyance/img-vignette/creation-2.jpg",
//         isActived: false
//       },
//       {
//         id: 4,
//         img:
//           "http://localhost/emi_website/img/logo/mallyance/img-vignette/creation-3.jpg",
//         isActived: false
//       },
//       {
//         id: 5,
//         img:
//           "http://localhost/emi_website/img/logo/mallyance/img-vignette/creation-4.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "Mallyance",
//         item: "logo",
//         descriptions: "Mallyance logo 1"
//       },
//       {
//         id: 2,
//         name: "Mallyance",
//         item: "logo",
//         descriptions: "Mallyance logo 2"
//       },
//       {
//         id: 3,
//         name: "Mallyance",
//         item: "logo",
//         descriptions: "Mallyance logo 3"
//       },
//       {
//         id: 4,
//         name: "Mallyance",
//         item: "logo",
//         descriptions: "Mallyance logo 4"
//       },
//       {
//         id: 5,
//         name: "Mallyance",
//         item: "logo",
//         descriptions: "Mallyance logo 5"
//       }
//     ]
//   },
//   {
//     DefaultsCreations: [
//       {
//         item: "logo",
//         img: "",
//         name: "oldeez",
//         alt: "Oldeez"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost/emi_website/img/logo/greatwood/img-vignette/brouillon-1.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost/emi_website/img/logo/greatwood/img-vignette/oldeez-2.jpg",
//         isActived: false
//       },
//       {
//         id: 3,
//         img:
//           "http://localhost/emi_website/img/logo/greatwood/img-vignette/oldeez-3.jpg",
//         isActived: false
//       },
//       {
//         id: 4,
//         img:
//           "http://localhost/emi_website/img/logo/greatwood/img-vignette/oldeez-4.jpg",
//         isActived: false
//       },
//       {
//         id: 5,
//         img:
//           "http://localhost/emi_website/img/logo/greatwood/img-vignette/planche-logo-greatwood-5.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "Oldeez",
//         item: "logo",
//         descriptions: "Oldeez logo 1"
//       },
//       {
//         id: 2,
//         name: "Oldeez",
//         item: "logo",
//         descriptions: "Oldeez logo 2"
//       },
//       {
//         id: 3,
//         name: "Oldeez",
//         item: "logo",
//         descriptions: "Oldeez logo 3"
//       },
//       {
//         id: 4,
//         name: "Oldeez",
//         item: "logo",
//         descriptions: "Oldeez logo 4"
//       },
//       {
//         id: 5,
//         name: "Oldeez",
//         item: "logo",
//         descriptions: "Oldeez logo 5"
//       }
//     ]
//   },
//   {
//     DefaultsCreations: [
//       {
//         item: "logo",
//         img: "",
//         name: "cieram",
//         alt: "Cieram"
//       }
//     ],
//     ListSlide: [
//       {
//         id: 1,
//         img:
//           "http://localhost/emi_website/img/logo/cieram/img-vignette/logo-1.jpg",
//         isActived: true
//       },
//       {
//         id: 2,
//         img:
//           "http://localhost/emi_website/img/logo/cieram/img-vignette/logo-2.jpg",
//         isActived: false
//       },
//       {
//         id: 3,
//         img:
//           "http://localhost/emi_website/img/logo/cieram/img-vignette/logo-3.jpg",
//         isActived: false
//       }
//     ],
//     ListsDefaultCreationsDetails: [
//       {
//         id: 1,
//         name: "Cieram",
//         item: "logo",
//         descriptions: "Cierama logo 1"
//       },
//       {
//         id: 2,
//         name: "Cieram",
//         item: "logo",
//         descriptions: "Cierama logo 2"
//       },
//       {
//         id: 3,
//         name: "Cieram",
//         item: "logo",
//         descriptions: "Cierama logo 3"
//       }
//     ]
//   }
// ];

// export default class ListsPages extends Component {
//   state = {
//     index: 0
//   };

//   prev = () => {
//     if (lists.length === 1) {
//       return this.setState({
//         index: 0
//       });
//     }
//     if (this.state.index === 0) {
//       this.setState({
//         index: lists.length - 1
//       });
//     } else {
//       this.setState({
//         index: this.state.index - 1
//       });
//     }
//   };

//   next = () => {
//     if (lists.length === 1) {
//       return this.setState({
//         index: 0
//       });
//     }
//     if (this.state.index < lists.length - 1) {
//       this.setState({
//         index: this.state.index + 1
//       });
//     } else {
//       this.setState({
//         index: 0
//       });
//     }
//   };

//   render() {
//     const { index } = this.state;

//     const LeftInfo = props => {
//       return (
//         <div className="left-block">
//           <p className="id red-apple-color ">
//             {props.id < 10 ? `0${props.id}` : props.id}
//           </p>
//           <p className="name violet-pink-2-color ">{props.name}</p>
//           <p className="item violet-pink-2-color ">{props.item}</p>
//           <p className="descriptions">{props.descriptions}</p>
//         </div>
//       );
//     };

//     const RightInfo = props => {
//       return <img src={props.img} alt="" class="img-crea" />;
//     };

//     const vals = lists.map((elem, index) => {
//       const l = elem.ListSlide.map((lists, idx) => {
//         return <RightInfo img={lists.img}></RightInfo>;
//       });
//       const v = elem.ListsDefaultCreationsDetails.map((list, idx) => {
//         return (
//           <LeftInfo
//             id={list.id}
//             name={list.name}
//             item={list.item}
//             descriptions={list.descriptions}
//           ></LeftInfo>
//         );
//       });

//       return (
//         <div className="grid-page">
//           <div className="flex">
//             <div className="left-infs">{v[0]}</div>
//             <div className="right-infs">
//               <div className="grid-img">{l}</div>
//             </div>
//           </div>
//         </div>
//       );
//     });

//     return (
//       <div className="container">
//         <div className="btns">
//           <button onClick={this.prev}>&#8592;</button>
//           <button onClick={this.next}>&#8594;</button>
//         </div>
//         <div className="infos">{vals[index]}</div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import "./ListsPages.scss";
import print from "../../Object/print2.json";

const logo = [
  {
    DefaultsCreations: [
      {
        item: "logo",
        img: "",
        name: "chabadou",
        alt: "Chabadou"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/mockup-boite-chaussures-1.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/carte-de-visite-2.jpg",
        isActived: false
      },
      {
        id: 3,
        img:
          "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/motif-3.jpg",
        isActived: false
      },
      {
        id: 4,
        img:
          "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/motif-4.jpg",
        isActived: false
      },
      {
        id: 5,
        img:
          "http://localhost/emi_website/img/logo/marque-chabatou/img-vignette/chabadou-planche-5.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "Chabadou",
        item: "logo",
        descriptions: "Chabadou logo 1"
      },
      {
        id: 2,
        name: "Chabadou",
        item: "logo",
        descriptions: "Chabadou logo 2"
      },
      {
        id: 3,
        name: "Chabadou",
        item: "logo",
        descriptions: "Chabadou logo 3"
      },
      {
        id: 4,
        name: "Chabadou",
        item: "logo",
        descriptions: "Chabadou logo 4"
      },
      {
        id: 4,
        name: "Chabadou",
        item: "logo",
        descriptions: "Chabadou logo 5"
      }
    ]
  },

  {
    DefaultsCreations: [
      {
        item: "logo",
        img: "",
        name: "mallyance",
        alt: "Mallyance"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost/emi_website/img/logo/mallyance/img-vignette/charte-graphique-1.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost/emi_website/img/logo/mallyance/img-vignette/charte-graphique-1-planche.jpg",
        isActived: false
      },
      {
        id: 3,
        img:
          "http://localhost/emi_website/img/logo/mallyance/img-vignette/creation-2.jpg",
        isActived: false
      },
      {
        id: 4,
        img:
          "http://localhost/emi_website/img/logo/mallyance/img-vignette/creation-3.jpg",
        isActived: false
      },
      {
        id: 5,
        img:
          "http://localhost/emi_website/img/logo/mallyance/img-vignette/creation-4.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "Mallyance",
        item: "logo",
        descriptions: "Mallyance logo 1"
      },
      {
        id: 2,
        name: "Mallyance",
        item: "logo",
        descriptions: "Mallyance logo 2"
      },
      {
        id: 3,
        name: "Mallyance",
        item: "logo",
        descriptions: "Mallyance logo 3"
      },
      {
        id: 4,
        name: "Mallyance",
        item: "logo",
        descriptions: "Mallyance logo 4"
      },
      {
        id: 5,
        name: "Mallyance",
        item: "logo",
        descriptions: "Mallyance logo 5"
      }
    ]
  },
  {
    DefaultsCreations: [
      {
        item: "logo",
        img: "",
        name: "oldeez",
        alt: "Oldeez"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost/emi_website/img/logo/greatwood/img-vignette/brouillon-1.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost/emi_website/img/logo/greatwood/img-vignette/oldeez-2.jpg",
        isActived: false
      },
      {
        id: 3,
        img:
          "http://localhost/emi_website/img/logo/greatwood/img-vignette/oldeez-3.jpg",
        isActived: false
      },
      {
        id: 4,
        img:
          "http://localhost/emi_website/img/logo/greatwood/img-vignette/oldeez-4.jpg",
        isActived: false
      },
      {
        id: 5,
        img:
          "http://localhost/emi_website/img/logo/greatwood/img-vignette/planche-logo-greatwood-5.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "Oldeez",
        item: "logo",
        descriptions: "Oldeez logo 1"
      },
      {
        id: 2,
        name: "Oldeez",
        item: "logo",
        descriptions: "Oldeez logo 2"
      },
      {
        id: 3,
        name: "Oldeez",
        item: "logo",
        descriptions: "Oldeez logo 3"
      },
      {
        id: 4,
        name: "Oldeez",
        item: "logo",
        descriptions: "Oldeez logo 4"
      },
      {
        id: 5,
        name: "Oldeez",
        item: "logo",
        descriptions: "Oldeez logo 5"
      }
    ]
  },
  {
    DefaultsCreations: [
      {
        item: "logo",
        img: "",
        name: "cieram",
        alt: "Cieram"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost/emi_website/img/logo/cieram/img-vignette/logo-1.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost/emi_website/img/logo/cieram/img-vignette/logo-2.jpg",
        isActived: false
      },
      {
        id: 3,
        img:
          "http://localhost/emi_website/img/logo/cieram/img-vignette/logo-3.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "Cieram",
        item: "logo",
        descriptions: "Cierama logo 1"
      },
      {
        id: 2,
        name: "Cieram",
        item: "logo",
        descriptions: "Cierama logo 2"
      },
      {
        id: 3,
        name: "Cieram",
        item: "logo",
        descriptions: "Cierama logo 3"
      }
    ]
  }
];

const prin = [
  {
    DefaultsCreations: [
      {
        item: "print",
        img:
          "img/print/flyer-my-bootik/img-300px/maquette-flyer-my-bootik-.jpg",
        name: "flyer-my-bootik",
        alt: "Flyer my bootik"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-1.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-2.jpg",
        isActived: false
      },
      {
        id: 3,
        img:
          "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-3.jpg",
        isActived: false
      },
      {
        id: 4,
        img:
          "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-4.jpg",
        isActived: false
      },
      {
        id: 5,
        img:
          "http://localhost:3000/img/print/flyer-my-bootik/img-300px/flyer-etape-5.jpg",
        isActived: false
      },
      {
        id: 6,
        img:
          "http://localhost:3000/img/print/flyer-my-bootik/img-300px/maquette-flyer-my-bootik-.jpg",
        isActived: false
      },
      {
        id: 7,
        img:
          "http://localhost:3000/img/print/flyer-my-bootik/img-300px/maquette-flyer-my-bootik-2.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "My Bootik",
        item: "print",
        descriptions: "Flyer my bootik un super rendu"
      },
      {
        id: 2,
        name: "My Bootik",
        item: "print",
        descriptions:
          "Etape de la création petite pyramide avec un léger éclairage au centre."
      },
      {
        id: 3,
        name: "My Bootik",
        item: "print",
        descriptions:
          "Etape des barres colorées et duplication des formes en coupe diagonale afin de lui apporter une touche esthétique."
      },
      {
        id: 4,
        name: "My Bootik",
        item: "print",
        descriptions:
          "Même mise en forme à droite mais en ajoutant des couleurs chaudes."
      },
      {
        id: 5,
        name: "My Bootik",
        item: "print",
        descriptions:
          "Ajout de divers éléments graphiques : Photo, forme graphique carré arrondie."
      },
      {
        id: 6,
        name: "My Bootik",
        item: "print",
        descriptions:
          "Design finalisée du flyer ( partie recto) ajout du nom de l'enseigne et coordonnées de la boutique."
      },
      {
        id: 7,
        name: "My Bootik",
        item: "print",
        descriptions:
          "Design finalisée du flyer ( partie verso) ajout du nom de l'enseigne et coordonnées de la boutique."
      }
    ]
  },
  {
    DefaultsCreations: [
      {
        item: "print",
        img: "",
        name: "magazine-retro-game",
        alt: "Magazine retrogame"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost/emi_website/img/print/greatwood/img-petite-vignette/MAG-1.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost/emi_website/img/print/greatwood/img-petite-vignette/magazine-couverture-2.jpg",
        isActived: false
      },
      {
        id: 3,
        img:
          "http://localhost/emi_website/img/print/greatwood/img-petite-vignette/magazine-v-2-3.jpg",
        isActived: false
      },
      {
        id: 4,
        img:
          "http://localhost/emi_website/img/print/greatwood/img-petite-vignette/catalogue_gabar-final-4-.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "Magazine retro",
        item: "print",
        descriptions: "Magazine retro game super 1"
      },
      {
        id: 2,
        name: "Magazine retro",
        item: "print",
        descriptions: "Magazine retro game super 2 "
      },
      {
        id: 3,
        name: "Magazine retro",
        item: "print",
        descriptions: "Magazine retro game super 3"
      },
      {
        id: 4,
        name: "Magazine retro",
        item: "print",
        descriptions: "Magazine retro game super 4 "
      }
    ]
  },
  {
    DefaultsCreations: [
      {
        item: "print",
        img: "",
        name: "jeux-video",
        alt: "Jeux vidéo"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost/emi_website/img/print/jeu-video-com/img-petite-vignette/flyer-paris-2011-1.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost/emi_website/img/print/jeu-video-com/img-petite-vignette/flyer-paris-2011-2.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "Jeux video",
        item: "print",
        descriptions: "Mon super jeux vidéo 1"
      },
      {
        id: 2,
        name: "Jeux video",
        item: "print",
        descriptions: "Mon super jeux vidéo 2"
      }
    ]
  },
  {
    DefaultsCreations: [
      {
        item: "print",
        img: "",
        name: "affiche-cinema",
        alt: "Affiche cinéma"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost/emi_website/img/print/affiche-cinema/img-petite-vignette/affiche-30ans-1.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost/emi_website/img/print/affiche-cinema/img-petite-vignette/img-30ans-2.jpg",
        isActived: false
      },
      {
        id: 3,
        img:
          "http://localhost/emi_website/img/print/affiche-cinema/img-petite-vignette/acteurs-3.jpg",
        isActived: false
      },
      {
        id: 4,
        img:
          "http://localhost/emi_website/img/print/affiche-cinema/img-petite-vignette/titre30-ans-4.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "Affiche cinéma",
        item: "print",
        descriptions: "Ma super affiche cinéma 1"
      },
      {
        id: 2,
        name: "Affiche cinéma",
        item: "print",
        descriptions: "Ma super affiche cinéma 2"
      },
      {
        id: 3,
        name: "Affiche cinéma",
        item: "print",
        descriptions: "Ma super affiche cinéma 3"
      },
      {
        id: 4,
        name: "Affiche cinéma",
        item: "print",
        descriptions: "Ma super affiche cinéma 4"
      }
    ]
  },
  {
    DefaultsCreations: [
      {
        item: "print",
        img: "",
        name: "carte-de-visite-mallyance",
        alt: "Carte de visite Mallyance"
      }
    ],
    ListSlide: [
      {
        id: 1,
        img:
          "http://localhost/emi_website/img/print/mallyance/img-petite-vignette/carte-visite-mallyance.jpg",
        isActived: true
      },
      {
        id: 2,
        img:
          "http://localhost/emi_website/img/print/mallyance/img-petite-vignette/carte-visite-mallyance2.jpg",
        isActived: false
      }
    ],
    ListsDefaultCreationsDetails: [
      {
        id: 1,
        name: "Carte de visite",
        item: "print",
        descriptions: "Une superbe carte de visite 1"
      },
      {
        id: 2,
        name: "Carte de visite",
        item: "print",
        descriptions: "Une superbe carte de visite 2"
      }
    ]
  }
];

let lists = prin.concat(logo);
alert(lists.length);
console.log(lists);
// let lists = [prin, logo];

let x = lists.map(list => {
  return list.length;
});

let reducer = (accu, curr) => accu + curr;
const listsNumber = x.reduce(reducer);

export default class ListsPages extends Component {
  state = {
    index: 0
  };

  prev = () => {
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index === 0) {
      this.setState({
        index: lists.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  next = () => {
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index < lists.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };

  render() {
    const { index } = this.state;

    const LeftInfo = props => {
      return (
        <div className="left-block">
          <p className="id red-apple-color ">
            {props.id < 10 ? `0${props.id}` : props.id}
          </p>
          <p className="name violet-pink-2-color ">{props.name}</p>
          <p className="item violet-pink-2-color ">{props.item}</p>
          <p className="descriptions">{props.descriptions}</p>
        </div>
      );
    };

    const RightInfo = props => {
      return <img src={props.img} alt="" class="img-crea" />;
    };

    const vals = lists.map((elem, index) => {
      const l = elem.ListSlide.map((lists, idx) => {
        return <RightInfo img={lists.img}></RightInfo>;
      });
      const v = elem.ListsDefaultCreationsDetails.map((list, idx) => {
        return (
          <LeftInfo
            id={list.id}
            name={list.name}
            item={list.item}
            descriptions={list.descriptions}
          ></LeftInfo>
        );
      });

      return (
        <div className="grid-page">
          <div className="flex">
            <div className="left-infs">{v[0]}</div>
            <div className="right-infs">
              <div className="grid-img">{l}</div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="btns">
          <button onClick={this.prev}>&#8592;</button>
          <button onClick={this.next}>&#8594;</button>
        </div>
        <div className="infos">{vals[index]}</div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./ListsPages.scss";
import print from "../../Object/print2.json";
import logo from "../../Object/logo2.json";
import { thisExpression } from "@babel/types";
import { element } from "prop-types";

let num = 1;
export default class ListsPages extends Component {
  state = {
    index: 0,
    lists: print.concat(logo),
    name: "",
    num: 0,
    ids: 1,
    isActived: null,
    descriptions: ""
  };

  prev = () => {
    const { lists } = this.state;
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index === 0) {
      this.setState({
        index: lists.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  next = () => {
    const { lists } = this.state;
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index < lists.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };

  changeData = event => {
    let { lists, num, index } = this.state;
    // let x = lists.map(el => {
    //   el.ListSlide.map(els => {
    //     if (num) {

    //     } else {
    //       return this.setState({
    //         num: (this.state.num += 1)
    //       });
    //     }
    //   });
    // });
    // return x;

    // if (num <= 0) {
    //   return this.setState({
    //     num: (this.state.num += 1)
    //   });
    // }
    // if (index === 1) {
    //   return this.setState({
    //     num: 0
    //   });
    // } else {
    //   return this.setState({
    //     num: (this.state.num = 0)
    //   });
    // }

    // let imgId = lists.map(elem => {
    //   return elem.ListSlide.map(list => {
    //     return list.id;
    //   });
    // });

    // const ids = imgId;
    // let idxIdS = ids[index];

    // const showInf = idxIdS.map(ide => {
    //   if (e === ide) {
    //     return "ide", ide;
    //   } else {
    //     return "e", e;
    //   }
    // });
    const ids = event.target.id;
    const shox = index;
    // return this.setState({
    //   num: ids - 1
    // });
    console.log(ids);
    if (index > 0) {
      return this.setState({
        num: 0
      });
    } else {
      return this.setState({
        num: ids - 1
      });
    }
  };

  render() {
    const { index, lists } = this.state;

    const LeftInfo = props => {
      return (
        <div className="left-block">
          <p className="id red-apple-color ">
            {props.id < 10 ? `0${props.id}` : props.id}
          </p>
          <p className="name violet-pink-2-color ">{props.name}</p>
          <p className="item violet-pink-2-color ">{props.item}</p>
          <p className="descriptions">{props.descriptions}</p>
        </div>
      );
    };

    const RightInfo = props => {
      return (
        <img
          id={props.id}
          data-key={props.id}
          key={props.id}
          src={props.img}
          alt=""
          class="img-crea"
          onClick={props.onClick}
        />
      );
    };

    let valName = "",
      valsN = "";

    const vals = lists.map((elem, index) => {
      const l = elem.ListSlide.map((lists, idx) => {
        return (
          <RightInfo
            id={lists.id}
            data-key={lists.id}
            key={lists.id}
            img={lists.img}
            onClick={e => this.changeData(e)}
          ></RightInfo>
        );
      });
      const v = elem.ListsDefaultCreationsDetails.map((list, idx) => {
        const url = window.location.pathname;

        return (
          <LeftInfo
            id={list.id}
            name={list.name}
            item={list.item}
            descriptions={list.descriptions}
          ></LeftInfo>
        );
      });

      return (
        <div className="grid-page">
          <div className="flex">
            <div className="left-infs">{v[this.state.num]}</div>
            <div className="right-infs">
              <div className="grid-img">{l}</div>
            </div>
          </div>
        </div>
      );
    });

    console.log(this.state.descriptions);

    return (
      <div className="container">
        <div className="btns">
          <button onClick={this.prev}>&#8592;</button>
          <button onClick={this.next}>&#8594;</button>
        </div>
        <div className="infos">{vals[index]}</div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./ListsPages.scss";
import print from "../../Object/print2.json";
import logo from "../../Object/logo2.json";
import { thisExpression } from "@babel/types";
import { element } from "prop-types";

let loc = window.location.pathname,
  nu = 0,
  val = "";

export default class ListsPages extends Component {
  state = {
    index: nu,
    lists: print.concat(logo),
    name: "",
    num: 0,
    ids: 1,
    isActived: null,
    descriptions: ""
  };

  prev = () => {
    const { lists } = this.state;

    const showLink = this.state.lists.map(elem => {
      return elem.DefaultsCreations.map(links => {
        return links.name;
      });
    });

    return showLink.map((elem, index) => {
      nu = index;
      val = loc.includes(elem);
      if (val) {
        return this.setState({
          index: nu
        });
      }
      if (lists.length === 1) {
        return this.setState({
          index: 0
        });
      }
      if (this.state.index === 0) {
        this.setState({
          index: lists.length - 1
        });
      } else {
        this.setState({
          index: this.state.index - 1
        });
      }
    });
  };

  next = () => {
    const { lists } = this.state;
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index < lists.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };

  changeData = event => {
    let { lists, num, index } = this.state;
    // let x = lists.map(el => {
    //   el.ListSlide.map(els => {
    //     if (num) {

    //     } else {
    //       return this.setState({
    //         num: (this.state.num += 1)
    //       });
    //     }
    //   });
    // });
    // return x;

    // if (num <= 0) {
    //   return this.setState({
    //     num: (this.state.num += 1)
    //   });
    // }
    // if (index === 1) {
    //   return this.setState({
    //     num: 0
    //   });
    // } else {
    //   return this.setState({
    //     num: (this.state.num = 0)
    //   });
    // }

    // let imgId = lists.map(elem => {
    //   return elem.ListSlide.map(list => {
    //     return list.id;
    //   });
    // });

    // const ids = imgId;
    // let idxIdS = ids[index];

    // const showInf = idxIdS.map(ide => {
    //   if (e === ide) {
    //     return "ide", ide;
    //   } else {
    //     return "e", e;
    //   }
    // });
    let ids = event.target.id;
    const shox = index;
    // return this.setState({
    //   num: ids - 1
    // });

    if (num === 0 || index > 0) {
      return this.setState({
        num: ids - 1
      });
    } else {
      return this.setState({
        num: ids - 1
      });
    }
  };

  render() {
    // const showLink = this.state.lists.map(elem => {
    //   return elem.DefaultsCreations.map(links => {
    //     return links.name;
    //   });
    // });

    // const li = showLink.map((elem, index) => {
    //   let val = loc.includes(elem);
    //   if (val) {
    //     nu = index;
    //     return nu;
    //   }
    // });

    let { index, lists } = this.state;

    console.log(index);
    const LeftInfo = props => {
      return (
        <div className="left-block">
          <p className="id red-apple-color ">
            {props.id < 10 ? `0${props.id}` : props.id}
          </p>
          <p className="name violet-pink-2-color ">{props.name}</p>
          <p className="item violet-pink-2-color ">{props.item}</p>
          <p className="descriptions">{props.descriptions}</p>
        </div>
      );
    };

    const RightInfo = props => {
      return (
        <img
          id={props.id}
          data-key={props.id}
          key={props.id}
          src={props.img}
          alt=""
          class="img-crea"
          onClick={props.onClick}
        />
      );
    };

    let valName = "",
      valsN = "";

    const vals = lists.map((elem, index) => {
      const l = elem.ListSlide.map((lists, idx) => {
        return (
          <RightInfo
            id={lists.id}
            data-key={lists.id}
            key={lists.id}
            img={lists.img}
            onClick={e => this.changeData(e)}
          ></RightInfo>
        );
      });
      const v = elem.ListsDefaultCreationsDetails.map((list, idx) => {
        const url = window.location.pathname;

        return (
          <LeftInfo
            id={list.id}
            name={list.name}
            item={list.item}
            descriptions={list.descriptions}
          ></LeftInfo>
        );
      });

      return (
        <div className="grid-page">
          <div className="flex">
            <div className="left-infs">{v[this.state.num]}</div>
            <div className="right-infs">
              <div className="grid-img">{l}</div>
            </div>
          </div>
        </div>
      );
    });
    console.log(this.state.descriptions);

    return (
      <div className="container">
        <div className="btns">
          <button onClick={this.prev}>&#8592;</button>
          <button onClick={this.next}>&#8594;</button>
        </div>
        <div className="infos">{vals[index]}</div>
      </div>
    );
  }
}




import React, { Component } from "react";
import "./ListsPages.scss";
import print from "../../Object/print2.json";
import web from "../../Object/web2.json";
import packaging from "../../Object/packaging.json";
import Carousel from "./Carousel";

let loc = window.location.pathname,
  nu = 0,
  lists = print.concat(web, packaging),
  val = "",
  prop = "",
  urlName = "";

let showLink = lists.map(elem => {
  return elem.DefaultsCreations.map(links => {
    return links.name;
  });
});

const li = showLink.map((elem, index) => {
  let val = `/portfolio/${elem}`;
  if (loc === val) {
    nu = index;
    return nu;
  } else {
  }
});

console.log(li);

export default class ListsPages extends Component {
  state = {
    index: nu,
    indexPrev: nu,
    lists: lists,
    name: "",
    num: 0,
    resetNum: 0,
    ids: 1,
    isActived: null,
    descriptions: ""
  };

  prev = () => {
    const { lists } = this.state;

    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index === 0) {
      this.setState({
        index: lists.length - 1
      });
    } else {
      this.setState({
        index: this.state.index - 1
      });
    }
  };

  next = () => {
    const { lists } = this.state;
    if (lists.length === 1) {
      return this.setState({
        index: 0
      });
    }
    if (this.state.index < lists.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
    } else {
      this.setState({
        index: 0
      });
    }
  };

  changeData = event => {
    let { lists, num, index, indexPrev, resetNum } = this.state;
    indexPrev = index <= 0 ? (indexPrev = 0) : index - 1;

    let ids = event.target.id - 1;
    let nums = ids;

    console.log(
      "ids:",
      ids,
      "num:",
      num,
      "index:",
      index,
      "indexPrev: ",
      indexPrev
    );
    if (nums === ids) {
      return this.setState({
        num: nums
      });
    }
  };

  carouselOpen = () => {
    return (
      <Carousel
        name="https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900"
        item="Print"
        descriptions="Super carousel"
      />
    );
  };
  render() {
    let { index, lists } = this.state;
    // let his = this.props.history;
    // his = prop;

    // let x = showLink.map((elem, index) => {
    //   let val = `/creations/${elem}`;
    //   if (loc === val) {
    //     nu = index;
    //     return nu;
    //   } else {
    //   }
    // });

    // console.log(x);
    const LeftInfo = props => {
      return (
        <div className="left-block">
          <p className="id red-apple-color ">
            {props.id < 10 ? `0${props.id}` : props.id}
          </p>
          <p className="name-2 violet-pink-2-color ">{props.name}</p>
          <p className="item violet-pink-2-color ">{props.item}</p>
          <p className="descriptions">{props.descriptions}</p>
        </div>
      );
    };

    const RightInfo = props => {
      return (
        <img
          id={props.id}
          data-key={props.id}
          key={props.id}
          src={props.img}
          alt=""
          class="img-crea"
          onClick={props.onClick}
        />
      );
    };

    let valName = "",
      valsN = "";

    const vals = lists.map((elem, index) => {
      const l = elem.ListSlide.map((lists, idx) => {
        const pub = "../";
        return (
          <RightInfo
            id={lists.id}
            data-key={lists.id}
            key={lists.id}
            img={pub + lists.img}
            onClick={e => this.changeData(e)}
          ></RightInfo>
        );
      });
      const v = elem.ListsDefaultCreationsDetails.map((list, idx) => {
        urlName = list.name;
        const url = window.location.pathname;

        return (
          <LeftInfo
            id={list.id}
            name={list.name}
            item={list.item}
            descriptions={list.descriptions}
          ></LeftInfo>
        );
      });

      return (
        <div className="grid-page">
          <div className="flex">
            <div className="left-infs fixed-infos">
              {v[this.state.num]}
            </div>
            <div className="right-infs">
              <div className="grid-img">{l}</div>
            </div>
          </div>
        </div>
      );
    });

    // console.log(this.state.descriptions);

    return (
      <div className="container">
        <div className="btns">
          <button onClick={this.prev}>&#8592;</button>
          <button onClick={this.next}>&#8594;</button>
        </div>
        <div className="infos">{vals[index]}</div>
      </div>
    );
  }
}
