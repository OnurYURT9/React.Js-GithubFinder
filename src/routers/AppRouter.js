import React from  'react';
import { BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';


const Nav = () => (  
     <nav>
     <NavLink to="/" activeClassName="active">Home</NavLink> |
     <NavLink to="/contact" activeClassName="active" >Contact</NavLink> |
     <NavLink to="/product" activeClassName="active">Product</NavLink>  |
    </nav>
);
const Header = () => (
    <header>
        <h1>Github Finder</h1>
    </header>
);
 const HomePage = () => (
     <>
    <div>Home Page</div>
    
    </>
 );
 const ContactPage = () => (
    <>
    <div>Contact Page</div>
    
    </>
 );
 const ProductPage = () => (
    <>
    <div>Product Page</div>
   
    </>
 );
 const NotFoundPage = () => (
    <>
    <div>NotFound Page</div>
   
    </>
 );
 const AppRouter = ()=> {
    <BrowserRouter> 
    <Header/>
    <Nav/>
       <Switch>
       <Route exact path="/" component={HomePage} />
       <Route path="/contact" component={ContactPage} />
       <Route path="/product" component={ProductPage} />
       <Route  component={NotFoundPage} />
       </Switch>
   </BrowserRouter>
 };


export default AppRouter;