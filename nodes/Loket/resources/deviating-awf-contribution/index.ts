import type { INodeProperties } from 'n8n-workflow';

export const deviatingAwfContributionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					]
				}
			},
			"options": [
				{
					"name": "Delete Deviating Awf Contribution By Deviating Awf Contribution ID",
					"value": "Delete Deviating Awf Contribution By Deviating Awf Contribution ID",
					"action": "Delete a specific Deviating AWF contributions record",
					"description": "__Activity name:__ DeleteDeviatingAwfContributionByDeviatingAwfContributionId\n\nDelete a Deviating AWF contribution record for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/deviatingawfcontributions/{{$parameter[\"deviatingAwfContributionId\"]}}"
						}
					}
				},
				{
					"name": "Get Deviating Awf Contribution By Deviating Awf Contribution ID",
					"value": "Get Deviating Awf Contribution By Deviating Awf Contribution ID",
					"action": "Details of a Deviating AWF contributions record",
					"description": "__Activity name:__ GetDeviatingAwfContributionByDeviatingAwfContributionId\n\nGet the details of a Deviating AWF contributions record\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/deviatingawfcontributions/{{$parameter[\"deviatingAwfContributionId\"]}}"
						}
					}
				},
				{
					"name": "Put Deviating Awf Contribution By Deviating Awf Contribution ID",
					"value": "Put Deviating Awf Contribution By Deviating Awf Contribution ID",
					"action": "Edit the details of a Deviating AWF contributions record",
					"description": "__Activity name:__ PutDeviatingAwfContributionByDeviatingAwfContributionId\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding ` / metadata ` to the PUT URL.\n\nEdit the details for a Deviating AWF contribution record\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/deviatingawfcontributions/{{$parameter[\"deviatingAwfContributionId\"]}}"
						}
					}
				},
				{
					"name": "Get Deviating Awf Contribution By Employment ID",
					"value": "Get Deviating Awf Contribution By Employment ID",
					"action": "List of Deviating AWF contributions records for an employment",
					"description": "__Activity name:__ GetDeviatingAwfContributionsByEmploymentId\nGet the list of Deviating AWF contributions records for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/deviatingawfcontributions"
						}
					}
				},
				{
					"name": "Post Deviating Awf Contribution By Employment ID",
					"value": "Post Deviating Awf Contribution By Employment ID",
					"action": "Create a Deviating AWF contributions record for an employment",
					"description": "__Activity name:__ PostDeviatingAwfContributionByEmploymentId\nCreate a Deviating AWF contributions record for an employment\n\n__Metadata:__ Possible options for fields of the type 'metadata' can be acquired(GET)by adding `/metadata` to the POST URL.\n\n__Defaults:__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/deviatingawfcontributions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/deviatingawfcontributions/{deviatingAwfContributionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Delete Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Awf Contribution ID",
			"name": "deviatingAwfContributionId",
			"required": true,
			"description": "The unique identifier of the Deviating AWF contribution record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Delete Deviating Awf Contribution By Deviating Awf Contribution ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Delete Deviating Awf Contribution By Deviating Awf Contribution ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Delete Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Delete Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/deviatingawfcontributions/{deviatingAwfContributionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Awf Contribution ID",
			"name": "deviatingAwfContributionId",
			"required": true,
			"description": "The unique identifier of the Deviating AWF contribution record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Deviating Awf Contribution ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Deviating Awf Contribution ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/deviatingawfcontributions/{deviatingAwfContributionId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Awf Contribution ID",
			"name": "deviatingAwfContributionId",
			"required": true,
			"description": "The unique identifier of the Deviating AWF contribution record",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "Input the value acquired in the ETag header for concurrency control. Please note this is optional (and not recommended for most types of integrations).",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "End Period",
			"name": "endPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "endPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "Start Period",
			"name": "startPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "startPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "Type Of Deviating Awf Contribution",
			"name": "typeOfDeviatingAwfContribution",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Hoog\"\n}",
			"routing": {
				"send": {
					"property": "typeOfDeviatingAwfContribution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Put Deviating Awf Contribution By Deviating Awf Contribution ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/deviatingawfcontributions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Employment ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Employment ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Employment ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Employment ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Employment ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Employment ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Get Deviating Awf Contribution By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/deviatingawfcontributions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Post Deviating Awf Contribution By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Employment ID",
			"name": "employmentId",
			"required": true,
			"description": "The unique identifier of the employment",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Post Deviating Awf Contribution By Employment ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Post Deviating Awf Contribution By Employment ID"
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
						"Deviating AWF Contribution"
					],
					"operation": [
						"Post Deviating Awf Contribution By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Period",
			"name": "endPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "endPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Post Deviating Awf Contribution By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "b14acd0d-75d7-4fc8-8b22-4a3924585cab",
			"description": "The unique identifier of an object (GUID/UUID)",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Post Deviating Awf Contribution By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Period",
			"name": "startPeriod",
			"type": "json",
			"default": "{\n  \"periodEndDate\": \"2018-01-31\",\n  \"periodNumber\": 1,\n  \"periodStartDate\": \"2018-01-01\",\n  \"year\": 2017\n}",
			"routing": {
				"send": {
					"property": "startPeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Post Deviating Awf Contribution By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Type Of Deviating Awf Contribution",
			"name": "typeOfDeviatingAwfContribution",
			"type": "json",
			"default": "{\n  \"key\": 2,\n  \"value\": \"Hoog\"\n}",
			"routing": {
				"send": {
					"property": "typeOfDeviatingAwfContribution",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Deviating AWF Contribution"
					],
					"operation": [
						"Post Deviating Awf Contribution By Employment ID"
					]
				}
			}
		},
];
