import React from "react";

import NameComponent from "./profile/ProfileComponent/FullName";
import BioComponent from "./profile/ProfileComponent/bio";
import ProfessionComponent from "./profile/ProfileComponent/profession";
import HandelComponent from "./profile/ProfileComponent/handleName";
import ProfilPhoto from "./profile/ProfileComponent/image";
import p from "./profile/ProfileComponent/Profile_Photo.jpg";
import ph from "./profile/ProfileComponent/ing_info.jpg";
const Mohamed = {
  Name: "Mohamed",
  Prof: "Pilote",
  Bio:
    "Epam,EABA,Base aerienne Sfax,Base aerienne Bizerte,Base aerienne Gabes,Base aerienne Gafsa",
  Photo: p
};
const Anas = {
  Name: "Anas",
  Prof: "Ingénieur",
  Bio: "Prepa,INSAT,GO MY CODE",
  Photo: ph
};
const App = () => (
  <>
    <NameComponent name={Mohamed.Name} />
    <HandelComponent handleClick={() => alert("Mohamed")} />
    <ProfilPhoto photo={Mohamed.Photo} />
    <ProfessionComponent profession={Mohamed.Prof} />
    <BioComponent bio={Mohamed.Bio} />
    <NameComponent name={Anas.Name} />
    <HandelComponent handleClick={() => alert("Anas")} />
    <ProfilPhoto photo={Anas.Photo} />
    <ProfessionComponent profession={Anas.Prof} />
    <BioComponent bio={Anas.Bio} />
  </>
);
export default App;
