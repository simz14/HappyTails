import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PurpleButton from "../../../components/PuprleButton";
import PetsIcon from "@mui/icons-material/Pets";
import dayjs from "dayjs";
import { validateAdoptionData } from "../../../services/validations";

const AdoptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  .reason {
    grid-column: 1/3;
  }
  .button {
    grid-column: 1/3;
    & button {
      width: 100%;
      justify-content: center;
    }
  }
  .error {
    grid-column: 1/3;
    color: red;
    font-family: ${({ theme }) => theme.typography.family.basic};
    font-weight: ${({ theme }) => theme.typography.weight.thick};
  }
`;

const AdoptionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [reason, setReason] = useState("");
  const [age, setAge] = useState(null);
  const [date, setDate] = useState(dayjs("2023-04-20"));
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (state, value) => {
    state(value);
  };

  const handleClickAdoption = () => {
    try {
      validateAdoptionData({
        firstName,
        lastName,
        email,
        phone,
        reason,
        age,
        date,
      });
      setErrorMsg("");
    } catch (e) {
      setErrorMsg(e.message);
    }
  };

  return (
    <Container>
      <AdoptionWrapper>
        <TextField
          label="First name"
          id="outlined-size-small"
          defaultValue={firstName}
          size="normal"
          onChange={(e) => handleChange(setFirstName, e.target.value)}
        />
        <TextField
          label="Last name"
          id="outlined-size-small"
          defaultValue={lastName}
          size="normal"
          onChange={(e) => handleChange(setLastName, e.target.value)}
        />
        <TextField
          label="Age"
          id="outlined-size-small"
          defaultValue={age}
          size="normal"
          type="number"
          onChange={(e) => handleChange(setAge, e.target.value)}
        />
        <TextField
          label="Email adress"
          id="outlined-size-small"
          defaultValue={email}
          size="normal"
          onChange={(e) => handleChange(setEmail, e.target.value)}
        />
        <TextField
          label="Phone number"
          id="outlined-size-small"
          defaultValue={phone}
          size="normal"
          onChange={(e) => handleChange(setPhone, e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of meet"
            value={date}
            onChange={(e) => setDate(e)}
          />
        </LocalizationProvider>
        <TextField
          className="reason"
          label="Why did you choose this dog?"
          id="outlined-size-small"
          defaultValue={reason}
          size="normal"
          multiline
          rows={4}
          onChange={(e) => handleChange(setReason, e.target.value)}
        />
        <div className="button">
          <PurpleButton
            iconBefore={true}
            icon={<PetsIcon sx={{ fontSize: "large" }} />}
            title={"Start adoption"}
            onClick={handleClickAdoption}
          />
        </div>
        {errorMsg && <span className="error">{errorMsg}</span>}
      </AdoptionWrapper>
    </Container>
  );
};

export default AdoptionForm;
