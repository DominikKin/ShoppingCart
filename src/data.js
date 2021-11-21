import awhite from "./images/awhite.jpg";
import ablack from "./images/ablack.jpg";
import bwhite from "./images/bwhite.jpg";
import bblack from "./images/bblack.jpg";
import cwhite from "./images/cwhite.jpg";
import cblack from "./images/cblack.jpg";

const data = {
  products: [
    {
      name: "The Letter A",
      price: 1620000,
      desc: `The letter A is truly remarkable. It comes first in the alphabet. The blah blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      variants: [
        {
          detailName: "The Letter A White",
          id: "awhite",
          picture: awhite,
          color: "white",
        },
        {
          detailName: "The Letter A Black",
          id: "ablack",
          picture: ablack,
          color: "black",
        },
      ],
    },
    {
      name: "The Letter B",
      price: 1945700,
      desc: `The letter B. The blah blah blah something elegant something. Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      variants: [
        {
          detailName: "The Letter B White",
          id: "bwhite",
          picture: bwhite,
          color: "white",
        },
        {
          detailName: "The Letter B Black",
          id: "bblack",
          picture: bblack,
          color: "black",
        },
      ],
    },
    {
      name: "The Letter C",
      price: 1427000,
      desc: `The letter C {hire a copywriter!!!!}. The blah blah blah Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
      variants: [
        {
          detailName: "The Letter C White",
          id: "cwhite",
          picture: cwhite,
          color: "white",
        },
        {
          detailName: "The Letter C Black",
          id: "cblack",
          picture: cblack,
          color: "black",
        },
      ],
    },
    ,
  ],
};

export default data;
// new Intl.NumberFormat("en-EN", {
//   style: "currency",
//   currency: "USD",
// }).format
