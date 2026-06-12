import type { INodeProperties } from 'n8n-workflow';

export const applicationsetsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					]
				}
			},
			"options": [
				{
					"name": "Delete Provider Application Set By Application Set ID",
					"value": "Delete Provider Application Set By Application Set ID",
					"action": "Delete a specific applicationset",
					"description": "__Activity name:__ DeleteProviderApplicationSetByApplicationSetId\n\nDelete an applicationset for the provider\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/applicationsets/{{$parameter[\"applicationSetId\"]}}"
						}
					}
				},
				{
					"name": "Put Provider Application Set By Application Set ID",
					"value": "Put Provider Application Set By Application Set ID",
					"action": "Edit the details of an applicationset",
					"description": "__Activity name:__ PutProviderApplicationSetByApplicationSetId\n\n\n Edit the details for an applicationset.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/applicationsets/{{$parameter[\"applicationSetId\"]}}"
						}
					}
				},
				{
					"name": "Get Applicationsets By Provider ID",
					"value": "Get Applicationsets By Provider ID",
					"action": "List of applicationsets for a provider",
					"description": "__Activity name:__ GetApplicationsetsByProviderId\n    \n\nGet the list of Applicationsets for a provider. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/applicationsets"
						}
					}
				},
				{
					"name": "Post Application Set By Provider ID",
					"value": "Post Application Set By Provider ID",
					"action": "Create an applicationset for a provider",
					"description": "__Activity name:__ PostApplicationSetByProviderId\n    \n\nCreate an applicationset for a provider.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/{{$parameter[\"providerId\"]}}/applicationsets"
						}
					}
				},
				{
					"name": "Delete User Application Set By Application Set ID",
					"value": "Delete User Application Set By Application Set ID",
					"action": "Delete a specific applicationset for a user",
					"description": "__Activity name:__ DeleteUserApplicationSetByApplicationSetId\n\nDelete an applicationset for the user\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/applicationsets/{{$parameter[\"applicationSetId\"]}}"
						}
					}
				},
				{
					"name": "Put User Application Set By Application Set ID",
					"value": "Put User Application Set By Application Set ID",
					"action": "Edit the details of an applicationset for a user",
					"description": "__Activity name:__ PutUserApplicationSetByApplicationSetId\n\n\n Edit the details for an applicationset.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/users/applicationsets/{{$parameter[\"applicationSetId\"]}}"
						}
					}
				},
				{
					"name": "Get Applicationsets By User ID",
					"value": "Get Applicationsets By User ID",
					"action": "List of applicationsets for a user",
					"description": "__Activity name:__ GetApplicationsetsByUserId\n    \n\nGet the list of Applicationsets for a user. \n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"userId\"]}}/applicationsets"
						}
					}
				},
				{
					"name": "Post Application Set By User ID",
					"value": "Post Application Set By User ID",
					"action": "Create an applicationset for a user",
					"description": "__Activity name:__ PostApplicationSetByUserId\n    \n\nCreate an applicationset for a user.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users/{{$parameter[\"userId\"]}}/applicationsets"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/applicationsets/{applicationSetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Delete Provider Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Application Set ID",
			"name": "applicationSetId",
			"required": true,
			"description": "The unique identifier of the Applicationset",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Delete Provider Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Delete Provider Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Delete Provider Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Delete Provider Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/applicationsets/{applicationSetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Application Set ID",
			"name": "applicationSetId",
			"required": true,
			"description": "The unique identifier of the Applicationset",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Application Set Type",
			"name": "applicationSetType",
			"type": "options",
			"default": "Products",
			"description": "The type of the set \n",
			"options": [
				{
					"name": "Products",
					"value": "Products"
				},
				{
					"name": "Export Data Template",
					"value": "ExportDataTemplate"
				},
				{
					"name": "Rights",
					"value": "Rights"
				}
			],
			"routing": {
				"send": {
					"property": "applicationSetType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "json object",
			"description": "Contains an array of objects in json structure.\n",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Exportset Dienstverband",
			"description": "Name of the exportset\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put Provider Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/{providerId}/applicationsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/{providerId}/applicationsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Application Set Type",
			"name": "applicationSetType",
			"type": "options",
			"default": "Products",
			"description": "The type of the set \n",
			"options": [
				{
					"name": "Products",
					"value": "Products"
				},
				{
					"name": "Export Data Template",
					"value": "ExportDataTemplate"
				},
				{
					"name": "Rights",
					"value": "Rights"
				}
			],
			"routing": {
				"send": {
					"property": "applicationSetType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "json object",
			"description": "Contains an array of objects in json structure.\n",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By Provider ID"
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
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Exportset Dienstverband",
			"description": "Name of the exportset\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By Provider ID"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/applicationsets/{applicationSetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Delete User Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Application Set ID",
			"name": "applicationSetId",
			"required": true,
			"description": "The unique identifier of the Applicationset",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Delete User Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Delete User Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Delete User Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Delete User Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /users/applicationsets/{applicationSetId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Application Set ID",
			"name": "applicationSetId",
			"required": true,
			"description": "The unique identifier of the Applicationset",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Application Set Type",
			"name": "applicationSetType",
			"type": "options",
			"default": "Products",
			"description": "The type of the set \n",
			"options": [
				{
					"name": "Products",
					"value": "Products"
				},
				{
					"name": "Export Data Template",
					"value": "ExportDataTemplate"
				},
				{
					"name": "Rights",
					"value": "Rights"
				}
			],
			"routing": {
				"send": {
					"property": "applicationSetType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "json object",
			"description": "Contains an array of objects in json structure.\n",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
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
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Exportset Dienstverband",
			"description": "Name of the exportset\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Put User Application Set By Application Set ID"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{userId}/applicationsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of an user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Get Applicationsets By User ID"
					]
				}
			}
		},
		{
			"displayName": "POST /users/{userId}/applicationsets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By User ID"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "userId",
			"required": true,
			"description": "The unique identifier of an user",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By User ID"
					]
				}
			}
		},
		{
			"displayName": "Application Set Type",
			"name": "applicationSetType",
			"type": "options",
			"default": "Products",
			"description": "The type of the set \n",
			"options": [
				{
					"name": "Products",
					"value": "Products"
				},
				{
					"name": "Export Data Template",
					"value": "ExportDataTemplate"
				},
				{
					"name": "Rights",
					"value": "Rights"
				}
			],
			"routing": {
				"send": {
					"property": "applicationSetType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By User ID"
					]
				}
			}
		},
		{
			"displayName": "Data",
			"name": "data",
			"type": "string",
			"default": "json object",
			"description": "Contains an array of objects in json structure.\n",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By User ID"
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
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By User ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Exportset Dienstverband",
			"description": "Name of the exportset\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Applicationsets"
					],
					"operation": [
						"Post Application Set By User ID"
					]
				}
			}
		},
];
