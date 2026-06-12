import type { INodeProperties } from 'n8n-workflow';

export const payrollTaxReturnResponseMessageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Response Message"
					]
				}
			},
			"options": [
				{
					"name": "Post Send Response Message By Payroll Tax Return ID",
					"value": "Post Send Response Message By Payroll Tax Return ID",
					"action": "Send the response message for the payroll tax return",
					"description": "__Activity name :__ PostSendResponseMessageByPayrollTaxReturnId\n\nSend the response message of the payroll tax return (loonaangifte) that was received from the Belastingdienst,  to Loket.nl . \nThis is ONLY applicable for the limited group of parties that send and receive the payroll tax return themselves to the Belastingdienst. For the purposes of having those results visible in Loket the corresponding response message can be send to Loket via this endpoint.\n\nWhat this endpoint does is the following:\n* It will receive the xml response message. For the schema (XSD) of this xml response message we refer to the documentation by the Belastingdienst itself\n* A set of input validations will be performed.\n* If those steps are succesful the xml response message will placed in a designated directory. Where it will be picked up for final processing by a proces that runs about every 15 minutes\n* In other words; the result of this action will NOT be immediately visible\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns/{{$parameter[\"payrolltaxreturnId\"]}}/sendresponsemessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/payrolltaxreturns/{payrolltaxreturnId}/sendresponsemessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Response Message"
					],
					"operation": [
						"Post Send Response Message By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "Payrolltaxreturn ID",
			"name": "payrolltaxreturnId",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Response Message"
					],
					"operation": [
						"Post Send Response Message By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "A valid Bearer token for authorizing the request.",
			"default": "Bearer <TOKEN>",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Response Message"
					],
					"operation": [
						"Post Send Response Message By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "Accept",
			"name": "Accept",
			"required": true,
			"description": "The accept header is used to influence what type of output is returned and in most cases the version of the output",
			"default": "application/json;version=2018-01-01",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Accept": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Response Message"
					],
					"operation": [
						"Post Send Response Message By Payroll Tax Return ID"
					]
				}
			}
		},
		{
			"displayName": "Response Message File",
			"name": "responseMessageFile",
			"type": "string",
			"default": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iSVNPLTg4NTktMSI/Pgo8UmVzcG9uc2VtZXNzYWdlIHZlcnNpb249IjIwMDYuMSI+Cgk8SWRlbnRpZmljYXRpb24+CgkJPE1lc3NhZ2VJZD5BLWVmMmJmMTQwMjMxYzExZTA4MWM5MGE5ZTA0MGIxMjM0PC9NZXNzYWdlSWQ+CgkJPFJlZmVyc1RvTWVzc2FnZUlkPlZTUDAwMTAwMTE4MzcyMkwwNDAwMDAwMTIwMTIzNDwvUmVmZXJzVG9NZXNzYWdlSWQ+CgkJPE1lc3NhZ2VJZEJkPmVmMmJmMTQwMjMxYzExZTA4MWM5MGE5ZTA0MGIxMjM0PC9NZXNzYWdlSWRCZD4KCQk8RGF0dW1UaWpkT250dmFuZ3N0PjIwMjAtMDEtMThUMTY6MDY6MzlaPC9EYXR1bVRpamRPbnR2YW5nc3Q+CgkJPFJlc3BvbnNlVHlwZT5hY2tub3dsZWRnZW1lbnQ8L1Jlc3BvbnNlVHlwZT4KCTwvSWRlbnRpZmljYXRpb24+CjwvUmVzcG9uc2VtZXNzYWdlPgo",
			"description": "base64 encoded xml file of the response message",
			"routing": {
				"send": {
					"property": "responseMessageFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return Response Message"
					],
					"operation": [
						"Post Send Response Message By Payroll Tax Return ID"
					]
				}
			}
		},
];
