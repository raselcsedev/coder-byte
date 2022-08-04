export const customStyles = {
    control: (styles) => ({
      ...styles,
      width: "100%",
      maxWidth: "14rem",
      minWidth: "12rem",
      borderRadius: "5px",
      color: "#000000",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      backgroundColor: "rgb(203 213 225)", 
      cursor: "pointer",
      border: "2px solid #000000",
      boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
      ":hover": {
        border: "2px solid #000000",
        boxShadow: "none",
      },
    }),
    option: (styles) => {
      return {
        ...styles,
        color: "#ffffff",
        fontSize: "0.8rem",
        lineHeight: "1.75rem",
        width: "100%",
        background: "#9eaabf",
        ":hover": {
          backgroundColor: "#36D399",
          color: "#000",
          cursor: "pointer",
        },
      };
    },
    menu: (styles) => {
      return {
        ...styles,
        backgroundColor: "#fff",
        maxWidth: "14rem",
        // border: "2px solid #000000",
        borderRadius: "5px",
        boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
      };
    },
  
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#ffffff",
        fontSize: "0.8rem",
        lineHeight: "1.75rem",
      };
    },
  };
  