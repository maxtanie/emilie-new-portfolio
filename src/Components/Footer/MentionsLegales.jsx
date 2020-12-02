import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function MentionsLegales() {
  useEffect(() => {
    document.body.style.backgroundColor = "#4bd5f2";
  }, []);
  return (
    <section class="purple-text">
      <aside class="content-big-title">
        <h1 class="title-rules">MENTIONS LEGALES</h1>
      </aside>
      <div class="container-rules">
        <p>
          Présentation site www.emiliephamda.com
          <br />
          Le site www.emiliephamda.com est la propriété de Emilie PHAM DA
          <br />
          (Auto-entrepreneure indépendant). Ce site est développé en responsive
          design et donc optimisé pour tous types
          <br />
          d'écrans.
        </p>

        <p>Responsable de sa propre publication Emilie PHAM DA </p>

        <aside className="adress-block">
          <span>ADRESSE:</span>
          <br />
          <span>Ville: </span>
          <span>95800 Cergy</span>
          <br />
          <adress>
            <span>
              Veuillez prendre contact directement au formulaire de contact
              indiqué :{" "}
            </span>
            <Link to="/contact">Me contacter</Link>
          </adress>
          <br />
          <span>SIRET:</span>
          <span> 84951370000013</span>
        </aside>

        <aside className="hebergement-web">
          <br />
          <span>Hébergement web:</span>
          <br />
          <span>O2 SWITCH</span>
          <br />
          <span>SAS au capital de 8 000 000€</span>
        </aside>

        <p>
          Si vous trouvez une anomalie ou si vous souhaitez entrer en contact
          direct avec le gestionnaire principal du site
        </p>

        <h3> Présentation du site internet</h3>
        <p>
          Le site Internet https://emiliephamda.com (ci-après dénommé le Site)
          est la propriété exclusive de l’auto-entreprise Emilie PHAM DA .
        </p>
        <p>
          La consultation du Site est subordonnée à l’acceptation intégrale et
          au respect par les internautes, des conditions d’utilisation
          suivantes.
        </p>
        <p>
          L’internaute s’engage à faire un usage personnel et non commercial des
          informations contenues sur le Site. En cas de non-respect des
          dispositions
          <br />
          des présentes mentions légales, par l’internaute, sa responsabilité
          civile et/ou pénale pourrai(en)t se voir engagée(s).
        </p>

        <h3>Contenu du site</h3>
        <p>Le site est exploité par Emilie PHAM DA .</p>
        <p>
          Il présente son activité de Graphiste print / web des ressources
          gratuites à ce sujet.
        </p>
        <p>Politique de confidentialité</p>
        <p>
          En aucun cas, les données recueillies sur notre Site ne seront cédées
          ou revendues à des tiers.{" "}
        </p>
        <p>
          Retrouvez plus de détails sur la collecte et l’utilisation de vos
          données dans notre politique de confidentialité.
        </p>

        <h3>Cookies</h3>
        <p>
          Le Site peut collecter automatiquement des informations standards pour
          améliorer votre expérience sur ce site.
        </p>
        <p>
          Toutes les informations collectées indirectement ne seront utilisées
          que pour suivre le volume, le type et la configuration du trafic
          utilisant ce
          <br /> Site, pour en développer la conception et l’agencement et à
          d’autres fins administratives et de planification et plus généralement
          pour améliorer le
          <br /> service que nous vous offrons.{" "}
        </p>
        <p>
          Vous avez la possibilité de visiter le Site en désactivant cette
          option dans les paramètres de votre navigateur.{" "}
        </p>

        <h3>Respect de la propriété intellectuelle</h3>
        <p>
          Toutes les marques, photographies (hors photographies libres de
          droit), textes, commentaires, illustrations, images
          <br />
          animées ou non, séquences vidéo, sons, ainsi que toutes les
          applications informatiques qui pourraient être utilisées
          <br />
          pour faire fonctionner le Site et plus généralement tous les éléments
          reproduits ou utilisés sur le Site sont protégés
          <br />
          par les lois en vigueur au titre du Code de la propriété
          intellectuelle.
        </p>
        <p>
          ls sont la propriété pleine et entière de l’Editeur ou de ses
          partenaires, sauf mentions particulières.{" "}
        </p>
        <p>
          Toute reproduction, représentation, utilisation ou adaptation, sous
          quelque forme que ce soit, de tout ou partie de
          <br />
          ces éléments, y compris les applications informatiques, sans l’accord
          préalable et écrit de l’Editeur, sont strictement
          <br />
          interdites. Le fait pour l’Editeur de ne pas engager de procédure dès
          la prise de connaissance de ces utilisations non
          <br />
          autorisées ne vaut pas acceptation desdites utilisations et
          renonciation aux poursuites.
        </p>

        <p>
          Seule l’utilisation pour un usage privé dans un cercle de famille est
          autorisée et toute autre utilisation est constitutive
          <br /> de contrefaçon et/ou d’atteinte aux droits voisins,
          sanctionnées par Code de la propriété intellectuelle.
        </p>

        <p>
          La reprise de tout ou partie de ce contenu nécessite l’autorisation
          préalable de l’Editeur ou du titulaire des droits sur
          <br /> ce contenu.
        </p>

        <h3>Liens hypertextes</h3>
        <p>
          Le Site peut contenir des liens hypertexte donnant accès à d’autres
          sites web édités et gérés par des tiers et non par
          <br />
          l’Editeur. L’Editeur ne pourra être tenu responsable directement ou
          indirectement dans le cas où lesdits sites tiers ne
          <br />
          respecteraient pas les dispositions légales.
        </p>
      </div>
    </section>
  );
}
