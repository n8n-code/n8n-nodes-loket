import type { INodeProperties } from 'n8n-workflow';

export const dataNewBusinessDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data New Business"
					]
				}
			},
			"options": [
				{
					"name": "Get Data New Business Functions",
					"value": "Get Data New Business Functions",
					"action": "Get a list of functions",
					"description": "__Activity name :__  GetDataNewBusinessFunctions <br/> Get a list of functions known by Data New Business. <br/>\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datanewbusiness/functions"
						}
					}
				},
				{
					"name": "Get Data New Business Token",
					"value": "Get Data New Business Token",
					"action": "Get Data New Business token",
					"description": "__Activity name :__ GetDataNewBusinessToken\n\nGet a token for calling the Data New Business (DNB) API.  DNB is a part of Van Spaendonck and with its API, DNB provides users data-based insights such as the salary checker. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datanewbusiness/token"
						}
					}
				},
				{
					"name": "Get Data New Business Token By Employer ID",
					"value": "Get Data New Business Token By Employer ID",
					"action": "Get Data New Business token for an employer",
					"description": "__Activity name :__ GetDataNewBusinessTokenByEmployerId\n\nGet a token for calling the Data New Business (DNB) API.  DNB is a part of Van Spaendonck and with its API, DNB provides users data-based insights such as the salary checker. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/datanewbusinesstoken"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /datanewbusiness/functions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Functions"
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
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Functions"
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
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Functions"
					]
				}
			}
		},
		{
			"displayName": "GET /datanewbusiness/token",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Token"
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
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Token"
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
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Token"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/{employerId}/datanewbusinesstoken",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Token By Employer ID"
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
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Token By Employer ID"
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
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Token By Employer ID"
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
						"Data New Business"
					],
					"operation": [
						"Get Data New Business Token By Employer ID"
					]
				}
			}
		},
];
