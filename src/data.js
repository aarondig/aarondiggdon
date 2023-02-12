import makepayment from "./Assets/Images/Projects/make-a-payment/make-a-payment.jpg"
import creditcard from "./Assets/Images/Projects/credit-card/credit-card.jpg"

export const data = [
  {
    id: "creditcard",
    title: "Credit Card as a Service Card Design",
    subtitle: "Case Study",
    banner:
      creditcard,

    sections: [
      {
        type: "description",

        title:
          "Help Railsr’s Global Team launch a CCAS Product in the United States.",
        subtitle: "Background",
        text: [
          "Worked with Visa and CPI Card Group to design a physical credit card product for Railsr’s Credit Card as a Service ‘MVP’ program.",
          "This program offered a white—label credit card product for businesses looking to get to market quickly. Railsr would provide the compliance, banking partnerships, card designs, and more to make the process as simple as possible.",
          "My task was to design two credit card designs that could be used throughout the program. ",
        ],
        details: [{ title: "Role", content: "Lead Product Designer" }],
      },
      
    ],
  },
  // {
  //   id: "rewards",
  //   title: "Lululemon Rewards as a Service",
  //   subtitle: "UX | UI Design",
  //   banner:
  //     "https://raw.githubusercontent.com/aarondig/aarondiggdon/main/src/Assets/Images/Projects/credit%20card/large/Banner.png",

  //   sections: [
  //     {
  //       type: "description",

  //       title:
  //         "Help Railsr’s Global Team launch a CCAS Product in the United States.",
  //       subtitle: "Case Study",
  //       text: [
  //         "Worked with Visa and CPI Card Group to design a physical credit card product for Railsr’s Credit Card as a Service ‘MVP’ program.",
  //         "Worked with Visa and CPI Card Group to design a physical credit card product for Railsr’s Credit Card as a Service ‘MVP’ program.",
  //       ],
  //       details: [{ title: "Role", content: "UX | UI Designer, Brand Researcher" }],
  //     },
  //   ],
  // },
  // {
  //   id: "installments",
  //   title: "Pay in Installments Pitch",
  //   subtitle: "UX | UI Design",
  //   banner:
  //     "https://raw.githubusercontent.com/aarondig/aarondiggdon/main/src/Assets/Images/Projects/credit%20card/large/Banner.png",

  //   sections: [
  //     {
  //       type: "description",

  //       title:
  //         "Help pitch a Pay-in-Installments product to Railsr’s executive team.",
  //       subtitle: "Case Study",
  //       text: [
  //         "Create a prototype of a Pay in Installments checkout flow to visualize the concept during the pitch.",
  //         "Working with Railsr’s Global Team, we had to map a user’s journey through a conventional online retailer, and design a flow. I was tasked with creating a fictional online retail brand, and designing the flow in Figma.",
  //       ],
  //       details: [{ title: "Role", content: "UX | UI Designer" }],
  //     },
  //   ],
  // },
  {
    id: "make-a-payment",
    title: "Make a Payment Design Kit User Flow",
    subtitle: "Case Study",
    banner:
      makepayment,

    sections: [
      {
        type: "description",

        title:
          "Create a user flow for Railsr's design kit.",
        subtitle: "Backstory",
        text: [
          "Part of Railsr's Credit Card as a Service product, the design kit was a collection of pre-approved SDK's that reduced the customer's time to market. These components would be embedded in the customer's mobile application, giving the end-user the ability to manage their card without the need for designers and developers on the customer's end.",
          "Working with Railsr's Global team, I was tasked with creating a user-flow for Making a Payment.",
        ],
        details: [{ title: "Role", content: "Product Designer / UX | UI Designer" }],

        darkmode: false,
      },
      {
        type: "list",

        title:
          "My goals for the project were the following:",
        subtitle: "",
        items: [
          "Conduct research on industry standard ‘Make a Payment’ user — flows.",
          "Brainstorm ways to streamline the user — journey.",
          "Design an intuitive visual narrative for each frame.",
          "Efficiently direct the user's attention to call — to — actions in the order of importance, allowing the user to subconsciously comprehend the page. ",
        ],
        
        darkmode: true,
        // details: [{ title: "Role", content: "Product Designer / UX | UI Designer" }],
      },
      
      
      
    ],
  },
];
