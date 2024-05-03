import illustrationLaptopDesktop from "../assets/images/illustration-laptop-desktop.svg";
import illustrationEditorDesktop from "../assets/images/illustration-editor-desktop.svg";
import illustrationEditorMobile from "../assets/images/illustration-editor-mobile.svg";
import illustrationLaptopMobile from "../assets/images/illustration-laptop-mobile.svg";
import illustrationPhones from "../assets/images/illustration-phones.svg";

export const featuresData = [
  {
    id: 1,
    title: "Designed for the future",
    img: {
      mobile: {
        src: illustrationEditorMobile,
        alt: "illustration editor mobile",
      },
      desktop: {
        src: illustrationEditorDesktop,
        alt: "illustration editor desktop",
      },
    },
    content: [
      {
        id: 1,
        data: {
          title: "Introducing an extensible editor",
          description:
            "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
        },
      },
      {
        id: 2,
        data: {
          title: "Robust content management",
          description:
            "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
        },
      },
    ],
  },
  {
    id: 2,
    img: {
      both: { src: illustrationPhones, alt: "illustration phones" },
    },
    content: [
      {
        id: 1,
        data: {
          title: "State of the Art Infrastructure",
          description:
            "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
        },
      },
    ],
  },
  {
    id: 3,
    img: {
      mobile: {
        src: illustrationLaptopMobile,
        alt: "illustration laptop mobile",
      },
      desktop: {
        src: illustrationLaptopDesktop,
        alt: "illustration laptop desktop",
      },
    },
    content: [
      {
        id: 1,
        data: {
          title: "Free, open, simple",
          description:
            "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
        },
      },
      {
        id: 2,
        data: {
          title: "Powerful tooling",
          description:
            "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
        },
      },
    ],
  },
];
