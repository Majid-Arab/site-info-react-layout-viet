import { Navbar, ScrollArea, createStyles } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconBooks,
  IconUsers,
} from "@tabler/icons";
import { NavebarLinksGroup } from "./NavebarLinksGroup";

const mockdata = [
  { label: "Dashboard", link: "/admin", icon: IconGauge },
  {
    label: "Site Info",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "PO", link: "/" },
      { label: "Users", link: "/" },
      { label: "Projects", link: "/" },
      { label: "Site Info", link: "/" },
    ],
  },
  {
    label: "Technical Proposal",
    icon: IconCalendarStats,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  {
    label: "Fesibility Report",
    icon: IconPresentationAnalytics,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
  {
    label: "Project Info",
    icon: IconFileAnalytics,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
  {
    label: "Library Info",
    icon: IconBooks,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
  {
    label: "Employee Info",
    icon: IconUsers,
    links: [
      { label: "Enable 2FA", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
];

const useStyles = createStyles((theme, getRef) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },
}));

export function SideBar() {
  const { classes } = useStyles();

  const links = mockdata.map((item) => (
    <NavebarLinksGroup {...item} key={item.label} />
  ));

  return (
    <Navbar width={{ sm: 300 }} px="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div>{links}</div>
      </Navbar.Section>
    </Navbar>
  );
}
