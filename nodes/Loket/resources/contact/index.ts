import type { INodeProperties } from 'n8n-workflow';

export const contactDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					]
				}
			},
			"options": [
				{
					"name": "Delete Contact By Contact ID",
					"value": "Delete Contact By Contact ID",
					"action": "Delete a specific contact",
					"description": "__Activity name :__ DeleteContactByContactId\n\nDelete an existing Contact (for an employee)\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/contacts/{{$parameter[\"contactId\"]}}"
						}
					}
				},
				{
					"name": "Get Contact By Contact ID",
					"value": "Get Contact By Contact ID",
					"action": "Details of a single contact",
					"description": "__Activity name :__ GetContactByContactId  \n\nGet the details of a single contact\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/contacts/{{$parameter[\"contactId\"]}}"
						}
					}
				},
				{
					"name": "Put Contact By Contact ID",
					"value": "Put Contact By Contact ID",
					"action": "Edit a contact",
					"description": "__Activity name :__ PutContactByContactId  \n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n\nEdit the details of a contact\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/contacts/{{$parameter[\"contactId\"]}}"
						}
					}
				},
				{
					"name": "Get Contacts By Employee ID",
					"value": "Get Contacts By Employee ID",
					"action": "List of contacts for an employee",
					"description": "__Activity name :__ GetContactsByEmployeeId\n\nGet list of contacts for an employee\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/contacts"
						}
					}
				},
				{
					"name": "Post Contact By Employee ID",
					"value": "Post Contact By Employee ID",
					"action": "Create a contact for an employee",
					"description": "__Activity name :__ PostContactByEmployeeId\n\n__Metadata :__  Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ No default values\n\nCreate a new contact for an employee\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/{{$parameter[\"employeeId\"]}}/contacts"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/contacts/{contactId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Delete Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "Contact ID",
			"name": "contactId",
			"required": true,
			"description": "The unique identifier of the employee contact detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Delete Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Delete Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Delete Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Delete Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/contacts/{contactId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Get Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "Contact ID",
			"name": "contactId",
			"required": true,
			"description": "The unique identifier of the employee contact detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Get Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Get Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Get Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/contacts/{contactId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "Contact ID",
			"name": "contactId",
			"required": true,
			"description": "The unique identifier of the employee contact detail",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"postalCode\": \"1234 AA\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Moeder",
			"description": "Describes the relationship of the contact to the employee",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
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
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Johanna Bakker",
			"description": "Name of the contact",
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
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "Particularities",
			"name": "particularities",
			"type": "string",
			"default": "Genoemd adres is een priveadres",
			"description": "Extra information about the contact",
			"routing": {
				"send": {
					"property": "particularities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"type": "string",
			"default": "013-12345678",
			"description": "The phone number of the contact",
			"routing": {
				"send": {
					"property": "phoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Put Contact By Contact ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/{employeeId}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Get Contacts By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Get Contacts By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Get Contacts By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Get Contacts By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Get Contacts By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Get Contacts By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Get Contacts By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Get Contacts By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/{employeeId}/contacts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Employee ID",
			"name": "employeeId",
			"required": true,
			"description": "The unique identifier of the employee",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "address",
			"type": "json",
			"default": "{\n  \"city\": \"Leiden\",\n  \"country\": {\n    \"isoCode\": \"NL\",\n    \"key\": 1,\n    \"value\": \"Netherlands\"\n  },\n  \"houseNumber\": 12,\n  \"houseNumberAddition\": \"D\",\n  \"postalCode\": \"1234 AA\",\n  \"street\": \"Voordijk\"\n}",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "Moeder",
			"description": "Describes the relationship of the contact to the employee",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
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
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "Johanna Bakker",
			"description": "Name of the contact",
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
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Particularities",
			"name": "particularities",
			"type": "string",
			"default": "Genoemd adres is een priveadres",
			"description": "Extra information about the contact",
			"routing": {
				"send": {
					"property": "particularities",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
					]
				}
			}
		},
		{
			"displayName": "Phone Number",
			"name": "phoneNumber",
			"type": "string",
			"default": "013-12345678",
			"description": "The phone number of the contact",
			"routing": {
				"send": {
					"property": "phoneNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Contact"
					],
					"operation": [
						"Post Contact By Employee ID"
					]
				}
			}
		},
];
