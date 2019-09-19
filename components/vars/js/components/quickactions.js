const darkest = require('../darkest.js');
const large = require('../large.js');
const animationGlobals = require('../animationGlobals.js');
exports["overlay-color"] = darkest["background-color-quickactions-overlay"];
exports["background-color"] = darkest["background-color-quickactions"];
exports["button-gap-y"] = large["size-100"];
exports["button-gap-x"] = large["size-100"];
exports["icon-button-gap-y"] = large["size-100"];
exports["icon-button-gap-x"] = large["size-100"];
exports["text-button-gap-y"] = large["size-50"];
exports["text-button-gap-x"] = large["size-50"];
exports["padding-x"] = large["size-50"];
exports["padding-y"] = large["size-50"];
exports["border-radius"] = large["border-radius-regular"];
exports["height"] = large["size-500"];
exports["entry-animation-delay"] = "0";
exports["entry-animation-duration"] = animationGlobals["duration-100"];
exports["entry-animation-ease"] = animationGlobals["ease-out"];
exports["entry-animation-properties"] = "opacity";
exports["exit-animation-delay"] = "0";
exports["exit-animation-duration"] = animationGlobals["duration-100"];
exports["exit-animation-ease"] = animationGlobals["ease-out"];
exports["exit-animation-properties"] = "opacity";
