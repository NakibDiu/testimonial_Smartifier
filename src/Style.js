import {makeStyles} from '@material-ui/styles';


const useStyle = makeStyles(() => ({
    mainContainer: {
        overflowX: "hidden",
        background: "transparent linear-gradient(180deg, #5D00A5 0%, #002461 100%) 0% 0% no-repeat padding-box",
        minWidth: '100%',
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        // clipPath: "polygon(61% 31%, 47% 19%, 28% 30%, 14% 22%, 0% 41%, 100% 41%, 87% 34%, 77% 18%)"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "5% 0",
        position: "relative"
    },
    card: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        background: "transparent linear-gradient(180deg, #966BC2 0%, #437BBE6E 100%) 0% 0% no-repeat padding-box",
        marginBottom: "0",
        ['@media (max-width: 550px)'] : {
            flexDirection: "column",
            justifyContent: "center"
        }
    },
    imageContainer: {
        flexBasis: "20%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2%",
        flexDirection: "column"
    },
    image: {
        height: "150px",
        width: "150px",
        marginBottom: "5%"
    },
    content: {
        flexBasis: "70%",
        color: "white",
        ['@media (max-width: 550px)']: {
            // padding: "0 8%",
            textAlign: "left"
        }
    },
    box: {
        position: "relative",
        height: "190px",
        width: "min(192, 95%)",
        background: " transparent linear-gradient(180deg, #D793DAAB 0%, #1D7FBB 100%) 0% 0% no-repeat padding-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "0",
        bottom: "40px",
        borderRadius: "5px"
    },
    text: {
        color: "white",
        fontSize: "20px"
    },   
}))

export default useStyle;