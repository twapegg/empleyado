"use client";
import Image from "next/image";
import { useAppContext } from "@/context";
import { Box, Typography, Container, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useAppContext();
  const [records, setRecords] = useState([]);
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");

  useEffect(() => {

    const timeInLocal = localStorage.getItem("timeIn");

    if (timeInLocal) {
      setTimeIn(timeInLocal);
    }

    try {
      fetch(`/api/records/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            setRecords(data);
          });
        }
      });
    } catch (error) {
      console.error("An unexpected error happened", error);
    }
  }, [user]);

  const columns: GridColDef[] = [
    {
      field: "Time_In",
      headerName: "Time In",
      type: "string",
      width: 150,
    },
    {
      field: "Time_Out",
      headerName: "Time Out",
      type: "string",
      width: 150,
    },
    {
      field: "Date",
      headerName: "Date",
      type: "string",
      width: 150,
    },
  ];

  const handleTimeIn = () => {
    localStorage.setItem("timeIn", new Date().toLocaleTimeString());
  }

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box height={"300px"}>
          <DataGrid
            rows={records}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
  
      </Box>
    </Container>
  );
}
