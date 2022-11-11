import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export function AddFormModal() {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={close}
        size="lg"
      >
        {/* <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          Site Information
        </Title> */}
        <Paper withBorder shadow="md" p={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
          />
          <Button fullWidth mt="xl">
            Add Site Info
          </Button>
        </Paper>
      </Modal>
      <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group>
    </>
  );
}
