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

// styling for grocery list item container
const StackItem = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

const GroceryListPage = () => {
  /* Redux State */
  const userId = useSelector((state) => state.userData.userId);

  console.log(`userID from redux: ${userId}`);
  /* Local State */
  const [groceryList, setGroceryList] = useState([]);
  const [makeQuery, setMakeQuery] = useState(0);

  // handle remove item from grocery list db
  // increase makeQuery to trigger useEffect
  const handleRemoveItem = async (item) => {
    await apiClient.removeFromGroceryList(item);
    setMakeQuery(makeQuery + 1);
  };

  // fetch grocery list from db
  const getGroceryListFromDB = async () => {
    try {
      console.log(`userId ${userId}`);
      if (userId) {
        console.log(`userId inside ${userId}`);
        const res = await apiClient.getGroceryList({
          userId: userId,
        });
        const groceryListResponse = await res.data.groceryList;
        return groceryListResponse;
      }
    } catch (e) {
      console.error(`error fetching data: ${e}`);
    }
  };

  // fetch grocery list from db on page load and when makeQuery is updated
  useEffect(() => {
    const fetchGroceryList = async () => {
      const groceryListFromDB = await getGroceryListFromDB();
      setGroceryList(groceryListFromDB);
    };
    fetchGroceryList();
  }, [makeQuery, userId]);

  return (
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
          {groceryList?.length > 0 &&
            groceryList.map((item, index) => {
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
  );
};

export default GroceryListPage;

// GroceryList lists what a user might need later on
