function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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
  return /*#__PURE__*/React__default.createElement("div", {
    className: isOpen ? "backgroundModal " : "hidde"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "modal",
    onClick: handleClickOutsideModal
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "closeContent",
    onClick: handleClose
  }, /*#__PURE__*/React__default.createElement("p", null, "X")), /*#__PURE__*/React__default.createElement("p", {
    className: "message"
  }, message, " ")));
}

exports.Modal = Modal;
//# sourceMappingURL=index.js.map
