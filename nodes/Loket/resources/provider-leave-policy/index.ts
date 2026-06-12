import type { INodeProperties } from 'n8n-workflow';

export const providerLeavePolicyDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					]
				}
			},
			"options": [
				{
					"name": "Get Provider Leave Policy By Leave Policy ID",
					"value": "Get Provider Leave Policy By Leave Policy ID",
					"action": "A single leave policy",
					"description": "__Activity name :__ GetProviderLeavePolicyByLeavePolicyId\n\nReturns one leave policy",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}"
						}
					}
				},
				{
					"name": "Get Provider Age Based Leave By Leave Policy ID",
					"value": "Get Provider Age Based Leave By Leave Policy ID",
					"action": "Age based leave",
					"description": "__Activity name :__ GetProviderAgeBasedLeaveByLeavePolicyId <br/>  <br/>  Returns the age based leave for the given leave policy at provider level.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/agebasedleave"
						}
					}
				},
				{
					"name": "Get Provider Wage Based Leave By Leave Policy ID",
					"value": "Get Provider Wage Based Leave By Leave Policy ID",
					"action": "Wage based leave",
					"description": "__Activity name :__ GetProviderWageBasedLeaveByLeavePolicyId <br/>  <br/>  Returns the wage based leave for the given leave policy at provider level.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/wagebasedleave"
						}
					}
				},
				{
					"name": "Get Provider Years Of Service Based Leave By Leave Policy ID",
					"value": "Get Provider Years Of Service Based Leave By Leave Policy ID",
					"action": "years of service based leave",
					"description": "__Activity name :__ GetProviderYearsOfServiceBasedLeaveByLeavePolicyId <br/>  <br/>  Returns the years of service based leave for the given leave policy at providerlevel.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/leavePolicies/{{$parameter[\"leavePolicyId\"]}}/yearsofservicebasedleave"
						}
					}
				},
				{
					"name": "Get Provider Leave Policies By Provider ID",
					"value": "Get Provider Leave Policies By Provider ID",
					"action": "List of all the leave policies at provider level.",
					"description": "__Activity name :__ GetProviderLeavePoliciesByProviderId <br/>  <br/>  Returns all the leave policies for the given provider. These leave policies can be used to define a leave policy at employer level.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/leavePolicies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/leavePolicies/{leavePolicyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policy By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policy By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policy By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policy By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policy By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policy By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policy By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/leavePolicies/{leavePolicyId}/agebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Age Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Age Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Age Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Age Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Age Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Age Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Age Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/leavePolicies/{leavePolicyId}/wagebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Wage Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Wage Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Wage Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Wage Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Wage Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Wage Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Wage Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/leavePolicies/{leavePolicyId}/yearsofservicebasedleave",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "Leave Policy ID",
			"name": "leavePolicyId",
			"required": true,
			"description": "The unique identifier of the leave policy",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Years Of Service Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Years Of Service Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Years Of Service Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Years Of Service Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Years Of Service Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Years Of Service Based Leave By Leave Policy ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Years Of Service Based Leave By Leave Policy ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/leavePolicies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policies By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Provider ID",
			"name": "providerId",
			"required": true,
			"description": "The unique identifier of a provider",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policies By Provider ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policies By Provider ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policies By Provider ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policies By Provider ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policies By Provider ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policies By Provider ID"
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
						"Provider Leave Policy"
					],
					"operation": [
						"Get Provider Leave Policies By Provider ID"
					]
				}
			}
		},
];
