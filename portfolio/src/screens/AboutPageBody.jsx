export function AboutPageBody() {
    return (
        <> 
            <div className="page-body">
                <div className="page-header header-container">
                    <h1 className="primary-h1 primary-color">
                        About.
                    </h1>
                </div>
                <div className="about-page-body page-content container">
                    <div className="sketch-container">
                        <img className="sticker sketch hero-image" src="./images/About/front-facing-sketch.png" alt="hero-image" />
                    </div>
                    <div className="notes-container">
                        <div className="personal-notes">
                            <p className="personal-note">
                                I'm a full-stack developer with a passion for creating intuitive and engaging user experiences. With a background in both front-end and back-end development, I enjoy working on projects that allow me to utilize my skills in JavaScript, React, Node.js, and more. I thrive in collaborative environments and am always eager to learn new technologies and improve my craft.
                            </p>
                        </div>
                        <div className="highlight-notes">
                            <ul className="grid highlight-grid">
                                <li className="highlight-note"></li>
                                <li className="highlight-note"></li>
                                <li className="highlight-note"></li>
                                <li className="highlight-note"></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sticker-grid">
                        <ul className="grid grid-cols-2 board">
                            <li>
                                <div className="container sticker-container"><img className="sticker" src="./images/About/icons/js.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container sticker-container"><img className="sticker" src="./images/About/icons/mongodb.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container sticker-container"><img className="sticker" src="./images/About/icons/react.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container sticker-container"><img className="sticker" src="./images/About/icons/nodejs.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container sticker-container"><img className="sticker" src="./images/About/icons/php.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container sticker-container"><img className="sticker" src="./images/About/icons/python.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container sticker-container"><img className="sticker" src="./images/About/icons/sql.png" alt="" /></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}