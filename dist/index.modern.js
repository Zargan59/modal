import React from 'react';

function Modal(_ref) {
  var message = _ref.message,
    isOpen = _ref.isOpen,
    setIsOpen = _ref.setIsOpen;
  var handleClose = function handleClose() {
    setIsOpen(false);
  };
  var handleClickOutsideModal = function handleClickOutsideModal(e) {
    if (e.target.className === "modal") {
      console.log("Ferme la modale");
      handleClose();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: isOpen ? "backgroundModal " : "hidde"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: handleClickOutsideModal
  }, /*#__PURE__*/React.createElement("div", {
    className: "closeContent",
    onClick: handleClose
  }, /*#__PURE__*/React.createElement("p", null, "X")), /*#__PURE__*/React.createElement("p", {
    className: "message"
  }, message, " ")));
}

export { Modal };
//# sourceMappingURL=index.modern.js.map
