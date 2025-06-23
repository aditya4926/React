import Searchbar from "./Searchbar"
import Filter from "./filter"
import Cardcontainer from "./cardcontainer"
const Body = () => {
    return (
        <div>
            This is body Component
            <div className="p-3">
                <div className="flex justify-between">
                       <Searchbar />
                        <Filter />
                </div>
             
                <Cardcontainer />
                
            </div>
                </div>
                )
}
                export default Body