import React from "react";
import Link from "next/link"

class Header extends React.Component {
    public render() {
        return (
            <div>
                <h1>CHUL PHAN's toy project</h1>
                <nav>
                    <Link as="/" href="/"><a>HOME</a></Link>
                    <Link as="/post" href="/post"><a>POST</a></Link>
                </nav>
            </div>
        )
    }
}

export default Header;