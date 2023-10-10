import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const News = () => {

    const data = useLoaderData();
    console.log(data);
    const { id } = useParams();
    const selectedNews = data.find(news => news._id === id)
    console.log(selectedNews);
    console.log(selectedNews.title);
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-3">
                <div className="col-span-3">
                    <h2 className="text-3xl font-semibold">News Details</h2>
                    <div className="p-8 border">
                        <img src={selectedNews.image_url
                        } alt="" />
                        <h2 className="text-2xl font-bold">{selectedNews.title}</h2>
                        <p>{selectedNews.details}</p>
                    </div>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;