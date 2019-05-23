import React from "react";
import { FiledInput } from "./InputHelpers.js";
import "react-input-range/lib/css/index.css";
import "./styles/App.css";

const createAnimationInput = function(svg, resultArr, animateId, handle) {
  if (svg.animate && Array.isArray(svg.animate)) {
    for (var elem in svg.animate) {
      //0,1
      if (
        typeof svg.animate[elem]._attributes !== "undefined" &&
        svg.animate[elem]._attributes.id === animateId
      ) {
        for (var itr in svg.animate[elem]) {
          for (var anim in svg.animate[elem][itr]) {
            var tempField = (
              <FiledInput
                name={anim}
                valueChange={svg.animate[elem][itr][anim]}
                fieldName={"Change " + anim + " value:"}
                onValueChange={handle}
              />
            );

            resultArr.push(tempField);
          }
        }
      }
    }
  } else if (
    svg.animate &&
    svg.animate._attributes &&
    svg.animate._attributes.id
  ) {
    if (svg.animate._attributes.id === animateId) {
      for (anim in svg.animate._attributes) {
        tempField = (
          <FiledInput
            name={anim}
            valueChange={svg.animate._attributes[anim]}
            fieldName={"Change " + anim + " value:"}
            onValueChange={handle}
          />
        );

        resultArr.push(tempField);
      }
    }
  }
};

const createAnimationTtransformInput = function(
  svg,
  resultArr,
  animateId,
  handle
) {
  if (svg.animateTransform && Array.isArray(svg.animateTransform)) {
    for (var elem in svg.animateTransform) {
      //0,1
      if (
        typeof svg.animateTransform[elem]._attributes !== "undefined" &&
        svg.animateTransform[elem]._attributes.id === animateId
      ) {
        for (var itr in svg.animateTransform[elem]) {
          for (var anim in svg.animateTransform[elem][itr]) {
            var tempField = (
              <FiledInput
                name={anim}
                valueChange={svg.animateTransform[elem][itr][anim]}
                fieldName={"Change " + anim + " value:"}
                onValueChange={handle}
              />
            );

            resultArr.push(tempField);
          }
        }
      }
    }
  } else if (
    svg.animateTransform &&
    svg.animateTransform._attributes &&
    svg.animateTransform._attributes.id
  ) {
    if (svg.animateTransform._attributes.id === animateId) {
      for (anim in svg.animateTransform._attributes) {
        tempField = (
          <FiledInput
            name={anim}
            valueChange={svg.animateTransform._attributes[anim]}
            fieldName={"Change " + anim + " value:"}
            onValueChange={handle}
          />
        );

        resultArr.push(tempField);
      }
    }
  }
};

export { createAnimationTtransformInput, createAnimationInput };
