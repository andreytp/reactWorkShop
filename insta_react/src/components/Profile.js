import React from "react";
import User from "./User";
import Pallete from "./Pallete";

const Profile = () => {
    return(
        <div className="container profile">
            <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixBfaEtwchD0U-A-IuF6pF_OdW3fZYmulouzROijn0K36DEDbEQ&s"
                  alt="man"
                  name="Scott"/>
            <Pallete/>
        </div>
    )
}
export default Profile;