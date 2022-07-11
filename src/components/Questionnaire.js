import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../CPU_logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles"; 
import {Link} from "react-router";

function Questionnaire (){
    <div><h1>Oh hi</h1></div>
}

export default Questionnaire;

// const styles = makeStyles({
//     bar:{
//         paddingTop: "1.15rem",
//         backgroundColor: "#fff",
//         ['@media (max-width:780px)']: { 
//            flexDirection: "column"
//           }
//     },
//     logo: {
//         width: "5%", 
//         ['@media (max-width:780px)']: { 
//            display: "none"
//            }
//     },
//     logoMobile:{
//         width: "100%", 
//         display: "none", 
//         ['@media (max-width:780px)']: { 
//             display: "inline-block"
//             }
//     },
//     menuItem: {
//         cursor: "pointer", 
//         flexGrow: 1,
//         "&:hover": {
//             color:  "#4f25c8"
//         },
//         ['@media (max-width:780px)']: { 
//             paddingBottom: "1rem"    }
//     }
// })

// function NavBar() {
//     const classes = styles()
//     return (
//             <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>   
//                 <img src={logo} className={classes.logo}/> 
//                 <img src={logoMobile} className={classes.logoMobile}/> 
//                 <Typography variant="h6" className={classes.menuItem}>
//                     <Link to="/Questionnaire">Modify Questionnaires</Link>
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItem}>
//                     Survey
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItem}>
//                     Profile
//                 </Typography>
//                 {/* <Typography variant="h6" className={classes.menuItem}>
//                     Demos 
//                 </Typography>
//                 <Typography variant="h6" className={classes.menuItem}>
//                     Contact Us 
//                 </Typography> */}
//                 {/* <CustomBtn txt="Trial Our Product"/> */}
//             </Toolbar>
//     )
// }

// export default NavBar
