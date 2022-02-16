import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Products from './Components/Products';
import Contact from './Components/Contact';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';import Footer from './Components/Footer';
;


function App() {
  return (
  <>
     {/* <Nave/> */}
     {/* <Forms/> */}
     {/* <UnderlineLink/>
     <ComboBox/> */}
 <Router>
 <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor:"black"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
          </IconButton>
       <Typography  variant="h6" component="div" sx={{ flexGrow: 1 ,cursor:"pointer",color:"white"}}>
           <Link to="/home" style={{color:"white"}}>Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1  ,cursor:"pointer"}}>
          <Link to="/gallery">Gallery</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1  ,cursor:"pointer"}}>
          <Link to="/products">Products</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,cursor:"pointer" }}>
          <Link to="/contact">Contact Us</Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
          
              aria-haspopup="true"
              
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
             
              aria-haspopup="true"
             
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

    <Switch>
      <Route path="/home"  component={Home}/>
      <Route path="/gallery" extact component={Gallery}/>
      <Route path="/products" extact  component={Products}/>
      <Route path="/contact"  extact component={Contact}/>
    </Switch>
   </Router>
   <Footer/>

    
    </>
    );
}

export default App;
