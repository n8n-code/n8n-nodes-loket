import type { INodeProperties } from 'n8n-workflow';

export const authorizationSetsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization Sets"
					]
				}
			},
			"options": [
				{
					"name": "Get Authorization Sets By Authorization Set ID",
					"value": "Get Authorization Sets By Authorization Set ID",
					"action": "Details of a authorization set",
					"description": "__Activity name :__ GetAuthorizationSetsByAuthorizationSetId \n\n\n Details of an authorization set. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/authorizationsets/{{$parameter[\"authorizationsetid\"]}}"
						}
					}
				},
				{
					"name": "Get Authorization Sets By Provider ID",
					"value": "Get Authorization Sets By Provider ID",
					"action": "List of authorization sets",
					"description": "__Activity name :__ GetAuthorizationSetsByProviderId \n\n\n List the available authorization sets. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/authorizationsets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/authorizationsets/{authorizationsetid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Authorization Set ID"
					]
				}
			}
		},
		{
			"displayName": "Authorization Set ID",
			"name": "authorizationSetId",
			"required": true,
			"description": "The unique identifier of an authorization set",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "authorizationSetId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Authorization Set ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Authorization Set ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Authorization Set ID"
					]
				}
			}
		},
		{
			"displayName": "Authorizationsetid",
			"name": "authorizationsetid",
			"required": true,
			"description": "Automatically added",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Authorization Set ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/authorizationsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Provider ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Provider ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Provider ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Provider ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Provider ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Provider ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Provider ID"
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
						"Authorization Sets"
					],
					"operation": [
						"Get Authorization Sets By Provider ID"
					]
				}
			}
		},
];
