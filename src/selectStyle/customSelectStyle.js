const customSelectStyle = {
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    border: "none",
    boxShadow: state.isFocused
      ? "1px 2px 5px rgba(0,0,0,0.3)"
      : "1px 1px 3px rgba(0,0,0,0.2)",
  }),
};

export default customSelectStyle;
