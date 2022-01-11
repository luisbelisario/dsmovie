import Pagination from "components/Pagination";
import Moviecard from "components/Moviecard";

function Listing() {
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Moviecard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Moviecard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Moviecard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Moviecard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <Moviecard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing;
