import { useEffect, useState } from "react";
import axios from "axios";
import "./Laptops.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure FontAwesome is loaded

const Laptops = () => {
    const [laptops, setLaptops] = useState([]);

    const get_laptops = async () => {
        try {
            const res = await axios.get("http://localhost:9000/laptops");
            setLaptops(res.data);
        } catch (error) {
            console.error("Error fetching laptops:", error);
        }
    };

    useEffect(() => {
        get_laptops();
    }, []);

    return (
        <div className="parent">
            {laptops.length > 0 ? (
                laptops.map((element, index) => (
                    <div className="child" key={index}>
                        <img src={element.pimage} alt="Laptop" />
                        <h3><i className="fa fa-rupee"></i> {element.pcost}</h3>
                        <p>{element.pqty} in stock</p>
                    </div>
                ))
            ) : (
                <p>Loading laptops...</p>
            )}
        </div>
    );
};

export default Laptops;
