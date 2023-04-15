import { Dialog, DialogContent, IconButton, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import LightPurpleButton from "../../../components/Buttons/LightPurpleButton";
import CancelIcon from "@mui/icons-material/Cancel";
import Swal from "sweetalert2";
import PropTypes from "prop-types";
import useValidationMessage from "../../../hooks/useValidationMessage";
import useAlert from "../../../hooks/useAlert";

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

const DonationForm = ({ open, setOpen, amount }) => {
  const { required, valid } = useValidationMessage();
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
      cardNumber: null,
      expirationDate: "",
      cvv: null,
    },
  });

  const onSubmit = () => {
    setOpen(false);
    success("Thank you for your donation!", "You migh just save a puppy.");
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
                  required: required.firstName,
                })}
                label="First name"
                id="outlined-size-small"
                size="normal"
                error={errors.firstName ? true : false}
                helperText={errors.firstName?.message}
              />
            </div>

            <div className="field">
              <TextField
                {...register("lastName", { required: required.lastName })}
                label="Last name"
                id="outlined-size-small"
                size="normal"
                error={errors.lastName ? true : false}
                helperText={errors.lastName?.message}
              />
            </div>
          </div>

          <TextField
            {...register("cardNumber", {
              required: required.cardNumber,
              pattern: {
                value: /(?:\d[ -]*?){13,16}/,
                message: valid.cardNumber,
              },
            })}
            label="Card number"
            id="outlined-size-small"
            size="normal"
            error={errors.cardNumber ? true : false}
            helperText={errors.cardNumber?.message}
          />

          <div className="fieldsWrap">
            <div className="field">
              <TextField
                {...register("expirationDate", {
                  required: required.expirationDate,
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/[0-9]{2}$/,
                    message: valid.expirationDate,
                  },
                })}
                label="Expiration date"
                id="outlined-size-small"
                size="normal"
                error={errors.expirationDate ? true : false}
                helperText={errors.expirationDate?.message}
              />
            </div>

            <div className="field">
              <TextField
                {...register("cvv", {
                  required: required.cvv,
                  pattern: {
                    value: /^[0-9]{3,4}$/,
                    message: valid.cvv,
                  },
                })}
                label="CVV"
                id="outlined-size-small"
                size="normal"
                error={errors.cvv ? true : false}
                helperText={errors.cvv?.message}
              />
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

DonationForm.propTypes = {
  open: PropTypes.any,
  setOpen: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

export default DonationForm;
