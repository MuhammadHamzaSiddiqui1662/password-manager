import { Box, Typography } from "@mui/material";
import CredentialCard from "../../components/CredentialCard/CredentialCard";
import CredentialModal from "../../modals/CredentialModal/CredentialModal";
import { useState } from "react";
import { Credential } from "../../types/credential";

const CREDENTIALS: Credential[] = [
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
  {
    url: "abc.com",
    name: "Hamza",
    username: "hamza@gmail.com",
    password: "xxxx",
    folder: "abc",
    notes: "test",
  },
];

const emptyCredential: Credential = {
  url: "",
  name: "",
  username: "",
  password: "",
  folder: "",
  notes: "",
};

export default function Dashboard() {
  const [selectedCredential, setSelectedCredential] =
    useState<Credential | null>(null);
  return (
    <Box p={4} display={"flex"} flexDirection={"column"} gap={3}>
      <Typography variant="h4">Dashboard</Typography>
      <Box display={"flex"} flexWrap={"wrap"} gap={2}>
        {CREDENTIALS.map((credential, index) => (
          <CredentialCard
            key={index}
            credential={credential}
            onClick={() => setSelectedCredential(credential)}
          />
        ))}
        {selectedCredential && (
          <CredentialModal
            credential={selectedCredential}
            onClose={() => setSelectedCredential(null)}
          />
        )}
      </Box>
    </Box>
  );
}
