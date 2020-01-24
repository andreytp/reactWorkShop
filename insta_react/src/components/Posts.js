import React, {Component} from 'react';
import Post from "./Post";

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://www.brproud.com/wp-content/uploads/sites/80/2019/07/IMG_07711.jpg" alt="Mark Surridge"/>
                <Post src="https://freight.cargo.site/t/original/i/1e934dbfc123fe117f77c6c530c8b57ab27dfc2d6938730e8926dac8c04e49e4/_E1A1721.jpg" alt="Benoit Paille"/>
                <Post src="https://images.squarespace-cdn.com/content/v1/54f52b66e4b06c271d076bd9/1536247219959-VYNS9VGXANJQV4TE2OMY/ke17ZwdGBToddI8pDm48kDNJq2DPk-Wo2aps4Q9cDVl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwD1g8DYbkhCsgrhnj8CXYdHOTtwMaXOCFEvZOc4sRX6NsU27u2nfjJc-6lTDGhKg/Faces_003.jpg?format=2500w" alt="Mark Surridge"/>
            </div>
        )
    }
}