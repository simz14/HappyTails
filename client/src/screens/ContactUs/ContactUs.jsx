import React from "react";
import Layout from "../../components/Layout";
import PawsBcg from "../../components/PawsBcg";
import { Container } from "../../components/Container";
import styled from "styled-components";
import { DialogContent, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import PurpleButton from "../../components/Buttons/PuprleButton";
import ScrollTop from "../../components/ScrollTop";

const ContactUsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  .fieldsWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiDialogContent-root {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  button {
    justify-content: center;
  }
`;

const ContactUs = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = () => {
    Swal.fire("Your message was sent!", "", "success");
    reset();
  };

  return (
    <Layout>
      <ScrollTop />
      <PawsBcg>
        <Container>
          <ContactUsWrap>
            <div>
              <h1>Contact Us</h1>
              <p>
                Do not hesitate to contact us with any question you have. We are
                always here for you.
              </p>
              <div className="form">
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
                        error={errors.firstName ? true : false}
                        helperText={errors.firstName?.message}
                      />
                    </div>

                    <div className="field">
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
                    </div>
                  </div>

                  <div className="fieldsWrap">
                    <div className="field">
                      <TextField
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Email is invalid",
                          },
                        })}
                        label="Email"
                        id="outlined-size-small"
                        size="normal"
                        error={errors.email ? true : false}
                        helperText={errors.email?.message}
                      />
                    </div>

                    <div className="field">
                      <TextField
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        label="Subject"
                        id="outlined-size-small"
                        size="normal"
                        error={errors.subject ? true : false}
                        helperText={errors.subject?.message}
                      />
                    </div>
                  </div>

                  <div className="lastField">
                    <TextField
                      {...register("message", {
                        required: "Message is required",
                      })}
                      label="Message"
                      id="outlined-size-small"
                      size="normal"
                      error={errors.message ? true : false}
                      helperText={errors.message?.message}
                    />
                  </div>

                  <PurpleButton onClick={handleSubmit(onSubmit)} title="Send" />
                </DialogContent>
              </div>
            </div>

            <div></div>
          </ContactUsWrap>
        </Container>
      </PawsBcg>
    </Layout>
  );
};

export default ContactUs;
