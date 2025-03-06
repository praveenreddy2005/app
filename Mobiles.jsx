/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from "axios";
import "./Mobiles.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure FontAwesome is loaded

const Mobiles = () => {
    const [mobiles, setMobiles] = useState([]);

    const get_mobiles = async () => {
        try {
            const res = await axios.get("http://localhost:8000/mobiles");
            setMobiles(res.data);
        } catch (error) {
            console.error("Error fetching mobiles:", error);
        }
    };

    useEffect(() => {
        get_mobiles();
    }, []);

    return (
        <div className="parent">
            {mobiles.length > 0 ? (
                mobiles.map((element, index) => (
                    <div className="child" key={index}>
                        <img src={element.pimage} alt="Mobiles" />
                        <h3><i className="fa fa-rupee"></i> {element.pcost}</h3>
                        <p>{element.pqty} in stock</p>
                    </div>
                ))
            ) : (
                <p>Loading mobiles...</p>
            )}
        </div>
    );
};

export default Mobiles;
