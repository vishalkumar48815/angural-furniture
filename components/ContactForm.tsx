"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";

export default function AboutContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 8,
        p: 4,
        borderRadius: 3,
        backgroundColor: "#FAF7F2",
      }}
    >
      <Typography variant="h5" fontWeight={600} mb={2}>
        Enquire About Custom Furniture
      </Typography>

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Message sent successfully!
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <TextField
        name="name"
        label="Your Name"
        fullWidth
        required
        margin="normal"
      />

      <TextField
        name="phone"
        label="Phone Number"
        fullWidth
        required
        margin="normal"
      />

      <TextField
        name="message"
        label="Your Requirement"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading}
        sx={{
          mt: 2,
          backgroundColor: "#6B4F2C",
          "&:hover": { backgroundColor: "#5a4022" },
        }}
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </Button>
    </Box>
  );
}
