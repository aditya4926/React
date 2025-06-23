import Restaurantcard from "./Restaurantcard"
const Cardcontainer = () =>{
    return(
        <>
        <div>
            This is Cardcontainer Component
        </div>
        <div className="p-3">
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>
            <Restaurantcard/>

        </div>
        </>
    )
}
export default Cardcontainer