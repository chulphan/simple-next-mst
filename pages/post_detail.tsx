import React from "react";
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class PostDetail extends React.Component {

    public render() {
        console.log(this.props)
        return (
            <div>
                hi...
            </div>
        )
    }
}

export default PostDetail;