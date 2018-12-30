import React from "react";
import { observer, inject } from 'mobx-react';
import Header from '../components/Header'
import Footer from '../components/Footer'

@inject("store")
@observer
class PostCreate extends React.Component {

    state = {
        title: "",
        content: ""
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (e) => {
        const { post, postStore } = this.props.store;
        console.log(postStore);
        e.preventDefault();

        const data = {
            id: parseInt(postStore.getLastPostId() + 1),
            title: this.state.title,
            content: this.state.content,
            date: new Date()
        }

        postStore.addPost(data);
    }

    public render() {
        return (
            <div>
                <Header/>
                   <form onSubmit={this.handleSubmit}>
                    <label>제목</label><input type="text" name="title" onChange={this.handleChange}/>
                    <label>내용</label><textarea name="content" rows={15} cols={60} onChange={this.handleChange}/>
                    <button type="submit">작성하기</button>
                   </form>
                <Footer/>
            </div>
        )
    }
}

export default PostCreate;