import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  SegmentedControl,
  Title,
  Grid,
  Button,
  Modal,
  Group,
  Box,
} from "@mantine/core";
import { HeaderMegaMenu } from "./Header";
import { DataTable } from "mantine-datatable";
import companies from "./companies.json";
import { SideBar } from "./SideBar";
import { ColorToggle } from "./ColorToggle";
import { AddFormModal } from "./Modal";
import { useDisclosure } from "@mantine/hooks";

export default function SiteInfo() {
  const theme = useMantineTheme();
  const [userType, setUserType] = useState("admin");
  const [opened, setOpened] = useState(false);

  const [openedModal, { close, open }] = useDisclosure(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        userType === "admin" ? (
          <Navbar
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
          >
            <SideBar />
          </Navbar>
        ) : (
          <></>
        )
      }
      header={
        userType === "admin" ? (
          <Header height={70}>
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Admin header</Text>
              <SegmentedControl
                value={userType}
                onChange={setUserType}
                data={[
                  { label: "User", value: "user" },
                  { label: "Admin", value: "admin" },
                ]}
              />
              <ColorToggle />
            </div>
          </Header>
        ) : (
          <HeaderMegaMenu />
        )
      }
    >
      <Group position="apart" mt="md">
        <Title>Site Information</Title>
        <AddFormModal />
      </Group>
      <Box >
      <DataTable
        columns={[
          { accessor: "name" },
          { accessor: "streetAddress" },
          { accessor: "city" },
          { accessor: "state" },
        ]}
        records={companies}
        mt={30}
        highlightOnHover
      />
      </Box>

    </AppShell>
  );
}
