import {createTheme} from "@material-ui/core/styles";

const peach = "#FDEFEF";
const pink = "#F4DFD0";
const biege = "#DAD0C2";
const coffee = "#CDBBA7";


export const theme = createTheme({
    palette: {
        background: {
            default:`${peach}`
        },
        primary: {
            main: `${biege}`
        },
        secondary: {
            main: `${coffee}`
        },
    },
    typography: {
        fontFamily: "Pacifico",
        h1: {
            fontSize: "6.5rem",
            color:`${coffee}`,
        },
        p: {
            fontFamily: "Merriweather",
            
        },
    },

    spacing: 5,

    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                padding: "10px",
                backgroundColor: `${pink}`

            }
        },
        MuiTypography:{
            root: {
                margin: "50px auto",
            }
        }
    }


})