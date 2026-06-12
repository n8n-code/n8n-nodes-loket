import type { INodeProperties } from 'n8n-workflow';

export const proformaDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Proforma"
					]
				}
			},
			"options": [
				{
					"name": "Get Proforma Status By Employer ID",
					"value": "Get Proforma Status By Employer ID",
					"action": "Get the status of proforma for this employer",
					"description": "__Activity name :__ GetProformaStatusByEmployerId\n\nGet the status of proforma for this employer\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/proforma"
						}
					}
				},
				{
					"name": "Post Initialize Proforma By Employer ID",
					"value": "Post Initialize Proforma By Employer ID",
					"action": "Initialize the proforma environment",
					"description": "__Activity name:__ PostInitializeProformaByEmployerId\n\nInitialize a proforma environment (request the copying of data from live to proforma).\n\n__Metadata :__ None\n\n__Defaults :__ None\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/proforma/initialize"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/proforma",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Proforma"
					],
					"operation": [
						"Get Proforma Status By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Proforma"
					],
					"operation": [
						"Get Proforma Status By Employer ID"
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
						"Proforma"
					],
					"operation": [
						"Get Proforma Status By Employer ID"
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
						"Proforma"
					],
					"operation": [
						"Get Proforma Status By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/proforma/initialize",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Proforma"
					],
					"operation": [
						"Post Initialize Proforma By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employer ID",
			"name": "employerId",
			"required": true,
			"description": "The unique identifier of the employer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Proforma"
					],
					"operation": [
						"Post Initialize Proforma By Employer ID"
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
						"Proforma"
					],
					"operation": [
						"Post Initialize Proforma By Employer ID"
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
						"Proforma"
					],
					"operation": [
						"Post Initialize Proforma By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"type": "string",
			"default": "904d6856-6034-4624-bcbc-886188c115c5",
			"description": "If this Id is set all the employment of the specific employee will be copied to the proforma environment otherwise all employments are copied.\n\nDoes not work in combination with `proformaType` = \"Zonder dienstverbanden\"",
			"routing": {
				"send": {
					"property": "employeeId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Proforma"
					],
					"operation": [
						"Post Initialize Proforma By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Proforma Type",
			"name": "proformaType",
			"type": "options",
			"default": "WithSalaryResultsWithSalaryVariables",
			"options": [
				{
					"name": "With Salary Results With Salary Variables",
					"value": "WithSalaryResultsWithSalaryVariables"
				},
				{
					"name": "With Salary Results Without Salary Variables",
					"value": "WithSalaryResultsWithoutSalaryVariables"
				},
				{
					"name": "Without Salary Results With Salary Variables",
					"value": "WithoutSalaryResultsWithSalaryVariables"
				},
				{
					"name": "Without Salary Results Without Salary Variables",
					"value": "WithoutSalaryResultsWithoutSalaryVariables"
				},
				{
					"name": "Without Employments",
					"value": "WithoutEmployments"
				}
			],
			"routing": {
				"send": {
					"property": "proformaType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Proforma"
					],
					"operation": [
						"Post Initialize Proforma By Employer ID"
					]
				}
			}
		},
];
