import type { INodeProperties } from 'n8n-workflow';

export const dashboardLicensesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Dashboard Licenses"
					]
				}
			},
			"options": [
				{
					"name": "Get Dashboard Licenses By Employer ID",
					"value": "Get Dashboard Licenses By Employer ID",
					"action": "Get the list dashboard licenses",
					"description": "__Activity name :__ GetDashboardLicensesByEmployerId\n\n\n Get the list dashboard licenses\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/dashboardLicenses"
						}
					}
				},
				{
					"name": "Put Dashboard Licenses By Employer ID",
					"value": "Put Dashboard Licenses By Employer ID",
					"action": "Edit the dashboard license",
					"description": "__Activity name:__ PutDashboardLicensesByEmployerId\n\nEdit the dashboard licenses\n\n__Metadata :__ There is no metadata endpoint for this resource.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/dashboardLicenses"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/dashboardLicenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dashboard Licenses"
					],
					"operation": [
						"Get Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Get Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Get Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Get Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Get Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Get Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Get Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Get Dashboard Licenses By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/{employerId}/dashboardLicenses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dashboard Licenses"
					],
					"operation": [
						"Put Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Put Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Put Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Put Dashboard Licenses By Employer ID"
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
						"Dashboard Licenses"
					],
					"operation": [
						"Put Dashboard Licenses By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "json",
			"default": "{\n  \"license\": {\n    \"user\": {\n      \"personalDetails\": {\n        \"firstName\": \"Susan\",\n        \"initials\": \"S.L.\",\n        \"lastName\": \"Bergen\",\n        \"prefix\": \"van\"\n      },\n      \"userId\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n    }\n  }\n}",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dashboard Licenses"
					],
					"operation": [
						"Put Dashboard Licenses By Employer ID"
					]
				}
			}
		},
];
