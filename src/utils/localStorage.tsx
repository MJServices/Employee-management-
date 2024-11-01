const employees = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    tasks: [
      {
        taskTitle: "Prepare Sales Report",
        description: "Compile sales data for Q3 and prepare a detailed report.",
        date: "2024-10-27",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Meeting",
        description: "Discuss project milestones with client.",
        date: "2024-10-29",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Feedback Session",
        description: "Collect feedback from team members.",
        date: "2024-11-01",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Software Update",
        description: "Update the CRM software to the latest version.",
        date: "2024-10-30",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Inventory Check",
        description: "Conduct a complete inventory check of office supplies.",
        date: "2024-10-28",
        category: "Operations",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Marketing Campaign",
        description: "Plan the social media campaign for next month.",
        date: "2024-11-05",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Monthly Budget Review",
        description: "Review the expenses for the current month.",
        date: "2024-10-31",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Website Bug Fix",
        description: "Fix the navigation issue on the company website.",
        date: "2024-10-27",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Training Session",
        description: "Conduct a training session on the new software.",
        date: "2024-11-02",
        category: "Training",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Product Launch",
        description: "Coordinate with teams for the upcoming product launch.",
        date: "2024-12-01",
        category: "Product",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    password: "securepass456",
    tasks: [
      {
        taskTitle: "Design Mockups",
        description: "Create mockups for the new website layout.",
        date: "2024-10-28",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Internal Audit",
        description: "Conduct an internal audit for Q4.",
        date: "2024-11-10",
        category: "Audit",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    name: "Robert Johnson",
    email: "robert.j@example.com",
    password: "johnson789",
    tasks: [],
  },
  {
    name: "Emily Davis",
    email: "emily.d@example.com",
    password: "password321",
    tasks: [
      {
        taskTitle: "Customer Survey",
        description: "Analyze the customer feedback survey.",
        date: "2024-11-05",
        category: "Customer Relations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    name: "Michael Brown",
    email: "michael.b@example.com",
    password: "mikepass123",
    tasks: [
      {
        taskTitle: "Server Maintenance",
        description: "Perform routine server maintenance.",
        date: "2024-10-27",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "New Employee Orientation",
        description: "Conduct orientation for new employees.",
        date: "2024-11-02",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admins = [
  {
    name: "Minhaj",
    email: "minhaj@example.com",
    password: "minhaj123",
  },
];

export const setData = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admins", JSON.stringify(admins));
};

export const getData = () => {
  const employees = JSON.parse(localStorage.getItem('employees') as string);
  const admins = JSON.parse(localStorage.getItem('admins') as string);
  return {admins, employees,}
};
