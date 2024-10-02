function Modal(message, isOpen) {
  var _useState = useState(isOpen),
    modalIsOpen = _useState[0],
    setModalIsOpen = _useState[1];
  var handleClose = function handleClose() {
    setModalIsOpen(false);
  };
  var handleClickOutsideModal = function handleClickOutsideModal(e) {
    if (e.target.className == "modal") {
      handleClose();
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: modalIsOpen ? "backgroundModal " : "hidde"
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

exports.Modal = Modal;
//# sourceMappingURL=index.js.map
