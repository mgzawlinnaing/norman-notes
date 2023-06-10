import { SubjectOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  createTheme,
  styled,
} from "@mui/material";
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";
import marioAva from "../image/mario-av.png";

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const theme = createTheme();

  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <AppBar
        sx={{
          width: "calc(100% - 240px)",
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            mixing: theme.mixins.toolbar,
          }}
        >
          <Typography
            sx={{
              flexGrow: 1,
            }}
          >
            Hi, Welcome to Norman's Notes Website! 👋🤓 / Today is the{" "}
            {format(new Date(), "do MMMM Y")}.
          </Typography>
          <Typography>Matthew</Typography>
          <Avatar
            src={marioAva}
            sx={{
              marginLeft: theme.spacing(2),
            }}
          />
        </Toolbar>
      </AppBar>

      {/* sider-bar */}
      <Drawer
        sx={{
          width: 240,
          "& .MuiDrawer-paper": {
            width: 240,
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography
            variant="h5"
            sx={{
              padding: theme.spacing(2),
            }}
          >
            Norman's Notes
          </Typography>
        </div>

        {/* list / links */}
        <List>
          {menuItems.map((menuItem, index) => (
            <ListItem
              buttonbase="true"
              onClick={() => navigate(menuItem.path)}
              key={index}
              sx={{
                cursor: "pointer",
                transition: "background-color 0.1s ease",
                userSelect: "none",
                "&:hover": {
                  backgroundColor: "#eee",
                },
              }}
              style={
                location.pathname === menuItem.path
                  ? { background: "#f4f4f4" }
                  : null
              }
            >
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div
        style={{
          backgroundColor: "#f9f9f9",
          width: "100%",
          padding: theme.spacing(3),
        }}
      >
        <Offset />
        {children}
      </div>
    </div>
  );
}

export default Layout;
