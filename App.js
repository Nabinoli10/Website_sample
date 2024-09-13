import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import tdLogo from './TD_Canada_Trust_logo.svg.png';
import image from './Untitled design(12).webp';
import chequeIcon from './icons8-cheque-24.png';
import cardIcon from './icons8-magnetic-card-48.png';
import mortgageIcon from './Designer.png';
import investingIcon from './PngItem_787571.png';
import borrowingIcon from './Borrow.png';
import postGradImage from './post.jpeg';
import studentImage from './student.jpeg';
import youthImage from './youth.jpeg';
import searchIcon from 'C:/Advance web application/class 5/my-app/src/magnifying-glass-solid.svg';
import locationIcon from 'C:/Advance web application/class 5/my-app/src/location-dot-solid.svg';
import 'font-awesome/css/font-awesome.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="App">
      {/* Top Navbar */}
      <div className="td-top-navbar">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Personal</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Small Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Commercial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Investing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About TD</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          {/* Left: TD Logo */}
          <Link className="navbar-brand" to="/">
            <img src={tdLogo} alt="TD Bank Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center Links */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">My Accounts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Ways to Bank</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Learn</Link>
              </li>
            </ul>

            {/* Right: Find Us, Help, Search Icons + Login/Logout Button */}
            <ul className="navbar-nav ms-auto">
              {/* Icons */}
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <img src={locationIcon} alt="Find Us" className="navbar-icon" /> Find Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fa fa-info-circle"></i> Help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <img src={searchIcon} alt="Search" className="navbar-icon" /> Search
                </Link>
              </li>

              {/* Login/Logout Button */}
{isLoggedIn ? (
  <li className="nav-item">
    <button className="btn btn-red" onClick={handleLogout}>Logout</button>
  </li>
) : (
  <li className="nav-item">
    <Link className="btn btn-green" to="/login">Login</Link>
  </li>
)}

            </ul>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/transactions" element={isLoggedIn ? <Transactions /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      {/* Welcome Message */}
      <div className="text-center welcome-message" style={{ marginBottom: '30px' }}>
        <h1>Welcome to TD Personal Banking</h1>
      </div>

      {/* Split screen section */}
      <div className="split-screen-section grid-container">
        {/* Left side - Image */}
        <div className="image-container">
          <img src={image} alt="Direct Investing Screenshot" className="left-image" />
        </div>

        {/* Right side - Promo Content */}
        <div className="promo-box">
          <h2>Still interested in Direct Investing?</h2>
          <p>We’re here with support every step of the way from a team of TD Direct Investing professionals.</p>
          <button className="open-account-btn">Open an account</button>
        </div>
      </div>

      {/* Banking Solutions Section */}
      <div className="container mt-5">
        <h2 className="text-center">Explore TD Canada Trust and related products and services</h2>
        <div className="row mt-4 text-center">
          <div className="col-md-4">
            <div className="feature-box">
              <div className="circle-icon">
                <img src={chequeIcon} alt="Find a Chequing Account" className="icon-img" />
              </div>
              <div>
                <h4 className="feature-heading">Find a chequing account</h4>
                <p>For daily spending, making bill payments, and more</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <div className="circle-icon">
                <img src={mortgageIcon} alt="Explore Mortgage Options" className="icon-img" />
              </div>
              <div>
                <h4 className="feature-heading">Explore mortgage options</h4>
                <p>Get specialized advice to help with your home ownership journey</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-box">
              <div className="circle-icon">
                <img src={cardIcon} alt="Find a Credit Card" className="icon-img" />
              </div>
              <div>
                <h4 className="feature-heading">Find a credit card</h4>
                <p>TD credit cards offer a host of benefits and features</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="feature-box">
              <div className="circle-icon">
                <img src={investingIcon} alt="Personal Investing" className="icon-img" />
              </div>
              <div>
                <h4 className="feature-heading">Personal investing</h4>
                <p>Registered plans and investments to help you reach your goals</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="feature-box">
              <div className="circle-icon">
                <img src={borrowingIcon} alt="Borrowing" className="icon-img" />
              </div>
              <div>
                <h4 className="feature-heading">Borrowing</h4>
                <p>Find a borrowing option that fits your life</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="container mt-5">
        <h2 className="text-center">Plan for your financial future with our unique banking solutions</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-center">
              <img src={youthImage} alt="Youth" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">I'm a teen/parent</h5>
                <p className="card-text">
                  It's never too late – or too early – to plan for your financial future. Check out our convenient banking options to help you grow and manage your money.
                </p>
                <button className="btn btn-outline-success">Get started</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center">
              <img src={studentImage} alt="Student" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">I'm a student</h5>
                <p className="card-text">
                  Discover TD banking solutions and resources to help you gain confidence about staying on top of your finances while in school.
                </p>
                <button className="btn btn-outline-success">Start planning</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card text-center">
              <img src={postGradImage} alt="Post Grad" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">I'm a post grad/young adult</h5>
                <p className="card-text">
                  From everyday banking to investment advice, we're here to help you improve your financial game.
                </p>
                <button className="btn btn-outline-success">Enter your next phase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center py-4">
        <h4>Need to talk to us directly? <a href="#" className="text-success">Contact us</a></h4>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">Privacy & Security</a></li>
          <li className="list-inline-item"><a href="#">Legal</a></li>
          <li className="list-inline-item"><a href="#">Accessibility</a></li>
          <li className="list-inline-item"><a href="#">About Us</a></li>
          <li className="list-inline-item"><a href="#">Careers</a></li>
          <li className="list-inline-item"><a href="#">Manage online experience</a></li>
          <li className="list-inline-item"><a href="#">Site Index</a></li>
        </ul>
        <div className="footer-bottom mt-3">
          <p>Regulated by CIRO | CIPF Member</p>
          <a href="#" className="text-success">CIRO AdvisorReport &gt;</a>
        </div>
      </div>
    </footer>
  );
};

const About = () => {
  return (
    <div className="container">
      <h1>About TD Bank</h1>
      <p>TD Bank has been a leader in financial services for decades, providing world-class service to its customers.</p>
    </div>
  );
};

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Define your credentials
  const validCredentials = {
    email: 'jhon112@gmail.com',
    password: 'asdfgh'
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (email === validCredentials.email && password === validCredentials.password) {
      setIsLoggedIn(true);
      navigate('/transactions');  // Redirect to transactions page
    } else {
      // Show error message for invalid credentials
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h1>Login to TD Bank</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {/* Show error message if credentials are invalid */}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        {/* Login and Register Buttons */}
        <div className="d-flex justify-content-start">
          <button type="submit" className="btn btn-green me-2">Login</button>
          <Link to="/signup" className="btn btn-outline-success">Register</Link>
        </div>

        {/* Forgot your username or password */}
        <div className="mt-3">
          <a href="#" className="text-muted">Forgot your username or password?</a>
        </div>

        {/* TD Online and Mobile Security Guarantee */}
        <div className="mt-2">
          <p className="text-muted small">TD Online and Mobile Security Guarantee: You are protected.</p>
        </div>
      </form>
    </div>
  );
};



const Signup = () => {
  return (
    <div className="container">
      <h1>Create a TD Bank Account</h1>
      <p>Sign up today to get started with our world-class banking services.</p>
    </div>
  );
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState('Deposit'); // Default to Deposit

  const handleTransaction = (transaction) => {
    const updatedTransaction = {
      ...transaction,
      balanceAfter: calculateBalance(transaction),
    };
    setTransactions([...transactions, updatedTransaction]);
  };

  const calculateBalance = (transaction) => {
    const lastBalance = transactions.length > 0 ? transactions[transactions.length - 1].balanceAfter : 0;
    if (transaction.type === 'Deposit') {
      return lastBalance + parseFloat(transaction.amount);
    } else if (transaction.type === 'Withdraw') {
      return lastBalance - parseFloat(transaction.amount);
    } else if (transaction.type === 'eTransfer') {
      return lastBalance - parseFloat(transaction.amount); // eTransfer reduces balance
    }
    return lastBalance;
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Banking Transactions</h1>
      <div className="text-center">
  <button className={`btn btn-deposit mr-2 ${transactionType === 'Deposit' ? 'active' : ''}`} onClick={() => setTransactionType('Deposit')}>
    Deposit
  </button>
  <button className={`btn btn-withdraw mr-2 ${transactionType === 'Withdraw' ? 'active' : ''}`} onClick={() => setTransactionType('Withdraw')}>
    Withdraw
  </button>
  <button className={`btn btn-etransfer ${transactionType === 'eTransfer' ? 'active' : ''}`} onClick={() => setTransactionType('eTransfer')}>
    eTransfer
  </button>
</div>


      <div className="row mt-4">
        <div className="col-md-12">
          <TransactionForm
            transactionType={transactionType}
            onSubmit={(accountNumber, amount, recipientEmail) =>
              handleTransaction({
                type: transactionType,
                accountNumber,
                amount,
                recipientEmail,
              })
            }
          />
        </div>
      </div>

      <h2 className="mt-5">Transaction History</h2>
      <table className="table table-bordered mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Account Number</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Recipient (if eTransfer)</th>
            <th>Balance After Transaction</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.accountNumber}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.type === 'eTransfer' ? transaction.recipientEmail : 'N/A'}</td>
              <td>{transaction.balanceAfter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function TransactionForm({ transactionType, onSubmit }) {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState(''); // For eTransfer

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transactionType === 'eTransfer' && (!accountNumber || !amount || !recipientEmail)) {
      // Ensure all fields are filled for eTransfer
      alert('Please fill in all fields for the eTransfer.');
      return;
    } else if (!accountNumber || !amount) {
      // Ensure all fields are filled for deposit/withdraw
      alert('Please fill in the account number and amount.');
      return;
    }

    onSubmit(accountNumber, amount, recipientEmail);
    setAccountNumber('');
    setAmount('');
    setRecipientEmail('');
  };

  const handleCancel = () => {
    setAccountNumber('');
    setAmount('');
    setRecipientEmail(''); // Clear email field
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <h3 className="text-center">{transactionType}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Account Number</label>
            <input
              type="text"
              className="form-control"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          {/* Show recipient email field only for eTransfer */}
          {transactionType === 'eTransfer' && (
            <div className="form-group">
              <label>Recipient Email</label>
              <input
                type="email"
                className="form-control"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                required
              />
            </div>
          )}

          <button type="submit" className={`btn btn-${transactionType.toLowerCase()} btn-block mt-3`}>
            {transactionType}
          </button>
          <button type="button" className="btn btn-red btn-block mt-3" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
