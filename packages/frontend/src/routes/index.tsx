import { css } from "#styled-system/css";
import { Center, CenterProps, Flex, styled } from "#styled-system/jsx";
import Button from "@codegouvfr/react-dsfr/Button";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { Tabs } from "../components/Tabs";
import { useUser } from "../contexts/AuthContext";

const Index = () => {
  const user = useUser()!;

  const options = [
    { id: "my", label: user.name },
    { id: "udap", label: "UDAP" },
  ];

  return (
    <Flex direction="column">
      <Banner pt="30px" pb="40px">
        <styled.div color="text-title-blue-france" fontSize="18px" fontWeight="bold">
          Compte-rendu VIF
        </styled.div>
        <Button className={css({ mt: "15px" })} iconId="ri-add-line">
          Créer un compte-rendu
        </Button>
      </Banner>

      <Tabs.Root defaultValue="my">
        <Tabs.List>
          {options.map((option) => (
            <Tabs.Trigger key={option.id} value={option.id}>
              {option.label}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="my">Know React? Check out Solid!</Tabs.Content>
        <Tabs.Content value="udap">Know Solid? Check out Svelte!</Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
  beforeLoad: ({ context, location }) => {
    if (!context.token || !context.user) {
      throw redirect({ to: "/login", search: { redirect: location.href } });
    }
  },
});

const Banner = (props: CenterProps) => {
  return <Center flexDir="column" bgColor="background-open-blue-france" {...props} />;
};
