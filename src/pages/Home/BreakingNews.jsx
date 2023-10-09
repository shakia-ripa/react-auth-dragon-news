import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-error">Breaking News</button>
            <Marquee pauseOnHover={true} speed={200}>
                <Link className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened...</Link>
                <Link className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened...</Link>
                <Link className="mr-12" to="/">Match Highlights: Germany vs Spain — as it happened...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;