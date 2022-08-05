import { useEffect, useState } from "react";
import { sublist as listDishes } from "../../../services/menus";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import "./Fish.css";

export default function Fish() {
  // Local state
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const list = async () => {
      const data = await listDishes("Pescados");
      const parsedDishes = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setDishes(parsedDishes);
    };

    list();
  }, []);

  const buildMenu = (dish, index) => (
    <Card>
    <div className="card-menu-global" key={index}>
      <div className="name-food">{dish.dishName}</div>
      
      <div className="name-food">{dish.description}</div>
      <div className="name-food">$ {dish.price}</div>
      
     </div>  
           
    </Card>
  );

  return (
    <div>
      <div className="mainContainer">
        <div className="container">
          {dishes.map(buildMenu)}
          <div className="card-info-menu">
          <div className="notes">
              <li>LA PROPINA NO ES OBLIGATORIA.</li>
              <li>ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN EXPRESS.</li>
              <li>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</li>
          </div>    
          </div>
        </div>
      </div>
    </div>
  );
}
