import type { INodeProperties } from 'n8n-workflow';

export const initiatePayrollTaxReturnDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Tax Return"
					]
				}
			},
			"options": [
				{
					"name": "Post Initiate Payroll Tax Return By Payroll Administration ID",
					"value": "Post Initiate Payroll Tax Return By Payroll Administration ID",
					"action": "Initiate payroll tax return (aanmaken loonaangifte)",
					"description": "__Activity name :__ PostInitiatePayrollTaxReturnByPayrollAdministrationId\n\nThis is a controller endpoint to perform an action. \n\n\n __Metadata :__  \n There is a metadata endpoint that will return process information rather then true metadata. \n This endpoint is available by simply adding /metadata behind the URI.\n\n\n __Defaults :__ Default values for a new object can be acquired (GET) by adding `/defaults' to the POST URL. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrolltaxreturns/initiate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/{payrollAdministrationId}/payrolltaxreturns/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Tax Return"
					],
					"operation": [
						"Post Initiate Payroll Tax Return By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Administration ID",
			"name": "payrollAdministrationId",
			"required": true,
			"description": "The unique identifier of an administration",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Tax Return"
					],
					"operation": [
						"Post Initiate Payroll Tax Return By Payroll Administration ID"
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
						"Initiate Payroll Tax Return"
					],
					"operation": [
						"Post Initiate Payroll Tax Return By Payroll Administration ID"
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
						"Initiate Payroll Tax Return"
					],
					"operation": [
						"Post Initiate Payroll Tax Return By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Notify Of Initiation",
			"name": "notifyOfInitiation",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "notifyOfInitiation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Tax Return"
					],
					"operation": [
						"Post Initiate Payroll Tax Return By Payroll Administration ID"
					]
				}
			}
		},
];
