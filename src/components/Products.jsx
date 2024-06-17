import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import Cards, {WithPromoted} from "./Cards";
import { Link } from "react-router-dom";




const Products = () => {

    const[products,setProducts] = useState([]);
    const[filteredItems ,setFilteredItems] = useState([]);    
    const[selectedCategeory ,setSelectedCategeory] = useState("all");    
    const[sortOption ,setSortOption] = useState("default");    


    useEffect(() => {
        const fetchData = async () =>{
        try {
            const response = await fetch("/product.json")
            const data = await response.json();
            console.log(data);
            setProducts(data);
            setFilteredItems(data);

        } catch (error) {
            console.log("Error fetching data:", error)
        }
    };
    fetchData();

    },[]);

    const PromotedCard = WithPromoted(Cards);

    
   // console.log(products)
        {/**Filtering function */}

        const filterItems = (category) => {
            const filtered = category === "all" ? products : products.filter((item) => item.category === category);
            setFilteredItems(filtered);
            setSelectedCategeory(category);

        }

        const showAll = ()=>{
            setFilteredItems(products);
            setSelectedCategeory("all")

        }

        {/** sorting functionality  */}

        const handleSortChange = (option) =>{
            setSortOption(option);

            // logic for sorting

            let sortedItems = [...filteredItems];

            switch (option) {
                case "A-Z":
                    sortedItems.sort((a,b) => a.title.localeCompare(b.title))
                    break;
                case "Z-A": sortedItems.sort((a,b) => b.title.localeCompare(a.title))
                    break;
                case "low-to-high" :
                    sortedItems.sort((a,b) => a.price - b.price);
                    break; 
                case "high-to-low" :
                    sortedItems.sort((a,b) => b.price - a.price);
                    break;       
            
                default:
                    break;
            }
            setFilteredItems(sortedItems);
        };
        
        
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12 mt-40">
        

        {/* product cards */}

        <div>
            <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
                {/*  all btn */}
                <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                    <button onClick={showAll} className="hover:border hover:border-orange-500 hover:text-orange-500 p-2">All Products</button>
                    <button onClick={() => filterItems("Nike") } className="hover:border hover:border-orange-500 hover:text-orange-500 p-2">NIKE</button>
                    <button onClick={() => filterItems("Adidas") } className="hover:border hover:border-orange-500 hover:text-orange-500 p-2">ADIDAS</button>
                    <button onClick={() => filterItems("Puma") } className="hover:border hover:border-orange-500 hover:text-orange-500 p-2">PUMA</button>
                </div>
                {/* sorting options */}

                <div className="flex justify-end mb-4 rounded-sm">
                    <div className="bg-black p-2">
                        <FaFilter className="text-white h-4 w-4"/>
                    </div>
                    <select
                     id="sort"
                     onChange={(e) => handleSortChange(e.target.value) }
                     value={sortOption}
                     className="bg-black text-white px-2 py-1 rounded-sm">
                        <option value="default">Default</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="low-to-high">Low to High</option>
                        <option value="high-to-low">High-to-Low</option>
                    </select>
                </div>
            </div>
            {/* LOGIC FOR SHOWING CARD WITH PROMOTED LABEL */}


           
             {/* <Cards filteredItems={filteredItems}/>    */}
             {/* {<PromotedCard  filterItems={filteredItems}/>} */}

    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  justify-center gap-12 shadow-sm relative">
        {
            // eslint-disable-next-line react/prop-types
            filteredItems.map((item) => (
                
                <div key={item.id} >
                    <Link to={`/shop/${item.id}`}>
                {
                    item.promoted ? <PromotedCard  filterItems={item}/> : <Cards filterItems={item}/>
                }
                    </Link>
                 
                </div>
                
            ))
        }
    </div>
             

        </div>
    </div>
  )
}

export default Products;

