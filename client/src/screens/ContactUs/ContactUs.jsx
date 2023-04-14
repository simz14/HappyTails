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
import ShelterInfo from "./components/ShelterInfo";
import { Spacer } from "../../components/Spacer";
import AskedQuestions from "../../components/AskedQuestions/AskedQuestions";
import OurPartnersSection from "../../components/PartnersSection";
import { Helmet } from "react-helmet-async";

const ContactUsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: start;
  gap: 5%;
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
    padding: 0;
  }
  button {
    justify-content: center;
  }

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
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
      <Helmet>
        <html lang="en" />
        <title>Conatct Us - HappyTails</title>
        <meta
          name="description"
          content="Have questions or want to get in touch with our dog shelter? Our team is here to help. Whether you're interested in adopting, volunteering, or donating, we're happy to assist you in any way we can. Reach out to us today and let's make a difference in the lives of dogs in need."
        />
      </Helmet>
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
            <div>
              <ShelterInfo />
            </div>
            <Spacer size="s" />
          </ContactUsWrap>
        </Container>
      </PawsBcg>
      <AskedQuestions />
      <OurPartnersSection />
    </Layout>
  );
};

export default ContactUs;
