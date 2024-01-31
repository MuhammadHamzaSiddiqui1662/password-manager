import { Box, Button, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../config/store";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { Credential } from "../../types/credential";

interface CredentialFormData extends Credential {}

interface Props {
  credential: Credential;
  onClose: () => void;
}

export default function CredentialModal({ credential, onClose }: Props) {
  const [formData, setFormData] = useState(credential);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.password || !formData.url)
      return console.log("All feilds are required");
    const payload = formData;
    // await dispatch(loginThunk(payload));
    // navigate(`../${ROUTES.verifyOtp}`);
    onClose();
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      height={"100%"}
      bgcolor={"#00000033"}
      zIndex={200}
      sx={{
        backdropFilter: "blur(1px)",
      }}
      onClick={onClose}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={600}
        bgcolor={"primary.contrastText"}
        borderRadius={1}
        overflow={"hidden"}
        boxShadow={"0px 0px 20px #0006"}
        component={"form"}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"primary.contrastText"}
          bgcolor={"primary.main"}
          p={2}
        >
          <Box></Box>
          <Typography>Edit Password</Typography>
          <CloseIcon onClick={onClose} />
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={"1fr 1fr"}
          columnGap={2}
          rowGap={3}
          p={4}
        >
          <TextField
            label="URL"
            name="url"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.url}
            onChange={handleChange}
            sx={{
              gridColumnStart: 1,
              gridColumnEnd: 3,
            }}
          />
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Folder"
            name="folder"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.folder}
            onChange={handleChange}
          />
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            label="Site Password"
            name="password"
            variant="outlined"
            size="small"
            fullWidth
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            label="Notes"
            name="notes"
            variant="outlined"
            size="small"
            fullWidth
            multiline
            rows={4}
            value={formData.notes}
            onChange={handleChange}
            sx={{
              gridColumnStart: 1,
              gridColumnEnd: 3,
            }}
          />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          gap={2}
          px={4}
          py={2}
          borderTop={1}
          borderColor={"rgba(0, 0, 0, 0.23)"}
        >
          <Button variant="outlined" sx={{ width: 140 }} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ width: 140 }}>
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
