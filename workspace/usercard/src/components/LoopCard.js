import UserCard from "./UserCard";

export default function LoopCard(props){

const UserDetails=props.UserDetails;

return(
<>
    <div className="d-flex flex-row flex-wrap">

    {UserDetails.map((details)=>{
        return(
    <UserCard details={details}/>)}
    )}
        </div>
    
        </>
)

}