import './Home.css';

function Home() {
  return (
    <>
    <div className="first">
    <div className="main-home-container">
      <div className="text-container">
      <h1>Start spending <br/>the <span>smart</span> way</h1>
      <p>An innovative payment gateway solution, designed to facilitate digital transactions safely, quickly and efficiently.</p>
      </div> 
      <div className="image-container"><img className="img" src="src/assets/Credit-Card-Mockup-New.png" alt="credit-image" /></div>
    </div>
    </div>
    <div className="second" >
      <div className="features">
        <p className="feature-text">Your Digital Wallet for a <br/>Cashless World</p>
        <div className="container card-container">
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">WALLET <img className="card-logo" src="src/assets/main-logos/wallet.png" alt="wallet" /></h4>
                  <hr/>
                  <p className="card-text">
                    <ul>
                      <li>Add and store money securely</li>
                      <li>view wallet balance</li>
                      <li>Track wallet transactions</li>
                      <li>Fast and safe digital payments</li>
                    </ul>
                  </p>
                  <button className="btn btn-warning">GO</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">CARDS <img className="card-logo" src="src/assets/main-logos/credit-card.png" alt="credit-card" /></h4>
                  <hr/>
                  <p className="card-text">
                    <ul>
                      <li>Manage debit/credit cards</li>
                      <li>Add or remove saved cards</li>
                      <li>Secure card storage with encryption</li>
                      <li>Use cards for quick payments</li>
                    </ul>
                  </p>
                  <button className="btn btn-warning">GO</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">TRANSFERS <img className="card-logo" src="src/assets/main-logos/money-exchange.png" alt="money-exchange" /></h4>
                  <hr/>
                  <p className="card-text">
                    <ul>
                      <li>Send money to any user instantly</li>
                      <li>Receive funds securely</li>
                      <li>Check transfer history</li>
                      <li>Fast, cashless transactions anytime</li>
                    </ul>
                  </p>
                  <button className="btn btn-warning">GO</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">BUSINESS <img className="card-logo" src="src/assets/main-logos/growth.png" alt="growth" /></h4>
                  <hr/>
                  <p className="card-text">
                    <ul>
                      <li>Manage business payments</li>
                      <li>Accept customer transactions</li>
                      <li>Track business earnings</li>
                      <li>Secure and reliable for merchants</li>
                    </ul>
                  </p>
                  <button className="btn btn-warning">GO</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">PRICING <img className="card-logo" src="src/assets/main-logos/best-price.png" alt="best-price" /></h4>
                  <hr/>
                  <p className="card-text">
                    <ul>
                      <li>Transparent and affordable service charges</li>
                      <li>No hidden fees</li>
                      <li>Low-cost transactions</li>
                      <li>Flexible plans for all users</li>
                    </ul>
                  </p>
                  <button className="btn btn-warning">GO</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">ADD MONEY <img className="card-logo" src="src/assets/main-logos/savings.png" alt="savings" /></h4>
                  <hr/>
                  <p className="card-text">
                    <ul>
                      <li>Add funds instantly to your wallet</li>
                      <li>Supports cards, UPI, and bank transfers</li>
                      <li>Secure and fast processing</li>
                      <li>View updated balance immediately</li>
                    </ul>
                  </p>
                  <button className="btn btn-warning">GO</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">SEND MONEY <img className="card-logo" src="src/assets/main-logos/donation.png" alt="donation" /></h4>
                  <hr/>
                  <p className="card-text">
                    <ul>
                      <li>Transfer money to anyone instantly</li>
                      <li>Safe and encrypted transactions</li>
                      <li>Send to contacts, bank accounts, or wallet users</li>
                      <li>Track transfers in real time</li>
                    </ul>
                  </p>
                  <button className="btn btn-warning">GO</button>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <h4 className="card-title">REWARDS <img className="card-logo" src="src/assets/main-logos/trophy.png" alt="trophy" /></h4>
                  <hr/>
                  <p className="card-text">
                    <ul>
                      <li>Earn cashback on transactions</li>
                      <li>Get exclusive wallet offers</li>
                      <li>Daily deals and bonus points</li>
                      <li>Redeem rewards anytime</li>
                    </ul>
                  </p>
                  <button className="btn btn-warning">GO</button>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="third" >
      <div className="logo-slider">
        <div className="logo-track">
          <img className="scroll-logo" src="src/assets/main-gifs/wallet.gif" alt="wallet" />
          <img className="scroll-logo" src="src/assets/main-gifs/credit-card.gif" alt="credit-card" />
          <img className="scroll-logo" src="src/assets/main-gifs/trophy.gif" alt="trophy" />
          <img className="scroll-logo" src="src/assets/main-gifs/savings.gif" alt="savings" />
          <img className="scroll-logo" src="src/assets/main-gifs/money-exchange.gif" alt="money-exchange" />
          <img className="scroll-logo" src="src/assets/main-gifs/growth.gif" alt="growth" />
          <img className="scroll-logo" src="src/assets/main-gifs/donation.gif" alt="donation" />
          <img className="scroll-logo" src="src/assets/main-gifs/best-price.gif" alt="best-price" />
          {/* duplicate for smooth infinite scrolling */}
          <img className="scroll-logo" src="src/assets/main-gifs/wallet.gif" alt="wallet" />
          <img className="scroll-logo" src="src/assets/main-gifs/credit-card.gif" alt="credit-card" />
          <img className="scroll-logo" src="src/assets/main-gifs/trophy.gif" alt="trophy" />
          <img className="scroll-logo" src="src/assets/main-gifs/savings.gif" alt="savings" />
          <img className="scroll-logo" src="src/assets/main-gifs/money-exchange.gif" alt="money-exchange" />
          <img className="scroll-logo" src="src/assets/main-gifs/growth.gif" alt="growth" />
          <img className="scroll-logo" src="src/assets/main-gifs/donation.gif" alt="donation" />
          <img className="scroll-logo" src="src/assets/main-gifs/best-price.gif" alt="best-price" />
        </div>
      </div>
    </div>
    <div className="forth">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="5000">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      </div>
      <div className="carousel-item" data-bs-interval="5000">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </div>
      <div className="carousel-item" data-bs-interval="5000">
      <img src="..." className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    </div>
    <div className="fifth">
      <div className="registration">
          <div className="text-container">
          <h1>our easy steps<br/>for <span>Registration</span></h1>
          <p className="register-text">After signing up or logging in, every user is seamlessly guided through a quick registration and profile
             verification process to activate their digital wallet. This setup collects essential identity details—such as name, email, and mobile number—followed by a secure OTP verification to validate the user’s 
            contact information. Once verified, the system automatically creates a dedicated wallet account, enabling the user to access their personalized dashboard. From there, they can add money, link payment cards, 
            transfer funds, track transactions, and manage beneficiaries. For users who require higher transaction 
            limits or enhanced security features, an optional KYC verification process is available at any time.</p>
          </div> 
          <div className="register-container">
          <div className="register-image-container"><img className="img" src="src/assets/credit_cards.webp" alt="credit-image" /></div>
          <div className="register-steps">
            <ul>
              <li>Basic identity details (Name, Email, Mobile Number,Pancard Number)</li>
              <li>Secure OTP verification</li>
              <li>Automatic creation of your wallet account</li>
              <li>Instant access to your dashboard</li>
              <li>Ability to add money, save cards, and manage beneficiaries</li>
              <li>Optional KYC for higher limits and advanced security</li>
            </ul>
          </div>
          </div>
      </div>
    </div>
    </>
  );
}
export default Home;