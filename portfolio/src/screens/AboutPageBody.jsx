export function AboutPageBody() {
    return (
        <> 
            <div className="page-body">
                <div className="page-header header-container">
                    <h1 className="primary-h1 primary-color">
                        About.
                    </h1>
                </div>
                <div>
                    <div>
                        <ul className="grid grid-cols-2 board">
                            <li>
                                <div className="container paper-container"><img className="paper" src="./images/About/back-facing-1.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container paper-container"><img className="paper" src="./images/About/back-facing.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container paper-container"><img className="paper" src="./images/About/front-facing.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container paper-container"><img className="paper" src="./images/About/left-facing.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container paper-container"><img className="paper" src="./images/About/right-facing.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container paper-container"><img className="paper" src="./images/About/front-facing-1.png" alt="" /></div>
                            </li>
                            <li>
                                <div className="container paper-container"><img className="paper" src="./images/About/front-facing-2.png" alt="" /></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}