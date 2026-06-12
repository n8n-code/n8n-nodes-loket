import type { INodeProperties } from 'n8n-workflow';

export const providerDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					]
				}
			},
			"options": [
				{
					"name": "Get Providers By User",
					"value": "Get Providers By User",
					"action": "List of providers",
					"description": "__Activity name :__ GetProvidersByUser\n\nGet a list of all providers accessible to the current user.\nNote: With the current functioning of Loket, the list will always contain 1 provider.\n\nNote: This endpoint is typically not relevant for most external parties, as the GetEmployerByUser endpoint will be much more relevant as starting point.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers"
						}
					}
				},
				{
					"name": "Get Provider Logo",
					"value": "Get Provider Logo",
					"action": "Download the provider logo",
					"description": "__Activity name :__ GetProviderLogo\n\nThis activity is listed twice in the documentation due to the specified version caching path parameter. Including or exluding this parameter results in slightly different behaviour.\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.\n\nGet the logo of the provider of the user. In case no logo is know the service will return a 404.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/logo"
						}
					}
				},
				{
					"name": "Get Provider Logo By Version",
					"value": "Get Provider Logo By Version",
					"action": "Download the provider logo",
					"description": "__Activity name :__ GetProviderLogo\n\nThis activity is listed twice in the documentation due to the specified version caching path parameter. Including or exluding this parameter results in slightly different behaviour.\n\n__Caching:__ This resource changes very infrequently and can be cached for a longer time.\n\nGet the logo of the provider of the user. In case no logo is know the service will return a 404.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/logo/{{$parameter[\"version\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Providers By User"
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
						"Provider"
					],
					"operation": [
						"Get Providers By User"
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
						"Provider"
					],
					"operation": [
						"Get Providers By User"
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
						"Provider"
					],
					"operation": [
						"Get Providers By User"
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
						"Provider"
					],
					"operation": [
						"Get Providers By User"
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
						"Provider"
					],
					"operation": [
						"Get Providers By User"
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
						"Provider"
					],
					"operation": [
						"Get Providers By User"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Provider Logo"
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
						"Provider"
					],
					"operation": [
						"Get Provider Logo"
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
						"Provider"
					],
					"operation": [
						"Get Provider Logo"
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
						"Provider"
					],
					"operation": [
						"Get Provider Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/logo/{version}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Provider Logo By Version"
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
						"Provider"
					],
					"operation": [
						"Get Provider Logo By Version"
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
						"Provider"
					],
					"operation": [
						"Get Provider Logo By Version"
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
						"Provider"
					],
					"operation": [
						"Get Provider Logo By Version"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "An guid generated for caching. The value does not influence the output of this function. The provider/logo endpoint returns the URI of the current logo with the version.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Provider Logo By Version"
					]
				}
			}
		},
];
