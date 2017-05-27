'use strict';

goog.provide('Blockly.Blocks.robotkit');
goog.provide('Blockly.Constants.RobotKit');

goog.require('Blockly.Blocks');


Blockly.defineBlocksWithJsonArray([{
    "type": "motora",
    "message0": "direction %1 %2 speed %3",
    "args0": [{
            "type": "field_dropdown",
            "name": "direction",
            "options": [
                [
                    "clockwise",
                    "cw_direction"
                ],
                [
                    "counter-clockwise",
                    "ccw_direction"
                ],
                [
                    "",
                    ""
                ]
            ]
        },
        {
            "type": "input_dummy"
        },
        {
            "type": "field_number",
            "name": "speed",
            "value": 500,
            "min": 0,
            "max": 1023
        }
    ],
    "inputsInline": false,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 224,
    "tooltip": "Block controls MotorA",
    "helpUrl": ""
}]);