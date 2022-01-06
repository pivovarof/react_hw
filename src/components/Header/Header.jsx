
import { AppBar, Container, MenuItem, Toolbar, Typography  } from "@mui/material";
import BasicTabs from "./Menu";

const pages = ['Products', 'Pricing', 'Blog'];

function Header() {


    return (
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >HomeWorks</Typography>
                    
                </Toolbar>
            </Container>
        </AppBar>

    )


}

export default Header;