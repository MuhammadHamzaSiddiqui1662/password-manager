import { Box, BoxProps, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { Credential } from "../../types/credential";

interface Props extends BoxProps {
  credential: Credential;
}

export default function CredentialCard({ credential, ...boxProps }: Props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={8}
      p={2}
      color={"primary.main"}
      bgcolor={"primary.contrastText"}
      border={1}
      borderColor={"primary.main"}
      borderRadius={2}
      minWidth={250}
      width={"fit-content"}
      boxShadow={"1px 1px 3px #0004"}
      sx={{
        "&:hover": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          cursor: "pointer",

          "& .card-buttons": {
            display: "block",
          },
        },
      }}
      {...boxProps}
    >
      <Box mt={1}>
        <Typography variant="h5" fontWeight={600}>
          {credential.name}
        </Typography>
        <Typography>{credential.username}</Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-end"}
      >
        <Box display={"flex"}>
          <Typography
            pr={1}
            lineHeight={1}
            display={"none"}
            className="card-buttons"
          >
            Edit
          </Typography>
          <Typography
            pl={1}
            borderLeft={1}
            lineHeight={1}
            display={"none"}
            className="card-buttons"
          >
            Delete
          </Typography>
        </Box>
        <LockIcon />
      </Box>
    </Box>
  );
}
