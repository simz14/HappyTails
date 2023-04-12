import { Dialog, DialogContent, IconButton, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import LightPurpleButton from "../../../components/Buttons/LightPurpleButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Swal from "sweetalert2";

const DialogWrap = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .MuiDialogContent-root {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  .MuiIconButton-root {
    position: absolute;
    top: -8px;
    right: -8px;
  }
  .fieldsWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  .field {
    width: 100%;
    .MuiFormControl-root {
      width: 100%;
    }
  }
  @media (max-width: 750px) {
    .fieldsWrap {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;

const ErrorMsg = styled.p`
  color: ${({ theme }) => theme.colors.brightYellow};
`;

const DonationForm = ({ open, setOpen, amount }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    setOpen(false);
    Swal.fire(
      "Thank you for your donation!",
      "You migh just save a puppy.",
      "success"
    );
    reset();
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogWrap>
        <h2>Donating {amount}$</h2>
        <DialogContent>
          <div className="fieldsWrap">
            <div className="field">
              <TextField
                {...register("firstName", {
                  required: "First name is required",
                })}
                label="First name"
                id="outlined-size-small"
                size="normal"
              />
              {errors.firstName && (
                <ErrorMsg role="alert">{errors.firstName.message}</ErrorMsg>
              )}
            </div>

            <div className="field">
              <TextField
                {...register("lastName", { required: "Last name is required" })}
                label="Last name"
                id="outlined-size-small"
                size="normal"
              />
              {errors.lastName && (
                <ErrorMsg role="alert">{errors.lastName.message}</ErrorMsg>
              )}
            </div>
          </div>

          <TextField
            {...register("cardNumber", { required: "Card number is required" })}
            label="Card number"
            id="outlined-size-small"
            size="normal"
          />
          {errors.cardNumber && (
            <ErrorMsg role="alert">{errors.cardNumber.message}</ErrorMsg>
          )}

          <div className="fieldsWrap">
            <div className="field">
              <TextField
                {...register("expirationDate", {
                  required: "Expiration date is required",
                })}
                label="Expiration date"
                id="outlined-size-small"
                size="normal"
              />
              {errors.expirationDate && (
                <ErrorMsg role="alert">
                  {errors.expirationDate.message}
                </ErrorMsg>
              )}
            </div>

            <div className="field">
              <TextField
                {...register("cvv", { required: "CVV is required" })}
                label="CVV"
                id="outlined-size-small"
                size="normal"
              />
              {errors.cvv && (
                <ErrorMsg role="alert">{errors.cvv.message}</ErrorMsg>
              )}
            </div>
          </div>
        </DialogContent>
        <LightPurpleButton onClick={handleSubmit(onSubmit)} title="Donate" />
        <IconButton onClick={() => setOpen(false)}>
          <CancelIcon />
        </IconButton>
      </DialogWrap>
    </Dialog>
  );
};

export default DonationForm;
