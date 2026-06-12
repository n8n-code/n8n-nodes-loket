import type { INodeProperties } from 'n8n-workflow';

export const importDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					]
				}
			},
			"options": [
				{
					"name": "Patch Import Concept Employees By Payroll Administration ID",
					"value": "Patch Import Concept Employees By Payroll Administration ID",
					"action": "Import concept employees via a file",
					"description": "__Activity name :__ PatchImportConceptEmployeesByPayrollAdministrationId\n\n__Metadata:__ No metadata\n\nCurrently supported file is the payroll tax return XML (year 2022 or later).\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/providers/employers/conceptemployees/import/{{$parameter[\"payrollAdministrationId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PATCH /providers/employers/conceptemployees/import/{payrollAdministrationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Patch Import Concept Employees By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "Concept Employee ID",
			"name": "conceptEmployeeId",
			"required": true,
			"description": "The unique identifier of the concept employee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "conceptEmployeeId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Patch Import Concept Employees By Payroll Administration ID"
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
						"Import"
					],
					"operation": [
						"Patch Import Concept Employees By Payroll Administration ID"
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
						"Import"
					],
					"operation": [
						"Patch Import Concept Employees By Payroll Administration ID"
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
						"Import"
					],
					"operation": [
						"Patch Import Concept Employees By Payroll Administration ID"
					]
				}
			}
		},
		{
			"displayName": "PATCH /providers/employers/conceptemployees/import/{payrollAdministrationId}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import"
					],
					"operation": [
						"Patch Import Concept Employees By Payroll Administration ID"
					]
				}
			}
		},
];
