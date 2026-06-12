import type { INodeProperties } from 'n8n-workflow';

export const achmeaDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Achmea"
					]
				}
			},
			"options": [
				{
					"name": "Get Achmea Insurance Contracts By User ID",
					"value": "Get Achmea Insurance Contracts By User ID",
					"action": "list of insurance contracts",
					"description": "__Activity name :__ GetAchmeaInsuranceContractsByUserId\nGet a list of all Achmea insurance contracts accessible to the current user\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/achmeainsurancecontracts"
						}
					}
				},
				{
					"name": "Get Wage Percentages By Achmea Insurance Contract ID",
					"value": "Get Wage Percentages By Achmea Insurance Contract ID",
					"action": "list of wage percentages for an insurance contract",
					"description": "__Activity name :__ GetWagePercentagesByAchmeaInsuranceContractId\n\nGet a list of all wage percentages (year-end bonus and holiday allowance percentages) for an Achmea insurance contract.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/achmeainsurancecontracts/{{$parameter[\"achmeaInsuranceContractId\"]}}/insuredwagecalculationpercentages"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /achmeainsurancecontracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Achmea"
					],
					"operation": [
						"Get Achmea Insurance Contracts By User ID"
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
						"Achmea"
					],
					"operation": [
						"Get Achmea Insurance Contracts By User ID"
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
						"Achmea"
					],
					"operation": [
						"Get Achmea Insurance Contracts By User ID"
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
						"Achmea"
					],
					"operation": [
						"Get Achmea Insurance Contracts By User ID"
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
						"Achmea"
					],
					"operation": [
						"Get Achmea Insurance Contracts By User ID"
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
						"Achmea"
					],
					"operation": [
						"Get Achmea Insurance Contracts By User ID"
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
						"Achmea"
					],
					"operation": [
						"Get Achmea Insurance Contracts By User ID"
					]
				}
			}
		},
		{
			"displayName": "GET /achmeainsurancecontracts/{achmeaInsuranceContractId}/insuredwagecalculationpercentages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Achmea"
					],
					"operation": [
						"Get Wage Percentages By Achmea Insurance Contract ID"
					]
				}
			}
		},
		{
			"displayName": "Achmea Insurance Contract ID",
			"name": "achmeaInsuranceContractId",
			"required": true,
			"description": "The unique identifier of an Achmea insurance contract",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Achmea"
					],
					"operation": [
						"Get Wage Percentages By Achmea Insurance Contract ID"
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
						"Achmea"
					],
					"operation": [
						"Get Wage Percentages By Achmea Insurance Contract ID"
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
						"Achmea"
					],
					"operation": [
						"Get Wage Percentages By Achmea Insurance Contract ID"
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
						"Achmea"
					],
					"operation": [
						"Get Wage Percentages By Achmea Insurance Contract ID"
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
						"Achmea"
					],
					"operation": [
						"Get Wage Percentages By Achmea Insurance Contract ID"
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
						"Achmea"
					],
					"operation": [
						"Get Wage Percentages By Achmea Insurance Contract ID"
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
						"Achmea"
					],
					"operation": [
						"Get Wage Percentages By Achmea Insurance Contract ID"
					]
				}
			}
		},
];
