import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import apiClient from "../../Services/apiClient";
import { useSelector } from "react-redux/es/hooks/useSelector";

const StackItem = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const GroceryListPage = () => {
  const userId = useSelector((state) => state.userData.userId);
  const [groceryList, setGroceryList] = useState([]);
  const [makeQuery, setMakeQuery] = useState(0);

  // handle remove item from grocery list
  const handleRemoveItem = async (item) => {
    await apiClient.removeFromGroceryList(item);
    setMakeQuery(makeQuery + 1);
    console.log(`remove item`);
  };

  const getGroceryListFromDB = async () => {
    try {
      const res = await apiClient.getGroceryList({
        userId: 2,
      });
      const groceryListResponse = await res.data.groceryList;
      console.log(groceryListResponse);
      return groceryListResponse;
    } catch (e) {
      console.error(`error fetching data: ${e}`);
    }
  };

  useEffect(() => {
    const fetchGroceryList = async () => {
      const groceryListFromDB = await getGroceryListFromDB();
      setGroceryList(groceryListFromDB);
    };
    fetchGroceryList();
  }, [makeQuery]);

  return (
    groceryList.length > 0 && (
      <Box sx={{ minHeight: "88vh", backgroundColor: "#C98C93" }}>
        <Container maxWidth="sm">
          <Typography
            sx={{
              fontFamily: "cursive",
              fontSize: { xs: 40, md: 70 },
              color: "white",
              m: 8,
              fontWeight: "bold",
              textShadow: "1px 1px #999, 1px 1px #555, 2px 2px #333",
            }}
            variant="h1"
          >
            Grocery List
          </Typography>
          <Stack spacing={2} mb="20px">
            {groceryList.map((item, index) => {
              return (
                <StackItem
                  key={index}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "1rem", flex: "0.8" }}
                    style={{ fontWeight: "bold" }}
                  >
                    {item.item.toUpperCase()}
                  </Typography>
                  <Button
                    onClick={() => {
                      handleRemoveItem(item);
                    }}
                    variant="contained"
                    sx={{ backgroundColor: "black", color: "white" }}
                  >
                    Remove
                  </Button>
                </StackItem>
              );
            })}
          </Stack>
        </Container>
      </Box>
    )
  );
};

export default GroceryListPage;

// GroceryList lists what a user might need later on
