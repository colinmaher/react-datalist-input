

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var useStateRef = function useStateRef(initalState) {
  var _useState = React.useState(initalState),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var ref = React.useRef(initalState);

  var setStateRef = function setStateRef(newState) {
    setState(newState);
    ref.current = newState;
  };

  return [state, setStateRef, ref];
};

___$insertStyle(".datalist-input {\n  /*the container must be positioned relative:*/\n  position: relative;\n  display: inline-block;\n  width: 100%;\n}\n\n.datalist-input .autocomplete-input {\n  width: 100%;\n}\n\n.datalist-input .datalist-items {\n  position: absolute;\n  z-index: 99;\n  /*position the autocomplete items to be the same width as the container:*/\n  top: 100%;\n  left: 0;\n  right: 0;\n}\n\n.datalist-input .default-datalist-items {\n  border: 1px solid #d4d4d4;\n  border-bottom: none;\n  border-top: none;\n}\n\n.datalist-input .default-datalist-items div:not(.datalist-active-item) {\n  padding: 10px;\n  cursor: pointer;\n  background-color: #fff;\n  border-bottom: 1px solid #d4d4d4;\n}\n\n.datalist-input .default-datalist-items div:not(.datalist-active-item):hover {\n  /*when hovering an item:*/\n  background-color: #e9e9e9;\n}\n\n.datalist-input .datalist-active-item {\n  /*when navigating through the items using the arrow keys:*/\n  cursor: pointer;\n}\n\n.datalist-input .datalist-active-item-default {\n  background-color: DodgerBlue;\n  color: #ffffff;\n  border-bottom: 1px solid #d4d4d4;\n  padding: 10px;\n}");

/**
 * default function for matching the current input value (needle)
 * and the values of the items array
 * @param currentInput
 * @param item
 * @returns {boolean}
 */

var labelMatch = function labelMatch(currentInput, item) {
  return item.label.substr(0, currentInput.length).toLowerCase() === currentInput.toLowerCase();
};
/**
 * function for getting the index of the currentValue inside a value of the values array
 * @param currentInput
 * @param item
 * @returns {number}
 */


var indexOfMatch = function indexOfMatch(currentInput, item) {
  return item.label.toLowerCase().indexOf(currentInput.toLowerCase());
};
/**
 * index of item in items
 * @param {*} item
 * @param {*} items
 */


var indexOfItem = function indexOfItem(item, items) {
  return items.indexOf(items.find(function (i) {
    return i.key === item.key;
  }));
};

var DataListInput = function DataListInput(_ref) {
  var activeItemClassName = _ref.activeItemClassName,
      clearInputOnSelect = _ref.clearInputOnSelect,
      clearInputOnClick = _ref.clearInputOnClick,
      debounceLoader = _ref.debounceLoader,
      debounceTime = _ref.debounceTime,
      dropdownClassName = _ref.dropdownClassName,
      dropDownLength = _ref.dropDownLength,
      value = _ref.value,
      inputClassName = _ref.inputClassName,
      itemClassName = _ref.itemClassName,
      match = _ref.match,
      onDropdownClose = _ref.onDropdownClose,
      onDropdownOpen = _ref.onDropdownOpen,
      onInput = _ref.onInput,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      placeholder = _ref.placeholder,
      requiredInputLength = _ref.requiredInputLength,
      suppressReselect = _ref.suppressReselect,
      items = _ref.items;

  /*  last valid item that was selected from the drop down menu */
  var _useState = React.useState(),
      _useState2 = _slicedToArray(_useState, 2),
      lastValidItem = _useState2[0],
      setLastValidItem = _useState2[1];
  /* current input text */


  var _useStateRef = useStateRef(value !== undefined ? value : ''),
      _useStateRef2 = _slicedToArray(_useStateRef, 3),
      currentInput = _useStateRef2[0],
      setCurrentInput = _useStateRef2[1],
      currentInputRef = _useStateRef2[2];
  /* current set of matching items */


  var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      matchingItems = _useState4[0],
      setMatchingItems = _useState4[1];
  /* visibility property of the drop down menu */


  var _useStateRef3 = useStateRef(false),
      _useStateRef4 = _slicedToArray(_useStateRef3, 3),
      visible = _useStateRef4[0],
      setVisible = _useStateRef4[1],
      visibleRef = _useStateRef4[2];
  /* index of the currently focused item in the drop down menu */


  var _useState5 = React.useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      focusIndex = _useState6[0],
      setFocusIndex = _useState6[1];
  /* cleaner click events, click interaction within dropdown menu */


  var interactionHappenedRef = React.useRef(false);
  /* show loader if still matching in debounced mode */

  var _useState7 = React.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isMatchingDebounced = _useState8[0],
      setIsMatchingDebounced = _useState8[1];
  /* to manage debouncing of matching, typing input into the input field */


  var inputHappenedTimeout = React.useRef();
  var menu = React.useRef();
  var inputField = React.useRef();
  React.useEffect(function () {
    var onClickCloseMenu = function onClickCloseMenu(event) {
      if (!menu.current) return; // if rerender, items inside might change, allow one click without further checking

      if (interactionHappenedRef.current) {
        interactionHappenedRef.current = false;
        return;
      } // do not do anything if input is clicked, as we have a dedicated func for that


      if (!inputField.current) return;
      var targetIsInput = event.target === inputField.current;
      var targetInInput = inputField.current.contains(event.target);
      if (targetIsInput || targetInInput) return; // do not close menu if user clicked inside

      var targetInMenu = menu.current.contains(event.target);
      var targetIsMenu = event.target === menu.current;
      if (targetInMenu || targetIsMenu) return;

      if (visibleRef.current) {
        setVisible(false);
        setFocusIndex(-1);
        onDropdownClose();
      }
    };

    window.addEventListener('click', onClickCloseMenu, false);
    return function () {
      window.removeEventListener('click', onClickCloseMenu);
    };
  }, [onDropdownClose, setVisible, visibleRef]);
  React.useEffect(function () {
    // the parent component can pass its own value prop that will override the internally used currentInput
    // this will happen only after we are have finished the current computing step and the dropdown is invisible
    // (to avoid confusion of changing input values for the user)

    /*
     * we have to distinguish undefined and empty string value
     * value == undefined => not set, use internal current input
     * value !== undefined => value set, use value and override currentInput
     * this enables value === '' to clear the input field
     */
    var isValuePropSet = value !== undefined;
    var isValueDifferent = currentInputRef.current !== value;
    var isMatchingRunning = visible || isMatchingDebounced;

    if (isValuePropSet && isValueDifferent && !isMatchingRunning) {
      setCurrentInput(value);
    }
  }, [visible, isMatchingDebounced, value, setCurrentInput, currentInputRef]);
  /**
   * runs the matching process of the current input
   * and handles debouncing the different callback calls to reduce lag time
   * for bigger datasets or heavier matching algorithms
   * @param nextInput
   */

  var debouncedMatchingUpdateStep = React.useCallback(function (nextInput) {
    // cleanup waiting update step
    if (inputHappenedTimeout.current) {
      clearTimeout(inputHappenedTimeout.current);
      inputHappenedTimeout.current = null;
    } // set nextInput into input field and show loading if debounced mode is on


    var reachedRequiredLength = nextInput.length >= requiredInputLength;
    var showMatchingStillLoading = debounceTime >= 0 && reachedRequiredLength;
    setCurrentInput(nextInput);
    setIsMatchingDebounced(showMatchingStillLoading); // no matching if we do not reach required input length

    if (!reachedRequiredLength) return;

    var updateMatchingItems = function updateMatchingItems() {
      // matching process to find matching entries in items array
      var updatedMatchingItems = items.filter(function (item) {
        if (_typeof(match) === (typeof Function === "undefined" ? "undefined" : _typeof(Function))) return match(nextInput, item);
        return labelMatch(nextInput, item);
      });
      var displayableItems = updatedMatchingItems.slice(0, dropDownLength);
      var showDragIndex = lastValidItem && !clearInputOnSelect;
      var index = showDragIndex ? indexOfItem(lastValidItem, displayableItems) : 0;

      if (displayableItems.length) {
        if (!visibleRef.current) {
          onDropdownOpen();
        }

        setMatchingItems(displayableItems);
        setFocusIndex(index > 0 ? index : 0);
        setIsMatchingDebounced(false);
        setVisible(true);
      } else {
        if (visibleRef.current) {
          setVisible(false);
          onDropdownClose();
        }

        setMatchingItems(displayableItems);
        setFocusIndex(-1);
        setIsMatchingDebounced(false);
      }
    };

    if (debounceTime <= 0) {
      updateMatchingItems();
    } else {
      inputHappenedTimeout.current = setTimeout(updateMatchingItems, debounceTime);
    }
  }, [requiredInputLength, debounceTime, setCurrentInput, items, dropDownLength, lastValidItem, clearInputOnSelect, match, setVisible, onDropdownOpen, visibleRef, onDropdownClose]);
  /**
   * gets called when someone starts to write in the input field
   * @param event
   */

  var onHandleInput = React.useCallback(function (event) {
    var newValue = event.target.value;
    debouncedMatchingUpdateStep(newValue);
    onInput(newValue);
  }, [debouncedMatchingUpdateStep, onInput]);
  var onClickInput = React.useCallback(function () {
    var currentValue = currentInputRef.current; // if user clicks on input field with value,
    // the user most likely wants to clear the input field

    if (currentValue && clearInputOnClick) {
      currentValue = '';
    }

    onClick(currentValue);
    var reachedRequiredLength = currentValue.length >= requiredInputLength;

    if (reachedRequiredLength && !visibleRef.current) {
      debouncedMatchingUpdateStep(currentValue);
    }
  }, [currentInputRef, clearInputOnClick, onClick, requiredInputLength, visibleRef, debouncedMatchingUpdateStep]);
  /**
   * handleSelect is called onClickItem and onEnter upon an option of the drop down menu
   * does nothing if the key has not changed since the last onSelect event
   * @param selectedItem
   */

  var onHandleSelect = React.useCallback(function (selectedItem) {
    // block select call until last matching went through
    if (isMatchingDebounced) return;
    setCurrentInput(clearInputOnSelect ? '' : selectedItem.label);
    setVisible(false);
    setFocusIndex(-1);
    interactionHappenedRef.current = true;
    onDropdownClose(); // change state to fit new selection

    setLastValidItem(selectedItem); // callback function onSelect

    onSelect(selectedItem);
  }, [isMatchingDebounced, setCurrentInput, clearInputOnSelect, setVisible, onDropdownClose, suppressReselect, lastValidItem, onSelect]);
  /**
   * handle key events
   * @param event
   */

  var onHandleKeydown = React.useCallback(function (event) {
    // only do something if drop-down div is visible
    if (!visibleRef.current) return;
    var currentFocusIndex = focusIndex;

    if (event.keyCode === 40 || event.keyCode === 9) {
      // If the arrow DOWN key or tab is pressed increase the currentFocus variable:
      currentFocusIndex += 1;
      if (currentFocusIndex >= matchingItems.length) currentFocusIndex = 0;
      setFocusIndex(currentFocusIndex); // prevent tab to jump to the next input field if drop down is still open

      event.preventDefault();
    } else if (event.keyCode === 38) {
      // If the arrow UP key is pressed, decrease the currentFocus variable:
      currentFocusIndex -= 1;
      if (currentFocusIndex <= -1) currentFocusIndex = matchingItems.length - 1;
      setFocusIndex(currentFocusIndex);
    } else if (event.keyCode === 13) {
      // Enter pressed, similar to onClickItem
      if (focusIndex > -1) {
        // Simulate a click on the "active" item:
        var selectedItem = matchingItems[currentFocusIndex];
        onHandleSelect(selectedItem);
      }
    }
  }, [focusIndex, matchingItems, onHandleSelect, visibleRef]);
  var renderItemLabel = React.useCallback(function (item) {
    var index = indexOfMatch(currentInput, item);
    var inputLength = currentInput.length;
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, index >= 0 && inputLength ?
    /*#__PURE__*/
    // renders label with matching search string marked
    React__default.createElement(React__default.Fragment, null, item.label.substr(0, index), /*#__PURE__*/React__default.createElement("strong", null, item.label.substr(index, inputLength)), item.label.substr(index + inputLength, item.label.length)) : item.label);
  }, [currentInput]);
  var renderItems = React.useCallback(function () {
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, matchingItems.map(function (item, i) {
      var isActive = focusIndex === i;
      var itemActiveClasses = isActive ? "datalist-active-item ".concat(activeItemClassName || 'datalist-active-item-default') : '';
      var itemClasses = "".concat(itemClassName, " ").concat(itemActiveClasses);
      return /*#__PURE__*/React__default.createElement("div", {
        onClick: function onClick() {
          return onHandleSelect(item);
        },
        className: itemClasses,
        key: item.key,
        tabIndex: 0,
        role: "button",
        "aria-label": item.label,
        onKeyUp: function onKeyUp(event) {
          return event.preventDefault();
        }
      }, renderItemLabel(item));
    }));
  }, [matchingItems, focusIndex, activeItemClassName, itemClassName, onHandleSelect, renderItemLabel]);
  var dropDown = React.useMemo(function () {
    var reachedRequiredLength = currentInputRef.current.length >= requiredInputLength;

    if (reachedRequiredLength && isMatchingDebounced) {
      return /*#__PURE__*/React__default.createElement("div", {
        ref: menu,
        className: "datalist-items ".concat(dropdownClassName || 'default-datalist-items'),
        role: "dialog",
        "aria-label": "Dropdown menu"
      }, /*#__PURE__*/React__default.createElement("div", {
        className: itemClassName
      }, debounceLoader || 'loading...'));
    }

    if (reachedRequiredLength && visible) {
      return /*#__PURE__*/React__default.createElement("div", {
        ref: menu,
        className: "datalist-items ".concat(dropdownClassName || 'default-datalist-items'),
        role: "dialog",
        "aria-label": "Dropdown menu"
      }, renderItems());
    }

    return undefined;
  }, [currentInputRef, requiredInputLength, isMatchingDebounced, visible, dropdownClassName, itemClassName, debounceLoader, renderItems]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "datalist-input"
  }, /*#__PURE__*/React__default.createElement("input", {
    ref: inputField,
    onChange: onHandleInput,
    onClick: onClickInput,
    onKeyDown: onHandleKeydown,
    type: "text",
    className: "autocomplete-input ".concat(inputClassName),
    placeholder: placeholder,
    value: currentInput,
    "aria-label": "Search"
  }), dropDown);
};

DataListInput.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })).isRequired,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  onDropdownOpen: PropTypes.func,
  onDropdownClose: PropTypes.func,
  match: PropTypes.func,
  inputClassName: PropTypes.string,
  dropdownClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  activeItemClassName: PropTypes.string,
  requiredInputLength: PropTypes.number,
  clearInputOnSelect: PropTypes.bool,
  clearInputOnClick: PropTypes.bool,
  suppressReselect: PropTypes.bool,
  dropDownLength: PropTypes.number,
  value: PropTypes.string,
  debounceTime: PropTypes.number,
  debounceLoader: PropTypes.node,
  onInput: PropTypes.func,
  onClick: PropTypes.func
};
DataListInput.defaultProps = {
  placeholder: '',
  match: undefined,
  inputClassName: '',
  dropdownClassName: '',
  itemClassName: '',
  activeItemClassName: '',
  requiredInputLength: 0,
  clearInputOnSelect: false,
  clearInputOnClick: false,
  suppressReselect: true,
  dropDownLength: Infinity,
  value: undefined,
  debounceTime: 0,
  debounceLoader: undefined,
  onDropdownOpen: function onDropdownOpen() {},
  onDropdownClose: function onDropdownClose() {},
  onInput: function onInput() {},
  onClick: function onClick() {}
};

exports.default = DataListInput;
//# sourceMappingURL=DataListInput.js.map
