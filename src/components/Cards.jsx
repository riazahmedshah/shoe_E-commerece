
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Cards = ({filterItems}) => {
    console.log(filterItems)
  return (
    <div>
        <div>
            <Link to={`/shop/${filterItems.id}`}>
                <img src={filterItems.image} className="mx-auto w-full hover:scale-105 transition-all duration-300"/>
            </Link>
                    
            <div className="mt-4 px-4">
                <h4 className="text-base font-semibold mb-2">{filterItems.title}</h4>
            <div>
                <p className="text-black/50">{filterItems.category}</p>
                <p className="font-semibold">₹{filterItems.price}</p>
                        </div>
                    </div>
                </div>   
    </div>
  )
};

export const WithPromoted = (Cards) => {
    // eslint-disable-next-line react/display-name
    return (filterItems) => {
        
        return(
        <div>
            <label className="bg-black text-white absolute">Promoted</label>
            <Cards {...filterItems} />
        </div>
        ); 
    };
};
export default Cards;