import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "FEATURES",
    group: true,
  },
  {
    title: "Taxonomia",
    icon: "edit-2-outline",
    children: [
      {
        title: "Reino",
        link: "/pages/forms/reino",
      },
      {
        title: "Filo",
        link: "/pages/forms/filo",
      },
      {
        title: "Classe",
        link: "/pages/forms/classe",
      },
      {
        title: "Ordem",
        link: "/pages/forms/Ordem",
      },
      {
        title: "Familia",
        link: "/pages/forms/Familia",
      },
      {
        title: "Subfamilia",
        link: "/pages/forms/Subfamilia",
      },
      {
        title: "Supertribo",
        link: "/pages/forms/Supertribo",
      },
      {
        title: "Tribo",
        link: "/pages/forms/Tribo",
      },
      {
        title: "Subtribo",
        link: "/pages/forms/Subtribo",
      },
      {
        title: "Genero",
        link: "/pages/forms/Genero",
      },
      {
        title: "Subgenero",
        link: "/pages/forms/Subgenero",
      },
      {
        title: "Especie",
        link: "/pages/forms/Especie",
      },
    ],
  },
  {
    title: "Cadastro",
    icon: "edit-2-outline",
    children: [
      {
        title: "Localidade",
        link: "/pages/dados/Localidade",
      },
      {
        title: "Endereco",
        link: "/pages/dados/Endereco",
      },
      {
        title: "Pessoa",
        link: "/pages/dados/Pessoa",
      },
    ],
  },
];
