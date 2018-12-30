import React from "react";
import { observer, inject } from 'mobx-react';
import Link from "next/link";
import Header from "../components/Header"
import Footer from "../components/Footer"

@inject('store')
@observer
class Post extends React.Component {
    public render() {
        return (
            <div>
                <Header/>
                <table>
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>작성자</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.store.postStore.getAllPost().length != 0 && this.props.store.postStore.getAllPost().map(post => (
                                <Link as={`/post/${post.id}`} href={{pathname: '/post', query: { id: post.id }}}>
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                    </tr>
                                </Link>
                            ))
                        }
                    </tbody>
                </table>
                <Link href={{pathname: '/post_create'}}><button>글 쓰러가기</button></Link>
                <Footer/>
            </div>
        )
    }
}

export default Post;
