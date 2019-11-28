import React from "react";
import Card from "./Card";

import Contacts from "./contacts";

function App() {
  return (
    <div className="main">
      <Contacts />
      <Card
        img="https://ewedit.files.wordpress.com/2018/03/gettyimages-857192646.jpg"
        name="Michelle"
        number="+123 456 789"
        email="michelle@email.com"
      />
      <Card
        img="https://img.huffingtonpost.com/asset/5d9722e52100005000309fa6.jpeg?ops=scalefit_630_noupscale"
        name="Robert"
        number="+989 465 7806"
        email="de.inro@hollywood.com"
      />
      <Card
        img="https://pbs.twimg.com/profile_images/1123359369570148353/Mh-Rf4Sk_400x400.jpg"
        name="Oprah"
        number="+975 847 9489"
        email="oprah@o.com"
      />
    </div>
  );
}

export default App;
