import React, { useState } from "react";
import qrcode from "qrcode";
import { Input, Button } from "@mui/material";
import "./QRCode.css";

const QRCode = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const generateQRCode = () => {
    qrcode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) throw new Error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Generator</h1>
      <Input
        className="input"
        placeholder="e.g. https://qyrus.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button variant="contained" onClick={generateQRCode}>
        Generated
      </Button>
      {qr && (
        <>
          <img src={qr} alt="qrcode" />
          <Button
            variant="contained"
            color="success"
            href={qr}
            download="qrcode.png"
          >
            Download
          </Button>
        </>
      )}
    </div>
  );
};

export default QRCode;
