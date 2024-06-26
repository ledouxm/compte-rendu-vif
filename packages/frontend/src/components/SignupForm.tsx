import { Divider, Flex, styled } from "#styled-system/jsx";
import { UseFormReturn, useForm, useWatch } from "react-hook-form";
import { RouterInputs, trpc } from "../api";
import Input from "@codegouvfr/react-dsfr/Input";
import { PasswordInput } from "./PasswordInput";
import { FullWidthButton } from "./FullWidthButton";
import { css } from "#styled-system/css";
import { Link } from "@tanstack/react-router";
import { InputGroup } from "./InputGroup";
import Alert from "@codegouvfr/react-dsfr/Alert";
import { useAuthContext } from "../contexts/AuthContext";

export const SignupForm = () => {
  const form = useForm<RouterInputs["createUser"]>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [_, setData] = useAuthContext();

  const mutation = trpc.createUser.useMutation();

  const signup = async (values: RouterInputs["createUser"]) => {
    const response = await mutation.mutateAsync(values);
    setData(response);
    console.log(response.user);
  };

  const { errors: formErrors } = form.formState;
  const { error: mutationError } = mutation;

  console.log(JSON.stringify(mutationError, null, 2));
  console.log(mutationError?.data);

  return (
    <Flex direction="column">
      <form onSubmit={form.handleSubmit(signup)}>
        {mutationError ? (
          <Alert
            className={css({ mb: "1.5rem" })}
            severity="error"
            title={<styled.span fontWeight="regular">{mutationError.message}</styled.span>}
          />
        ) : null}
        <InputGroup state={mutationError ? "error" : undefined}>
          <Input
            label="Nom"
            nativeInputProps={{ ...form.register("name", { required: "Le nom est requis" }) }}
            state={formErrors.name ? "error" : undefined}
            stateRelatedMessage={formErrors.name?.message}
          />
          <Input
            label="Courriel"
            hintText="prenom.nom@culture.gouv.fr"
            nativeInputProps={{
              type: "email",
              autoComplete: "username",
              ...form.register("email", {
                required: "Le courriel est requis",
                pattern: { value: /\S+@\S+\.\S+/, message: "Le courriel n'est pas valide" },
              }),
            }}
            state={formErrors.email ? "error" : undefined}
            stateRelatedMessage={formErrors.email?.message}
          />

          <SignupPasswordInput form={form} />
        </InputGroup>

        <FullWidthButton className={css({ mt: "1.5rem" })} type="submit">
          Valider
        </FullWidthButton>
      </form>

      <Divider my="20px" color="#DDDDDD" />

      <h5>Vous avez déjà un compte ?</h5>

      <FullWidthButton priority="secondary" linkProps={{ to: "/login" }}>
        Se connecter
      </FullWidthButton>
    </Flex>
  );
};

const SignupPasswordInput = ({ form }: { form: UseFormReturn<RouterInputs["createUser"]> }) => {
  const value = useWatch({ control: form.control, name: "password" });

  const hasNumber = /\d/.test(value);
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasSpecial = /[^A-Za-z0-9]/.test(value);

  const formErrors = form.formState.errors;

  return (
    <PasswordInput
      state={formErrors.password ? "error" : undefined}
      messages={
        formErrors.password
          ? [
              {
                message: "Un chiffre",
                severity: hasNumber ? "valid" : "error",
              },
              {
                message: "Une majuscule",
                severity: hasUpperCase ? "valid" : "error",
              },
              {
                message: "Une minuscule",
                severity: hasLowerCase ? "valid" : "error",
              },
              {
                message: "Un caractère spécial",
                severity: hasSpecial ? "valid" : "error",
              },
            ]
          : []
      }
      nativeInputProps={form.register("password", {
        required: "Le mot de passe est requis",
        minLength: {
          value: 8,
          message: "Le mot de passe doit contenir au moins 8 caractères",
        },
        validate: () => {
          const isValid = hasNumber && hasUpperCase && hasLowerCase && hasSpecial;

          return isValid || "Mot de passe invalide";
        },
      })}
    />
  );
};
