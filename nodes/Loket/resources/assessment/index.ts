import type { INodeProperties } from 'n8n-workflow';

export const assessmentDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					]
				}
			},
			"options": [
				{
					"name": "Post Initiate Assessment By Concept Employee ID",
					"value": "Post Initiate Assessment By Concept Employee ID",
					"action": "Initiate assessment",
					"description": "__Activity name :__ PostInitiateAssessmentByConceptEmployeeId\n\n__Metadata:__ No metadata available. No defaults available.\n\n\nInitiate the proces to perform an assessment for a concept employee.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/conceptemployees/{{$parameter[\"conceptEmployeeId\"]}}/assessment/initiate"
						}
					}
				},
				{
					"name": "Get Assessments By Employer ID",
					"value": "Get Assessments By Employer ID",
					"action": "List of assessments",
					"description": "__Activity name :__ GetAssessmentsByEmployerId\n\n\nRetrieve a list of assessments.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/assessments"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /providers/employers/conceptemployees/{conceptEmployeeId}/assessment/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					],
					"operation": [
						"Post Initiate Assessment By Concept Employee ID"
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
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					],
					"operation": [
						"Post Initiate Assessment By Concept Employee ID"
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
						"Assessment"
					],
					"operation": [
						"Post Initiate Assessment By Concept Employee ID"
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
						"Assessment"
					],
					"operation": [
						"Post Initiate Assessment By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "With Iq",
			"name": "withIq",
			"type": "boolean",
			"default": true,
			"description": "The type of the assessment",
			"routing": {
				"send": {
					"property": "withIq",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					],
					"operation": [
						"Post Initiate Assessment By Concept Employee ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/assessments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					],
					"operation": [
						"Get Assessments By Employer ID"
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
						"Assessment"
					],
					"operation": [
						"Get Assessments By Employer ID"
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
						"Assessment"
					],
					"operation": [
						"Get Assessments By Employer ID"
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
						"Assessment"
					],
					"operation": [
						"Get Assessments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "filter",
			"description": "Filter the collection",
			"default": "cancellationPeriodTimeUnit.key eq 4",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "filter",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					],
					"operation": [
						"Get Assessments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "orderBy",
			"description": "Order the collection on one or more fields",
			"default": "-companyName,address.houseNumber",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "orderBy",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					],
					"operation": [
						"Get Assessments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Number",
			"name": "pageNumber",
			"description": "Specifies which page should be returned",
			"default": 2,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					],
					"operation": [
						"Get Assessments By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "pageSize",
			"description": "Specifies the number of objects per page",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "pageSize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Assessment"
					],
					"operation": [
						"Get Assessments By Employer ID"
					]
				}
			}
		},
];
