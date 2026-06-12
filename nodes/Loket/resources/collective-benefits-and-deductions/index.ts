import type { INodeProperties } from 'n8n-workflow';

export const collectiveBenefitsAndDeductionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Benefits And Deductions"
					]
				}
			},
			"options": [
				{
					"name": "Post Collective Benefits And Deductions By Employer ID",
					"value": "Post Collective Benefits And Deductions By Employer ID",
					"action": "Create benefits and deductions for multiple employments",
					"description": "__Activity name :__ PostCollectiveBenefitsAndDeductionsByEmployerId\n\nCreate new benefits and deduction records for multiple employments of an employer\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/employees/employments/benefitsanddeductions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/{employerId}/employees/employments/benefitsanddeductions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Benefits And Deductions"
					],
					"operation": [
						"Post Collective Benefits And Deductions By Employer ID"
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
						"Collective Benefits And Deductions"
					],
					"operation": [
						"Post Collective Benefits And Deductions By Employer ID"
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
						"Collective Benefits And Deductions"
					],
					"operation": [
						"Post Collective Benefits And Deductions By Employer ID"
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
						"Collective Benefits And Deductions"
					],
					"operation": [
						"Post Collective Benefits And Deductions By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)\n",
			"routing": {
				"send": {
					"property": "employmentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Benefits And Deductions"
					],
					"operation": [
						"Post Collective Benefits And Deductions By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Payroll Component",
			"name": "payrollComponent",
			"type": "json",
			"default": "{\n  \"key\": 1\n}",
			"description": "A payroll component is the link to the salary calculation. By setting the value of a component the salary calculation will take this value into account when calculating the wage of the employment.\n\n`payrollComponent` is a metadata field within the payroll administration context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "payrollComponent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Benefits And Deductions"
					],
					"operation": [
						"Post Collective Benefits And Deductions By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "1995-05-21",
			"description": "The start date for the information in the record.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.\n__Note__ It is posible to have no wage record.\n",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Benefits And Deductions"
					],
					"operation": [
						"Post Collective Benefits And Deductions By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "value",
			"type": "number",
			"default": 80,
			"description": "The value for the component\n",
			"routing": {
				"send": {
					"property": "value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collective Benefits And Deductions"
					],
					"operation": [
						"Post Collective Benefits And Deductions By Employer ID"
					]
				}
			}
		},
];
