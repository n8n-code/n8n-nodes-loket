import type { INodeProperties } from 'n8n-workflow';

export const initialisePayrollPeriodDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Initialise Payroll Period"
					]
				}
			},
			"options": [
				{
					"name": "Post Initialise Payroll Period By Payroll Administration ID",
					"value": "Post Initialise Payroll Period By Payroll Administration ID",
					"action": "Initialise Payroll Period (automatische processen)",
					"description": "__Activity name :__ PostInitialisePayrollPeriodByPayrollAdministrationId This is a controller endpoint to perform an action.\n\n\nIn the older Loket GUI this specific action is referred to as 'Automatische processen activeren'. If this action is performed for the chosen payroll period then certain calculations will be performed on the background. The execution depends on the input parameters and the payroll configuration in the given situation.\n\n\nThis action may be performed for all payroll periods that are available for the payroll administration AND that meet one of the following requirements;\n* Payroll periods for which an approved payroll run (status = 9) is available\n* The very first payroll period in time that does not yet have an approved payroll run(i.e. last payroll period with approved run + 1). Within each year, if available.\n\nIn practice, in many instances the second option will be most relevant. Please note that if the action is performed for a year that is not the current active year of payrolling, then the resulting changes may not be fully processed in regards to the full payroll process.\n\n\n__Metadata :__  No metadata endpoint available for this controller endpoint.\n\n__Defaults :__ Defaults endpoint is available for this controller endpoint.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/payrolladministrations/{{$parameter[\"payrollAdministrationId\"]}}/payrollperiods/initialise"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/payrolladministrations/{payrollAdministrationId}/payrollperiods/initialise",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
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
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
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
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
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
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Period",
			"name": "payrollPeriod",
			"type": "json",
			"default": "{\n  \"periodNumber\": 1,\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "payrollPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Set Annual Base For Calculations Based On Funds",
			"name": "setAnnualBaseForCalculationsBasedOnFunds",
			"type": "boolean",
			"default": false,
			"description": "Jaargrondslag fondsen bepalen. Sets baseForCalculationsBasedOnFunds-related component(s) in the payroll period data based on the configuration of the employment.",
			"routing": {
				"send": {
					"property": "setAnnualBaseForCalculationsBasedOnFunds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Set Base For Calculations",
			"name": "setBaseForCalculations",
			"type": "boolean",
			"default": false,
			"description": "Grondslagen activeren. Sets baseForCalculation-related component(s) in the payroll period data based on the configuration of the employment.",
			"routing": {
				"send": {
					"property": "setBaseForCalculations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Set Hours Worked",
			"name": "setHoursWorked",
			"type": "boolean",
			"default": false,
			"description": "Berekenen uren. Sets hours worked-related component(s) in the payroll period data based on the configuration of the employment.",
			"routing": {
				"send": {
					"property": "setHoursWorked",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Set Leave Hours",
			"name": "setLeaveHours",
			"type": "boolean",
			"default": false,
			"description": "Verlofuren op basis van uren bepalen. Sets leave hours-related component(s) in the payroll period data based on the configuration of the employment.",
			"routing": {
				"send": {
					"property": "setLeaveHours",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Initialise Payroll Period"
					],
					"operation": [
						"Post Initialise Payroll Period By Payroll Administration ID"
					]
				}
			}
		},
];
