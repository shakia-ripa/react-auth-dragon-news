import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-semibold">All Category</h2>
            {
                categories.map(category => <Link className="block" 
                key={category.id}
                to={`/category/${category.id}`}><button className="btn btn-ghost text-xl font-medium">{category.name}</button></Link>)
            }
        </div>
    );
};

export default LeftSideNav;