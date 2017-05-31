// Do not edit this file; automatically generated by build.py.
'use strict';

/*
 Licensed under the Apache License, Version 2.0 (the "License"):
          http://www.apache.org/licenses/LICENSE-2.0
*/
Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.StaticTyping=new Blockly.StaticTyping;Blockly.Arduino.addReservedWords("Blockly,setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,integer,constants,floating,point,void,boolean,char,unsigned,byte,int,word,long,float,double,string,String,array,static,volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_COMMA=15;Blockly.Arduino.ORDER_UNARY_NEGATION=16;Blockly.Arduino.ORDER_MEMBER=17;Blockly.Arduino.ORDER_NONE=99;Blockly.Arduino.PinTypes={INPUT:"INPUT",OUTPUT:"OUTPUT",PWM:"PWM",SERVO:"SERVO",STEPPER:"STEPPER",SERIAL:"SERIAL",I2C:"I2C/TWI",SPI:"SPI"};Blockly.Arduino.DEF_FUNC_NAME=Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_;
Blockly.Arduino.init=function(a){Blockly.Arduino.includes_=Object.create(null);Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.variables_=Object.create(null);Blockly.Arduino.codeFunctions_=Object.create(null);Blockly.Arduino.userFunctions_=Object.create(null);Blockly.Arduino.functionNames_=Object.create(null);Blockly.Arduino.setups_=Object.create(null);Blockly.Arduino.pins_=Object.create(null);Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=
new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);var b=Blockly.Arduino.StaticTyping.collectVarsWithTypes(a);Blockly.Arduino.StaticTyping.setProcedureArgs(a,b);for(var c in b)b[c]?b[c].arrayType?(a=Blockly.Arduino.recurseArrayType(c,b),Blockly.Arduino.addVariable(c,a+" "+Blockly.Arduino.variableDB_.getName(c,Blockly.Variables.NAME_TYPE)+";")):Blockly.Arduino.addVariable(c,Blockly.Arduino.getArduinoType_(b[c])+" "+Blockly.Arduino.variableDB_.getName(c,Blockly.Variables.NAME_TYPE)+";"):Blockly.Arduino.addVariable(c,
"undefined "+Blockly.Arduino.variableDB_.getName(c,Blockly.Variables.NAME_TYPE)+";")};
Blockly.Arduino.recurseArrayType=function(a,b){if(!b[a].arrayType||b[a].arrayType instanceof Blockly.Type){var c="";if(b[a].arrayType){var d=b[a].arrayType;for(c="["+b[a].arraySize+"]";d.arrayType;)c+="["+d.arraySize+"]",d=d.arrayType;if(!(d instanceof Blockly.Type)&&(a=d[1],b[a].arrayType))return d=Blockly.Arduino.recurseArrayType(a,b),d.substr(0,d.indexOf("["))+c+d.substr(d.indexOf("["))}return Blockly.Arduino.getArduinoType_(b[a])+c}c=b[a].arrayType[1];return c!=a&&b[c]?(d=Blockly.Arduino.recurseArrayType(c,
b),Blockly.Arduino.insertParentArraySize(d,b[a].arraySize)):"undefined"};Blockly.Arduino.insertParentArraySize=function(a,b){return 0<=a.indexOf("[")?a.substr(0,a.indexOf("["))+"["+b+"]"+a.substr(a.indexOf("[")):a+"["+b+"]"};
Blockly.Arduino.finish=function(a){var b=[],c=[],d=[],e=[],f;for(f in Blockly.Arduino.includes_)b.push(Blockly.Arduino.includes_[f]);b.length&&b.push("\n");for(f in Blockly.Arduino.variables_)d.push(Blockly.Arduino.variables_[f]);d.length&&d.push("\n");for(f in Blockly.Arduino.definitions_)c.push(Blockly.Arduino.definitions_[f]);c.length&&c.push("\n");for(f in Blockly.Arduino.codeFunctions_)e.push(Blockly.Arduino.codeFunctions_[f]);for(f in Blockly.Arduino.userFunctions_)e.push(Blockly.Arduino.userFunctions_[f]);
e.length&&e.push("\n");var g=[""],h="";void 0!==Blockly.Arduino.setups_.userSetupCode&&(h="\n"+Blockly.Arduino.setups_.userSetupCode,delete Blockly.Arduino.setups_.userSetupCode);for(f in Blockly.Arduino.setups_)g.push(Blockly.Arduino.setups_[f]);h&&g.push(h);delete Blockly.Arduino.includes_;delete Blockly.Arduino.definitions_;delete Blockly.Arduino.codeFunctions_;delete Blockly.Arduino.userFunctions_;delete Blockly.Arduino.functionNames_;delete Blockly.Arduino.setups_;delete Blockly.Arduino.pins_;
Blockly.Arduino.variableDB_.reset();b=b.join("\n")+d.join("\n")+c.join("\n")+e.join("\n\n");g="void setup() {"+g.join("\n  ")+"\n}\n\n";a="void loop() {\n  "+a.replace(/\n/g,"\n  ")+"\n}";return b+g+a};Blockly.Arduino.addInclude=function(a,b){void 0===Blockly.Arduino.includes_[a]&&(Blockly.Arduino.includes_[a]=b)};Blockly.Arduino.addDeclaration=function(a,b){void 0===Blockly.Arduino.definitions_[a]&&(Blockly.Arduino.definitions_[a]=b)};
Blockly.Arduino.addVariable=function(a,b,c){var d=!1;if(c||void 0===Blockly.Arduino.variables_[a])Blockly.Arduino.variables_[a]=b,d=!0;return d};Blockly.Arduino.addSetup=function(a,b,c){var d=!1;if(c||void 0===Blockly.Arduino.setups_[a])Blockly.Arduino.setups_[a]=b,d=!0;return d};
Blockly.Arduino.addFunction=function(a,b){if(void 0===Blockly.Arduino.codeFunctions_[a]){var c=Blockly.Arduino.variableDB_.getDistinctName(a,Blockly.Generator.NAME_TYPE);Blockly.Arduino.codeFunctions_[a]=b.replace(Blockly.Arduino.DEF_FUNC_NAME,c);Blockly.Arduino.functionNames_[a]=c}return Blockly.Arduino.functionNames_[a]};
Blockly.Arduino.reservePin=function(a,b,c,d){void 0!==Blockly.Arduino.pins_[b]?Blockly.Arduino.pins_[b]!=c?a.setWarningText(Blockly.Msg.ARD_PIN_WARN1.replace("%1",b).replace("%2",d).replace("%3",c).replace("%4",Blockly.Arduino.pins_[b]),d):a.setWarningText(null,d):(Blockly.Arduino.pins_[b]=c,a.setWarningText(null,d))};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};
Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,b){var c;if(null===b)return"";var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){(c=a.getCommentText())&&(d+=this.prefixLines(c,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(c=a.inputList[e].connection.targetBlock())&&(c=this.allNestedComments(c))&&(d+=this.prefixLines(c,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=this.blockToCode(e);return d+b+e};
Blockly.Arduino.getArduinoType_=function(a){switch(a.typeId){case Blockly.Types.VOLATIL_NUMBER.typeId:return"volatile int";case Blockly.Types.SHORT_NUMBER.typeId:return"char";case Blockly.Types.NUMBER.typeId:return"int";case Blockly.Types.LARGE_NUMBER.typeId:return"long";case Blockly.Types.DECIMAL.typeId:return"float";case Blockly.Types.TEXT.typeId:return"String";case Blockly.Types.CHARACTER.typeId:return"char";case Blockly.Types.BOOLEAN.typeId:return"boolean";case Blockly.Types.NULL.typeId:return"void";
case Blockly.Types.ARRAY.typeId:return Blockly.Arduino.getArduinoType_(a.arrayType);case Blockly.Types.UNDEF.typeId:return"undefined";case Blockly.Types.CHILD_BLOCK_MISSING.typeId:return"int";default:return"Invalid Blockly Type"}};Blockly.Arduino.noGeneratorCodeInline=function(){return["",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.noGeneratorCodeLine=function(){return""};Blockly.Arduino.robotkit={};Blockly.Arduino.motora=function(a){var b=a.getFieldValue("direction");a=a.getFieldValue("speed");Blockly.Arduino.setups_.setup_motora="pinMode(D1, OUTPUT);\n  pinMode(D3, OUTPUT);";Blockly.Arduino.definitions_.define_motora="void motorA(int motorDirection, int motorSpeed) {\n  digitalWrite(D3, motorDirection);\n  analogWrite(D1, motorSpeed);\n}";return"motorA("+b+", "+a+");\n"};
Blockly.Arduino.motorb=function(a){var b=a.getFieldValue("direction");a=a.getFieldValue("speed");Blockly.Arduino.setups_.setup_motorb="pinMode(D2, OUTPUT);\n  pinMode(D4, OUTPUT);";Blockly.Arduino.definitions_.define_motorb="void motorB(int motorDirection, int motorSpeed) {\n  digitalWrite(D4, motorDirection);\n  analogWrite(D2, motorSpeed);\n}";return"motorB("+b+", "+a+");\n"};
Blockly.Arduino.linefollowingsensor=function(a){var b=a.getFieldValue("sensor_left"),c=a.getFieldValue("sensor_center");a=a.getFieldValue("sensor_right");Blockly.Arduino.setups_.setup_linefollowingsensor="pinMode(D6, INPUT);\n  pinMode(D7, INPUT);\n  pinMode(D8, INPUT);";return code="if (digitalRead(D6) == "+b+" && digitalRead(D7) == "+c+" && digitalRead(D8) == "+a+") {\n}\n"};