import React from "react";
import Item from "../../components/Item";
import Colors from "../../utils/constants/colors";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Header/Header.module.css";
import { isMobile } from "react-device-detect";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export function BasicMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Item>
            <button className={styles.btn} onClick={() => navigate("/rules")}>
              Règles du jeu
            </button>
          </Item>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Item>
            <button className={styles.btn} onClick={() => navigate("/game")}>
              Espace de Jeu
            </button>
          </Item>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Item>
            <button className={styles.btn} onClick={() => navigate("/profile")}>
              Espace Client
            </button>
          </Item>
        </MenuItem>
        <MenuItem>
          <Item>
            <button className={styles.btn} onClick={() => navigate("/contact")}>
              Contact
            </button>
          </Item>
        </MenuItem>
        <MenuItem>
          <Item>
            <button className={styles.btn} onClick={() => navigate("/login")}>
              Connexion
            </button>
          </Item>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default function Header() {
  const navigate = useNavigate();
  return isMobile ? (
    <div
      className={styles.body}
      style={{
        backgroundColor: Colors.theTipTop,
        color: Colors.gray,
      }}
    >
      <div className={styles.logoContainer}>
        <Item onClick={() => navigate("/")}>
          <img src="/logo.png" width={39} height={41} alt="logo" />
        </Item>
      </div>
      <div className={styles.btnsContainer}>
        <BasicMenu />
      </div>
    </div>
  ) : (
    <div
      className={styles.body}
      style={{
        backgroundColor: Colors.theTipTop,
        color: Colors.gray,
      }}
    >
      <div className={styles.logoContainer}>
        <Item onClick={() => navigate("/")}>
          <img src="/logo.png" width={39} height={41} alt="logo" />
        </Item>
      </div>
      <div className={styles.btnsContainer}>
        <Item>
          <button className={styles.btn} onClick={() => navigate("/rules")}>
            Règles du jeu
          </button>
        </Item>
        <Item>
          <button className={styles.btn} onClick={() => navigate("/game")}>
            Espace de Jeu
          </button>
        </Item>
        <Item>
          <button className={styles.btn} onClick={() => navigate("/profile")}>
            Espace Client
          </button>
        </Item>
        <Item>
          <button className={styles.btn} onClick={() => navigate("/contact")}>
            Contact
          </button>
        </Item>
        <Item>
          <button className={styles.btn} onClick={() => navigate("/login")}>
            Connexion
          </button>
        </Item>
      </div>
    </div>
  );
}
