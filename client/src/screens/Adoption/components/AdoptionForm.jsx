import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PurpleButton from "../../../components/Buttons/PuprleButton";
import PetsIcon from "@mui/icons-material/Pets";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAlert from "../../../hooks/alert";

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
  const { success } = useAlert();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: null,
      email: "",
      phoneNumber: null,
      date: dayjs(Date.now()),
      reason: "",
    },
  });

  const handleClickAdoption = () => {
    success("And it's done.", "We look forward to meeting you!");
    reset();
  };

  return (
    <Container>
      <AdoptionWrapper>
        <TextField
          {...register("firstName", {
            required: "First name is required",
          })}
          label="First name"
          id="outlined-size-small"
          size="normal"
          error={errors.firstName ? true : false}
          helperText={errors.firstName?.message}
        />
        <TextField
          {...register("lastName", {
            required: "Last name is required",
          })}
          label="Last name"
          id="outlined-size-small"
          size="normal"
          error={errors.lastName ? true : false}
          helperText={errors.lastName?.message}
        />
        <TextField
          {...register("age", {
            required: "Age is required",
          })}
          label="Age"
          id="outlined-size-small"
          size="normal"
          type="number"
          error={errors.age ? true : false}
          helperText={errors.age?.message}
        />
        <TextField
          {...register("email", {
            required: "Email adress is required",
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Email is invalid",
            },
          })}
          label="Email adress"
          id="outlined-size-small"
          size="normal"
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />
        <TextField
          {...register("phoneNumber", {
            required: "Phone number is required",
          })}
          label="Phone number"
          id="outlined-size-small"
          size="normal"
          error={errors.phoneNumber ? true : false}
          helperText={errors.phoneNumber?.message}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            {...register("date", {
              required: "Date of meet is required",
            })}
            label="Date of meet"
            error={errors.date ? true : false}
            helperText={errors.date?.message}
          />
        </LocalizationProvider>
        <TextField
          {...register("reason", {
            required: "Reason is required",
          })}
          className="reason"
          label="Why did you choose this dog?"
          id="outlined-size-small"
          size="normal"
          multiline
          rows={4}
          error={errors.reason ? true : false}
          helperText={errors.reason?.message}
        />
        <div className="button">
          <PurpleButton
            iconBefore={true}
            icon={<PetsIcon sx={{ fontSize: "large" }} />}
            title={"Start adoption"}
            onClick={handleSubmit(handleClickAdoption)}
          />
        </div>
      </AdoptionWrapper>
    </Container>
  );
};

export default AdoptionForm;
