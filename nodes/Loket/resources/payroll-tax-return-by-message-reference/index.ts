import type { INodeProperties } from 'n8n-workflow';

export const payrollTaxReturnByMessageReferenceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return By Message Reference"
					]
				}
			},
			"options": [
				{
					"name": "Patch Payroll Tax Return By Message Reference",
					"value": "Patch Payroll Tax Return By Message Reference",
					"action": "Change the status of payroll tax returns",
					"description": "__Activity name :__ PatchPayrollTaxReturnByMessageReference\n\nThis endpoints changes the status of the payroll tax returns provided in the path parameters based on the provided action.\n\nFunctionally, this endpoint is very similar to PatchPayrollTaxReturnsByPayrollTaxReturnIds endpoint,  however this endpoint takes the messageReference (NL: BERICHTKENMERK) as path id. Instead of payrollTaxReturnId (GUID). AND, in contrast, this endpoint is a SINGLE PATCH endpoint which consumes a path id.  \n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns/{{$parameter[\"messageReference\"]}}"
						}
					}
				},
				{
					"name": "Post Send Response Message By Message Reference",
					"value": "Post Send Response Message By Message Reference",
					"action": "Send the response message for the payroll tax return",
					"description": "__Activity name :__ PostSendResponseMessageByMessageReference\n\nThis endpoint is identical to PostSendResponseMessageByPayrollTaxReturnId endpoint,  however this endpoint takes the messageReference (NL: BERICHTKENMERK) as path id. Instead of payrollTaxReturnId (GUID).  \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/payrolltaxreturns/{{$parameter[\"messageReference\"]}}/sendresponsemessagebymessagereference"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/payrolladministrations/payrolltaxreturns/{messageReference}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Patch Payroll Tax Return By Message Reference"
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
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Patch Payroll Tax Return By Message Reference"
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
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Patch Payroll Tax Return By Message Reference"
					]
				}
			}
		},
		{
			"displayName": "Message Reference",
			"name": "messageReference",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Patch Payroll Tax Return By Message Reference"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Action",
			"name": "action",
			"type": "options",
			"default": "confirm",
			"description": "The action to perform on the payroll tax return",
			"options": [
				{
					"name": "Confirm",
					"value": "confirm"
				},
				{
					"name": "Cancel",
					"value": "cancel"
				}
			],
			"routing": {
				"send": {
					"property": "action",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Patch Payroll Tax Return By Message Reference"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/payrolltaxreturns/{messageReference}/sendresponsemessagebymessagereference",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Post Send Response Message By Message Reference"
					]
				}
			}
		},
		{
			"displayName": "Message Reference",
			"name": "messageReference",
			"required": true,
			"description": "The unique identifier of the payroll tax return",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Post Send Response Message By Message Reference"
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
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Post Send Response Message By Message Reference"
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
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Post Send Response Message By Message Reference"
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
						"Payroll Tax Return By Message Reference"
					],
					"operation": [
						"Post Send Response Message By Message Reference"
					]
				}
			}
		},
];
