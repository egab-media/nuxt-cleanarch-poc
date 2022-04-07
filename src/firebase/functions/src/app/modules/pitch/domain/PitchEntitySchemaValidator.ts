// import { JSONSchemaType } from "ajv";
// import { PitchEntity } from "./PitchEntity";

export const PitchEntitySchemaValidator = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "definitions": {
    "DummyCollectionNames": {
      "type": "object",
    },
    "PitchEntity": {
      "properties": {
        "description": {
          "type": "string",
        },
        "due": {
          "format": "date-time",
          "type": "string",
        },
        "schedule": {
          "format": "date-time",
          "type": "string",
        },
        "state": {
          "$ref": "#/definitions/PitchState",
        },
        "title": {
          "type": "string",
        },
      },
      "required": [
        "description",
        "due",
        "schedule",
        "state",
        "title",
      ],
      "type": "object",
    },
    "PitchState": {
      "enum": [
        "APPROVED",
        "CHANGE",
        "REVIEW",
      ],
      "type": "string",
    },
  },
};
