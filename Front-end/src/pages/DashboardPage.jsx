import './pagescss/dashboard.css'

function Dashboard(){
    return(
        <>
            <div className="main-dashboard">
                <div className="user-dashboard">
                <div className="user-heading">
                    <h6>HI SAIDEEPGOUD,</h6>
                    <h4>WELCOME TO DIGITAL-WALLET</h4>
                </div>
                <div className="dashboard-items">
                    <div class="dashboard-layout">
                        <div class="item1 all-items">
                            <h4 className="card-text">Total balance</h4>
                            <div className="card-body">
                                <div className="card-item">
                                    <p>Earning</p>
                                </div>
                                <div className="card-item">
                                    <p>Spending</p>
                                </div>
                                <div className="card-buttons">
                                    <button className="btn btn-outline-light">Receive money</button>
                                    <button className="btn btn-outline-dark">Send money</button>
                                </div> 
                            </div>
                            <div className="card-matter">
                                <div className="card-matter-heading">Reach financial goals faster</div>
                                <p className="card-matter-text">Use your Digital-wallet card around the world with no hidden fees. Hold, transfer and spend money.</p>
                            </div>
                        </div>
                        <div class="item2 all-items">
                            <h5 className="card-text">Features</h5>
                        </div>
                        <div class="item3 all-items">
                            <h5 className="card-text">Get a Premium Account</h5>
                            <button className="btn btn-outline-info br-4">Get Now</button>
                        </div>
                        <div class="item4 all-items">
                            <h5 className="card-text">Your Cards</h5>
                        </div>
                        <div class="item5 all-items">
                            <h4 className="card-text">Your Cards</h4>
                            <div className="card-img">
                            <img className="fill-img" src="src/assets/image.png" alt="card" />
                            </div>
                        </div>
                        <div class="item6 all-items">
                            <h5 className="card-text">Quick Transfer</h5>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;