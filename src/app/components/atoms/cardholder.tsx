import Link from "next/link";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardHolder = ({ image, title, text, text2 }: { image:any, title:any, text:any }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">{text2}</p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <CardHolder
          image="..."
          title="Budianto Wijaya"
          text=" Lecturer Room : 2"
          text2="Availability Status : Teaching"
        />
      </div>
      <div className="col">
        <CardHolder
          image="..."
          title="Anindya Reizana"
          text="Lecturer Room : 4"
          text2="Availability Status : Available"  
        />
      </div>
      <div className="col">
        <CardHolder
          image="..."
          title="Ahmad Rivaldi"
          text="Lecturer Room : 1"
          text2="Availability Status : Thesis guidance"
        />
      </div>
      <div className="col">
        <CardHolder
          image="..."
          title="Soeswahyuni"
          text="Lecturer Room : 6"
          text2="Availability Status : Not Available"
        />
      </div>
    </div>
  );
};

export default CardGrid;