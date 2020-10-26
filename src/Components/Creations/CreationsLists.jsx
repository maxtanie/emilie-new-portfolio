import React, { Component } from "react";
// DECLARATION OF MY CREATION LIST JSON OBJECT
import print from "../../Object/print.json";
import logo from "../../Object/logo.json";
import web from "../../Object/web.json";
import packaging from "../../Object/packaging.json";
import CreationsListsPages from "./CreationsListsPages.jsx";

const dataCreationsList = [print, logo, web, packaging];

export default class CreationsLists extends Component {
  render() {
    const url = this.props.location.pathname;

    const creationsListsToFilter = dataCreationsList.map((info, index) => {
      const pub = process.env.PUBLIC_URL;
      return info.map(elem => {
        return elem.DefaultsCreations.map(elem => {
          if (url.includes(elem.name)) {
            return elem.ListsDefaultCreationsDetails.map(details => {
              return (
                <CreationsListsPages
                  id={details.id}
                  titleCreations={elem.alt}
                  itemCreations={details.item}
                  descriptions={details.descriptions}
                  img={`../${pub}` + details.img}
                />
              );
            });
          }
        });
      });
    });

    return (
      <section className="container-creations-list">
        <div className="grid-creations">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis eaque enim qui laudantium adipisci soluta incidunt hic. Animi eaque perspiciatis totam libero, nisi quae vitae voluptate optio dignissimos suscipit eligendi?
        Eligendi architecto ut itaque totam? A nesciunt sed amet ullam cum nulla animi sit! Voluptatibus cupiditate in, optio molestias voluptas commodi enim laborum qui sit ea libero, tempora rem ad.
        Dolores, ex quas? Consequatur odio quibusdam aliquid consequuntur quaerat! Maiores, vel sequi incidunt voluptatum distinctio nostrum nihil error corrupti, autem dolorum quas delectus in qui harum necessitatibus rem atque ut.
        Nobis voluptates aut natus sit quas aliquam consequatur quidem eaque nemo praesentium doloremque nostrum, cupiditate sunt obcaecati aliquid quasi. Magnam laborum voluptatibus repellendus quod sit reiciendis nostrum veniam maiores quisquam.
        Perferendis illum incidunt quos molestias blanditiis, provident aliquid facilis repellendus sit adipisci expedita, dolorem libero suscipit recusandae a unde voluptatem? Autem nesciunt maiores omnis velit aspernatur, consectetur quaerat voluptatum iure.</div>
      </section>
    );
  }
}
