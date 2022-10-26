/*const App = () => {
  return (
    <div className="landing">
      <h1>Welcome to My DAO</h1>
    </div> );  };
    */
    import { useAddress, useMetamask } from '@thirdweb-dev/react'; 

const App = () => {
  // Use the hooks thirdweb give us.
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("👋 Address:", address);

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to FMU DAO</h1>
      
  <div id="wrapper">
    <header id="header">
      <nav 
      id="navbar">
        <ul ="nav-ul">

          <li><a href="#mycro">Mycro Farma
            </li>
            
            <li><a href="#BFFst">
              Best Friend Street</a>
            </li>

            <li><a href="#CBD">
              CBD from TX</a>
            </li>

            <li><a href="#FMU">Farmer's Market Union</li></a>
       
          </ul>
      </nav>
      <!-- NAV -->
 
    </header> <!--header -->

<!-- projects-->
    <div id="projects" >
              
      <section id="welcome-section" class="project-tile" >
        <h1 >IN THE 5th DIMENSION</h1>
      </section>
      <!-- 5D Farms-->
      <section >          
        <li class="mycro"><a href="www.mycropharma.com" target="_blank">Mycro Farma
        </li>
            
        <li class="BFFst">
              Best Friend Street
        </li>
        <li class="CBD">
              CBD from TX
        </li>
            <li class="FMU">Farmer's Market Union</li>
      </section>
     
      <section></section>
      <section></section>
     
        <section class="space"></section>
         <section class="space"></section>
          <section class="space"></section>
           <section class="space"></section>
            <section class="space"></section>
             <section class="space"></section>
              <section class="space"></section>
               <section class="space"></section>
                 <section class="space2"></section>
                   <section class="space2"></section>
                     <section class="space2"></section>
                       <section class="space2"></section>
                         <section class="space2"></section>
                           <section class="space2"></section>
                             <section class="space2"></section>
                               <section class="space2"></section>
    </div>
    <footer>
      <p id="profile-lnk"><a id="profile-link" href="https://ericprice.org" target="_blank"> My Profile</p>
    </footer>
  </div>

        <button onClick={connectWithMetamask} className="btn-hero">
          Connect your wallet
        </button>
      </div>   );
}

    return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>);
}
   
export default App;
