import type { INodeProperties } from 'n8n-workflow';

export const initiatePayrollRunDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Run"
					]
				}
			},
			"options": [
				{
					"name": "Post Initiate Payroll Run By Payroll Administration ID",
					"value": "Post Initiate Payroll Run By Payroll Administration ID",
					"action": "Initiate payroll run (verlonen)",
					"description": "__Activity name :__ PostInitiatePayrollRunByPayrollAdministrationId This is a controller endpoint to perform an action.\n\nIn the older Loket GUI this specific action is referred to as respectively 'Verlonen' / 'Verlonen periode zonder personeel' / 'Verlonen voorgaande jaren' . If this action is performed succesfully then the payroll run will be created with status 0 and will be cued for further processing. The further processing depends on the input parameters and the payroll configuration in the given situation. After the initiated run has been picked up and processed by the background process, then the status of the run will be changed accordingly.\n\nThis action may be performed for all payroll periods that are *available for the payroll administration* AND that meet one of the following requirements;\n\nIf typeOfInitiation = 'regular' (Verlonen);\n* The very last payroll period for which an approved payroll run (status = 9) is available. Within the given year of payrolling. (This would functionally be a so-called 'correction' run)\n* The very first payroll period in time that does not yet have an approved payroll run (i.e. last payroll period with approved run + 1). Within the given year of payrolling, if available\n* The provided year may be a maximum of 7 years in the past (based on current datetime)\n\nIf typeOfInitiation = 'withoutEmploymentData' (Verlonen zonder personeel);\n* The very first payroll period in time that does not yet have an approved payroll run (i.e. last payroll period with approved run + 1). Within the active year of payrolling\n* Please note that if this type is selected then the following fields must ALL be set to null; sendEmailToEmployee, textPaySlip, textTariffPaySlip, textPayment, emailAdressPayrollRunStarted, emailFinishedPayrollRun\n\n\nIn general;\n* It is not possible to initiate a new payroll run if there is currently a payroll run with status 0  (to be processed) or 1 (awaiting approval) within the payroll administation.\n\n\n__Metadata :__  No metadata endpoint available for this controller endpoint.\n\n__Defaults :__ Defaults endpoint is available for this controller endpoint by adding /defaults. Also, an endpoint is available to retrieve initiation values for a specific period.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollruns/initiate"
						}
					}
				},
				{
					"name": "Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID",
					"value": "Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID",
					"action": "Initiationvalues of a payrollrun",
					"description": "__Activity name :__ GetPayrollrunInitiationvaluesByPayrollAdministrationIdAndPeriodId \n\nGet the initiation values for initiating a payrollrun for a specific period.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollruns/{{$parameter[\"periodId\"]}}/initiationvalues"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollruns/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Run"
					],
					"operation": [
						"Post Initiate Payroll Run By Payroll Administration ID"
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
						"Initiate Payroll Run"
					],
					"operation": [
						"Post Initiate Payroll Run By Payroll Administration ID"
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
						"Initiate Payroll Run"
					],
					"operation": [
						"Post Initiate Payroll Run By Payroll Administration ID"
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
						"Initiate Payroll Run"
					],
					"operation": [
						"Post Initiate Payroll Run By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Initiation Parameters",
			"name": "initiationParameters",
			"type": "json",
			"default": "{\n  \"emailAddressPayrollRunFinished\": \"info@loket.nl\",\n  \"emailAddressPayrollRunStarted\": \"info@loket.nl\"\n}",
			"routing": {
				"send": {
					"property": "initiationParameters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Run"
					],
					"operation": [
						"Post Initiate Payroll Run By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollruns/{periodId}/initiationvalues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Run"
					],
					"operation": [
						"Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID"
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
						"Initiate Payroll Run"
					],
					"operation": [
						"Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID"
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
						"Initiate Payroll Run"
					],
					"operation": [
						"Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payrollrun ID",
			"name": "payrollrunId",
			"required": true,
			"description": "The unique identifier of the payroll run",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollrunId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Run"
					],
					"operation": [
						"Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period ID",
			"name": "payrollPeriodId",
			"required": true,
			"description": "The unique identifier of the payroll period",
			"default": "202103",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "payrollPeriodId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Run"
					],
					"operation": [
						"Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Administration ID",
			"name": "payrollAdministrationId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Run"
					],
					"operation": [
						"Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID"
					]
				}
			}
		},
		{
			"displayName": "Period ID",
			"name": "periodId",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Initiate Payroll Run"
					],
					"operation": [
						"Get Payrollrun Initiationvalues By Payroll Administration ID And Period ID"
					]
				}
			}
		},
];
