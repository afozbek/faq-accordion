export type AccordionType = {
  description: string;
  headline: string;
}

export const accordionList: AccordionType[] = [
  {
    headline: "How many team members can I invite?",
    description: `You can invite up to 2 additional users on the Free plan. There is no limit on
    team members for the Premium plan.`
  },
  {
    headline: "What is the maximum file upload size?",
    description: `No more than 2GB. All files in your account must fit your allotted storage space.`
  },
  {
    headline: "How do I reset my password?",
    description: `Click “Forgot password” from the login page or “Change password” from your profile page.
    A reset link will be emailed to you.`
  },
  {
    headline: "Can I cancel my subscription?",
    description: `Yes! Send us a message and we’ll process your request no questions asked.`
  },
  {
    headline: "Do you provide additional support?",
    description: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`
  }
]