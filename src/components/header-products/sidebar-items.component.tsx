type SidebarItem = {
  id: string
  label: string
  content: React.ReactNode
}

export const sidebarItems: SidebarItem[] = [
  {
    id: "first",
    label: "I&C Energy Storage Systems",
    content: <p>Details about I&C Energy Storage Systems...</p>,
  },
  {
    id: "second",
    label: "Residential Battery Systems",
    content: (
      <ul>
        <li>Battery A</li>
        <li>Battery B</li>
      </ul>
    ),
  },
  {
    id: "third",
    label: "Grid-Scale Solutions",
    content: (
      <div>
        <strong>Massive deployments</strong> for utilities.
      </div>
    ),
  },
  {
    id: "fourth",
    label: "Portable Energy Devices",
    content: <p>Power banks and mobile storage units.</p>,
  },
  {
    id: "fifth",
    label: "EV Charging Infrastructure",
    content: <p>Fast chargers, networks, and support systems.</p>,
  },
  {
    id: "sixth",
    label: "Smart Inverters",
    content: <p>Inverters with smart grid capabilities.</p>,
  },
  {
    id: "seventh",
    label: "Solar Integration",
    content: <p>Combining solar arrays with storage solutions.</p>,
  },
]
