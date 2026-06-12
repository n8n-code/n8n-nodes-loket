import type { INodeProperties } from 'n8n-workflow';

export const organizationalEntityDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					]
				}
			},
			"options": [
				{
					"name": "Delete Organizational Entity By Organizational Entity ID",
					"value": "Delete Organizational Entity By Organizational Entity ID",
					"action": "Delete a specific organizational entity record",
					"description": "__Activity name:__ DeleteOrganizationalEntityByOrganizationalEntityId\n\nDelete a organizational entity for the employment\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/providers/employers/employees/employments/organizationalentities/{{$parameter[\"organizationalEntityId\"]}}"
						}
					}
				},
				{
					"name": "Get Organizational Entity By Organizational Entity ID",
					"value": "Get Organizational Entity By Organizational Entity ID",
					"action": "Details of an organizational entity",
					"description": "__Activity name:__ GetOrganizationalEntityByOrganizationalEntityId\n\nGet the details of organizational entity\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/organizationalentities/{{$parameter[\"organizationalEntityId\"]}}"
						}
					}
				},
				{
					"name": "Put Organizational Entity By Organizational Entity ID",
					"value": "Put Organizational Entity By Organizational Entity ID",
					"action": "Edit the details of an organizational entity",
					"description": "__Activity name:__ PutOrganizationalEntityByOrganizationalEntityId\n\nEdit the details for an organizational entity\n\nPossible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the PUT URL.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/providers/employers/employees/employments/organizationalentities/{{$parameter[\"organizationalEntityId\"]}}"
						}
					}
				},
				{
					"name": "Get Organizational Entities By Employment ID",
					"value": "Get Organizational Entities By Employment ID",
					"action": "List of organizational entities for an employment",
					"description": "__Activity name:__ GetOrganizationalEntitiesByEmploymentId\n    \n\nGet the list of organizational entities for an employment\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/organizationalentities"
						}
					}
				},
				{
					"name": "Post Organizational Entity By Employment ID",
					"value": "Post Organizational Entity By Employment ID",
					"action": "Create an organizational entity for an employment",
					"description": "__Activity name:__ PostOrganizationalEntityByEmploymentId\n    \n\nCreate an organizational entity for an employment\n\n__Metadata :__ Possible options for fields of the type 'metadata' can be acquired (GET) by adding `/metadata` to the POST URL.\n\n__Defaults :__ Default values for a new object can be acquired by adding `/defaults' to the POST URL.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/providers/employers/employees/employments/{{$parameter[\"employmentId\"]}}/organizationalentities"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /providers/employers/employees/employments/organizationalentities/{organizationalEntityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Delete Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Organizational Entity ID",
			"name": "organizationalEntityId",
			"required": true,
			"description": "The unique identifier of the organizational entity",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Delete Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Delete Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Delete Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Delete Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/organizationalentities/{organizationalEntityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Organizational Entity ID",
			"name": "organizationalEntityId",
			"required": true,
			"description": "The unique identifier of the organizational entity",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "PUT /providers/employers/employees/employments/organizationalentities/{organizationalEntityId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Organizational Entity ID",
			"name": "organizationalEntityId",
			"required": true,
			"description": "The unique identifier of the organizational entity",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Department",
			"name": "department",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Verkoop\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "The department of the employment.\n\n`department` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "department",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Function Description",
			"name": "deviatingFunctionDescription",
			"type": "string",
			"default": "Directeur",
			"description": "The deviating function description of the employment. This description deviates from the value of the `function` field.",
			"routing": {
				"send": {
					"property": "deviatingFunctionDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Function Group",
			"name": "deviatingFunctionGroup",
			"type": "string",
			"default": "9A",
			"description": "The deviating function group description of the employment. Only applies when a deviating function description is defined.",
			"routing": {
				"send": {
					"property": "deviatingFunctionGroup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Distribution Unit",
			"name": "distributionUnit",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Sales\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Distribution unit, used in several reports and the \"basic wage journal\" functionality. Commonly used as a cost center.\n\n`distributionUnit` is a metadata field within the employer context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "distributionUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Function",
			"name": "function",
			"type": "json",
			"default": "{\n  \"description\": \"Directeur\",\n  \"group\": \"internal\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "The function of the employment.\n\n`function` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "function",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Internal Telephone Extension Number",
			"name": "internalTelephoneExtensionNumber",
			"type": "string",
			"default": "678",
			"description": "The phone number of the standard working location (standplaats) for the employment.",
			"routing": {
				"send": {
					"property": "internalTelephoneExtensionNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Place Of Employment",
			"name": "placeOfEmployment",
			"type": "string",
			"default": "Amsterdam office",
			"description": "The standard working location (standplaats) for the employment.",
			"routing": {
				"send": {
					"property": "placeOfEmployment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Standard Function",
			"name": "standardFunction",
			"type": "json",
			"default": "{\n  \"category\": 1,\n  \"code\": \"A21\",\n  \"key\": 1,\n  \"value\": \"Administrateur\"\n}",
			"description": "The standard (cao)function of the employment.\n\n`standardFunction` is a metadata field within the payroll administration context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "standardFunction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The start date of the entity.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Put Organizational Entity By Organizational Entity ID"
					]
				}
			}
		},
		{
			"displayName": "GET /providers/employers/employees/employments/{employmentId}/organizationalentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entities By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entities By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entities By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entities By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entities By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entities By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entities By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Get Organizational Entities By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "POST /providers/employers/employees/employments/{employmentId}/organizationalentities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Department",
			"name": "department",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Verkoop\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "The department of the employment.\n\n`department` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "department",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Function Description",
			"name": "deviatingFunctionDescription",
			"type": "string",
			"default": "Directeur",
			"description": "The deviating function description of the employment. This description deviates from the value of the `function` field.",
			"routing": {
				"send": {
					"property": "deviatingFunctionDescription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Deviating Function Group",
			"name": "deviatingFunctionGroup",
			"type": "string",
			"default": "9A",
			"description": "The deviating function group description of the employment. Only applies when a deviating function description is defined.",
			"routing": {
				"send": {
					"property": "deviatingFunctionGroup",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Distribution Unit",
			"name": "distributionUnit",
			"type": "json",
			"default": "{\n  \"code\": 2,\n  \"description\": \"Sales\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "Distribution unit, used in several reports and the \"basic wage journal\" functionality. Commonly used as a cost center.\n\n`distributionUnit` is a metadata field within the employer context. Possible values can be managed by the user.\n",
			"routing": {
				"send": {
					"property": "distributionUnit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "endDate",
			"type": "string",
			"default": "2018-10-23",
			"description": "The end date of the entity. The date is up to and including.",
			"routing": {
				"send": {
					"property": "endDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Function",
			"name": "function",
			"type": "json",
			"default": "{\n  \"description\": \"Directeur\",\n  \"group\": \"internal\",\n  \"key\": \"b14acd0d-75d7-4fc8-8b22-4a3924585cab\"\n}",
			"description": "The function of the employment.\n\n`function` is a metadata field within the employer context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "function",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
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
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Internal Telephone Extension Number",
			"name": "internalTelephoneExtensionNumber",
			"type": "string",
			"default": "678",
			"description": "The phone number of the standard working location (standplaats) for the employment.",
			"routing": {
				"send": {
					"property": "internalTelephoneExtensionNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Place Of Employment",
			"name": "placeOfEmployment",
			"type": "string",
			"default": "Amsterdam office",
			"description": "The standard working location (standplaats) for the employment.",
			"routing": {
				"send": {
					"property": "placeOfEmployment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Standard Function",
			"name": "standardFunction",
			"type": "json",
			"default": "{\n  \"category\": 1,\n  \"code\": \"A21\",\n  \"key\": 1,\n  \"value\": \"Administrateur\"\n}",
			"description": "The standard (cao)function of the employment.\n\n`standardFunction` is a metadata field within the payroll administration context. Possible values can be managed by the user.",
			"routing": {
				"send": {
					"property": "standardFunction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "startDate",
			"type": "string",
			"default": "2018-01-01",
			"description": "The start date of the entity.\n\nA (linked chain)[./#section/Data/Date-chains] is maintained within this resource.",
			"routing": {
				"send": {
					"property": "startDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizational Entity"
					],
					"operation": [
						"Post Organizational Entity By Employment ID"
					]
				}
			}
		},
];
