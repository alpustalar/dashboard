"use client";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import isEmpty from "lodash/isEmpty";

const DataGridComponent = ({ data, columns }) => {
  const [selectedRowIds, setSelectedRowIds] = useState(null);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setRows(data.map((item) => ({ ...item, id: item._id })));
    }
  }, [data]);

  const handleSelectionChange = (newSelection) =>
    setSelectedRowIds(newSelection);

  return (
    <>
      <Box
        sx={{
          height: { xs: 400, sm: 500, md: 600 },
          mt: 2,
          width: "80vw",
          overflowX: "auto",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pagination
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={handleSelectionChange}
        />
      </Box>
      {!isEmpty(selectedRowIds) && (
        <Stack>
          <Button variant="contained" color="error" onClick={() => ""}>
            <Typography
              sx={{ fontWeight: "bold", textTransform: "capitalize" }}
            >
              Seçtiklerimi Sil
            </Typography>
          </Button>
        </Stack>
      )}
    </>
  );
};

export default DataGridComponent;
