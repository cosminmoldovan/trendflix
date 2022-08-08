import Drawer from '@mui/material/Drawer';
import DrawerContent from './DrawerContent';

const drawerWidth = 240;

function DesktopDrawer(){
    return (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <DrawerContent />
        </Drawer>
    );
}
export default DesktopDrawer;