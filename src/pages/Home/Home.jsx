import { useLoaderData } from "react-router-dom";

import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSIdeNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    console.log(news);
    // <marquee direction = "up">This text will scroll from bottom to up</marquee>

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-4xl">News Home</h2>

                    {
                        news.map(aNews => <NewsCard key={aNews._id}
                            news={aNews}></NewsCard>)
                    }

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;