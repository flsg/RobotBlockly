'use strict';

goog.provide('Blockly.Arduino.robotkit');

goog.require('Blockly.Arduino');

Blockly.Arduino['motora'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var number_speed = block.getFieldValue('speed');
    var code = "";
    Blockly.Arduino.setups_["setup_motor"] = "pinMode(13, OUTPUT);";
    Blockly.Arduino.definitions_['define_forward'] = "void forward() {\n" +
        "  analogWrite(13, " + number_speed + ");\n" +
        "}";
    code = "forward();\n";

    return code;
};