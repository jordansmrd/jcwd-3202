/** @format */
"use client";
import Button from "@mui/material/Button";
export default function Home() {
  return (
    <div>
      <Button variant="text" style={{ color: "red" }}>
        click me
      </Button>
      <Button variant="contained"> click me</Button>
      <Button variant="outlined"> click me</Button>
      <button>click me</button>
    </div>
  );
}
