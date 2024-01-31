import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../config/constants";
import GridViewIcon from "@mui/icons-material/GridView";

export default function Navbar({
  width,
  isMobile,
  isOpen,
  onClose,
}: {
  width?: number;
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={width || 240}
      minWidth={width || 240}
      height={"100%"}
      borderRight={1}
      borderColor={"#ccc"}
      position={isMobile ? "absolute" : undefined}
      left={isOpen ? 0 : "-100%"}
      bgcolor={"#fff"}
      boxShadow={"0px 0px 5px #0006"}
      zIndex={100}
      onClick={(e) => e.stopPropagation()}
      sx={{
        transition: "0.3s all linear",
      }}
    >
      <Box
        p={2}
        pt={3}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img src="/logo.svg" alt="" width={"80%"} />
      </Box>
      <Box pt={1}>
        <List component={"nav"}>
          <ListItem onClick={onClose}>
            <NavLink to={ROUTES.dashboard} className={"nav-link"}>
              <ListItemButton>
                <ListItemIcon>
                  <GridViewIcon />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
