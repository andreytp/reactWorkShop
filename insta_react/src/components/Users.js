import React, {Component} from 'react';
import User from "./User";

export default function Users() {
    return(
        <div className="right">
            <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixBfaEtwchD0U-A-IuF6pF_OdW3fZYmulouzROijn0K36DEDbEQ&s"
                  alt="man"
                  name="Scott"
            />
            <div className="users__block">
                <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixBfaEtwchD0U-A-IuF6pF_OdW3fZYmulouzROijn0K36DEDbEQ&s"
                      alt="man"
                      name="Scott"
                      min  />
                <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixBfaEtwchD0U-A-IuF6pF_OdW3fZYmulouzROijn0K36DEDbEQ&s"
                      alt="man"
                      name="Scott"
                      min  />
                <User src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixBfaEtwchD0U-A-IuF6pF_OdW3fZYmulouzROijn0K36DEDbEQ&s"
                      alt="man"
                      name="Scott"
                      min  />
            </div>


        </div>
    )
}

