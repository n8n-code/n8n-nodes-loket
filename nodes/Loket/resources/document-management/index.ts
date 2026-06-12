import type { INodeProperties } from 'n8n-workflow';

export const documentManagementDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Document Management"
					]
				}
			},
			"options": [
				{
					"name": "Get Dossier Authorizations By Employer ID",
					"value": "Get Dossier Authorizations By Employer ID",
					"action": "List of authorizations",
					"description": "__Activity name :__ GetDossierAuthorizationsByEmployerId\n\nGet the authorizations per role and per category. Via Qwoater.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents/authorizations"
						}
					}
				},
				{
					"name": "Put Dossier Authorizations By Employer ID",
					"value": "Put Dossier Authorizations By Employer ID",
					"action": "Edit the authorization matrix",
					"description": "__Activity name:__ PutDossierAuthorizationsByEmployerId\n\nEdit the authorizations. Categories not included in de request will be set to inaccessible for all roles.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents/authorizations"
						}
					}
				},
				{
					"name": "Delete Complete Dossier By Employer ID",
					"value": "Delete Complete Dossier By Employer ID",
					"action": "Delete complete dossier",
					"description": "__Activity name:__ DeleteCompleteDossierByEmployerId\n\nDelete all documents in the dossier of an employer and the underlying employments\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents/completedossier"
						}
					}
				},
				{
					"name": "Post Initiate Complete Dossier By Employer ID",
					"value": "Post Initiate Complete Dossier By Employer ID",
					"action": "Generate complete dossier",
					"description": "__Activity name:__ PostInitiateCompleteDossierByEmployerId\n\nInitiate the proces to generate a zip file containing the complete dossier. (via Qwoater)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/{{$parameter[\"employerId\"]}}/documents/completedossier/initiate"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers/employers/{employerId}/documents/authorizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Management"
					],
					"operation": [
						"Get Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Get Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Get Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Get Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Get Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Get Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Get Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Get Dossier Authorizations By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/{employerId}/documents/authorizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Management"
					],
					"operation": [
						"Put Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Put Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Put Dossier Authorizations By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Put Dossier Authorizations By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": {
				"canWrite": {
					"departmentManager": false,
					"employee": false,
					"employer": false,
					"provider": true
				},
				"category": "Arbeidsovereenkomst"
			},
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Document Management"
					],
					"operation": [
						"Put Dossier Authorizations By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /providers/employers/{employerId}/documents/completedossier",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Management"
					],
					"operation": [
						"Delete Complete Dossier By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Delete Complete Dossier By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Delete Complete Dossier By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Delete Complete Dossier By Employer ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/{employerId}/documents/completedossier/initiate",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Document Management"
					],
					"operation": [
						"Post Initiate Complete Dossier By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Post Initiate Complete Dossier By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Post Initiate Complete Dossier By Employer ID"
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
						"Document Management"
					],
					"operation": [
						"Post Initiate Complete Dossier By Employer ID"
					]
				}
			}
		},
];
