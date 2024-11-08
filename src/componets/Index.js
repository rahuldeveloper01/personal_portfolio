import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  DialogContentText,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Paper,
  TextField,
  Typography,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
  TableCell,
  List,
  Grid,
  ListItem,
  Collapse,
  ListItemText,
  Select,
  FormHelperText,
  // FormControl
  CardMedia,
  Card,
  CardActions,
  CardContent,
  Avatar,
} from "@mui/material";

//icons
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";
// import JPG from "../assests/Jpg";

import Header from "./defaultLayout/header/Header";
import Footer from "./defaultLayout/footer/Footer";
import PNG from "../assests/Png";

export const Toast = () => {
  return <ToastContainer />;
};
export default {
  Header,
  Footer,
  //images
  Avatar,
  CardMedia,
  PNG,
  // JPG,
  toast,
  Grid,
  Card,
  CardActions,
  CardContent,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography,
  DialogContentText,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  Paper,
  Select,
  FormHelperText,
  // FormControl,
  TextField,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableContainer,
  TableCell,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  //icons
  DeleteIcon,
  DoneIcon,
  EditIcon,
  ExpandLess,
  ExpandMore,
  CloudUploadIcon,

  //link
  Link,
};
