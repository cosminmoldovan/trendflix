import Drawer from '@mui/material/Drawer';
import MobileDrawerContent from './MobileDrawerContent';


const drawerWidth = 240;


function MobileDrawer(props){
    return (
        <Drawer
        anchor="right"
        container={props.container}
        variant="temporary"
        open={props.toggler}
        onClose={props.handleToggler}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <MobileDrawerContent />
      </Drawer>
    );
}
export default MobileDrawer;