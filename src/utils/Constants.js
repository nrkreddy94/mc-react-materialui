// Form fields
export const FormField = {
  INPUT: "INPUT",
  SELECT: "SELECT",
  BUTTON: "BUTTON",
  BUTTONS: "BUTTONS"
};
// Form field types
export const FieldTypes = {
  TEXT: "text",
  CHECKBOX: "checkbox",
  RADIO: "radio",
  MULTI: "multi",
  SUBMIT: "submit",
  BUTTON: "button",
  RESET: "reset",
  CLEAR: "clear"
};

const context = "/";
export const ApiPaths = {
  NAVBAR: "./src/config/navbar.json",
  PAGE: context + "api/page",
  SECTION: context + "api/section"
};

export const ErrorFields = {
  STATUS: "status",
  ERROR: "error",
  MESSAGE: "message"
};

export const ErrorMessages = {
  FORBIDDEN: {
    STATUS: 403,
    ERROR: "Forbidden",
    MESSAGE: "Access Restricted"
  }
};
